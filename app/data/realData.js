import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import * as _ from 'lodash';

import { dbData, firstKeyName } from '../config/dbData'

const parseData = (data) => {
    let finalData = [];

    data.forEach((obj) => {
        let spFound = (finalData.find( e => {
          return e.id === obj.id
        }))
      
        if (spFound) {
          spFound.nombrecomun.push(obj.nombrecomun);
      
        } else {
          finalData.push(
            {
              ...obj,
              nombrecomun: [obj.nombrecomun]
            }
          )
        }
    });

    return finalData
}


const addImagesToParsedData = (imagesData, basicData, resolve) => {
    let finalData = basicData.map((i) => {
        return {
            ...i,
            imagen: imagesData.filter(e => {
                return e.ID === i.id
            }).map( img => {
                // const fileReaderInstance = new FileReader();
                // fileReaderInstance.readAsDataURL(new Blob([img.Imagen], {type : 'image/jpeg'})); 
                // fileReaderInstance.onload = () => {
                //     return fileReaderInstance.result;                
                // }
                // return new Blob([img.Imagen], {type : 'image/jpeg'})
                return img.Imagen
            })
        }
    })

    // console.log(imagesData)
    // console.log(finalData);
    resolve(finalData)
    // resolve(basicData);
}


const getImages = (basicData, resolve, reject, db ) => {
    db.transaction(tx => {
        // sending 4 arguments in executeSql
        tx.executeSql(`
        SELECT ID, TestBase64 as Imagen from SpDatos
        LEFT JOIN SpImagenes ON
            Spdatos.ID = SpImagenes.SpID
            
        `, null, // passing sql query and parameters:null
          // success callback which sends two things Transaction object and ResultSet Object
          (txObj, { rows: { _array } }) => {  
            addImagesToParsedData(_array, basicData, resolve)  
          } ,
          // failure callback which sends two things Transaction object and Error
          (txObj, error) => {console.log('Error ', error); reject([]) }
          ) // end executeSQL
    }) // end transaction
}


const getData = async () => {
    //Import db chinook from assets
    // console.log(firstKeyName);
    let dbAssetdir = Asset.fromModule(require(`../assets/db/clave_1.db`)).uri;
    let data = [];
    
    try{
        await FileSystem.downloadAsync(dbAssetdir, dbData.firstKeyFile);
    
    } catch(e){
        console.log(`Excepcion reading ${firstKeyName}`);
        console.log('En REALDATA.JS ', e);
        await FileSystem.deleteAsync(dbDir);
    }

    let db = SQLite.openDatabase(firstKeyName);
    // console.log(db);

    return new Promise((resolve, reject) => db.transaction(tx => {
      // sending 4 arguments in executeSql
      tx.executeSql(`
      SELECT id, nombrecientifico, descripcion, nombrecomun, familia FROM 
      (SELECT * FROM SpDatos
       LEFT JOIN SpNombresComunes ON
           SpDatos.ID = SpNombresComunes.SpID) as SubTable1
    `, null, // passing sql query and parameters:null
        // success callback which sends two things Transaction object and ResultSet Object
        (txObj, { rows: { _array } }) => {  
            // resolve(parseData(_array)) 
            getImages(parseData(_array), resolve, reject, db)
        } ,
        // failure callback which sends two things Transaction object and Error
        (txObj, error) => {console.log('Error ', error); reject([]) }
        ) // end executeSQL
    }) // end transaction
    )

}



export default getData;
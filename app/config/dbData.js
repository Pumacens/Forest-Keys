import * as FileSystem from "expo-file-system";
export let  firstKeyName = 'clave_1.db';

export let dbData = {
    dbDir: `${FileSystem.documentDirectory}SQLite`,
    firstKeyFile: `${FileSystem.documentDirectory}SQLite/${firstKeyName}`,
}
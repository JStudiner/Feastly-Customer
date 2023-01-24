import { createContext } from 'react';



export const UserInfo = createContext({
    userIntakeData: { name: '', phoneNum: '' ,password:''},
    setUserIntakeData: (data: {name:string, phoneNum:string, password:string})=>{}
});

import React,{useState} from 'react'

import Login from '../screens/Login'
import UserIntakeV1 from '../screens/UserIntakeV1' 
import UserIntakeV2 from '../screens/UserIntakeV2'

import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {UserInfo} from "../context/userInfo"

const LoginStackNav=createNativeStackNavigator()

const LoginNavigator = () => {
    const [userIntakeData,setUserIntakeData]=useState({name:"",phoneNum:"",password:""})

    return(
        <UserInfo.Provider value={{userIntakeData,setUserIntakeData}}>
        <LoginStackNav.Navigator>
            <LoginStackNav.Screen
            name="login"
            component={Login}/>
            <LoginStackNav.Screen
            name="userintakev1"
            component={UserIntakeV1}/>
            <LoginStackNav.Screen
            name="userintakev2"
            component={UserIntakeV2}/>
        </LoginStackNav.Navigator>
        </UserInfo.Provider>
    )
}

export default LoginNavigator
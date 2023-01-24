import React, { useContext, useState } from 'react'
import {View,Text} from 'react-native'

import TwoForm from '../components/TwoForm'

import { UserInfo } from '../context/userInfo'
interface UserIntakeV2Props{
    navigation:any
}
const UserIntakeV2:React.FC<UserIntakeV2Props>=({navigation}) => {
    
    const {userIntakeData,setUserIntakeData}=useContext(UserInfo)
    const [confirm,setConfirm]=useState("")
    console.log(userIntakeData)
    const handlePassword=(password:string) => {
        setUserIntakeData({...userIntakeData,password})
      }

    const handleConfirm=(conf:string) => {
      
      setConfirm(conf)
    }
  return(
    <>
    <TwoForm navigation={navigation} placeholder1="Enter a secure password" placeholder2='Confirm Password' 
    set1={handlePassword}
    set2={handleConfirm}
    
      buttontext={confirm===userIntakeData.password?"Next":"Passwords must match"}
      title="Now set a secure password for your account"
      navtarget={confirm===userIntakeData.password?"login":"userintakev2"}

      />
    
    </>
  )
}

export default UserIntakeV2
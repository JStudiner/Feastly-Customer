import React, { useState ,useContext} from 'react'
import {View,Text} from 'react-native'

import TwoForm from '../components/TwoForm'

import { UserInfo } from '../context/userInfo'
interface UserIntakeV1Props{
    navigation:any
}

const UserIntakeV1:React.FC<UserIntakeV1Props>=({navigation}) => {
    const {userIntakeData,setUserIntakeData}=useContext(UserInfo)

    
    const handleName=(name:string) => {
      setUserIntakeData({...userIntakeData,name})
      
    }
    const handlephoneNum=(phoneNum:string) => {
        setUserIntakeData({...userIntakeData,phoneNum})
      }
  return(
    <>
    <TwoForm navigation={navigation} placeholder1="Full Name" placeholder2='Phone Number ' 
    set1={handleName}
    set2={handlephoneNum}
    
      buttontext="Next"
      title="Let's get started with your..."
      navtarget='userintakev2'
      />
    </>
  )
}

export default UserIntakeV1
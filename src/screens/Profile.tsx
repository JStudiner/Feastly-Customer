import React from "react";
import { Text,View } from "react-native";
import {Auth} from "aws-amplify"
import Button from "../components/Button";
const Profile = () => {
  const handleSignOut = async () => {
    try{
      await Auth.signOut()
    } catch(error){
      console.log(error)
    }
  }

  return (
   
      <View style={{width:"100%", justifyContent:"center",height:"100%", display:"flex", alignItems:"center"}}>
      <Button text="Sign Out" textColor="black" backgroundColor="#F09441" width="50%" onPress={handleSignOut}/>
      </View>
    
  );
};

export default Profile;

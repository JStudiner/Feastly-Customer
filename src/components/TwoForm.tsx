import React ,{useState} from 'react'
import { View ,StyleSheet,Text} from 'react-native'

import Button from './Button'
import TextInputBox from './TextInput'

interface TwoFormProps {
    navigation: any;
    title:string
    placeholder1:string 
    placeholder2:string 
    set1:(name:string)=>void
    set2:(name:string)=>void
    buttontext:string
    navtarget:string
}

const TwoForm:React.FC<TwoFormProps> = (props) => {
    const {navigation,title,placeholder1,placeholder2,buttontext,navtarget}=props
    const [val1,setVal1]=useState("")
    
    const handle1 =(data:string) => {
      props.set1(data)
    }
    
    const handle2=(data:string) => {
      props.set2(data)
    }
    return (
    <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
    <TextInputBox
         width="70%"
         place={placeholder1}
         onEnter={handle1}
       />
    <TextInputBox
         width="70%"
         place={placeholder2}
         onEnter={handle2}
       />
    <Button
    text={buttontext}
    backgroundColor="#F5D6B8"
    textColor="black"
    width="70%"
    onPress={ () => {
      navigation.navigate(navtarget)
    }}
    />
    </View>
    );
    };

export default TwoForm

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 19,
     
    }
  });
  
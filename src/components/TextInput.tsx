import React, {useState} from 'react'

import {Text,View,StyleSheet,TextInput } from 'react-native'
interface TextInputBoxProps {
    icon?: any,
    textColor?: string,
    backgroundColor?: string,
    onPress?: () => void,
    width?: string,
    onEnter: (text:string) => void,
    place: string
  }
  
  const TextInputBox: React.FC<TextInputBoxProps> = (props) => {
      const [text, setText] = useState("");
      const { icon,textColor,backgroundColor,onPress,width,onEnter,place } = props;
      const color=textColor || 'black';
      return(
          <View style={[styles.wrapper, {width},{backgroundColor}]}>
              <View style={styles.buttonTextWrapper}>
                  {icon}
                  <TextInput 
                  style={{color}} 
                  onChangeText={setText}
                  placeholder={place}
                  onEndEditing={()=>{
                      onEnter(text)
                  }}
                  >
                      {text}
                  </TextInput>
              </View>
          </View>
      )
  }

  export default TextInputBox

const styles=StyleSheet.create({
   
    wrapper:{
        
        padding: 15,
        display: 'flex',
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#000000',
        marginBottom: 15,
        alignItems: 'center'
    },
    buttonTextInput: {
        fontSize:18,
        width: '100%',
        textAlign: 'flex-start'
    },
    buttonTextWrapper:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})
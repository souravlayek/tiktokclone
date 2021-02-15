import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
const ActionItem = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.clicked}>
        <>
      {/* <Icon name={props.icon} size={30} color="white" /> */}
      {props.icon}
      {props.data.length !== 0 &&
      <Text style={{fontSize: 16, textAlign: "center", color:"white", textTransform:"uppercase"}}>{props.data}</Text>}
    </>
    </TouchableOpacity>
    </View>
  )
}

export default ActionItem

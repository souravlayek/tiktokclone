import React from 'react'
import { View, Text } from 'react-native'

const DummyPage = (props) => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
      <Text style={{fontSize: 30, textAlign: "center"}}>This Is a dummy {props.route.name} page</Text>
    </View>
  )
}

export default DummyPage

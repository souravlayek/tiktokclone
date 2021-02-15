import React from 'react'
import { View, Text } from 'react-native'

const ErrorPage = () => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
      <Text style={{fontSize: 30, textAlign: "center"}}>No Internet connection please check</Text>
    </View>
  )
}

export default ErrorPage

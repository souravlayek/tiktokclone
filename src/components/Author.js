import React from 'react'
import { View,  Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Author = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image style={{width: 40, height: 40}} resizeMode="cover" source={require("../assets/woman.jpg")} />
      </View>
      <Ionicons style={styles.add} name="ios-add-circle" size={20} color="red" />
    </View>
  )
}
const styles = StyleSheet.create({
  imageContainer: {
    width:40,
    height:40,
    borderRadius: 20,
    overflow: "hidden",
  },
  container: {
    position: "relative"
  },
  add:{
    display: "none",
    position: "absolute",
    bottom: -15,
    alignSelf:"center"
  }
})

export default Author

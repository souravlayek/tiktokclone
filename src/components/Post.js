import React,{useState} from 'react'
import { View, Text, StyleSheet,Dimensions, TouchableWithoutFeedback } from 'react-native'
import Video from 'react-native-video';


// DoubleTapHandler
const Post = (props) => {
  const [paused, setPaused] = useState(false)
  const [count, setCount] = useState(1)
  const [timer, setTimer] = useState(false)


  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {
        setCount(prev => prev + 1)
        if (count === 2) {
            clearTimeout(timer)
            props.clicked(props)
        } else {
            let backTimer = setTimeout(() => {
              setCount(1)
              setPaused(prev => !prev)
            }, 200)
            setTimer(backTimer)
        }

    }} >
          <Video
            paused={paused}
            style={styles.video}
            source={{uri: props.videoLink}}
            repeat={true}
            resizeMode="cover"
            onError={props.errorOcc}
            muted={false}
            />
        </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 50
  },
  video: {
    position:"absolute",
     top:0,left: 0, bottom: 0, right: 0
  }
})


export default Post

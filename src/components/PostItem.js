import React from 'react'
import { View, Text, StyleSheet,Dimensions } from 'react-native'
import Post from '../components/Post';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ActionItem from '../components/ActionItem';
import Author from '../components/Author';
import { useDispatch } from "react-redux";
import { likeVideo, removeItem, unLikeVideo } from '../store/Action';


const PostItem = (props) => {
  const dispatch = useDispatch()
  const like = (id) => {
    dispatch(likeVideo(id))
  }
  const removeVideo = (id) => {
    dispatch(removeItem(id))
  }
  const unlike = (id) => {
    dispatch(unLikeVideo(id))
  }
  return (
    <View>
      <Post clicked ={props.video.liked ? ()=>unlike(props.video.id) :()=>like(props.video.id)} videoLink={props.video.playbackUrl} errorOcc={() => removeVideo(props.video.id)} />
      <View style={styles.overlayContainer}>
        <View style={styles.details}>
          <Text style={styles.author}>@souravLayek</Text>
          <Text style={styles.caption}>dummy caption for this post</Text>
          <View style={styles.song}>
            <FontAwsome name="music" size={20} color="white" />
            <Text style={styles.songName}>dummy song name</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <Author />
          <ActionItem clicked ={props.video.liked ? ()=>unlike(props.video.id) :()=>like(props.video.id)} icon={<FontAwsome name="heart" size={30} color={props.video.liked ? "red" :"white"} />} data={props.video.like_count} />
          <ActionItem icon={<AntDesign name="message1" size={30} color="white" />} data="" />
          <ActionItem icon={<FontAwsome name="share" size={30} color="white" />} data="" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlayContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  details: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 100,
    justifyContent: "space-between"
  },
  actions: {
    position: "absolute",
    right: 0,
    bottom: 50,
    paddingHorizontal: 10,
    height: Dimensions.get('window').height / 3,
    justifyContent: "space-between",
    alignItems: "center"
  },
  author: {
    fontSize: 20,
    color: "white",

  },
  caption: {
    fontSize: 18,
    color: "rgb(207, 207, 207)"

  },
  song:{
    flexDirection: "row",
    marginTop: 10
  },
  songName: {
    color: "white",
    paddingLeft: 10,
    fontSize: 18
  }
})

export default PostItem

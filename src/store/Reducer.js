import {APPEND_DATA, LIKE_VIDEO, REMOVE_ITEM, UNLIKE_VIDEO} from "./Action"
import { v4 as uuidv4 } from 'uuid';


const initialState = {
  videos: []
}
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_DATA:
      const updatedList = action.data.map(item => ({...item, liked: false, id: uuidv4(), like_count: 0}))
      return {...state, videos: [...state.videos, ...updatedList]}
    case LIKE_VIDEO:
      const updateLiked = state.videos.map(item => {
        if (item.id === action.data) {
          return {...item, liked: true, like_count: item.like_count += 1}
        } else {
          return item
        }})
      return {...state, videos: updateLiked}
      case UNLIKE_VIDEO:
        const updateUnlike = state.videos.map(item => {
          if (item.id === action.data) {
            return {...item, liked: false, like_count: item.like_count -= 1}
          } else {
            return item
          }})
        return {...state, videos: updateUnlike}
    case REMOVE_ITEM:
      const updatedItemList = state.videos.filter(item => item.id !== action.data)
      return {...state, videos: updatedItemList}
    default:
      return state;
  }i

}
export default Reducer

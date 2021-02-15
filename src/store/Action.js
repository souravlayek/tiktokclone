export const APPEND_DATA = "APPEND_DATA"
export const LIKE_VIDEO = "LIKE_VIDEO"
export const UNLIKE_VIDEO = "UNLIKE_VIDEO"
export const REMOVE_ITEM = "REMOVE_ITEM"


export const appendData = (value) => {
  return {
    type: APPEND_DATA,
    data: value
  }
}

export const likeVideo = (value) => {
  return {
    type: LIKE_VIDEO,
    data: value
  }
}
export const unLikeVideo = (value) => {
  return {
    type: UNLIKE_VIDEO,
    data: value
  }
}
export const removeItem = (value) => {
  return {
    type: REMOVE_ITEM,
    data: value
  }
}

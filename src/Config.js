import axios from "axios"


export const ENDPOINT = "https://europe-west1-boom-dev-7ad08.cloudfunctions.net/videoFeed"

export const getData = async (page) => {
  const res = await axios.post(ENDPOINT,{page:page})
  if (await res.status === 200) {
   return await res.data;
  }else{
    return false;
  }
  // const data = await res.data;
}

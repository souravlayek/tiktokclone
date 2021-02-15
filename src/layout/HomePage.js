import React,{useEffect, useState} from 'react'
import { View, Dimensions } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { appendData } from "../store/Action";
import PostItem from "../components/PostItem";
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import {ENDPOINT, getData} from "../Config"


const ViewTypes = {
  FULL: 0,
  HALF_LEFT: 1,
  HALF_RIGHT: 2
};


const HomePage = () => {
  const dispatch = useDispatch()
  const [pageNumber, setPageNumber] = useState(0)
  const [lastPage, setLastPage] = useState(undefined)
  const [dataprovider, setDataprovider] = useState()
  const state = useSelector(state => state)
  const callApi = async () => {
    if (lastPage !== pageNumber) {
      const data = await getData(pageNumber)
      dispatch(appendData(await data))
      setLastPage(pageNumber)
    }
  }
  let { width, height } = Dimensions.get("window");
  let dataproviderob = new DataProvider((r1) => {
    return r1;
})

const _layoutProvider = new LayoutProvider(
      index => {
          return ViewTypes.FULL
      },
      (type, dim) => {
          switch (type) {
              case ViewTypes.HALF_LEFT:
                  dim.width = width / 2;
                  dim.height = 160;
                  break;
              case ViewTypes.HALF_RIGHT:
                  dim.width = width / 2;
                  dim.height = 160;
                  break;
              case ViewTypes.FULL:
                  dim.width = width;
                  dim.height = height;
                  break;
              default:
                  dim.width = 100;
                  dim.height = 100;
          }
      }
    );
  useEffect(() => {
    callApi()


  }, [])
  useEffect(() => {
    setDataprovider(dataproviderob.cloneWithRows(state.videos))
  }, [state])

  const _rowRenderer = (_, data) => {
    //You can return any view here, CellContainer has no special significance
        return (
                <PostItem video={data} />
            );
}

if (dataprovider === undefined || state.videos.length === 0) {
  return null
}
  return (

    <View style={{ width: '100%', height: Dimensions.get('window').height }}>
      <RecyclerListView
        // style={{flex: 1}}
        dataProvider={dataprovider}
        layoutProvider={_layoutProvider}
        rowRenderer={(type, data) => _rowRenderer(type, data)}
        canChangeSize={true}
        scrollViewProps={{snapToInterval: height, showsVerticalScrollIndicator: false, snapToAlignment: "start", decelerationRate: "fast"}}
        renderAheadOffset={height}
        onEndReachedThreshold={height}
        onEndReached={() => {setPageNumber(prev => prev +1); callApi()}}
      />
      {/* {state.videos ? state.videos.map(video => <PostItem key={video.id} video={video} />) : <></>} */}
    </View>
  )
}


export default HomePage

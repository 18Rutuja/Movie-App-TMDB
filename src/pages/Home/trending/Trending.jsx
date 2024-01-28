import React, {useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTabs/SwitchTab'
import useFetch from "../../../Hooks/UseFetch"
import Carousel from '../../../components/carousel/Carousel'
import Genres from '../../../components/genres/Genres'
const Trending = () => {
    const [endPoint, setEndPoint] = useState("day")
    
    const {data , loading} = useFetch(`/trending/all/${endPoint}`)


    const onTabChange = (tab) => {
        setEndPoint(tab === "Day" ? "day" : "week");
    };
  return (
    <div className='carouselSection'>
     <ContentWrapper>
        <span className='carouselTitle'>
            Trending
        </span>
        <SwitchTab data ={["Day" , "Week"]} onTabChange={onTabChange}/>
     </ContentWrapper>
     <Carousel data = {data?.results} loading ={loading} />
      <Genres/>

    </div>
  )
}
export default Trending

import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import conferencesApi from "../hooks/conferencesApi";
import userConferenceApi from "../hooks/userConferenceApi";
import searchConferenceApi from "../hooks/searchConferenceApi"
import * as storage from '../utils/storage'



const API = 'http://localhost:3006/api/conferences';




// const handleSearch= async (search) =>{
//   const responseJson = await searchConferenceApi(search);
//   console.log(responseJson.result)
//  }
const Home = () =>{ 
 
  const infoUser =  storage.getUser();

  let listConference = null;

  if(infoUser){
    const API2 = `http://localhost:3006/api/conferences/conferenceByUser/${infoUser.id}`;
    listConference = userConferenceApi(API2);
  }
  
  
  const initialState = conferencesApi(API);
  
  return (
    <Layout>
      <Header />
      {/* <Search /> */}
      {/* <Search handleSearch={handleSearch} /> */}

      {listConference && listConference.mylist && listConference.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {listConference.mylist.map(item =>
              <CarouselItem key={item._id} {...item} from="user" />
            )}
          </Carousel>
        </Categories>
      )}

      <Categories title="Conferencias">
        <Carousel>
          {initialState && initialState.trends && initialState.trends.map(item =>
            <CarouselItem key={item._id} {...item} from="general" />
          )}
        </Carousel>
      </Categories>

      {/* <Categories title="UX design">
        <Carousel>
          {initialState && initialState.originals && initialState.originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories> */}

      <Footer />
    </Layout>
  )
};


export default Home;
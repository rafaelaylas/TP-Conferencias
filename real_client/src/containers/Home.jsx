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

const API = 'http://localhost:3006/api/conferences';

const API2 = 'http://localhost:3006/api/conferences/conferenceByUser/2247929285317327';



// const handleSearch= async (search) =>{
//   const responseJson = await searchConferenceApi(search);
//   console.log(responseJson.result)
//  }
const Home = () =>{ 
  // let userId = 0;
  // window.FB.getLoginStatus(response => {
  //   if(response.status === "connected") {
  //       // leer los datos del usuario
  //        userId = response.authResponse.userID 
  //   }
  // });

  const initialState = conferencesApi(API);

  const listConference = userConferenceApi(API2);
  console.log('InitialState');
   console.log(initialState);
   console.log(listConference);
   
  
  return (
    <Layout>
      <Header />
      <Search />
      {/* <Search handleSearch={handleSearch} /> */}

      {listConference.mylist && listConference.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {listConference.mylist.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
      )}

      <Categories title="Conferencias">
        <Carousel>
          {initialState && initialState.trends && initialState.trends.map(item =>
            <CarouselItem key={item.id} {...item} />
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
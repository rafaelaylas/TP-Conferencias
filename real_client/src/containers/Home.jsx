import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import conferencesApi from "../hooks/conferencesApi";
// import userConferencesApi from "../hooks/userConferencesApi";

const API = 'http://localhost:3006/api/conferences';

// const apiPersist = 'http://localhost:3006/api/user-conferences/';


const Home = () =>{
  const initialState = conferencesApi(API);

  // console.log(userConferencesApi(apiPersist));

  

  return (
    <Layout>
      <Header />
      <Search />

      {initialState.mylist && initialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {initialState.mylist.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState && initialState.trends && initialState.trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platfix">
        <Carousel>
          {initialState && initialState.originals && initialState.originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

      <Footer />
    </Layout>
  )
};


export default Home;
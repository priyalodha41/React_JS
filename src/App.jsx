import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Aboutus from "./components/Aboutus";
import Maindish from "./components/Maindish";
import Dailyoffers from "./components/Dailyoffers";
import Ourblog from "./components/Ourblog";
import Reservetable from "./components/Reservetable";


const App = () => {

  return (
    <div>
      <div className="bg-image">
           <Header />
            <Banner />
      </div>
      <Aboutus/>
      <Maindish />
      <Dailyoffers />
      <Ourblog />
      <Reservetable />
      
     </div>
  );
};

export default App;

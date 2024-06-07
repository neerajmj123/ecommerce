import React from "react";
import Hero from "./Hero/Hero";
import Popular from "./Popular/Popular";
import NewCollection from "./NewCollection/NewCollection";
const Shop =()=>{
    return(
        <div>
          <Hero/>
          <NewCollection/>
          <Popular/>
        </div>
    )
}
export default Shop
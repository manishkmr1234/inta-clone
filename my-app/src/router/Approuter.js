import React from "react";
import {BrowserRouter, Route ,Routes} from "react-router-dom";
import Landing from  "../component/Landing"
import NewPost from  "../component/NewPost"


export default function Approuter(){

    return <BrowserRouter>
    <Routes>
        <Route  path= "/" element={<Landing/>} />
        <Route  path= "new" element={<NewPost/>} />
        {/* <Route  path= "post" element={<PostView/>}>
       
        <Route  path= "all" element={<LandingComponent/>} />
        </Route> */}

    </Routes>
    
    </BrowserRouter>
}


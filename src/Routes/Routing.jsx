import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Editor from '../Components/Editor';
import Documentation from '../Components/Documentation';
import Tables from '../Components/Tables';



function Routing() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <div>
    <Routes>
    <Route path="/" element={<Editor/>} />
    <Route path="/editor" element={<Editor/>} />
    <Route path="/docs" element={<Documentation/>} />
    <Route path="/tables" element={<Tables/>} />

    </Routes>
    </div>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default Routing;
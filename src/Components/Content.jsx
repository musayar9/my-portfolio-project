import React from 'react'
import Person from './Person'
import Item from './Item'
import Form from './Form'
import { ToastContainer } from "react-toastify";
import {useSelector} from "react-redux"
import Loading from './Loading';
import Error from './Error';
import {Routes, Route} from "react-router-dom"
import ArticleWriting from './ArticleWriting';
import PageNotFound from './PageNotFound';
import Header from './Header';

const Content = () => {

const {dataStatus} = useSelector((state)=>state.portfolio)

if(dataStatus==="loading") return <Loading/>
if(dataStatus==="failed") return <Error message={"requested entity not found"} />;
  return (
    <div className="relative">
      <Person />
      <Header/>
      <Routes>
        <Route exact  path="/" element={<Item/>}/>
        <Route exact path="/article" element={<ArticleWriting/>} />
        
      <Route path='*' element={<PageNotFound/>}/>
      </Routes>

  
      <Form />

      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default Content

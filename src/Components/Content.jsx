import React from 'react'
import Person from './Person'
import Item from './Item'
import Form from './Form'
import { ToastContainer } from "react-toastify";
import {useSelector} from "react-redux"
import Loading from './Loading';
import Error from './Error';

const Content = () => {

const {dataStatus} = useSelector((state)=>state.portfolio)

if(dataStatus==="loading") return <Loading/>
if(dataStatus==="failed") return <Error message={"requested entity not found"} />;
  return (
    <div className="relative">
      <Person />
      <Item />
      <Form />
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default Content

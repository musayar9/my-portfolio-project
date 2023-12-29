import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ItemList from "./ItemList.jsx"
import {fetchClient} from "../redux/portfolioSlice.jsx";

const Item = () => {

    const {data, dataStatus} = useSelector((state) => state.portfolio);
    const dispatch = useDispatch();
    useEffect(() => {
        if (dataStatus === "idle") {
            dispatch(fetchClient());
        }
    }, [dataStatus, dispatch]);
    console.log("data", data)
    
    
    
    

    return (
      <>
       
          <>
            <h2 className="p-5 mt-8 text-center font-bold text-[#334155] text-4xl">
              My Projects
            </h2>
            <section className="grid m-auto mt-8 mb-8  w-[90vw] w-max-[1120px]   p-6 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center ">
              {data.map((item) => (
                <ItemList key={item.id} item={item} />
              ))}
            </section>
          </>
       
      </>
    );
};

export default Item;

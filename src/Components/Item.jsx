import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ItemList from "./ItemList.jsx"
import {fetchClient} from "../redux/portfolioSlice.jsx";

const Item = () => {
    const [portfolio, setPortfolio] = useState([]);
    const {data, dataStatus} = useSelector((state) => state.portfolio);
    const dispatch = useDispatch();
    useEffect(() => {
        if (dataStatus === "idle") {
            dispatch(fetchClient());
        }
    }, [dataStatus, dispatch]);
    console.log("data", data)

    return (
        <section className="grid m-auto mt-10   w-[90vw] w-max-[1120px] md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center ">
        {
            data.map((item) => (
                <ItemList key={item.id} item={item}/>

            ))
        }
    </section>)
};

export default Item;

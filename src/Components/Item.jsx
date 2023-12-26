import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchClient } from "../redux/portfolioSlice.jsx";

const Item = () => {
  const [portfolio, setPortfolio] = useState([]);
  const { data, dataStatus } = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();
  useEffect(() => {
    if (dataStatus === "idle") {
      dispatch(fetchClient());
    }
  }, [dataStatus, dispatch]);

  useEffect(() => {
    if (dataStatus === "succeeded") {
      const projects = data.items.map((item) => {
        const { title, url, image, videos } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        const video = videos?.fields?.file?.url;
        return { title, url, id, img, video };
      });
      setPortfolio(projects);
    }
  }, [setPortfolio, dataStatus, dispatch]);
  console.log(portfolio);
  return <>Hello Dünya</>;
};

export default Item;

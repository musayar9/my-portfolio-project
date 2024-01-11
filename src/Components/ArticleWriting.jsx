import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticle } from "../redux/client";
import ArticleWritingList from "./ArticleWritingList";
   import { Helmet } from "react-helmet";
const ArticleWriting = () => {
  const { article, articleStatus } = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();

  useEffect(() => {
    if (articleStatus === "idle") {
      dispatch(fetchArticle());
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Articles</title>
        <meta name="description" content="articles" />
      </Helmet>
      <h2 className="p-5 mt-8 text-center font-bold text-[#334155] text-4xl">
        Articles
      </h2>
      <section className="grid m-auto mt-8 mb-8   max-w-7xl   p-6 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {article.map((item) => (
          <ArticleWritingList key={item?.id} item={item} />
        ))}
      </section>
    </>
  );
};

export default ArticleWriting;

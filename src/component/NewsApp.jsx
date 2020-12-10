import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import NewsTarget from "./NewsTarget";

export default function NewsApp() {
  //Guardo en una variable la apiKey de newsapi.org
  const apiKey = process.env.REACT_APP_APT_NOTICIAS;

  const [noticias, setNoticias] = useState({
    articulos: [],
    loading: true,
  });

  useEffect(() => {
    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getData = async () => {
    try {
      const resp = await fetch(
        `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
      );
      const data = await resp.json();

      console.log(data);
      setNoticias({
        articulos: data.articles,
        loading: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {noticias.loading ? (
        <div className="row">
          <div className="col col-md-6 offset-md-3 mt-4 text-center">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
          <NewsTarget datos={noticias.articulos} />
        </div>
      )}
    </div>
  );
}

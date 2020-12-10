import React from "react";
import moment from "moment";

export default function NewsTarget({ datos }) {
  return (
    <>
      {datos.map((dato, index) => {
        return (
          <div className="col mt-4" key={index}>
            <a
              href={dato.url}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <div className="card h-100">
                <img
                  src={dato.urlToImage}
                  className="card-img-top"
                  alt={dato.description}
                />
                <div className="card-body">
                  <h5 className="card-title">{dato.title}</h5>
                  <p className="card-text text-muted">
                    {dato.description.slice(0, 80)}...
                  </p>
                </div>
                <div className="card-footer text-muted text-center">
                  {dato.source.name} -{" "}
                  {moment(dato.publishedAt).add(365, "day").format("LL")}
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
}

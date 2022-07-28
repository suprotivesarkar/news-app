import React from "react";
import NewsItem from "./NewsItem";

const NewsList = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {props.news.map((item) => {
        return <NewsItem newsItem={item} />;
      })}
    </div>
  );
};

export default NewsList;

import React from "react";

const NewsItem = (props) => {
  console.log(props);
  return (
    <div
      style={{
        width: 500,
        border: "2px dotted black",
        margin: 20,
        padding: 20,
        textAlign: "left",
      }}
    >
      <div style={{ display: "flex" }}>
        <h2>{props.newsItem.title}</h2>
        <img src={props.newsItem.urlToImage} style={{ width: 150 }} />
      </div>

      <h3>{props.newsItem.description}</h3>
      <p>{props.newsItem.content}</p>
    </div>
  );
};

export default NewsItem;

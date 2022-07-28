import "./App.css";
import CountryList from "./Containers/CountryList";
import React from "react";
import NewsList from "./Containers/NewsList";

//REST APIs -> GET,POST,PUT,PATCH,DELETE
//API -> (Application Programming Interface) -> It allows two softwares to talk
//fetch (Used to make API calls, returns a promise) -> fetch(url,{options}).then((item)=>{}).then((result)=>{})

class App extends React.Component {
  state = {
    news: [],
  };

  componentDidMount() {
    this.fetchData("in");
  }

  fetchData = (country) => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=75e83e9c8f314eda8deeb0ed93232e07`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("newsData", result.articles);
        this.setState({ news: result.articles });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>News App</h1>
        <CountryList fetchData={this.fetchData} />
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

export default App;

import React from "react";
import { fetchQuote } from "./api/QuotesAPI";
import { QuoteCard } from "./components/Card";
import "./App.scss";

class RQM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:
        "Here is my secret. It is very simple. It is only with the heart that one can see rightly; What is essential is invisible to the eye.",
      author: "Antoine de Saint-Exupéry",
      bgColor: "#20681D",
    };
  }

  handleClick = async () => {
    const newQuote = await fetchQuote();
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author,
      bgColor: this.colorGenerator(),
    });
  };

  colorGenerator() {
    return `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
  }

  render() {
    return (
      <QuoteCard
        author={this.state.author}
        quote={this.state.quote}
        background={this.state.bgColor}
        handleClick={this.handleClick}
      />
    );
  }
}

export default RQM;

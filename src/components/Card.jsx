import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";

export const QuoteCard = (props) => {
  return (
    <div
      className="wrapper"
      style={{ background: `${props.background}`, transition: "all 1s ease" }}
    >
      <section className="card" id="quote-box">
        <main className="card__text">
          <blockquote>
            <p
              className="card__text--quote"
              id="text"
              style={{
                color: `${props.background}`,
                transition: "all 1s ease",
              }}
            >
              {props.quote}
            </p>
            <footer className="card__text--author">
              <cite
                id="author"
                style={{
                  color: `${props.background}`,
                  transition: "all 1s ease",
                }}
              >
                - {props.author}
              </cite>
            </footer>
          </blockquote>
        </main>
        <footer className="card__footer">
          <button
            className="btn__social--twitter"
            style={{
              background: `${props.background}`,
              transition: "all 1s ease",
            }}
          >
            <a href="twitter.com/intent/tweet" id="tweet-quote">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a>
          </button>
          <button
            className="btn__social--tumblr"
            style={{
              background: `${props.background}`,
              transition: "all 1s ease",
            }}
          >
            <FontAwesomeIcon className="icon" icon={faTumblr} />
          </button>
          <button
            id="new-quote"
            onClick={props.handleClick}
            style={{
              background: `${props.background}`,
              transition: "all 1s ease",
            }}
          >
            New quote
          </button>
        </footer>
      </section>
    </div>
  );
};

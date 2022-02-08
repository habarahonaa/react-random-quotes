import axios from "axios";

const API_URL = "https://quotes15.p.rapidapi.com/quotes/random/";

const options = {
  method: "GET",
  url: API_URL,
  params: { language_code: "en" },
  headers: {
    "x-rapidapi-host": "quotes15.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
  },
};

export async function fetchQuote() {
  try {
    const { data } = await axios.request(options);
    return { quote: data.content, author: data.originator.name };
  } catch (error) {
    console.log(error);
  }
}

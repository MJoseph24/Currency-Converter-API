/*This is where I get the api and use the key as well as where all the logic of this app is contained*/
/*This is also where I edit the styling and elements present in my Home page*/

import CurrencyInput from "../CurrencyInput";
import { useState, useEffect } from "react";
import axios from "axios";
import React, { useRef } from "react";
import "./Home.css";

function Converter() {
  const audioRef = useRef(null);
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  const [rates, setRates] = useState([]);
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.apilayer.com/fixer/latest?base=USD&apikey=HbGHH0bEC9wlMcbCSSr5SPHq3oJu1xFw"
      )
      .then((response) => {
        setRates(response.data.rates);
      });
  }, []);

  function format(number) {
    return Number(number).toFixed(4);
  }

  function handleAmount1Change(ev) {
    const amount1 = parseFloat(ev.target.value);
    const amount2 = format((amount1 * rates[currency2]) / rates[currency1]);
    setAmount1(amount1);
    setAmount2(amount2);
  }

  function handleCurrency1Change(ev) {
    const currency1 = ev.target.value;
    const amount2 = format((amount1 * rates[currency2]) / rates[currency1]);
    setCurrency1(currency1);
    setAmount2(amount2);
  }

  function handleAmount2Change(ev) {
    const amount2 = parseFloat(ev.target.value);
    const amount1 = format((amount2 * rates[currency1]) / rates[currency2]);
    setAmount2(amount2);
    setAmount1(amount1);
  }

  function handleCurrency2Change(ev) {
    const currency2 = ev.target.value;
    const amount1 = format((amount2 * rates[currency1]) / rates[currency2]);
    setCurrency2(currency2);
    setAmount1(amount1);
  }

  function handlePlay() {
    if (audioRef.current) {
      audioRef.current.play();
      setAudioPlaying(true);
    }
  }

  function handlePause() {
    if (audioRef.current) {
      audioRef.current.pause();
      setAudioPlaying(false);
    }
  }

  return (
    <div>
      <audio
        ref={audioRef}
        src={require("./music.mp3")}
        loop={true}
        autoPlay={false}
      />
      <h1
        style={{
          textAlign: "center",
          color: "black",
          textAlign: "center",
          fontFamily: "Helvetica, sans-serif",
        }}
      >
        Melvin's Personal Currency Converter
      </h1>
      <div style={{ textAlign: "center" }}>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
      <div className="currency-input-container">
        <CurrencyInput
          onAmountChange={handleAmount1Change}
          onCurrencyChange={handleCurrency1Change}
          currencies={Object.keys(rates).map((currency) => currency)}
          amount={amount1}
          currency={currency1}
        />
        <CurrencyInput
          onAmountChange={handleAmount2Change}
          onCurrencyChange={handleCurrency2Change}
          currencies={Object.keys(rates).map((currency) => currency)}
          amount={amount2}
          currency={currency2}
        />
      </div>
    </div>
  );
}

export default Converter;

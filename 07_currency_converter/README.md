# Notes on Custom Hooks

- Since hooks return vanilla javascript, it's recommeded to keep the extension of custom hooks as .js
- Hooks make use of the following naming convention (unofficially) - "use" + hook-name.

## Custom Hook - useCurrencyInfo.js
```js
import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    // Hook returns some data
    // We will call Currency Converter API using fetch
    // The hook will make use of useEffect() hook
    const dependencyList = [currency]
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        // Call using fetch()
        fetch(url)
        .then((response)=>response.json()) // convert to JSON
        .then((response) => setData(response[currency]))
        console.log(data);
    }, dependencyList);
    return data
}

export default useCurrencyInfo;
```

## Card Component - InputBox.jsx
```js
import { useId } from "react";
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    // Used to generate a unique ID
    const amountInputId = useId()
    return (
        // Adding Custom Class-name
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id = {amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisabled}
                    value = {amount}
                    onChange={(e)=>{
                        // && to ensure the function runs
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
                    disabled = {currencyDisabled}
                >   
                    {currencyOptions.map((value) => (
                        // Key is passed for optimization
                        <option key = {value} value={value}>    
                            {value}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
```
- Multiple params are passed thorugh the input box for both "To" and "From" currencies

## App.jsx
```js
import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const BackgroundImage = `https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(currencyInfo[to] * amount)
  }

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('${BackgroundImage}')`,
          }}
      > 
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onAmountChange={(amount) => setAmount(amount)}
                              onCurrencyChange={(currency) => setFrom(currency)}
                              selectCurrency={from}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) => setTo(currency)}
                              selectCurrency={to}
                              amountDisabled
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}
export default App;
```
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
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const url = 'https://api.github.com/users/shubhamnawani99'

export default function Github() {
    const data = useLoaderData()
    /* const [data, setData] = useState({})
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, []) */
  return (
    <div className='text-center m-4 bg-gray-600 p-4 text-3xl text-white'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export const githubInfoLoader = async() => {
    const response = await fetch(url)
    return response.json()
}
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

export const Home = () => {

    const initialData = [{}]

    const [data, setData] = useState(initialData)

   async function fetch(){

        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            
            setData(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetch()
        
    },[]);
    

    return (
        <>
        <h1>Hello from home page</h1>
        <div>
            {
                data.map((card) => {
                    <div> {card.title} <br />
                    {card.body} <br />
                    {card.userId}

                    </div>
                })
            }
        </div>
        </>
    )
}


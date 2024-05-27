import React, { useState } from "react";

const fetchData = (count) => { //fetch data from the server
    fetch('http://localhost:3000/web') 
        .then((response) => { // check if the response is ok
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => { // get the data from the server
            const web = data[count % 10];
            localStorage.setItem('webData', web.id);
            console.log(web.id); // check the data
            return web;
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
}

const ButtonComponent = () => { 
    // button component, increment count and fetch data.
    // 
    
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };
    const [datain, setDatain] = useState(0);

    const onClick = () => {
        fetchData(count);
        incrementCount(); 
        //get the stored data, I don't know how to get the data from the fetch function
        setDatain(localStorage.getItem('webData')); 
    }

    return (
        <>
            <p>id = {datain}</p>
            <button onClick={onClick}>INU</button>
        </>
    );
}

export default ButtonComponent;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ThumbDown } from '@mui/icons-material';
import { ThumbUp } from '@mui/icons-material';
import { Button } from '@mui/material';


const baseURL = 'https://api.chucknorris.io/jokes/random';

const JokesRandom = () => {

    const [joke, setJoke] = useState(0);
    const [positiveCount, setPositiveCount] = useState(0);
    const [negativeCount, setNegativeCount] = useState(0);

    const refreshJoke = () => {
        axios
            .get(`${baseURL}`)
            .then((response) => {
                setJoke(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
    }, []);

    const count = (setCounter, counter) => {
        setCounter(counter + 1);
        refreshJoke();
    };

    return (
        <div className='bloque1' style={{backgroundColor: 'gold', display: 'flex', flexDirection: 'column', margin: '5px', alignItems: 'center'}}>
            <h1>Chuck Norris Jokes</h1> 
            <div>
                <h3>Generate a new joke</h3>
            </div>
            <img alt='Chuck Norris' src={joke.icon_url} />
            {joke.value}
            <div style={{ display: 'flex', flexDirection: 'column', margin: '5px', alignItems: 'center' }}></div>
            <ThumbUp color="success" onClick={() => count(setPositiveCount, positiveCount)} />
              {positiveCount}
              <div style={{ display: 'flex', flexDirection: 'column', margin: '5px', alignItems: 'center' }}>
              {' '}
              <ThumbDown color="error" onClick={() => count(setNegativeCount, negativeCount)} />
              {negativeCount}
              <div style={{ display: 'flex', flexDirection: 'column', margin: '5px', alignItems: 'center' }}>
              {' '}</div>
            </div>
            <Button onClick={refreshJoke} style={{backgroundColor: 'darkorchid', color: 'white'}}>Start</Button>
        </div>

       
    );
}

export default JokesRandom;

import { useState, useEffect } from 'react';

import Spinner from '../components/Spinner';

const API_URL = "http://localhost:9000/api/tweets"

function Tweets(){

    const [tweets, setTweets] = useState([]);

    async function fetchData(){
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setTweets(data);
    }

    async function addTweet(event){
        event.preventDefault()
        console.log(event)
        try{
            const response = await fetch(
                API_URL,{
                   'method': 'POST',
                   body: JSON.stringify(event),
                   'headers': {
                    'Content-Type': 'application/json'
                   } 
                }
            );
            if(response.ok){
                setTweets([event, ...tweets]);
            } else{
                console.error("Error",response); 
            }
        }catch{
            
        }
    }

    useEffect(() => {
        fetchData()
      }, []);

    if(tweets.length === 0){
        return (
            <Spinner />
        )
    }

    return (
        <div className="my-3">
            <form onSubmit={addTweet} method="post">
                <ul>
                    <li>
                        <label for="title">Title&nbsp;:</label>
                        <input type="text" id="title" name="title"/>
                    </li>
                    <li>
                        <label for="message">Message&nbsp;:</label>
                        <textarea id="message" name="message"></textarea>
                    </li>
                </ul>
                <button type='submit' class="button button-primary" >Poster</button>
            </form>

            {tweets.map((tweet) => {
                return (
                    <div className="card">
                    <h5 className="card-title text-center text-capitalize">{tweet.title}</h5>
                        <div className="card-body">
                        <p>{tweet.message}</p> 
                        </div>
                    </div>   
                )
            })}
          
        </div>
      );
}
export default Tweets;
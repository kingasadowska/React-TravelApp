import React from 'react';
import {Route} from 'react-router-dom';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Get matched to top travel specialists",
        text: "Anyone can dream a great vacation. But it can be hard work to make it happen — and to find a travel agent who truly specializes in your trip. We carefully select the world's best boutique tour companies to find the perfect travel specialists for you."
    },
    {
        id: 2,
        title: "Why TravelByHeart?",
        text: "At TravelByHeart, your passion is what drives us. Whether you want to hunt for rare truffles in Tuscany, play with baby elephants at an African wildlife orphanage, or learn aboriginal art from a Maori chief in New Zealand — we know just the people to arrange it. Our award-winning website is designed to help discerning, time-pressed travelers plan the most complex itineraries, down to the tiniest detail. "
    },
    {
        id: 3,
        title: "The people who know best...",
        text: "There’s no easy way to say it: unless you are traveling with one of our specialists, you simply won’t get the depth of experience — the wisest guides, the closest wilderness encounters, the real people and events — that spell the difference between a regular package tour and a sublime, once-in-a-lifetime vacation. But don’t take our word for it. Listen to our travelers."
    } 
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>

    );
}

export default HomePage;
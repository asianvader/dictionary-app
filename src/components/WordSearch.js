import React, { useState } from "react";
import Search from "./Search";

const WordSearch = () => {
    
    const searchWordHandler = (word) => {
        console.log(word)
        const dictionaryApiUrl = `https://dictionaryapi.com/api/v3/references/sd2/json/${word.word}?key=${process.env.REACT_APP_WEBSTER_API_KEY}`;

        console.log({dictionaryApiUrl})

        fetch(dictionaryApiUrl, {
            method: 'GET'
        })
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            console.log(responseData);
            const wordClass = responseData[0].fl;
            const definition = responseData[0].shortdef[0];
            console.log({wordClass})
            console.log({definition})
        })
    }
    
    return (
        <div>
            <Search onAddWord={searchWordHandler} />
        </div>
    );
};

export default WordSearch;
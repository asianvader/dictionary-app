import React, { useState } from "react";
import Search from "./Search";

const WordSearch = () => {
    
    const searchWordHandler = (word) => {
        console.log(word)
    }
    
    return (
        <div>
            <Search onAddWord={searchWordHandler} />
        </div>
    );
};

export default WordSearch;
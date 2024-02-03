import { useState } from "react";
import { createContext } from "react";
import React from 'react';

const SearchContext=React.createContext();

const SearchProvider=(props)=>{
    const [search,setSearch]=useState(null);

    return
    (<SearchContext.Provider value={{search,setSearch}}>
    {props.children}
    </SearchContext.Provider>)
}

export default SearchProvider;
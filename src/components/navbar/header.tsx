"use client";

import { useSearchStore } from "@/stores/searchStore";
import React from "react";

const Header = () => {
    const { searchQuery, setSearchQuery } = useSearchStore();  

    return (
        <div className="header">
            <div className="container">
				<h1>SEARCH</h1>

                <input
                    type="text"
                    placeholder="Поиск..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>
        </div>
    );
};

export default Header;

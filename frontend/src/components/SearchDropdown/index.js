import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './Dropdown.css';

const SearchDropdown = ({search, setRenderDropdown}) => {
    const songs = Object.values(useSelector((state) => state.songs));
    const results = songs.filter(song => song.title.toLowerCase().includes(search.toLowerCase()))

    document.querySelector('html').addEventListener('click', () => {
        setRenderDropdown(false)

    })
    return (
        <div className='search-dropdown'
        >
            <ul>
                {results.map(song =>
                    <li>
                        <NavLink key={song.name} to={`/song/${song.id}`}>
                        <div>

                            <div>
                                <div className="primary-text">
                                  {song.title}
                      </div>
                    </div>
                  </div>
                </NavLink>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default SearchDropdown;

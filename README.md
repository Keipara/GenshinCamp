# SoundtrackCloud

## A music playing app where users can stream and share original soundtracks from video games, movies, and/or shows.
## By Kiara Mendaros

## Database schema: https://github.com/Keipara/SoundtrackCloud/wiki/Database-Schema
## MVP Feature List: https://github.com/Keipara/SoundtrackCloud/wiki/MVP-Feature-List

# Features
* Songs with full CRUD functionality
* Comments with full CRUD functionality
* Search dropdown for all song titles
* User and Song pages
* AWS Upload

# Feature Highlight

One challenge to overcome was the Search function. There were many nuances to consider such as spawning the dropdown only when you need it, and making the songs dynamically appear as you type. It was a big hurdle, but well worth overcoming.

```
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

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
```

#Future Plans
* Restict unlogged user's access to upload page
* Restrict logged in user's access to home page
* Add users to discover page
* Implement image upload feature

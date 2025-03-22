import { useState } from "react";
import database from "../data.json"

export default function Bookmark() {

    const [data, setData] = useState(database);

    function deleteBookmark(title) {
        const updateData = data.filter(item => item.title !== title);
        setData(updateData);
    }

    return (
        <>
            <div className="search-bar">
                <input type="text" placeholder="Search for movies or TV series" />
                <button>
                    <img src="./assets/icon-search.svg" alt="" />
                </button>
            </div>

            <div style={{marginBottom: 40}} className="grid-area">
                <h1>Bookmarked Movies</h1>
                <main>
                    {
                        data?.filter(x => x.category === 'Movie' && x.isBookmarked).map(x => (

                            <div className="grid-item">
                                <div className="play">
                                    <button>
                                        <img src="./assets/icon-play.svg" alt="" />
                                        <p>Play</p>
                                    </button>
                                </div>
                                <button onClick={() => deleteBookmark(x.title)}><i className="fa-solid fa-bookmark"></i></button>
                                <img src={x.thumbnail.regular.large} alt="" />
                                <div>
                                    <p>{x.year}</p>
                                    <span></span>
                                    <img src={x.category === 'TV Series' ? './assets/icon-nav-tv-series.svg' : './assets/icon-nav-movies.svg'} alt="" />
                                    <p>{x.category}</p>
                                    <span></span>
                                    <p>{x.rating}</p>
                                </div>
                                <h1>{x.title}</h1>
                            </div>
                        ))
                    }
                </main>
            </div>

            <div className="grid-area">
                <h1>Bookmarked TV Series</h1>
                <main>
                    {
                        data?.filter(x => x.category === 'TV Series' && x.isBookmarked).map(x => (

                            <div className="grid-item">
                                <div className="play">
                                    <button>
                                        <img src="./assets/icon-play.svg" alt="" />
                                        <p>Play</p>
                                    </button>
                                </div>
                                <button onClick={() => deleteBookmark(x.title)}><i className="fa-solid fa-bookmark"></i></button>
                                <img src={x.thumbnail.regular.large} alt="" />
                                <div>
                                    <p>{x.year}</p>
                                    <span></span>
                                    <img src={x.category === 'TV Series' ? './assets/icon-nav-tv-series.svg' : './assets/icon-nav-movies.svg'} alt="" />
                                    <p>{x.category}</p>
                                    <span></span>
                                    <p>{x.rating}</p>
                                </div>
                                <h1>{x.title}</h1>
                            </div>
                        ))
                    }
                </main>
            </div>
        </>
    )
}
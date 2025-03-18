import Trending from "../Components/Trending";
import data from "../data.json"

export default function Home() {
    return (
        <>
        
            <div className="search-bar">
                <input type="text" placeholder="Search for movies or TV series" />
                <button>
                    <img src="./assets/icon-search.svg" alt="" />
                </button>
            </div>

            <div className="trending-area">
                <h1>Trending</h1>
                <Trending />
            </div>

            <div className="grid-area">
                <h1>Recommended for you</h1>
                <main>
                    {
                        data?.map(x => (

                            <div className="grid-item">
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
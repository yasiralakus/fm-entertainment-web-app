import data from "../data.json"

export default function Movies() {

    return (
        <>
            <div className="search-bar">
                <input type="text" placeholder="Search for movies or TV series" />
                <button>
                    <img src="./assets/icon-search.svg" alt="" />
                </button>
            </div>

            <div className="grid-area">
                <h1>Movies</h1>
                <main>
                    {
                        data?.filter(x => x.category === 'Movie').map(x => (

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
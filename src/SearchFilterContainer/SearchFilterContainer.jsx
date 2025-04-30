import "./SearchFilterContainer.css"
import { useState, useEffect } from 'react'

function SearchFilterContainer({ subscriptions, setFilteredSubscriptions }) {
    //I think this could just be a controlled form
    const [filterText, setFilterText] = useState("")

    //This function creates a searchedMovies subset of movies (to not modify movies directly) based on present searchText value
    //to pass to MoviesContainer (Note: the function name is in refrerence to an infinite refresh loop we accidentally created earlier)

    useEffect(() => {
        setFilteredSubscriptions(subscriptions)
    }, [subscriptions])

    const filterSubscriptions = (event) => {

        console.log("I already ended up here")

        let input = event.target.value
        setFilterText(input)
        //Might need this too?
        // if (input === "") {
        //     setFilteredSubscriptions(subscriptions)
        // }

        const filteredSubscriptions = subscriptions.filter((subscription) => {
            return subscription.title.toLowerCase().includes(input.toLowerCase())
        }) 

        setFilteredSubscriptions(filteredSubscriptions)
    }

    return (
        <section className="search-filter-box">
            <h3>Filter Subscriptions:</h3>
            <form>
                <input className="filter-bar"
                    type='text'
                    placeholder='Enter text here (case-insensitive)'
                    name='title'
                    value={filterText}
                    onChange={event => filterSubscriptions(event)}
                />  
            </form>
        </section>
    )
}

export default SearchFilterContainer

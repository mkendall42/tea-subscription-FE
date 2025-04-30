import { useState } from 'react'

function SearchFilterContainer({ subscriptions, setFilteredSubscriptions }) {
    //I think this could just be a controlled form
    const [filterText, setFilterText] = useState("")

    //This function creates a searchedMovies subset of movies (to not modify movies directly) based on present searchText value
    //to pass to MoviesContainer (Note: the function name is in refrerence to an infinite refresh loop we accidentally created earlier)

    const filterSubscriptions = (event) => {

        console.log("I already ended up here")

        let input = event.target.value
        setFilterText(input)
        //Might need this too?
        if (input === "") {
            setFilteredSubscriptions(subscriptions)
        }

        const filteredSubscriptions = subscriptions.filter((subscription) => {
            return subscription.title.toLowerCase().includes(input.toLowerCase())
        }) 

        setFilteredSubscriptions(filteredSubscriptions)
    }

    return (
        <div>
            <h3>SearchFilterContainer:</h3>
            <form>
                <input
                    type='text'
                    placeholder='Filter subscriptions here'
                    name='title'
                    value={filterText}
                    onChange={event => filterSubscriptions(event)}
                />  
            </form>
        </div>
    )
}

export default SearchFilterContainer

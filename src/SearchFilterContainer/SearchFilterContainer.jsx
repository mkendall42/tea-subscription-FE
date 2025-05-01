import "./SearchFilterContainer.css"
import { useState, useEffect } from 'react'

function SearchFilterContainer({ subscriptions, setFilteredSubscriptions }) {
    const [filterText, setFilterText] = useState("")

    useEffect(() => {
        setFilteredSubscriptions(subscriptions)
    }, [subscriptions])

    const filterSubscriptions = (event) => {

        console.log("I already ended up here")

        let input = event.target.value
        setFilterText(input)

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

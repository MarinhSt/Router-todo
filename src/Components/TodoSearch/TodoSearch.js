import React from 'react'
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }) {
    // const changeValue = (e) => {
    //     console.log(e)
    //     setSearchValue(e.target.value)
    // }
    const onEnterUp = e => {
        // (key === "Enter") ? console.log('buscar todos') : console.log('');
        // console.log(input.target.value)
        if (e.target.value !== '' && e.key === 'Enter') {
            let normalizeValue = e.target.value.toLowerCase().trim()
            // normalizeValue.toLowerCase().trim()
            setSearchValue(normalizeValue)
        }
    }
    // const inputSearch = document.getElementsByClassName('search')

    /* this function is for show all to-dos when the input is empty after doing a search   */
    const clearSearch = () => {
        setSearchValue('')
        // search the way for reset value when clicked in the delete
        // inputSearch.value = ''
    }
    return (
        <div className="container">
            <input
                className="search"
                placeholder="filter to-dos"
                //if a value is provided without an onChange or other handler, the form (input) will be read-only.
                //That's why it was given a defaultValue.
                // value={searchValue}
                // onChange={changeValue}
                defaultValue={searchValue}
                onKeyUp={onEnterUp}
                disabled={loading}
            />
            <span className="deleteSearch" onClick={clearSearch}>
                X
            </span>
        </div>
    )
}

export { TodoSearch }

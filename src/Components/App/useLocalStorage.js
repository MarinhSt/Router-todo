import React from 'react'

function useLocalStorage(itemName, initialValue) {
    //state of error on page
    const [error, setError] = React.useState(false)
    //state of load page
    const [loading, setLoading] = React.useState(true)
    //state of to-dos
    const [item, setItem] = React.useState(initialValue)

    React.useEffect(() => {
        // setTimeout used to simulate the request to API
        setTimeout(() => {
            try {
                // local storage was used as the database for the persistance the data
                const localItem = localStorage.getItem(itemName)
                let parsedItem

                // verification the existence of item in local storage
                if (!localStorage.getItem(itemName)) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localItem)
                }

                setItem(parsedItem)
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }, 1000)
        /* if I leave this empty, when I like to modify (complete or delete) to-dos; them will be reappear again  */
        // review this, have a problems to change to-dos; don't update changes into localStorage.
    })

    // save change of components in local storage
    const saveItem = newItem => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem))
            setItem(newItem)
        } catch (error) {
            setError(console.log(error))
        }
    }

    return { item, saveItem, loading, error }
}

export { useLocalStorage }

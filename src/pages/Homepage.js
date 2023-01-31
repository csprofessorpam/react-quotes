import axios from 'axios'
import React from 'react'
import './Homepage.css'


function Homepage() {

    const [quote, setQuote] = React.useState('')

    //retrieve quote when button is pushed

    const getQuote = () =>{
        //pick a page from 1 to 100
        const page = 1 + Math.floor(Math.random()*100)

        axios.get(`https://api.quotable.io/quotes?page=${page}`)
        .then(res => {
            console.log(res.data.results)
            //pick new quotes for state
        //pick a number from 0 to 18
        const num = Math.floor(Math.random() * 20)
        setQuote(res.data.results[num])
        })
        .catch(err => console.log(err))

    }
  return (
    <div className="homepage-container">
        <h1>{quote.content}</h1>
        <h3>{quote.author}</h3>
        <button onClick={getQuote}>Get Quote</button>

    </div>
  )
}

export default Homepage
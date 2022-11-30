import './App.css';
import { useState } from 'react'
import Book from './componenets/Books'


function App() {

  // {id:1, name:"Harry"}
  const [books, setBooks] = useState([])

  const [newBook, setNewBook] = useState("")

  const handleChange = (event) => {

    setNewBook(event.target.value)
    console.log(newBook)
  }

  const handleSubmit = (event) => {
      event.preventDefault()

      const booksCopy = [...books]
      const id = new Date().getTime()
      const name = newBook;
      console.log(id)

      booksCopy.push({id:id, name:name})
      setBooks(booksCopy)
      setNewBook("")

  }

  

  return (
    <div>
      <img></img>       
      <div className='container'>
          <h1>Library</h1>
          <form action="submit" onSubmit={handleSubmit}>
<div className='trait'></div>
<h1 className='pre-title'>You can add a new book here</h1>
<input className='add-book' value={newBook} type="text" placeholder='Add a book' onChange={handleChange} ></input>
<button className='add-button'>Add</button>


          </form>
        </div>

   
    </div>
  );
}

export default App;

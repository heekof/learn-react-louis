import './App.css';
import { useState } from 'react'
import Book from './componenets/Books';


function App() {

  // {id:1, name:"Harry"}
  const [books, setBooks] = useState([])

  const [newBook, setNewBook] = useState("")

  const handleChange = (event) => {
    // tous les sets sont actualisés uniquement à la fin de la fonction !
    setNewBook(event.target.value)
   
  }

  const handleSubmit = (event) => {
      
      // set event to default.
      event.preventDefault()

      const booksCopy = [...books]
      const id = new Date().getTime()
      const name = newBook;
      console.log(id)

      booksCopy.push({id:id, name:name})
      setBooks(booksCopy)
      setNewBook("")

  }

  const handleDelete = (id) => {

    const booksCopy = [...books]
    const booksCopyUp = booksCopy.filter((book) => book.id !== id); // !==

    setBooks(booksCopyUp)


        
  }

  return (
    <div>
      <img></img>       
      <div className='container'>
          <h1>Library</h1>
          <ul className='container-list'>
            {books.map( (book) => (

                <Book bookInfo={book} onBookDelete={handleDelete} />

            ))}
          </ul>
          <form action="submit" onSubmit={handleSubmit}>
<div className='trait'></div>
<h1 className='pre-title'>You can add a new book here</h1>
<input className='add-book' value={newBook} type="text" placeholder='Add a book' onChange={handleChange} ></input>
{ console.log(newBook)}
<button className='add-button'>Add</button>


          </form>
        </div>

   
    </div>
  );
}

export default App;

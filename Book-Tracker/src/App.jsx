import React, { useState } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import Booklist from './components/Booklist'
import Infobar from './components/Infobar'

const App = () => {

  const [books, setBooks] = useState([
    { id: 1, name: "Atomic Habit", author: "James Clear", status: "Completed" },
    { id: 2, name: "The Millionaire Fastlane", author: "Mj Demarco", status: "Pending" },
    { id: 3, name: "How to win friends and influence people", author: "Don't know", status: "want to read" },
  ])

  function onAdd({newbook,author,status}){
    const newBook ={
      id:Date.now(),
      name:newbook,
      author:author,
      status:status|| "want to read"
    }
    setBooks((prev) => [...prev,newBook
    ])
  }

  return (
    <div className='flex flex-col justify-center'>
      <Header />
      <Input onAdd={onAdd}/>
      <Infobar />
      <Booklist books = {books}/>
    </div>
  )
}

export default App
import { useState, useEffect } from 'react'
import React from 'react'
import style from "./ContactsForm.module.css"
import PaginationComponent from './PaginationComponent'

const ContactsForm = () => {
    const CONST_URL = 'http://localhost:8888/contacts'
    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(CONST_URL);
                const posts = await res.json()
                setPosts(posts)
            }
            catch (error) {
                setError(error.message)
            }
            setIsLoading(false)
        }
        fetchData()},[])

    if (error) {
        return <h1>{error}</h1>
    }
  return (
    <><h1>Posts:</h1>
        <hr/>
    <div className={style.formCards}>
      
        {
            isLoading ? <h1>Loading...</h1> : <PaginationComponent items={posts} />
        }    
    </div>
    </>
  )
}

export default ContactsForm

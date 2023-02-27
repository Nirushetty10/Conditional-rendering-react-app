import React, {useState} from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import addUserClass from "./adduser.module.css"
import ErrorModel from '../UI/ErrorModel'

function AddUser(props) {
    let[user , setUser] = useState("")
    let[age , setAge] = useState("")
    let[error , setError] = useState()

    let userNameHandler= (e)=>{
       setUser(e.target.value)
    }
    let ageHandler= (e)=>{
        setAge(e.target.value)
     }

    const addUserHandler =(event)=>{
      event.preventDefault()
      if(user.trim().length === 0 || age.trim().length === 0) {
        setError({
          title : "Invalid input!!",
          message : "Please provide valid inputs!!!"
        })
        return;
      }
      if(+age < 1) {
        setError({
          title : "Invalid age!!",
          message : "Age must be greater than 0"
        })
        return
      }
      let User ={
        name : user,
        age : age,
        id : Math.random().toString()
      }
      props.onSubmitUser(User)
      setUser("")
      setAge("")
    }

    const errorHandler =()=>{
      setError(null)
    }
  return (
    <>
    {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/> }
    <Card className={addUserClass.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="name">Username</label>
        <input type="text" value={user} id='name' onChange={userNameHandler}/>
        <label htmlFor="age">Age</label>
        <input type="number" value={age} id='age' onChange={ageHandler}/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </>
  )
}

export default AddUser
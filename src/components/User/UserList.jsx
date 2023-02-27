import React from 'react'
import Card from '../UI/Card'
import STYLE from "./userlist.module.css"

function UserList(props) {
  return (
    <Card className={STYLE.users}>
    <ul>
        {props.users.map((user)=>{
            return <li key={user.id}>{user.name} ({user.age} years old)</li>
        })}
    </ul>
    </Card>
  )
}

export default UserList
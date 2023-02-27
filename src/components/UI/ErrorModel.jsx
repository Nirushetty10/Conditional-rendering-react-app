import React from 'react'
import STYLE from "./errormodel.module.css"
import Card from './Card';
import Button from './Button';

function ErrorModel(props) {
  return (
    <div>
        <div className={STYLE.backdrop} onClick={props.onConfirm}/>
    <Card className={STYLE.modal}>
        <header className={STYLE.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={STYLE.content}>
            <p>{props.message}</p>
        </div>
        <footer className={STYLE.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    </div>
  )
}

export default ErrorModel
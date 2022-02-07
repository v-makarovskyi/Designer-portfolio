import React from 'react'
import './contact.scss'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

export const Contact = () => {

    const [message, setMessage] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
           <div className="left">
               <Zoom><img src="assets/contact2.png" alt="" /></Zoom>
           </div>
           <div className="right">
                <Zoom><h2>Написать мне</h2></Zoom>
                <Fade right><form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Сообщение"></textarea>
                    <button type="submit">Отправить</button>
                    {message && <span>Спасибо. Я обязательно свяжусь с Вами)</span>}
                </form></Fade>
            </div> 
        </div>
    )
}

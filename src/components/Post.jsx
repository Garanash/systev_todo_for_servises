import React from 'react'
import style from './Post.module.css'
import { useState } from 'react'

const Post = (props) => {
    const {name, disc,img} = {...props}
    
    const getRandomHSLColor = () => {
        const hue = Math.floor(Math.random() * 360); // Цветовой тон
        const saturation = 70 + Math.random() * 30;   // Насыщенность 70-100%
        const lightness = 40 + Math.random() * 20;    // Освещенность 40-60%
        
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };
    const [color, setColor] = useState(getRandomHSLColor());

  return (
    <div className={style.cardCont} style={{ backgroundColor: color}} onClick={() => setColor(getRandomHSLColor)} onMouseEnter={() => setColor(getRandomHSLColor)} onMouseLeave={() => setColor(getRandomHSLColor)}>
        <img className={style.image} src={img} alt="Описание изображения" />
      <p><b>{name}</b></p>
      <hr/>
      <p>{disc}</p>
    </div>  
  )
}

export default Post

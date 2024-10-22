import React from 'react'

const Button = ({width,height, color, bgcolor,text, click}) => {
  return (
    <div className="genbutton" onClick={click} style={{width:width, height: height, color: color, backgroundColor: bgcolor}}>
      {text}
    </div>
  )
}

export default Button

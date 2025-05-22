import React from 'react'
import { frontendFrameworks } from '../data'

export const Frameworks = ({bgColor}) => {
  console.log(bgColor);
  
  return (
    <div id='hatter' style={{display:'flex',flexDirection:'column',gap:'5px',}}>
      {frontendFrameworks.map((obj,i)=>(
        
        <p key={i} style={{backgroundColor:bgColor}}>{obj}</p>

      ))}
    </div>
  )
}

import React from 'react'
import { frontendFrameworks } from '../data'

export const Frameworks = (bgColor) => {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'5px'}}>
      {frontendFrameworks.map((obj)=>(
        
        <Text>${obj}</Text>

      ))}
    </div>
  )
}

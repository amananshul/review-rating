import React from 'react'
export const TextError = (props) => {
  return (
    <div className='form-error' style={props.styles}>
        {props.children}
    </div>
  )
}
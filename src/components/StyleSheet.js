import React from 'react'
import './MyStyle.css'

function StyleSheet(props) {
  let className=props.primary ? "primary":" ";
  return (
    <>
     <div>
        <h2 className={className} >Hello World!!</h2>
     </div>
    </>
  )
}

export default StyleSheet

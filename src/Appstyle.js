import React from 'react'
import Style from './appstyle.module.css'
import './appstyle.css'
function Appstyle() {
  return (
    <div className='App'>
        <h2 className='error'>This is error text</h2>
        <h2 className={Style.success}>This is succes text</h2>
    </div>
  )
}

export default Appstyle
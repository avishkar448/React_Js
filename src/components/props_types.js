import React, { Component } from 'react'
//import PropsTypes from 'prop-types'

import PropsTypes from 'prop-types'
class props_types extends Component {
  render() {
    const {boolean} =this.props;

    return (
      <div>
    {/* <p>my name is:{myName}</p> */}

    {/* <p>My age is: {{myNumber}}</p> */}

    {/* <p>Array is:{value}</p> */}

    {/* <p>Enter any data:{anyd}</p> */}

    <p>I am :{boolean}</p> 
      </div>
    )
  }
}
props_types.PropsTypes={ 
   // myName:PropsTypes.string.isRequired
  // myNumber:PropsTypes.number.isRequired
  // value:PropsTypes.array.isRequired
  // anyd:PropsTypes.any.isRequired
  boolean:PropsTypes.bool.isRequired
}
export default props_types   

//
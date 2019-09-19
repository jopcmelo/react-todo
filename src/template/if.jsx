import React from 'react'

const If = (props) => {
  if (props.condition) {
    return props.children
  } else {
    return false
  }
}

export default If

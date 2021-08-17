import React from 'react'

const Total = (props) => {
  let count = props.parts.map(value => value.exercises).reduce((a, b) => a + b, 0)

  return (
    <p><strong>Number of exercises: {count}</strong></p>
  )
}

export default Total

import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ courses }) => {
  console.log(courses)
  return (
    <div>
      {courses.map(course =>
        <div>
         <Header id={course.id} name={course.name} />
         <Content id={course.parts.id} parts={course.parts} />
         <Total id={course.parts.id} parts={course.parts} />
        </div>
      )}
    </div>
  )
}

export default Course

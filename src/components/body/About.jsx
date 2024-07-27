import React from 'react'

function About() {
  document.title = "About"
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
      <div>
      <h1>Welcome to my restaurant</h1>
      <p>At my restaurant, we believe that every meal should be an unforgettable experience. Nestled in the heart of [City Name], our restaurant offers a unique blend of traditional and contemporary cuisine, crafted with the freshest ingredients and a passion for perfection.</p>
      <br/>
      <br/>
      <h1>Our Story</h1>
      <p>Founded in 1999, [Your Restaurant Name] has become a beloved destination for food enthusiasts. Our journey began with a simple idea: to create a space where people could enjoy exquisite dishes in a warm and inviting atmosphere. Over the years, we have grown, but our commitment to quality and customer satisfaction remains unwavering.</p>
      </div>
    </div>
  )
}

export default About
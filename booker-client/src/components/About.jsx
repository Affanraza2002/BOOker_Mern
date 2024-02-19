import React from 'react'
import Library from "../assets/library.avif"
const About = () => {
  return (
    <div className=' my-12  flex flex-col justify-center items-center'>
    <div className='my-10'>
      <img className='rounded items-center size-100'  src={Library}/>
    </div>
      <div className='my-8 mx-9'>
        <h2 className='my-6 text-5xl'>Who We Are</h2>
        <p className='my-2 text-2xl'>BOOKERS is the world’s largest site for readers and book recommendations. Our mission is to help readers discover books they love and get more out of reading. BOOKers launched in January 2023.</p>
      </div>
      <div className='my-10 mx-9'>
        <h2 className='my-6 text-5xl'>A Few Things You Can Do On BOOkers</h2>
        <p className='my-2 text-2xl'>See what books your friends are reading.
Track the books you're reading, have read, and want to read.
Check out your personalized book recommendations. ur recommendation engine analyzes 20 billion data points to give suggestions tailored to your literary tastes.
Find out if a book is a good fit for you from our community’s reviews.</p>
      </div>
    </div>
  )
}

export default About
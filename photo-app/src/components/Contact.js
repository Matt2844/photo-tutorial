import React from 'react'

export default function Contact () {

  return (

    <form action="https://formsubmit.co/matt.hd.ford@gmail.com" method="POST">
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <button type="submit">Send</button>
    </form>




  )
}
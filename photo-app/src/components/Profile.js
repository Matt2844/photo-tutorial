import React from 'react'
import Button from '@material-ui/core/Button';

export default function Profile () {


  return (
    <div className="profile-wrap">
      <img src="./profile-dog.jpg" className="profile-pic"></img>
      <div className="text">
        <h3>Profile Name #1</h3>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo</p>
        <a href={'/contact'}><Button onClick>Contact</Button></a>
      </div>
    </div>
  )
}
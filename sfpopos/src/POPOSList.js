// src/POPOSList.js
import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json'

function POPOSList() {

  // deconstruct hours here
const spaces = data.map(({ title, address, images, hours }, i) => {

  return (
    <POPOSSpace
      id={i}
      key={title}
      name={title}
      address={address}
      image={images[0]}
      hours={hours} // add a new prop for hours here
    />
  )
})

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}

export default POPOSList
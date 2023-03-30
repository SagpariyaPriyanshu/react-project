import React from 'react'
import { Link } from 'react-router-dom';

export default function Components() {
  return (
    <div style={{ paddingTop: "55px" }}>
        <div className='container'>
        <Link to='/Components/buttonCompo'>
          <button
            className='btn btn-light'
            style={{ backgroundColor: '#00008b', color: 'white' }}>
            Button
          </button>
        </Link>
        <Link to='/Components/checkboxCompo'>
          <button
            className='btn btn-light'
            style={{ backgroundColor: '#00008b', color: 'white' }}>
            Checkbox
          </button>
        </Link>
        </div>
    </div>
  )
}

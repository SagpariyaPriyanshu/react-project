import React from 'react'
import { Link } from 'react-router-dom';

export default function AdminPanel() {
    
  return (
    <div style={{ paddingTop: "55px" }}>
        <div className='container'>
        <Link to='/AdminPanel/ButtonCompo'>
          <button
            className='btn btn-light'
            style={{ backgroundColor: '#00008b', color: 'white' }}>
            Button
          </button>
        </Link>
        <Link to='/AdminPanel/CheckboxCompo'>
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
import React from 'react'
import { Link } from 'react-router-dom'

const CardAlQuran = ({nomor, nama, nama_latin, arti, linkUrl}) => {
  return (
    <div className='col-12 mb-3'>
      <Link to={linkUrl} className="card shadow border-0 p-4 text-decoration-none">
        <div className="d-flex justify-content-between">
            <p className='mb-0 align-self-center'>{nomor}.</p>
            <div>
                <p className='mb-0 fw-bold fs-5'>{nama_latin}</p>
                <i>{arti}</i>
            </div>
            <p className='mb-0 fs-4 fw-semibold align-self-center'>{nama}</p>
        </div>
      </Link>
    </div>
  )
}

export default CardAlQuran

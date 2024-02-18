import React from 'react'
import { Link } from 'react-router-dom'

const CardAlQuran = ({ nomor, nama, nama_latin, arti, linkUrl }) => {
  return (
    <div className='col-12 mb-3'>
      <Link to={linkUrl} className="card shadow border-0 p-4 text-decoration-none">
        <div className="row">
          <div className="col-8">
            <div className="d-flex">
              <p className='mb-0 align-self-center'>{nomor}.</p>
              <div className='ms-3'>
                <p className='mb-0 fw-bold fs-6'>{nama_latin}</p>
                <i>{arti}</i>
              </div>
            </div>
          </div>
          <div className='col-4 text-end'>
            <p className='mb-0 fs-4 fw-semibold align-self-center'>{nama}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardAlQuran

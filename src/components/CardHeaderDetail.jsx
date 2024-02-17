import React from 'react';

const CardHeaderDetail = ({ nama, nama_latin, jumlah_ayat, tempat, linkAudio }) => {

    let audio = new Audio(linkAudio)

    const start = () => {
        audio.play()
    }

    return (
        <div className='col-12 mt-3 mb-4'>
            <div className="card shadow border-0 p-4">
                <p className='fs-5 fw-bold'>{nama_latin} - {nama}</p>
                <div className="d-flex gap-4">
                    <p>Jumlah Ayat : <span className='fw-bold'>{jumlah_ayat}</span></p>
                    <p>Tempat Turun : <span className='fw-bold'>{tempat}</span></p>
                </div>
                <div className='align-self-center w-100'>
                    <button className='w-100 btn text-light' style={{ background: "#57662F" }} onClick={start}>Play Murottal</button>
                </div>
            </div>
        </div>
    );
};

export default CardHeaderDetail;

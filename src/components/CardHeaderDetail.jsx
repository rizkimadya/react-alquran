import React, { useState, useEffect } from 'react';

const CardHeaderDetail = ({ nama, nama_latin, jumlah_ayat, tempat, linkAudio }) => {
    const [audio] = useState(new Audio(linkAudio));
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Menangani perubahan isPlaying untuk mengubah tombol sesuai dengan status pemutaran audio
        if (isPlaying) {
            audio.play().catch(error => console.error('Gagal memulai audio:', error));
        } else {
            audio.pause();
        }
    }, [isPlaying, audio]);

    const togglePlay = () => {
        setIsPlaying(prevIsPlaying => !prevIsPlaying); // Toggle nilai isPlaying
    };

    return (
        <div className='col-12 mt-3 mb-4'>
            <div className="card shadow border-0 p-4">
                <p className='fs-5 fw-bold'>{nama_latin} - {nama}</p>
                <div className="d-flex gap-4">
                    <p style={{ fontSize: "13px" }}>Jumlah Ayat : <span className='fw-bold'>{jumlah_ayat}</span></p>
                    <p style={{ fontSize: "13px" }}>Tempat Turun : <span className='fw-bold'>{tempat}</span></p>
                </div>
                <div className='align-self-center w-100'>
                    <button
                        className='w-100 btn text-light'
                        style={{ background: isPlaying ? "#bb2d3b" : "#57662F" }}
                        onClick={togglePlay}
                    >
                        {isPlaying ? (
                            <>
                                <i className="bi bi-pause-fill"></i>
                                <span>Pause Murottal</span>
                            </>
                        ) : (
                            <>
                                <i className="bi bi-play-fill"></i>
                                <span>Play Murottal</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardHeaderDetail;

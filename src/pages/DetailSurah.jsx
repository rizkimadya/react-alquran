import React, { useEffect, useState } from 'react'
import LayoutWeb from '../layouts/Web'
import { Link, useParams } from 'react-router-dom'
import Api from '../api';
import CardHeaderDetail from '../components/CardHeaderDetail';
import { Spinner } from 'react-bootstrap';
import CardAyat from '../components/CardAyat';

const DetailSurah = () => {
    document.title = "Al Qur'an";

    const [detailSurah, setDetailSurah] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    //function "fetchDetailSurah"
    const fetchDetailSurah = async () => {
        setLoading(true);
        await Api.get(`/api/surah/${id}`).then(response => {
            setDetailSurah(response.data);
            console.log(response.data);
            setLoading(false);
        });
    };

    //hook
    useEffect(() => {
        fetchDetailSurah();
    }, [id]);

    return (
        <React.Fragment>
            <LayoutWeb>
                {!loading ? (
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex gap-3 justify-content-between">
                                {detailSurah && detailSurah.surat_sebelumnya && (
                                    <Link
                                        to={`/surah/${detailSurah.surat_sebelumnya.nomor}`}
                                        className='btn w-100 mb-md-0 mb-3 text-light justify-content-between d-flex'
                                        style={{ background: "#57662F", fontSize: "12px" }}
                                    >
                                        <i className="bi bi-arrow-left-short"></i>
                                        <span className='fw-bold'>({detailSurah.surat_sebelumnya.nama_latin})</span>
                                    </Link>
                                )}
                                {detailSurah && detailSurah.surat_selanjutnya && (
                                    <Link
                                        to={`/surah/${detailSurah.surat_selanjutnya.nomor}`}
                                        className='btn w-100 mb-md-0 mb-3 text-light justify-content-between d-flex'
                                        style={{ background: "#57662F", fontSize: "12px" }}
                                    >
                                        <span className='fw-bold'>({detailSurah.surat_selanjutnya.nama_latin})</span>
                                        <i className="bi bi-arrow-right-short"></i>
                                    </Link>
                                )}
                            </div>
                        </div>
                        <CardHeaderDetail nama_latin={detailSurah.nama_latin} nama={detailSurah.nama} linkAudio={detailSurah.audio} jumlah_ayat={detailSurah.jumlah_ayat} tempat={detailSurah.tempat_turun} />
                        {detailSurah && detailSurah.ayat && detailSurah.ayat.map(ayat => (
                            <div key={ayat.nomor}>
                                <CardAyat nomor={ayat.nomor} ar={ayat.ar} tr={ayat.tr} idn={ayat.idn}/>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="d-flex mx-auto justify-content-center mt-5">
                        <Spinner style={{ color: "#57662F" }}></Spinner>
                    </div>
                )}
            </LayoutWeb>
        </React.Fragment>
    )
}

export default DetailSurah

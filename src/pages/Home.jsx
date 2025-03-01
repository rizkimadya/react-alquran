import React, { useEffect, useState } from 'react'
import LayoutWeb from '../layouts/Web';
import Logo from '../assets/logo.png'
import CardAlQuran from '../components/CardAlQuran';
import Api from '../api';
import { Spinner } from 'react-bootstrap';

const Home = () => {
    document.title = "Al Qur'an";

    const [surah, setSurah] = useState([]);
    const [loading, setLoading] = useState(true);

    //function "fetchDataSurah"
    const fetchDataSurah = async () => {

        await Api.get(`/api/surah`).then(response => {
            setSurah(response.data);
            setLoading(false);
        });
    };

    //hook
    useEffect(() => {
        fetchDataSurah();
    }, []);

    //fitur search
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(surah);

    const handleSearch = e => {
        const keyword = e.target.value.toLowerCase();
        setSearchTerm(keyword);

        const filtered = surah.filter(item =>
            Object.values(item).some(value =>
                String(value).toLowerCase().includes(keyword)
            )
        );
        setFilteredData(filtered);
    };

    return (
        <React.Fragment>
            <LayoutWeb>
                <div className="row home">
                    <div className="col-12 mb-4">
                        <div className="card p-3 shadow text-center" style={{ border: "none" }}>
                            <img src={Logo} alt="" className='mx-auto' style={{ width: "30%" }} />
                            <p className='mt-3' style={{ color: "#57662F" }}>PWA Al-Qur'an BOSKI<br /> Sistem Informasi Angkatan 2020</p>
                        </div>
                    </div>
                    <div className="col-12 bg-white pt-4 pb-3" style={{ position: "sticky", top: "60px", zIndex: 999 }}>
                        <form>
                            <div className="input-groups">
                                <i className="bi bi-search"></i>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    placeholder="Cari Surah"
                                    onChange={handleSearch}
                                />
                            </div>
                        </form>
                    </div>
                    {!loading ? (
                        <div>
                            {searchTerm ? (
                                // If searchTerm exists, use filteredData.map
                                filteredData.length > 0 ? (
                                    filteredData.map(surah => (
                                        <div key={surah.nomor}>
                                            <CardAlQuran nomor={surah.nomor} nama={surah.nama} nama_latin={surah.nama_latin} arti={surah.arti} linkUrl={`surah/${surah.nomor}`} />
                                        </div>
                                    ))
                                ) : (
                                    <div
                                        className="alert alert-danger border-0 rounded shadow-sm"
                                        role="alert"
                                    >
                                        <strong>Afwan 🙏</strong> surah yang anda cari tidak
                                        ada.
                                    </div>

                                )
                            ) :
                                surah.length > 0 ? (
                                    surah.map(surah => (
                                        <div key={surah.nomor}>
                                            <CardAlQuran nomor={surah.nomor} nama={surah.nama} nama_latin={surah.nama_latin} arti={surah.arti} linkUrl={`surah/${surah.nomor}`} />
                                        </div>
                                    ))
                                ) : (
                                    <div
                                        className="alert alert-danger border-0 rounded shadow-sm"
                                        role="alert"
                                    >
                                        <strong>Afwan 🙏</strong> Data Masih Kosong!.
                                    </div>

                                )}
                        </div>
                    ) : (
                        <div className="d-flex mx-auto justify-content-center mt-5">
                            <Spinner style={{ color: "#57662F" }}></Spinner>
                        </div>
                    )}
                </div>
            </LayoutWeb>
        </React.Fragment>
    )
}

export default Home

import React from 'react'

const CardAyat = ({ nomor, ar, tr, idn }) => {
    return (
        <div className='col-12 mb-4 card-ayat'>
            <div className="card border-0 p-4" style={{
                background: nomor % 2 !== 0 ? "rgba(87, 102, 47, 0.2)" : "inherit",
                boxShadow: nomor % 2 === 0 ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}>

                <div className="d-flex justify-content-between">
                    <p style={{ border: "1px solid #57662F", padding: "2px 8px", borderRadius: "50%", alignSelf: "start", color:"#57662F", marginRight:"10px"}}>{nomor}</p>
                    <p style={{ fontWeight: "400", fontSize: "24px", textAlign: "end", lineHeight:"40px", fontFamily:"times-new-arabic" }}>{ar}</p>
                </div>
                <div className='mt-3 mb-2' style={{ color: "#57662F" }} dangerouslySetInnerHTML={{ __html: tr }} />
                <i>{idn}</i>
            </div>

        </div >
    )
}

export default CardAyat

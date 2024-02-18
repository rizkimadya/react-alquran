import React from 'react'
import NavigasiBar from '../components/NavigasiBar'
import { Link, useLocation } from 'react-router-dom'

const LayoutWeb = ({ children }) => {
    //assigning location variable
	const location = useLocation();

	//destructuring pathname from location
	const { pathname } = location;

	//Javascript split method to get the name of the path in array
	const splitLocation = pathname.split("/");

    return (
        <React.Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 p-0">
                        <div className="card shadow border-0" style={{ height: "100vh", overflow: "auto", }}>
                            <NavigasiBar />
                            <div className="content" style={{ position: "relative" }}>
                                {children}
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', bottom: '24px', left: '0', right: '0', }}>
                                    {splitLocation[1] === "surah" && 
                                        <Link to="/">
                                            <i style={{background:"#57662F", color:"#fff", padding:"7px 8px", borderRadius:"50%", fontSize:"20px"}} className="bi bi-house shadow"></i>
                                        </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LayoutWeb

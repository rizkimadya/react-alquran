import React from 'react'
import NavigasiBar from '../components/NavigasiBar'

const LayoutWeb = ({ children }) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 p-0">
                        <div className="card shadow border-0" style={{ height: "100vh", overflow: "auto",}}>
                            <NavigasiBar />
                            <div className="content">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LayoutWeb

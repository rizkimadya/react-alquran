import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png'

function NavigasiBar() {
  return (
    <>
      <Navbar className='fixed-top d-flex justify-content-center py-3' style={{background:"#57662F"}}>
          <img src={Logo} alt="" style={{width:"40px", border:"2px solid #fff", borderRadius:"50%"}}/>
          <p className='mb-0 text-light mx-3 fs-5'>Al-Qur'an Hori20n</p>
      </Navbar>
    </>
  );
}

export default NavigasiBar;
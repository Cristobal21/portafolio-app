import { FiDownload } from 'react-icons/fi'
import './css/buttonCV.css'

export const ButtonDownloadCV = () => {

  const enterHr = () => {
    let hr = document.querySelector('hr')
    hr.style.backgroundColor = '#FF0080'
  }

  const leaveHr = () => {
    let hr = document.querySelector('hr')
    hr.style.backgroundColor = '#00FFFF'
  }

  return (
    <>
      <div className="container-buttonCV mt-5 animate__animated animate__fadeInUp animate__delay-1s">
        <a
          className="btn button-cv"
          href="https://drive.google.com/file/d/1SUwCFywUErZEHlTlyi9tKkr9qvtfNkNc/view?usp=sharing"
          target="_blank"
          onMouseEnter={enterHr}
          onMouseLeave={leaveHr}
        >
          Descargar Currículum <FiDownload/>
        </a> 
        <hr />
      </div>
    </>
  )
}

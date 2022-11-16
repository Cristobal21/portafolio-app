import { FiDownload } from 'react-icons/fi'
import './css/buttonCV.css'
import cv from '../assets/CV_Cristobal_Valderrama_sf.pdf'

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
      <div className="container-buttonCV mt-5 animate__animated animate__zoomIn animate__delay-1s">
        <a
          className="btn button-cv"
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          download="Cristobal-Valderrama"
          onMouseEnter={enterHr}
          onMouseLeave={leaveHr}
        >
          Descargar Currículum <FiDownload />
        </a>
      </div>
    </>
  )
}

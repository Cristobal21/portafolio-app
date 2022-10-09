import { FiDownload } from 'react-icons/fi'
import './css/buttonCV.css'

export const ButtonDownloadCV = () => {
  return (
    <>
      <div className="mt-5 animate__animated animate__fadeInUp animate__delay-1s">
        <a
          className="btn button-cv"
          href="https://drive.google.com/file/d/1SUwCFywUErZEHlTlyi9tKkr9qvtfNkNc/view?usp=sharing"
          target="_blank"
        >
          Descargar Currículum <FiDownload/>
        </a> 
      </div>
    </>
  )
}

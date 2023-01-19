import { Button } from "react-bootstrap"
import "./css/buttonVisit.css"

export const ButtonVisitApp = ({ handleVisit, link }) => {
	return (
		<Button className="btnVisit" onClick={handleVisit}>
			Ver App
		</Button>
		// <a href={link} target="_blank" className="btnVisit" onClick={handleVisit}>
		// 	Ver App
		// </a>
	)
}

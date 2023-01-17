import { Card, ListGroup } from "react-bootstrap"
import { ListItemSkill } from "./ListItemSkill"
import * as img from "../assets"

export const CardListClima = ({ title }) => {
	const visitAppClima = (url) => {
		window.open(url, "_blank", "noopener,noreferrer")
	}

	return (
		<>
			<Card.Header className="cardHeader-project">{title}</Card.Header>
			<Card.Body>
				<ListGroup variant="flush" className="listgroup-project">
					<ListItemSkill name="Html" img={img.html3} />
					<ListItemSkill name="Javascript" img={img.js3} />
					<ListItemSkill name="React js" img={img.react3} />
					<ListItemSkill name="Tailwindcss" img={img.tw3} />
				</ListGroup>
			</Card.Body>
			<Card.Footer className="cardFooter-project">
				<Card.Text
					className="cardTextFooter-project"
					onClick={() => visitAppClima("https://weather-latino.netlify.app/")}
				>
					Visitar web
				</Card.Text>
			</Card.Footer>
		</>
	)
}

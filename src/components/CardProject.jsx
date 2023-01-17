import { useState } from "react"
import { Card } from "react-bootstrap"

export const CardProject = ({
	title,
	img,
	description,
	handleApp,
	classStyle,
}) => {
	return (
		<Card className={classStyle}>
			<Card.Header className="cardHeader-project">{title}</Card.Header>
			<Card.Img variant="top" src={img} alt={title} className="img-project" />
			<Card.Body>
				<Card.Text className="cardText-project">{description}</Card.Text>
			</Card.Body>
			<Card.Footer className="cardFooter-project" onClick={handleApp}>
				<Card.Text className="cardTextFooter-project">Ver más</Card.Text>
			</Card.Footer>
		</Card>
	)
}

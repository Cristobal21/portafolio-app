import { Card, ListGroup } from "react-bootstrap"

export const CardProjectSkill = ({
	title,
	handleApp,
	imgs,
	skill,
	link,
	classStyle,
}) => {
	const visitAppClima = (link) => {
		window.open(link, "_blank", "noopener,noreferrer")
	}

	return (
		<Card className={classStyle} onClick={handleApp}>
			<Card.Header className="cardHeader-project">{title}</Card.Header>
			<Card.Body>
				<ListGroup variant="flush" className="listgroup-project">
					{imgs.map((val, idx) => (
						<ListGroup.Item key={val}>
							<img
								src={val}
								alt="imagen"
								className="imgFooter-project"
								data-tip
								data-for="bst"
							/>
							{skill[idx]}
						</ListGroup.Item>
					))}
				</ListGroup>
			</Card.Body>
			<Card.Footer className="cardFooter-project">
				<Card.Text
					className="cardTextFooter-project"
					onClick={() => visitAppClima(link)}
				>
					Visitar web
				</Card.Text>
			</Card.Footer>
		</Card>
	)
}

import { Card, ListGroup } from "react-bootstrap"

export const CardProjectSkill = ({
	title,
	handleApp,
	imgs,
	skill,
	classStyle,
	link,
}) => {
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

			{link == undefined ? (
				<p className="txtEnDesarrollo">En Desarrollo</p>
			) : (
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="btnVisit"
				>
					Ver app
				</a>
			)}
		</Card>
	)
}

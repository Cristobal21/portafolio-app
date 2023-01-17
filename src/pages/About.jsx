import { useState } from "react"
import { Container, Row, Card, Col, ListGroup } from "react-bootstrap"
import { AiFillCaretRight } from "react-icons/ai"
import * as imgs from "../assets"
import "./css/info.css"
import "./css/about.css"
import { HeaderTitle } from "../components/HeaderTitle"

export const About = () => {
	const [imgState, setImgState] = useState(false)

	const enterCardImg = () => {
		setImgState(true)
	}
	const leaveCardImg = () => {
		setImgState(false)
	}

	return (
		<Container className="container-about" id="about">
			<Row className="row-header">
				<HeaderTitle title="¿quién es este tipo?" />
			</Row>
			<Row className="row-text">
				<Col sm={12} lg={6} xl={6} className="col-text">
					<Card border="dark" className="card-info">
						<Card.Header className="cardHeader-info">
							<AiFillCaretRight />
							Un poco sobre mí
						</Card.Header>
						<Card.Body className="cardBody-info">
							<ListGroup className="list-group-flush item-group">
								<ListGroup.Item className="list-item item-list">
									Nacido y criado en Chile desde 1995, hasta la fecha.
								</ListGroup.Item>
								<ListGroup.Item className="list-item item-list">
									El 2018 me titulé de la carrera Analista Programador
									Computacional, pero fue a inicios del año 2022 que mi interés
									y pasión por el desarrollo web comenzó.
								</ListGroup.Item>
								<ListGroup.Item className="list-item item-list">
									Desde entonces me he dedicado a estudiar de manera autodidacta
									todo lo que pudiera tener relación al desarrollo web, con un
									fuerte enfoque en el Front-end.
								</ListGroup.Item>
								<ListGroup.Item className="list-item item-list">
									En un mundo donde la tecnología crece a pasos agigantados,
									donde la era digital es la que predomina por sobre todo, ahí,
									en algún punto estoy yo, con ansias de poder utilizar mis
									conocimientos y habilidades para crear contenido digital que
									sirva de aporte para el mundo y rubro de la tecnología.
								</ListGroup.Item>
								<ListGroup.Item className="list-item item-list">
									Creo firmemente en la idea de que todos deberíamos saber
									programar, ya que el desarrollo web, es una de las mejores
									cosas del mundo.
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={12} lg={6} xl={4} className="col-img">
					<Card
						border="dark"
						className="card-img"
						onMouseEnter={enterCardImg}
						onMouseLeave={leaveCardImg}
						// style={{ width: "100%" }}
					>
						{!imgState ? (
							<Card.Img src={imgs.cristobal} alt="Cristobal-Valderrama" />
						) : (
							<Card.Img src={imgs.cristobal_hover} alt="Cristobal-Valderrama" />
						)}
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

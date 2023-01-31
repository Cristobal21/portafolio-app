import { Card } from "react-bootstrap"

export const CardSkill = ({
  link,
  img1,
  img2,
  enterSkill,
  leaveSkill,
  stateSkill,
}) => {
  return (
    <Card
      className='card-skill'
      onMouseEnter={enterSkill}
      onMouseLeave={leaveSkill}
    >
      <a href={link} target='_blank'>
        {!stateSkill ? (
          <Card.Img variant='top' src={img1} />
        ) : (
          <Card.Img variant='top' className='imgSkill' src={img2} />
        )}
      </a>
    </Card>
  )
}

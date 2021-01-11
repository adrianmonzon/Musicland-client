import './User-card.css'
import { Col, Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const UserCard = ({ name, image, instrument, _id, loggedUser }) => {

    return (

        <Col lg={4}>
            <Card className="text-center user-card">
                <Card.Img variant="top" src={image} />
                <Card.Body style={{ backgroundColor: "snow" }}>
                    <Card.Title>{name} | {instrument}</Card.Title>
                    {
                        loggedUser &&
                        
                        loggedUser._id === _id
                        ?
                        <Link className="btn btn-dark btn-block btn-sm" to="/editar-perfil">Editar</Link>
                        :
                            <Link className="btn btn-dark btn-block btn-sm" to={`/usuarios/${_id}`}>Ver detalles</Link>
                    }
                </Card.Body>
            </Card>
        </Col>

    )
}

export default UserCard
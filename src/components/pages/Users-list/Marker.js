import React from 'react';
import './Marker.css';
import {Link} from 'react-router-dom'

const Marker = ({ color, name, id, instrument })  => {
    return (
        <Link to={`/usuarios/${id}`}>
            <div
                className="pin bounce"
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={`${name} | ${instrument}`}
            />
            <div className="pulse" />
        </Link>
    );
};

export default Marker;
import React from 'react';
import './MainImage.css'

const MainImage = props => {
    return (
        <div
            className="mainImage"
            style={{
                height: '500px',
                backgroundImage: `url('${props.image}')`,
                backgroundSize: 'cover',
                position: 'relative'
            }}
        >
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }}>
                    <h2 style={{ color: 'white' }}>{props.title}</h2>
                    <p style={{ color: 'white', fontSize: '1rem' }}>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default MainImage;
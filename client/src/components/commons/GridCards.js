import React from 'react'
import { Col } from 'antd'
import './GridCards.css'

function GridCards(props) {
    if (props.landingPage) {
        return (
            <Col lg={6} md={8} xs={24}>
                {
                    props.image ?
                        <>
                            <div style={{ position: 'relative', overflow: 'hidden' }}>
                                <a href={`/movie/${props.movieId}`} className="hover">
                                    <img style={{ width: '100%', height: '480px' }} src={props.image} alt={props.movieName} />
                                </a>
                            </div>
                            <div className="credit">
                                <p style={{ textAlign: 'center' }}>{props.movieName}</p>
                            </div>
                        </>
                        :
                        <>
                            <div style={{ position: 'relative', overflow: 'hidden' }}>
                                <a href={`/movie/${props.movieId}`} className="hover">
                                    <div style={{ width: '100%', height: '480px', border: '1px solid #ddd' }}></div >
                                    <p className="hover_title">{props.movieName}</p>
                                </a>
                            </div>
                            <div className="credit">
                                <p style={{ textAlign: 'center' }}>{props.movieName}</p>
                            </div>
                        </>
                }
            </Col>
        )
    } else if (props.actorPage) {
        if (props.row) {
            return (
                <Col lg={6} md={8} xs={24}>
                    {
                        props.image ?
                            <>
                                <div style={{ position: 'relative', overflow: 'hidden' }}>
                                    <a href={`/movie/${props.movieId}`} className="hover">
                                        <img style={{ width: '100%', height: '480px' }} src={props.image} alt={props.movieName} />
                                    </a>
                                </div>
                                <div className="credit">
                                    <p>{props.movieName}</p>
                                    <p>{props.character ? props.character : "(unkowned)"}</p>
                                </div>

                            </>
                            :
                            <>
                                <div style={{ position: 'relative', overflow: 'hidden' }}>
                                    <a href={`/movie/${props.movieId}`} className="hover">
                                        <div style={{ width: '100%', height: '480px', border: '1px solid #ddd' }}></div >
                                        <p className="hover_title">{props.movieName}</p>
                                    </a>
                                </div>
                                <div className="credit">
                                    <p>{props.movieName}</p>
                                    <p>{props.character ? props.character : "(unkowned)"}</p>
                                </div>
                            </>
                    }
                </Col>
            )
        } else {
            return (
                <Col style={{ display: 'inline-block' }}>
                    {
                        props.image ?
                            <>
                                <div style={{ position: 'relative', overflow: 'hidden' }}>
                                    <a href={`/movie/${props.movieId}`} className="hover">
                                        <img style={{ width: '100%', height: '480px' }} src={props.image} alt={props.movieName} />
                                    </a>
                                </div>
                                <div className="credit">
                                    <p>{props.movieName}</p>
                                    <p>{props.character ? props.character : "(unkowned)"}</p>
                                </div>
                            </>
                            :
                            <>
                                <div style={{ position: 'relative', overflow: 'hidden' }}>
                                    <a href={`/movie/${props.movieId}`} className="hover">
                                        <div style={{ width: '100%', height: '480px', border: '1px solid #ddd' }}></div >
                                        <p className="hover_title">{props.movieName}</p>
                                    </a>
                                </div>
                                <div className="credit">
                                    <p>{props.movieName}</p>
                                    <p>{props.character ? props.character : "(unkowned)"}</p>
                                </div>
                            </>
                    }
                </Col>
            )
        }
    } else {
        return (
            <Col lg={6} md={8} xs={24}>
                {
                    props.image ?
                        <>
                            <div style={{ position: 'relative', overflow: 'hidden' }}>
                                <a href={`/actor/${props.actorId}`} className="hover">
                                    <img style={{ width: '100%', height: '480px' }} src={props.image} alt={props.actorName} />
                                </a>
                            </div>
                            <div className="credit">
                                <p>{props.actorName}</p>
                                <p>{props.character ? props.character : "(unkowned)"}</p>
                            </div>
                        </>
                        :
                        <>
                            <div style={{ position: 'relative', overflow: 'hidden' }}>
                                <a href={`/actor/${props.actorId}`} className="hover">
                                    <div style={{ width: '100%', height: '480px', border: '1px solid #ddd' }}></div >
                                    <p className="hover_title">{props.actorName}</p>
                                </a>
                            </div>
                            <div className="credit">
                                <p>{props.actorName}</p>
                                <p>{props.character ? props.character : "(unkowned)"}</p>
                            </div>
                        </>
                }
            </Col>
        )
    }
}

export default GridCards

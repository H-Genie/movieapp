import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../Config';
import MainImage from '../LandingPage/MainImage';
import MovieInfo from './MovieInfo';
import { Row } from 'antd';
import GridCards from '../commons/GridCards';

function MovieDetail(props) {
    let movieId = props.match.params.movieId;
    const [movie, setMovie] = useState([]);
    const [casts, setCasts] = useState([]);
    const [actorToggle, setActorToggle] = useState(false);

    document.title = movie.title === undefined ? "Movie App" : movie.title;

    useEffect(() => {
        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=ko-KR`;
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko-KR`;

        fetch(endpointInfo)
            .then(response => response.json())
            .then(response => {
                setMovie(response);
            })

        fetch(endpointCrew)
            .then(response => response.json())
            .then(response => {
                setCasts(response.cast)
            })
    }, [movieId])

    const toggleActorView = () => setActorToggle(!actorToggle)

    return (
        <div>
            <MainImage
                image={movie.backdrop_path ? `${IMAGE_BASE_URL}w1280${movie.backdrop_path}` : null}
                title={movie.title}
                text={movie.overview}
            />
            <div style={{ width: '85%', margin: '1rem auto' }}>
                <MovieInfo movie={movie} genres={movie.genres} />
                <br />

                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <button onClick={toggleActorView}>Toggle Actor View</button>
                </div>

                {actorToggle &&
                    <Row gutter={[35, 0]}>
                        {casts && casts.map((cast, index) => (
                            <React.Fragment key={index}>
                                <GridCards
                                    image={cast.profile_path ? `${IMAGE_BASE_URL}w300${cast.profile_path}` : null}
                                    actorName={cast.name}
                                    actorId={cast.id}
                                    character={cast.character}
                                />
                            </React.Fragment>
                        ))}
                    </Row>}
            </div>
        </div>
    )
}

export default MovieDetail

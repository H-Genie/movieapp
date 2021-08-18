import React, { useEffect, useState } from 'react'
import GridCards from '../commons/GridCards';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../Config';
import './ActorDetail.css';
import { Row } from 'antd'

function ActorDetail(props) {
    const [actor, setActor] = useState([])
    const [name, setName] = useState([])
    const [credits, setCredits] = useState([])
    const [select, setSelect] = useState("popularity")

    let actorId = props.match.params.actorId;
    document.title = actor.name === undefined ? "Movie App" : actor.name;

    useEffect(() => {
        let endpoint = `${API_URL}person/${actorId}?api_key=${API_KEY}&language=en-US`;

        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                setActor(response);
                setName(response.also_known_as)
            })

        fetchCredits(select)
    }, [select])

    const fetchCredits = select => {
        let credits = `${API_URL}person/${actorId}/movie_credits?api_key=${API_KEY}&language=ko-KR`;

        const sortByPopularity = (a, b) => {
            if (a.popularity === b.popularity) return 0;
            return b.popularity - a.popularity;
        }
        const sortByRelease = (a, b) => {
            if (a.release_date === b.release_date) return 0;
            return a.release_date > b.release_date ? -1 : 1;
        }

        if (select === "popularity") {
            fetch(credits)
                .then(response => response.json())
                .then(response => response.cast.sort(sortByPopularity))
                .then(response => {
                    setCredits(response)
                })
        } else {
            fetch(credits)
                .then(response => response.json())
                .then(response => response.cast.sort(sortByRelease))
                .then(response => {
                    setCredits(response)
                })
        }
    }

    const onChange = e => {
        e.preventDefault();
        setSelect(e.currentTarget.value);
    }

    return (
        <section style={{ width: '85%', margin: '2rem auto' }}>
            <div className="actor_top">
                {
                    actor.profile_path ?
                        <img src={`${IMAGE_BASE_URL}w300${actor.profile_path}`} alt={actor.name} style={{ width: '300px', height: '450px' }} /> :
                        <div className="noImage">No Image</div>
                }

                <div>
                    <h1>{actor.name}</h1>
                    {actor.biography && <p>{actor.biography}</p>}
                </div>
            </div>
            <br />
            <br />

            <div className="actor_bottom">

                <div style={{ minWidth: '300px' }}>
                    {name.length || actor.birthday || actor.place_of_birth ? <h2>인물 정보</h2> : null}

                    {name && name.map((item, i) => <p key={i}>{item}</p>)}

                    {
                        actor.birthday &&
                        <>
                            <h3>생년월일</h3>
                            <p>{actor.birthday}</p>
                        </>
                    }

                    {
                        actor.deathday &&
                        <>
                            <h3>사망</h3>
                            <p>{actor.deathday}</p>
                        </>
                    }

                    {
                        actor.place_of_birth &&
                        <>
                            <h3>출생지</h3>
                            <p>{actor.place_of_birth}</p>
                        </>
                    }

                    {
                        actor.homepage &&
                        <h3>
                            <a href={actor.homepage} target="_blank" rel="noopener noreferrer">홈페이지</a>
                        </h3>
                    }
                </div>

                <div>
                    <div className="credits">
                        <h2>출연작</h2>
                        <select onChange={onChange}>
                            <option value="popularity">인기순</option>
                            <option value="release">출시일순</option>
                        </select>
                    </div>
                    <Row gutter={[35, 0]}>
                        {credits && credits.map((credit, index) => (
                            <GridCards
                                actorPage
                                key={index}
                                image={credit.poster_path ? `${IMAGE_BASE_URL}w300${credit.poster_path}` : null}
                                movieName={credit.title}
                                movieId={credit.id}
                                row={credits.length > 3 ? true : false}
                                character={credit.character}
                            />
                        ))}
                    </Row>
                </div>

            </div>
        </section>
    )
}

export default ActorDetail

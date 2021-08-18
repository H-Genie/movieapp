import React from 'react'
import { Descriptions } from 'antd';

function MovieInfo(props) {
    let { movie } = props;

    return (
        <Descriptions title="Movie Info" bordered column={{ lg: 3, md: 2, sm: 1, xs: 1, xxs: 1 }}>
            <Descriptions.Item label="제목">{movie.title}</Descriptions.Item>
            <Descriptions.Item label="평점">
                {movie.vote_average ? movie.vote_average : null}
            </Descriptions.Item>

            <Descriptions.Item label="개봉일">
                {movie.release_date ? movie.release_date : "개봉 전"}
            </Descriptions.Item>
            <Descriptions.Item label="상영시간">
                {movie.runtime ? `${movie.runtime} 분` : null}
            </Descriptions.Item>

            <Descriptions.Item label="제작비">
                {movie.budget ? `${movie.budget.toLocaleString()} $` : null}
            </Descriptions.Item>
            <Descriptions.Item label="수익">
                {movie.revenue ? `${movie.revenue.toLocaleString()} $` : null}
            </Descriptions.Item>

            <Descriptions.Item label="장르" span={3}>
                {movie.genres !== undefined ? movie.genres.map((genre, i) => <span key={i} style={{ marginRight: '1rem' }}>{genre.name}</span>) : null}
            </Descriptions.Item>

            <Descriptions.Item label="키워드">{movie.tagline}</Descriptions.Item>
        </Descriptions>
    )
}

export default MovieInfo
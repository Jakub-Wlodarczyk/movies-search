import React from 'react';
import noImage from '../../assets/sample_poster.jpg';

/**
 * The function displays some details about a movie
 * @param {Object} details
 * @param {String} baseUrl
 * @returns {JSX}
 */
const MovieDetails = ({ details, baseUrl }) => {
	const {
		budget,
		title,
		overview,
		release_date,
		revenue,
		runtime,
		poster_path
	} = details;

	return (
		<div className="movie-details">
			<div className="movie-details__movie">
				<div className="movie-details__new-search">
					<a href="/">SEARCH AGAIN</a>
				</div>
				<h1>{title}</h1>
				<p><b>BUDGET: </b>{budget} $</p>
				<p><b>REVENUE: </b>{revenue} $</p>
				<p><b>RELEASE DATE: </b>{release_date}</p>
				<p><b>RUNTIME: </b>{runtime} min</p>
				<img
					name={`${title}-image`}
					src={poster_path === undefined ? noImage : `${baseUrl}original/${poster_path}`}
				/>
				<p>{overview}</p>
			</div>
		</div>
	)
};

MovieDetails.propTypes = {
	details: React.PropTypes.shape({
		budget: React.PropTypes.number,
		title: React.PropTypes.string,
		overview: React.PropTypes.string,
		release_date: React.PropTypes.string,
		revenue: React.PropTypes.number,
		runtime: React.PropTypes.number,
		poster_path: React.PropTypes.string
	}).isRequired,
	baseUrl: React.PropTypes.string.isRequired
};

export default MovieDetails;

import React from 'react';
import noImage from '../../assets/sample_poster.jpg';
import { getMovieDetails } from '../../app/resources';
import MovieDetails from '../MovieDetails';

/**
 * The function displays fetched results as a grid
 * @param {Array} movies
 * @param {String} baseUrl
 * @returns {JSX}
 */
class MoviesList extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			showMoviesList: true,
			showMovieDetails: false,
			movieDetails: {}
		};

		this.getMovieDetails = this.getMovieDetails.bind(this);
	}

	getMovieDetails (e) {
		const movieId = e.target.id;

		getMovieDetails(movieId).then(details => this.setState({
			movieDetails: details,
			showMoviesList: false,
			showMovieDetails: true
		}));
	}

	render () {
		const { movies, baseUrl } = this.props;

		return (
			<div>
				{this.state.showMoviesList &&
				<div className="movies-list">
					{movies.map(movie => (
						<div key={`${movie.title}-${movie.id}`} className="movies-list__single-movie">
							<p>TITLE: {movie.title}</p>
							<p>RELEASE DATE: {movie.release_date}</p>
							<img
								name={`${movie.title}-image`}
								src={movie.poster_path === null ? noImage : `${baseUrl}w500/${movie.poster_path}`}
								id={movie.id}
								onClick={this.getMovieDetails}
							/>
						</div>
					))}
				</div>
				}
				{this.state.showMovieDetails && <MovieDetails baseUrl={baseUrl} details={this.state.movieDetails} />}
			</div>
		);
	}
}

MoviesList.propTypes = {
	movies: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
	baseUrl: React.PropTypes.string.isRequired
};

export default MoviesList;

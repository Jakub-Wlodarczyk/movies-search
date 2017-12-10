import React from 'react';
import {
	getMovie,
	getConfiguration
} from '../../app/resources';
import movieDbLogo from '../../assets/movie_db_logo.png';
import MoviesList from '../MoviesList';

/**
 * The function provides a movie search functionality
 * @returns {JSX}
 */
class MoviesSearch extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			searchPhrase: '',
			searchInfo: '',
			movies: [],
			APIImageBaseUrl: '',
			isSearchActive: true
		};

		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}

	componentDidMount () {
		getConfiguration().then(config => this.setState({
			APIImageBaseUrl: config.images.base_url
		}));
	}

	handleSearchChange (e) {
		this.setState({
			searchPhrase: e.target.value
		});
	}

	handleSearchSubmit (e) {
		e.preventDefault();
		const searchPhrase = this.state.searchPhrase;

		getMovie(searchPhrase).then(data => {
			let movies = [];
			let searchMessage;
			let isSearchActive;

			if (data.errors) {
				searchMessage = data.errors[0];
				isSearchActive = true;
			} else if (data.total_results === 0) {
				searchMessage = 'There were no results for your search. Please try with a different title.';
				isSearchActive = true;
			} else {
				movies = data.results;
				searchMessage = '';
				isSearchActive = false;
			}

			this.setState({
				movies,
				searchInfo: searchMessage,
				isSearchActive
			})
		});
	}

	render () {
		return (
			<div className="movies-search">
				<div className="movies-search__movie-db-logo">
					<img name="movie-db-logo-image" src={movieDbLogo} />
				</div>
				{this.state.isSearchActive &&
				<form onSubmit={this.handleSearchSubmit} name='movies-search-form'>
					<label>
						Search for a movie:
						<input
							type="text"
							name="searchPhrase"
							placeholder="example movie: Shrek"
							value={this.state.searchPhrase}
							onChange={this.handleSearchChange}
						/>
					</label>
					<input type="submit" value="Search"/>
				</form>
				}

				{this.state.searchInfo.length > 0 &&
				<p className="movies-search__search-info">{this.state.searchInfo}</p>
				}

				{this.state.movies.length > 0 &&
					<MoviesList movies={this.state.movies} baseUrl={this.state.APIImageBaseUrl} />
				}
			</div>
		);
	}
}

export default MoviesSearch;

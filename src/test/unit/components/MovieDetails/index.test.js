import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieDetails from '../../../../components/MovieDetails';

describe('MovieDetails', () => {
	it('should render the MovieDetails view', () => {
		const props = {
			details: {
				budget: 100,
				title: 'some title',
				overview: 'some longer description',
				release_date: '10-03-2005',
				revenue: 200,
				runtime: 150,
				poster_path: '/some-path'
			},
			baseUrl: '/some-base-url'
		};

		const wrapper = shallow(<MovieDetails {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render the MovieDetails container', () => {
		const props = {
			details: {
				budget: 100,
				title: 'some title',
				overview: 'some longer description',
				release_date: '10-03-2005',
				revenue: 200,
				runtime: 150,
				poster_path: '/some-path'
			},
			baseUrl: '/some-base-url'
		};

		const wrapper = shallow(<MovieDetails {...props} />);
		expect(wrapper.find('.movie-details').exists()).toBeTruthy();
	});
});

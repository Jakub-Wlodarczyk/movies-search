import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MoviesList from '../../../../components/MoviesList';

describe('MoviesList', () => {
	it('should render the MoviesList view', () => {
		const props = {
			movies: [
				{
					title: 'title 1',
					release_date: '01-01-2000',
					poster_path: '/path1'
				},
				{
					title: 'title 2',
					release_date: '02-02-2000',
					poster_path: '/path2'
				}
			],
			baseUrl: '/some-base-url'
		};

		const wrapper = shallow(<MoviesList {...props} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render the MoviesList container', () => {
		const props = {
			movies: [
				{
					title: 'title 1',
					release_date: '01-01-2000',
					poster_path: '/path1'
				},
				{
					title: 'title 2',
					release_date: '02-02-2000',
					poster_path: '/path2'
				}
			],
			baseUrl: '/some-base-url'
		};

		const wrapper = shallow(<MoviesList {...props} />);
		expect(wrapper.find('.movies-list').exists()).toBeTruthy();
	});
});

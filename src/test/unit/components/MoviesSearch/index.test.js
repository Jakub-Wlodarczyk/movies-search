import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MoviesSearch from '../../../../components/MoviesSearch';

describe('MoviesSearch', () => {
	it('should render the MoviesSearch view', () => {
		const wrapper = shallow(<MoviesSearch />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render the MoviesSearch container', () => {
		const wrapper = shallow(<MoviesSearch />);
		expect(wrapper.find('.movies-search').exists()).toBeTruthy();
	});

	it('should render the MoviesSearch search form', () => {
		const wrapper = shallow(<MoviesSearch />);
		expect(wrapper.find('form[name="movies-search-form"]').exists()).toBeTruthy();
	});
});

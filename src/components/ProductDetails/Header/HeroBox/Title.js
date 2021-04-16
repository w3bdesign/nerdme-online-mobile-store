import React from 'react';
import { connect } from 'react-redux';
import { getProductTitle } from '../../state/selectors';

const Title = ({ title }) => <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">{title}</h2>

export default connect((state) => ({ title: getProductTitle(state) }))(Title);
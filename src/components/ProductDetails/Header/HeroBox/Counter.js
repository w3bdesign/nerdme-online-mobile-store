import React from 'react';
import { getProductCounter } from '../../state/selectors'
import { setProductCounter } from '../../state/actions'
import { COUNTER_EVENTS } from '../../state/constants'
import { connect } from 'react-redux';

const { PLUS, MINUS } = COUNTER_EVENTS;

const Counter = ({ counter, setProductCounter }) => {

  const handleOnCounterClick = (state) => {
    if (state === MINUS && counter === 1) return
    setProductCounter(state === MINUS ? counter - 1 : counter + 1)
  }

  
  return (
    <div className="mb-0.5 mt-3 w-28 h-9 flex rounded text-gray-700 border border-gray-300 divide-x divide-gray-300">

      <button onClick={() => handleOnCounterClick(MINUS)} className="flex-1 flex items-center justify-center focus:outline-none">
        <svg className="w-5 h-5 px-0.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
      </button>

      <div className="flex-1 flex items-center justify-center font-medium">{counter}</div>

      <button onClick={() => handleOnCounterClick(PLUS)} className="flex-1 flex items-center justify-center focus:outline-none">
        <svg className="w-5 h-5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
      </button>

    </div>
  );
}

const mapStateToProps = (state) => ({ counter: getProductCounter(state) });

export default connect(mapStateToProps, { setProductCounter })(Counter);


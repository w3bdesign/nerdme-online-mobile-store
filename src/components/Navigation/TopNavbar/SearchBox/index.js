import React, { useState } from 'react';
import SearchField from './SearchField';
import SearchOptions from './SearchOptions';
import VerticalDivider from './VerticalDivider';
import { SEARCH_OPTONS_CONFIGS } from '../../state/constants'

const SearchBox = () => {
  const [selectedOptionId, setSelectedOptionId] = useState(SEARCH_OPTONS_CONFIGS[0].id);
  const [isFocused, setIsFocused] = useState(false);

  // searching is not implemented yet

  return (
    <div className='hidden lg:flex flex-auto relative'>
      <div onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} className={`${isFocused ? '' : 'hover:ring-gray-100 hover:bg-opacity-30'} border border-transparent focus-within:border-gray-200 ring ring-transparent focus-within:ring-gray-200 bg-gray-100 focus-within:bg-white mx-4 max-w-3xl h-14 flex-auto flex items-center rounded-md transition-all ease-in duration-200`}>
        <SearchField selectedOptionId={selectedOptionId} />
        <VerticalDivider />
        <SearchOptions setSelectedOptionId={setSelectedOptionId} options={SEARCH_OPTONS_CONFIGS} />
      </div>
    </div>
  );
};


export default SearchBox;

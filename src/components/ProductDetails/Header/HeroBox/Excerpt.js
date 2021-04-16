import React from 'react';
import { connect } from 'react-redux';
import { getProductExcerpt } from '../../state/selectors'

const Excerpt = ({ excerpt }) => {

    // you may want to add line-clamp-{n} to have a nicly truncated text, but since it is an excerpt, then, no trancation needed

    return (
        <div class="mt-4 flex items-center">
            <p class="pr-2 sm:pr-10 text-sm text-gray-800">{excerpt}</p>
        </div>
    );
}

const mapStateToProps = (state) => ({ excerpt: getProductExcerpt(state) });

export default connect(mapStateToProps)(Excerpt);

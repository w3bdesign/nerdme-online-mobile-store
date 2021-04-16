import React from 'react';
import { connect } from 'react-redux';
import QAndA from './QAndA';
import { getProductFAQs } from '../../state/selectors'

const QAndAList = ({ questionsAndAnswers }) => {

    return (
        <div className="divide-y p-6 sm:p-8 ">
            {questionsAndAnswers.map((item, index) => {
                return <QAndA key={index} question={item.question} answer={item.answer} />
            })}
        </div>
    );
}


const mapStateToProps = (state) => {
    const  questionsAndAnswers = getProductFAQs(state); 
    return { questionsAndAnswers }
}

export default connect(mapStateToProps)(QAndAList);

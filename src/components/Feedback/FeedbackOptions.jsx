import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return <div className="CounterOptions">
        { 
            options.map(option => <button key={option} type="button" onClick={onLeaveFeedback}>{option}</button>)
        }
                </div>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}

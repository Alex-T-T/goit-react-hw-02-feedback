import PropTypes from 'prop-types';
import css from './Feedback.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return <div className={css.counterOptions}>
        { 
            options.map(option => <button className={css.counterOptionsItem} key={option} name={ option} type="button" onClick={onLeaveFeedback}>{option}</button>)
        }
                </div>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}

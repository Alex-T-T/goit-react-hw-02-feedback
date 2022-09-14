import PropTypes from 'prop-types';
import { Notification } from './Notification';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return <div className="CounterResults">
                    <h2 className="CounterResultsStatistics">Statistics</h2>
        { total === 0 ? (<Notification message="There is no feedback" />) : (<>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {!positivePercentage ? 0 : positivePercentage } %</p>
            </>)
}
            </div>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

// import PropTypes from 'prop-types';
import React from "react";


class FeedbackCounter extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handlePositiveIncrement = () => {
        // this.setState({ good: 3,})
        this.setState((prevState) => {
            return {
                good: prevState.good + 1
            }
        })
    }
    handleNeutralIncrement = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1
            }
        })
    }
    handleNegativeIncrement = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1
            }
        })
    }

    countTotalFeedback = () => { 
        let totalFeedbacks = 0;
        totalFeedbacks = this.state.good + this.state.neutral + this.state.bad;

        return totalFeedbacks 
    }

    countPositiveFeedbackPercentage = () => {
        let positiveFeedbackPercentage = 0;
        positiveFeedbackPercentage =  Math.round (this.state.good / this.countTotalFeedback() * 100);
        return positiveFeedbackPercentage
    }

    render() {
        return (
            <div className="Counter">
                <h2 className="CounterTitle">Please leave feedback</h2>

                <div className="CounterPositions">
                    <button type="button" onClick={this.handlePositiveIncrement}>Good</button>
                    <button type="button" onClick={this.handleNeutralIncrement}>Neutral</button>
                    <button type="button" onClick={this.handleNegativeIncrement}>Bad</button>
                </div>

                <div className="CounterResults">
                    <h2 className="CounterResultsStatistics">Statistics</h2>
                    <p>Good: {this.state.good}</p>
                    <p>Neutral: {this.state.neutral}</p>
                    <p>Bad: {this.state.bad}</p>
                    <p>Total: {this.countTotalFeedback()}</p>
                    <p>Positive feedback: {!this.countPositiveFeedbackPercentage() ? 0 : this.countPositiveFeedbackPercentage() } %</p>
                </div>

            </div>
        )    
    }
}

export default FeedbackCounter;







// ============================== 
// import { Title } from './Title';
// import { Button } from './Button';
// import { StatsInfo } from './StatsInfo';
// import css from './Feedback.module.css';



// export const Feedback = () => {

//     return (
//         <div className={css.feedback}>
            
//             <Title title='Please leave feedback' />
            
//             <div className={css.points}>
//                 <Button onClick={() => console.log('click on good')} text='Good'></Button>
//                 <Button text= 'Neutral'></Button>
//                 <Button text= 'Bad'></Button>
//             </div>
            
//             <Title title='Statistics' />    
//             <StatsInfo text='Good'/>
//             <StatsInfo text='Neutral'/>
//             <StatsInfo text='Bad'/>
//         </div>

//     )
// }

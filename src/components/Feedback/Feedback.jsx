// import PropTypes from 'prop-types';
import React from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';


class FeedbackCounter extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleIncrement = (event) => {
    
        
        this.setState((prevState) => {
            let option = event.target.textContent

            if (option === 'Good') {
                return {
                    good: prevState.good + 1
                }
                
            } else if (option === 'Neutral') {
                return {
                    neutral: prevState.neutral + 1
                }
            } else {return {
                bad: prevState.bad + 1
            }}

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
                
                <>

                <Section title="Please leave feedback">

                    <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.handleIncrement}/>

                    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />

                </Section>
            
                </>
            
        )    
    }
}

export default FeedbackCounter;

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
        let position = event.currentTarget.name
        
        this.setState((prevState) => ({ [position]: prevState[position] + 1 }))
    };

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

                    <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleIncrement}/>

                    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />

                </Section>
            
                </>
            
        )    
    }
}

export default FeedbackCounter;


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    // console.log(options)
    // console.log(onLeaveFeedback)

    

    return <div className="CounterOptions">
        { 
            options.map(option => <button key={option} type="button" onClick={onLeaveFeedback}>{option}</button>)
        }
                </div>
}

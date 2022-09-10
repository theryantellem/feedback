import React from 'react'
import { useContext } from 'react'
import FeedbackContext from "../context/FeedbackContext"

function Feedbackstats() {
    //Calculate rating avg

    const {feedback} = useContext(FeedbackContext)

    let average = feedback.reduce((acc, curl) => {
        return acc + curl.rating

    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

    
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default Feedbackstats
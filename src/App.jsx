import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'
import './App.css'
import { useState, useEffect } from 'react'

const App = () => {
  const [feedback, changeFeedbackState] = useState(() => {
    const feedbackLocalStorage = window.localStorage.getItem('feedback');

    if (feedbackLocalStorage !== null) {
      return JSON.parse(feedbackLocalStorage);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);


  const updateFeedback = feedbackType => {
       changeFeedbackState({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 })
       
  }
  const resetFeedback = () => { changeFeedbackState({good: 0,
    neutral: 0,
    bad: 0})};
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <section className='section'>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback === 0 ? (<Notification message={'No feedback yet'}/>) : (<Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={totalFeedback} positive={positiveFeedback} />)}
    </section>
  )
}

export default App

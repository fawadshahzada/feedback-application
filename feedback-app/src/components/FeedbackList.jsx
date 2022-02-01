import PropsTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem";
function feedbackList( {feedback} ) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
  return (
  <div className="feedback-list">
    
    {feedback.map((item) => {
      return <FeedbackItem item={item}/>
    })}
  </div>
  )
}
feedbackList.propsTypes = {
  feedback: PropsTypes.arrayOf(
    PropsTypes.shape({
      id:PropsTypes.number.isRequired,
      text: PropsTypes.string.isRequired,
      rating: PropsTypes.number.isRequired,
    })
  )
}

export default feedbackList;

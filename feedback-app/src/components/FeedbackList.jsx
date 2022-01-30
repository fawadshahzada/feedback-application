import FeedbackItem from "./FeedbackItem";
function feedbackList( {feedback} ) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
  return (
  <div className="feedback-list">
    {feedback.map((item) => {
      return <FeedbackItem key={item.id} item={item}/>
    })}
  </div>
  )
}

export default feedbackList;

import PropsTypes from 'prop-types'
import Card from "./shared/Card";
function FeedbackItem( {item} ) {

  return (
       <Card reverse={false}>
           <div className="num-display">{item.rating}</div>
           <div className="text-display">{item.text}</div>
           <div className="num-display">{item.rating}</div>
           <div className="text-display">{item.text}</div>

       </Card>
  )
}
FeedbackItem.propsTypes = {
  item: PropsTypes.object.isRequired,
}
export default FeedbackItem;
 
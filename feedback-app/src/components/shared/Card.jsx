import PropsTypes from 'prop-types'
;

function Card({children, reverse}) {
  return <div className={`card ${reverse && 'reverse'}`}>
  {children}</div>
}

Card.defaultProps = {
    reverse: false
}
Card.PropsTypes = {
    children:PropsTypes.node.isRequired,
    reverse: PropsTypes.bool,
}
export default Card;


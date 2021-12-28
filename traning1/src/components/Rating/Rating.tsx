type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarPropsType = {
  selected: boolean
}

function Rating(props: RatingPropsType) {
  console.log("Rating rendering");
  return (
    <div className="rating-list">
      <Star selected={props.value > 0}/>
      <Star selected={props.value > 1}/>
      <Star selected={props.value > 2}/>
      <Star selected={props.value > 3}/>
      <Star selected={props.value > 4}/>
    </div>
  )
}

function Star(props: StarPropsType) {
  console.log("Star rendering");
  if (props.selected) {
    return <span className="rating-list__item"><b>star </b></span>
  }
  return <span className="rating-list__item">star </span>
}

export default Rating;

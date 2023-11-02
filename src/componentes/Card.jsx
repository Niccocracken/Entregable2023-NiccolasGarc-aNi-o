const Card = (props)=> {
  if(props.animal!=''|props.clr!=''){
  return (
    <div>
      <h2>Has creado: {props.animal} de color {props.clr}</h2>
    </div>
  )
  }
}

export default Card;

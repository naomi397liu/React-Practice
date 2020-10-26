var tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  }
];

function TradingCard(props) {
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <img src={props.imgUrl} />
      <p>Skill: {props.skill} </p>
    </div>
  );
}

function TradingCardContainer() {
  const floatCard = {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  };
  const[cards, updateCards] = React.useState([floatCard])
  
  const tradingCards = [];
  for (const currentCard of cards){
    tradingCards.push(<TradingCard 
      key={currentCard.name}
      name={currentCard.name}
      skill={currentCard.skill}
      imgUrl ={currentCard.imgUrl}
      />
      );
  }
  React.useEffect(()=>{
    fetch('/cards.json')
    .then((reponse) => Response.json())
    .then((data) => updateCards(data))
  },[])
  return (<div>{tradingCards}</div>);
}

ReactDOM.render(
  <TradingCardContainer />,
  document.getElementById('container')
);

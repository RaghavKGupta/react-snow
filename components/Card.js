import Link from 'next/link'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


function display(card) {
        return <>
            <div class="usa-card__container">
      <header class="usa-card__header">
        <h2 class="usa-card__heading">{card.heading}</h2>
      </header>
      <div class="usa-card__body">
        <p>
          {ReactHtmlParser(card.body)}
        </p>
      </div>
      <div class="usa-card__footer">
        <button class="usa-button">{card.button}</button>
      </div>
    </div> 
      </>
}

function getList (card) {
var b = []
    for (let index = 1; index <= card.how_many_cards_needed; index++) {
        b.push({index:index,heading:card[`card_${index}_title`],body:card[`card_${index}_body`],button:card[`card_${index}_button_title`]})
    }
return b
}

const Card = ({ card }) => {
    var mapping = getList(card)
  return (
    <div class="usa-card">
       {mapping.map(x => display(x))} 
    </div>
  )
}
export default Card

import Link from 'next/link'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


function display(accordion) {
        return <>
        <div key={accordion.index}>
        <h4 class="usa-accordion__heading">
        <button class="usa-accordion__button"
          aria-expanded="true"
          aria-controls={accordion.index}>
          {accordion.heading}
        </button>
      </h4>
      <div id={accordion.index} class="usa-accordion__content usa-prose">
      {ReactHtmlParser(accordion.body)}
      </div>

        </div> 
      </>
}

function getList (accordion) {
var b = []
    for (let index = 1; index <= accordion.number_of_accordions_needed; index++) {
        b.push({index:`a${index}`,heading:accordion[`accordion_${index}_heading`],body:accordion[`accordion_${index}_body`]})
    }
return b
}

const Accordion = ({ accordion }) => {
    var mapping = getList(accordion)
  return (
    <div class="usa-accordion">
       {mapping.map(x => display(x))} 
    </div>
  )
}
export default Accordion

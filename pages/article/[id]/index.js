import { username, psd } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Accordion from '../../../components/Accordion';
import Card from '../../../components/Card';
import btoa from 'btoa'
const reactStringReplace = require('react-string-replace');

const article = ({ article }) => {
  let a = article.result.body
  let splitText = a.split(/({#.*#})/gm)

  return (
    <>
      <h1>{article.result.name_of_page}</h1>

      <span class="usa-tag">{article.result.sys_updated_on}</span>

     
      {splitText.map(element => {
      if(element.includes('#%accordion%#')){
        return <Accordion accordion={article.result}></Accordion>
        } else if (element.includes('##%card%##')){
          return <Card card={article.result}></Card>
        } else {
          return ReactHtmlParser(element)
        }
      })}
      
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://dev69061.service-now.com/api/now/table/x_682526_page_bu_0_cwig_page_builder/${context.params.id}`, {
    method: 'get',
    headers: {
      'Authorization': 'Basic ' + btoa(`${username}:${psd}`)
      }
  })

  const article = await res.json()

  return {
    props: {
      article,
    }
  }
}

export default article

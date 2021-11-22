import { username, psd } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Accordion from '../../../components/Accordion';
import Card from '../../../components/Card';
const reactStringReplace = require('react-string-replace');

const article = ({ article }) => {
  let a = article.result.body
  let b = (reactStringReplace(a, '#%accordion%#', (match, i) => (
    <Accordion accordion={article.result}></Accordion>
)))
  let c = (reactStringReplace(b, '##%card%##', (match, i) => (
    <Card card={article.result}></Card>
)))

  return (
    <>
      <h1>{article.result.name_of_page}</h1>
      <span class="usa-tag">{article.result.sys_updated_on}</span>
      
      {ReactHtmlParser(c)}
      
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
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
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://dev69061.service-now.com/api/now/table/x_682526_page_bu_0_cwig_page_builder`, {
    method: 'get',
    headers: {
      'Authorization': 'Basic ' + btoa(`${username}:${psd}`)
      }
  })

  const articles = await res.json()

  const ids = articles.result.map((article) => article.sys_id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default article

import { username, psd } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Accordion from '../../../components/Accordion';


const article = ({ article }) => {
  let a = article.result.body
  let b = a.substring(a.indexOf('#%')+2,a.indexOf('%#'))
  let c = a.substring(a.indexOf('{{')+2,a.indexOf('}}'))
  let d = a.substring(0,a.indexOf('{{'))
  let e = a.substring(a.indexOf('}}')+2,a.length)
  return (
    <>
      <h1>{article.result.name_of_page}</h1>
      <span class="usa-tag">{article.result.sys_updated_on}</span>
      {((b =="accordion")?<>
      <div>{ReactHtmlParser(d)}</div>
      <Accordion accordion={article.result}></Accordion>
      <div>{ReactHtmlParser(e)}</div></>:<div>hello</div>)
      }
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
  console.log(article)

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

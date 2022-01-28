import { username, psd } from '../config'
import ArticleList from '../components/ArticleList'


export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles.result} />
    </div>
  )
}

export const getServerSideProps = async () => {
  /*const res = await fetch(`${server}/api/articles`)*/
  const res = await fetch(`https://dev69061.service-now.com/api/now/table/x_682526_page_bu_0_cwig_page_builder`, {
    method: 'get',
    headers: {
        'Authorization': 'Basic ' + btoa(`${username}:${psd}`)
      }
  })
  const articles = await res.json()

  return {
    props: {
      articles,
    }
  }
}

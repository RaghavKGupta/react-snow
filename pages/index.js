import { username, psd } from '../config'
import ArticleList from '../components/ArticleList'
import btoa from 'btoa'


export default function Home({ articles }) {
  try {
    return (
      <div>
        <ArticleList articles={articles.result} />
      </div>
    );
  } catch (e) {
    console.log(e)
    return null;
  }
  
}

export const getServerSideProps = async () => {
  /*const res = await fetch(`${server}/api/articles`)*/
  const res = await fetch(`https://hh13cbx2ya.execute-api.us-east-1.amazonaws.com/test-raghav-snow/test-resource`, {
    method: 'get'
  })
  const articles = await res.json()

  return {
    props: {
      articles,
    }
  }
}

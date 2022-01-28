import { username, psd } from '../config'
import ArticleList from '../components/ArticleList'
import { useEffect, useState } from "react";


export default function Home({ articles }) {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://dev69061.service-now.com/api/now/table/x_682526_page_bu_0_cwig_page_builder`, {
      method: 'get',
      headers: {
          'Authorization': 'Basic ' + btoa(`${username}:${psd}`)
        }
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <div>
       <div>
        <ArticleList articles={data.result} />
      </div>
    </div>
  )
}


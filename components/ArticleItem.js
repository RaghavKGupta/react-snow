import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
  return (
        <div class="usa-card__container">
          <header class="usa-card__header">
              <h2 class="usa-card__heading">{article.short_description}</h2>
          </header>
          <div class="usa-card__body">
              <p>
                {article.name_of_page}
              </p>
          </div>
          <div class="usa-card__footer">
              <Link href={`/article/${article.sys_id}`}>
              <button class="usa-button">View Article</button>
              </Link>
          </div>
        </div>
  )
}
export default ArticleItem

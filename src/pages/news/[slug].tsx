import { getArticleBySlug, getArticles } from '@/pages/api/articles'
import { getArticle, handleGET } from '@/pages/api/articles/[id]'
import { articleService } from '@/service'
import { TArticleWithAuthor, TypeId } from '@/types'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import { Article } from '@prisma/client'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

type Props = {
  data?: Article
}

const DetailNews = (props: Props) => {
  const { data } = props
  const router = useRouter()
  return (
    <DefaultLayout>
      <div
        className='px-10 py-8'
        dangerouslySetInnerHTML={{
          __html: data?.content as string
        }}
      ></div>
    </DefaultLayout>
  )
}

export default DetailNews
export async function getStaticPaths() {
  const res = await getArticles({
    limit: 100
  })

  const paths = res.data.map((item: TArticleWithAuthor) => ({
    params: { slug: item.slug }
  }))
  return { paths, fallback: true }
}
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      notFound: true
    }
  }
  // const res = await articleService.get(params.id as string)
  const result = await getArticleBySlug(params.slug as string)
  if (!result)
    return {
      notFound: true
    }
  return {
    props: {
      data: JSON.parse(JSON.stringify(result))
    }
  }
}

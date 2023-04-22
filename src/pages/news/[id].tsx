import { articleService } from '@/service'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'

type Props = {}

const DetailNews = (props: Props) => {
  return <DefaultLayout></DefaultLayout>
}

export default DetailNews
export async function getStaticPaths() {
  const res = await articleService.getAll()
  return {
    props: {
      title: 'Home page',
      articles: res.data
    }
  }
}
export async function getStaticProps() {
  const res = await articleService.getAll()
  return {
    props: {
      title: 'Home page',
      articles: res.data
    }
  }
}

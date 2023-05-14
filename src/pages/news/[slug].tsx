import { ArrowBackIcon } from '@/components/icon'
import { getArticleBySlug, getArticles } from '@/pages/api/articles'
import { TArticleWithAuthor, TypeId } from '@/types'
import { HtmlTypography } from '@/ui/atom'
import { Panel } from '@/ui/molecules'
import { ListArticles } from '@/ui/organisms'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import { Box, Button } from '@mui/material'
import { Article } from '@prisma/client'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  data?: Article
}

const DetailNews = (props: Props) => {
  const { data } = props
  const router = useRouter()
  return (
    <DefaultLayout>
      <HtmlTypography content={data?.content as string} />
      <Box display={'flex'} padding={5}>
        <Link href={'/news'}>
          <Button>
            <ArrowBackIcon />
            See all news
          </Button>
        </Link>
      </Box>
      <ListArticles title='Latest Articles' />
      <Panel
        title='A global network of nearshore and offshore centres'
        content='Developing leading technology solutions'
        center={true}
        minHeight={'30vh'}
        maxHeight={'50vh'}
      />
    </DefaultLayout>
  )
}

export default DetailNews
export async function getStaticPaths() {
  const res = await getArticles({
    limit: 10
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

import { getSolutions } from '@/pages/api/solutions'
import { CardTitle } from '@/ui/molecules'
import { OurSolutions } from '@/ui/organisms'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import { Solution as TSolution } from '@prisma/client'
import React from 'react'

type Props = {
  solutions: TSolution[]
}
type CategoryType = {
  color?: 'primary' | 'error' | 'secondary' | 'success' | 'default' | 'info' | 'warning' | undefined
  label: string
}
const categories: CategoryType[] = [
  {
    label: 'All',
    color: 'primary'
  },
  {
    label: 'News',
    color: 'error'
  },
  {
    label: 'Insights',
    color: 'secondary'
  },
  {
    label: 'Success Stories',
    color: 'success'
  }
]
// const articles = [{}]
const index = (props: Props) => {
  const { solutions } = props
  console.log(solutions)
  return (
    <DefaultLayout>
      <CardTitle
        title='Digital solutions for your business'
        description='Thriving in a complex digital world isn’t easy. The ability to continually innovate must be at the core of your organisation. We work with you and your teams to define, structure and build the organisational and technical capabilities needed to transform into a modern digital business. '
      />
      <OurSolutions data={solutions} />
    </DefaultLayout>
  )
}

export default index

export async function getStaticProps() {
  const res = await getSolutions({
    limit: 100
  })
  return {
    props: {
      solutions: JSON.parse(JSON.stringify(res.data))
    }
  }
}

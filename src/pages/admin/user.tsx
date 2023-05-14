import ListUser from '@/feature/user/ListUser'
import React from 'react'

type Props = {}

const user = (props: Props) => {
  return <ListUser />
}

export default user
user.requireAuth = true

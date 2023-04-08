import { useAppSelector } from 'stores'

export const isMe = (id: number, userName: string) => {
  const user = useAppSelector((state) => state.auth.currentUser)
  return user?.user.id === id ? 'me' : userName
}

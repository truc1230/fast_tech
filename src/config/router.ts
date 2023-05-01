import { DashboardIcon, Description, LogoutIcon, Person, WorkOutlineIcon } from '@/components/icon'

export const adminRoutes = [
  {
    title: 'Dashboard',
    icon: DashboardIcon,
    to: '/admin/dashboard'
  },
  {
    title: 'User',
    icon: Person,
    to: '/admin/user'
  },
  {
    title: 'Article',
    icon: Description,
    to: '/admin/article'
  },
  {
    title: 'Recruitment',
    icon: WorkOutlineIcon,
    to: '/admin/recruitment'
  }
]

export const guestRouter = [
  {
    title: 'About Us',
    icon: DashboardIcon,
    to: '/about'
  },
  {
    title: 'News',
    icon: Person,
    to: '/news'
  },
  {
    title: 'Recruitment',
    icon: Description,
    to: '/recruitment'
  }
]

import { DashboardIcon, Description, LogoutIcon, Person } from '@/components/icon'

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
  }
]

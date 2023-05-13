import {
  DashboardIcon,
  Description,
  EmojiObjectsOutlinedIcon,
  LogoutIcon,
  Person,
  WorkOutlineIcon,
  LinkedInIcon,
  FacebookIcon,
  TwitterIcon,
  YouTubeIcon
} from '@/components/icon'

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
  },
  {
    title: 'Solution',
    icon: EmojiObjectsOutlinedIcon,
    to: '/admin/solution'
  }
]

export const guestRouter = [
  {
    title: 'Our Solution',
    to: '/our-solution'
  },
  {
    title: 'News',
    to: '/news'
  },
  {
    title: 'About Us',
    to: '/about'
  },

  {
    title: 'Recruitment',
    to: '/recruitment'
  }
]
export const linkSocial = [
  {
    title: 'LinkedIn',
    icon: LinkedInIcon,
    to: 'https://www.linkedin.com/'
  },
  {
    title: 'Facebook',
    icon: FacebookIcon,
    to: 'https://www.facebook.com/'
  },
  {
    title: 'Twitter',
    icon: TwitterIcon,
    to: 'https://twitter.com/'
  },
  {
    title: 'Youtube',
    icon: YouTubeIcon,
    to: 'https://youtube.com/'
  }
]

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { Award, BookOpen, Info, Trophy } from 'lucide-react'
import { Header } from './_components/header'

const links = [
  {
    text: 'Documentation',
    url: '/docs',
    icon: <BookOpen />,
  },
  {
    text: 'Leaderboards',
    url: '/leaderboards',
    icon: <Trophy />,
  },
  {
    text: 'About',
    url: '/about',
    icon: <Info />,
  },
  // {
  //   text: 'Credits',
  //   url: '/credits',
  //   icon: <Award />,
  // },
]
const nav = {
  title: (
    <div className='flex items-center space-x-2'>
      <img src={'/logo.png'} alt={'Balatro Multiplayer'} className={'size-8'} />
      <span className='inline-block font-bold'>Balatro Multiplayer</span>
    </div>
  ),
}
export const baseOptions: BaseLayoutProps = {
  links,
  nav: {
    ...nav,
    component: <Header finalLinks={links} nav={nav} />,
  },
}

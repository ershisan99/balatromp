import { GithubLinks } from '@/app/_components/github-links'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { SiGithub } from '@icons-pack/react-simple-icons'
import {
  Award,
  BookOpen,
  ChevronRight,
  Info,
  Menu,
  MessageSquare,
  Trophy,
  Users,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
          <div className='flex gap-6 md:gap-10'>
            <Link href='/' className='flex items-center space-x-2'>
              <img
                src={'/logo.png'}
                alt={'Balatro Multiplayer'}
                className={'size-8'}
              />
              <span className='inline-block font-bold'>
                Balatro Multiplayer
              </span>
            </Link>
            <nav className='hidden gap-6 md:flex'>
              <Link
                href='/docs'
                className='flex items-center font-medium text-muted-foreground text-sm transition-colors hover:text-primary'
              >
                <BookOpen className='mr-1 h-4 w-4' />
                Documentation
              </Link>
              <Link
                href='/leaderboards'
                className='flex items-center font-medium text-muted-foreground text-sm transition-colors hover:text-primary'
              >
                <Trophy className='mr-1 h-4 w-4' />
                Leaderboards
              </Link>
              <Link
                href='/about'
                className='flex items-center font-medium text-muted-foreground text-sm transition-colors hover:text-primary'
              >
                <Info className='mr-1 h-4 w-4' />
                About
              </Link>
              <Link
                href='/credits'
                className='flex items-center font-medium text-muted-foreground text-sm transition-colors hover:text-primary'
              >
                <Award className='mr-1 h-4 w-4' />
                Credits
              </Link>
            </nav>
          </div>
          <div className='md:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant='ghost'
                  className='px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0'
                >
                  <Menu className='h-6 w-6' />
                  <span className='sr-only'>Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='left'>
                <Link href='/' className='flex items-center space-x-2'>
                  <img
                    src={'/logo.png'}
                    alt={'Balatro Multiplayer'}
                    className={'size-8'}
                  />
                  <span className='inline-block font-bold'>
                    Balatro Multiplayer
                  </span>
                </Link>
                <div className='mt-6 flex flex-col space-y-3'>
                  <Link
                    href='/docs'
                    className='flex items-center font-medium text-muted-foreground text-sm transition-colors hover:text-primary'
                  >
                    <BookOpen className='mr-2 h-4 w-4' />
                    Documentation
                  </Link>
                  <Link
                    href='/leaderboards'
                    className='flex items-center font-medium text-muted-foreground text-sm transition-colors hover:text-primary'
                  >
                    <Trophy className='mr-2 h-4 w-4' />
                    Leaderboards
                  </Link>
                  <Link
                    href='/about'
                    className='flex items-center font-medium text-muted-foreground text-sm transition-colors hover:text-primary'
                  >
                    <Info className='mr-2 h-4 w-4' />
                    About
                  </Link>
                  <Link
                    href='/credits'
                    className='flex items-center font-medium text-muted-foreground text-sm transition-colors hover:text-primary'
                  >
                    <Award className='mr-2 h-4 w-4' />
                    Credits
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className='flex flex-1 items-center justify-end space-x-4'>
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className='flex-1'>
        <section className='space-y-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:py-32'>
          <div className='container mx-auto flex flex-col items-center gap-4 text-center'>
            <Link
              href='https://github.com'
              className='rounded-2xl bg-muted px-4 py-1.5 font-medium text-sm'
              target='_blank'
            >
              Follow along on GitHub
            </Link>
            <h1 className='font-bold text-3xl leading-tight tracking-tighter md:text-5xl lg:text-6xl'>
              Play Balatro Against Your Friends
            </h1>
            <p className='max-w-[42rem] text-muted-foreground leading-normal sm:text-xl sm:leading-8'>
              The unofficial multiplayer mod for Balatro. Challenge your
              friends, compete in tournaments, and climb the global
              leaderboards.
            </p>
            <div className='flex flex-col gap-4 sm:flex-row sm:space-x-4'>
              <Button
                asChild
                size='lg'
                className='w-full bg-red-600 text-white hover:bg-red-700 sm:w-auto'
              >
                <Link href='/docs/installation'>
                  Get Started
                  <ChevronRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button variant='outline' size='lg' asChild>
                <Link href='/docs'>Learn More</Link>
              </Button>
            </div>
            <div className='mt-8 w-full max-w-5xl rounded-lg border bg-card p-4 shadow-xl'>
              <Image
                src='/multiplayer-screenshot.jpeg'
                width={1200}
                height={600}
                alt='Balatro Multiplayer Screenshot'
                className='rounded-md'
                priority
              />
            </div>
          </div>
        </section>
        <section className='container mx-auto space-y-6 py-8 md:py-12 lg:py-24'>
          <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
            <h2 className='font-bold text-3xl leading-tight tracking-tighter md:text-4xl'>
              Features
            </h2>
            <p className='max-w-[85%] text-muted-foreground leading-normal sm:text-lg sm:leading-7'>
              Everything you need to enjoy Balatro with friends and the wider
              community.
            </p>
          </div>
          <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
            <Card>
              <CardHeader>
                <CardTitle>Real-time Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Challenge friends to head-to-head poker matches with
                  synchronized gameplay.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tournaments</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Create and join tournaments with custom rules and brackets.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Global Leaderboards</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Compete for the highest scores and track your progress against
                  players worldwide.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Spectator Mode</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Watch live matches between top players and learn new
                  strategies.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom Game Modes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Play with modified rules and unique challenges created by the
                  community.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cross-Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Play with friends regardless of their platform - Windows, Mac,
                  or Linux.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className='container mx-auto border-t border-b py-12 md:py-16'>
          <div className='mx-auto mb-10 flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
            <h2 className='font-bold text-3xl leading-tight tracking-tighter md:text-4xl'>
              Ways to Play
            </h2>
            <p className='max-w-[85%] text-muted-foreground leading-normal sm:text-lg sm:leading-7'>
              Choose how you want to experience Balatro Multiplayer
            </p>
          </div>

          <div className='mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <Card className='flex h-full flex-col'>
              <CardHeader className='pb-2'>
                <div className='mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-100'>
                  <Users className='h-6 w-6 text-red-600' />
                </div>
                <CardTitle>Direct Play</CardTitle>
              </CardHeader>
              <CardContent className='flex-grow'>
                <p className='mb-4 text-muted-foreground'>
                  Create a lobby and share the code with friends for casual
                  matches.
                </p>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-start gap-2'>
                    <span className='font-medium'>
                      • No matchmaking or ratings
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='font-medium'>
                      • Customize all lobby options
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='font-medium'>
                      • Play with friends directly
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='font-medium'>
                      • Perfect for casual games
                    </span>
                  </li>
                </ul>
              </CardContent>
              <div className='mt-auto p-6 pt-0'>
                <Button variant='outline' className='w-full' asChild>
                  <Link href='/docs/direct-play'>Learn More</Link>
                </Button>
              </div>
            </Card>

            <Card className='flex h-full flex-col'>
              <CardHeader className='pb-2'>
                <div className='mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-100'>
                  <Trophy className='h-6 w-6 text-red-600' />
                </div>
                <CardTitle>Matchmaking Queues</CardTitle>
              </CardHeader>
              <CardContent className='flex-grow'>
                <p className='mb-4 text-muted-foreground'>
                  Join ranked queues with MMR-based matchmaking and
                  leaderboards.
                </p>
                <div className='space-y-4'>
                  <div className='space-y-2 text-sm'>
                    <h4 className='font-semibold'>Vanilla Queue:</h4>
                    <ul className='space-y-1'>
                      <li>• Original game balance</li>
                      <li>• Has MMR but no MMR-based matchmaking</li>
                      <li>• Same seed for fair competition</li>
                    </ul>
                  </div>
                  <div className='space-y-2 text-sm'>
                    <h4 className='font-semibold'>Ranked Queue:</h4>
                    <ul className='space-y-1'>
                      <li>• Rebalanced cards and mechanics</li>
                      <li>• MMR-based matchmaking</li>
                      <li>• New jokers, reworked tarots, new planets</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <div className='mt-auto p-6 pt-0'>
                <Button variant='outline' className='w-full' asChild>
                  <Link href='/docs/matchmaking'>Learn More</Link>
                </Button>
              </div>
            </Card>

            <Card className='flex h-full flex-col'>
              <CardHeader className='pb-2'>
                <div className='mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-100'>
                  <MessageSquare className='h-6 w-6 text-red-600' />
                </div>
                <CardTitle>Custom LFG</CardTitle>
              </CardHeader>
              <CardContent className='flex-grow'>
                <p className='mb-4 text-muted-foreground'>
                  Find players for games with custom rulesets via our Discord
                  community.
                </p>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-start gap-2'>
                    <span className='font-medium'>
                      • Any ruleset or lobby options
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='font-medium'>
                      • Compatible with mods (with agreement)
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='font-medium'>• No MMR or rankings</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='font-medium'>
                      • Great for experimenting with new formats
                    </span>
                  </li>
                </ul>
              </CardContent>
              <div className='mt-auto p-6 pt-0'>
                <Button variant='outline' className='w-full' asChild>
                  <Link href='https://discord.gg/balatro' target='_blank'>
                    Join Discord
                  </Link>
                </Button>
              </div>
            </Card>
          </div>

          <div className='mt-10 text-center'>
            <Button
              asChild
              size='lg'
              className='w-full bg-red-600 text-white hover:bg-red-700 sm:w-auto'
            >
              <Link href='/leaderboards'>
                View Leaderboards
                <Trophy className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
        </section>

        <section className='container mx-auto py-8 md:py-12 lg:py-24'>
          <div className='mx-auto max-w-[85rem]'>
            <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-2'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h2 className='font-bold text-3xl tracking-tighter sm:text-4xl'>
                    How It Works
                  </h2>
                  <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed'>
                    Getting started with Balatro Multiplayer is simple. Install
                    the mod, connect with friends, and start playing.
                  </p>
                </div>
                <ul className='grid gap-6'>
                  <li className='flex items-start gap-4'>
                    <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600'>
                      1
                    </div>
                    <div className='space-y-1'>
                      <h3 className='font-bold text-xl'>Install the Mod</h3>
                      <p className='text-muted-foreground'>
                        Download and install the multiplayer mod using our
                        simple installer.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start gap-4'>
                    <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600'>
                      2
                    </div>
                    <div className='space-y-1'>
                      <h3 className='font-bold text-xl'>
                        Create or Join a Game
                      </h3>
                      <p className='text-muted-foreground'>
                        Host your own game or join an existing one with a simple
                        game code.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start gap-4'>
                    <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600'>
                      3
                    </div>
                    <div className='space-y-1'>
                      <h3 className='font-bold text-xl'>Play Together</h3>
                      <p className='text-muted-foreground'>
                        Compete in real-time with synchronized gameplay and live
                        scoring.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Button
                    size='lg'
                    className='w-full bg-red-600 text-white hover:bg-red-700 sm:w-auto'
                    asChild
                  >
                    <Link href='/docs/installation'>Install Now</Link>
                  </Button>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <Image
                  src='/multiplayer-screenshot.jpeg'
                  width={500}
                  height={500}
                  alt='Balatro Multiplayer Gameplay'
                  className='rounded-lg shadow-xl'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='bg-muted py-12 md:py-16'>
          <div className='container mx-auto flex flex-col items-center justify-center gap-4 text-center'>
            <h2 className='font-bold text-3xl tracking-tighter sm:text-4xl'>
              Ready to Play?
            </h2>
            <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed'>
              Join thousands of Balatro players already enjoying multiplayer
              matches.
            </p>
            <Button
              size='lg'
              className='mt-4 w-full bg-red-600 text-white hover:bg-red-700 sm:w-auto'
              asChild
            >
              <Link href='/docs/installation'>Get Started Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className='border-t py-6 md:py-0'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
          <p className='text-center text-muted-foreground text-sm leading-loose md:text-left'>
            &copy; {new Date().getFullYear()} Balatro Multiplayer Mod. All
            rights reserved. Not affiliated with LocalThunk or Playstack.
          </p>
          <nav className='flex items-center gap-4'>
            <Link
              href='/docs'
              className='text-muted-foreground text-sm underline-offset-4 hover:underline'
            >
              Documentation
            </Link>
            <Link
              href='/about'
              className='text-muted-foreground text-sm underline-offset-4 hover:underline'
            >
              About
            </Link>
            <Link
              href='/credits'
              className='text-muted-foreground text-sm underline-offset-4 hover:underline'
            >
              Credits
            </Link>
            <GithubLinks>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='icon'>
                  <SiGithub className='h-5 w-5' />
                  <span className='sr-only'>GitHub</span>
                </Button>
              </DropdownMenuTrigger>
            </GithubLinks>
          </nav>
        </div>
      </footer>
    </div>
  )
}

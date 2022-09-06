/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import Link from 'next/link'
import Text from '../components/Text'
import {
  Beaker,
  Bookmark,
  GitHub,
  Home as HomeIcon,
  Mail,
  MobilePhone,
  MusicalNote,
  PaintBrush,
  Pencil,
  SquaresPlus,
  Twitter,
} from '../components/Icons'

function SidebarListItem({ children, isSelected }: { children: any; isSelected?: boolean }) {
  const dynamicStyles = isSelected ? 'bg-gray-100' : ''

  return <li className={`p-1 rounded-md mb-1 flex items-center ${dynamicStyles}`}>{children}</li>
}

type SidebarObject = {
  text: string
  emoji?: string
  Icon?: JSX.Element
}

const SIDEBAR_LIST_ME: SidebarObject[] = [
  {
    text: 'About',
    Icon: <HomeIcon />,
  },
  {
    text: 'Career',
    Icon: <Beaker />,
  },
  {
    text: 'Writing',
    Icon: <Pencil />,
  },
]

const SIDEBAR_LIST_FAVORITES: SidebarObject[] = [
  {
    text: 'Products',
    Icon: <MobilePhone />,
  },
  {
    text: 'Creators',
    Icon: <PaintBrush />,
  },
  {
    text: 'Games',
    Icon: <SquaresPlus />,
  },
  {
    text: 'Music',
    Icon: <MusicalNote />,
  },
  {
    text: 'Resources',
    Icon: <Bookmark />,
  },
]

const SIDEBAR_LIST_CONTACT: SidebarObject[] = [
  {
    text: 'Contact',
    Icon: <Mail />,
  },
  {
    text: 'Twitter',
    Icon: <Twitter />,
  },
  {
    text: 'GitHub',
    Icon: <GitHub />,
  },
]

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [selectedItem, setSelectedItem] = useState<string>('About')

  const renderSidebarList = useCallback(
    (items: SidebarObject[]) =>
      items.map(({ text, emoji, Icon }) => (
        <SidebarListItem isSelected={selectedItem === text}>
          {Icon ?? <span>{emoji}</span>}
          <span className={`${selectedItem === text ? 'text-black' : ''} ml-1`}>{text}</span>
        </SidebarListItem>
      )),
    [selectedItem]
  )

  return (
    <div>
      <Head>
        <title>Patrick X. Rivera</title>
        <link rel="icon" href="/gradient-pfp.ico" />
      </Head>

      <main>
        <div className="flex">
          <div
            className="w-60 h-screen bg-light"
            style={{
              // inspired by Notion's sidebar
              boxShadow: 'rgb(0 0 0 / 2%) -1px 0px 0px 0px inset',
            }}
          >
            <div className="py-6 px-4">
              <div className="mb-4">
                <h2 className="font-bold text-md">Patrick X. Rivera</h2>
              </div>
              <div>
                <ul>{renderSidebarList(SIDEBAR_LIST_ME)}</ul>
              </div>
              <div className="mt-4">
                <div className="mb-1">
                  <h4 className="text-sm font-bold text-sidebar-subheading">Favorites</h4>
                </div>
                <ul>{renderSidebarList(SIDEBAR_LIST_FAVORITES)}</ul>
              </div>
              <div className="mt-4">
                <div className="mb-1">
                  <h4 className="text-sm font-bold text-sidebar-subheading">Say hi</h4>
                </div>
                <ul>{renderSidebarList(SIDEBAR_LIST_CONTACT)}</ul>
              </div>
            </div>
          </div>
          <div className="grow flex justify-center pt-12">
            <div className="max-w-2xl">
              <div className="border-b-solid border-b-gray-100 border-b">
                <h1 className="font-bold text-2xl my-4">About</h1>
              </div>
              <div>
                <Text>Welcome 👋</Text>
                <Text>
                  My name is Patrick Rivera and I've spent the past few years building consumer apps
                  in crypto / web3.
                </Text>
                <Text>
                  Although I'm trained as an engineer, I consider myself a product designer at
                  heart. My approach to building products comes from studying a variety of
                  disciples, such as:{' '}
                  <a
                    href="https://behaviormodel.org/"
                    target="blank"
                    rel="noreferrer"
                    className="underline decoration-sky-500"
                  >
                    behavioral psychology
                  </a>
                  ,{' '}
                  <a
                    href="https://yukaichou.com/gamification-examples/octalysis-complete-gamification-framework/"
                    target="blank"
                    rel="noreferrer"
                    className="underline decoration-pink-500"
                  >
                    game design
                  </a>
                  ,{' '}
                  <a
                    href="https://ethereum.org/en/whitepaper/"
                    target="blank"
                    rel="noreferrer"
                    className="underline decoration-purple-500"
                  >
                    computer science
                  </a>
                  ,{' '}
                  <a
                    href="https://fs.blog/mental-models/#microeconomics"
                    target="blank"
                    rel="noreferrer"
                    className="underline decoration-blue-500"
                  >
                    economics
                  </a>
                  , and{' '}
                  <a
                    href="https://www.amazon.com/Meditations-New-Translation-Marcus-Aurelius/dp/0812968255/ref=sr_1_1?keywords=meditations+marcus+aurelius&qid=1662424020&sprefix=meditations%2Caps%2C108&sr=8-1"
                    target="blank"
                    rel="noreferrer"
                    className="underline decoration-orange-500"
                  >
                    philosophy
                  </a>
                  .
                </Text>
                <Text>
                  I love using well-crafted products (see a few of my favorite{' '}
                  <Link href="/products">
                    <a href="/products" className="underline decoration-emerald-500">
                      here
                    </a>
                  </Link>
                  ) and feel like the best way I can be of service to the world is by creating
                  products that people love.
                </Text>
                <Text>
                  My philosophy for building products can be summarized with this quote below:
                </Text>
                <div className="border-l-2 border-l-black border-l-solid pl-2">
                  <Text italic noMargin>
                    Too many math/quant people are making games now. Your job isn’t to create
                    “perfect balance”. Your job is to make people lose their minds (and have fun
                    while doing it)! Imagine “economy designers” making GTA.
                  </Text>
                  <div className="flex items-center my-2">
                    <div className="flex flex-col italic text-gray-500 text-sm">
                      <span>Gabriel Leydon, game designer</span>
                      <span className="underline underline-offset-4 decoration-1 decoration-gray-300">
                        <a
                          href="https://twitter.com/gabrielleydon/status/1559795337694392320"
                          target="blank"
                        >
                          Source
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <Text>
                  My goal is to build products that make people lose their minds (and have fun while
                  doing it)!
                </Text>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

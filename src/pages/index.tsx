/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import Text from '../components/Text'

function SidebarListItem({ children, isSelected }: { children: any; isSelected?: boolean }) {
  const dynamicStyles = isSelected ? 'bg-gray-100' : ''
  return <li className={`p-1 rounded-md mb-1 ${dynamicStyles}`}>{children}</li>
}

type SidebarObject = {
  text: string
  emoji: string
}

const SIDEBAR_LIST_ME: SidebarObject[] = [
  {
    text: 'About',
    emoji: '💡',
  },
  {
    text: 'Career',
    emoji: '✨',
  },
  {
    text: 'Writing',
    emoji: '✍️',
  },
]

const SIDEBAR_LIST_FAVORITES: SidebarObject[] = [
  {
    text: 'Products',
    emoji: '📱',
  },
  {
    text: 'Creators',
    emoji: '🎨',
  },
  {
    text: 'Video games',
    emoji: '🎮',
  },
  {
    text: 'Music',
    emoji: '🎶',
  },
  {
    text: 'Resources',
    emoji: '📚',
  },
]

const SIDEBAR_LIST_CONTACT: SidebarObject[] = [
  {
    text: 'Twitter',
    emoji: '🐦',
  },
  {
    text: 'GitHub',
    emoji: '💻',
  },
  {
    text: 'Contact',
    emoji: '✉️',
  },
]

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [selectedItem, setSelectedItem] = useState<string>('About')

  const renderSidebarList = useCallback(
    (items: SidebarObject[]) =>
      items.map(({ text, emoji }) => (
        <SidebarListItem isSelected={selectedItem === text}>
          <span>{emoji}</span>{' '}
          <span className={`${selectedItem === text ? 'text-black' : ''}`}>{text}</span>
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
                  in crypto / web3 as a product engineer. Currently, I'm working on a social app for
                  tokenized communities.
                </Text>
                <Text>
                  Although I'm trained as an engineer, I consider myself a product designer at
                  heart. My approach to building products comes from studying a variety of
                  disciples, such as: behavioral psychology, game design, computer science,
                  economics, and philosophy.
                </Text>
                <Text>
                  I love using well-crafted products (see a few of my favorite here) and feel like
                  the best way I can be of service to the world is by creating products that people
                  love.
                </Text>
                <Text>
                  My philosophy for building products can be summarized with this quote below:
                </Text>
                <div className="border-l-2 border-l-black border-l-solid pl-2">
                  <Text italic noMargin>
                    Too many math/quant people making games now. Your job isn’t to create “perfect
                    balance” your job is to make people lose their minds (and have fun while doing
                    it)! Imagine “economy designers” making GTA.
                  </Text>
                  <div className="flex items-center my-2">
                    <Image
                      src="https://pbs.twimg.com/profile_images/1402092181750370308/ydnIQwAr_x96.jpg"
                      height={36}
                      width={36}
                      className="rounded-full"
                    />
                    <div className="flex flex-col ml-2 italic text-gray-500 text-sm">
                      <span>Gabriel Leydon, legendary F2P game designer</span>
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
                  My goal is to make people lose their minds (and have fun while doing it)!
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

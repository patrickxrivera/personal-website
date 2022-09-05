import Head from 'next/head'
import { useCallback, useState } from 'react'

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
    text: 'Communities',
    emoji: '🌐',
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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
                <h2 className="font-bold text-lg">Patrick X. Rivera</h2>
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
          <div className="grow" />
        </div>
      </main>
    </div>
  )
}

export default Home

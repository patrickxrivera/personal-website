/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import React, { useCallback, useState } from 'react'
import Link from 'next/link'
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
} from '../Icons'

function SidebarListItem({ isSelected, item }: { isSelected?: boolean; item: SidebarObject }) {
  const dynamicStyles = isSelected ? 'bg-gray-100' : ''

  const { url, openInNewTab, text, Icon } = item

  return (
    <Link href={url ?? ''}>
      <a href={url ?? ''} target={openInNewTab ? '_blank' : '_self'} rel="noreferrer">
        <li className={`p-1 rounded-md mb-1 flex items-center hover:bg-gray-100 ${dynamicStyles}`}>
          {Icon}
          <span className={`${isSelected ? 'text-black' : ''} ml-1 text-sm`}>{text}</span>
        </li>
      </a>
    </Link>
  )
}

type SidebarObject = {
  text: string
  Icon: JSX.Element
  url: string
  openInNewTab?: boolean
}

const SIDEBAR_LIST_ME: SidebarObject[] = [
  {
    text: 'About',
    url: '/',
    Icon: <HomeIcon />,
  },
  {
    text: 'Career',
    url: '/career',
    Icon: <Beaker />,
  },
  {
    text: 'Writing',
    url: '/writing',
    Icon: <Pencil />,
  },
]

const SIDEBAR_LIST_FAVORITES: SidebarObject[] = [
  {
    text: 'Products',
    url: '/products',
    Icon: <MobilePhone />,
  },
  {
    text: 'Creators',
    url: '/creators',
    Icon: <PaintBrush />,
  },
  {
    text: 'Games',
    url: '/games',
    Icon: <SquaresPlus />,
  },
  {
    text: 'Music',
    url: '/music',
    Icon: <MusicalNote />,
  },
  {
    text: 'Resources',
    url: '/resources',
    Icon: <Bookmark />,
  },
]

const SIDEBAR_LIST_CONTACT: SidebarObject[] = [
  {
    text: 'Contact',
    url: '/contact',
    Icon: <Mail />,
  },
  {
    text: 'Twitter',
    Icon: <Twitter />,
    url: 'https://twitter.com/patrickxrivera',
    openInNewTab: true,
  },
  {
    text: 'GitHub',
    Icon: <GitHub />,
    url: 'https://github.com/patrickxrivera',
    openInNewTab: true,
  },
]

type Props = {
  children?: React.ReactNode
  headTitle?: string
  pageTitle?: string
}

function PrimaryLayout({ children, headTitle, pageTitle, ...props }: Props) {
  console.log(props)
  // eslint-disable-next-line no-unused-vars
  const [selectedItemText, setSelectedItemText] = useState<string>('About')

  const renderSidebarList = useCallback(
    (items: SidebarObject[]) =>
      items.map((item) => (
        <SidebarListItem key={item.text} item={item} isSelected={item.text === selectedItemText} />
      )),
    [selectedItemText]
  )

  return (
    <div>
      <Head>
        <title>{headTitle}</title>
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
                  <h4 className="text-sm font-bold">Favorites</h4>
                </div>
                <ul>{renderSidebarList(SIDEBAR_LIST_FAVORITES)}</ul>
              </div>
              <div className="mt-4">
                <div className="mb-1">
                  <h4 className="text-sm font-bold">Say hi</h4>
                </div>
                <ul>{renderSidebarList(SIDEBAR_LIST_CONTACT)}</ul>
              </div>
            </div>
          </div>
          <div className="grow flex justify-center pt-12 bg-gradient-to-b from-indigo-500 h-fit">
            <div className="max-w-2xl bg-white rounded-2xl p-8 shadow-2xl">
              <div className="border-b-solid border-b-gray-100 border-b">
                <h1 className="font-bold text-2xl">{pageTitle}</h1>
              </div>
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PrimaryLayout
/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import React from 'react'
import { GitHub, Mail, Twitter } from '../Icons'
import Link from '../Link'

type SidebarObject = {
  text: string
  Icon: JSX.Element
  url: string
  openInNewTab?: boolean
}

const SIDEBAR_LIST_CONTACT: SidebarObject[] = [
  {
    text: 'Email',
    url: 'mailto:patrick.x.rivera@gmail.com',
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

function SidebarListItem({ isSelected, item }: { isSelected?: boolean; item: SidebarObject }) {
  const dynamicStyles = isSelected ? 'bg-gray-100' : ''

  const { url, openInNewTab, text, Icon } = item

  return (
    <Link url={url} openInNewTab={openInNewTab}>
      <li
        className={`px-3 py-1 mb-0.5 rounded-md mb-1 flex items-center hover:bg-gray-100 hover:cursor-pointer ${dynamicStyles}`}
      >
        {Icon}
        <span className={`${isSelected ? 'text-black' : ''} ml-1 text-sm`}>{text}</span>
      </li>
    </Link>
  )
}

type Props = {
  children?: React.ReactNode
  headTitle: string
  pageTitle: string
}

function PrimaryLayout({ children, headTitle, pageTitle }: Props) {
  const renderSidebarList = (items: SidebarObject[]) =>
    items.map((item) => <SidebarListItem key={item.text} item={item} isSelected={false} />)

  return (
    <div>
      <Head>
        <title>{headTitle}</title>
        <link rel="icon" href="/gradient-pfp.ico" />
      </Head>

      <main>
        <div className="flex">
          <div
            className="w-72 h-screen bg-light sticky top-0"
            style={{
              // inspired by Notion's sidebar
              boxShadow: 'rgb(0 0 0 / 2%) -1px 0px 0px 0px inset',
            }}
          >
            <div className="py-8 px-2">
              <div className="ml-1">
                <h2 className="font-bold text-md p-2">Patrick X. Rivera</h2>
              </div>
              <div className="mt-1">
                <ul>{renderSidebarList(SIDEBAR_LIST_CONTACT)}</ul>
              </div>
            </div>
          </div>
          <div className="grow flex justify-center pt-12 bg-gradient-to-b from-indigo-500 p-20">
            <div className="bg-white rounded-2xl p-8 shadow-2xl pb-16" style={{ width: '672px' }}>
              <div className="border-b-solid border-b-gray-100 border-b pb-2">
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

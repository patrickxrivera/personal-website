/* eslint-disable react/no-unescaped-entities */
import { withLayout } from '@moxy/next-layout'
import { DocumentDuplicateIcon, PencilSquareIcon, CheckIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Text from '../components/Text'
import { PrimaryLayout } from '../components/Layouts'
import { LayoutProps } from '../components/Layouts/types'
import Link from '../components/Link'
import { GitHub, Twitter } from '../components/Icons'

type Post = {
  title: string
  description: string
  date: string
  url: string
}

const posts: Post[] = [
  {
    title: 'Crypto Fundamentals and NFTs',
    description:
      'Presentation for the On Deck community that covers: eras of the web, blockchain architecture, last 10 years of crypto, rise of NFTs, and the future of NFTs',
    date: 'March 12th, 2021',
    url: 'https://p.mirror.xyz',
  },
  {
    title: 'Come for the Creator, Stay for the Economy',
    description: 'Lorem ipsum solar deleris. Lorem ipsum solar deleris.',
    date: 'April 20th, 2021',
    url: 'https://p.mirror.xyz',
  },
  {
    title: 'Thoughts on DAO Tooling',
    description: 'Lorem ipsum solar deleris. Lorem ipsum solar deleris.',
    date: 'April 20th, 2021',
    url: 'https://p.mirror.xyz',
  },
  {
    title: 'A Guide to Crypto Tokens',
    description: 'Lorem ipsum solar deleris. Lorem ipsum solar deleris.',
    date: 'April 20th, 2021',
    url: 'https://p.mirror.xyz',
  },
  {
    title: 'Community DAOs',
    description: 'Lorem ipsum solar deleris. Lorem ipsum solar deleris.',
    date: 'April 20th, 2021',
    url: 'https://p.mirror.xyz',
  },
  {
    title: 'Tips for Creators Getting Into Crypto',
    description: 'Lorem ipsum solar deleris. Lorem ipsum solar deleris.',
    date: 'April 20th, 2021',
    url: 'https://p.mirror.xyz',
  },
]

type TimelineItem = {
  id: number
  company: string
  role: string
  url: string
  date: string
  description: string
  logoPath: string
}

const timeline: TimelineItem[] = [
  {
    id: 1,
    company: 'Mirror.xyz',
    role: 'Product Engineer, Growth',
    url: 'https://mirror.xyz',
    date: 'Mar 2021 - Sep 2022 · 1 yr 7 mos',
    description:
      'Cras eget hendrerit purus. Maecenas at tellus mauris. Phasellus sodales facilisis pellentesque. Duis venenatis, enim non volutpat bibendum, augue nisl commodo ligula, ac mattis dolor nibh sit amet ipsum. Fusce nisi enim, congue ut gravida vel, imperdiet a diam. Sed sollicitudin risus vitae dolor rhoncus, in vehicula velit pharetra. Proin suscipit rhoncus diam quis rutrum. ',
    logoPath: '/mirror-logo.jpeg',
  },
  {
    id: 2,
    company: 'Dharma',
    role: 'Product Engineer, Growth',
    url: 'https://techcrunch.com/2022/01/18/opensea-buys-defi-wallet-startup-dharma-labs-appoints-new-cto/',
    date: 'Jan 2020 - Oct 2020 · 10 mos',
    description:
      'Cras eget hendrerit purus. Maecenas at tellus mauris. Phasellus sodales facilisis pellentesque. Duis venenatis, enim non volutpat bibendum, augue nisl commodo ligula, ac mattis dolor nibh sit amet ipsum. Fusce nisi enim, congue ut gravida vel, imperdiet a diam. Sed sollicitudin risus vitae dolor rhoncus, in vehicula velit pharetra. Proin suscipit rhoncus diam quis rutrum. ',
    logoPath: '/dharma-logo.jpeg',
  },
  {
    id: 3,
    company: 'Instacart',
    role: 'Product Engineer, Growth',
    url: 'https://instacart.com',
    date: 'Nov 2018 - Jan 2020 · 1 yr 3 mos',
    description:
      'Cras eget hendrerit purus. Maecenas at tellus mauris. Phasellus sodales facilisis pellentesque. Duis venenatis, enim non volutpat bibendum, augue nisl commodo ligula, ac mattis dolor nibh sit amet ipsum. Fusce nisi enim, congue ut gravida vel, imperdiet a diam. Sed sollicitudin risus vitae dolor rhoncus, in vehicula velit pharetra. Proin suscipit rhoncus diam quis rutrum. ',
    logoPath: '/instacart-logo.jpeg',
  },
]

function Button({
  children,
  onClick,
  classes,
}: {
  children: React.ReactNode
  onClick?: any
  classes?: string
}) {
  const defaultClasses =
    'inline-flex items-center justify-center rounded border border-gray-200 bg-white px-2.5 py-1.5 text-sm shadow-sm hover:bg-gray-50'
  return (
    <button
      type="button"
      className={`${defaultClasses} ${classes}`}
      onClick={(e) => onClick && onClick(e)}
    >
      {children}
    </button>
  )
}

function CopyButton({ onClick }: { onClick: any }) {
  return (
    <Button onClick={onClick} classes="w-24">
      <DocumentDuplicateIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
      Copy
    </Button>
  )
}

function CopiedButton() {
  return (
    <Button classes="w-24">
      <CheckIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
      Copied
    </Button>
  )
}

function ComposeButton() {
  return (
    <Link url="mailto:patrick.x.rivera@gmail.com">
      <Button>
        <PencilSquareIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
        Compose
      </Button>
    </Link>
  )
}

function Home() {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  useEffect(() => {
    if (isCopied) setTimeout(() => setIsCopied(false), 1500)
  }, [isCopied])

  return (
    <>
      <div>
        <Text>Welcome 👋</Text>
        <Text>
          My name is Patrick Rivera and I've spent the past few years building consumer apps in
          crypto / web3.
        </Text>
        <Text>
          Although I'm trained as an engineer, I consider myself a product designer at heart. My
          approach to building products comes from studying a variety of disciples, such as:{' '}
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
          I love using well-crafted products and feel like the best way I can be of service to the
          world is by creating products that people love.
        </Text>
        <Text>My philosophy for building products can be summarized with this quote below:</Text>
        <div className="border-l-2 border-l-black border-l-solid pl-2">
          <Text italic noMargin>
            Too many math/quant people are making games now. Your job isn’t to create “perfect
            balance”. Your job is to make people lose their minds (and have fun while doing it)!
            Imagine “economy designers” making GTA.
          </Text>
          <div className="flex items-center my-2">
            <div className="flex flex-col italic text-gray-subheading text-sm">
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
          My goal is to build products that make people lose their minds and have fun while doing
          it.
        </Text>
      </div>
      <div className="mt-16">
        <div className="mb-8">
          <h1 className="text-xl font-bold">Career</h1>
        </div>
        <div className="flow-root">
          <ul className="-mb-8">
            {timeline.map((event, eventIdx) => (
              <li key={event.id}>
                <div className="relative pb-8">
                  {eventIdx !== timeline.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white">
                        <Link url={event.url} openInNewTab>
                          <Image
                            src={event.logoPath}
                            width={72}
                            height={72}
                            className="rounded-full"
                          />
                        </Link>
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-bold">{event.company}</h2>
                      <span className="text-sm text-gray-subheading">{event.role}</span>
                      <span className="text-sm text-gray-subheading">{event.date}</span>
                      <span className="mt-2 text-sm">{event.description}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-16">
        <div>
          <h1 className="text-xl font-bold">Writing</h1>
        </div>
        <div className="flex flex-col">
          {posts.map(({ title, description, date, url }) => (
            <div className="w-92 mt-6" key={`${url}-${title}`}>
              <Link url={url}>
                <h4 className="font-bold">{title}</h4>
                <p className="mt-2 text-sm">{description}</p>
                <p className="mt-2 text-sm text-gray-subheading">{date}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <div>
          <h1 className="text-xl font-bold">Contact</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between w-full mt-6 items-center">
            <div className="flex flex-col">
              <span className="text-sm">Email</span>
              <span className="text-sm text-gray-subheading">patrick.x.rivera@gmail.com</span>
            </div>
            <div className="flex">
              <div className="mr-2">
                <ComposeButton />
              </div>
              <div>
                {isCopied ? (
                  <CopiedButton />
                ) : (
                  <CopyButton
                    onClick={() => {
                      setIsCopied(true)
                      navigator.clipboard.writeText('patrick.x.rivera@gmail.com')
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full mt-6 items-center">
            <div className="flex flex-col">
              <span className="text-sm">Say hi</span>
              <span className="text-sm text-gray-subheading">Don't be a stranger</span>
            </div>
            <div className="flex">
              <div className="mr-4 flex items-center">
                <Twitter className="h-5 w-5" />
                <span className="text-sm ml-1">Twitter</span>
              </div>
              <div className="flex items-center">
                <GitHub className="h-5 w-5" />
                <span className="text-sm ml-1">GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapLayoutStateToLayoutTree = ({ headTitle, pageTitle }: LayoutProps) => (
  <PrimaryLayout headTitle={headTitle} pageTitle={pageTitle} />
)

export default withLayout(mapLayoutStateToLayoutTree, {
  headTitle: 'Patrick X. Rivera',
  pageTitle: 'About',
})(Home)

/* eslint-disable react/no-unescaped-entities */
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { BeakerIcon } from '@heroicons/react/24/solid'
import Head from 'next/head'
import Text from '../components/Text'
import { PrimaryLayout } from '../components/Layouts'
import Link from '../components/Link'
import { GitHub, Twitter } from '../components/Icons'
import { posts, timeline } from '../utils/data'
import { ComposeButton, CopiedButton, CopyButton } from '../components/Button'
import { getBeakerIconDimensions } from '../utils/icons'

function Home() {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [isSplashScreen, setIsSplashScreen] = useState<boolean>(true)
  const [isSSR, setIsSSR] = useState<boolean>(true)

  const HEAD_TITLE = 'Patrick X. Rivera'

  const PAGE_TITLE = 'Welcome 👋'

  const beakerIconDimensions = getBeakerIconDimensions()

  useEffect(() => {
    setIsSSR(false)
  }, [])

  useEffect(() => {
    if (isCopied) setTimeout(() => setIsCopied(false), 1500)
  }, [isCopied])

  // TODO: fix SSR bug that doesn't change icon dimensions based on screen width
  if (isSSR) return null

  if (isSplashScreen) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Head>
          <title>Patrick X. Rivera</title>
          <link rel="icon" href="/gradient-pfp.ico" />
        </Head>
        <main>
          <div
            className="animate-splash-screen animation-delay-300"
            onAnimationEnd={() => setIsSplashScreen(false)}
          >
            <BeakerIcon
              width={beakerIconDimensions}
              height={beakerIconDimensions}
              color="#e5e7eb"
            />
          </div>
        </main>
      </div>
    )
  }

  return (
    <PrimaryLayout headTitle={HEAD_TITLE} pageTitle={PAGE_TITLE}>
      <div>
        <Text>
          My name is Patrick and I've spent the past few years building consumer products in crypto
          / web3.
        </Text>
        <Text>
          My approach to building products comes from studying a variety of disciplines, such as:{' '}
          <a
            href="https://github.com/patrickxrivera"
            target="blank"
            rel="noreferrer"
            className="underline decoration-pink-500"
          >
            software engineering
          </a>
          ,{' '}
          <a
            href="https://developer.apple.com/design/human-interface-guidelines/guidelines/overview/"
            target="blank"
            rel="noreferrer"
            className="underline decoration-purple-500"
          >
            interface design
          </a>
          , and{' '}
          <a
            href="https://yukaichou.com/gamification-examples/octalysis-complete-gamification-framework/"
            target="blank"
            rel="noreferrer"
            className="underline decoration-cyan-500"
          >
            video games
          </a>
          .
        </Text>
        <Text>
          I love using well-crafted products and feel the best way I can be of service to the world
          is by creating products people love.
        </Text>
      </div>
      <div className="mt-8 lg:mt-12">
        <div className="mb-6 lg:mb-8">
          <h1 className="text-2xl lg:text-2xl font-bold">Career</h1>
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
                      <span className="h-10 w-10 lg:h-8 lg:w-8 rounded-full flex items-center justify-center ring-8 ring-white">
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
                      <h2 className="font-bold text-xl lg:text-xl">{event.company}</h2>
                      <span className="text-lg lg:text-base text-gray-subheading">
                        {event.role}
                      </span>
                      <span className="text-lg lg:text-base text-gray-subheading">
                        {event.date}
                      </span>
                      <span className="mt-2 text-lg lg:text-base">{event.description}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 lg:mt-12">
        <div>
          <h1 className="text-2xl lg:text-2xl font-bold">Writing</h1>
        </div>
        <div className="flex flex-col">
          {posts.map(({ title, description, date, url }) => (
            <div className="w-92 mt-6" key={`${url}-${title}`}>
              <Link url={url} openInNewTab>
                <div className="flex items-center">
                  <h4 className="font-bold text-xl lg:text-xl">{title}</h4>
                  <ArrowUpRightIcon className="ml-2" width={18} height={18} strokeWidth={2} />
                </div>
                <p className="mt-2 text-lg lg:text-base">{description}</p>
                <p className="mt-2 text-lg lg:text-base text-gray-subheading">{date}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 lg:mt-12">
        <div>
          <h1 className="text-2xl lg:text-2xl font-bold">Contact</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row lg:justify-between w-full mt-4 lg:mt-6 lg:items-center">
            <div className="flex flex-col">
              <span className="text-lg lg:text-base">Email</span>
              <span className="text-lg lg:text-base text-gray-subheading">
                patrick.x.rivera@gmail.com
              </span>
            </div>
            <div className="flex mt-2 lg:mt-0">
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
          <div className="flex flex-col lg:flex-row lg:justify-between w-full mt-4 lg:mt-6 lg:items-center">
            <div className="flex flex-col">
              <span className="text-lg lg:text-base">Say hi</span>
              <span className="text-lg lg:text-base text-gray-subheading">Don't be a stranger</span>
            </div>
            <div className="flex mt-2 lg:mt-0">
              <Link url="https://twitter.com/patrickxrivera" openInNewTab>
                <div className="mr-4 flex items-center">
                  <Twitter className="h-5 w-5" />
                  <span className="text-lg lg:text-base ml-1">Twitter</span>
                </div>
              </Link>
              <Link url="https://github.com/patrickxrivera" openInNewTab>
                <div className="flex items-center">
                  <GitHub className="h-5 w-5" />
                  <span className="text-lg lg:text-base ml-1">GitHub</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PrimaryLayout>
  )
}

export default Home

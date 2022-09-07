/* eslint-disable react/no-unescaped-entities */
import { withLayout } from '@moxy/next-layout'
import React from 'react'
import Image from 'next/image'
import Text from '../components/Text'
import { PrimaryLayout } from '../components/Layouts'
import { LayoutProps } from '../components/Layouts/types'
import Link from '../components/Link'

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

function Career() {
  return (
    <>
      <div>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </Text>
        <Text>
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <Text>
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
      <div className="mt-8">
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
    </>
  )
}

const mapLayoutStateToLayoutTree = ({ headTitle, pageTitle }: LayoutProps) => (
  <PrimaryLayout headTitle={headTitle} pageTitle={pageTitle} />
)

export default withLayout(mapLayoutStateToLayoutTree, {
  headTitle: 'PXR | Career',
  pageTitle: 'Career',
})(Career)

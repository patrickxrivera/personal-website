/* eslint-disable react/no-unescaped-entities */
import { withLayout } from '@moxy/next-layout'
import React from 'react'
import Text from '../components/Text'
import { PrimaryLayout } from '../components/Layouts'
import { LayoutProps } from '../components/Layouts/types'
import BottomNavigation from '../components/BottomNavigation'
import { PAGES } from '../utils/pages'

function Writing() {
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
      <BottomNavigation previous={PAGES.CAREER} next={PAGES.PRODUCTS} />
    </>
  )
}

const mapLayoutStateToLayoutTree = ({ headTitle, pageTitle }: LayoutProps) => (
  <PrimaryLayout headTitle={headTitle} pageTitle={pageTitle} />
)

export default withLayout(mapLayoutStateToLayoutTree, {
  headTitle: 'PXR | Writing',
  pageTitle: 'Writing',
})(Writing)

/* eslint-disable no-unused-vars */
declare module '@moxy/next-layout' {
  import * as React from 'react'
  import { NextComponentType, NextPageContext } from 'next'

  export type InjectedPageProps<State = {}> = {
    setLayoutState: (state: State | ((currentState: State) => State)) => void
  }

  export type WithLayout<State = {}> = <PageProps = {}>(
    initialLayoutState?: State | ((props: PageProps) => State)
  ) => (page: (props: InjectedPageProps & PageProps) => React.ReactElement) => React.ReactElement

  export function withLayout<State = {}, PageProps = {}>(
    layout: React.ReactElement<PageProps> | ((state: State) => React.ReactElement<PageProps>),
    initialLayoutState?: State | ((props: PageProps) => State)
  ): (page: (props: InjectedPageProps & PageProps) => React.ReactElement) => React.ReactElement

  export function LayoutTree(props: {
    Component: NextComponentType<NextPageContext, any, {}>
    pageProps: {}
    pageKey?: string
    defaultLayout?: React.ReactElement
    children?: (tree: React.ReactElement) => React.ReactElement
  }): React.ReactElement
}

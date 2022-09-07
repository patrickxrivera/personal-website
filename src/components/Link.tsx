import LinkComponent from 'next/link'
import React from 'react'

type Props = {
  url: string
  children: React.ReactNode
  openInNewTab?: boolean
  className?: string
}

function Link({ url, children, openInNewTab, className }: Props) {
  return (
    <LinkComponent href={url}>
      <a
        href={url}
        target={openInNewTab ? '_blank' : '_self'}
        rel="noreferrer"
        className={className}
      >
        {children}
      </a>
    </LinkComponent>
  )
}

export default Link

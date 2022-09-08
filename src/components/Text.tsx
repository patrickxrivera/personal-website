import React from 'react'

type Props = {
  children: React.ReactNode
  italic?: boolean
  noMargin?: boolean
}

function Text({ children, italic, noMargin }: Props) {
  const marginStyle = noMargin ? '' : 'my-4'
  const italicStyle = italic ? 'italic' : ''

  return <p className={`${marginStyle} ${italicStyle} text-base lg:text-base`}>{children}</p>
}

export default Text

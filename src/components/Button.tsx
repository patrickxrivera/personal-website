import React from 'react'
import { CheckIcon, DocumentDuplicateIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import Link from './Link'

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
    'inline-flex items-center justify-center rounded border border-gray-200 bg-white px-2.5 py-1.5 text-lg lg:text-base shadow-sm hover:bg-gray-50'
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

export function CopyButton({ onClick }: { onClick: any }) {
  return (
    <Button onClick={onClick} classes="w-24">
      <DocumentDuplicateIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
      Copy
    </Button>
  )
}

export function CopiedButton() {
  return (
    <Button classes="w-24">
      <CheckIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
      Copied
    </Button>
  )
}

export function ComposeButton() {
  return (
    <Link url="mailto:patrick.x.rivera@gmail.com">
      <Button>
        <PencilSquareIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
        Compose
      </Button>
    </Link>
  )
}

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Page } from '../utils/pages'
import Link from './Link'

type Props = {
  previous?: Page
  next: Page
}

function BottomNavigation({ previous, next }: Props) {
  if (!previous) return null

  return (
    <div className="flex w-full justify-between mt-8">
      <Link url={previous.url}>
        <div className="flex flex-col border border-gray-200 border-solid rounded-lg py-2 px-4 w-72 hover:bg-gray-100">
          <div className="flex items-center mb-1">
            <ChevronLeftIcon height={12} width={12} strokeWidth={2} className="-ml-1" />
            <span className="text-xs text-gray-subheading ml-1">Previous</span>
          </div>

          <span className="text-sm font-semibold">{previous.title}</span>
        </div>
      </Link>
      <Link url={next.url}>
        <div className="flex flex-col border border-gray-200 border-solid rounded-lg py-2 px-4 w-72 hover:bg-gray-100 hover:cursor-pointer text-right">
          <div className="flex justify-end items-center mb-1">
            <span className="text-xs text-gray-subheading mr-1">Next</span>
            <ChevronRightIcon height={12} width={12} strokeWidth={2} className="-mr-1" />
          </div>
          <span className="text-sm font-semibold">{next.title}</span>
        </div>
      </Link>
    </div>
  )
}

export default BottomNavigation

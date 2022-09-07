/* eslint-disable react/no-unescaped-entities */
import { withLayout } from '@moxy/next-layout'
import Text from '../components/Text'
import { PrimaryLayout } from '../components/Layouts'
import { LayoutProps } from '../components/Layouts/types'
import Link from '../components/Link'

type Post = {
  title: string
  description: string
  date: string
  url: string
}

const posts: Post[] = [
  {
    title: 'Come for the creator, stay for the economy',
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
    title: 'A guide to crypto tokens',
    description: 'Lorem ipsum solar deleris. Lorem ipsum solar deleris.',
    date: 'April 20th, 2021',
    url: 'https://p.mirror.xyz',
  },
]

function Home() {
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
          I love using well-crafted products (see a few of my favorite{' '}
          <Link url="/products" className="underline decoration-emerald-500">
            here
          </Link>
          ) and feel like the best way I can be of service to the world is by creating products that
          people love.
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
      <div className="mt-8">
        <div>
          <h1 className="text-xl font-bold">Writing</h1>
        </div>
        {/* <div className="flex mt-4">
          {posts.map(({ title, description, date, url }) => (
            <div className="w-56 mr-3.5">
              <Link url={url}>
                <h4 className="font-bold">{title}</h4>
                <p className="mt-2 text-gray-subheading">{description}</p>
                <p className="mt-2 text-sm text-gray-subheading">{date}</p>
              </Link>
            </div>
          ))}
        </div> */}
        <div className="flex flex-col">
          {posts.map(({ title, description, date, url }) => (
            <div className="w-92 mt-6">
              <Link url={url}>
                <h4 className="font-bold">{title}</h4>
                <p className="mt-2 text-gray-subheading">{description}</p>
                <p className="mt-2 text-sm text-gray-subheading">{date}</p>
              </Link>
            </div>
          ))}
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

type Post = {
  title: string
  description: string
  date: string
  url: string
}

type TimelineItem = {
  id: number
  company: string
  role: string
  url: string
  date: string
  description: string
  logoPath: string
}

export const posts: Post[] = [
  {
    title: 'Web3 Fundamentals',
    description:
      'Presentation for the On Deck community that covers: eras of the web, blockchain architecture, last 10 years of crypto, rise of NFTs, and the future of NFTs',
    date: 'March 12th, 2021',
    url: 'https://docs.google.com/presentation/d/1sUpk0gbvRQelH0MUIOqjNeGe8nwRH4mhrhDHmI6qh4M/edit?usp=sharing',
  },
  {
    title: 'Web3 Creator Economy',
    description: `Rethinking the classic strategy "Come for the tool, stay for the network" in the context of web3 and cryptonetworks`,
    date: 'April 20th, 2021',
    url: 'https://p.mirror.xyz/1EpvJwUpx_KlRcHOKLNqADEkwHL_Z1ZYKobF2uLwgBg',
  },
  {
    title: 'Thoughts on DAO Tooling',
    description: `Building for DAOs today is a bit tricky so I shared some lessons from building for DAOs at Mirror and as a participant in many of these communities`,
    date: 'March 23rd, 2022',
    url: 'https://p.mirror.xyz/VlaQ_fH2NNXh0MNyhj4CI13wX8zwJ6boctVpagApPLc',
  },
  {
    title: 'A Guide to Crypto Tokens',
    description:
      'Deep dive into fungible tokens / NFTs and how they can be used in virtual economies - published in A16Z Future',
    date: 'May 23rd, 2021',
    url: 'https://future.com/a-taxonomy-of-tokens-distinctions-with-a-difference/',
  },
]

export const timeline: TimelineItem[] = [
  {
    id: 1,
    company: 'Mirror.xyz',
    role: 'Product Engineer, Growth',
    url: 'https://mirror.xyz',
    date: 'Mar 2021 - Sep 2022 · 1 yr 7 mos',
    description:
      'Home for web3 publishing. Backed by A16Z Crypto, USV, Variant Fund, Balaji, Naval, and others. I was employee #3.\n\nWrote product specs, built full-stack features, integrated smart contracts, and worked closely with creators and community builders on custom projects.',
    logoPath: '/mirror-logo.jpeg',
  },
  {
    id: 2,
    company: 'Dharma',
    role: 'Product Engineer, Growth',
    url: 'https://techcrunch.com/2022/01/18/opensea-buys-defi-wallet-startup-dharma-labs-appoints-new-cto/',
    date: 'Jan 2020 - Oct 2020 · 10 mos',
    description:
      'Acquired by OpenSea. Led engineering projects across backend, UI, growth, and analytics. Left to pursue startup ideas.',
    logoPath: '/dharma-logo.jpeg',
  },
  {
    id: 3,
    company: 'Instacart',
    role: 'Product Engineer, Growth',
    url: 'https://instacart.com',
    date: 'Nov 2018 - Jan 2020 · 1 yr 3 mos',
    description:
      'Full-stack engineer on the Growth team building features to engage and retain customers. Product was growing 100% YoY on > $1B in GMV so I learned how to move quickly while shipping high-quality features at scale.',
    logoPath: '/instacart-logo.jpeg',
  },
]

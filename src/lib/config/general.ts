import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  /* {
    name: 'night',
    text: '🌃 Night'
  }, */
  {
    name: 'lofi',
    text: '🎶 Lo-Fi'
  },
  /* {
    name: 'lemonade',
    text: '🍋 Lemonade'
  },
  {
    name: 'cupcake',
    text: '🧁 Cupcake'
  },
  {
    name: 'garden',
    text: '🏡 Garden'
  },
  {
    name: 'retro',
    text: '🌇 Retro'
  },
  {
    name: 'black',
    text: '🖤 Black'
  },
  {
    name: 'cmyk',
    text: '🖨 Light'
  },
  {
    name: 'dracula',
    text: '🧛 Dark'
  },
  {
    name: 'valentine',
    text: '🌸 Valentine'
  },
  {
    name: 'aqua',
    text: '💦 Aqua'
  },
  {
    name: 'synthwave',
    text: '🌃 Synthwave'
  }, */
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'Portfolio', 
      link: '/portfolio'
    },
    /* {
      text: 'Get Started',
      link: '/hello-world'
    },
    {
      text: 'Elements',
      link: '/hello-world/elements'
    }, */
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Blog',
      link: '/atom.xml'
    },
    {
      text: 'Contratame',
      link: '/sitemap.xml'
    }
  ]
}

export const date: DateConfig = {
  locales: 'es-MX',
  options: {
    year: '2-digit',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}

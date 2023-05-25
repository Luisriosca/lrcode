import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'luisrioscode',
  subtitle: 'Welcome to my coding blog portfolio site',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/elpatron@640.jpeg',
    name: 'luisrioscode',
    status: '🦩',
    bio: `
      🇲🇽 Software Engineer 🧑🏻‍💻
      <br>
        -------------
      <br>
      I really wish I was playing Tears of The Kindom right now!
    `
  },
  themeColor: '#3D4451'
}

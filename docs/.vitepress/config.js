// .vitepress/config.js
export default {
  // site-level options
  base: "/pinux/",
  lang: "en-US",
  title: "Pinux",
  description:
    "Welcome to your linux journey, I P-U will assist you with your journey !",
  head: [
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "./favicon.ico",
      },
    ],
  ],

  themeConfig: {
    siteTitle: 'Pinux',
    logo: '/favicon/small.png',
    outline:[1,2],
    nav: [
      { text: 'Guide', link: '/linux' },
      {
        text: 'Dungeon',
        items: [
          { text: 'Earth', link: '/rock/' },
          { text: 'Misson B', link: '/item-2' },
          { text: 'Misson C', link: '/item-3' }
        ]
      }
    ],
    sidebar: {
      '/dungeon/mission-a/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Piyush'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      { icon: 'instagram', link: '...' },
      { icon: 'linkedin', link: '...' },
      { icon: 'discord', link: '...' },
      { icon: 'mastodon', link: '...' },
      // Mastodon
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'cool link'
      }
    ],
    // algolia :true
     search: {
      provider: 'local'
    }
  },
};

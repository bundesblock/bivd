module.exports = {
  siteTitle: 'BiVD',
  siteDescription: "BiVD",
  authorName: 'BiVD',
  twitterUsername: '_maxpou',
  authorAvatar: '/images/avatar.jpeg',
  multilangPosts: true, // enable/disable flags in post lists
  authorDescription: `
  For the last decade, Maxence Poutord has worked with a variety of web technologies. He is currently focused on front-end development.
  On his day to day job, he is working as a senior front-end engineer at VSware. He is also a frequent tech speaker and a mentor.
  As a new digital nomad, he is living where the WIFI and sun is 😎 <br>
  Do you want to know more? <a href="https://www.maxpou.fr/about" target="_blank">Visit my website!</a>
  `,
  siteUrl: 'https://maxpou.github.io/',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpg',
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'minimal-ui',
  icon: 'src/assets/bivd-logo-square.png',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerLinks: [
    {
      label: 'Initiative',
      subLabel: 'Über BiVD',
      url: '/#initiative',
    },
    {
      label: 'Vision',
      subLabel: 'Blockchain',
      url: '/#vision',
    },
    {
      label: 'Partner',
      subLabel: 'Netzwerk',
      url: '/#partners',
    },
    {
      label: 'Blog',
      subLabel: 'Neuigkeiten',
      url: '/blog',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    [
      'Explore',
      {
        label: 'Blog',
        url: '/',
      },
      {
        label: 'About',
        url: '/gatsby-starter-morning-dew',
      },
      {
        label: 'Installation',
        url: '/privacy',
      },
    ],
    [
      'Follow the author',
      {
        label: 'Datenschutz',
        url: '/privacy',
      },
      {
        label: 'Impressum',
        url: '/imprint',
      },
    ],
  ],
}

module.exports = {
  siteTitle: 'BiVD',
  siteDescription: "BiVD",
  siteUrl: "https://bivd-initiative.de/",
  authorName: 'BiVD',
  multilangPosts: true, // enable/disable flags in post lists
  icon: 'src/assets/bivd-logo-square.png',
  postsPerPage: 6,
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

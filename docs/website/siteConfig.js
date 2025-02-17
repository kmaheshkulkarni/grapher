

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'CRAN Dependency Graph',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'https://grapher.network/img/grapher-demo.png',
    infoLink: 'https://shiny.john-coene.com/cran',
    pinned: true,
  },
];

// Internal
const siteConfig = {
  title: 'grapher', // Title for your website.
  tagline: 'Interactive Graphs',
  url: 'https://grapher.network', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'grapher',
  organizationName: 'JohnCoene',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'install', label: 'Install'},
    {doc: 'get-started', label: 'Guide'},
    {doc: 'graph', label: 'Docs'},
    {blog: true, label: 'Blog'},
    // {page: 'help', label: 'Help'},
    {href: 'https://github.com/JohnCoene/grapher', label: 'Github'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: '',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',
  defaultVersionShown: '0.1.0',
  gaTrackingId: 'UA-74544116-1',
  twitterUsername: 'jdatap',

  noIndex: false,

  /* Colors for website */
  colors: {
    primaryColor: '#000000',
    secondaryColor: '#525252'
  },

  editUrl: 'https://github.com/JohnCoene/grapher/edit/master/docs/docs/',

  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
    '/js/particles.min.js',
    '/js/particle-script.js',
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css?family=Raleway:400,700|Ubuntu+Mono&display=swap',
    '/css/code-block-buttons.css',
    '/css/custom.css',
  ],

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} John Coene`,
  
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'an-old-hope',
    defaultLang: 'r',
    version: '9.15.2',
  },

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/grapher-github.png',
  twitterImage: 'img/grapher-github.png',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/JohnCoene/grapher',
};

module.exports = siteConfig;

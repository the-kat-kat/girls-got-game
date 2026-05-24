import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/#About'),
    },
    /** 
    {
      text: 'The Jam',
      links: [
        {
          text: 'What is a Game Jam?',
          href: getPermalink('/#Game-Jam'),
        },
        {
          text: 'How to Participate',
          href: getPermalink('/#HIW'),
        },
        {
          text: 'Judging Criteria',
          href: getPermalink('/#Criteria'),
        },
        {
          text: 'Prizes',
          href: getPermalink('/#Prizes'),
        },
        /**{
          text: 'Rules',
          href: getPermalink('#Rules'),
        },
      ],
    },
    */
    {
      text: 'FAQ',
      href: getPermalink('/#FAQ'),
    },
    {
      text: 'GGG1 Winners',
      href: getPermalink('/past-winners'),
    },
    {
      text: 'Supporters',
      href: getPermalink('/supporters'),
    },
    {
      text: 'Team',
      href: getPermalink('/team'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    Built with <a class="text-fuchsia-400 underline " href="https://github.com/onwidget/astrowind"> AstroWind </a> ·
    Contact us at <a class="text-fuchsia-400 underline " href="mailto: hello@girlsgotgamejam.org">hello@girlsgotgamejam.org</a>
  `,
};

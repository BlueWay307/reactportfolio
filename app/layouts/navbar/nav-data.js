import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'instagram',
    url: `https://instagram.com/${config.instagram}`,
    icon: 'instagram',
  },
  {
    label: 'linkedin',
    url: `https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/BlueWay307${config.github}`,
    icon: 'github',
  },
];

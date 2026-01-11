import { FaDev, FaLinkedin, FaGithub } from 'react-icons/fa';

import glasses from '../../static/images/wolf-logo_D6.png';
import pixel from '../../static/images/logo_pixel_large.png';
import robot_wolf from '../../static/images/robot_logo.png';
import hardhat from '../../static/images/hardhat_logo.png';

export const pages = [
  {
    name: 'docs',
    logo: hardhat,
    text: 'Docs.',
    url: '/docs/category/coding-docs'
  },
  { name: 'blog', logo: glasses, text: 'Blog.', url: '/blog' },
  { name: 'about', logo: robot_wolf, text: 'About.', url: '/about' },
  { name: 'contact', logo: pixel, text: 'Contact.', url: '/contact' }
];

export const links = [
  // { name: 'dev.to', location: 'https://dev.to/wolfmath', icon: <FaDev /> },
  {
    name: 'linkedin',
    location: 'https://www.linkedin.com/in/wolf-math/',
    icon: <FaLinkedin />
  },
  {
    name: 'github',
    location: 'https://github.com/wolf-math',
    icon: <FaGithub />
  }
];

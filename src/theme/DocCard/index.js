import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  useDocById,
  findFirstSidebarItemLink
} from '@docusaurus/plugin-content-docs/client';
import { usePluralForm } from '@docusaurus/theme-common';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {
  FaJs,
  FaPython,
  FaGithub,
  FaCompass,
  FaBook,
  FaRocket,
  FaTerminal
} from 'react-icons/fa';
// function useCategoryItemsPlural() {
//   const {selectMessage} = usePluralForm();
//   return (count) =>
//     selectMessage(
//       count,
//       translate(
//         {
//           message: '1 item|{count} items',
//           id: 'theme.docs.DocCard.categoryDescription.plurals',
//           description:
//             'The default description for a category card in the generated index about how many items this category includes',
//         },
//         {count},
//       ),
//     );
// }
function CardContainer({ className, href, children }) {
  return (
    <Link
      href={href}
      className={clsx('card padding--lg', styles.cardContainer, className)}
    >
      {children}
    </Link>
  );
}

function CardLayout({ className, href, icon, title, description }) {
  return (
    <CardContainer href={href} className={className}>
      <Heading
        as='h2'
        className={clsx('text--truncate', styles.cardTitle)}
        title={title}
      >
        {icon} &nbsp; {title}
      </Heading>
      {/* {description && (
        <p
          className={clsx('text--truncate', styles.cardDescription)}
          title={description}
        >
          {description}
        </p>
      )} */}
    </CardContainer>
  );
}

function CardCategory({ item }) {
  const href = findFirstSidebarItemLink(item);

  if (!href) return null;

  // compute icon based on the label
  let icon = '🗃️';
  if (item.label === 'Python') {
    icon = <FaPython />;
  } else if (item.label === 'JavaScript') {
    icon = <FaJs />;
  } else if (item.label === 'GitHub') {
    icon = <FaGithub />;
  } else if (item.label === 'Language reference') {
    icon = <FaBook />;
  } else if (item.label === 'User guide') {
    icon = <FaCompass />;
  } else if (item.label === 'Advanced guide') {
    icon = <FaRocket />;
  } else if (item.label === 'Command line') {
    icon = <FaTerminal />;
  }

  return (
    <CardLayout
      className={item.className}
      href={href}
      icon={icon}
      title={item.label}
      // description={item?.description}
    />
  );
}

function CardLink({ item }) {
  const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      className={item.className}
      href={item.href}
      icon={icon}
      title={item.label}
      // description={item.description ?? doc?.description}
    />
  );
}

export default function DocCard({ item }) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}

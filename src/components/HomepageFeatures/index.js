import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Docs',
    Svg: require('@site/static/images/hardhat_logo.png').default,
    description: (
      <>
        Comprehensive coding documentation and tutorials. Learn programming
        concepts, best practices, and explore technical guides.
      </>
    )
  },
  {
    title: 'Blog',
    Svg: require('@site/static/images/wolf-logo_D6.png').default,
    description: (
      <>
        Articles, insights, and updates on software development, technology, and
        the journey of turning complexity into clarity.
      </>
    )
  },
  {
    title: 'About',
    Svg: require('@site/static/images/robot_logo.png').default,
    description: (
      <>
        Learn about the author, technical background, and the mission behind
        Wolf Codes.
      </>
    )
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        {/* <Svg className={styles.featureSvg} role='img' /> */}
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

//const {siteConfig} = useDocusaurusContext();

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Unreal Engine SDK',
    Svg: require('@site/static/img/icons8-unreal-engine.svg').default,
    description: (
      <>
        View Unreal Engine SDK documentation.
        <div className="container">
            <div className="column"></div>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to='/unreal-oss/'
                  target="_blank">
                  Unreal OSS
                </Link>
              </div>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to='/unreal-sdk/'
                  target="_blank">
                  Unreal SDK
                </Link>
              </div>
          </div>
      </>
    ),
  },
  {
    title: 'Unity Engine SDK',
    Svg: require('@site/static/img/icons8-unity-engine.svg').default,
    description: (
      <>
        View Unity Engine SDK doucmentation.
        
        <div className="container">
            <div className="column"></div>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to='/unity-sdk/'
                  target="_blank">
                  Unity SDK
                </Link>
              </div>
          </div>
      </>
    ),
  },
  {
    title: 'Unity Engine SDK',
    Svg: require('@site/static/img/icons8-c.svg').default,
    description: (
      <>
        View C++ SDK doucmentation.
        
        <div className="container">
            <div className="column"></div>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="/cpp-sdk/"
                  target="_blank">
                  C++ SDK
                </Link>
              </div>
          </div>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

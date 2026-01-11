import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

// old imports
import {pages} from '../../static/js/links'
import oldstyles from './home.module.scss';
import logo from '../../static/images/wolf-logo_D5.png';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Turning complexity into clarity<head />">
        
      <div className="container">
        <div className={oldstyles.homepage}>
          <div id={oldstyles.greeting}>
            <div id={oldstyles.mainlogo}>
              <img id={oldstyles.logo} src={logo} alt="Logo" />
              <div className={oldstyles.title}>
                <h1>Wolf codes</h1>
                <h3>Turning <br/> Complexity <br/> into <br/> Clarity.</h3>
              </div>
            </div>
          </div>
          <div id={oldstyles.pages} ref={pages}>
            {pages.map((page, i) => (
              <a className={oldstyles.page} id={page.name} href={page.url} key={i}>
                <img className={oldstyles.linkLogo} src={page.logo} alt={page.name} />
                <h3 className={[oldstyles.description, oldstyles.typewriter]}>{page.text}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}
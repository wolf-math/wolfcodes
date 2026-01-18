import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { FaSearch, FaPython, FaJs, FaTerminal, FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import styles from './home.module.scss';
import logo from '../../static/images/wolf-logo_D5.png';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  // Topics to cycle through with typing animation
  const topics = [
    'Python',
    'JavaScript',
    'OOP',
    'Async await',
    'Decorators',
    // 'React',
    'Functions',
    'Generators',
    'Context managers',
    // 'Type hints'
  ];
  
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  useEffect(() => {
    const currentTopic = topics[currentTopicIndex];
    
    // If we've finished typing, wait before starting to delete
    if (!isDeleting && displayedText === currentTopic) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }
    
    // If we've finished deleting, move to next topic immediately
    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTopicIndex((prev) => (prev + 1) % topics.length);
      return;
    }
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing out the topic
        if (displayedText.length < currentTopic.length) {
          setDisplayedText(currentTopic.substring(0, displayedText.length + 1));
          setTypingSpeed(100);
        }
      } else {
        // Deleting the topic
        if (displayedText.length > 0) {
          setDisplayedText(currentTopic.substring(0, displayedText.length - 1));
          setTypingSpeed(50);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTopicIndex, topics, typingSpeed]);
  
  const openSearchModal = () => {
    // Try multiple selectors to find the DocSearch button
    const selectors = [
      '.DocSearch-Button',
      'button[class*="DocSearch"]',
      '[class*="navbar__search"] button',
      '.navbar__search button'
    ];
    
    for (const selector of selectors) {
      const btn = document.querySelector(selector);
      if (btn) {
        btn.click();
        return;
      }
    }
  };
  
  return (
    <>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Turning complexity into clarity<head />">
        
      <div className="container">
        <div className={styles.homepage}>
          <div id={styles.greeting}>
            <div id={styles.mainlogo}>
              <img id={styles.logo} src={logo} alt="Logo" />
              <div className={styles.title}>
                <h1>Wolf codes</h1>
                <h3>Turning  Complexity  into  Clarity.</h3>
              </div>
            </div>
          </div>
          
          <button 
            className={styles.searchButton} 
            onClick={openSearchModal}
            aria-label="Open search"
          >
            <FaSearch className={styles.searchIcon} />
            <span className={styles.searchText}>
              Search for{' '}
              <span className={styles.typingText}>
                {displayedText}
                <span className={styles.cursor}>|</span>
              </span>
            </span>
          </button>
          
          <div className={styles.cardsContainer}>
            <Link to="/docs/category/python" className={styles.card}>
              <FaPython className={styles.cardIcon} />
              <h3>Python</h3>
            </Link>
            <Link to="/docs/category/javascript" className={styles.card}>
              <FaJs className={styles.cardIcon} />
              <h3>JavaScript</h3>
            </Link>
            <Link to="/docs/category/command-line" className={styles.card}>
              <FaTerminal className={styles.cardIcon} />
              <h3>CLI</h3>
            </Link>
            <Link to="/docs/category/github" className={styles.card}>
              <FaGithub className={styles.cardIcon} />
              <h3>GitHub</h3>
            </Link>
          </div>
          
        </div>
      </div>
      </Layout>
    </>
  );
}
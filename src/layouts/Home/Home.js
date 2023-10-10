import gamestackTexture2Large from 'assets/chatgpt.png';
import gamestackTexture2Placeholder from 'assets/chatgpt.png';
import gamestackTexture2 from 'assets/chatgpt.png';
import gamestackTextureLarge from 'assets/chatgpt2.png';
import gamestackTexturePlaceholder from 'assets/chatgpt2.png';
import gamestackTexture from 'assets/chatgpt2.png';
import oldAgePlaceholder from 'assets/old1.jpeg'
import oldAgePlaceholder2 from 'assets/old2.jpeg'
import sliceTextureLarge from 'assets/buszup.png';
import sliceTexturePlaceholder from 'assets/buszup.png';
import sliceTexture from 'assets/slice-app.jpg';
import sprTextureLarge from 'assets/budgettrip.png';
import sprTexturePlaceholder from 'assets/budgettrip.png';
import sprTexture from 'assets/budgettrip.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import Experience  from 'react-add/src/components/Experience.jsx';
import Contact  from 'react-add/src/components/Contact.jsx';

const disciplines = ['Developer', 'Vanilla.React.Next', 'App Developer', 'Flutter.Dart.Cordova', 'Designer'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Designer + Developer"
        description="Design portfolio of Sworjjomoy Pathak — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="BudgetTrip.net"
        description="A Full Stack Travel Website made using Vanilla JS and Node JS"
        buttonText="View project"
        buttonLink="https://budgettrip.net/"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Neo-GPT"
        description="A mobile Application made with Flutter, DART, V, Node JS and Mongo DB to help sneior citizens in their daily life."
        buttonText="View Project"
        buttonLink=""
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={3}
        title="SaanjBati"
        description="A mobile Application made with Flutter, DART, V, Node JS and Mongo DB to help sneior citizens in their daily life."
        buttonText="View Project"
        buttonLink=""
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [oldAgePlaceholder, oldAgePlaceholder],
              placeholder: oldAgePlaceholder,
            },
            {
              srcSet: [oldAgePlaceholder2, oldAgePlaceholder2],
              placeholder: oldAgePlaceholder2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={4}
        title="Busz-Up"
        description="A NFT trading marketplace made using React JS, BCT and ML. Secured #1 position in HTF 2K23 with this project."
        buttonText="View project"
        buttonLink=""
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      
      
      <Experience/>
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Contact/>
      <Footer />
    </div>
  );
};

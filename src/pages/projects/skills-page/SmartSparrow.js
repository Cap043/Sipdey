import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprComponentsDarkLarge from 'assets/spr-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from 'assets/spr-components-dark.png';
import imageSprComponentsLightLarge from 'assets/spr-components-light-large.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from 'assets/spr-components-light.png';
import imageSprDesignSystemDarkLarge from 'assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from 'assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from 'assets/spr-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from 'assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from 'assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion from 'assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from 'assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from 'assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from 'assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from 'assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from 'assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from 'assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from 'assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from 'assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from 'assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from 'assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from 'assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from 'assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from 'assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from 'assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from 'assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from 'assets/spr-storyboarder-light.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'My Skills';
const description =
  'Hey, I am Sworjjomoy Pathak, an App-Web developer with ample creativity and vast Knowledge about many Technologies related to it. Scroll through this page to see what I have got.';
const roles = [
  'Cross Platform Application Development',
  'FrontEnd Web Development',
  'Machine Learning Enthuciast',
  'UI-UX Designer',
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://drive.google.com/file/d/1-1U4Fhv5g4Or_T7X_bKuZqj80Xd3iVYo/view?usp=drivesdk"
          roles={roles}
        />
        <ProjectSection padding="top">
          {/* <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent> */}
        </ProjectSection>
        
        <ThemeProvider themeId="dark" data-invert>
        </ThemeProvider>
        <ThemeProvider themeId="dark" data-invert>
          <Earth
            className={styles.earth}
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            labels={useMemo(
              () => [
                {
                  position: [0.54, 0.19, 0.18],
                  text: 'React.JS',
                  hidden: true,
                },
                {
                  position: [0.47, -0.38, 0.04],
                  text: 'Next.JS',
                  hidden: true,
                },
                {
                  position: [0.22, 0.44, -0.35],
                  text: 'Vue.JS',
                  hidden: true,
                },
                {
                  position: [0.16, -0.06, 0.58],
                  text: 'Vanilla.JS',
                  hidden: true,
                },
                {
                  position: [0.11, 0.2, -0.56],
                  text: 'Three.JS',
                  hidden: true,
                },
                {
                  position: [0.52, 0.2, -0.23],
                  text: 'Flask',
                  hidden: true,
                },
                {
                  position: [-0.24, 0.75, 0.24],
                  text: 'Website Development',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.55, 0.24],
                  text: 'Application Development',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.35, 0.24],
                  text: 'Competitive Programming',
                  delay: 800,
                  hidden: true,
                },
              ],
              []
            )}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>
                      What I like?
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                    
I am a competitive coder proficient in C, C++, Python, and Rust. My diverse language skills empower me to tackle a wide range of coding challenges, giving me a competitive edge in various programming competitions and fostering a deep understanding of algorithmic problem-solving.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0, 0, 2.4]}
              meshes={['Atmosphere', 'EarthFull']}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[1.14, -1.39, 0.94]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Application Developer
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Cross Platform Full-Stack Application Development using FLUTTER, DART, CORDOVA & MongoDB, FIREBASE as Database.
                                          </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.17, 0.69, -1.47]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="start" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Web Developemnt
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Web Development Using HTML-CSS-JS , Vanilla-JS, React-JS, NEXT-JS, Vue-JS & Three-JS. WebDev for ML Projects using Python, Flask & Django. Backend Using Node.js.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.81, 0.51, 0.43]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'React.JS',
                'Next.JS',
                'Vanilla.JS',
                'Vue.JS',
                'Three.JS',
                'Flask',
              ]}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['EarthPartial', 'Chunk']}
              labels={['Website Development', 'Application Development', 'Competitive Programming']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Technologies
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      I'm proficient in GIT, AWS, GCP, Docker, NetLify, MS VSE, MS VSC, MS Azure. 
                      I do Designing in Figma, Adobe Illustrator & Adobe Indesign.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              scrimReverse
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['Atmosphere', 'EarthFull']}
            />
          </Earth>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Ultimately the project was successful after Smart Sparrow and the aero
                platform were{' '}
                <Link href="https://www.prnewswire.com/news-releases/pearson-acquires-interactive-learning-technology-from-skills-page-300987673.html">
                  acquired by Pearson in 2020
                </Link>{' '}
                to become a foundation for their next generation learning platform.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

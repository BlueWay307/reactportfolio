import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design these days. Made the switch from Sketch in 2020 and haven’t
                    looked back. I’ve also created{' '}
                    <Link href="https://www.figma.com/@websy">a few plugins</Link> that
                    you can install.
                  </ListItem>
                  <ListItem>
                    Any motion graphics I create are created in Adobe After Effects. So
                    far I haven’t found a non-Adobe product that’s as good. If anyone has
                    suggestions please <Link href="/contact">message me</Link>.
                  </ListItem>
                  <ListItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <Link href="https://code.visualstudio.com/">VSCode</Link> as my text
                    editor, with the Tokyo Night theme and Operator Mono as my typeface of
                    choice.
                  </ListItem>
                  <ListItem>
                    Firefox is my main browser for both development and general use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> is my front end
                    Javascript library of choice. The component-centric mental model is
                    the first thing that truly made sense to me as a designer.
                  </ListItem>
                  <ListItem>
                    For 3D effects and image shaders I use{' '}
                    <Link href="https://threejs.org/">three.js</Link>. It has a bit of a
                    learning curve but you can do some really powerful stuff with it.
                  </ListItem>
                  <ListItem>
                    For CSS I’ve used a myriad pre-processors and css-in-js solutions like
                    styled-components, but these days I’m using vanilla CSS with{' '}
                    <Link href="https://postcss.org/">PostCSS</Link> to get upcoming CSS
                    features today.
                  </ListItem>
                  <ListItem>
                    For Javascript animations I use{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link>, it’s
                    a great way to add spring animations to React and three.js.
                  </ListItem>
                  <ListItem>
                    For building and testing UI components in isolation I use{' '}
                    <Link href="https://storybook.js.org/">Storybook</Link>. Check out the{' '}
                    <Link href="https://storybook.js.org/">
                      storybook for this website
                    </Link>
                    .
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};

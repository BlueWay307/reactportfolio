import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
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
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Designing the Admin Dashboards';
const description =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.';
const roles = ['User Research', 'UX Design', 'Interface Design', 'Front End Develop'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url=""
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt=""
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Bringing it together</ProjectSectionHeading>
              <ProjectSectionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem?
              </ProjectSectionText>
              <ProjectSectionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem?
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt=""
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt=""
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>
              <ProjectSectionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem?
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt=""
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                  width={440}
                  height={340}
                  placeholder={sliceAnnotationPlaceholder}
                  alt=""
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Meaningful details</ProjectSectionHeading>
              <ProjectSectionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem?
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem?
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt=""
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

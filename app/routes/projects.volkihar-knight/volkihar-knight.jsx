import volkiharBackgroundLarge from '~/assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from '~/assets/volkihar-background-placeholder.jpg';
import volkiharBackground from '~/assets/volkihar-background.jpg';
import volkiharBannerLarge from '~/assets/volkihar-banner-large.jpg';
import volkiharBannerPlaceholder from '~/assets/volkihar-banner-placeholder.jpg';
import volkiharBanner from '~/assets/volkihar-banner.jpg';
import volkiharBookLarge from '~/assets/volkihar-book-large.png';
import volkiharBookPlaceholder from '~/assets/volkihar-book-placeholder.png';
import volkiharBook from '~/assets/volkihar-book.png';
import volkiharEnderalLarge from '~/assets/volkihar-enderal-large.jpg';
import volkiharEnderalLogoLarge from '~/assets/volkihar-enderal-logo-large.png';
import volkiharEnderalLogoPlaceholder from '~/assets/volkihar-enderal-logo-placeholder.png';
import volkiharEnderalLogo from '~/assets/volkihar-enderal-logo.png';
import volkiharEnderalPlaceholder from '~/assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from '~/assets/volkihar-enderal.jpg';
import volkiharSlide1Large from '~/assets/volkihar-slide-1-large.png';
import volkiharSlide1 from '~/assets/volkihar-slide-1.png';
import volkiharSlide2Large from '~/assets/volkihar-slide-2-large.png';
import volkiharSlide2 from '~/assets/volkihar-slide-2.png';
import volkiharSlide3Large from '~/assets/volkihar-slide-3-large.png';
import volkiharSlide3 from '~/assets/volkihar-slide-3.png';
import volkiharSlidePlaceholder from '~/assets/volkihar-slide-placeholder.jpg';
import { Button } from '~/components/button';
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
import { Fragment, Suspense, lazy } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { VolkiharLogo } from './volkihar-logo';
import styles from './volkihar-knight.module.css';

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

const Armor = lazy(() => import('./armor').then(module => ({ default: module.Armor })));

const title = 'Books Colection';
const description =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.';
const roles = ['History', 'Philosophy', 'Selfhelp'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export function VolkiharKnight() {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --primary: oklch(87.71% 0.084 85.29);
              --accent: oklch(87.71% 0.084 85.29);
            }
            [data-theme='light'] {
              --primary: oklch(52.25% 0.121 81.53);
              --accent: oklch(52.25% 0.121 81.53);
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`}
          width={1280}
          height={720}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Liberty book"
          url="https://www.libertybooks.com/index.php?route=common/home"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${volkiharBanner} 800w, ${volkiharBannerLarge} 1100w`}
              width={800}
              height={436}
              placeholder={volkiharBannerPlaceholder}
              alt=""
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              srcSet={`${volkiharBook} 490w, ${volkiharBookLarge} 960w`}
              width={480}
              height={300}
              placeholder={volkiharBookPlaceholder}
              alt=""
              sizes={`(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.armor}>
              <Suspense>
                <Armor alt="" />
              </Suspense>
            </div>
            <div className={styles.textSection}>
              <ProjectSectionHeading>Short story of my written book</ProjectSectionHeading>
              <ProjectSectionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
              </ProjectSectionText>
              <ProjectSectionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <div className={styles.logoContainer}>
              <VolkiharLogo
                role="img"
                aria-label="The Volkihar Knight logo, a monogram using the letters 'V' and 'K"
              />
            </div>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>My Recommended</ProjectSectionHeading>
              <ProjectSectionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Suspense>
              <Carousel 
                placeholder={volkiharSlidePlaceholder}
                images={[
                  {
                    srcSet: `${volkiharSlide1} 60w, ${volkiharSlide1Large} 120w`,
                    sizes: `(max-width: ${media.mobile}px) 10vw, (max-width: ${media.tablet}px) 30vw, 106px`,
                    alt: '',
                  },
                  {
                    srcSet: `${volkiharSlide2} 60w, ${volkiharSlide2Large} 120w`,
                    sizes: `(max-width: ${media.mobile}px) 10vw, (max-width: ${media.tablet}px) 30vw, 106px`,
                    alt: '',
                  },
                  {
                    srcSet: `${volkiharSlide3} 60w, ${volkiharSlide3Large} 120w`,
                    sizes: `(max-width: ${media.mobile}px) 10vw, (max-width: ${media.tablet}px) 30vw, 106px`,
                    alt: '',
                  },
                ]}
                width={114}
                height={200}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={`${volkiharEnderal} 1280w, ${volkiharEnderalLarge} 1920w`}
              width={1280}
              height={720}
              placeholder={volkiharEnderalPlaceholder}
              alt=""
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Image
                srcSet={`${volkiharEnderalLogo} 180w, ${volkiharEnderalLogoLarge} 360w`}
                width={180}
                height={200}
                placeholder={volkiharEnderalLogoPlaceholder}
                alt=""
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              />
              <ProjectSectionHeading>My Quotes</ProjectSectionHeading>
              <ProjectSectionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint reprehenderit consectetur autem voluptatem.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevron-right"
                href=""
              >
                View More
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

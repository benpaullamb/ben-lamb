import Banner from '../components/Banner';
import Section from '../components/Section';
import tokyoImage from '../assets/backgrounds/tokyo-unsplash.jpg';

export default function Home(props) {
  return (
    <>
      <Banner title="Ben Lamb" subtitle="Full-Stack Software Engineer" image={tokyoImage} id="home" full />

      <Section>Content will go here</Section>
    </>
  );
}

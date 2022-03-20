import Banner from '../components/Banner';
import shrineImage from '../assets/backgrounds/itsukushimaI-unsplash.jpg';

export default function Projects(props) {
  return (
    <>
      <Banner title="Projects" subtitle="39 and counting" image={shrineImage} />

      <div className="px-8 py-16 container mx-auto">Content will go here</div>
    </>
  );
}

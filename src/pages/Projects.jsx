import Banner from '../components/Banner';
import shrineImage from '../assets/itsukushimaI-unsplash.jpg';

export default function Projects(props) {
  return (
    <>
      <Banner title="Projects" image={shrineImage} />

      <div className="px-8 py-16 container mx-auto">Content will go here</div>
    </>
  );
}

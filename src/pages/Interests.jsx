import Banner from '../components/Banner';
import osakaImage from '../assets/osaka-unsplash.jpg';

export default function Interests(props) {
  return (
    <>
      <Banner title="Interests" subtitle="Weightlifting | Lucid Dreaming" image={osakaImage} />

      <div className="px-8 py-16 container mx-auto">Content will go here</div>
    </>
  );
}

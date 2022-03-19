import Banner from '../components/Banner';
import cityImage from '../assets/tokyo-city-unsplash.jpg';

export default function Education(props) {
  return (
    <>
      <Banner title="Education" image={cityImage} />

      <div className="px-8 py-16 container mx-auto">Content will go here</div>
    </>
  );
}

import Banner from '../components/Banner';
import kyotoImage from '../assets/kyoto-unsplash.jpg';

export default function Experience(props) {
  return (
    <>
      <Banner title="Experience" subtitle="IBM | Igloo | ENSEK" image={kyotoImage} />

      <div className="px-8 py-16 container mx-auto">Content will go here</div>
    </>
  );
}

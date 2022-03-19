import Banner from '../components/Banner';
import tokyoImage from '../assets/tokyo-unsplash.jpg';

export default function Home(props) {
  return (
    <>
      <Banner title="Ben Lamb" image={tokyoImage} />

      <div className="px-8 py-16 container mx-auto">Content will go here</div>
    </>
  );
}

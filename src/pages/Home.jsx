import Banner from '../components/Banner';
import tokyoImage from '../assets/backgrounds/tokyo-unsplash.jpg';

export default function Home(props) {
  return (
    <>
      <Banner title="Ben Lamb" subtitle="Full-Stack Software Engineer" image={tokyoImage} />

      <div className="px-8 py-16 container mx-auto">Content will go here</div>
    </>
  );
}

import Banner from '../components/Banner';
import autumnImage from '../assets/backgrounds/japan-autumn-unsplash.jpg';

export default function Skills(props) {
  return (
    <>
      <Banner title="Skills" subtitle="Languages &amp; Libraries" image={autumnImage} />

      <div className="px-8 py-16 container mx-auto">Content will go here</div>
    </>
  );
}

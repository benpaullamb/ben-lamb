import tokyoImage from '../assets/tokyo-unsplash.jpg';
import Banner from '../components/Banner';

// Photo by <a href="https://unsplash.com/@yory?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ryo Yoshitake</a> on
// <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

export default function Home(props) {
  return (
    <>
      <Banner title="Ben Lamb" image={tokyoImage} />

      <div className="px-8 py-16 container mx-auto">Content will go here</div>
    </>
  );
}

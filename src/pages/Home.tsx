import SpotlightAnime from "@/components/common/SpotlightAnime";
import TrendingAnime from "@/components/common/TrendingAnime";
import TopAnimes from "@/components/common/TopAnimes";
import LatestEpisodes from "@/components/common/LatestEpisodes";

const Home = () => {
  return (
    <div>
      <SpotlightAnime />
      <TrendingAnime />
      <TopAnimes />
      <LatestEpisodes />
    </div>
  );
};

export default Home;

import SpotlightAnime from "@/components/common/SpotlightAnime";
import TrendingAnime from "@/components/common/TrendingAnime";
import TopAnimes from "@/components/common/TopAnimes";
import LatestEpisodes from "@/components/common/LatestEpisodes";

const FeatureData = [
  {
    field: "Top Airing",
    status: "airing",
    orderBy: "popularity",
    delay: 0,
  },
  {
    field: "Most Popular",
    status: "",
    orderBy: "popularity",
    delay: 1000,
  },
  {
    field: "Most Favorite",
    status: "airing",
    orderBy: "rank",
    delay: 2000,
  },
  {
    field: "Most Ranked",
    status: "complete",
    orderBy: "rank",
    delay: 3000,
  },
];

const Home = () => {
  return (
    <div>
      <SpotlightAnime />
      <TrendingAnime />
      <div className="mt-20 max-sm:ml-4">
        <div className="grid grid-cols-4 gap-x-6 max-lg:grid-cols-2 gap-y-4 max-md:grid-cols-1">
          {FeatureData.map((el, index) => (
            <TopAnimes
              key={index}
              field={el.field}
              status={el.status}
              orderBy={el.orderBy}
              delay={el.delay}
            />
          ))}
        </div>
      </div>
      <LatestEpisodes />
    </div>
  );
};

export default Home;

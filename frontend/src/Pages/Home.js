import SearchBar from "../Components/SearchBar";
import JobPreview from "../Components/JobPreview";
import EmployerOption from "../Components/EmployerOption";
import BrowseAllJobs from "../Components/BrowseAllJobs";
import PopularSearches from "../Components/PopularSearches";

const Home = () => {
  return (
    <div className="home">
      <h3 className="search-header">Find Your Next Job Now!</h3>
      <SearchBar />
      <EmployerOption />
      <h3 className="recent-jobs-header">Recent job offers</h3>
      <JobPreview />
      <BrowseAllJobs />
      <PopularSearches />
    </div>
  );
};

export default Home;

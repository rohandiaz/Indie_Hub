import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel '
import LatestJobs from './LatestJobs '
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs();
  // const { user } = useSelector(store => store.auth);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (user?.role === 'recruiter') {
  //     navigate("/admin/companies");
  //   }
  // }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  )
}

export default Home
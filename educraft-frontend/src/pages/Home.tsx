import  HeroSection from './Herosections'
import Navbar from '../components/Navbar'
import  About from './About'
import  Courses from './Courses'
import  Activesessions from './Sessions'
import  Testimonials from './Testimonials'
import Experts from './Experts'
import ContactUs from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Courses />
      <Activesessions />
      <Experts />
      <Testimonials />
      <ContactUs />
      <Footer />

    </>
  )
}

export default Home
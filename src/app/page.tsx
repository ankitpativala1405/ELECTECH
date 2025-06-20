import HomePage from '../PAGES/HOME/index'
import Header from '../COMPONENTS/index'
import NavbarHeader from '../COMPONENTS/navbar'
import ScrollToTopButton from '../COMPONENTS/ScrollToTopButton'
import Footer from '../COMPONENTS/Footer'

export default function Home() {
  return (
   <>
   <Header/>
   <NavbarHeader/>
   <HomePage/>
   <ScrollToTopButton/>
   <Footer/>
   </>
  );
}

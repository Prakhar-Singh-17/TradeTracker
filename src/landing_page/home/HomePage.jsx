import Navbar from '../common_components/Navbar'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../common_components/OpenAccount'
import Footer from '../common_components/Footer'

export default function HomePage() {
  return (
    <>
    <Hero/>
    <Awards/>
    <Stats/>
    <Pricing/>
    <Education/>
    <OpenAccount/>
    </>
  )
}

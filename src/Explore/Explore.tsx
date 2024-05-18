import { Habitat } from '../assets/habitat/Habitat'
import { Navbar } from '../assets/navbar/Navbar'
import './Explore.css'
import { Grid } from './components/Grid'

// Everytime an account is created their Habitat will be displayed in the Explore page, maybe a feature where we can make it
// Add a max amount of person to show


export const Explore = () => {

    let mockData = [
        <Habitat containerHeight='30' containerWidth='30' contentHeight='30' contentWidth='30'/>, 
        <Habitat containerHeight='30' containerWidth='30' contentHeight='30' contentWidth='30'/>,
        <Habitat containerHeight='30' containerWidth='30' contentHeight='30' contentWidth='30'/>,
        <Habitat containerHeight='30' containerWidth='30' contentHeight='30' contentWidth='30'/>]

    return (
        <div>
            <div className="explore__sticky">

                <Navbar></Navbar>
            </div>
            <div className='explore__center'>
                <h2>Explore other Habitats 🗺️</h2>
                <Grid habitats={mockData}/>
                <button className='explore__buttons'>
                    Previous
                </button>
                <button className='explore__buttons'>
                    Next
                </button>
            </div>

            
        </div>
    )
}
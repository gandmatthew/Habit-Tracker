import { Navbar } from '../assets/navbar/Navbar'
import './Friends.css'

export const Friends = () => {
    return (
        <div>

            <div className="explore__sticky">
                <Navbar></Navbar>
            </div>
            <div className='explore__center'>

                <div className="friends__modal-content">
                    <p>
                        <span className="search-icon">🔎</span>
                        <input type="text" placeholder="Search for a friend" name="search-friend" className="search-input"/>
                    </p>
                    <p>...</p>
                    <p>...</p>
                    <p>...</p>
                    <p>...</p>
                    <p>...</p>
                    <p>...</p>
                    <p>...</p>  
                </div>

            </div>
        </div>

    )
}
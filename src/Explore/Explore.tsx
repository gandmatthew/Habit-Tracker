import { Habitat } from '../assets/habitat/Habitat'
import { Navbar } from '../assets/navbar/Navbar'
import { Grid } from './components/Grid'

import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import styles from './Explore.module.css'

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
            <div className={styles.sticky}>

                <Navbar></Navbar>
            </div>
            <div className={styles.center}>
                <h2>Explore other Habitats 🗺️</h2>
                <Grid habitats={mockData}/>
                <button className={styles.button}>
                    Previous
                </button>
                <button className={styles.button}>
                    Next
                </button>
            </div>

            
        </div>
    )
}
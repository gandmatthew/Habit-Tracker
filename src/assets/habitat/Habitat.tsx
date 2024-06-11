import styles from './Habitat.module.css';
import { Plane } from './components/Plane';
import React, { useEffect } from 'react';

interface HabitatProps {
    containerWidth: number;
    containerHeight: number;
    contentWidth: number;
    contentHeight: number;
}

export const Habitat = (props: HabitatProps) => {

    let containerWidth = props.containerWidth;
    let containerHeight = props.containerHeight;

    let contentWidth = props.contentWidth;
    let contentHeight = props.contentHeight;

    return (    
        <div className={styles.container} style={{width: `calc(var(--plane-height, ${containerWidth}) * 1vmin)`, height: `calc(var(--plane-height, ${containerHeight}) * 1vmin)`}}>
            <Plane contentWidth={contentWidth} contentHeight={contentHeight}></Plane>
        </div>
    )
}

Habitat.defaultProps = {
    containerWidth: '60',
    containerHeight: '60',
    contentWidth: '45',
    contentHeight: '45'
}
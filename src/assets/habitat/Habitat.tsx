import './Habitat.css';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { Plane } from './components/Plane';

interface HabitatProps {
    containerWidth: string;
    containerHeight: string;
    contentWidth: string;
    contentHeight: string;
}

export const Habitat = (props: HabitatProps) => {
    
    let containerWidth = props.containerWidth;
    let containerHeight = props.containerHeight;

    let contentWidth = props.contentWidth;
    let contentHeight = props.contentHeight;

    return (    
        <div className="habitat__container" style={{width: `calc(var(--plane-height, ${containerWidth}) * 1vmin)`, height: `calc(var(--plane-height, ${containerHeight}) * 1vmin)`}}>
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
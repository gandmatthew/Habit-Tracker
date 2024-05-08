import './Habitat.css';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

export const Habitat = () => {
    // const [zoom, setZoom] = useState(45);

    return (
        // <div className="habitat-box">
        //     <button onClick={() => setZoom(zoom - 3)}>
        //         Zoom -
        //     </button>
        //     <button onClick={() => setZoom(zoom + 3)}>
        //         Zoom +
        //     </button>
        //     <div className="center">
        //         <div className="habitat" style={{height: `calc(var(--plane-height, ${zoom}) * 1vmin)`, width: `calc(var(--plane-height, ${zoom}) * 1vmin)`}}>
        //         </div>
        //     </div>
        // </div>
        <div className="habitat-box">
            <TransformWrapper centerOnInit={true}>
                <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
                    <div className="habitat">
                    </div>
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}
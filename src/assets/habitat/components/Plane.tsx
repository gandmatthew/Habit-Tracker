import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch"
import "./Plane.css"

interface PlaneProps {
    contentWidth: string;
    contentHeight: string;
}

export const Plane = (props: PlaneProps) => {

    let contentWidth = props.contentWidth;
    let contentHeight = props.contentHeight;

    return (
        <TransformWrapper centerOnInit={true}>
            <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
                <div className="plane__plane" style={{width: `calc(var(--plane-height, ${contentWidth}) * 1vmin)`, height: `calc(var(--plane-height, ${contentHeight}) * 1vmin)`}}>
                </div>
            </TransformComponent>
        </TransformWrapper>
    )
}
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch"
import styles from './Plane.module.css'
import { Plant } from "./Plant";
import { useEffect, useState } from "react";
import { LocalDataItem, localData } from "../../../fakedb";

interface PlaneProps {
    contentWidth: number;
    contentHeight: number;
}

export const Plane = (props: PlaneProps) => {

    // const x = useSelector((state: RootState) => state.plane.x);
    // const y = useSelector((state: RootState) => state.plane.y);
    // const dispatch = useDispatch();

    let contentWidth = props.contentWidth;
    let contentHeight = props.contentHeight;

    return (
        <TransformWrapper centerOnInit={true}>
            <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
                <div className={styles.plane} style={{width: `calc(var(--plane-height, ${contentWidth}) * 1vmin)`, height: `calc(var(--plane-height, ${contentHeight}) * 1vmin)`}}>
                    {/* {localData.map((ld, key) => (
                        <Plant name={ld.name} key={key}></Plant>
                        ))} */}
                </div>
            </TransformComponent>
        </TransformWrapper>
    )
}
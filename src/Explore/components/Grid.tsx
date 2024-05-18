import "./Grid.css"

interface GridProps {
    habitats: Array<any>
}

export const Grid = (props : GridProps) => {

    let habitats = props.habitats;
    
    return (
        <div className="grid__container">
            {habitats.map((habitat, key) => {
                return (
                    <div className="grid__item" key={key}>
                        <p>
                            {habitat}
                        </p>
                        <p>
                            <button>Visit "name"</button>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}
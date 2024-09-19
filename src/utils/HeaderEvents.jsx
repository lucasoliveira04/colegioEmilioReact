import "../../public/css/style.css"

export function HeaderEvents({title}) {
    return(
        <header>
            <h1 className="text-6xl font-bold">{title}</h1>
        </header>
    )
}

export function DescriptionEvents({text}) {
    return(
        <div>
            <p className="text-3x1 font-semibold description-content">{text}</p>
        </div>
    )
}
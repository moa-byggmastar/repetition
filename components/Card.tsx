type CardProps = {
    title: string;
    description: string;
}

export default function Card({ title, description }: { title: string, description: string }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
type CardProps = {
    title: string;
    description: string;
}

export default function Card({ title, description }: CardProps) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', maxWidth: '300px' }}>
            <h2 style={{ margin: '0 0 0.5rem 0' }}>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
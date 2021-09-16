import Image from 'next/image'

const ServiceCard = ({data}) => {
    return (
        <div className="service-card">
            <div className="feature">
                <div className="feature-image-container">

                <Image className="feature-image" src={data.src} alt={data.title} width={100} height={100} />
                </div>
                <h5>{data.title}</h5>
                <p className="feature-description">{data.description}</p>
            </div>
        </div>
    )
}

export default ServiceCard

import { ServiceData } from "../data/serviceData"
import ServiceCard from "./ServiceCard"

const Serviece = () => {
    return (
        <div className="service">
            <div className="service-container">
                {
                    ServiceData.map((data,index) => <ServiceCard data={data} key={index} />)
                }
            </div>
        </div>
    )
}

export default Serviece

import { workingProccessData } from "../data/workingProccessData"
import WorkingProcessCard from "./WorkingProcessCard"

const WorkingProcess = () => {
    return (
        <section className="WorkingProcess">
            <div className="WorkingProcess-container">
                <h1>Three Simple Step To Started Working Process</h1>
                <div className="workingProcess-cards">
                    {
                        workingProccessData.map((data) => <WorkingProcessCard {...data} key={data.id} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default WorkingProcess

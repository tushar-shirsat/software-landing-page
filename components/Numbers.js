import Numbers_card from "./Numbers_card"

const Numbers = () => {
    return (
        <section className="numbers">
            <div className="numbers-container">
                <Numbers_card count={2304} name="Project Done"  />
                <Numbers_card count={3585} name="Success Rate"  />
                <Numbers_card count={1365} name="Awards"  />
                <Numbers_card count={4328} name="Happy Client"  />
            </div>
        </section>
    )
}

export default Numbers

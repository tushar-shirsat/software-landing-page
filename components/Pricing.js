import PricingCard from "./PricingCard"

const Pricing = () => {
    return (
        <section className="pricing">
            <div className="wave-shape">
                <img src="http://themeht.com/softino/html/ltr/images/bg/03.png" alt="wave-shape" />
            </div>
            <div className="pricing-container">
                <div className="pricing-container-right">
                    <div className="pricing-info">
                        <h1>Choose Your Best Affordable <span>Pricing Plan</span> </h1>
                        <p>Softino Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi</p>
                    </div>
                    <div className="pricing-button-container">
                        <button className="pricing-button">Monthly</button>
                        <button className="pricing-button">Yearly</button>
                    </div>
                </div>
                <div className="pricing-container-left">
                    <PricingCard type="starter" />
                    <PricingCard type="premium" />
                </div>
            </div>
        </section>
    )
}

export default Pricing

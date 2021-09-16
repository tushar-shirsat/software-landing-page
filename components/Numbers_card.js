import CountUp from 'react-countup';

const Numbers_card = ({ name, count }) => {

  return (
    <div className="number-card">
      <CountUp start={0} end={count} delay={0} duration={2.75}>
        {({ countUpRef }) => (
          <h3 ref={countUpRef} />
        )}
      </CountUp>
      <h5>{name}</h5>
    </div>
  );
};

export default Numbers_card;

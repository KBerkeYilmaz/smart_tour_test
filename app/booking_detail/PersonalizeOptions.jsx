import OptionalsList from "./OptionalsList";
import InsuranceList from "./InsuranceList";

const PersonalizeOptions = () => {
  return (
    <>
      <div>
        <h1>Personalized Options</h1>
      </div>
      {/* {tourData.tour_specials.map((item, index) => {
        return (
          <OptionalsList
            key={index}
            special={item}
            price={tourData.tour_specials_price[index]}
            currency={tourData.price_currency}
          />
        );
      })}
      <InsuranceList /> */}
    </>
  );
};

export default PersonalizeOptions;

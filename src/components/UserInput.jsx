export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      {/* FORM */}
      User Input Section
      <div className="input-group">
        <label htmlFor="initial-investment">Initial Investment</label>
        {/* handleChange needs to be passed the props for this field 
        // value will display the initial and the updated value */}
        <input
          type="number"
          id="initial-investment"
          required
          value={userInput.initialInvestment}
          onChange={(event) =>
            onChange("initialInvestment", parseFloat(event.target.value) || 0)
          }
        />
        <label htmlFor="annual-investment">Annual Investment</label>
        <input
          type="number"
          id="annual-investment"
          required
          value={userInput.annualInvestment}
          onChange={(event) =>
            onChange("annualInvestment", parseFloat(event.target.value) || 0)
          }
        />
      </div>
      <div className="input-group">
        <label htmlFor="expected-return">Expected Return</label>
        <input
          type="number"
          id="expected-return"
          required
          value={userInput.expectedReturn}
          onChange={(event) =>
            onChange("expectedReturn", parseFloat(event.target.value) || 0)
          }
        />

        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          id="duration"
          required
          value={userInput.duration}
          onChange={(event) =>
            onChange("duration", parseFloat(event.target.value) || 0)
          }
        />
      </div>
    </section>
  );
}

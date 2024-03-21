//registre page
const Register = () => {
  return (
    <>
      <section className="dark-section">
        <section className="dark-card">
          <h2>Register</h2>
          <p>Welcome to use Fata Places</p>
          <form className="dark-form" >
            <label htmlFor="username">Username :</label>
            <input
              type="text"
              id="username"
              name="username"
              className="dark-input"
              placeholder="Enter Username"
            />
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              className="dark-input"
              placeholder="Enter Email"
            />
            <label htmlFor="phone">Phone :</label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="dark-input"
              placeholder="Enter Phone"
            />
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              className="dark-input"
              placeholder="Enter Password"
            />
            <input type="submit" value="Submit" className="dark-submit" />
          </form>
          <p>
            Already have an account? <a href="/login" className="dark-link">Login</a>.
          </p>
        </section>
      </section>
    </>
  );
};

export default Register;

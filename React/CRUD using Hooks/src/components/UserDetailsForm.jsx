import React from "react";
const UserDetailsForm = () => {
  const [userDetails, setUserDetails] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Details Submitted:", userDetails);
    localStorage.setItem("user",JSON.stringify(userDetails));
    let getUsers = JSON.parse(localStorage.getItem("users"));
    console.log("All Users ",getUsers);
    getUsers = [...getUsers , userDetails];
    console.log("after add user",getUsers);
    localStorage.setItem(JSON.stringify(getUsers));
    // getUsers && Array.isArray(getUsers) && getUsers.map((user) => user.id === currentUser.id);
  };
  return (
    <section className="form__container">
      <form action="" onSubmit={handleSubmit} className="form">
        <h2 className="form__title">User Details Form</h2>
        <div className="form__group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form__input"
            id="name"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="form__input"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            className="form__input"
            name="phone"
            onChange={handleChange}
            required
          />
        </div>
        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default UserDetailsForm;

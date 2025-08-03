import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let errs = {};

    if (form.name.trim().length < 5) {
      errs.name = "Name must be at least 5 characters long.";
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      errs.email = "Email must contain '@' and '.'.";
    }

    if (form.password.length < 8) {
      errs.password = "Password must be at least 8 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Registration Successful!");
      setForm({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center", color: "green" }}>Mail Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
        </div>

        <div style={{ marginTop: "15px" }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>

        <div style={{ marginTop: "15px" }}>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        </div>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button type="submit" style={{ padding: "10px 20px" }}>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;

import { useState } from "react";
import axios from "axios";

function AddCustomer() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    company: "",
    currentMonthDate: "",
    nextMonthDate: "",
    afterTwoMonthsDate: "",
    pending: "",
    altMobile: "",
    extra1: "",
    extra2: ""
  });

  const handleChange = (e) => {
    let value = e.target.value;

    // mobile validation (10 digits only)
    if (e.target.name === "mobile" || e.target.name === "altMobile") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.mobile) {
      alert("Name and Mobile are required");
      return;
    }

    await axios.post("https://sim-data-management.onrender.com/api/customers/add", form);

    alert("Customer Added");

    setForm({
      name: "",
      mobile: "",
      address: "",
      company: "",
      currentMonthDate: "",
      nextMonthDate: "",
      afterTwoMonthsDate: "",
      pending: "",
      altMobile: "",
      extra1: "",
      extra2: ""
    });
  };

  return (
    <div style={{ padding: 15 }}>
      <h3 style={{ textAlign: "center" }}>Add Customer</h3>

      <form onSubmit={handleSubmit}>

        <input name="name" placeholder="Name *" value={form.name} onChange={handleChange} style={inputStyle} />

        <input name="mobile" placeholder="Mobile * (10 digits)" value={form.mobile} onChange={handleChange} style={inputStyle} />

        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} style={inputStyle} />

        <input name="company" placeholder="Company (Jio/Airtel)" value={form.company} onChange={handleChange} style={inputStyle} />

        <label>Current Month Expiry</label>
        <input type="date" name="currentMonthDate" value={form.currentMonthDate} onChange={handleChange} style={inputStyle} />

        <label>Next Month Expiry</label>
        <input type="date" name="nextMonthDate" value={form.nextMonthDate} onChange={handleChange} style={inputStyle} />

        <label>After 2 Months Expiry</label>
        <input type="date" name="afterTwoMonthsDate" value={form.afterTwoMonthsDate} onChange={handleChange} style={inputStyle} />

        <input name="pending" placeholder="Pending (e.g. 2 months)" value={form.pending} onChange={handleChange} style={inputStyle} />

        <input name="extra1" placeholder="Extra Field 1" value={form.extra1} onChange={handleChange} style={inputStyle} />

        <input name="extra2" placeholder="Extra Field 2" value={form.extra2} onChange={handleChange} style={inputStyle} />

        <input name="altMobile" placeholder="Alternate Mobile (optional)" value={form.altMobile} onChange={handleChange} style={inputStyle} />

        <button style={btnStyle}>Save</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: 12,
  marginBottom: 12,
  borderRadius: 8,
  border: "1px solid #ccc"
};

const btnStyle = {
  width: "100%",
  padding: 12,
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  fontSize: 16
};

export default AddCustomer;
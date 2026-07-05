
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
    ninetyDaysDate: "",
    firstRechargeDate: "",
    pending: "",
    altMobile: "",
    lastRechargePrice: "",
    planDuration: "",
    expiryTime: "",
    extra2: ""
  });

  const handleChange = (e) => {
    let value = e.target.value;

    // mobile validation
    if (e.target.name === "mobile" || e.target.name === "altMobile") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("FORM DATA BEFORE API:");
    console.log(JSON.stringify(form, null, 2));
    if (!form.name || !form.mobile) {
      alert("Name & Mobile required");
      return;
    }

    await axios.post(
      // "https://sim-data-management.onrender.com/api/customers/add",
      "http://localhost:5000/api/customers/add",
      form
    );

    alert("Saved");

    // ✅ FIXED RESET
    setForm({
      name: "",
      mobile: "",
      address: "",
      company: "",
      currentMonthDate: "",
      nextMonthDate: "",
      afterTwoMonthsDate: "",
      ninetyDaysDate: "",
      firstRechargeDate: "",
      pending: "",
      altMobile: "",
      lastRechargePrice: "",
      planDuration: "",
      expiryTime: "",
      extra2: ""
    });
  };

  return (
    <div style={{ padding: 15 }}>
      <h3>Add Customer</h3>

      <form onSubmit={handleSubmit}>
        <label>Name *</label>
        <input name="name" value={form.name} onChange={handleChange} style={input} />

        <label>Mobile *</label>
        <input name="mobile" value={form.mobile} onChange={handleChange} style={input} />

        <label>Address</label>
        <input name="address" value={form.address} onChange={handleChange} style={input} />

        {/* ✅ DROPDOWN */}
        <label>SIM Company</label>
        <select name="company" value={form.company} onChange={handleChange} style={input}>
          <option value="">Select Company</option>
          <option value="Airtel">Airtel</option>
          <option value="Jio">Jio</option>
          <option value="Vi">Vi</option>
          <option value="BSNL">BSNL</option>
        </select>

        <label>Plan Expiry Date</label>
        <input type="date" name="currentMonthDate" value={form.currentMonthDate} onChange={handleChange} style={input} />

        {/* <label>Next Month</label>
        <input type="date" name="nextMonthDate" value={form.nextMonthDate} onChange={handleChange} style={input} />

        <label>After 2 Months</label>
        <input type="date" name="afterTwoMonthsDate" value={form.afterTwoMonthsDate} onChange={handleChange} style={input} /> */}

        {/* <label>90 Days Ending</label>
        <input type="date" name="ninetyDaysDate" value={form.ninetyDaysDate} onChange={handleChange} style={input} /> */}

        {/* <label>First Recharge</label>
        <input type="date" name="firstRechargeDate" value={form.firstRechargeDate} onChange={handleChange} style={input} />

        <label>Pending</label>
        <input name="pending" value={form.pending} onChange={handleChange} style={input} /> */}

        {/* ✅ NEW FIELD */}
        <label>Last Recharge Price (₹)</label>
        <input name="lastRechargePrice" value={form.lastRechargePrice} onChange={handleChange} style={input} />

        <label>Plan Duration</label>
        <input
          name="planDuration"
          value={form.planDuration}
          onChange={handleChange}
          // placeholder=" for eg.28 / 56 / 84 / 365"
          style={input}
        />

        <label>Expiry Time (For Jio)</label>
        <input
          name="expiryTime"
          value={form.expiryTime}
          onChange={handleChange}
          // placeholder="for eg. 11:00 PM"
          style={input}
        />

        <label>Extra</label>
        <input name="extra2" value={form.extra2} onChange={handleChange} style={input} />

        <label>Alt Mobile</label>
        <input name="altMobile" value={form.altMobile} onChange={handleChange} style={input} />

        <button style={btn}>Save</button>
      </form>
    </div>
  );
}

const input = {
  width: "100%",
  padding: 10,
  marginBottom: 10,
  borderRadius: 8,
  border: "1px solid #ccc"
};

const btn = {
  width: "100%",
  padding: 12,
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: 8
};

export default AddCustomer;
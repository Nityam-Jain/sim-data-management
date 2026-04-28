// import { useState } from "react";
// import axios from "axios";

// function AddCustomer() {
//   const [form, setForm] = useState({
//     name: "",
//     mobile: "",
//     address: "",
//     company: "",
//     currentMonthDate: "",
//     nextMonthDate: "",
//     afterTwoMonthsDate: "",
//     pending: "",
//     altMobile: "",
//     extra1: "",
//     extra2: ""
//   });

//   const handleChange = (e) => {
//     let value = e.target.value;

//     // mobile validation (10 digits only)
//     if (e.target.name === "mobile" || e.target.name === "altMobile") {
//       value = value.replace(/\D/g, "").slice(0, 10);
//     }

//     setForm({ ...form, [e.target.name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.mobile) {
//       alert("Name and Mobile are required");
//       return;
//     }

//     await axios.post("https://sim-data-management.onrender.com/api/customers/add", form);

//     alert("Customer Added");

//     setForm({
//       name: "",
//       mobile: "",
//       address: "",
//       company: "",
//       currentMonthDate: "",
//       nextMonthDate: "",
//       afterTwoMonthsDate: "",
//       pending: "",
//       altMobile: "",
//       extra1: "",
//       extra2: ""
//     });
//   };

//   return (
//     <div style={{ padding: 15 }}>
//       <h3 style={{ textAlign: "center" }}>Add Customer</h3>

//       <form onSubmit={handleSubmit}>

//         <input name="name" placeholder="Name *" value={form.name} onChange={handleChange} style={inputStyle} />

//         <input name="mobile" placeholder="Mobile * (10 digits)" value={form.mobile} onChange={handleChange} style={inputStyle} />

//         <input name="address" placeholder="Address" value={form.address} onChange={handleChange} style={inputStyle} />

//         <input name="company" placeholder="Company (Jio/Airtel)" value={form.company} onChange={handleChange} style={inputStyle} />

//         <label>Current Month Expiry</label>
//         <input type="date" name="currentMonthDate" value={form.currentMonthDate} onChange={handleChange} style={inputStyle} />

//         <label>Next Month Expiry</label>
//         <input type="date" name="nextMonthDate" value={form.nextMonthDate} onChange={handleChange} style={inputStyle} />

//         <label>After 2 Months Expiry</label>
//         <input type="date" name="afterTwoMonthsDate" value={form.afterTwoMonthsDate} onChange={handleChange} style={inputStyle} />

//         <input name="pending" placeholder="Pending (e.g. 2 months)" value={form.pending} onChange={handleChange} style={inputStyle} />

//         <input name="extra1" placeholder="Extra Field 1" value={form.extra1} onChange={handleChange} style={inputStyle} />

//         <input name="extra2" placeholder="Extra Field 2" value={form.extra2} onChange={handleChange} style={inputStyle} />

//         <input name="altMobile" placeholder="Alternate Mobile (optional)" value={form.altMobile} onChange={handleChange} style={inputStyle} />

//         <button style={btnStyle}>Save</button>
//       </form>
//     </div>
//   );
// }

// const inputStyle = {
//   width: "100%",
//   padding: 12,
//   marginBottom: 12,
//   borderRadius: 8,
//   border: "1px solid #ccc"
// };

// const btnStyle = {
//   width: "100%",
//   padding: 12,
//   background: "#007bff",
//   color: "#fff",
//   border: "none",
//   borderRadius: 8,
//   fontSize: 16
// };

// export default AddCustomer;


// //add customer new changes 
// import { useState } from "react";
// import axios from "axios";

// function AddCustomer() {
//   const [form, setForm] = useState({
//     name: "",
//     mobile: "",
//     address: "",
//     company: "",
//     currentMonthDate: "",
//     nextMonthDate: "",
//     afterTwoMonthsDate: "",
//     ninetyDaysDate: "",
//     firstRechargeDate: "",
//     pending: "",
//     altMobile: "",
//     extra1: "",
//     extra2: ""
//   });

//   const handleChange = (e) => {
//     let value = e.target.value;

//     if (e.target.name === "mobile" || e.target.name === "altMobile") {
//       value = value.replace(/\D/g, "").slice(0, 10);
//     }

//     setForm({ ...form, [e.target.name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.mobile) {
//       alert("Name & Mobile required");
//       return;
//     }

//     await axios.post("https://sim-data-management.onrender.com/api/customers/add", form);

//     alert("Saved");

//     setForm({
//       name: "",
//       mobile: "",
//       address: "",
//       company: "",
//       currentMonthDate: "",
//       nextMonthDate: "",
//       afterTwoMonthsDate: "",
//       ninetyDaysDate: "",
//       firstRechargeDate: "",
//       pending: "",
//       altMobile: "",
//       extra1: "",
//       extra2: ""
//     });
//   };

//   return (
//     <div style={{ padding: 15 }}>
//       <h3>Add Customer</h3>

//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input name="name" placeholder="Name *" onChange={handleChange} style={input} />
//         <label>Mobile no.</label>
//         <input name="mobile" placeholder="Mobile *" onChange={handleChange} style={input} />
//         <label>Address</label>
//         <input name="address" placeholder="Address" onChange={handleChange} style={input} />
//         <label>SIM Company</label>
//         <input name="company" placeholder="Company" onChange={handleChange} style={input} />

//         <label>Current Month</label>
//         <input type="date" name="currentMonthDate" onChange={handleChange} style={input} />

//         <label>Next Month</label>
//         <input type="date" name="nextMonthDate" onChange={handleChange} style={input} />

//         <label>After 2 Months</label>
//         <input type="date" name="afterTwoMonthsDate" onChange={handleChange} style={input} />

//         <label>90 Days Ending</label>
//         <input type="date" name="ninetyDaysDate" onChange={handleChange} style={input} />

//         <label>First Recharge</label>
//         <input type="date" name="firstRechargeDate" onChange={handleChange} style={input} />

//         <input name="pending" placeholder="Pending" onChange={handleChange} style={input} />
//         <input name="extra1" placeholder="Extra1" onChange={handleChange} style={input} />
//         <input name="extra2" placeholder="Extra2" onChange={handleChange} style={input} />
//         <input name="altMobile" placeholder="Alt Mobile" onChange={handleChange} style={input} />

//         <button style={btn}>Save</button>
//       </form>
//     </div>
//   );
// }

// const input = { width: "100%", padding: 10, marginBottom: 10 };
// const btn = { width: "100%", padding: 10, background: "blue", color: "#fff" };

// export default AddCustomer;


//new add customer ui 

// import { useState } from "react";
// import axios from "axios";

// function AddCustomer() {
//   const [form, setForm] = useState({
//     name: "",
//     mobile: "",
//     address: "",
//     company: "",
//     currentMonthDate: "",
//     nextMonthDate: "",
//     afterTwoMonthsDate: "",
//     ninetyDaysDate: "",
//     firstRechargeDate: "",
//     pending: "",
//     altMobile: "",
//     lastRechargeDate: "",   // ✅ renamed
//     extra2: ""
//   });

//   const handleChange = (e) => {
//     let value = e.target.value;

//     if (e.target.name === "mobile" || e.target.name === "altMobile") {
//       value = value.replace(/\D/g, "").slice(0, 10);
//     }

//     setForm({ ...form, [e.target.name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.mobile) {
//       alert("Name & Mobile required");
//       return;
//     }

//     await axios.post(
//       "https://sim-data-management.onrender.com/api/customers/add",
//       form
//     );

//     alert("Saved");

//     // ✅ reset form properly
//     setForm({
//       name: "",
//       mobile: "",
//       address: "",
//       company: "",
//       currentMonthDate: "",
//       nextMonthDate: "",
//       afterTwoMonthsDate: "",
//       ninetyDaysDate: "",
//       firstRechargeDate: "",
//       pending: "",
//       altMobile: "",
//       lastRechargeDate: "",
//       extra2: ""
//     });
//   };

//   return (
//     <div style={{ padding: 15 }}>
//       <h3>Add Customer</h3>

//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input
//           name="name"
//           value={form.name}
//           placeholder="Name *"
//           onChange={handleChange}
//           style={input}
//         />

//         <label>Mobile no.</label>
//         <input
//           name="mobile"
//           value={form.mobile}
//           placeholder="Mobile *"
//           onChange={handleChange}
//           style={input}
//         />

//         <label>Address</label>
//         <input
//           name="address"
//           value={form.address}
//           placeholder="Address"
//           onChange={handleChange}
//           style={input}
//         />

//         <label>SIM Company</label>
//         <select
//           name="company"
//           value={form.company}
//           onChange={handleChange}
//           style={input}
//         >
//           <option value="">Select Company</option>
//           <option value="Airtel">Airtel</option>
//           <option value="Jio">Jio</option>
//           <option value="Vi">Vi</option>
//           <option value="BSNL">BSNL</option>
//         </select>

//         <label>Current Month</label>
//         <input
//           type="date"
//           name="currentMonthDate"
//           value={form.currentMonthDate}
//           onChange={handleChange}
//           style={input}
//         />

//         <label>Next Month</label>
//         <input
//           type="date"
//           name="nextMonthDate"
//           value={form.nextMonthDate}
//           onChange={handleChange}
//           style={input}
//         />

//         <label>After 2 Months</label>
//         <input
//           type="date"
//           name="afterTwoMonthsDate"
//           value={form.afterTwoMonthsDate}
//           onChange={handleChange}
//           style={input}
//         />

//         <label>90 Days Ending</label>
//         <input
//           type="date"
//           name="ninetyDaysDate"
//           value={form.ninetyDaysDate}
//           onChange={handleChange}
//           style={input}
//         />

//         <label>First Recharge</label>
//         <input
//           type="date"
//           name="firstRechargeDate"
//           value={form.firstRechargeDate}
//           onChange={handleChange}
//           style={input}
//         />

//         <label>Last Recharge</label>
//         <input
//           type="date"
//           name="lastRechargeDate"
//           value={form.lastRechargeDate}
//           onChange={handleChange}
//           style={input}
//         />

//         <label>Pending</label>
//         <input
//           name="pending"
//           value={form.pending}
//           placeholder="Pending"
//           onChange={handleChange}
//           style={input}
//         />

//         <label>Extra Field</label>
//         <input
//           name="extra2"
//           value={form.extra2}
//           placeholder="Extra"
//           onChange={handleChange}
//           style={input}
//         />

//         <label>Alternate Mobile</label>
//         <input
//           name="altMobile"
//           value={form.altMobile}
//           placeholder="Alt Mobile"
//           onChange={handleChange}
//           style={input}
//         />

//         <button style={btn}>Save</button>
//       </form>
//     </div>
//   );
// }

// const input = {
//   width: "100%",
//   padding: 10,
//   marginBottom: 10,
//   borderRadius: 6,
//   border: "1px solid #ccc"
// };

// const btn = {
//   width: "100%",
//   padding: 10,
//   background: "blue",
//   color: "#fff",
//   border: "none",
//   borderRadius: 6
// };

// export default AddCustomer;


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

    if (!form.name || !form.mobile) {
      alert("Name & Mobile required");
      return;
    }

    await axios.post(
      "https://sim-data-management.onrender.com/api/customers/add",
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

        <label>Current Month</label>
        <input type="date" name="currentMonthDate" value={form.currentMonthDate} onChange={handleChange} style={input} />

        <label>Next Month</label>
        <input type="date" name="nextMonthDate" value={form.nextMonthDate} onChange={handleChange} style={input} />

        <label>After 2 Months</label>
        <input type="date" name="afterTwoMonthsDate" value={form.afterTwoMonthsDate} onChange={handleChange} style={input} />

        <label>90 Days Ending</label>
        <input type="date" name="ninetyDaysDate" value={form.ninetyDaysDate} onChange={handleChange} style={input} />

        <label>First Recharge</label>
        <input type="date" name="firstRechargeDate" value={form.firstRechargeDate} onChange={handleChange} style={input} />

        <label>Pending</label>
        <input name="pending" value={form.pending} onChange={handleChange} style={input} />

        {/* ✅ NEW FIELD */}
        <label>Last Recharge Price (₹)</label>
        <input name="lastRechargePrice" value={form.lastRechargePrice} onChange={handleChange} style={input} />

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
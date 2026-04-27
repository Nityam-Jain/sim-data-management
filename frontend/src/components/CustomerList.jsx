// import { useEffect, useState } from "react";
// import axios from "axios";

// function CustomerList() {
//     const [customers, setCustomers] = useState([]);
//     const [search, setSearch] = useState("");
//     const [date, setDate] = useState("");
//     const [month, setMonth] = useState("");

//     const fetchAll = async () => {
//         const res = await axios.get("https://sim-data-management.onrender.com/api/customers");
//         setCustomers(res.data);
//     };

//     const filterByDate = async () => {
//         if (!date) return fetchAll();

//         const res = await axios.get(
//             `https://sim-data-management.onrender.com/api/customers/filter/${date}`
//         );
//         setCustomers(res.data);
//     };

//     const filterByMonth = async () => {
//         if (!month) return fetchAll();

//         const res = await axios.get(
//             `https://sim-data-management.onrender.com/api/customers/filter-month/${month}`
//         );
//         setCustomers(res.data);
//     };

//     useEffect(() => {
//         fetchAll();
//     }, []);

//     const formatDate = (d) => {
//         if (!d) return "-";
//         return new Date(d).toLocaleDateString();
//     };

//     const getExpiry = (c) => {
//         return c.currentMonthDate || c.nextMonthDate || c.afterTwoMonthsDate;
//     };

//     const filteredCustomers = customers.filter((c) =>
//         c.name?.toLowerCase().includes(search.toLowerCase()) ||
//         c.mobile?.includes(search)
//     );

//     return (
//         <div style={{ padding: 15 }}>
//             <h3 style={{ textAlign: "center" }}>Customers</h3>

//             {/* 🔍 Search */}
//             <input
//                 type="text"
//                 placeholder="Search by name or mobile"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 style={inputStyle}
//             />

//             {/* 📅 Date filter */}
//             <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 style={inputStyle}
//             />

//             <button onClick={filterByDate} style={btnStyle}>
//                 Filter by Date
//             </button>

//             {/* 📆 Month filter */}
//             <input
//                 type="month"
//                 value={month}
//                 onChange={(e) => setMonth(e.target.value)}
//                 style={inputStyle}
//             />

//             <button onClick={filterByMonth} style={btnStyleGreen}>
//                 Filter by Month
//             </button>

//             {/* 🔄 Reset */}
//             <button onClick={fetchAll} style={btnStyleGray}>
//                 Reset All
//             </button>

//             {/* 📱 FULL DETAIL CARDS */}
//             {filteredCustomers.map((c) => (
//                 <div key={c._id} style={cardStyle}>
//                     <h4>{c.name || "-"}</h4>

//                     <div>📞 <a href={`tel:${c.mobile}`}>{c.mobile || "-"}</a></div>

//                     <div>Alt Mobile: {c.altMobile || "-"}</div>

//                     <div>Address: {c.address || "-"}</div>

//                     <div>Company: {c.company || "-"}</div>

//                     <div>
//                         <b>Expiry: {formatDate(getExpiry(c))}</b>
//                     </div>

//                     <div>Current Month: {formatDate(c.currentMonthDate)}</div>

//                     <div>Next Month: {formatDate(c.nextMonthDate)}</div>

//                     <div>After 2 Months: {formatDate(c.afterTwoMonthsDate)}</div>

//                     <div>Pending: {c.pending || "-"}</div>

//                     <div>Extra1: {c.extra1 || "-"}</div>

//                     <div>Extra2: {c.extra2 || "-"}</div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// const inputStyle = {
//     width: "100%",
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 8,
//     border: "1px solid #ccc"
// };

// const btnStyle = {
//     width: "100%",
//     padding: 10,
//     background: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: 8,
//     marginBottom: 10
// };

// const btnStyleGreen = {
//     width: "100%",
//     padding: 10,
//     background: "#28a745",
//     color: "#fff",
//     border: "none",
//     borderRadius: 8,
//     marginBottom: 10
// };

// const btnStyleGray = {
//     width: "100%",
//     padding: 10,
//     background: "#6c757d",
//     color: "#fff",
//     border: "none",
//     borderRadius: 8,
//     marginBottom: 10
// };

// const cardStyle = {
//     border: "1px solid #ddd",
//     padding: 15,
//     marginBottom: 12,
//     borderRadius: 12,
//     background: "#fff",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
// };

// export default CustomerList;


//new changes
// import { useEffect, useState } from "react";
// import axios from "axios";

// function CustomerList() {
//     const [customers, setCustomers] = useState([]);
//     const [search, setSearch] = useState("");
//     const [date, setDate] = useState("");
//     const [month, setMonth] = useState("");
//     const [editData, setEditData] = useState(null);

//     const API = "https://sim-data-management.onrender.com/api/customers";

//     const fetchAll = async () => {
//         const res = await axios.get(API);
//         setCustomers(res.data);
//     };

//     const filterByDate = async () => {
//         if (!date) return fetchAll();
//         const res = await axios.get(`${API}/filter/${date}`);
//         setCustomers(res.data);
//     };

//     const filterByMonth = async () => {
//         if (!month) return fetchAll();
//         const res = await axios.get(`${API}/filter-month/${month}`);
//         setCustomers(res.data);
//     };

//     useEffect(() => {
//         fetchAll();
//     }, []);

//     const formatDate = (d) => {
//         if (!d) return "-";
//         return new Date(d).toLocaleDateString();
//     };

//     const formatInputDate = (d) => {
//         if (!d) return "";
//         return new Date(d).toISOString().split("T")[0];
//     };

//     const getExpiry = (c) => {
//         return c.currentMonthDate || c.nextMonthDate || c.afterTwoMonthsDate;
//     };

//     const filteredCustomers = customers.filter((c) =>
//         c.name?.toLowerCase().includes(search.toLowerCase()) ||
//         c.mobile?.includes(search)
//     );

//     const handleDelete = async (id) => {
//         if (!window.confirm("Delete?")) return;
//         await axios.delete(`${API}/delete/${id}`);
//         fetchAll();
//     };

//     const handleUpdate = async () => {
//         await axios.put(`${API}/update/${editData._id}`, editData);
//         setEditData(null);
//         fetchAll();
//     };

//     return (
//         <div style={{ padding: 15 }}>
//             <h3 style={{ textAlign: "center" }}>Customers</h3>

//             <input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} style={inputStyle} />

//             <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={inputStyle} />
//             <button onClick={filterByDate} style={btnStyle}>Filter Date</button>

//             <input type="month" value={month} onChange={(e) => setMonth(e.target.value)} style={inputStyle} />
//             <button onClick={filterByMonth} style={btnStyleGreen}>Filter Month</button>

//             <button onClick={fetchAll} style={btnStyleGray}>Reset</button>

//             {filteredCustomers.map((c) => (
//                 <div key={c._id} style={cardStyle}>

//                     {/* 🔥 ICON BUTTONS */}
//                     <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
//                         <span style={iconBtn} onClick={() => setEditData(c)}>✏️</span>
//                         <span style={iconBtn} onClick={() => handleDelete(c._id)}>🗑️</span>
//                     </div>

//                     <h4>{c.name}</h4>
//                     <div>📞 {c.mobile}</div>
//                     <div>Alt: {c.altMobile || "-"}</div>
//                     <div>{c.address}</div>
//                     <div>{c.company}</div>

//                     <div><b>Expiry: {formatDate(getExpiry(c))}</b></div>

//                     <div>Current: {formatDate(c.currentMonthDate)}</div>
//                     <div>Next: {formatDate(c.nextMonthDate)}</div>
//                     <div>After 2: {formatDate(c.afterTwoMonthsDate)}</div>

//                     <div>90 Days: {formatDate(c.ninetyDaysDate)}</div>
//                     <div>Recharge: {formatDate(c.firstRechargeDate)}</div>

//                     <div>Pending: {c.pending || "-"}</div>
//                     <div>Extra1: {c.extra1}</div>
//                     <div>Extra2: {c.extra2}</div>
//                 </div>
//             ))}

//             {/* 🔥 FULL EDIT FORM POPUP */}
//             {editData && (
//                 <div style={popup}>
//                     <div style={popupBox}>
//                         <h3>Edit Customer</h3>

//                         <input value={editData.name || ""} onChange={(e) => setEditData({ ...editData, name: e.target.value })} style={inputStyle} />
//                         <input value={editData.mobile || ""} onChange={(e) => setEditData({ ...editData, mobile: e.target.value })} style={inputStyle} />
//                         <input value={editData.altMobile || ""} onChange={(e) => setEditData({ ...editData, altMobile: e.target.value })} style={inputStyle} />
//                         <input value={editData.address || ""} onChange={(e) => setEditData({ ...editData, address: e.target.value })} style={inputStyle} />
//                         <input value={editData.company || ""} onChange={(e) => setEditData({ ...editData, company: e.target.value })} style={inputStyle} />

//                         <label>Current</label>
//                         <input type="date" value={formatInputDate(editData.currentMonthDate)} onChange={(e) => setEditData({ ...editData, currentMonthDate: e.target.value })} style={inputStyle} />

//                         <label>Next</label>
//                         <input type="date" value={formatInputDate(editData.nextMonthDate)} onChange={(e) => setEditData({ ...editData, nextMonthDate: e.target.value })} style={inputStyle} />

//                         <label>After 2</label>
//                         <input type="date" value={formatInputDate(editData.afterTwoMonthsDate)} onChange={(e) => setEditData({ ...editData, afterTwoMonthsDate: e.target.value })} style={inputStyle} />

//                         <label>90 Days</label>
//                         <input type="date" value={formatInputDate(editData.ninetyDaysDate)} onChange={(e) => setEditData({ ...editData, ninetyDaysDate: e.target.value })} style={inputStyle} />

//                         <label>Recharge</label>
//                         <input type="date" value={formatInputDate(editData.firstRechargeDate)} onChange={(e) => setEditData({ ...editData, firstRechargeDate: e.target.value })} style={inputStyle} />

//                         <input value={editData.pending || ""} onChange={(e) => setEditData({ ...editData, pending: e.target.value })} style={inputStyle} />
//                         <input value={editData.extra1 || ""} onChange={(e) => setEditData({ ...editData, extra1: e.target.value })} style={inputStyle} />
//                         <input value={editData.extra2 || ""} onChange={(e) => setEditData({ ...editData, extra2: e.target.value })} style={inputStyle} />

//                         <button onClick={handleUpdate} style={btnStyleGreen}>Update</button>
//                         <button onClick={() => setEditData(null)} style={btnStyleGray}>Close</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// const inputStyle = {
//     width: "100%",
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 8,
//     border: "1px solid #ccc"
// };

// const btnStyle = { width: "100%", padding: 10, background: "#007bff", color: "#fff", border: "none", borderRadius: 8, marginBottom: 10 };
// const btnStyleGreen = { ...btnStyle, background: "#28a745" };
// const btnStyleGray = { ...btnStyle, background: "#6c757d" };

// const iconBtn = {
//     cursor: "pointer",
//     fontSize: 18
// };

// const cardStyle = {
//     border: "1px solid #ddd",
//     padding: 15,
//     marginBottom: 12,
//     borderRadius: 12,
//     background: "#fff"
// };

// const popup = {
//     position: "fixed",
//     top: 0, left: 0, right: 0, bottom: 0,
//     background: "rgba(0,0,0,0.5)",
//     overflow: "auto"
// };

// const popupBox = {
//     background: "#fff",
//     padding: 20,
//     width: "95%",
//     margin: "20px auto",
//     borderRadius: 10
// };

// export default CustomerList;


import { useEffect, useState } from "react";
import axios from "axios";

function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [search, setSearch] = useState("");
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [editData, setEditData] = useState(null);

    const API = "https://sim-data-management.onrender.com/api/customers";

    const fetchAll = async () => {
        const res = await axios.get(API);
        setCustomers(res.data);
    };

    const filterByDate = async () => {
        if (!date) return fetchAll();
        const res = await axios.get(`${API}/filter/${date}`);
        setCustomers(res.data);
    };

    const filterByMonth = async () => {
        if (!month) return fetchAll();
        const res = await axios.get(`${API}/filter-month/${month}`);
        setCustomers(res.data);
    };

    useEffect(() => {
        fetchAll();
    }, []);

    const formatDate = (d) => {
        if (!d) return "-";
        return new Date(d).toLocaleDateString();
    };

    const formatInputDate = (d) => {
        if (!d) return "";
        return new Date(d).toISOString().split("T")[0];
    };

    const getExpiry = (c) => {
        return c.currentMonthDate || c.nextMonthDate || c.afterTwoMonthsDate;
    };

    // 🔥 UPDATED SEARCH (name + mobile + 90 days date)
    const filteredCustomers = customers.filter((c) => {
        const searchText = search.toLowerCase();

        return (
            c.name?.toLowerCase().includes(searchText) ||
            c.mobile?.includes(search) ||
            formatDate(c.ninetyDaysDate).includes(search)
        );
    });

    const handleDelete = async (id) => {
        if (!window.confirm("Delete?")) return;
        await axios.delete(`${API}/delete/${id}`);
        fetchAll();
    };

    const handleUpdate = async () => {
        await axios.put(`${API}/update/${editData._id}`, editData);
        setEditData(null);
        fetchAll();
    };

    return (
        <div style={{ padding: 15 }}>
            <h3 style={{ textAlign: "center", marginBottom: 10 }}>
                Customers
            </h3>

            {/* 🔍 SEARCH */}
            <input
                placeholder="🔍 Search (name / mobile / 90 days date)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={inputStyle}
            />

            {/* 📅 DATE FILTER */}
            <div style={filterBox}>
                <label style={labelStyle}>Filter by Exact Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={inputStyle}
                />
                <button onClick={filterByDate} style={btnStyle}>
                    Apply Date Filter
                </button>
            </div>

            {/* 📆 MONTH FILTER */}
            <div style={filterBox}>
                <label style={labelStyle}>Filter by Month</label>
                <input
                    type="month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    style={inputStyle}
                />
                <button onClick={filterByMonth} style={btnStyleGreen}>
                    Apply Month Filter
                </button>
            </div>

            <button onClick={fetchAll} style={btnStyleGray}>
                Reset All
            </button>

            {/* 📱 CARDS */}
            {filteredCustomers.map((c) => (
                <div key={c._id} style={cardStyle}>

                    {/* ICON BUTTONS */}
                    <div style={iconRow}>
                        <span style={iconBtn} onClick={() => setEditData(c)}>✏️</span>
                        <span style={iconBtn} onClick={() => handleDelete(c._id)}>🗑️</span>
                    </div>

                    <h4>{c.name}</h4>
                    <div>📞 {c.mobile}</div>
                    <div>Alt: {c.altMobile || "-"}</div>
                    <div>{c.address}</div>
                    <div>{c.company}</div>

                    <div style={{ marginTop: 5 }}>
                        <b>Expiry: {formatDate(getExpiry(c))}</b>
                    </div>

                    <div>Current: {formatDate(c.currentMonthDate)}</div>
                    <div>Next: {formatDate(c.nextMonthDate)}</div>
                    <div>After 2: {formatDate(c.afterTwoMonthsDate)}</div>

                    <div>90 Days: {formatDate(c.ninetyDaysDate)}</div>
                    <div>Recharge: {formatDate(c.firstRechargeDate)}</div>

                    <div>Pending: {c.pending || "-"}</div>
                    <div>Extra1: {c.extra1}</div>
                    <div>Extra2: {c.extra2}</div>
                </div>
            ))}

            {/* EDIT POPUP */}
            {editData && (
                <div style={popup}>
                    <div style={popupBox}>
                        <h3>Edit Customer</h3>

                        <input value={editData.name || ""} onChange={(e) => setEditData({ ...editData, name: e.target.value })} style={inputStyle} />
                        <input value={editData.mobile || ""} onChange={(e) => setEditData({ ...editData, mobile: e.target.value })} style={inputStyle} />
                        <input value={editData.altMobile || ""} onChange={(e) => setEditData({ ...editData, altMobile: e.target.value })} style={inputStyle} />
                        <input value={editData.address || ""} onChange={(e) => setEditData({ ...editData, address: e.target.value })} style={inputStyle} />
                        <input value={editData.company || ""} onChange={(e) => setEditData({ ...editData, company: e.target.value })} style={inputStyle} />

                        <label>Current</label>
                        <input type="date" value={formatInputDate(editData.currentMonthDate)} onChange={(e) => setEditData({ ...editData, currentMonthDate: e.target.value })} style={inputStyle} />

                        <label>Next</label>
                        <input type="date" value={formatInputDate(editData.nextMonthDate)} onChange={(e) => setEditData({ ...editData, nextMonthDate: e.target.value })} style={inputStyle} />

                        <label>After 2</label>
                        <input type="date" value={formatInputDate(editData.afterTwoMonthsDate)} onChange={(e) => setEditData({ ...editData, afterTwoMonthsDate: e.target.value })} style={inputStyle} />

                        <label>90 Days</label>
                        <input type="date" value={formatInputDate(editData.ninetyDaysDate)} onChange={(e) => setEditData({ ...editData, ninetyDaysDate: e.target.value })} style={inputStyle} />

                        <label>Recharge</label>
                        <input type="date" value={formatInputDate(editData.firstRechargeDate)} onChange={(e) => setEditData({ ...editData, firstRechargeDate: e.target.value })} style={inputStyle} />

                        <input value={editData.pending || ""} onChange={(e) => setEditData({ ...editData, pending: e.target.value })} style={inputStyle} />
                        <input value={editData.extra1 || ""} onChange={(e) => setEditData({ ...editData, extra1: e.target.value })} style={inputStyle} />
                        <input value={editData.extra2 || ""} onChange={(e) => setEditData({ ...editData, extra2: e.target.value })} style={inputStyle} />

                        <button onClick={handleUpdate} style={btnStyleGreen}>Update</button>
                        <button onClick={() => setEditData(null)} style={btnStyleGray}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

/* 🎨 STYLES */

const inputStyle = {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    border: "1px solid #ccc"
};

const filterBox = {
    background: "#f1f5ff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
};

const labelStyle = {
    fontWeight: "bold",
    fontSize: 13,
    color: "#333",
    display: "block",
    marginBottom: 5
};

const btnStyle = {
    width: "100%",
    padding: 10,
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    marginBottom: 10
};

const btnStyleGreen = { ...btnStyle, background: "#28a745" };
const btnStyleGray = { ...btnStyle, background: "#6c757d" };

const iconRow = {
    display: "flex",
    justifyContent: "flex-end",
    gap: 10
};

const iconBtn = {
    cursor: "pointer",
    fontSize: 18
};

const cardStyle = {
    border: "1px solid #ddd",
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    background: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
};

const popup = {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.5)",
    overflow: "auto"
};

const popupBox = {
    background: "#fff",
    padding: 20,
    width: "95%",
    margin: "20px auto",
    borderRadius: 10
};

export default CustomerList;
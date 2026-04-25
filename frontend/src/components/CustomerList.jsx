import { useEffect, useState } from "react";
import axios from "axios";

function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [search, setSearch] = useState("");
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");

    const fetchAll = async () => {
        const res = await axios.get("https://sim-data-management.onrender.com/api/customers");
        setCustomers(res.data);
    };

    const filterByDate = async () => {
        if (!date) return fetchAll();

        const res = await axios.get(
            `https://sim-data-management.onrender.com/api/customers/filter/${date}`
        );
        setCustomers(res.data);
    };

    const filterByMonth = async () => {
        if (!month) return fetchAll();

        const res = await axios.get(
            `https://sim-data-management.onrender.com/api/customers/filter-month/${month}`
        );
        setCustomers(res.data);
    };

    useEffect(() => {
        fetchAll();
    }, []);

    const formatDate = (d) => {
        if (!d) return "-";
        return new Date(d).toLocaleDateString();
    };

    const getExpiry = (c) => {
        return c.currentMonthDate || c.nextMonthDate || c.afterTwoMonthsDate;
    };

    const filteredCustomers = customers.filter((c) =>
        c.name?.toLowerCase().includes(search.toLowerCase()) ||
        c.mobile?.includes(search)
    );

    return (
        <div style={{ padding: 15 }}>
            <h3 style={{ textAlign: "center" }}>Customers</h3>

            {/* 🔍 Search */}
            <input
                type="text"
                placeholder="Search by name or mobile"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={inputStyle}
            />

            {/* 📅 Date filter */}
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={inputStyle}
            />

            <button onClick={filterByDate} style={btnStyle}>
                Filter by Date
            </button>

            {/* 📆 Month filter */}
            <input
                type="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                style={inputStyle}
            />

            <button onClick={filterByMonth} style={btnStyleGreen}>
                Filter by Month
            </button>

            {/* 🔄 Reset */}
            <button onClick={fetchAll} style={btnStyleGray}>
                Reset All
            </button>

            {/* 📱 FULL DETAIL CARDS */}
            {filteredCustomers.map((c) => (
                <div key={c._id} style={cardStyle}>
                    <h4>{c.name || "-"}</h4>

                    <div>📞 <a href={`tel:${c.mobile}`}>{c.mobile || "-"}</a></div>

                    <div>Alt Mobile: {c.altMobile || "-"}</div>

                    <div>Address: {c.address || "-"}</div>

                    <div>Company: {c.company || "-"}</div>

                    <div>
                        <b>Expiry: {formatDate(getExpiry(c))}</b>
                    </div>

                    <div>Current Month: {formatDate(c.currentMonthDate)}</div>

                    <div>Next Month: {formatDate(c.nextMonthDate)}</div>

                    <div>After 2 Months: {formatDate(c.afterTwoMonthsDate)}</div>

                    <div>Pending: {c.pending || "-"}</div>

                    <div>Extra1: {c.extra1 || "-"}</div>

                    <div>Extra2: {c.extra2 || "-"}</div>
                </div>
            ))}
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    border: "1px solid #ccc"
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

const btnStyleGreen = {
    width: "100%",
    padding: 10,
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    marginBottom: 10
};

const btnStyleGray = {
    width: "100%",
    padding: 10,
    background: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    marginBottom: 10
};

const cardStyle = {
    border: "1px solid #ddd",
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    background: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
};

export default CustomerList;
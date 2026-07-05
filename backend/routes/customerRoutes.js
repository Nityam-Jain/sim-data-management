const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

console.log(Customer.schema.obj);
// ================= ADD =================
router.post("/add", async (req, res) => {
    try {
        // console.log(req.body);

        const data = req.body;

        // const customer = new Customer({
        //     ...data,

        //     currentMonthDate: data.currentMonthDate ? new Date(data.currentMonthDate) : null,
        //     nextMonthDate: data.nextMonthDate ? new Date(data.nextMonthDate) : null,
        //     afterTwoMonthsDate: data.afterTwoMonthsDate ? new Date(data.afterTwoMonthsDate) : null,

        //     ninetyDaysDate: data.ninetyDaysDate ? new Date(data.ninetyDaysDate) : null,
        //     firstRechargeDate: data.firstRechargeDate ? new Date(data.firstRechargeDate) : null,

        //     // ✅ FIXED (price, not date)
        //     lastRechargePrice: data.lastRechargePrice || "",

        //     // planDuration: data.planDuration || "",
        //     // expiryTime: data.expiryTime || "",

        //     planDuration: "TEST123",
        //     expiryTime: "HELLO",

        // });
        const customer = new Customer(data);

        customer.currentMonthDate = data.currentMonthDate
            ? new Date(data.currentMonthDate)
            : null;

        customer.nextMonthDate = data.nextMonthDate
            ? new Date(data.nextMonthDate)
            : null;

        customer.afterTwoMonthsDate = data.afterTwoMonthsDate
            ? new Date(data.afterTwoMonthsDate)
            : null;

        customer.ninetyDaysDate = data.ninetyDaysDate
            ? new Date(data.ninetyDaysDate)
            : null;

        customer.firstRechargeDate = data.firstRechargeDate
            ? new Date(data.firstRechargeDate)
            : null;
        // console.log(customer);
        // console.log("Customer before save:");
        // console.log(customer.toObject());
        await customer.save();
        // console.log("Saved customer:");
        // console.log(customer.toObject());
        res.json(customer);

    } catch (err) {
        console.error("ADD ERROR:", err);
        res.status(500).json({ error: err.message });
    }
});


// ================= UPDATE =================
router.put("/update/:id", async (req, res) => {
    try {
        console.log("UPDATE BODY:", req.body);

        const data = req.body;

        const updatedData = {
            name: data.name || "",
            address: data.address || "",
            mobile: data.mobile || "",
            altMobile: data.altMobile || "",
            company: data.company || "",

            currentMonthDate: data.currentMonthDate ? new Date(data.currentMonthDate) : null,
            nextMonthDate: data.nextMonthDate ? new Date(data.nextMonthDate) : null,
            afterTwoMonthsDate: data.afterTwoMonthsDate ? new Date(data.afterTwoMonthsDate) : null,

            ninetyDaysDate: data.ninetyDaysDate ? new Date(data.ninetyDaysDate) : null,
            firstRechargeDate: data.firstRechargeDate ? new Date(data.firstRechargeDate) : null,

            pending: data.pending || "",
            lastRechargePrice: data.lastRechargePrice || "",

            planDuration: data.planDuration || "",
            expiryTime: data.expiryTime || "",
            extra2: data.extra2 || ""
        };

        const updated = await Customer.findByIdAndUpdate(
            req.params.id,
            updatedData,
            { new: true }
        );

        res.json(updated);

    } catch (err) {
        console.error("UPDATE ERROR:", err);
        res.status(500).json({ error: err.message });
    }
});

// DELETE
router.delete("/delete/:id", async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET ALL
router.get("/", async (req, res) => {
    const data = await Customer.find().sort({ createdAt: -1 });
    res.json(data);
});




// ================= FILTER BY DATE =================
router.get("/filter/:date", async (req, res) => {
    try {
        const selectedDate = new Date(req.params.date);

        const start = new Date(selectedDate);
        start.setHours(0, 0, 0, 0);

        const end = new Date(selectedDate);
        end.setHours(23, 59, 59, 999);

        const customers = await Customer.find({
            $or: [
                { currentMonthDate: { $gte: start, $lte: end } },
                { nextMonthDate: { $gte: start, $lte: end } },
                { afterTwoMonthsDate: { $gte: start, $lte: end } }
            ]
        });

        res.json(customers);

    } catch (err) {
        console.error("FILTER ERROR:", err);
        res.status(500).json({ error: err.message });
    }
});

// ================= FILTER BY MONTH =================
router.get("/filter-month/:month", async (req, res) => {
    try {
        const [year, month] = req.params.month.split("-");

        const start = new Date(year, month - 1, 1); // first day
        const end = new Date(year, month, 0, 23, 59, 59, 999); // last day

        const customers = await Customer.find({
            $or: [
                { currentMonthDate: { $gte: start, $lte: end } },
                { nextMonthDate: { $gte: start, $lte: end } },
                { afterTwoMonthsDate: { $gte: start, $lte: end } }
            ]
        });

        res.json(customers);

    } catch (err) {
        console.error("MONTH FILTER ERROR:", err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
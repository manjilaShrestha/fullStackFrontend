import { useEffect, useState } from "react";
import privateAPI from "../../api";

const AttendanceManager = () => {
  const [records, setRecords] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employee: "",
    date: "",
    status: "present",
  });

  const fetchRecords = async () => {
    try {
      const res = await privateAPI.get("/attendance");
      setRecords(res.data.data || []);
    } catch (error) {
      console.error("Error fetching attendance records:", error);
    }
  };

  const fetchEmployees = async () => {
    try {
      const res = await privateAPI.get("/employees");
      setEmployees(res.data.data || []);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const addRecord = async () => {
    if (!form.employee || !form.date) return;
    try {
      await privateAPI.post("/attendance", form);
      setForm({ employee: "", date: "", status: "present" });
      fetchRecords();
    } catch (error) {
      console.error("Error adding attendance record:", error);
    }
  };

  const deleteRecord = async (id) => {
    try {
      await privateAPI.delete(`/attendance/${id}`);
      fetchRecords();
    } catch (error) {
      console.error("Error deleting attendance record:", error);
    }
  };

  useEffect(() => {
    fetchRecords();
    fetchEmployees();
  }, []);

  return (
    <div>
      {/* UI same as before — table, form etc. */}
    </div>
  );
};

export default AttendanceManager;

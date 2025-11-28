import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ViewSellers() {
  const [sellers, setSellers] = useState([]);
  const [error, setError] = useState("");

  const displaySellers = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewallsellers`);
      setSellers(response.data);
    } catch (err) {
      setError("Failed to fetch seller data: " + err.message);
    }
  };

  const deleteSeller = async (sid) => {
    try {
      const response = await axios.delete(`${config.url}/admin/deleteseller?sid=${sid}`);
      alert(response.data);
      displaySellers(); // Refresh the list
    } catch (err) {
      setError("Error deleting seller: " + err.message);
    }
  };

  useEffect(() => {
    displaySellers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ textAlign: "center", color: "black", fontWeight: "bolder" }}>
        <u>View All Item Sellers</u>
      </h3>

      {error ? (
        <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
          {error}
        </p>
      ) : sellers.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
          No Seller Data Found
        </p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Email</th>
              <th>Username</th>
              <th>Mobile No</th>
              <th>Company Name</th>
              <th>Company Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller) => (
              <tr key={seller.id}>
                <td>{seller.id}</td>
                <td>{seller.name}</td>
                <td>{seller.gender}</td>
                <td>{seller.dob}</td>
                <td>{seller.email}</td>
                <td>{seller.username}</td>
                <td>{seller.mobileno}</td>
                <td>{seller.company_name}</td>
                <td>{seller.company_location}</td>
                <td>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteSeller(seller.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

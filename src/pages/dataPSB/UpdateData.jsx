import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateData = () => {
  const [formData, setFormData] = useState({
    Nm_pendaftar: "",
    Alamat: "",
    Jenis_kelamin: "",
    No_hp: "",
    Asal_Sekolah: "",
    Jurusan: "",
    Tgl_lahir: "",
    NISN: ""
  });

  const { id } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://mughni.rikpetik.site/api/v1/pendaftaran/${id}`);
        setFormData(response.data.data); 
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://mughni.rikpetik.site/api/v1/pendaftaran/${id}`, formData);
      if (res.status === 200) {
        alert("Data berhasil diperbarui!");
        navigate("/");
      }
    } catch (error) {
      console.error("Gagal update data:", error);
      alert("Update gagal!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mt-3 d-flex justify-content-center">
      <div className="card shadow-lg p-4 rounded" style={{ maxWidth: "600px", width: "100%" }}>
        <h3 className="text-center mb-4">Edit Data Pendaftar</h3>
        <form onSubmit={handleSubmit}>
          {/* Semua field sama seperti form register */}
          <div className="mb-3">
            <label className="fw-bold">Nama</label>
            <input type="text" className="form-control" name="Nm_pendaftar" value={formData.Nm_pendaftar} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="fw-bold">Alamat</label>
            <textarea className="form-control" name="Alamat" value={formData.Alamat} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="fw-bold">Jenis Kelamin</label><br />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Jenis_kelamin" value="Laki-laki" checked={formData.Jenis_kelamin === "Laki-laki"} onChange={handleChange} />
              <label className="form-check-label">Laki-laki</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Jenis_kelamin" value="Perempuan" checked={formData.Jenis_kelamin === "Perempuan"} onChange={handleChange} />
              <label className="form-check-label">Perempuan</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="fw-bold">No. HP</label>
            <input type="tel" className="form-control" name="No_hp" value={formData.No_hp} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="fw-bold">Asal Sekolah</label>
            <input type="text" className="form-control" name="Asal_Sekolah" value={formData.Asal_Sekolah} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="fw-bold">Jurusan</label>
            <select className="form-select" name="Jurusan" value={formData.Jurusan} onChange={handleChange} required>
              <option value="">-- Pilih Jurusan --</option>
              <option value="PPW">PPW</option>
              <option value="PPM">PPM</option>
              <option value="PSJ">PSJ</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="fw-bold">Tanggal Lahir</label>
            <input type="date" className="form-control" name="Tgl_lahir" value={formData.Tgl_lahir} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="fw-bold">NISN</label>
            <input type="text" className="form-control" name="NISN" value={formData.NISN} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-warning w-100">Edit Data</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateData;

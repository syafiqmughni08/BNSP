import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormulirRegistrasi = () => {
    const navigate = useNavigate();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const [errors, setErrors] = useState({
    No_hp: "",
    NISN: "",
    Tgl_lahir: "",
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = { 
        No_hp: "", 
        NISN: "", 
        Tgl_lahir: "", 
        Nm_pendaftar: "", 
        Asal_Sekolah: ""
    };
    const asalSekolahRegex = /^[A-Za-z\s]+$/;
    const namaRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^[0-9]{10,12}$/; 
    const nisnRegex = /^[0-9]{10}$/;
    const today = new Date();
    const birthDate = new Date(formData.Tgl_lahir);

    // Validasi No_hp
    if (!phoneRegex.test(formData.No_hp)) {
        newErrors.No_hp = "Nomor HP tidak valid!";
        alert("Nomor HP tidak valid!");
    }

    // Validasi NISN
    if (!nisnRegex.test(formData.NISN)) {
        newErrors.NISN = "NISN harus 10 digit angka!";
        alert("NISN harus 10 digit angka!");
    }

    // Validasi Tanggal Lahir
    if (birthDate > today) {
        newErrors.Tgl_lahir = "Tanggal lahir tidak boleh lebih dari hari ini!";
        alert("Tanggal lahir tidak boleh lebih dari hari ini!");
    }

    // Validasi Nama (tidak boleh mengandung angka)
    if (!namaRegex.test(formData.Nm_pendaftar)) {
        newErrors.Nm_pendaftar = "Nama tidak boleh mengandung angka!";
        alert("Nama tidak boleh mengandung angka!");
    }

    // Cek jika ada error
    if (Object.values(newErrors).some((err) => err)) {
        setErrors(newErrors);
        return;
    }
  
    // Jika tidak ada error, kirim form
    try {
      const res = await axios.post("https://mughni.rikpetik.site/api/v1/pendaftaran/create", formData);
      if (res) {
        alert("Pendaftaran berhasil!");
        navigate("/");
      }
    } catch (error) {
      console.error("Pendaftaran gagal:", error);
      alert("Pendaftaran gagal!");
    }
  };
  

  return (
    <div className="container mt-3 d-flex justify-content-center">
        <div className="card shadow-lg p-4 rounded" style={{ maxWidth: "600px", width: "100%" }}>
            <h3 className="text-center mb-4">Formulir Registrasi Siswa</h3>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="fw-bold" htmlFor="Nm_pendaftar">Nama</label>
                <input type="text" className="form-control" name="Nm_pendaftar" value={formData.Nm_pendaftar} onChange={handleChange} required />
            </div>

            <div className="mb-3">
                <label className="fw-bold" htmlFor="Alamat">Alamat</label>
                <textarea className="form-control" name="Alamat" value={formData.Alamat} onChange={handleChange} required />
            </div>

            <div className="mb-3">
                <label className="fw-bold" htmlFor="Jenis_kelamin">Jenis Kelamin</label><br />
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Jenis_kelamin" value="Laki-laki" onChange={handleChange} required />
                <label className="form-check-label">Laki-laki</label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Jenis_kelamin" value="Perempuan" onChange={handleChange} required/>
                <label className="form-check-label">Perempuan</label>
                </div>
            </div>

            <div className="mb-3">
                <label className="fw-bold" htmlFor="No_hp">No. HP</label>
                <input type="tel" className="form-control" name="No_hp" value={formData.No_hp} onChange={handleChange} required />
            </div>

            <div className="mb-3">
                <label className="fw-bold" htmlFor="Asal_Sekolah">Asal Sekolah</label>
                <input type="text" className="form-control" name="Asal_Sekolah" value={formData.Asal_Sekolah} onChange={handleChange} required />
            </div>

            <div className="mb-3">
                <label className="fw-bold" htmlFor="Jurusan">Jurusan</label>
                <select className="form-select" name="Jurusan" value={formData.Jurusan} onChange={handleChange} required>
                <option value="">-- Pilih Jurusan --</option>
                <option value="PPW">PPW</option>
                <option value="PPM">PPM</option>
                <option value="PSJ">PSJ</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="fw-bold" htmlFor="Tgl_lahir">Tanggal Lahir</label>
                <input type="date" className="form-control" name="Tgl_lahir" value={formData.Tgl_lahir} onChange={handleChange} required />
            </div>

            <div className="mb-3">
                <label className="fw-bold" htmlFor="NISN">NISN</label>
                <input type="text" className="form-control" name="NISN" value={formData.NISN} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-primary w-100">Daftar</button>
            </form>
        </div>
    </div>
  );
};

export default FormulirRegistrasi;

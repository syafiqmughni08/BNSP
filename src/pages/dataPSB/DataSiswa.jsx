import Layout from "../../layout/LayoutDashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const DataSiswa = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const postsResponse = await axios.get("https://mughni.rikpetik.site/api/v1/pendaftaran")
            setPosts(postsResponse.data.data);
        } catch (error) {
            console.log(error)
        }
    }
    fetchData();
  }, []);



  const handleDelete = async (id) => {
    if(!window.confirm("Apakah Anda yakin ingin menghapus Trainer ini?")) {
      return;
    }

    try {
      await axios.delete(`https://mughni.rikpetik.site/api/v1/pendaftaran/${id}`);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.log('Gagal menghapus data:', error);
    }
  };

  return (
    <Layout>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="fw-bold">Data Siswa</h3>
        <NavLink to="/registrasi" className="btn btn-primary text-white">Registrasi</NavLink>
      </div>
      <hr />
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Jenis_kelamin</th>
            <th>No.hp</th>
            <th>Asal_Sekolah</th>
            <th>Jurusan</th>
            <th>Tgl_lahir</th>
            <th>NISN</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map((post, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{post.Nm_pendaftar}</td>
                <td>{post.Alamat}</td>
                <td>{post.Jenis_kelamin}</td>
                <td>{post.No_hp}</td>
                <td>{post.Asal_Sekolah}</td>
                <td>{post.Jurusan}</td>
                <td>{post.Tgl_lahir}</td>
                <td>{post.NISN}</td>
                <td>
                  <button onClick={() => navigate(`/updatedata/${post.id}`)} className="btn btn-sm btn-warning m-2">Edit</button>
                  <button onClick={() => handleDelete(post.id)} className="btn btn-sm btn-danger">Hapus</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center">Data belum tersedia atau kosong.</td>
            </tr>
          )}
        </tbody>
      </table>
    </Layout>
  );
};

export default DataSiswa;

import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center"
        }}>
            <h3>404 Halaman Tidak Ditemukan</h3>
            <p>Opps... Halaman yang kamu cari tidak ditemukan</p>
            <button onClick={() => navigate(-1)} style={{ margin: "10px 0" }}>Kembali</button>
            <NavLink to={"/"}>Kembali ke Home</NavLink>
        </div>
    );
};

export default ErrorPage;

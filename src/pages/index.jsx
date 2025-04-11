import React from 'react'
import Navbar from '../components/Navbar'
import { Container, NavLink } from "react-bootstrap"
import sekolah from "../assets/sekolah.jpeg"
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom"

const index = () => {
    const navigate = useNavigate()

    const handleOnclick = () => {
        navigate("/registrasi")
    }

    return (
        <div>
            <Navbar/>
            
            {/* Header Section */}
            <div
                style={{
                    position: "relative",
                    backgroundImage: `url(${sekolah})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    
                    minHeight: "80vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "50px 10%",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        backdropFilter: "blur(3px)",
                    }}
                ></div>

                <div style={{ position: "relative", zIndex: 2 }}>
                    <h1
                        style={{
                            fontSize: "3rem",
                            letterSpacing: "2px",
                            color: "white",
                            textShadow: "0 0 10px rgba(0, 0, 0, 0.9)",
                            fontWeight: "extra-bold",
                        }}
                    >
                        PPDB Sekolah
                    </h1>
                    <p
                        style={{
                            fontSize: "1.2rem",
                            maxWidth: "700px",
                            opacity: 0.9,
                            color: "#f8f9fa",
                            fontStyle: "italic",
                        }}
                    >
                        Selamat Datang di Website Resmi Sekolah kami!
                        Kami membuka penerimaan peserta didik baru PPDB untuk Tahun Ajaran 2025/2026.
                        Bergabunglah bersama kami di lingkungan pendidikan yang unggul, berkarakter, dan berprestasi.
                        Dapatkan informasi lengkap seputar pendaftaran, jadwal, syarat, serta proses seleksi melalui website ini.
                    </p>
                    <button onClick={handleOnclick} className='btn btn-primary text-white'>Formulir</button>
                </div>
            </div>

            {/* Content Section */}
            <div style={{ width: "100%", minHeight: "100vh", paddingBottom: "50px" }}>
                <Container 
                    style={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "center", 
                        paddingTop: "40px" 
                    }}
                >
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow-sm p-5">
                                <h4 className="mb-4">Informasi Pendaftaran</h4>
                                <p>Berikut ini adalah informasi mengenai penerimaan siswa baru:</p>
                                <ul>
                                    <li>Tanggal Pendaftaran: 1 Juni – 30 Juli 2025</li>
                                    <li>Syarat: Fotokopi KK, Akta Lahir, Ijazah</li>
                                    <li>Proses Seleksi: Seleksi Berkas & Wawancara</li>
                                    <li>Hasil Pengumuman: 5 Agustus 2025</li>
                                    <p>Untuk info lebih lanjut, silakan hubungi panitia melalui kontak resmi sekolah.</p>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm p-5">
                            <h4>Sejarah Sekolah</h4>
                                <p>
                                    Sekolah Kami didirikan pada tahun 1985 sebagai bentuk komitmen masyarakat dalam menyediakan pendidikan berkualitas di wilayah Kota Kami. Bermula dari bangunan sederhana dengan jumlah siswa yang terbatas, sekolah ini tumbuh menjadi salah satu institusi pendidikan terkemuka di daerahnya.
                                    Selama lebih dari Sekian tahun, Sekolah Kami telah melahirkan lulusan-lulusan yang berprestasi di berbagai bidang, baik akademik maupun non-akademik. 
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm p-5">
                                <h4 className="mb-4">Lingkungan Sekolah</h4>
                                <p>
                                    Sekolah Kami memiliki lingkungan yang asri, bersih, dan nyaman untuk mendukung proses belajar mengajar. Dikelilingi oleh pepohonan rindang dan fasilitas yang lengkap, suasana sekolah dirancang untuk menciptakan pengalaman belajar yang aman, menyenangkan, dan kondusif bagi siswa.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <Footer/>
        </div>
    )
}

export default index

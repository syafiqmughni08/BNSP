import React, { useState, useEffect } from 'react'
import Layout from '../layout/LayoutDashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

// Tambahan untuk chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Dashboard = () => {
  const [pendaftar, setPendaftar] = useState(0)
  const [kuota, setKuota] = useState(50)
  const [lakiLaki, setLakiLakiCount] = useState(0)
  const [perempuan, setPerempuanCount] = useState(0)

  const getData = async () => {
    try {
      const response = await axios.get("https://mughni.rikpetik.site/api/v1/pendaftaran")
      setPendaftar(response.data.data.length)
    } catch (error) {
      console.error("Gagal mengambil data:", error)
    }
  }

  const getByKelamin = async () => {
    try {
      const response = await axios.get("https://mughni.rikpetik.site/api/v1/pendaftaran")
      const data = response.data.data
  
      const lakiLaki = data.filter(item => item.Jenis_kelamin === 'Laki-laki').length
      const perempuan = data.filter(item => item.Jenis_kelamin === 'Perempuan').length
  
      console.log("Laki-laki:", lakiLaki)
      console.log("Perempuan:", perempuan)
  
      setLakiLakiCount(lakiLaki)
      setPerempuanCount(perempuan)
    } catch (error) {
      console.error("Gagal mengambil data:", error)
    }
  }

  useEffect(() => {
    getData()
    getByKelamin()
  }, [])

  // Data untuk chart
  const chartData = {
    labels: ['Total', 'Laki-laki', 'Perempuan', 'Kuota'],
    datasets: [
      {
        label: 'Jumlah',
        data: [pendaftar, lakiLaki, perempuan, kuota],
        backgroundColor: '#0d6efd'
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Statistik Pendaftar'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0
        }
      }
    }
  }

  return (
    <Layout>
      <h3 className="fw-bold mb-4">Dashboard</h3>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h3 className="text-muted mb-1 fw-bold">Total</h3>
                <h4 >{pendaftar}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h3 className="text-muted mb-1 fw-bold">Laki-laki</h3>
                <h4>{lakiLaki}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h3 className="text-muted mb-1 fw-bold">Perempuan</h3>
                <h4>{perempuan}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h3 className="text-muted mb-1 fw-bold">Kuota</h3>
                <h4>{pendaftar} dari {kuota}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="card shadow-sm p-3 mt-4">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </Layout>
  )
}

export default Dashboard

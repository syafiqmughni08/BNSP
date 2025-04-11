import React from 'react'
import Layout from '../layout/LayoutDashboard'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <Layout>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bold">About</h3>
                <NavLink to="/" className="btn btn-primary text-white">Website</NavLink>
            </div>
            <hr />
        </Layout>
    )
}

export default About

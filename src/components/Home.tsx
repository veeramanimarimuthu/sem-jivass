import React from 'react'
import Consumptionchart from './Consumptionchart';
import FrequencyChart from './FrequencyChart';
import VoltageChart from './VoltageChart';
import { BsGraphUpArrow } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { LiaDownloadSolid } from "react-icons/lia";
import { RiFullscreenFill } from "react-icons/ri";
import CurrentChart from './CurrentChart';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className='charts'>
        <div className="container custom-container-1800 mt-5">
            <div className="row mb-3 justify-content-around text-center">
                <div className="col-1 shadow-lg py-2">
                    <Link to='/home' className='text-decoration-none text-dark'><h5>HOME</h5></Link>
                </div>
                <div className="col-2 shadow-lg py-2">
                    <Link to='/home' className='text-decoration-none text-dark'><h5><BsGraphUpArrow /> ANALYTICS</h5></Link>
                </div>
                <div className="col-2 shadow-lg py-2">
                    <Link to='/home' className='text-decoration-none text-dark'><h5><AiFillThunderbolt /> ENERGYMETERS</h5></Link>
                </div>
                <div className="col-2 shadow-lg py-2">
                    <Link to='/downloads'  className='text-decoration-none text-dark'><h5><LiaDownloadSolid /> DOWNLOADS</h5></Link>
                </div>
                <div className="col-2 shadow-lg py-2">
                    <h5>Location: Chennai</h5>
                </div>
                <div className="col-2 shadow-lg py-2">
                    <h5>EM Status: <span className='text-green'>Active</span>(17/03/2025 12:15:23)</h5>
                </div>
            </div>
            <div className="row mb-3 justify-content-around text-center">
                <div className="col-3 shadow-lg py-4">
                    <h5>1423.8500</h5>
                    <p className='mb-0'>Toady's Consumption (KWH)</p>
                </div>
                <div className="col-3 shadow-lg py-4">
                    <h5>212.0700</h5>
                    <p className='mb-0'>Weekly Consumption (kWH)</p>
                </div>
                <div className="col-2 shadow-lg py-4">
                    <h5>Rs. 14162128.48</h5>
                    <p className='mb-0'>Monthly Energy Cost</p>
                </div>
                <div className="col-1 shadow-lg py-4">
                    <h5>234.9 V</h5>
                    <p className='mb-0'>Avg. Voltage</p>
                </div>
                <div className="col-1 shadow-lg py-4">
                    <h5>406.52 V</h5>
                    <p className='mb-0'>LL Voltage</p>
                </div>
                <div className="col-1 shadow-lg py-4">
                    <h5>29.91 A</h5>
                    <p className='mb-0'>Total Current</p>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <img src="" alt="" />
                </div>
                <div className="col-10">
                    <div className='shadow-lg p-3 bg-white rounded' >
                        <h5>Consumption (KWH)</h5>
                        <p className="text-muted">Realtime - Last day</p>
                        <Consumptionchart />
                    </div>
                </div>
            </div>
            <div className="row mt-3 mb-5">
                <div className="col-6">
                    <div className='shadow-lg p-3 bg-white rounded' >
                        <h5>Voltage </h5>
                        <p className="text-muted">Realtime-Last day</p>
                        <VoltageChart />
                    </div>
                </div>
                <div className="col-6">
                    <div className='shadow-lg p-3 bg-white rounded' >
                        <h5>Current</h5>
                        <p className="text-muted">Realtime - Last day</p>
                        <CurrentChart />
                    </div>
                </div>
            </div>
            <div className="row mt-3 mb-5">
                <div className="col-6">
                    <div className='shadow-lg p-3 bg-white rounded' >
                        <h5>Frequency (Hz)</h5>
                        <p className="text-muted">Realtime - Last day</p>
                        {/* <CurrentChart /> */}
                    </div>
                </div>
                <div className="col-6">
                    <div className='shadow-lg p-3 bg-white rounded' >
                        <h5>Voltage (V)</h5>
                        <p className="text-muted">Realtime - Last day</p>
                        {/* <FrequencyChart /> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
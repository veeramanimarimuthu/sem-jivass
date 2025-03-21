import React from 'react';
import Energymeter from '../assets/image/enerymeter.png';
import Consumptionchart from './Consumptionchart';
import FrequencyChart from './FrequencyChart';
import VoltageChart from './VoltageChart';
import { BsGraphUpArrow } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { LiaDownloadSolid } from "react-icons/lia";
import { RiFullscreenFill } from "react-icons/ri";
import CurrentChart from './CurrentChart';
import { Link } from 'react-router-dom';
import PowerFactorTrendChart from './PowerFactorTrendChart';
import PowerChart from './PowerChart';
import { FaRegFilePdf } from "react-icons/fa";

function Home() {
  return (
    <section className='charts'>
        <div className="container custom-container-1800 mt-5">
            <div className="row mb-3 justify-content-around text-center">
                <div className="col-lg-1 shadow-lg py-3">
                    <Link to='/home' className='text-decoration-none text-dark'><h5 className='header-text'>HOME</h5></Link>
                </div>
                <div className="col-lg-1 shadow-lg py-3">
                    <Link to='/home' className='text-decoration-none text-dark'><h5 className='header-text'><BsGraphUpArrow /> ANALYTICS</h5></Link>
                </div>
                <div className="col-lg-2 shadow-lg py-3">
                    <Link to='/home' className='text-decoration-none text-dark'><h5 className='header-text'><AiFillThunderbolt /> ENERGYMETERS</h5></Link>
                </div>
                <div className="col-lg-2 shadow-lg py-3">
                    <Link to='/downloads'  className='text-decoration-none text-dark'><h5 className='header-text'><LiaDownloadSolid /> DOWNLOADS</h5></Link>
                </div>
                <div className="col-lg-2 shadow-lg py-3">
                    <h5 className='header-text'>Location: Chennai</h5>
                </div>
                <div className="col-lg-3 shadow-lg py-3">
                    <h5 className='header-text'>EM Status: <span className='text-green'>Active</span>(17/03/2025 12:15:23)</h5>
                </div>
            </div>
            <div className="row mb-3 justify-content-around text-center">
                <div className="col-lg-3 shadow-lg py-4">
                    <h5>1423.8500</h5>
                    <p className='mb-0 reading-text'>Toady's Consumption (KWH)</p>
                </div>
                <div className="col-lg-3 shadow-lg py-4">
                    <h5>212.0700</h5>
                    <p className='mb-0 reading-text'>Weekly Consumption (kWH)</p>
                </div>
                <div className="col-lg-2 shadow-lg py-4">
                    <h5>Rs. 14162128.48</h5>
                    <p className='mb-0 reading-text'>Monthly Energy Cost</p>
                </div>
                <div className="col-lg-1 shadow-lg py-4">
                    <h5>234.9 V</h5>
                    <p className='mb-0 reading-text'>Avg. Voltage</p>
                </div>
                <div className="col-lg-1 shadow-lg py-4">
                    <h5>406.52 V</h5>
                    <p className='mb-0 reading-text'>LL Voltage</p>
                </div>
                <div className="col-lg-1 shadow-lg py-4">
                    <h5>29.91 A</h5>
                    <p className='mb-0 reading-text'>Total Current</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-3">
                    <div className='shadow-lg py-3 mb-3'>
                        <h5 className='ps-2'>Energymeter</h5>
                        <hr />
                        <div className='text-center'><img src={Energymeter} alt="meter" style={{width: "150px"}}/></div>
                    </div>
                    <div className="shadow-lg py-5 text-center">
                        <h5>76056.19</h5>
                        <p className='mb-0'>Total kwh</p>
                    </div>
                </div>
                <div className="col-12 col-lg-9 mt-3">
                    <div className='shadow-lg py-3 text-end'>
                        <Link to='' className='text-dark'><RiFullscreenFill style={{ fontSize: "22px" }}/></Link>
                        <Link to='' className='text-dark'><FaRegFilePdf  className='mx-2' style={{ fontSize: "22px" }}/></Link>
                    </div>
                    <div className='shadow-lg p-3 bg-white rounded' >
                        <h5>Consumption (KWH)</h5>
                        <p className="text-muted">Realtime - Last day</p>
                        <Consumptionchart />
                    </div>
                </div>
            </div>
            <div className="row mt-3 mb-5">
                <div className="col-12 col-lg-6">
                    <div className='text-end mb-2'>
                        <Link to='' className='text-dark'><RiFullscreenFill style={{ fontSize: "22px" }}/></Link>
                        <Link to='' className='text-dark'><FaRegFilePdf  className='mx-2' style={{ fontSize: "22px" }}/></Link>
                    </div>
                    <div className='shadow-lg p-3 bg-white rounded' >
                        <h5>Voltage </h5>
                        <p className="text-muted">Realtime-Last day</p>
                        <VoltageChart />
                    </div>
                </div>
                <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                    <div className='text-end mb-2'>
                        <Link to='' className='text-dark'><RiFullscreenFill style={{ fontSize: "22px" }}/></Link>
                        <Link to='' className='text-dark'><FaRegFilePdf  className='mx-2' style={{ fontSize: "22px" }}/></Link>
                    </div>
                    <div className='shadow-lg p-3 bg-white rounded' >
                        <h5>Current</h5>
                        <p className="text-muted">Realtime - Last day</p>
                        <CurrentChart />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-3 text-center">
                    <div className="shadow-lg py-5">
                        <h5>0.98</h5>
                        <p className='mb-0'>Power Factor (Avg.)</p>
                    </div>
                    <div className="shadow-lg py-5 my-3">
                        <h5>7.12 KW</h5>
                        <p className='mb-0'>Total Power (RYB)</p>
                    </div>
                    <div className="shadow-lg py-5">
                        <h5>50.05 Hz</h5>
                        <p className='mb-0'>Frequency</p>
                    </div>
                </div>
                <div className="col-12 col-lg-9 mt-3 mt-lg-0">
                    <div className='shadow-lg p-3 bg-white rounded'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h5>Power Factor Trend</h5>
                                <p className="text-muted">Realtime - last day</p>
                            </div>
                            <div>
                                <Link to='' className='text-dark'><RiFullscreenFill style={{ fontSize: "22px" }}/></Link>
                                <Link to='' className='text-dark'><FaRegFilePdf  className='mx-2' style={{ fontSize: "22px" }}/></Link>
                            </div>
                        </div>
                        <PowerFactorTrendChart /> 
                    </div>
                </div>
            </div>
            <div className="row mt-3 mb-5">
                <div className="col-12 col-lg-6">
                    <div className='shadow-lg p-3 bg-white rounded'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h5>Power</h5>
                                <p className="text-muted">Realtime - last day</p>
                            </div>
                            <div>
                                <Link to='' className='text-dark'><RiFullscreenFill style={{ fontSize: "22px" }}/></Link>
                                <Link to='' className='text-dark'><FaRegFilePdf  className='mx-2' style={{ fontSize: "22px" }}/></Link>
                            </div>
                        </div>
                        <PowerChart />
                    </div>
                </div>
                <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                    <div className='shadow-lg p-3 bg-white rounded'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h5>Frequency</h5>
                                <p className="text-muted">Realtime - last day</p>
                            </div>
                            <div>
                                <Link to='' className='text-dark'><RiFullscreenFill style={{ fontSize: "22px" }}/></Link>
                                <Link to='' className='text-dark'><FaRegFilePdf  className='mx-2' style={{ fontSize: "22px" }}/></Link>
                            </div>
                        </div>
                        <FrequencyChart />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
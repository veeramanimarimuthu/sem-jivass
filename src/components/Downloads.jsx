import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuCircleUserRound } from "react-icons/lu";
import { IoMdArrowBack } from "react-icons/io";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { IoMdSearch } from "react-icons/io";
import { FaRegFilePdf } from "react-icons/fa";

function createData1(id, timestamp, totalKWh, totalPowerRYB, frequency, voltageAvg, powerFactorAvg, totalCurrentRYB) {
    return {
        id,
        timestamp,
        totalKWh,
        totalPowerRYB,
        frequency,
        voltageAvg,
        powerFactorAvg,
        totalCurrentRYB,
    };
  }

const rows = [
    createData1(1, '2025-03-10 23:33:30', 62022.03, 7026.49, 49.82, 233.35, 0.96, 29.70),
    createData1(2, '2025-03-10 23:33:30', 62022.03, 7026.49, 49.82, 233.35, 0.96, 29.70),
    createData1(3, '2025-03-10 23:18:30', 62017.01, 6897.43, 50.10, 230.89, 0.95, 29.70),
    createData1(4, '2025-03-10 23:03:30', 62015.02, 7347.06, 50.09, 228.35, 0.96, 32.31),
    createData1(5, '2025-03-10 22:48:30', 62011.03, 7307.61, 49.82, 228.35, 0.98, 31.71),
    createData1(6, '2025-03-10 22:33:30', 62008.95, 7257.18, 49.90, 226.37, 0.96, 31.14),
    createData1(7, '2025-03-10 22:18:30', 62006.00, 7317.99, 50.07, 231.91, 0.98, 30.51),
    createData1(8, '2025-03-10 22:03:30', 62003.98, 6963.80, 49.93, 225.10, 0.96, 31.65),
    createData1(9, '2025-03-10 21:48:30', 62001.02, 7347.08, 49.93, 225.26, 0.98, 30.57),
    createData1(10,'2025-03-10 21:33:30', 61996.01, 7147.08, 50.08, 232.46, 0.98, 32.76),
];

function createData2(timestamp, dailyconsumption, unit) {
    return { 
        timestamp,
         dailyconsumption, 
         unit 
    };
}

const data = [
    createData2('2025-03-03 00:00:00', 288.88, 'kWh'),
    createData2('2025-03-04 00:00:00', 291.93, 'kWh'),
    createData2('2025-03-05 00:00:00', 292.06, 'kWh'),
    createData2('2025-03-06 00:00:00', 291.04, 'kWh'),
    createData2('2025-03-07 00:00:00', 290.02, 'kWh'),
    createData2('2025-03-08 00:00:00', 288.14, 'kWh'),
    createData2('2025-03-09 00:00:00', 288.85, 'kWh'),
    createData2('2025-03-10 00:00:00', 291.95, 'kWh'),
    createData2('2025-03-11 00:00:00', 291.04, 'kWh'),
    createData2('2025-03-12 00:00:00', 291.09, 'kWh'),
];

function createData(timestamp, voltageR, voltageY, voltageB, currentR, currentY, currentB) {
    return { 
        timestamp, 
        voltageR, 
        voltageY, 
        voltageB, 
        currentR, 
        currentY, 
        currentB 
    };
  }

const phaseData = [
    createData('2025-03-10 22:18:30', 245.35, 233.35, 221.35, 13.90, 9.90, 5.90),
    createData('2025-03-10 22:03:30', 240.89, 230.89, 220.89, 11.90, 9.90, 7.90),
    createData('2025-03-10 21:48:30', 236.35, 225.35, 214.35, 13.77, 10.77, 7.77),
    createData('2025-03-10 21:18:30', 239.37, 228.37, 217.37, 13.52, 10.57, 7.57),
    createData('2025-03-10 23:03:30', 240.37, 233.35, 220.89, 11.90, 9.90, 5.89),
];
  

function Downloads() {
    const [dateRange, setDateRange] = useState("");
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 shadow-lg py-3 d-lg-flex justify-content-between">
            <div className='d-flex align-items-center'>
                <h3 className='text-bold main-text'>Smart Enerymeter Monitoring</h3>
                <Link to='' className="text-muted px-3 text-decoration-none sub-text">Energy Monitoring</Link> <IoIosArrowForward style={{ fontSize: "22px" }} />
                <Link to='' className="text-muted ps-3 text-decoration-none sub-text">Downloads</Link>
            </div>
            <div className='d-flex align-items-center justify-content-center justify-content-sm-start pt-4 pt-md-0'>
                <CiSearch style={{ fontSize: "22px" }} />
                <IoNotificationsOutline style={{ fontSize: "22px" }} className='mx-3' />
                <div className='d-flex align-items-center'>
                    <LuCircleUserRound style={{ fontSize: "30px" }} />  
                     <div className='ps-2 ps-md-3'>
                        <h6 className='mb-0 admin-text'>Gyrfaicon</h6>
                        <span className='text-muted admin-text'>Admin</span>
                    </div>               
                </div>
            </div>
          </div>
        </div>
        <div className="row mx-md-2 py-2">
            <div className='col-12 d-flex justify-content-between pt-2 align-items-center'>
                <Link to='/home' className='text-dark text-decoration-none'><IoMdArrowBack style={{ fontSize: "22px" }} /> Back</Link>
                <p className='sub-text mb-0'>Selected Range 10/03/2025 to 11/03/2025</p>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-lg-8 shadow-lg py-3">
                <h3 className='fw-bold text-center main-text'><RiDownloadCloud2Fill />Download Energy Meter Data (IoT-0001)</h3>
            </div>
            <div className="col-12 col-lg-4 shadow-lg py-3 text-center">
            <input
                type="text"
                placeholder="Enter the date range"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full bg-transparent outline-none"
            />
            <FaRegCalendarAlt className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-12 col-lg-8">
                <TableContainer className='shadow-lg'>
                    <Table>
                        <TableHead>
                            <TableRow> 
                                <TableCell align="center" className='fw-bold'>Timestamp</TableCell>
                                <TableCell align="center" className='fw-bold'>Total KWh</TableCell>
                                <TableCell align="center" className='fw-bold'>Total power(RYB)</TableCell>
                                <TableCell align="center" className='fw-bold'>frequency</TableCell>
                                <TableCell align="center" className='fw-bold'>voltage()Avg</TableCell>
                                <TableCell align="center" className='fw-bold'>power Factor(Avg)</TableCell>
                                <TableCell align="center" className='fw-bold'>Total current(RYB)</TableCell>
                                <TableCell align="left" className='fw-bold'>
                                    <IoMdSearch style={{ fontSize: "22px" }} /> 
                                    <FaRegFilePdf className='ps-2' style={{ fontSize: "22px" }} /> 
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           {rows.map((row)=>(
                            <TableRow key={row.id}>
                                <TableCell align="center">{row.timestamp}</TableCell>
                                <TableCell align="center">{row.totalKWh}</TableCell>
                                <TableCell align="center">{row.totalPowerRYB}</TableCell>
                                <TableCell align="center">{row.frequency}</TableCell>
                                <TableCell align="center">{row.voltageAvg}</TableCell>
                                <TableCell align="center">{row.powerFactorAvg}</TableCell>
                                <TableCell align="center">{row.totalCurrentRYB}</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                           ))}
                        </TableBody>
                    </Table> 
                </TableContainer>
            </div>
            <div className="col-12 col-lg-4 pt-3 pt-lg-0">
                <TableContainer className='shadow-lg'>
                    <Table className="custom-table">
                        <TableHead>
                            <TableRow> 
                                <TableCell align="left" className='fw-bold'>Timestamp</TableCell>
                                <TableCell align="left" className='fw-bold'>Daily Consumption</TableCell>
                                <TableCell align="left" className='fw-bold'>
                                    <IoMdSearch style={{ fontSize: "22px" }} /> 
                                    <FaRegFilePdf className='ps-2' style={{ fontSize: "22px" }} /> 
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           {data.map((data)=>(
                            <TableRow key={data.id}>
                                <TableCell align="left">{data.timestamp}</TableCell>
                                <TableCell align="left">{data.dailyconsumption}{data.unit}</TableCell>
                            </TableRow>
                           ))}
                        </TableBody>
                    </Table> 
                </TableContainer>
            </div>
        </div>
        <div className="row mt-2 mb-5">
            <div className="col-12">
                <TableContainer className='shadow-lg'>
                    <Table className="custom-table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" className='fw-bold table-text'>Timestamp</TableCell>
                                <TableCell align="center" className='fw-bold table-text'>voltage( R Phase )</TableCell>
                                <TableCell align="center" className='fw-bold table-text'>voltage( Y Phase )</TableCell>
                                <TableCell align="center" className='fw-bold table-text'>voltage( B Phase )</TableCell>
                                <TableCell align="center" className='fw-bold table-text'>current( R Phase )</TableCell>
                                <TableCell align="center" className='fw-bold table-text'>current( Y Phase )</TableCell>
                                <TableCell align="center" className='fw-bold table-text'>current( B Phase )</TableCell>
                                <TableCell align="left" className='fw-bold'>
                                    <IoMdSearch style={{ fontSize: "22px" }} /> 
                                    <FaRegFilePdf className='ps-2' style={{ fontSize: "22px" }} /> 
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           {phaseData.map((phaseData)=>(
                            <TableRow key={phaseData.id}>
                                <TableCell align="center">{phaseData.timestamp}</TableCell>
                                <TableCell align="center">{phaseData.voltageR}</TableCell>
                                <TableCell align="center">{phaseData.voltageY}</TableCell>
                                <TableCell align="center">{phaseData.voltageB}</TableCell>
                                <TableCell align="center">{phaseData.currentR}</TableCell>
                                <TableCell align="center">{phaseData.currentY}</TableCell>
                                <TableCell align="center">{phaseData.currentB}</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                           ))}
                        </TableBody>
                    </Table> 
                </TableContainer>
            </div>
        </div>
      </div>
    </>
  )
}


export default Downloads
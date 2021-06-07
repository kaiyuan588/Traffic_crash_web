import React, { useState, useEffect } from "react";
import Chart from 'react-apexcharts'
import { getCrashes } from "../api/api";

export default function Area() {
    const [countyTimeArray, setcountyTimeArray] = useState([]);

    const init = () => {
        const countyTimeMap = {};
        getCrashes().then(data => {
            data.forEach(element => {
                let hour = element.crash_date_time.slice(11, 13);
                if (!countyTimeMap[element.county]) {
                    countyTimeMap[element.county] = Array(6).fill(0);
                }
                if (hour - 1 < 4) {
                    countyTimeMap[element.county][0]++;
                } else if (hour - 1 > 4 && hour - 1 < 8) {
                    countyTimeMap[element.county][1]++;
                } else if (hour - 1 > 8 && hour - 1 < 12) {
                    countyTimeMap[element.county][2]++;
                } else if (hour - 1 > 12 && hour - 1 < 16) {
                    countyTimeMap[element.county][3]++;
                } else if (hour - 1 > 16 && hour - 1 < 20) {
                    countyTimeMap[element.county][4]++;
                } else if (hour - 1 > 20 && hour - 1 < 24) {
                    countyTimeMap[element.county][5]++;
                }
            });
            for (const [key, value] of Object.entries(countyTimeMap)) {
                setcountyTimeArray(countyTimeArray => [...countyTimeArray, {
                    name: key,
                    data: value
                }]);
            }
        });
    };

    useEffect(() => {
        init();
    }, []);

    const options = {
        xaxis: {
            categories: ['12AM - 04AM', '04AM - 08AM', '08AM - 12PM', '12PM - 4PM', '04PM - 08PM', '08PM - 12AM']
        }
    }

    return (
        <div className="area">
            <Chart options={options} series={countyTimeArray} type="area" width="600" />
        </div>
    )
}
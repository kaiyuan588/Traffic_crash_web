require('dotenv').config();

const API = process.env.REACT_APP_API_URL;

export const getCrashes = () => {
    return fetch(`${API}/crash`, {
        method: "GET"
    }).then(response => {
            return response.json();
    }).catch(err => console.log(err));
};

export const getVehiclesByReportNumber = (report_number) => {
    return fetch(`${API}/vehicle?report_number=${report_number}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getDriversByVehicleNumber = (report_number, vehicle_number) => {
    return fetch(`${API}/driver?report_number=${report_number}&vehicle_number=${vehicle_number}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
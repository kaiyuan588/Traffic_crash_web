import React, { useState, useEffect } from "react";
import { getCrashes } from "../api/api";
import CrashCard from "./crash-card";

export default function CrashList() {
    const [values, setValues] = useState({
        crashList: [],
        error: "",
    });
    const { crashList, error } = values;

    const init = () => {
        getCrashes().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    crashList: data
                });
            }
        });
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div>
            <h5>
                {crashList.length} incident found in Florida
            </h5>
            {crashList.map((crash) => (
                <CrashCard
                    crash={crash}
                />
            ))}
        </div>
    );
};



import React, {useEffect, useState} from "react";
import './App.css';
import {Loader} from "./Loader";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.everypay.payform({
            pk: 'pk_vI1tWSHzaskrVBobzcqvwk0uYAWXR8BP',
            amount: 5012,
            locale: 'el',
            installments: [2, 6, 8],
        }, handleResponse);
    }, []);


    const handleResponse = (r) => {
        if (r.onLoad) {
            setLoading(false);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                {loading && <div style={{width: 150}}><Loader/></div>}
                <div id="pay-form"/>
            </header>
        </div>
    );
}

export default App;

import React, { useState, useEffect } from 'react';
import ExampleComponent from './components/ExampleComponent';
import { fetchDataFromGas } from './gas/googleAppsScript';

const App: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchDataFromGas();
                setData(result);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>My React Google Apps Script App</h1>
            <ExampleComponent data={data} />
        </div>
    );
};

export default App;
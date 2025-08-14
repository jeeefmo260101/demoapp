import React from 'react';

interface ExampleComponentProps {
    data: any; // Replace 'any' with the appropriate type based on the data structure
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ data }) => {
    return (
        <div>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre> // Displaying data as JSON for demonstration
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default ExampleComponent;
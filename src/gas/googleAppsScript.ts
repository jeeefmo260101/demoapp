import { GoogleAppsScript } from 'google-apps-script';

export const fetchDataFromGas = async () => {
    const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};
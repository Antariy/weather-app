const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const apiUrl = 'https://api.openweathermap.org/data/2.5';

export const defaultParams = {
    lat: 59.4370,
    lon: 24.7536,
    mode: 'json',
    units: 'standard',
}

export const generateFetchUrl = (params, endPoint = 'weather') => {
    const searchParams = new URLSearchParams({
        appid: apiKey,
        ...defaultParams,
        ...params,
    });
    return `${apiUrl}/${endPoint}?${searchParams}`;
};


export const getCurrentWeather = async (params) => {

    const url = await fetch(generateFetchUrl(params));

    return await url.json();
};

export const getForcastWeather = async (params) => {
    const url = generateFetchUrl(params, 'forecast');

    const response = await fetch(url);

    return await response.json();

};




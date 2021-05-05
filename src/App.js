import './css/App.css';
import './css/weather-icons.min.css';

import React, { useState } from 'react';

import { List } from './components/List'
import { LineChart } from './components/LineChart'
import { Menu } from './components/Menu'
import { Update } from './components/Update'

let App = () => {

  const [forecast, setForecast] = useState({
    "2021-05-04": [
        {
            "dt": 1620140400,
            "main": {
                "temp": 15.09,
                "feels_like": 14.06,
                "temp_min": 15.09,
                "temp_max": 16.39,
                "pressure": 991,
                "sea_level": 991,
                "grnd_level": 985,
                "humidity": 54,
                "temp_kf": -1.3
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 86
            },
            "wind": {
                "speed": 7.88,
                "deg": 204,
                "gust": 14.43
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-04 15:00:00"
        },
        {
            "dt": 1620151200,
            "main": {
                "temp": 13.33,
                "feels_like": 12.44,
                "temp_min": 12.78,
                "temp_max": 13.33,
                "pressure": 999,
                "sea_level": 999,
                "grnd_level": 985,
                "humidity": 66,
                "temp_kf": 0.55
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 93
            },
            "wind": {
                "speed": 6.81,
                "deg": 214,
                "gust": 14.3
            },
            "visibility": 10000,
            "pop": 0.24,
            "rain": {
                "3h": 0.31
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-04 18:00:00"
        },
        {
            "dt": 1620162000,
            "main": {
                "temp": 10.51,
                "feels_like": 9.89,
                "temp_min": 10.51,
                "temp_max": 10.51,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 985,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.16,
                "deg": 247,
                "gust": 7.91
            },
            "visibility": 10000,
            "pop": 0.44,
            "rain": {
                "3h": 0.5
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-05-04 21:00:00"
        }
    ],
    "2021-05-05": [
        {
            "dt": 1620172800,
            "main": {
                "temp": 10.41,
                "feels_like": 9.57,
                "temp_min": 10.41,
                "temp_max": 10.41,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 984,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.77,
                "deg": 235,
                "gust": 11.62
            },
            "visibility": 10000,
            "pop": 0.24,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-05-05 00:00:00"
        },
        {
            "dt": 1620183600,
            "main": {
                "temp": 9.35,
                "feels_like": 7.63,
                "temp_min": 9.35,
                "temp_max": 9.35,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 983,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.17,
                "deg": 251,
                "gust": 8.1
            },
            "visibility": 10000,
            "pop": 0.16,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-05-05 03:00:00"
        },
        {
            "dt": 1620194400,
            "main": {
                "temp": 10.72,
                "feels_like": 9.91,
                "temp_min": 10.72,
                "temp_max": 10.72,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 983,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.9,
                "deg": 194,
                "gust": 6.7
            },
            "visibility": 10000,
            "pop": 0.12,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-05 06:00:00"
        },
        {
            "dt": 1620205200,
            "main": {
                "temp": 14.25,
                "feels_like": 13.38,
                "temp_min": 14.25,
                "temp_max": 14.25,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 981,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.19,
                "deg": 205,
                "gust": 8.5
            },
            "visibility": 10000,
            "pop": 0.04,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-05 09:00:00"
        },
        {
            "dt": 1620216000,
            "main": {
                "temp": 11.1,
                "feels_like": 10.56,
                "temp_min": 11.1,
                "temp_max": 11.1,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 981,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.58,
                "deg": 281,
                "gust": 9.31
            },
            "visibility": 10000,
            "pop": 0.76,
            "rain": {
                "3h": 1.31
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-05 12:00:00"
        },
        {
            "dt": 1620226800,
            "main": {
                "temp": 8.4,
                "feels_like": 5.91,
                "temp_min": 8.4,
                "temp_max": 8.4,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 983,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.27,
                "deg": 278,
                "gust": 10.91
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 2.81
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-05 15:00:00"
        },
        {
            "dt": 1620237600,
            "main": {
                "temp": 7.6,
                "feels_like": 5.08,
                "temp_min": 7.6,
                "temp_max": 7.6,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 984,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.94,
                "deg": 265,
                "gust": 9.32
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 0.31
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-05 18:00:00"
        },
        {
            "dt": 1620248400,
            "main": {
                "temp": 5.95,
                "feels_like": 2.74,
                "temp_min": 5.95,
                "temp_max": 5.95,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 986,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.54,
                "deg": 267,
                "gust": 11.31
            },
            "visibility": 10000,
            "pop": 0.36,
            "rain": {
                "3h": 0.44
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-05-05 21:00:00"
        }
    ],
    "2021-05-06": [
        {
            "dt": 1620259200,
            "main": {
                "temp": 4.08,
                "feels_like": -0.25,
                "temp_min": 4.08,
                "temp_max": 4.08,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 988,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 51
            },
            "wind": {
                "speed": 5.94,
                "deg": 270,
                "gust": 13.11
            },
            "visibility": 10000,
            "pop": 0.16,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-05-06 00:00:00"
        },
        {
            "dt": 1620270000,
            "main": {
                "temp": 3.18,
                "feels_like": -0.79,
                "temp_min": 3.18,
                "temp_max": 3.18,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 989,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.71,
                "deg": 263,
                "gust": 12.41
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-05-06 03:00:00"
        },
        {
            "dt": 1620280800,
            "main": {
                "temp": 6.73,
                "feels_like": 4.33,
                "temp_min": 6.73,
                "temp_max": 6.73,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 990,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 3.4,
                "deg": 216,
                "gust": 7.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-06 06:00:00"
        },
        {
            "dt": 1620291600,
            "main": {
                "temp": 9.65,
                "feels_like": 7.21,
                "temp_min": 9.65,
                "temp_max": 9.65,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 990,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 74
            },
            "wind": {
                "speed": 4.84,
                "deg": 255,
                "gust": 8
            },
            "visibility": 10000,
            "pop": 0.36,
            "rain": {
                "3h": 0.38
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-06 09:00:00"
        },
        {
            "dt": 1620302400,
            "main": {
                "temp": 12.31,
                "feels_like": 10.82,
                "temp_min": 12.31,
                "temp_max": 12.31,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 989,
                "humidity": 47,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 87
            },
            "wind": {
                "speed": 6.85,
                "deg": 262,
                "gust": 10.51
            },
            "visibility": 10000,
            "pop": 0.6,
            "rain": {
                "3h": 0.38
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-06 12:00:00"
        },
        {
            "dt": 1620313200,
            "main": {
                "temp": 12.09,
                "feels_like": 10.79,
                "temp_min": 12.09,
                "temp_max": 12.09,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 988,
                "humidity": 55,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 5.03,
                "deg": 247,
                "gust": 8.61
            },
            "visibility": 10000,
            "pop": 0.6,
            "rain": {
                "3h": 0.69
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-06 15:00:00"
        },
        {
            "dt": 1620324000,
            "main": {
                "temp": 8.19,
                "feels_like": 6.06,
                "temp_min": 8.19,
                "temp_max": 8.19,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 988,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 3.46,
                "deg": 208,
                "gust": 8.02
            },
            "visibility": 10000,
            "pop": 0.56,
            "rain": {
                "3h": 0.56
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-06 18:00:00"
        },
        {
            "dt": 1620334800,
            "main": {
                "temp": 8.41,
                "feels_like": 5.04,
                "temp_min": 8.41,
                "temp_max": 8.41,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 988,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.54,
                "deg": 203,
                "gust": 11.12
            },
            "visibility": 10000,
            "pop": 0.24,
            "rain": {
                "3h": 0.19
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-05-06 21:00:00"
        }
    ],
    "2021-05-07": [
        {
            "dt": 1620345600,
            "main": {
                "temp": 7.37,
                "feels_like": 4.11,
                "temp_min": 7.37,
                "temp_max": 7.37,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 987,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.46,
                "deg": 216,
                "gust": 10.92
            },
            "visibility": 10000,
            "pop": 0.56,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-05-07 00:00:00"
        },
        {
            "dt": 1620356400,
            "main": {
                "temp": 6.84,
                "feels_like": 3.76,
                "temp_min": 6.84,
                "temp_max": 6.84,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 986,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.72,
                "deg": 202,
                "gust": 8.82
            },
            "visibility": 10000,
            "pop": 0.32,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-05-07 03:00:00"
        },
        {
            "dt": 1620367200,
            "main": {
                "temp": 7.55,
                "feels_like": 4.63,
                "temp_min": 7.55,
                "temp_max": 7.55,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 986,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.76,
                "deg": 208,
                "gust": 7.62
            },
            "visibility": 10000,
            "pop": 0.4,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-07 06:00:00"
        },
        {
            "dt": 1620378000,
            "main": {
                "temp": 6.57,
                "feels_like": 3.44,
                "temp_min": 6.57,
                "temp_max": 6.57,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 988,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.7,
                "deg": 311,
                "gust": 6.92
            },
            "visibility": 10000,
            "pop": 0.76,
            "rain": {
                "3h": 0.88
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-07 09:00:00"
        },
        {
            "dt": 1620388800,
            "main": {
                "temp": 7.89,
                "feels_like": 5.31,
                "temp_min": 7.89,
                "temp_max": 7.89,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 990,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.21,
                "deg": 278,
                "gust": 7.73
            },
            "visibility": 10000,
            "pop": 0.88,
            "rain": {
                "3h": 0.56
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-07 12:00:00"
        },
        {
            "dt": 1620399600,
            "main": {
                "temp": 10.62,
                "feels_like": 9.2,
                "temp_min": 10.62,
                "temp_max": 10.62,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 990,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 73
            },
            "wind": {
                "speed": 4.16,
                "deg": 284,
                "gust": 8.12
            },
            "visibility": 10000,
            "pop": 0.72,
            "rain": {
                "3h": 0.56
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-07 15:00:00"
        },
        {
            "dt": 1620410400,
            "main": {
                "temp": 6.75,
                "feels_like": 5.29,
                "temp_min": 6.75,
                "temp_max": 6.75,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 992,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 52
            },
            "wind": {
                "speed": 2.13,
                "deg": 245,
                "gust": 2.11
            },
            "visibility": 10000,
            "pop": 0.64,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-07 18:00:00"
        },
        {
            "dt": 1620421200,
            "main": {
                "temp": 3.81,
                "feels_like": 1.64,
                "temp_min": 3.81,
                "temp_max": 3.81,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 993,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 2.34,
                "deg": 247,
                "gust": 2.3
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-05-07 21:00:00"
        }
    ],
    "2021-05-08": [
        {
            "dt": 1620432000,
            "main": {
                "temp": 2.58,
                "feels_like": 1.17,
                "temp_min": 2.58,
                "temp_max": 2.58,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 994,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 7
            },
            "wind": {
                "speed": 1.51,
                "deg": 270,
                "gust": 1.5
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-05-08 00:00:00"
        },
        {
            "dt": 1620442800,
            "main": {
                "temp": 2.6,
                "feels_like": 0.95,
                "temp_min": 2.6,
                "temp_max": 2.6,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 995,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 70
            },
            "wind": {
                "speed": 1.69,
                "deg": 145,
                "gust": 1.71
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-05-08 03:00:00"
        },
        {
            "dt": 1620453600,
            "main": {
                "temp": 6.92,
                "feels_like": 5.88,
                "temp_min": 6.92,
                "temp_max": 6.92,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 996,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 85
            },
            "wind": {
                "speed": 1.73,
                "deg": 197,
                "gust": 2.01
            },
            "visibility": 10000,
            "pop": 0.08,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-08 06:00:00"
        },
        {
            "dt": 1620464400,
            "main": {
                "temp": 8.96,
                "feels_like": 7.47,
                "temp_min": 8.96,
                "temp_max": 8.96,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 997,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.67,
                "deg": 238,
                "gust": 2.6
            },
            "visibility": 10000,
            "pop": 0.68,
            "rain": {
                "3h": 0.38
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-08 09:00:00"
        },
        {
            "dt": 1620475200,
            "main": {
                "temp": 11.42,
                "feels_like": 10.37,
                "temp_min": 11.42,
                "temp_max": 11.42,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 997,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 1.86,
                "deg": 241,
                "gust": 2.42
            },
            "visibility": 10000,
            "pop": 0.68,
            "rain": {
                "3h": 0.25
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-08 12:00:00"
        },
        {
            "dt": 1620486000,
            "main": {
                "temp": 13.01,
                "feels_like": 11.83,
                "temp_min": 13.01,
                "temp_max": 13.01,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 996,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 70
            },
            "wind": {
                "speed": 2.44,
                "deg": 148,
                "gust": 2.7
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-08 15:00:00"
        },
        {
            "dt": 1620496800,
            "main": {
                "temp": 8.92,
                "feels_like": 7.1,
                "temp_min": 8.92,
                "temp_max": 8.92,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 995,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 77
            },
            "wind": {
                "speed": 3.19,
                "deg": 117,
                "gust": 4.8
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-08 18:00:00"
        },
        {
            "dt": 1620507600,
            "main": {
                "temp": 6.84,
                "feels_like": 4.24,
                "temp_min": 6.84,
                "temp_max": 6.84,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 995,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 3.78,
                "deg": 146,
                "gust": 8.31
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-05-08 21:00:00"
        }
    ],
    "2021-05-09": [
        {
            "dt": 1620518400,
            "main": {
                "temp": 6.73,
                "feels_like": 3.84,
                "temp_min": 6.73,
                "temp_max": 6.73,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 994,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 61
            },
            "wind": {
                "speed": 4.28,
                "deg": 156,
                "gust": 12.11
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-05-09 00:00:00"
        },
        {
            "dt": 1620529200,
            "main": {
                "temp": 10.92,
                "feels_like": 10.23,
                "temp_min": 10.92,
                "temp_max": 10.92,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 993,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.56,
                "deg": 182,
                "gust": 15.7
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-05-09 03:00:00"
        },
        {
            "dt": 1620540000,
            "main": {
                "temp": 13.82,
                "feels_like": 13.27,
                "temp_min": 13.82,
                "temp_max": 13.82,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 993,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 62
            },
            "wind": {
                "speed": 9.3,
                "deg": 191,
                "gust": 16.51
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-09 06:00:00"
        },
        {
            "dt": 1620550800,
            "main": {
                "temp": 18.03,
                "feels_like": 17.61,
                "temp_min": 18.03,
                "temp_max": 18.03,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 993,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 9.61,
                "deg": 195,
                "gust": 13.61
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-09 09:00:00"
        },
        {
            "dt": 1620561600,
            "main": {
                "temp": 20.3,
                "feels_like": 19.95,
                "temp_min": 20.3,
                "temp_max": 20.3,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 992,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 36
            },
            "wind": {
                "speed": 9.17,
                "deg": 197,
                "gust": 12.52
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-05-09 12:00:00"
        }
    ]
})
  const [dayOn, setDayOn] = useState(0);
  const [category, setCategory] = useState(0); //zmień na setCategory np.

  const optionsArray = ["TEMPERATURE", "PRESSURE", "HUMIDITY"];
  const icons = {
    Sun: "wi wi-day-sunny",
    Rain: "wi wi-day-rain",
    Snowfall: "wi wi-day-snow",
    Clouds: "wi wi-day-cloudy",
    Clear: "wi wi-day-sunny"
  }

  const dayDates = Object.keys(forecast)

  return (
    <div className="container">
      <div id="menuHeader">
        CHOOSE DATA TO DISPLAY:
      </div>
      <header>
        5 DAY WEATHER FORECAST 
      </header>
      <Menu setCategory={setCategory} optionsArray={optionsArray} category={category} />
      <LineChart dayOn={dayOn} optionsArray={optionsArray} category={category} dayDates={dayDates} forecast={forecast}/>
      <List setDayOn={setDayOn} icons={icons} dayOn={dayOn} forecast={forecast} dayDates={dayDates}/>
      <Update forecast={forecast} setForecast={setForecast}/>
      <footer>
      </footer>
    </div>
  );
}

export default App;

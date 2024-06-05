export const cities = [
  "London",
  "Birmingham",
  "Manchester",
  "Leeds",
  "Glasgow",
  "Sheffield",
  "Liverpool",
  "Bristol",
  "Edinburgh",
  "Leicester",
  "Coventry",
  "Newcastle upon Tyne",
  "Kingston upon Hull",
  "Cardiff",
  "Bradford",
  "Portsmouth",
  "Sunderland",
  "Nottingham",
  "Derby",
  "Plymouth",
  "Southampton",
  "Belfast",
  "Stoke-on-Trent",
  "Wolverhampton",
  "Aberdeen",
  "Dundee",
  "Swansea",
  "Newport",
  "Luton",
  "Oxford",
  "Sheffield",
  "Reading",
  "Blackpool",
  "Middlesbrough",
  "Oldham",
  "Bolton",
  "Stockport",
  "Brighton and Hove",
  "Preston",
  "Norwich",
  "Milton Keynes",
  "Sunderland",
  "Gloucester",
  "Saint Albans",
  "Hereford",
  "Lichfield",
  "Wakefield",
  "Salford",
  "Chester",
  "Lincoln",
  "Canterbury",
  "Lancaster",
  "Carlisle",
  "Ripon",
  "Chichester",
  "Wells",
  "Durham",
  "Lichfield",
  "Bangor",
  "Saint Asaph",
  "Newry",
  "Armagh",
  "Lisburn",
  "Londonderry",
  "Carlisle",
  "Perth",
  "Stirling",
  "Inverness",
  "Aberdeen",
  "Dundee",
  "Edinburgh",
  "Glasgow",
];

export const mockWeatherData = [
  {
    city: {
      id: 2643743,
      name: "London",
      country: "GB",
    },
    coord: {
      lat: 51.5073,
      lon: -0.1276,
    },
    country: "GB",
    id: 2643743,
    name: "London",
    population: 1000000,
    sunrise: 1717559170,
    sunset: 1717618336,
    timezone: 3600,
    cnt: 40,
    cod: "200",
    list: [
      {
        dt: 1717578000,
        visibility: 10000,
        pop: 0,
        clouds: { all: 5 },
        dt_txt: "2024-06-05 09:00:00",
        main: {
          temp: 286.84,
          feels_like: 285.88,
          temp_min: 286.84,
          temp_max: 289.64,
          temp_kf: -1.87,
        },
        weather: [{ id: 800, main: "Clear", description: "clear sky" }],
        wind: { speed: 4.02, deg: 280, gust: 5.82 },
      },
    ],
  },
];

export const mockNewsData = [
  {
    id: 1,
    title: "Heavy Rains Expected in the Pacific Northwest",
    date: "2024-06-05",
    content:
      "Meteorologists are forecasting heavy rains across the Pacific Northwest starting this weekend. Residents are advised to prepare for possible flooding in low-lying areas. The National Weather Service has issued flood watches and warnings for several counties in Oregon and Washington.",
    location: "Seattle, WA",
    reporter: "Jane Doe",
    image: "/images/rain.jpg",
  },
  {
    id: 2,
    title: "Heatwave to Grip the Southwest",
    date: "2024-06-05",
    content:
      "A severe heatwave is expected to hit the Southwest region this week, with temperatures soaring above 110°F in some areas. Officials are urging residents to stay hydrated, avoid outdoor activities during peak hours, and check on vulnerable populations such as the elderly and children.",
    location: "Phoenix, AZ",
    reporter: "John Smith",
    image: "/images/heatwave.jpg",
  },
  {
    id: 3,
    title: "Thunderstorms Likely in the Midwest",
    date: "2024-06-05",
    content:
      "A series of thunderstorms is predicted to sweep through the Midwest over the next few days. The storms could bring heavy rain, strong winds, and hail. Residents are advised to stay informed about the latest weather updates and take necessary precautions.",
    location: "Chicago, IL",
    reporter: "Alice Johnson",
    image: "/images/thunderstorm.jpg",
  },
  {
    id: 4,
    title: "Tropical Storm Forms in the Atlantic",
    date: "2024-06-05",
    content:
      "The first tropical storm of the season has formed in the Atlantic Ocean and is currently moving westward. Meteorologists are closely monitoring the storm's path, which could potentially impact the Caribbean islands in the coming days. Residents in the affected areas are encouraged to prepare for possible severe weather.",
    location: "Miami, FL",
    reporter: "Michael Brown",
    image: "/images/tropicalstorm.jpg",
  },
  {
    id: 5,
    title: "Snowfall in the Rockies Unusual for June",
    date: "2024-06-05",
    content:
      "An unusual weather pattern has brought snowfall to the Rocky Mountains in early June. Ski resorts in Colorado are seeing a surprising extension to their season, while travelers and locals are reminded to drive cautiously and be prepared for winter-like conditions.",
    location: "Denver, CO",
    reporter: "Emily White",
    image: "/images/snowfall.jpg",
  },
];

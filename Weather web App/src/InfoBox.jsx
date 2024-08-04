import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Box from '@mui/material/Box';
import { CardMedia } from '@mui/material';

export default function InfoBox({ info }) {
    const getWeatherIcon = () => {
        if (info.humidity > 80) {
            return <ThunderstormIcon sx={{ fontSize: 140 }} />;
        } else if (info.temp > 15) {
            return <WbSunnyIcon sx={{ fontSize: 140 }} />;
        } else {
            return <AcUnitIcon sx={{ fontSize: 140 }} />;
        }
    };

    let INIT_URL = "https://unsplash.com/photos/the-sun-is-shining-over-the-ocean-and-rocks-mmiEz2SELdo";
    let COLD_URL = "https://unsplash.com/photos/a-view-of-a-small-village-surrounded-by-trees-oebB9bcNhbk";
    let HOT_URL = "https://unsplash.com/photos/brown-concrete-building-under-white-sky-during-daytime-hswFnbai-Zg";
    let RAIN_URL = "https://unsplash.com/photos/gray-concrete-building-under-gray-sky-Jt8Mq6J4Gow";

    return (
        <div className="InfoBox">
            <p>{info.weather}</p>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80
                            ? RAIN_URL
                            : info.temp > 30
                                ? HOT_URL
                                : COLD_URL
                    }
                    title="Weather Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{" "}
                        {info.humidity > 80 ? (
                            <ThunderstormIcon />
                        ) : info.temp > 15 ? (
                            <WbSunnyIcon />
                        ) : (
                            <AcUnitIcon />
                        )}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="span">
                        <div>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}%</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>The Weather can be described as '{info.weather}' and feels like {info.feelsLike}&deg;C</p>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

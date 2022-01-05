import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/lab';
import useStyles from './styles';
const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData}) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');
    
    
    return (

        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLkeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={(child) => setChildClicked}
            > 
            {places?.map((place) => (
                <div className={classes.markerContainer} lat={Number(place.latitude)} lng={Number(place.longitude)} key={1}>
                      {isDesktop ? (
                          <LocationOnOutlinedIcon color="primary" fontSize="large" />
                      ) : (
                          <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.typography} variant="subtitle2" gutterButtom>
                                    {place.name}
                                </Typography>
                                <img  className={classes.pointer} src={place.photo ? place.photo.images.large.url : 'https://www.google.com/search?q=restaurant+image&sxsrf=AOaemvIgUSvsqW7a_L4cypQx5pub4dHoIg:1641327695043&tbm=isch&source=iu&ictx=1&fir=NXzmoFL6p3cnUM%252C8gSFC4td7_0SrM%252C_%253B6or0FvNSe6SXaM%252CayRO4X2syV2QNM%252C_%253BqBMcHdj0QGItmM%252C8gSFC4td7_0SrM%252C_%253BxKyttau6iI9LLM%252CtbiFbpFouo8aMM%252C_%253BaYYQMuOYpJY_uM%252C8gSFC4td7_0SrM%252C_%253Bp2IwX1fAMOvxFM%252CtbiFbpFouo8aMM%252C_%253B8pYty70OGEB7EM%252C8gSFC4td7_0SrM%252C_%253BVgOtQpKXdSkd_M%252CtbiFbpFouo8aMM%252C_%253B78-oHNm-5ut5hM%252C8gSFC4td7_0SrM%252C_%253B0L8ZobpqVxUlYM%252CayRO4X2syV2QNM%252C_%253Bvz42Chmlpec0dM%252C8gSFC4td7_0SrM%252C_%253BtFHZC5d33XMmXM%252CtbiFbpFouo8aMM%252C_%253BsR-CRVgVlsX8iM%252CGJpv6Vju4A3OkM%252C_&vet=1&usg=AI4_-kQEblAjL1tvG4YlrbEUzMmdhq3HXQ&sa=X&ved=2ahUKEwiA_uOR9pj1AhVNrxoKHZXoB1IQ9QF6BAgEEAE#imgrc=NXzmoFL6p3cnUM'} alt={place.name}/>
                                <Rating size="small" value={Number(place.rating)} readonly/>
                          </Paper>
                      )}
                </div>
            ))}
            {weatherData?.list?.map((data, i) => (
                <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                    <img height={100} src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
                </div>
            ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map;
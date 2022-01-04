import React from 'react'
import { Box, Typography, Button, Card, CardContent, CardMedia, CardActions, Chip } from '@mui/material'
import useStyles from './styles'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/lab/Rating'
const PlaceDetails = ({ place }) => {
    const classes = useStyles();
    return (
        <Card elevation={6}>
            <CardMedia 
                style={{ height: 350}}
                image={place.photo ? place.photo.images.large.url : 'https://www.google.com/search?q=restaurant+image&sxsrf=AOaemvIgUSvsqW7a_L4cypQx5pub4dHoIg:1641327695043&tbm=isch&source=iu&ictx=1&fir=NXzmoFL6p3cnUM%252C8gSFC4td7_0SrM%252C_%253B6or0FvNSe6SXaM%252CayRO4X2syV2QNM%252C_%253BqBMcHdj0QGItmM%252C8gSFC4td7_0SrM%252C_%253BxKyttau6iI9LLM%252CtbiFbpFouo8aMM%252C_%253BaYYQMuOYpJY_uM%252C8gSFC4td7_0SrM%252C_%253Bp2IwX1fAMOvxFM%252CtbiFbpFouo8aMM%252C_%253B8pYty70OGEB7EM%252C8gSFC4td7_0SrM%252C_%253BVgOtQpKXdSkd_M%252CtbiFbpFouo8aMM%252C_%253B78-oHNm-5ut5hM%252C8gSFC4td7_0SrM%252C_%253B0L8ZobpqVxUlYM%252CayRO4X2syV2QNM%252C_%253Bvz42Chmlpec0dM%252C8gSFC4td7_0SrM%252C_%253BtFHZC5d33XMmXM%252CtbiFbpFouo8aMM%252C_%253BsR-CRVgVlsX8iM%252CGJpv6Vju4A3OkM%252C_&vet=1&usg=AI4_-kQEblAjL1tvG4YlrbEUzMmdhq3HXQ&sa=X&ved=2ahUKEwiA_uOR9pj1AhVNrxoKHZXoB1IQ9QF6BAgEEAE#imgrc=NXzmoFL6p3cnUM'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterButtom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                <Rating value={Number(place.rating)} readonly/>
                    <Typography gutterButtom variant="subtitle1">out of {place.num_reviews}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display.name}/> 
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}
                {place?.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle} >
                          <LocationOnIcon /> {place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing} >
                          <PhoneIcon /> {place.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web.url, '_blank')}>
                        Trip Advisor   
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.wesite, '_blank')}>
                        Website   
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default PlaceDetails;
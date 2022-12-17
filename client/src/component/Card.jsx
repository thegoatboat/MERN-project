import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';


const Cards = ({item}) => {
  return (
  
        
        

    <Link className="link" to={`/product/${item.id}`}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardMedia

          component="img"
          height="140"
          image={item.img}
          alt="product image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <h1>{item.titel}</h1>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  )
}

export default Cards
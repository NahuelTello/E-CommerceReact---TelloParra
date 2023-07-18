
import ListProduct from '../../components/ListProduct/ListProduct'

import { CardMedia} from '@mui/material';
import imageHeader from '../../assets/img/header.png' 

const HomePage = () => {
  return (
    <div className='HomeContainer'>
      <CardMedia
          component='img'
          image={imageHeader}
          title='header'
          sx={{
            display: 'flex',
            margin: 'auto',
            width: '1000px',
            height: '250px',
            marginTop: '10px',
            marginBottom: '25px',
            borderRadius: '30px'
          }}
        /> 
  
      <ListProduct />
    </div>
  );
};


export default HomePage
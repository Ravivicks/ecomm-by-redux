import { useState } from 'react';

import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

//import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Actions/CartAction';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px',
    width: '90%'
});

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    borderRadius: 2,
    height: 50,
    color: '#FFF',
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('md')]: {
        width: '48%'
    }
}))

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const { id } = product;
        
    const [quantity] = useState(1);
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    return (
        <LeftContainer>
            <Box style={{padding: '15px 20px',border: '1px solid #f0f0f0',width: '90%'}}>
            <Image src={product.image} /><br />
            </Box>
            <Box style={{marginTop: '10px'}}>
            <StyledButton 
             onClick={() => addItemToCart()} 
            style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
            <StyledButton 
            //onClick={() => buyNow()} 
            style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
            </Box>
        </LeftContainer>
    )
}

export default ActionItem;
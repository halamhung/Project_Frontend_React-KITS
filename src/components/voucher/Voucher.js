import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch } from '../../redux/VoucherSlice';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, CircularProgress, Box, Divider, TextField, Input, useMediaQuery } from '@mui/material';
import "./Voucher.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Voucher() {
    const dispatch = useDispatch();
    const vouchers = useSelector((state) => state.vouchers.vouchers);
    const [buttonTexts, setButtonTexts] = useState({});
    const copyInputRefs = useRef({});

    const copyIt = (index) => {
        const copyInput = copyInputRefs.current[index];
        if (copyInput) {
            copyInput.select();
            document.execCommand('copy');

            setButtonTexts((prev) => ({ ...prev, [index]: 'ĐÃ SAO CHÉP' }));

            setTimeout(() => {
                setButtonTexts((prev) => ({ ...prev, [index]: 'SAO CHÉP' }));
            }, 15000);
        }
    };

    useEffect(() => {
        dispatch(fetch());
    }, [dispatch]);

    const isMdUp = useMediaQuery('(min-width:960px)');
    const isSmUp = useMediaQuery('(min-width:600px)');

    const slidesToShow = isMdUp ? 3 : isSmUp ? 2 : 1;

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <Slider {...carouselSettings}>
            {vouchers.slice(2).map((item, index) => (
                <Box key={index} sx={{ padding: "2px", display: 'flex', justifyContent: 'center' }}>
                    <Card style={{
                        width: '100%',
                        maxWidth: '90%',
                        margin: '0 10px',
                        padding: '10px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s',
                        borderRadius: '7px',
                        backgroundColor: '#fff',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.6)',
                        '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' },
                        '&:active': { boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.3)' },
                    }}>
                        <Box style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <Box style={{ marginBottom: '10px' }}>
                                <img
                                    className='img-voucher'
                                    src="https://i.pinimg.com/originals/c7/84/67/c78467db9ff497393cb548a48f02d451.png"
                                    alt="Voucher"
                                    width="70"
                                    height="50"
                                />
                            </Box>
                            <Divider orientation="vertical" flexItem style={{ margin: '0 10px' }} />
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <Typography variant="h4">Voucher</Typography>
                                <Typography variant="body2">{item.name}</Typography>
                                <Typography variant="h5">
                                    {item.value}%<span> Coupon</span>
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                            <Input
                                id={`copyvalue-${index + 2}`}
                                inputRef={(el) => (copyInputRefs.current[index + 2] = el)}
                                value={item.value_name}
                                InputProps={{ readOnly: true }}
                                variant="outlined"
                                size="small"
                                style={{ border: 'none', marginRight: '10px' }}
                            />
                            <Button
                                variant="contained"
                                onClick={() => copyIt(index + 2)}
                                className="copybtn"
                            >
                                {buttonTexts[index + 2] || 'SAO CHÉP'}
                            </Button>
                        </Box>
                    </Card>
                </Box>
            ))}
        </Slider>
    );
}

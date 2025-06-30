import { styled, Typography, IconButton } from '@mui/material';
import { useState } from 'react';
import SliderCard from './CardSlider';
import { bookingData } from '../../../../mocks/sliderCardMocks';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const BookingSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsPerPage = 4; // Показываем 4 карточки одновременно
    const totalItems = bookingData.length;
    const maxIndex = Math.max(0, totalItems - itemsPerPage);

    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    };

    // Простой расчет сдвига - показываем только видимые карточки
    const cardWidth = 268; // 252 (ширина карточки) + 16 (отступ)
    const translateX = -currentIndex * cardWidth;

    return (
        <SliderContainer>
            {/* Заголовок с навигацией */}
            <SliderHeader>
                <HeaderInfo>
                    <Title>Newest Booking</Title>
                    <Subtitle>{totalItems} Bookings</Subtitle>
                </HeaderInfo>
                
                <NavigationButtons>
                    <NavButton 
                        onClick={handlePrev} 
                        disabled={currentIndex === 0}
                    >
                        <ChevronLeftIcon />
                    </NavButton>
                    <NavButton 
                        onClick={handleNext} 
                        disabled={currentIndex >= maxIndex}
                    >
                        <ChevronRightIcon />
                    </NavButton>
                </NavigationButtons>
            </SliderHeader>

            {/* Контейнер слайдера */}
            <SliderWrapper>
                <SliderTrack style={{ transform: `translateX(${translateX}px)` }}>
                    {bookingData.map((booking, _index) => (
                        <CardContainer key={booking.id}>
                            <SliderCard booking={booking} />
                        </CardContainer>
                    ))}
                </SliderTrack>
            </SliderWrapper>
        </SliderContainer>
    );
};

const SliderContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: '100%',
});

const SliderHeader = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
});

const HeaderInfo = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
});

const Title = styled(Typography)({
    color: '#212B36',
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 1.5,
});

const Subtitle = styled(Typography)({
    color: '#637381',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
});

const NavigationButtons = styled('div')({
    display: 'flex',
    gap: 8,
});

const NavButton = styled(IconButton)(({ disabled }) => ({
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: disabled ? '#F5F5F5' : '#fff',
    color: disabled ? '#C4C4C4' : '#637381',
    padding: 8,
    '&:hover': {
        backgroundColor: disabled ? '#F5F5F5' : '#F8F9FA',
    },
    '& svg': {
        fontSize: 20,
    }
}));

const SliderWrapper = styled('div')({
    overflow: 'hidden',
    width: 1088,
    position: 'relative',
});

const SliderTrack = styled('div')({
    display: 'flex',
    transition: 'transform 0.3s ease-in-out',
    width: 'fit-content',
});

const CardContainer = styled('div')({
    flexShrink: 0,
    marginRight: 16,
    '&:last-child': {
        marginRight: 0,
    }
});

export default BookingSlider;
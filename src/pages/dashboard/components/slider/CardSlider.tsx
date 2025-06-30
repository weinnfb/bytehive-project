import { styled, Typography } from "@mui/material";
import { CalendarIcon } from "../../../../icons/CalendarIcon";
import { GuestsIcon } from "../../../../icons/GuestsIcon";
import type { BookingData } from "../../../../mocks/sliderCardMocks";

interface BookingCardProps {
    booking: BookingData;
}

const SliderCard = ({ booking }: BookingCardProps) => {
    return (
        <CardWrapper>
            <CardHeader>
                <UserAvatar src={booking.userAvatar} />
                <UserDetail>
                    <UserName>{booking.userName}</UserName>
                    <BookingTime>{booking.bookingTime}</BookingTime>
                </UserDetail>
            </CardHeader>

            <BookingInfo>
                <Duration>
                    <CalendarIcon />
                    <InfoText>{booking.duration} {booking.nights} nights</InfoText>
                </Duration>
                <Guests>
                    <GuestsIcon />
                    <InfoText>{booking.guests} Guests</InfoText>
                </Guests>
            </BookingInfo>

            <ImageContainer>
                <LocationImage src={booking.img} alt={booking.userName} />
                <PriceTag>${booking.price}</PriceTag>
            </ImageContainer>
        </CardWrapper>
    )
}

const CardWrapper = styled('div')({
    display: 'flex',
    flexDirection: "column",
    padding: '20px 8px 8px 8px',
    width: 252,
    gap: 16,
    borderRadius: 16,
    background: '#F4F6F8'
});

const CardHeader = styled("div")({
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    padding: "0px 8px 0px 8px"
});

const UserAvatar = styled('img')({
    width: 40,
    height: 40,
    borderRadius: '50%', 
    objectFit: 'cover'
});

const UserDetail = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    alignItems: 'flex-start'
});

const UserName = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.5,
}));

const BookingTime = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[200],
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.5,
}));

const BookingInfo = styled('div')({
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    padding: "0px 8px 0px 8px" 
});

const Duration = styled('div')({
    display: 'flex',
    gap: 4,
    alignItems: 'center'
});

const InfoText = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.5,
}));

const Guests = styled('div')({
    display: 'flex',
    gap: 4,
    alignItems: 'center'
});

const ImageContainer = styled('div')({
    position: 'relative',
    width: '100%',
    height: 236,
    borderRadius: 12,
    overflow: 'hidden',
});

const LocationImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

const PriceTag = styled('div')({
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#212B36',
    color: '#fff',
    padding: '2px 6px',
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 700,
});

export default SliderCard;
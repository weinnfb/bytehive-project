import { reviewsData } from "../../../../mocks/reviewCardMocks";
import { styled, Typography, Rating, IconButton, Chip, Avatar } from "@mui/material";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useState } from 'react';

const CustomerReviews = () => {

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const currentReview = reviewsData[currentReviewIndex];
    const totalReviews = reviewsData.length;
    const handlePrevious = () => {
        setCurrentReviewIndex((prev) =>
            prev === 0 ? totalReviews - 1 : prev - 1
        );
    };
    const handleNext = () => {
        setCurrentReviewIndex((prev) =>
            prev === totalReviews - 1 ? 0 : prev + 1
        );
    };

    return (
        <ReviewCard>
            <CardHeader>
                <HeaderInfo>
                    <Title>Customer Reviews</Title>
                    <Subtitle>{totalReviews} Reviews</Subtitle>
                </HeaderInfo>
                <NavigationButtons>
                    <StyledIconButton onClick={handlePrevious}>
                        <ChevronLeft />
                    </StyledIconButton>
                    <StyledIconButton onClick={handleNext}>
                        <ChevronRight />
                    </StyledIconButton>
                </NavigationButtons>
            </CardHeader>
            <ReviewContent>
                <UserInfo>
                    <UserAvatar
                        src={currentReview.userAvatar}
                    >
                        {currentReview.userName.charAt(0)}
                    </UserAvatar>
                    <UserDetails>
                        <UserName>{currentReview.userName}</UserName>
                        <ReviewDate>{currentReview.date}</ReviewDate>
                    </UserDetails>
                </UserInfo>

                <RatingContainer>
                    <StyledRating
                        value={currentReview.rating}
                        readOnly
                        size="large"
                    />
                </RatingContainer>

                <CommentText>
                    {currentReview.comment}
                </CommentText>

                <TagsContainer>
                    {currentReview.tags.map((tag, index) => (
                        <StyledChip
                            key={index}
                            label={tag}
                            variant="outlined"
                        />
                    ))}
                </TagsContainer>
            </ReviewContent>

            <ActionButtons>
                <RejectButton>
                    Reject
                </RejectButton>
                <AcceptButton>
                    Accept
                </AcceptButton>
            </ActionButtons>
        </ReviewCard>
    )
}


const ReviewCard = styled('div')({
    display: 'flex',
    width: '100%',
    maxWidth: 600, 
    minHeight: 460, 
    padding: '24px 16px 24px 24px', 
    background: '#fff',
    borderRadius: 16,
    flexDirection: 'column',
    gap: 24,
    boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.20), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)'

});

const CardHeader = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

const HeaderInfo = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 1.5,
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
}));

const NavigationButtons = styled('div')({
    display: 'flex',
    gap: 8,
});

const StyledIconButton = styled(IconButton)({
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    '&:hover': {
        backgroundColor: '#F9FAFB',
        borderColor: '#D1D5DB',
    },
});

const ReviewContent = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'flex-start'
});

const UserInfo = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: 16,
});

const UserAvatar = styled(Avatar)({
    width: 48,
    height: 48,
});


const UserDetails = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
});

const UserName = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.5,
}));


const ReviewDate = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[200],
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.5,
}));


const RatingContainer = styled('div')({
    display: 'flex',
    gap: 8
});

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#FFAB00',
    },
    '& .MuiRating-iconEmpty': {
        color: '#919EAB',
    },
});

const CommentText = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
}));

const TagsContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    width: '100%',
});


const StyledChip = styled(Chip)({
    backgroundColor: 'rgba(145, 158, 171, 0.08)',
    color: '##212B36',
    border: 'none',
    fontSize: 13,
    fontWeight: 500,
    padding: 3,
});

const ActionButtons = styled('div')({
    display: 'flex',
    gap: 16,
    paddingTop: 24, 
    borderTop: '1px dashed rgba(145, 158, 171, 0.20)',
    marginTop: 'auto',
});


const RejectButton = styled('button')({
    flex: 1,
    padding: '6px 12px',
    backgroundColor: 'rgba(255, 86, 48, 0.08)',
    color: '#B71D18',
    border: 'none',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
        backgroundColor: '#FEE2E2',
    },
});

const AcceptButton = styled('button')({
    flex: 1,
    padding: '6px 12px',
    backgroundColor: '#212B36',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
        backgroundColor: '#111827',
    },
});

export default CustomerReviews;
import { styled, Typography } from "@mui/material";

interface StatCardProps {
    value: string;
    label: string;
    img: string;
}

const StatCard = ({ value, label, img }: StatCardProps) => {
    return (
        <CardWrapper>
            <TextPart>
                <Value>{value}</Value>
                <Label>{label}</Label>
            </TextPart>
            <ImageWrapper>
                <CardImg src={img} />
            </ImageWrapper>
        </CardWrapper>
    )
}

const CardWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px 16px 16px 24px',
    minWidth: 344,
    borderRadius: 16,
    background: "#fff",
    boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.20), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)'
});

const TextPart = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    alignItems: 'flex-start'
});

const Value = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 1.5
}));

const Label = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.5
}));

const ImageWrapper = styled('div')({
    display: 'flex',
    width: 120,
    height: 120,
});

const CardImg = styled('img')({
    width:'100%',
    height: '100%'
});

export default StatCard;
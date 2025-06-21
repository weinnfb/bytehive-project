export interface StatItem {
    value: string;
    label: string;
    img: string;
}

export const analyticStats: StatItem[] = [
    {
        value: '8,2k',
        label: 'Total Booking',
        img: '/overviewBooking.png',
    },
    {
        value: '311k',
        label: 'Sold',
        img: '/overviewIncome.png',
    },
    {
        value: '124k',
        label: 'Canceled',
        img: '/overviewCancaled.png',
    },
];
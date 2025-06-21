export interface StatItem {
    value: string;
    label: string;
    img: string;
}

export const overviewStats: StatItem[] = [
    {
        value: '95,500',
        label: 'Total Booking',
        img: '/overviewBooking.png',
    },
    {
        value: '352,500$',
        label: 'Income',
        img: '/overviewIncome.png',
    },
    {
        value: '20,388',
        label: 'Canceled',
        img: '/overviewCancaled.png',
    },
];
export interface StatisticData {
    year: string;
    sold: number;
    canceled: number;
}

export const statisticData: StatisticData[] = [
    {
        year: '2017',
        sold: 27,
        canceled: 23,
    },
    {
        year: '2018',
        sold: 45,
        canceled: 32,
    },
    {
        year: '2019',
        sold: 18,
        canceled: 28
    },
    {
        year: '2020',
        sold: 32,
        canceled: 22
    },
    {
        year: '2021',
        sold: 35,
        canceled: 15
    },
    {
        year: '2022',
        sold: 33,
        canceled: 8
    },
    {
        year: '2023',
        sold: 87,
        canceled: 41
    }
];

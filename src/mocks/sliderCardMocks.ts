export interface BookingData {
    id: string;
    userName: string;
    userAvatar: string;
    bookingTime: string;
    duration: string;
    nights: number;
    guests: number;
    price: number;
    img: string;
}

export const bookingData: BookingData[] = [
    {
        id: '1',
        userName: 'Lucian Obrien',
        userAvatar: '/avatars/avatar1.png',
        bookingTime: '11 Aug 2022 9:00 PM',
        duration: '3 days',
        nights: 2,
        guests: 5,
        price: 72,
        img: '/cardDestinationImage/card1.png'
    },
    {
        id: '2',
        userName: 'Harrison Stein',
        userAvatar: '/avatars/avatar2.png',
        bookingTime: '09 Aug 2022 7:00 PM',
        duration: '3 days',
        nights: 2,
        guests: 3,
        price: 72,
        img: '/cardDestinationImage/card2.png',
    },
    {
        id: '3',
        userName: 'Jayvion Simon',
        userAvatar: '/avatars/avatar3.png',
        bookingTime: '12 Aug 2022 10:00 PM',
        duration: '3 days',
        nights: 2,
        guests: 1,
        price: 72,
        img: '/cardDestinationImage/card3.png',
    },
    {
        id: '4',
        userName: 'Deja Brady',
        userAvatar: '/avatars/avatar3.png',
        bookingTime: '10 Aug 2022 8:00 PM',
        duration: '3 days',
        nights: 2,
        guests: 5,
        price: 72,
        img: '/cardDestinationImage/card4.png',
    },
    {
        id: '5',
        userName: 'Alex Johnson',
        userAvatar: '/avatars/avatar1.png',
        bookingTime: '08 Aug 2022 6:30 PM',
        duration: '2 days',
        nights: 1,
        guests: 2,
        price: 72,
        img: '/cardDestinationImage/card1.png',
    },
    {
        id: '6',
        userName: 'Mira Schultz',
        userAvatar: '/avatars/avatar2.png',
        bookingTime: '07 Aug 2022 5:45 PM',
        duration: '4 days',
        nights: 3,
        guests: 4,
        price: 70,
        img: '/cardDestinationImage/card2.png',
    },
    {
        id: '7',
        userName: 'Mira Schultz',
        userAvatar: '/avatars/avatar3.png',
        bookingTime: '07 Aug 2022 5:45 PM',
        duration: '4 days',
        nights: 3,
        guests: 4,
        price: 65,
        img: '/cardDestinationImage/card3.png',
    },
    {
        id: '8',
        userName: 'Nia Anderson',
        userAvatar: '/avatars/avatar1.png',
        bookingTime: '05 Aug 2022 3:00 PM',
        duration: '5 days',
        nights: 4,
        guests: 6,
        price: 78,
        img: '/cardDestinationImage/card4.png',
    }

]
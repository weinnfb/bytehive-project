export interface ReviewData {
    id: number;
    userName: string;
    userAvatar: string;
    date: string;
    rating: number;
    comment: string;
    tags: string[];
}

export const reviewsData: ReviewData[] = [
    {
        id: 1,
        userName: "Jayvion Simon",
        userAvatar: "/avatars/avatar1.png",
        date: "12 Aug 2022 10:00 PM",
        rating: 3,
        comment: "Assumenda nam repudiandae rerum fugiat vel maxime.",
        tags: ["Great Service", "Recommended", "Best Price"]
    },
    {
        id: 2,
        userName: "Alice Johnson",
        userAvatar: "/avatars/avatar2.png",
        date: "15 Aug 2022 2:30 PM",
        rating: 5,
        comment: "Excellent experience! The service exceeded my expectations in every way. I would definitely recommend this to my friends and family.",
        tags: ["Outstanding", "Fast Delivery", "Quality", "Professional"]
    },
    {
        id: 3,
        userName: "Mike Chen",
        userAvatar: "/avatars/avatar3.png",
        date: "18 Aug 2022 9:15 AM",
        rating: 4,
        comment: "Very good service overall. Minor improvements could be made but I'm satisfied with the result.",
        tags: ["Good Value", "Professional", "Timely"]
    },
    {
        id: 4,
        userName: "Sarah Williams",
        userAvatar: "/avatars/avatar4.png",
        date: "20 Aug 2022 3:45 PM",
        rating: 5,
        comment: "Amazing quality and customer support. The team went above and beyond to ensure everything was perfect.",
        tags: ["Excellent", "Customer Support", "High Quality"]
    },
    {
        id: 5,
        userName: "David Brown",
        userAvatar: "/avatars/avtar4.png",
        date: "22 Aug 2022 11:20 AM",
        rating: 2,
        comment: "Service was okay but there were some issues with delivery timing. Could be improved.",
        tags: ["Average", "Needs Improvement"]
    }
];
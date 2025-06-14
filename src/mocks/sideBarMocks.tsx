import type { ReactNode } from "react";
import { OverviewIcon } from "../icons/OverviewIcon";
import { AnalyticsIcon } from "../icons/Analyticsicon";
import { BookingIcon } from "../icons/BookingIcon";


export interface TabItem {
    label: string;
    value: string;
    icon: ReactNode;
};

export const dashboardTabs: TabItem[] = [
    {
        label: 'Overview',
        value: 'overview',
        icon: <OverviewIcon />
    },
    {
        label: 'Analytics',
        value: 'analytics',
        icon: <AnalyticsIcon />,
    },
    {
        label: 'Booking',
        value: 'booking',
        icon: <BookingIcon />,
    },
];

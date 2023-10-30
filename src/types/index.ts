export type ReservationItemType = {
    id: string;
    name: string;
    phone: string;
    reservationDate: string;
    guestCount: number;
    reservedTable?: Array<number>;
    note?: string;
    isSeated: boolean;
};

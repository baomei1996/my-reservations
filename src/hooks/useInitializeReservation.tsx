import React, { useMemo } from "react";
import { ReservationItemType } from "@/types";
import { SELECT_TABLE_OPTIONS } from "@/static/constants";

interface IUseInitializeReservation {
    isEditMode: boolean;
    reservation?: ReservationItemType;
}

export default function useInitializeReservation({
    isEditMode,
    reservation,
}: IUseInitializeReservation) {
    const initReservation = useMemo(() => {
        const edit = isEditMode && reservation;
        const name = edit ? reservation?.name : "";
        const phone = edit ? reservation?.phone : "";
        const guestCount = edit ? reservation?.guestCount : 1;
        const reservedTable = edit
            ? reservation?.reservedTable ?? []
            : [SELECT_TABLE_OPTIONS[0].value as number];
        const reservationDate = edit
            ? new Date(reservation?.reservationDate)
            : new Date();
        const note = edit ? reservation?.note ?? "" : "";

        return {
            name,
            phone,
            guestCount,
            reservedTable,
            reservationDate,
            note,
        };
    }, [isEditMode, reservation, SELECT_TABLE_OPTIONS]);

    return initReservation;
}

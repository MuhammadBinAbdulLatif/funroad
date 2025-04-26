import { RefObject } from "react";

export const useDropdownPosition = (
    ref: React.RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>,

) => {
    const getDropdownPosition = () => {
        if(!ref.current) return {top: 0, left: 0};
        const rect = ref.current.getBoundingClientRect();
        const dropDonwWidth = 240;

        // calculate the initial position
        let left = rect.left + window.scrollX
        const top = rect.bottom + window.scrollY
        if(left + dropDonwWidth > window.innerWidth) {
            left = rect.right + window.scrollX - dropDonwWidth
            if(left < 0) {
                left = window.innerWidth - dropDonwWidth - 16
            }
        }
        if(left < 0) {
            left = 16
        }
        return {top, left}
    }
    return {getDropdownPosition}
}
import React from "react";
import { CardData } from "../lib/types";

type CardProps = {
    idx: number
    data: CardData
    disabled?: boolean
    isWin?: boolean;
    marked?: boolean;
    onClick: () => void
}

const Card:React.FC<CardProps> = ({idx, data, disabled, isWin=false, marked=false, onClick}) => {
    const isSelected = marked && idx !==12
    const isWinWithCenter = isWin && idx !== 12

    const resolveCardStyles = () => {
        const baseStyles = "relative rounded-lg p-3 h-12 w-18 text-[0.4rem] md:text-sm md:h-20 md:w-32 lg:text-base lg:h-28 lg:w-40 2xl:text-xl 2xl:h-36 2xl:w-52 flex justify-center items-center shadow-lg "
        if(isWinWithCenter) {
            return baseStyles + "bg-green-500/50 border border-green-600 border-opacity-30 text-green-600 font-semibold hover:bg-green-500/40 hover:border-green-400"
        } else if(isSelected) {
            return baseStyles + "relative rounded-lg p-3 h-12 w-18 text-[0.4rem] md:text-sm md:h-20 md:w-32 lg:text-base lg:h-28 lg:w-40 2xl:text-xl 2xl:h-36 2xl:w-52 flex justify-center items-center shadow-lg border border-slate-300 bg-slate-200 hover:bg-slate-200/80 hover:border hover:border-slate-300"
        } else {
            return baseStyles + `relative rounded-lg p-3 h-12 w-18 text-[0.4rem] md:text-sm md:h-20 md:w-32 lg:text-base lg:h-28 lg:w-40 2xl:text-xl 2xl:h-36 2xl:w-52 flex justify-center items-center shadow-lg bg-white border hover:border-slate-200  hover:bg-slate-50 ${idx===12 && "border-2 border-slate-500 hover:border-slate-500"}`
        }
    }

    return (
        <button disabled={disabled} onClick={onClick} className={resolveCardStyles()}>
        <p></p>
        <p className={` ${isSelected && "line-through"}`} title={`${data.content}`}>{data.content}</p>
        </button>
    )
}

export default Card
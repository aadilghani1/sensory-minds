import { CardData } from "../lib/types";

/**
 * Check if the index in an array comes within a winning row
 * @param data Array that contains all the card data
 * @param index The index of the card you want to check if it is within the winning row
 * @returns boolean
 */
export const checkRows = (data:Array<CardData>, index:number) => {
    const rowStart = Math.floor(index / 5) * 5;
    for (let i = rowStart; i < rowStart + 5; i++) {
      if (!data[i].marked) {
        return false;
      }
    }
    return true;
  }

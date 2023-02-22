import { CardData } from "../lib/types";

/**
 * Check if the index in an array comes within a winning column
 * @param data Array that contains all the card data
 * @param index The index of the card you want to check if it is within the winning column
 * @returns boolean
 */
export const checkColumns = (data:Array<CardData>, index:number) => {
    const colStart = index % 5;
    for (let i = colStart; i < data.length; i += 5) {
      if (!data[i].marked) {
        return false;
      }
    }
    return true;
  }
  
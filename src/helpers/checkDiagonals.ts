import { CardData } from "../lib/types";

/**
 * Check if the index in an array comes within a winning diagonal
 * @param data Array that contains all the card data
 * @param index The index of the card you want to check if it is within the winning row
 * @returns boolean
 */
export const checkDiagonal = (data:Array<CardData>, index:number) => {
    // top-left to bottom-right
    if (index % 6 === 0) {
      for (let i = 0; i < data.length; i += 6) {
        if (!data[i].marked) {
          return false;
        }
      }
      return true;
    }
    
    // top-right to bottom-left
    if (index % 4 === 0 && index !== 0 && index !== 24) {
      for (let i = 4; i < data.length - 4; i += 4) {
        if (!data[i].marked) {
          return false;
        }
      }
      return true;
    }
    
    return false;
  }
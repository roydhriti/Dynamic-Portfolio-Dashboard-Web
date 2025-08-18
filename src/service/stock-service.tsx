import { apiClient } from "../config/apiClient";

export const fetchStockDataAPI = (symbol: any): Promise<any> =>
  apiClient<any>(`/portfolio/stock-price?symbol=${symbol}`, "GET");

export const fetchPortfolioStockAPI = (): Promise<any> =>
  apiClient<any>("/portfolio/stock-price/", "GET");

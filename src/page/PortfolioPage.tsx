import PortfolioTable from "../components/table/PortfolioTable";

const PortfolioPage = () => {
  const portfolio = [
    { symbol: "TCS", name: "Tata Consultancy Services", purchasePrice: 3500, quantity: 5, exchange: "NSE" },
    { symbol: "RELIANCE", name: "Reliance Industries", purchasePrice: 2500, quantity: 10, exchange: "NSE" },
    { symbol: "INFY", name: "Infosys", purchasePrice: 1800, quantity: 8, exchange: "NSE" },
    { symbol: "HDFCBANK", name: "HDFC Bank", purchasePrice: 1600, quantity: 12, exchange: "NSE" },
    { symbol: "ICICIBANK", name: "ICICI Bank", purchasePrice: 900, quantity: 15, exchange: "NSE" },
    { symbol: "HINDUNILVR", name: "Hindustan Unilever", purchasePrice: 2800, quantity: 6, exchange: "NSE" },
    { symbol: "SBIN", name: "State Bank of India", purchasePrice: 650, quantity: 20, exchange: "NSE" },
    { symbol: "ITC", name: "ITC Limited", purchasePrice: 450, quantity: 30, exchange: "NSE" },
    { symbol: "LT", name: "Larsen & Toubro", purchasePrice: 3100, quantity: 4, exchange: "NSE" },
    { symbol: "AXISBANK", name: "Axis Bank", purchasePrice: 950, quantity: 10, exchange: "NSE" },
    { symbol: "BAJFINANCE", name: "Bajaj Finance", purchasePrice: 7000, quantity: 2, exchange: "NSE" },
    { symbol: "SUNPHARMA", name: "Sun Pharma", purchasePrice: 1250, quantity: 8, exchange: "NSE" },
    { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank", purchasePrice: 1750, quantity: 6, exchange: "NSE" },
    { symbol: "MARUTI", name: "Maruti Suzuki", purchasePrice: 10500, quantity: 2, exchange: "NSE" },
    { symbol: "TATAMOTORS", name: "Tata Motors", purchasePrice: 900, quantity: 12, exchange: "NSE" },
  ];

  return (
    <>
      <div className="flex">
        <PortfolioTable portfolio={portfolio} />
      </div>
    </>
  );
};

export default PortfolioPage;

// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import PortfolioTable from "../components/table/PortfolioTable";
// import { useState } from "react";
// import { fetchPortfolioStockAPI } from "../service/stock-service";
// import { toast } from "react-toastify";

// const PortfolioPage = () => {
//   const {
//     data = [],
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["PortfolioStockQuery"],
//     queryFn: async () => {
//       try {
//         const response = await fetchPortfolioStockAPI();
//         console.log("responseresponse: ", response);
//         return response || [];
//       } catch (error: any) {
//         toast.error(error.message || "Error fetching tokenizations");
//         throw error;
//       }
//     },
//   });

//   console.log("data: ", data);

//   return (
//     <>
//       <div className="flex">{data && <PortfolioTable portfolio={data} />}</div>
//     </>
//   );
// };

// export default PortfolioPage;

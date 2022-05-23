export interface MarketDataModel {
    marketDataId?: number;
    region: string;
    country: string;
    year: number;
    month?: number;
    quarter: number;
    businessSegment: string;
    productLine: string;
    lob: string;
    units?: number;
    // series: string;
    // priceBand: string;
    // rank?: number;
    // brand: string;
    // configuration: string;
    // asp: number;
    // aI_OrderCodeId?: string;
    // aI_Platform?: string;
    // aI_FhcPlatform?: string;
    // aI_FhcName?: string;
    // aI_FhcSummary?: string;
    // otherConfigsTotalSold?: number;
    // configTotalSold?: number;
    // share?: number;
}
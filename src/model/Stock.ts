export interface ITicker
{
    ticker: string,
    tickerDesc: string,
    filledAt: number,
    filledAtOut: number,
    qty: number,
    status: string,
    last: number,
}
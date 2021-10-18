export interface getUserResponse {
    id: string | null;
    name: string | null;
    points: number | null;
    createDate: string | null;
    redeemHistory: string[] | null;
    __V: number | null;
}

export interface getProductsResponse {
    img: any;
    nameProduct: string;
    cost: number;
    category: string;
}
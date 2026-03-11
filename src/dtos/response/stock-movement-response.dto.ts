import type { ProductVariationResponseDto } from "./product-variation-response.dto";

export type StockMovementType = "IN" | "OUT";

export interface StockMovementResponseDto {
  id: string;
  productName: string;
  variation: ProductVariationResponseDto;
  quantity: number;
  type: StockMovementType;
  reason: string;
  paymentMethod: string;
  responsibleName: string;
  responsibleEmail: string;
  observation?: string;
  createdAt: Date;
}

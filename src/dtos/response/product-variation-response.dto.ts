import type { ImageResponse } from "./image-response.dto";

export interface ProductVariationResponseDto {
  id: string;
  name: string;
  price?: string | number;
  stock: number | string;
  isActive?: boolean;
  color: string;
  size: string;
  imageUrl?: string;
  images?: ImageResponse[];
  createdAt: string;
  updatedAt: string;
}

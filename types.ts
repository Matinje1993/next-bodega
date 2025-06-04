export interface Product {
  id: number;
  ean?: string;
  category?: Array<{
    id: string;
    level: number;
    name: string;
    url: string;
  }>;
  name: string;
  type?: string;
  preorder?: boolean;
  isExpress?: boolean;
  brand?: {
    id: string | number;
    name: string;
  };
  highlight?: string;
  description?: string;
  productOrigin?: string;
  supplier?: string;
  delivery?: any[]; // You can refine this type if you have delivery details
  isBulk?: boolean;
  bulkMessage?: string;
  availability?: {
    isAvailable: boolean;
    max: number;
  };
  size?: string;
  isScalable?: boolean;
  price?: {
    currency: string;
    price: number;
    formattedValue: string;
    minBuyingValue?: string;
    discount?: Discount;
  };
  isFBC?: boolean;
  offers?: Array<{
    id: string;
    sellerName: string;
    shopId: string;
    type: string;
    purchaseIndicators?: {
      [key: string]: string[];
    };
    shippingIndicator?: string;
  }>;
  stock?: {
    stockLevelStatus?: string; // e.g. "lowStock"
    value?: number;
  };
  unit?: {
    unitOfMeasure?: string;
    itemsPerUnit?: number;
    incrementBy?: number;
    size?: string;
    max?: number;
    min?: number;
    unitItem?: number;
    maxToOrder?: number;
  };
  variants?: any[]; // You can add a type for variants if available
  isMarketPlace?: boolean;
  foodType?: string;
  promoVoucher?: Record<string, unknown>;
  promoBadges?: any[];
  productCategoriesHearchi?: string;
  deliveryFees?: {
    freeDeliveryThreshold?: number;
  };
  amendableOrders?: any[];
  soldByWeight?: boolean;
  servingIntents?: string[];
  links?: {
    images?: Array<{
      rel: string;
      href: string;
      type: string;
      kind: string;
      properties?: {
        format: string;
        url: string;
        imageType?: string;
      };
    }>;
    productUrl?: {
      href: string;
      rel: string;
      type: string;
      kind: string;
    };
    tracking?: any[];
    defaultImages?: string[];
  };
}

export interface Discount {
  id: string;
  price: number;
  endDate: Date;
  type: string;
  formattedValue: string;
  value: number;
  minBuyingValue: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageURL: string;
}

export interface Category {
  id: string;
  category: string;
  billboardId: string;
}

export interface SelectedSize {
  id: string;
  name: string;
}

export interface RequestData {
  title: string;
  description: string;
  price: number;
  files: File[];
  featured: boolean;
  category: string;
  sizes: SelectedSize[];
  categoryId: string;
  discount?: number;
}
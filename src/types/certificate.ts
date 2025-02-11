export interface Certificate {
  id: string;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  imageUrl: string;
  demolink: string;
  price: {
    usd: number;
    sar: number;
  };
  details: {
    duration: string;
    level: string;
    prerequisites: string[];
    objectives: string[];
  };
}

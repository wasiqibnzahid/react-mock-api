export interface itemType {
    name: string;
    description: string;
    price: number;
    status: boolean;
    material: string;
    color: string;
    id: number,
  }

export interface tableDataType {
  name: string;
  items: itemType[];
}


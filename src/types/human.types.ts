export interface FeaturesProps {
  intelligence: number;
  luck: number;
  strength: number;
  vital: number;
  speed: number;
}

export interface HumanDetailsProps {
  id: string;
  name: string;
  age: number;
  isCrossable: boolean;
  features: FeaturesProps;
}

export interface HumanProps extends HumanDetailsProps {
  family: [] | HumanDetailsProps[]
}

export interface HumanTypes {
  adam: HumanProps;
  ewa: HumanProps;
}

export interface StoreType {
  pioneers: HumanTypes;
}

export interface FeaturesProps {
  intelligence: number;
  luck: number;
  strength: number;
  health: number;
  speed: number;
  appearance: number,
}

export interface HumanDetailsProps {
  id: string;
  name: string;
  surname: string;
  age: number;
  gender: string;
  isCrossable: boolean;
  features: FeaturesProps;
}

export interface HumanProps extends HumanDetailsProps {
  family: [] | HumanDetailsProps[]
}

export interface PioneersTypes {
  adam: HumanProps;
  ewa: HumanProps;
}

export interface HumansTypes {
  humans : HumanProps[] | []
}

export interface StoreType {
  pioneers: PioneersTypes;
  humans: HumansTypes;
}

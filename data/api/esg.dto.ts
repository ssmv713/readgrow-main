
export type EsgDataResponse = {
  stock: string;
  firmname: string;
  year: string;
  quarter: string;
  Total: string;
  Enviornment_Grade: string;
  Social_Grade: string;
  Governance_Grade: string;
  ESG_Risk_by_topic: {
    title: string;
    kor: string;
    value: number;
  }[];
  graph1: {
    price: number;
    date: string;
    ESG: string;
  }[];
  graph2: {
    dt: string;
    value: number;
  }[];
  ESGComment: string;
  Enviornment_News:{
    item:
     NewsType[];
  },
  Social_News:{
    item:
     NewsType[];
  },
  Governance_News:{
    item:
     NewsType[];    
  }
};

export type NewsType = {  
    title : string;
    NESG:string;
    positive_signal: number;
    NESG2: string;  
}
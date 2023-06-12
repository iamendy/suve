export interface Vaccine {
  hash: string;
  name: string;
  imageLink: string;
  description: string;
  registeredAt: string;
  expiresAt: string;
}

export interface Chains {
  enrollService: {
    address: String;
    abi: any;
  };
  verificationService: {
    abi: any;
    4002: {
      address: string;
    };
    44787: {
      address: string;
    };
    80001: {
      address: string;
    };
    43113: {
      address: string;
    };
    11155111: {
      address: string;
    };
  };
}

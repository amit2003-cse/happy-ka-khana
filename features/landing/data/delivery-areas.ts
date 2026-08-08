export interface DeliveryArea {
  name: string;
  pincode: string;
  isAvailable: boolean;
}

export const deliveryAreasData: DeliveryArea[] = [
  { name: "Boring Road", pincode: "800001", isAvailable: true },
  { name: "Kidwaipuri", pincode: "800001", isAvailable: true },
  { name: "Frazer Road", pincode: "800001", isAvailable: true },
  { name: "Anisabad", pincode: "800002", isAvailable: true },
  { name: "Patliputra Colony", pincode: "800013", isAvailable: true },
  { name: "Bailey Road", pincode: "800014", isAvailable: true },
  { name: "Rajendra Nagar", pincode: "800016", isAvailable: true },
  { name: "Kankarbagh", pincode: "800020", isAvailable: true },
  { name: "Keshri Nagar", pincode: "800024", isAvailable: true },
];

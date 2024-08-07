export enum GenomicBookingTypes {
  EASY_SAMPLE_COLLECT = 'easy-sample-collect',
  ORDER_A_KIT = 'order-a-kit',
  VISIT_A_LAB = 'visit-a-lab',
}

export enum GenomicBookingStates {
  AWAITING_LAB_TECHNICIAN = 'awaiting-lab-technician',

  AWAITING_COURIER = 'awaiting-courier',
  OUT_FOR_DELIVERY = 'out-for-delivery',
  IN_SHIPMENT = 'in-shipment',

  IN_PROGRESS = 'in-progress',
  REPORT_GENERATED = 'report-generated',
}

export interface User {
  first_name: string;
  last_name: string;
  isOnboarded: boolean;
  hasSubscription: boolean;
  genomicBookingType: GenomicBookingTypes;
  hasBookedGenomicTest: boolean;
  genomicTestState: string;
}

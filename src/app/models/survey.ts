export class Survey {

  constructor(public id: number,
              public fullname: string,
              public attendanceConfirmation: boolean,
              public city: string,
              public email: string,
              public meanOfTransportation: string,
              public travelAlone : boolean,
              public departureDate: string,
              public arrivalDate: string
              ) {
  }
}

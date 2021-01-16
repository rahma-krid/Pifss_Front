export class Pension {

    customerIdentityNumber:string;
    totalPension:number;
    pensionAuthority:string;
    deductionsAmount:number;
    netPension:number;
    ibanNumber:string
    numberOfMonthTobeSpent:string;

constructor( customerIdentityNumber: string,totalPension:number,pensionAuthority:string,deductionsAmount:number,
    netPension:number,ibanNumber:string,numberOfMonthTobeSpent:string){
    this.customerIdentityNumber = customerIdentityNumber;
    this.totalPension = totalPension;
    this.pensionAuthority = pensionAuthority;
    this.deductionsAmount = deductionsAmount;
    this.netPension = netPension;
    this.ibanNumber = ibanNumber;
    this.numberOfMonthTobeSpent = numberOfMonthTobeSpent;

  }

}

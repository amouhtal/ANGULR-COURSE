import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomeValidator {
  static ValidateName(control: AbstractControl) {
    const value = control.value as string;
    if (value.includes('test')) {
      return { invalidName: true };
    }
    return null;
  }

  static ValidatSpecialCharacter(char: string) {
    return (control: AbstractControl) => {
      const value = control.value as string;
      if (value.includes(char)) {
        return { invalidSpecialChar: true };
      }
      return null;
    };
  }

  static validateDate(control: FormGroup) {
    const checkinDate: any = new Date(control.get('checkInDate')?.value);
    const checkoutDate: any = new Date(control.get('checkOutDate')?.value);

    const diffTime = checkoutDate - checkinDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log('diffDays', diffDays)
    if (diffDays <= 0) {
        control.get('checkOutDate')?.setErrors({ invalidDate: true });
      return { invalidDate: true };
    }
    return null;
  }
}

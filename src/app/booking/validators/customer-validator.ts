import { AbstractControl } from "@angular/forms";

export class CustomeValidator{
    static ValidateName(control: AbstractControl){
        const value = control.value as string;
        if(value.includes('test')){
            return {invalidName: true}
        }
        return null;
    }

    static ValidatSpecialCharacter(char: string ){
        return (control: AbstractControl) => {
            const value = control.value as string;
            if (value.includes(char)){
                return {invalidSpecialChar: true}
            }
            return null;
        }
    }
}
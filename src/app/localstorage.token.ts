import { InjectionToken } from "@angular/core";

export const LocalStorageToken = new InjectionToken<any>('local storage',{
    providedIn: 'root',
    factory: () => localStorage
})
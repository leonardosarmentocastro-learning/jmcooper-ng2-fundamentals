/**
 * NPM Packages.
 */
import {Injectable} from '@angular/core';

/**
 * Hint for the "Typescript" compiler that this variable 
 * is comming from an outside scope(in this case, the "global scope").
 */
declare let toastr:any;

@Injectable()
export class ToastrService {
    success(message:string, title?:string) {
        toastr.success(message, title);
    }

    info(message:string, title?:string) {
        toastr.info(message, title);
    }

    warning(message:string, title?:string) {
        toastr.warning(message, title);
    }

    error(message:string, title?:string) {
        toastr.error(message, title);
    }
}
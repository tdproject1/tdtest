import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'launchDateFormat'
})
export class LaunchDateFormat extends DatePipe implements PipeTransform {

    DATE_TIME_FMT = `EEE dd/MMM/yyyy hh:mm:ss z`;

    transform(value: any, args?: any): any {
        return super.transform(value, this.DATE_TIME_FMT);
    }
}
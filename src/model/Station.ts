import {BaseCls} from './BaseCls';
export class  Station extends BaseCls {

    StationId?:string;
    Location?:string;
    LocationDescription?:string;
    LocationLatitude?:number;
    LocationLongitude?:number;
    DataTimestamp? :string;
    WindDirDegrees?:string;
    WindDirText?:string;
    WindSpeed?:string;
    WindGust?:string;
    FacingDirectionDegrees?:string;
    FacingDirectionText?:string;
    LocationWindCondition?:string;
    Label?:string;
    WindDirIcon:string;
    arr: Array<{id: number, text: string}>


}

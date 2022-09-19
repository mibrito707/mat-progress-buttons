import { InjectionToken } from '@angular/core';
import { MatProgressButtonOptions } from './mat-progress-buttons.interface';
export interface Config extends MatProgressButtonOptions {
    id?: string;
}
export declare type GlobalConfig = Config[];
export declare const GLOBAL_CONFIG: InjectionToken<GlobalConfig>;

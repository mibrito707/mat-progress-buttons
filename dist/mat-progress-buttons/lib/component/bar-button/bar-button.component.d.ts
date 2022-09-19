import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatProgressButtonOptions } from '../../mat-progress-buttons.interface';
import { GlobalConfig } from '../../mat-progress-buttons.injection-token';
import * as i0 from "@angular/core";
export declare class MatBarButtonComponent implements OnChanges {
    private config;
    options: MatProgressButtonOptions;
    buttonId: string;
    active: boolean;
    disabled: boolean;
    btnClick: EventEmitter<MouseEvent>;
    handleClick(event: MouseEvent): void;
    constructor(config: GlobalConfig);
    get configExists(): boolean;
    get globalConfig(): MatProgressButtonOptions;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatBarButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatBarButtonComponent, "mat-bar-button", never, { "options": "options"; "buttonId": "buttonId"; "active": "active"; "disabled": "disabled"; }, { "btnClick": "btnClick"; }, never, never, false>;
}

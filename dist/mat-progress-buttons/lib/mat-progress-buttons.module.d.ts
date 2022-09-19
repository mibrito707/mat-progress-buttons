import { ModuleWithProviders } from '@angular/core';
import { GlobalConfig } from './mat-progress-buttons.injection-token';
import * as i0 from "@angular/core";
import * as i1 from "./component/spinner-button/spinner-button.component";
import * as i2 from "./component/bar-button/bar-button.component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/progress-bar";
import * as i6 from "@angular/material/progress-spinner";
import * as i7 from "@angular/material/core";
import * as i8 from "@angular/material/icon";
export { MatSpinnerButtonComponent } from './component/spinner-button/spinner-button.component';
export { MatBarButtonComponent } from './component/bar-button/bar-button.component';
export { MatProgressButtonOptions } from './mat-progress-buttons.interface';
export declare class MatProgressButtonsModule {
    static forRoot(config?: GlobalConfig): ModuleWithProviders<MatProgressButtonsModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatProgressButtonsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatProgressButtonsModule, [typeof i1.MatSpinnerButtonComponent, typeof i2.MatBarButtonComponent], [typeof i3.CommonModule, typeof i4.MatButtonModule, typeof i5.MatProgressBarModule, typeof i6.MatProgressSpinnerModule, typeof i7.MatRippleModule, typeof i8.MatIconModule], [typeof i1.MatSpinnerButtonComponent, typeof i2.MatBarButtonComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MatProgressButtonsModule>;
}

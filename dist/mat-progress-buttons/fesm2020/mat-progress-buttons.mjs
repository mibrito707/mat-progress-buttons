import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { InjectionToken, EventEmitter, Component, Inject, Input, Output, HostListener, NgModule } from '@angular/core';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i4 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i3$1 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';

const GLOBAL_CONFIG = new InjectionToken('Global Config');

class MatSpinnerButtonComponent {
    constructor(config) {
        this.config = config;
        this.btnClick = new EventEmitter();
    }
    handleClick(event) {
        console.log('options', this.options);
        if (!this.options.disabled && !this.options.active) {
            this.btnClick.emit(event);
        }
        event.preventDefault();
        event.stopImmediatePropagation();
        return false;
    }
    get configExists() {
        return !!this.buttonId && !!this.config;
    }
    get globalConfig() {
        return this.configExists
            ? this.config.find((item) => item.id === this.buttonId)
            : this.options;
    }
    mergeObjects(globalOptions, options) {
        for (const key in globalOptions) {
            if (options[key] === undefined) {
                options[key] = globalOptions[key];
            }
        }
    }
    ngOnChanges(changes) {
        if (changes.active) {
            this.options.active = changes.active.currentValue;
        }
        if (changes.disabled) {
            this.options.disabled = changes.disabled.currentValue;
        }
        this.mergeObjects(this.globalConfig, this.options);
    }
}
MatSpinnerButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: MatSpinnerButtonComponent, deps: [{ token: GLOBAL_CONFIG }], target: i0.ɵɵFactoryTarget.Component });
MatSpinnerButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.2", type: MatSpinnerButtonComponent, selector: "mat-spinner-button", inputs: { options: "options", buttonId: "buttonId", active: "active", disabled: "disabled" }, outputs: { btnClick: "btnClick" }, host: { listeners: { "click": "handleClick($event)" } }, usesOnChanges: true, ngImport: i0, template: "<button mat-button\n  [type]=\"options.type\"\n  [color]=\"options.buttonColor\"\n  [class.active]=\"options.active\"\n  [class.fullWidth]=\"options.fullWidth\"\n  [class.mat-raised-button]=\"options.raised\"\n  [class.mat-stroked-button]=\"options.stroked\"\n  [class.mat-flat-button]=\"options.flat\"\n  [class.mat-fab]=\"options.fab\"\n  [ngClass]=\"options.customClass\"\n  [disabled]=\"options.active || options.disabled\">\n\n  <ng-container\n    *ngIf=\"options.buttonIcon\">\n    <mat-icon\n      class=\"mat-button-icon\"\n      [class.is-mat-icon]=\"!options.buttonIcon.fontSet\"\n      [class.active]=\"options.active && !options.disabled\"\n      [ngClass]=\"options.buttonIcon.customClass\"\n      [fontSet]=\"options.buttonIcon.fontSet\"\n      [fontIcon]=\"options.buttonIcon.fontIcon\"\n      [color]=\"options.buttonIcon.color\"\n      [svgIcon]=\"options.buttonIcon.svgIcon\"\n      [inline]=\"options.buttonIcon.inline\">\n      {{ options.buttonIcon.fontSet ? '' : options.buttonIcon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <span\n    class=\"button-text\"\n    *ngIf=\"!options.fab\"\n    [class.active]=\"options.active && !options.disabled\">\n      {{ options.text }}\n  </span>\n\n  <ng-container\n    *ngIf=\"options.fab && options.icon\">\n    <mat-icon\n      [fontSet]=\"options.icon.fontSet\"\n      [fontIcon]=\"options.icon.fontIcon\"\n      [color]=\"options.icon.color\"\n      [svgIcon]=\"options.icon.svgIcon\"\n      [inline]=\"options.icon.inline\">\n        {{ options.icon.fontSet ? '' : options.icon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <mat-spinner class=\"spinner\"\n    *ngIf=\"options.active && !options.disabled\"\n    [diameter]=\"options.fab ? 58 : options.spinnerSize\"\n    [color]=\"options.spinnerColor\"\n    [mode]=\"options.mode\"\n    [value]=\"options.value\"\n    [class.active]=\"options.active && !options.disabled\">\n  </mat-spinner>\n</button>\n", styles: [":host button{outline:none}:host button.active{cursor:not-allowed}:host button ::ng-deep .mat-button-wrapper{display:flex;align-items:center;justify-content:center}:host button.fullWidth{width:100%}:host button.mat-fab .spinner{margin-top:-15px}:host button .spinner{position:absolute;top:25%;opacity:0;transition:opacity .3s ease-in-out}:host button .spinner.active{opacity:1}:host button .button-text{opacity:1;transition:opacity .3s ease-in-out}:host button .button-text.active{opacity:0}:host button mat-icon.mat-button-icon{padding-right:5px;transition:opacity .3s ease-in-out}:host button mat-icon.mat-button-icon.is-mat-icon{font-size:18px;position:relative;top:3px}:host button mat-icon.mat-button-icon.active{opacity:0}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "diameter", "strokeWidth", "mode", "value"], exportAs: ["matProgressSpinner"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: MatSpinnerButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mat-spinner-button', template: "<button mat-button\n  [type]=\"options.type\"\n  [color]=\"options.buttonColor\"\n  [class.active]=\"options.active\"\n  [class.fullWidth]=\"options.fullWidth\"\n  [class.mat-raised-button]=\"options.raised\"\n  [class.mat-stroked-button]=\"options.stroked\"\n  [class.mat-flat-button]=\"options.flat\"\n  [class.mat-fab]=\"options.fab\"\n  [ngClass]=\"options.customClass\"\n  [disabled]=\"options.active || options.disabled\">\n\n  <ng-container\n    *ngIf=\"options.buttonIcon\">\n    <mat-icon\n      class=\"mat-button-icon\"\n      [class.is-mat-icon]=\"!options.buttonIcon.fontSet\"\n      [class.active]=\"options.active && !options.disabled\"\n      [ngClass]=\"options.buttonIcon.customClass\"\n      [fontSet]=\"options.buttonIcon.fontSet\"\n      [fontIcon]=\"options.buttonIcon.fontIcon\"\n      [color]=\"options.buttonIcon.color\"\n      [svgIcon]=\"options.buttonIcon.svgIcon\"\n      [inline]=\"options.buttonIcon.inline\">\n      {{ options.buttonIcon.fontSet ? '' : options.buttonIcon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <span\n    class=\"button-text\"\n    *ngIf=\"!options.fab\"\n    [class.active]=\"options.active && !options.disabled\">\n      {{ options.text }}\n  </span>\n\n  <ng-container\n    *ngIf=\"options.fab && options.icon\">\n    <mat-icon\n      [fontSet]=\"options.icon.fontSet\"\n      [fontIcon]=\"options.icon.fontIcon\"\n      [color]=\"options.icon.color\"\n      [svgIcon]=\"options.icon.svgIcon\"\n      [inline]=\"options.icon.inline\">\n        {{ options.icon.fontSet ? '' : options.icon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <mat-spinner class=\"spinner\"\n    *ngIf=\"options.active && !options.disabled\"\n    [diameter]=\"options.fab ? 58 : options.spinnerSize\"\n    [color]=\"options.spinnerColor\"\n    [mode]=\"options.mode\"\n    [value]=\"options.value\"\n    [class.active]=\"options.active && !options.disabled\">\n  </mat-spinner>\n</button>\n", styles: [":host button{outline:none}:host button.active{cursor:not-allowed}:host button ::ng-deep .mat-button-wrapper{display:flex;align-items:center;justify-content:center}:host button.fullWidth{width:100%}:host button.mat-fab .spinner{margin-top:-15px}:host button .spinner{position:absolute;top:25%;opacity:0;transition:opacity .3s ease-in-out}:host button .spinner.active{opacity:1}:host button .button-text{opacity:1;transition:opacity .3s ease-in-out}:host button .button-text.active{opacity:0}:host button mat-icon.mat-button-icon{padding-right:5px;transition:opacity .3s ease-in-out}:host button mat-icon.mat-button-icon.is-mat-icon{font-size:18px;position:relative;top:3px}:host button mat-icon.mat-button-icon.active{opacity:0}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [GLOBAL_CONFIG]
                }] }]; }, propDecorators: { options: [{
                type: Input
            }], buttonId: [{
                type: Input
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], btnClick: [{
                type: Output
            }], handleClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

class MatBarButtonComponent {
    constructor(config) {
        this.config = config;
        this.btnClick = new EventEmitter();
    }
    handleClick(event) {
        if (!this.options.disabled && !this.options.active) {
            this.btnClick.emit(event);
        }
    }
    get configExists() {
        return !!this.buttonId && !!this.config;
    }
    get globalConfig() {
        return this.configExists
            ? this.config.find((item) => item.id === this.buttonId)
            : this.options;
    }
    ngOnChanges(changes) {
        this.options = { ...this.globalConfig, ...this.options };
        if (changes.active) {
            this.options.active = changes.active.currentValue;
        }
        if (changes.disabled) {
            this.options.disabled = changes.disabled.currentValue;
        }
    }
}
MatBarButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: MatBarButtonComponent, deps: [{ token: GLOBAL_CONFIG }], target: i0.ɵɵFactoryTarget.Component });
MatBarButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.2", type: MatBarButtonComponent, selector: "mat-bar-button", inputs: { options: "options", buttonId: "buttonId", active: "active", disabled: "disabled" }, outputs: { btnClick: "btnClick" }, host: { listeners: { "click": "handleClick($event)" } }, usesOnChanges: true, ngImport: i0, template: "<button\n  mat-button\n  [type]=\"options.type\"\n  [color]=\"options.buttonColor\"\n  [class.active]=\"options.active\"\n  [class.mat-raised-button]=\"options.raised\"\n  [class.mat-stroked-button]=\"options.stroked\"\n  [class.mat-flat-button]=\"options.flat\"\n  [class.fullWidth]=\"options.fullWidth\"\n  [ngClass]=\"options.customClass\"\n  [disabled]=\"options.active || options.disabled\"\n>\n  <ng-container *ngIf=\"options.buttonIcon\">\n    <mat-icon\n      [class.is-mat-icon]=\"!options.buttonIcon.fontSet\"\n      [ngClass]=\"options.buttonIcon.customClass\"\n      [fontSet]=\"options.buttonIcon.fontSet\"\n      [fontIcon]=\"options.buttonIcon.fontIcon\"\n      [color]=\"options.buttonIcon.color\"\n      [svgIcon]=\"options.buttonIcon.svgIcon\"\n      [inline]=\"options.buttonIcon.inline\"\n    >\n      {{ options.buttonIcon.fontSet ? '' : options.buttonIcon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <span>{{ options.text }}</span>\n\n  <mat-progress-bar\n    class=\"bar\"\n    *ngIf=\"options.active && !options.disabled\"\n    [color]=\"options.barColor\"\n    [mode]=\"options.mode\"\n    [value]=\"options.value\"\n  >\n  </mat-progress-bar>\n</button>\n", styles: [":host button.active{cursor:not-allowed}:host button.fullWidth{width:100%}:host button .bar{position:absolute;top:0;left:0}:host button mat-icon{padding-right:5px}:host button mat-icon.is-mat-icon{font-size:18px;position:relative;top:3px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3$1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: MatBarButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mat-bar-button', template: "<button\n  mat-button\n  [type]=\"options.type\"\n  [color]=\"options.buttonColor\"\n  [class.active]=\"options.active\"\n  [class.mat-raised-button]=\"options.raised\"\n  [class.mat-stroked-button]=\"options.stroked\"\n  [class.mat-flat-button]=\"options.flat\"\n  [class.fullWidth]=\"options.fullWidth\"\n  [ngClass]=\"options.customClass\"\n  [disabled]=\"options.active || options.disabled\"\n>\n  <ng-container *ngIf=\"options.buttonIcon\">\n    <mat-icon\n      [class.is-mat-icon]=\"!options.buttonIcon.fontSet\"\n      [ngClass]=\"options.buttonIcon.customClass\"\n      [fontSet]=\"options.buttonIcon.fontSet\"\n      [fontIcon]=\"options.buttonIcon.fontIcon\"\n      [color]=\"options.buttonIcon.color\"\n      [svgIcon]=\"options.buttonIcon.svgIcon\"\n      [inline]=\"options.buttonIcon.inline\"\n    >\n      {{ options.buttonIcon.fontSet ? '' : options.buttonIcon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <span>{{ options.text }}</span>\n\n  <mat-progress-bar\n    class=\"bar\"\n    *ngIf=\"options.active && !options.disabled\"\n    [color]=\"options.barColor\"\n    [mode]=\"options.mode\"\n    [value]=\"options.value\"\n  >\n  </mat-progress-bar>\n</button>\n", styles: [":host button.active{cursor:not-allowed}:host button.fullWidth{width:100%}:host button .bar{position:absolute;top:0;left:0}:host button mat-icon{padding-right:5px}:host button mat-icon.is-mat-icon{font-size:18px;position:relative;top:3px}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [GLOBAL_CONFIG]
                }] }]; }, propDecorators: { options: [{
                type: Input
            }], buttonId: [{
                type: Input
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], btnClick: [{
                type: Output
            }], handleClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

class MatProgressButtonsModule {
    static forRoot(config) {
        return {
            ngModule: MatProgressButtonsModule,
            providers: [{ provide: GLOBAL_CONFIG, useValue: config }],
        };
    }
}
MatProgressButtonsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: MatProgressButtonsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MatProgressButtonsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.2", ngImport: i0, type: MatProgressButtonsModule, declarations: [MatSpinnerButtonComponent, MatBarButtonComponent], imports: [CommonModule,
        MatButtonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatIconModule], exports: [MatSpinnerButtonComponent, MatBarButtonComponent] });
MatProgressButtonsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: MatProgressButtonsModule, imports: [CommonModule,
        MatButtonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: MatProgressButtonsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        MatRippleModule,
                        MatIconModule,
                    ],
                    exports: [MatSpinnerButtonComponent, MatBarButtonComponent],
                    declarations: [MatSpinnerButtonComponent, MatBarButtonComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { MatBarButtonComponent, MatProgressButtonsModule, MatSpinnerButtonComponent };
//# sourceMappingURL=mat-progress-buttons.mjs.map

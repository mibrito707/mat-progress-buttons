import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { InjectionToken, EventEmitter, Component, Inject, Input, Output, HostListener, NgModule } from '@angular/core';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i4 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i4$1 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';

const GLOBAL_CONFIG = new InjectionToken('Global Config');

function MatSpinnerButtonComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "mat-icon", 4);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("is-mat-icon", !ctx_r0.options.buttonIcon.fontSet)("active", ctx_r0.options.active && !ctx_r0.options.disabled);
        i0.ɵɵproperty("ngClass", ctx_r0.options.buttonIcon.customClass)("fontSet", ctx_r0.options.buttonIcon.fontSet)("fontIcon", ctx_r0.options.buttonIcon.fontIcon)("color", ctx_r0.options.buttonIcon.color)("svgIcon", ctx_r0.options.buttonIcon.svgIcon)("inline", ctx_r0.options.buttonIcon.inline);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r0.options.buttonIcon.fontSet ? "" : ctx_r0.options.buttonIcon.fontIcon, " ");
    }
}
function MatSpinnerButtonComponent_span_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 5);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵclassProp("active", ctx_r1.options.active && !ctx_r1.options.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r1.options.text, " ");
    }
}
function MatSpinnerButtonComponent_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "mat-icon", 6);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("fontSet", ctx_r2.options.icon.fontSet)("fontIcon", ctx_r2.options.icon.fontIcon)("color", ctx_r2.options.icon.color)("svgIcon", ctx_r2.options.icon.svgIcon)("inline", ctx_r2.options.icon.inline);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r2.options.icon.fontSet ? "" : ctx_r2.options.icon.fontIcon, " ");
    }
}
function MatSpinnerButtonComponent_mat_spinner_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "mat-spinner", 7);
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵclassProp("active", ctx_r3.options.active && !ctx_r3.options.disabled);
        i0.ɵɵproperty("diameter", ctx_r3.options.fab ? 58 : ctx_r3.options.spinnerSize)("color", ctx_r3.options.spinnerColor)("mode", ctx_r3.options.mode)("value", ctx_r3.options.value);
    }
}
class MatSpinnerButtonComponent {
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
MatSpinnerButtonComponent.ɵfac = function MatSpinnerButtonComponent_Factory(t) { return new (t || MatSpinnerButtonComponent)(i0.ɵɵdirectiveInject(GLOBAL_CONFIG)); };
MatSpinnerButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatSpinnerButtonComponent, selectors: [["mat-spinner-button"]], hostBindings: function MatSpinnerButtonComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵlistener("click", function MatSpinnerButtonComponent_click_HostBindingHandler($event) { return ctx.handleClick($event); });
        }
    }, inputs: { options: "options", buttonId: "buttonId", active: "active", disabled: "disabled" }, outputs: { btnClick: "btnClick" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 20, consts: [["mat-button", "", 3, "type", "color", "ngClass", "disabled"], [4, "ngIf"], ["class", "button-text", 3, "active", 4, "ngIf"], ["class", "spinner", 3, "diameter", "color", "mode", "value", "active", 4, "ngIf"], [1, "mat-button-icon", 3, "ngClass", "fontSet", "fontIcon", "color", "svgIcon", "inline"], [1, "button-text"], [3, "fontSet", "fontIcon", "color", "svgIcon", "inline"], [1, "spinner", 3, "diameter", "color", "mode", "value"]], template: function MatSpinnerButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtemplate(1, MatSpinnerButtonComponent_ng_container_1_Template, 3, 11, "ng-container", 1);
            i0.ɵɵtemplate(2, MatSpinnerButtonComponent_span_2_Template, 2, 3, "span", 2);
            i0.ɵɵtemplate(3, MatSpinnerButtonComponent_ng_container_3_Template, 3, 6, "ng-container", 1);
            i0.ɵɵtemplate(4, MatSpinnerButtonComponent_mat_spinner_4_Template, 1, 6, "mat-spinner", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵclassProp("active", ctx.options.active)("fullWidth", ctx.options.fullWidth)("mat-raised-button", ctx.options.raised)("mat-stroked-button", ctx.options.stroked)("mat-flat-button", ctx.options.flat)("mat-fab", ctx.options.fab);
            i0.ɵɵproperty("type", ctx.options.type)("color", ctx.options.buttonColor)("ngClass", ctx.options.customClass)("disabled", ctx.options.active || ctx.options.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.options.buttonIcon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.options.fab);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.options.fab && ctx.options.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.options.active && !ctx.options.disabled);
        }
    }, directives: [i1.MatButton, i2.NgClass, i2.NgIf, i3.MatIcon, i4.MatSpinner], styles: ["[_nghost-%COMP%]   button[_ngcontent-%COMP%]{outline:none}[_nghost-%COMP%]   button.active[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]   button[_ngcontent-%COMP%]     .mat-button-wrapper{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   button.fullWidth[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   button.mat-fab[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{margin-top:-15px}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{position:absolute;top:25%;opacity:0;transition:opacity .3s ease-in-out}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .spinner.active[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%]{opacity:1;transition:opacity .3s ease-in-out}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .button-text.active[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.mat-button-icon[_ngcontent-%COMP%]{padding-right:5px;transition:opacity .3s ease-in-out}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.mat-button-icon.is-mat-icon[_ngcontent-%COMP%]{font-size:18px;position:relative;top:3px}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.mat-button-icon.active[_ngcontent-%COMP%]{opacity:0}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatSpinnerButtonComponent, [{
            type: Component,
            args: [{ selector: 'mat-spinner-button', template: "<button mat-button\n  [type]=\"options.type\"\n  [color]=\"options.buttonColor\"\n  [class.active]=\"options.active\"\n  [class.fullWidth]=\"options.fullWidth\"\n  [class.mat-raised-button]=\"options.raised\"\n  [class.mat-stroked-button]=\"options.stroked\"\n  [class.mat-flat-button]=\"options.flat\"\n  [class.mat-fab]=\"options.fab\"\n  [ngClass]=\"options.customClass\"\n  [disabled]=\"options.active || options.disabled\">\n\n  <ng-container\n    *ngIf=\"options.buttonIcon\">\n    <mat-icon\n      class=\"mat-button-icon\"\n      [class.is-mat-icon]=\"!options.buttonIcon.fontSet\"\n      [class.active]=\"options.active && !options.disabled\"\n      [ngClass]=\"options.buttonIcon.customClass\"\n      [fontSet]=\"options.buttonIcon.fontSet\"\n      [fontIcon]=\"options.buttonIcon.fontIcon\"\n      [color]=\"options.buttonIcon.color\"\n      [svgIcon]=\"options.buttonIcon.svgIcon\"\n      [inline]=\"options.buttonIcon.inline\">\n      {{ options.buttonIcon.fontSet ? '' : options.buttonIcon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <span\n    class=\"button-text\"\n    *ngIf=\"!options.fab\"\n    [class.active]=\"options.active && !options.disabled\">\n      {{ options.text }}\n  </span>\n\n  <ng-container\n    *ngIf=\"options.fab && options.icon\">\n    <mat-icon\n      [fontSet]=\"options.icon.fontSet\"\n      [fontIcon]=\"options.icon.fontIcon\"\n      [color]=\"options.icon.color\"\n      [svgIcon]=\"options.icon.svgIcon\"\n      [inline]=\"options.icon.inline\">\n        {{ options.icon.fontSet ? '' : options.icon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <mat-spinner class=\"spinner\"\n    *ngIf=\"options.active && !options.disabled\"\n    [diameter]=\"options.fab ? 58 : options.spinnerSize\"\n    [color]=\"options.spinnerColor\"\n    [mode]=\"options.mode\"\n    [value]=\"options.value\"\n    [class.active]=\"options.active && !options.disabled\">\n  </mat-spinner>\n</button>\n", styles: [":host button{outline:none}:host button.active{cursor:not-allowed}:host button ::ng-deep .mat-button-wrapper{display:flex;align-items:center;justify-content:center}:host button.fullWidth{width:100%}:host button.mat-fab .spinner{margin-top:-15px}:host button .spinner{position:absolute;top:25%;opacity:0;transition:opacity .3s ease-in-out}:host button .spinner.active{opacity:1}:host button .button-text{opacity:1;transition:opacity .3s ease-in-out}:host button .button-text.active{opacity:0}:host button mat-icon.mat-button-icon{padding-right:5px;transition:opacity .3s ease-in-out}:host button mat-icon.mat-button-icon.is-mat-icon{font-size:18px;position:relative;top:3px}:host button mat-icon.mat-button-icon.active{opacity:0}\n"] }]
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [GLOBAL_CONFIG]
                    }] }];
    }, { options: [{
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
            }] });
})();

function MatBarButtonComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "mat-icon", 3);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("is-mat-icon", !ctx_r0.options.buttonIcon.fontSet);
        i0.ɵɵproperty("ngClass", ctx_r0.options.buttonIcon.customClass)("fontSet", ctx_r0.options.buttonIcon.fontSet)("fontIcon", ctx_r0.options.buttonIcon.fontIcon)("color", ctx_r0.options.buttonIcon.color)("svgIcon", ctx_r0.options.buttonIcon.svgIcon)("inline", ctx_r0.options.buttonIcon.inline);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r0.options.buttonIcon.fontSet ? "" : ctx_r0.options.buttonIcon.fontIcon, " ");
    }
}
function MatBarButtonComponent_mat_progress_bar_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "mat-progress-bar", 4);
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("color", ctx_r1.options.barColor)("mode", ctx_r1.options.mode)("value", ctx_r1.options.value);
    }
}
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
        this.options = Object.assign(Object.assign({}, this.globalConfig), this.options);
        if (changes.active) {
            this.options.active = changes.active.currentValue;
        }
        if (changes.disabled) {
            this.options.disabled = changes.disabled.currentValue;
        }
    }
}
MatBarButtonComponent.ɵfac = function MatBarButtonComponent_Factory(t) { return new (t || MatBarButtonComponent)(i0.ɵɵdirectiveInject(GLOBAL_CONFIG)); };
MatBarButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatBarButtonComponent, selectors: [["mat-bar-button"]], hostBindings: function MatBarButtonComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵlistener("click", function MatBarButtonComponent_click_HostBindingHandler($event) { return ctx.handleClick($event); });
        }
    }, inputs: { options: "options", buttonId: "buttonId", active: "active", disabled: "disabled" }, outputs: { btnClick: "btnClick" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 17, consts: [["mat-button", "", 3, "type", "color", "ngClass", "disabled"], [4, "ngIf"], ["class", "bar", 3, "color", "mode", "value", 4, "ngIf"], [3, "ngClass", "fontSet", "fontIcon", "color", "svgIcon", "inline"], [1, "bar", 3, "color", "mode", "value"]], template: function MatBarButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtemplate(1, MatBarButtonComponent_ng_container_1_Template, 3, 9, "ng-container", 1);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, MatBarButtonComponent_mat_progress_bar_4_Template, 1, 3, "mat-progress-bar", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵclassProp("active", ctx.options.active)("mat-raised-button", ctx.options.raised)("mat-stroked-button", ctx.options.stroked)("mat-flat-button", ctx.options.flat)("fullWidth", ctx.options.fullWidth);
            i0.ɵɵproperty("type", ctx.options.type)("color", ctx.options.buttonColor)("ngClass", ctx.options.customClass)("disabled", ctx.options.active || ctx.options.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.options.buttonIcon);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.options.text);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.options.active && !ctx.options.disabled);
        }
    }, directives: [i1.MatButton, i2.NgClass, i2.NgIf, i3.MatIcon, i4$1.MatProgressBar], styles: ["[_nghost-%COMP%]   button.active[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]   button.fullWidth[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{position:absolute;top:0;left:0}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-right:5px}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.is-mat-icon[_ngcontent-%COMP%]{font-size:18px;position:relative;top:3px}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatBarButtonComponent, [{
            type: Component,
            args: [{ selector: 'mat-bar-button', template: "<button\n  mat-button\n  [type]=\"options.type\"\n  [color]=\"options.buttonColor\"\n  [class.active]=\"options.active\"\n  [class.mat-raised-button]=\"options.raised\"\n  [class.mat-stroked-button]=\"options.stroked\"\n  [class.mat-flat-button]=\"options.flat\"\n  [class.fullWidth]=\"options.fullWidth\"\n  [ngClass]=\"options.customClass\"\n  [disabled]=\"options.active || options.disabled\"\n>\n  <ng-container *ngIf=\"options.buttonIcon\">\n    <mat-icon\n      [class.is-mat-icon]=\"!options.buttonIcon.fontSet\"\n      [ngClass]=\"options.buttonIcon.customClass\"\n      [fontSet]=\"options.buttonIcon.fontSet\"\n      [fontIcon]=\"options.buttonIcon.fontIcon\"\n      [color]=\"options.buttonIcon.color\"\n      [svgIcon]=\"options.buttonIcon.svgIcon\"\n      [inline]=\"options.buttonIcon.inline\"\n    >\n      {{ options.buttonIcon.fontSet ? '' : options.buttonIcon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <span>{{ options.text }}</span>\n\n  <mat-progress-bar\n    class=\"bar\"\n    *ngIf=\"options.active && !options.disabled\"\n    [color]=\"options.barColor\"\n    [mode]=\"options.mode\"\n    [value]=\"options.value\"\n  >\n  </mat-progress-bar>\n</button>\n", styles: [":host button.active{cursor:not-allowed}:host button.fullWidth{width:100%}:host button .bar{position:absolute;top:0;left:0}:host button mat-icon{padding-right:5px}:host button mat-icon.is-mat-icon{font-size:18px;position:relative;top:3px}\n"] }]
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [GLOBAL_CONFIG]
                    }] }];
    }, { options: [{
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
            }] });
})();

class MatProgressButtonsModule {
    static forRoot(config) {
        return {
            ngModule: MatProgressButtonsModule,
            providers: [{ provide: GLOBAL_CONFIG, useValue: config }],
        };
    }
}
MatProgressButtonsModule.ɵfac = function MatProgressButtonsModule_Factory(t) { return new (t || MatProgressButtonsModule)(); };
MatProgressButtonsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MatProgressButtonsModule });
MatProgressButtonsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatButtonModule,
            MatProgressBarModule,
            MatProgressSpinnerModule,
            MatRippleModule,
            MatIconModule,
        ]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatProgressButtonsModule, [{
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
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MatProgressButtonsModule, { declarations: [MatSpinnerButtonComponent, MatBarButtonComponent], imports: [CommonModule,
            MatButtonModule,
            MatProgressBarModule,
            MatProgressSpinnerModule,
            MatRippleModule,
            MatIconModule], exports: [MatSpinnerButtonComponent, MatBarButtonComponent] });
})();

/**
 * Generated bundle index. Do not edit.
 */

export { MatBarButtonComponent, MatProgressButtonsModule, MatSpinnerButtonComponent };
//# sourceMappingURL=mat-progress-buttons.mjs.map

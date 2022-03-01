import { Component, Input, Output, HostListener, EventEmitter, Inject, } from '@angular/core';
import { GLOBAL_CONFIG, } from '../../mat-progress-buttons.injection-token';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/progress-spinner";
function MatSpinnerButtonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-icon", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("is-mat-icon", !ctx_r0.options.buttonIcon.fontSet)("active", ctx_r0.options.active && !ctx_r0.options.disabled);
    i0.ɵɵproperty("ngClass", ctx_r0.options.buttonIcon.customClass)("fontSet", ctx_r0.options.buttonIcon.fontSet)("fontIcon", ctx_r0.options.buttonIcon.fontIcon)("color", ctx_r0.options.buttonIcon.color)("svgIcon", ctx_r0.options.buttonIcon.svgIcon)("inline", ctx_r0.options.buttonIcon.inline);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.options.buttonIcon.fontSet ? "" : ctx_r0.options.buttonIcon.fontIcon, " ");
} }
function MatSpinnerButtonComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r1.options.active && !ctx_r1.options.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.options.text, " ");
} }
function MatSpinnerButtonComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-icon", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("fontSet", ctx_r2.options.icon.fontSet)("fontIcon", ctx_r2.options.icon.fontIcon)("color", ctx_r2.options.icon.color)("svgIcon", ctx_r2.options.icon.svgIcon)("inline", ctx_r2.options.icon.inline);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.options.icon.fontSet ? "" : ctx_r2.options.icon.fontIcon, " ");
} }
function MatSpinnerButtonComponent_mat_spinner_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 7);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r3.options.active && !ctx_r3.options.disabled);
    i0.ɵɵproperty("diameter", ctx_r3.options.fab ? 58 : ctx_r3.options.spinnerSize)("color", ctx_r3.options.spinnerColor)("mode", ctx_r3.options.mode)("value", ctx_r3.options.value);
} }
export class MatSpinnerButtonComponent {
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
MatSpinnerButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatSpinnerButtonComponent, selectors: [["mat-spinner-button"]], hostBindings: function MatSpinnerButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function MatSpinnerButtonComponent_click_HostBindingHandler($event) { return ctx.handleClick($event); });
    } }, inputs: { options: "options", buttonId: "buttonId", active: "active", disabled: "disabled" }, outputs: { btnClick: "btnClick" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 20, consts: [["mat-button", "", 3, "type", "color", "ngClass", "disabled"], [4, "ngIf"], ["class", "button-text", 3, "active", 4, "ngIf"], ["class", "spinner", 3, "diameter", "color", "mode", "value", "active", 4, "ngIf"], [1, "mat-button-icon", 3, "ngClass", "fontSet", "fontIcon", "color", "svgIcon", "inline"], [1, "button-text"], [3, "fontSet", "fontIcon", "color", "svgIcon", "inline"], [1, "spinner", 3, "diameter", "color", "mode", "value"]], template: function MatSpinnerButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtemplate(1, MatSpinnerButtonComponent_ng_container_1_Template, 3, 11, "ng-container", 1);
        i0.ɵɵtemplate(2, MatSpinnerButtonComponent_span_2_Template, 2, 3, "span", 2);
        i0.ɵɵtemplate(3, MatSpinnerButtonComponent_ng_container_3_Template, 3, 6, "ng-container", 1);
        i0.ɵɵtemplate(4, MatSpinnerButtonComponent_mat_spinner_4_Template, 1, 6, "mat-spinner", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
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
    } }, directives: [i1.MatButton, i2.NgClass, i2.NgIf, i3.MatIcon, i4.MatSpinner], styles: ["[_nghost-%COMP%]   button[_ngcontent-%COMP%]{outline:none}[_nghost-%COMP%]   button.active[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]   button[_ngcontent-%COMP%]     .mat-button-wrapper{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   button.fullWidth[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   button.mat-fab[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{margin-top:-15px}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{position:absolute;top:25%;opacity:0;transition:opacity .3s ease-in-out}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .spinner.active[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%]{opacity:1;transition:opacity .3s ease-in-out}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .button-text.active[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.mat-button-icon[_ngcontent-%COMP%]{padding-right:5px;transition:opacity .3s ease-in-out}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.mat-button-icon.is-mat-icon[_ngcontent-%COMP%]{font-size:18px;position:relative;top:3px}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.mat-button-icon.active[_ngcontent-%COMP%]{opacity:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatSpinnerButtonComponent, [{
        type: Component,
        args: [{ selector: 'mat-spinner-button', template: "<button mat-button\n  [type]=\"options.type\"\n  [color]=\"options.buttonColor\"\n  [class.active]=\"options.active\"\n  [class.fullWidth]=\"options.fullWidth\"\n  [class.mat-raised-button]=\"options.raised\"\n  [class.mat-stroked-button]=\"options.stroked\"\n  [class.mat-flat-button]=\"options.flat\"\n  [class.mat-fab]=\"options.fab\"\n  [ngClass]=\"options.customClass\"\n  [disabled]=\"options.active || options.disabled\">\n\n  <ng-container\n    *ngIf=\"options.buttonIcon\">\n    <mat-icon\n      class=\"mat-button-icon\"\n      [class.is-mat-icon]=\"!options.buttonIcon.fontSet\"\n      [class.active]=\"options.active && !options.disabled\"\n      [ngClass]=\"options.buttonIcon.customClass\"\n      [fontSet]=\"options.buttonIcon.fontSet\"\n      [fontIcon]=\"options.buttonIcon.fontIcon\"\n      [color]=\"options.buttonIcon.color\"\n      [svgIcon]=\"options.buttonIcon.svgIcon\"\n      [inline]=\"options.buttonIcon.inline\">\n      {{ options.buttonIcon.fontSet ? '' : options.buttonIcon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <span\n    class=\"button-text\"\n    *ngIf=\"!options.fab\"\n    [class.active]=\"options.active && !options.disabled\">\n      {{ options.text }}\n  </span>\n\n  <ng-container\n    *ngIf=\"options.fab && options.icon\">\n    <mat-icon\n      [fontSet]=\"options.icon.fontSet\"\n      [fontIcon]=\"options.icon.fontIcon\"\n      [color]=\"options.icon.color\"\n      [svgIcon]=\"options.icon.svgIcon\"\n      [inline]=\"options.icon.inline\">\n        {{ options.icon.fontSet ? '' : options.icon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <mat-spinner class=\"spinner\"\n    *ngIf=\"options.active && !options.disabled\"\n    [diameter]=\"options.fab ? 58 : options.spinnerSize\"\n    [color]=\"options.spinnerColor\"\n    [mode]=\"options.mode\"\n    [value]=\"options.value\"\n    [class.active]=\"options.active && !options.disabled\">\n  </mat-spinner>\n</button>\n", styles: [":host button{outline:none}:host button.active{cursor:not-allowed}:host button ::ng-deep .mat-button-wrapper{display:flex;align-items:center;justify-content:center}:host button.fullWidth{width:100%}:host button.mat-fab .spinner{margin-top:-15px}:host button .spinner{position:absolute;top:25%;opacity:0;transition:opacity .3s ease-in-out}:host button .spinner.active{opacity:1}:host button .button-text{opacity:1;transition:opacity .3s ease-in-out}:host button .button-text.active{opacity:0}:host button mat-icon.mat-button-icon{padding-right:5px;transition:opacity .3s ease-in-out}:host button mat-icon.mat-button-icon.is-mat-icon{font-size:18px;position:relative;top:3px}:host button mat-icon.mat-button-icon.active{opacity:0}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [GLOBAL_CONFIG]
            }] }]; }, { options: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0LXByb2dyZXNzLWJ1dHRvbnMvc3JjL2xpYi9jb21wb25lbnQvc3Bpbm5lci1idXR0b24vc3Bpbm5lci1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0LXByb2dyZXNzLWJ1dHRvbnMvc3JjL2xpYi9jb21wb25lbnQvc3Bpbm5lci1idXR0b24vc3Bpbm5lci1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBR1osTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxhQUFhLEdBRWQsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7OztJQ0ZsRCw2QkFDNkI7SUFDM0IsbUNBU3VDO0lBQ3JDLFlBQ0Y7SUFBQSxpQkFBVztJQUNiLDBCQUFlOzs7SUFWWCxlQUFpRDtJQUFqRCxpRUFBaUQsNkRBQUE7SUFFakQsK0RBQTBDLDhDQUFBLGdEQUFBLDBDQUFBLDhDQUFBLDRDQUFBO0lBTTFDLGVBQ0Y7SUFERSw0R0FDRjs7O0lBR0YsK0JBR3VEO0lBQ25ELFlBQ0o7SUFBQSxpQkFBTzs7O0lBRkwsMkVBQW9EO0lBQ2xELGVBQ0o7SUFESSxvREFDSjs7O0lBRUEsNkJBQ3NDO0lBQ3BDLG1DQUtpQztJQUM3QixZQUNKO0lBQUEsaUJBQVc7SUFDYiwwQkFBZTs7O0lBUFgsZUFBZ0M7SUFBaEMscURBQWdDLDBDQUFBLG9DQUFBLHdDQUFBLHNDQUFBO0lBSzlCLGVBQ0o7SUFESSxnR0FDSjs7O0lBR0YsaUNBT2M7OztJQURaLDJFQUFvRDtJQUpwRCwrRUFBbUQsc0NBQUEsNkJBQUEsK0JBQUE7O0FEM0J2RCxNQUFNLE9BQU8seUJBQXlCO0lBZXBDLFlBQTJDLE1BQW9CO1FBQXBCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFUckQsYUFBUSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO0lBU1osQ0FBQztJQU41RCxXQUFXLENBQUMsS0FBaUI7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBSUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWTtZQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN2RCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU8sWUFBWSxDQUFDLGFBQXVDLEVBQUUsT0FBaUM7UUFDN0YsS0FBSyxNQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUU7WUFDL0IsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUNuRDtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztTQUN2RDtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7a0dBM0NVLHlCQUF5Qix1QkFlaEIsYUFBYTs0RUFmdEIseUJBQXlCOzRHQUF6Qix1QkFBbUI7O1FDdEJoQyxpQ0FVa0Q7UUFFaEQsNkZBY2U7UUFFZiw0RUFLTztRQUVQLDRGQVVlO1FBRWYsMEZBT2M7UUFDaEIsaUJBQVM7O1FBcERQLDRDQUErQixvQ0FBQSx5Q0FBQSwyQ0FBQSxxQ0FBQSw0QkFBQTtRQUYvQix1Q0FBcUIsa0NBQUEsb0NBQUEsd0RBQUE7UUFZbEIsZUFBd0I7UUFBeEIsNkNBQXdCO1FBaUJ4QixlQUFrQjtRQUFsQix1Q0FBa0I7UUFNbEIsZUFBaUM7UUFBakMsMERBQWlDO1FBWWpDLGVBQXlDO1FBQXpDLGtFQUF5Qzs7dUZEMUJqQyx5QkFBeUI7Y0FOckMsU0FBUzsyQkFFRSxvQkFBb0I7O3NCQW1CakIsTUFBTTt1QkFBQyxhQUFhO3dCQWR4QixPQUFPO2tCQUFmLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUVJLFFBQVE7a0JBQWpCLE1BQU07WUFHQSxXQUFXO2tCQURqQixZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgSG9zdExpc3RlbmVyLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFByb2dyZXNzQnV0dG9uT3B0aW9ucyB9IGZyb20gJy4uLy4uL21hdC1wcm9ncmVzcy1idXR0b25zLmludGVyZmFjZSc7XG5pbXBvcnQge1xuICBHTE9CQUxfQ09ORklHLFxuICBHbG9iYWxDb25maWcsXG59IGZyb20gJy4uLy4uL21hdC1wcm9ncmVzcy1idXR0b25zLmluamVjdGlvbi10b2tlbic7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWF0LXNwaW5uZXItYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NwaW5uZXItYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3Bpbm5lci1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0U3Bpbm5lckJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IE1hdFByb2dyZXNzQnV0dG9uT3B0aW9ucztcbiAgQElucHV0KCkgYnV0dG9uSWQ6IHN0cmluZztcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgYnRuQ2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBoYW5kbGVDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGVkICYmICF0aGlzLm9wdGlvbnMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmJ0bkNsaWNrLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoR0xPQkFMX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IEdsb2JhbENvbmZpZykge31cblxuICBnZXQgY29uZmlnRXhpc3RzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuYnV0dG9uSWQgJiYgISF0aGlzLmNvbmZpZztcbiAgfVxuXG4gIGdldCBnbG9iYWxDb25maWcoKTogTWF0UHJvZ3Jlc3NCdXR0b25PcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWdFeGlzdHNcbiAgICAgID8gdGhpcy5jb25maWcuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gdGhpcy5idXR0b25JZClcbiAgICAgIDogdGhpcy5vcHRpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBtZXJnZU9iamVjdHMoZ2xvYmFsT3B0aW9uczogTWF0UHJvZ3Jlc3NCdXR0b25PcHRpb25zLCBvcHRpb25zOiBNYXRQcm9ncmVzc0J1dHRvbk9wdGlvbnMpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBnbG9iYWxPcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9uc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3B0aW9uc1trZXldID0gZ2xvYmFsT3B0aW9uc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5hY3RpdmUgPSBjaGFuZ2VzLmFjdGl2ZS5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZGlzYWJsZWQgPSBjaGFuZ2VzLmRpc2FibGVkLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgdGhpcy5tZXJnZU9iamVjdHModGhpcy5nbG9iYWxDb25maWcsIHRoaXMub3B0aW9ucyk7XG4gIH1cbn1cbiIsIjxidXR0b24gbWF0LWJ1dHRvblxuICBbdHlwZV09XCJvcHRpb25zLnR5cGVcIlxuICBbY29sb3JdPVwib3B0aW9ucy5idXR0b25Db2xvclwiXG4gIFtjbGFzcy5hY3RpdmVdPVwib3B0aW9ucy5hY3RpdmVcIlxuICBbY2xhc3MuZnVsbFdpZHRoXT1cIm9wdGlvbnMuZnVsbFdpZHRoXCJcbiAgW2NsYXNzLm1hdC1yYWlzZWQtYnV0dG9uXT1cIm9wdGlvbnMucmFpc2VkXCJcbiAgW2NsYXNzLm1hdC1zdHJva2VkLWJ1dHRvbl09XCJvcHRpb25zLnN0cm9rZWRcIlxuICBbY2xhc3MubWF0LWZsYXQtYnV0dG9uXT1cIm9wdGlvbnMuZmxhdFwiXG4gIFtjbGFzcy5tYXQtZmFiXT1cIm9wdGlvbnMuZmFiXCJcbiAgW25nQ2xhc3NdPVwib3B0aW9ucy5jdXN0b21DbGFzc1wiXG4gIFtkaXNhYmxlZF09XCJvcHRpb25zLmFjdGl2ZSB8fCBvcHRpb25zLmRpc2FibGVkXCI+XG5cbiAgPG5nLWNvbnRhaW5lclxuICAgICpuZ0lmPVwib3B0aW9ucy5idXR0b25JY29uXCI+XG4gICAgPG1hdC1pY29uXG4gICAgICBjbGFzcz1cIm1hdC1idXR0b24taWNvblwiXG4gICAgICBbY2xhc3MuaXMtbWF0LWljb25dPVwiIW9wdGlvbnMuYnV0dG9uSWNvbi5mb250U2V0XCJcbiAgICAgIFtjbGFzcy5hY3RpdmVdPVwib3B0aW9ucy5hY3RpdmUgJiYgIW9wdGlvbnMuZGlzYWJsZWRcIlxuICAgICAgW25nQ2xhc3NdPVwib3B0aW9ucy5idXR0b25JY29uLmN1c3RvbUNsYXNzXCJcbiAgICAgIFtmb250U2V0XT1cIm9wdGlvbnMuYnV0dG9uSWNvbi5mb250U2V0XCJcbiAgICAgIFtmb250SWNvbl09XCJvcHRpb25zLmJ1dHRvbkljb24uZm9udEljb25cIlxuICAgICAgW2NvbG9yXT1cIm9wdGlvbnMuYnV0dG9uSWNvbi5jb2xvclwiXG4gICAgICBbc3ZnSWNvbl09XCJvcHRpb25zLmJ1dHRvbkljb24uc3ZnSWNvblwiXG4gICAgICBbaW5saW5lXT1cIm9wdGlvbnMuYnV0dG9uSWNvbi5pbmxpbmVcIj5cbiAgICAgIHt7IG9wdGlvbnMuYnV0dG9uSWNvbi5mb250U2V0ID8gJycgOiBvcHRpb25zLmJ1dHRvbkljb24uZm9udEljb24gfX1cbiAgICA8L21hdC1pY29uPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8c3BhblxuICAgIGNsYXNzPVwiYnV0dG9uLXRleHRcIlxuICAgICpuZ0lmPVwiIW9wdGlvbnMuZmFiXCJcbiAgICBbY2xhc3MuYWN0aXZlXT1cIm9wdGlvbnMuYWN0aXZlICYmICFvcHRpb25zLmRpc2FibGVkXCI+XG4gICAgICB7eyBvcHRpb25zLnRleHQgfX1cbiAgPC9zcGFuPlxuXG4gIDxuZy1jb250YWluZXJcbiAgICAqbmdJZj1cIm9wdGlvbnMuZmFiICYmIG9wdGlvbnMuaWNvblwiPlxuICAgIDxtYXQtaWNvblxuICAgICAgW2ZvbnRTZXRdPVwib3B0aW9ucy5pY29uLmZvbnRTZXRcIlxuICAgICAgW2ZvbnRJY29uXT1cIm9wdGlvbnMuaWNvbi5mb250SWNvblwiXG4gICAgICBbY29sb3JdPVwib3B0aW9ucy5pY29uLmNvbG9yXCJcbiAgICAgIFtzdmdJY29uXT1cIm9wdGlvbnMuaWNvbi5zdmdJY29uXCJcbiAgICAgIFtpbmxpbmVdPVwib3B0aW9ucy5pY29uLmlubGluZVwiPlxuICAgICAgICB7eyBvcHRpb25zLmljb24uZm9udFNldCA/ICcnIDogb3B0aW9ucy5pY29uLmZvbnRJY29uIH19XG4gICAgPC9tYXQtaWNvbj5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG1hdC1zcGlubmVyIGNsYXNzPVwic3Bpbm5lclwiXG4gICAgKm5nSWY9XCJvcHRpb25zLmFjdGl2ZSAmJiAhb3B0aW9ucy5kaXNhYmxlZFwiXG4gICAgW2RpYW1ldGVyXT1cIm9wdGlvbnMuZmFiID8gNTggOiBvcHRpb25zLnNwaW5uZXJTaXplXCJcbiAgICBbY29sb3JdPVwib3B0aW9ucy5zcGlubmVyQ29sb3JcIlxuICAgIFttb2RlXT1cIm9wdGlvbnMubW9kZVwiXG4gICAgW3ZhbHVlXT1cIm9wdGlvbnMudmFsdWVcIlxuICAgIFtjbGFzcy5hY3RpdmVdPVwib3B0aW9ucy5hY3RpdmUgJiYgIW9wdGlvbnMuZGlzYWJsZWRcIj5cbiAgPC9tYXQtc3Bpbm5lcj5cbjwvYnV0dG9uPlxuIl19
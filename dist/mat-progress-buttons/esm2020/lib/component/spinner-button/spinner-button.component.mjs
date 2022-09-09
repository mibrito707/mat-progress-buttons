import { Component, Input, Output, HostListener, EventEmitter, Inject, } from '@angular/core';
import { GLOBAL_CONFIG, } from '../../mat-progress-buttons.injection-token';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/progress-spinner";
import * as i4 from "@angular/material/icon";
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
MatSpinnerButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: MatSpinnerButtonComponent, deps: [{ token: GLOBAL_CONFIG }], target: i0.ɵɵFactoryTarget.Component });
MatSpinnerButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.1", type: MatSpinnerButtonComponent, selector: "mat-spinner-button", inputs: { options: "options", buttonId: "buttonId", active: "active", disabled: "disabled" }, outputs: { btnClick: "btnClick" }, host: { listeners: { "click": "handleClick($event)" } }, usesOnChanges: true, ngImport: i0, template: "<button mat-button\n  [type]=\"options.type\"\n  [color]=\"options.buttonColor\"\n  [class.active]=\"options.active\"\n  [class.fullWidth]=\"options.fullWidth\"\n  [class.mat-raised-button]=\"options.raised\"\n  [class.mat-stroked-button]=\"options.stroked\"\n  [class.mat-flat-button]=\"options.flat\"\n  [class.mat-fab]=\"options.fab\"\n  [ngClass]=\"options.customClass\"\n  [disabled]=\"options.active || options.disabled\">\n\n  <ng-container\n    *ngIf=\"options.buttonIcon\">\n    <mat-icon\n      class=\"mat-button-icon\"\n      [class.is-mat-icon]=\"!options.buttonIcon.fontSet\"\n      [class.active]=\"options.active && !options.disabled\"\n      [ngClass]=\"options.buttonIcon.customClass\"\n      [fontSet]=\"options.buttonIcon.fontSet\"\n      [fontIcon]=\"options.buttonIcon.fontIcon\"\n      [color]=\"options.buttonIcon.color\"\n      [svgIcon]=\"options.buttonIcon.svgIcon\"\n      [inline]=\"options.buttonIcon.inline\">\n      {{ options.buttonIcon.fontSet ? '' : options.buttonIcon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <span\n    class=\"button-text\"\n    *ngIf=\"!options.fab\"\n    [class.active]=\"options.active && !options.disabled\">\n      {{ options.text }}\n  </span>\n\n  <ng-container\n    *ngIf=\"options.fab && options.icon\">\n    <mat-icon\n      [fontSet]=\"options.icon.fontSet\"\n      [fontIcon]=\"options.icon.fontIcon\"\n      [color]=\"options.icon.color\"\n      [svgIcon]=\"options.icon.svgIcon\"\n      [inline]=\"options.icon.inline\">\n        {{ options.icon.fontSet ? '' : options.icon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <mat-spinner class=\"spinner\"\n    *ngIf=\"options.active && !options.disabled\"\n    [diameter]=\"options.fab ? 58 : options.spinnerSize\"\n    [color]=\"options.spinnerColor\"\n    [mode]=\"options.mode\"\n    [value]=\"options.value\"\n    [class.active]=\"options.active && !options.disabled\">\n  </mat-spinner>\n</button>\n", styles: [":host button{outline:none}:host button.active{cursor:not-allowed}:host button ::ng-deep .mat-button-wrapper{display:flex;align-items:center;justify-content:center}:host button.fullWidth{width:100%}:host button.mat-fab .spinner{margin-top:-15px}:host button .spinner{position:absolute;top:25%;opacity:0;transition:opacity .3s ease-in-out}:host button .spinner.active{opacity:1}:host button .button-text{opacity:1;transition:opacity .3s ease-in-out}:host button .button-text.active{opacity:0}:host button mat-icon.mat-button-icon{padding-right:5px;transition:opacity .3s ease-in-out}:host button mat-icon.mat-button-icon.is-mat-icon{font-size:18px;position:relative;top:3px}:host button mat-icon.mat-button-icon.active{opacity:0}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "diameter", "strokeWidth", "mode", "value"], exportAs: ["matProgressSpinner"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: MatSpinnerButtonComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0LXByb2dyZXNzLWJ1dHRvbnMvc3JjL2xpYi9jb21wb25lbnQvc3Bpbm5lci1idXR0b24vc3Bpbm5lci1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0LXByb2dyZXNzLWJ1dHRvbnMvc3JjL2xpYi9jb21wb25lbnQvc3Bpbm5lci1idXR0b24vc3Bpbm5lci1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBR1osTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxhQUFhLEdBRWQsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7O0FBUXBELE1BQU0sT0FBTyx5QkFBeUI7SUFlcEMsWUFBMkMsTUFBb0I7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQVRyRCxhQUFRLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7SUFTWixDQUFDO0lBTjVELFdBQVcsQ0FBQyxLQUFpQjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFJRCxJQUFJLFlBQVk7UUFDZCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZO1lBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTyxZQUFZLENBQUMsYUFBdUMsRUFBRSxPQUFpQztRQUM3RixLQUFLLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRTtZQUMvQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDOztzSEEzQ1UseUJBQXlCLGtCQWVoQixhQUFhOzBHQWZ0Qix5QkFBeUIseVFDdEJ0QyxtNURBd0RBOzJGRGxDYSx5QkFBeUI7a0JBTnJDLFNBQVM7K0JBRUUsb0JBQW9COzswQkFtQmpCLE1BQU07MkJBQUMsYUFBYTs0Q0FkeEIsT0FBTztzQkFBZixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUksUUFBUTtzQkFBakIsTUFBTTtnQkFHQSxXQUFXO3NCQURqQixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgSG9zdExpc3RlbmVyLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFByb2dyZXNzQnV0dG9uT3B0aW9ucyB9IGZyb20gJy4uLy4uL21hdC1wcm9ncmVzcy1idXR0b25zLmludGVyZmFjZSc7XG5pbXBvcnQge1xuICBHTE9CQUxfQ09ORklHLFxuICBHbG9iYWxDb25maWcsXG59IGZyb20gJy4uLy4uL21hdC1wcm9ncmVzcy1idXR0b25zLmluamVjdGlvbi10b2tlbic7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWF0LXNwaW5uZXItYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NwaW5uZXItYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3Bpbm5lci1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0U3Bpbm5lckJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IE1hdFByb2dyZXNzQnV0dG9uT3B0aW9ucztcbiAgQElucHV0KCkgYnV0dG9uSWQ6IHN0cmluZztcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgYnRuQ2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBoYW5kbGVDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGVkICYmICF0aGlzLm9wdGlvbnMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmJ0bkNsaWNrLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoR0xPQkFMX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IEdsb2JhbENvbmZpZykge31cblxuICBnZXQgY29uZmlnRXhpc3RzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuYnV0dG9uSWQgJiYgISF0aGlzLmNvbmZpZztcbiAgfVxuXG4gIGdldCBnbG9iYWxDb25maWcoKTogTWF0UHJvZ3Jlc3NCdXR0b25PcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWdFeGlzdHNcbiAgICAgID8gdGhpcy5jb25maWcuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gdGhpcy5idXR0b25JZClcbiAgICAgIDogdGhpcy5vcHRpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBtZXJnZU9iamVjdHMoZ2xvYmFsT3B0aW9uczogTWF0UHJvZ3Jlc3NCdXR0b25PcHRpb25zLCBvcHRpb25zOiBNYXRQcm9ncmVzc0J1dHRvbk9wdGlvbnMpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBnbG9iYWxPcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9uc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3B0aW9uc1trZXldID0gZ2xvYmFsT3B0aW9uc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5hY3RpdmUgPSBjaGFuZ2VzLmFjdGl2ZS5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZGlzYWJsZWQgPSBjaGFuZ2VzLmRpc2FibGVkLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgdGhpcy5tZXJnZU9iamVjdHModGhpcy5nbG9iYWxDb25maWcsIHRoaXMub3B0aW9ucyk7XG4gIH1cbn1cbiIsIjxidXR0b24gbWF0LWJ1dHRvblxuICBbdHlwZV09XCJvcHRpb25zLnR5cGVcIlxuICBbY29sb3JdPVwib3B0aW9ucy5idXR0b25Db2xvclwiXG4gIFtjbGFzcy5hY3RpdmVdPVwib3B0aW9ucy5hY3RpdmVcIlxuICBbY2xhc3MuZnVsbFdpZHRoXT1cIm9wdGlvbnMuZnVsbFdpZHRoXCJcbiAgW2NsYXNzLm1hdC1yYWlzZWQtYnV0dG9uXT1cIm9wdGlvbnMucmFpc2VkXCJcbiAgW2NsYXNzLm1hdC1zdHJva2VkLWJ1dHRvbl09XCJvcHRpb25zLnN0cm9rZWRcIlxuICBbY2xhc3MubWF0LWZsYXQtYnV0dG9uXT1cIm9wdGlvbnMuZmxhdFwiXG4gIFtjbGFzcy5tYXQtZmFiXT1cIm9wdGlvbnMuZmFiXCJcbiAgW25nQ2xhc3NdPVwib3B0aW9ucy5jdXN0b21DbGFzc1wiXG4gIFtkaXNhYmxlZF09XCJvcHRpb25zLmFjdGl2ZSB8fCBvcHRpb25zLmRpc2FibGVkXCI+XG5cbiAgPG5nLWNvbnRhaW5lclxuICAgICpuZ0lmPVwib3B0aW9ucy5idXR0b25JY29uXCI+XG4gICAgPG1hdC1pY29uXG4gICAgICBjbGFzcz1cIm1hdC1idXR0b24taWNvblwiXG4gICAgICBbY2xhc3MuaXMtbWF0LWljb25dPVwiIW9wdGlvbnMuYnV0dG9uSWNvbi5mb250U2V0XCJcbiAgICAgIFtjbGFzcy5hY3RpdmVdPVwib3B0aW9ucy5hY3RpdmUgJiYgIW9wdGlvbnMuZGlzYWJsZWRcIlxuICAgICAgW25nQ2xhc3NdPVwib3B0aW9ucy5idXR0b25JY29uLmN1c3RvbUNsYXNzXCJcbiAgICAgIFtmb250U2V0XT1cIm9wdGlvbnMuYnV0dG9uSWNvbi5mb250U2V0XCJcbiAgICAgIFtmb250SWNvbl09XCJvcHRpb25zLmJ1dHRvbkljb24uZm9udEljb25cIlxuICAgICAgW2NvbG9yXT1cIm9wdGlvbnMuYnV0dG9uSWNvbi5jb2xvclwiXG4gICAgICBbc3ZnSWNvbl09XCJvcHRpb25zLmJ1dHRvbkljb24uc3ZnSWNvblwiXG4gICAgICBbaW5saW5lXT1cIm9wdGlvbnMuYnV0dG9uSWNvbi5pbmxpbmVcIj5cbiAgICAgIHt7IG9wdGlvbnMuYnV0dG9uSWNvbi5mb250U2V0ID8gJycgOiBvcHRpb25zLmJ1dHRvbkljb24uZm9udEljb24gfX1cbiAgICA8L21hdC1pY29uPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8c3BhblxuICAgIGNsYXNzPVwiYnV0dG9uLXRleHRcIlxuICAgICpuZ0lmPVwiIW9wdGlvbnMuZmFiXCJcbiAgICBbY2xhc3MuYWN0aXZlXT1cIm9wdGlvbnMuYWN0aXZlICYmICFvcHRpb25zLmRpc2FibGVkXCI+XG4gICAgICB7eyBvcHRpb25zLnRleHQgfX1cbiAgPC9zcGFuPlxuXG4gIDxuZy1jb250YWluZXJcbiAgICAqbmdJZj1cIm9wdGlvbnMuZmFiICYmIG9wdGlvbnMuaWNvblwiPlxuICAgIDxtYXQtaWNvblxuICAgICAgW2ZvbnRTZXRdPVwib3B0aW9ucy5pY29uLmZvbnRTZXRcIlxuICAgICAgW2ZvbnRJY29uXT1cIm9wdGlvbnMuaWNvbi5mb250SWNvblwiXG4gICAgICBbY29sb3JdPVwib3B0aW9ucy5pY29uLmNvbG9yXCJcbiAgICAgIFtzdmdJY29uXT1cIm9wdGlvbnMuaWNvbi5zdmdJY29uXCJcbiAgICAgIFtpbmxpbmVdPVwib3B0aW9ucy5pY29uLmlubGluZVwiPlxuICAgICAgICB7eyBvcHRpb25zLmljb24uZm9udFNldCA/ICcnIDogb3B0aW9ucy5pY29uLmZvbnRJY29uIH19XG4gICAgPC9tYXQtaWNvbj5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG1hdC1zcGlubmVyIGNsYXNzPVwic3Bpbm5lclwiXG4gICAgKm5nSWY9XCJvcHRpb25zLmFjdGl2ZSAmJiAhb3B0aW9ucy5kaXNhYmxlZFwiXG4gICAgW2RpYW1ldGVyXT1cIm9wdGlvbnMuZmFiID8gNTggOiBvcHRpb25zLnNwaW5uZXJTaXplXCJcbiAgICBbY29sb3JdPVwib3B0aW9ucy5zcGlubmVyQ29sb3JcIlxuICAgIFttb2RlXT1cIm9wdGlvbnMubW9kZVwiXG4gICAgW3ZhbHVlXT1cIm9wdGlvbnMudmFsdWVcIlxuICAgIFtjbGFzcy5hY3RpdmVdPVwib3B0aW9ucy5hY3RpdmUgJiYgIW9wdGlvbnMuZGlzYWJsZWRcIj5cbiAgPC9tYXQtc3Bpbm5lcj5cbjwvYnV0dG9uPlxuIl19
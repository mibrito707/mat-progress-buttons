import { Component, Input, Output, EventEmitter, HostListener, Inject, } from '@angular/core';
import { GLOBAL_CONFIG } from '../../mat-progress-buttons.injection-token';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/progress-bar";
function MatBarButtonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-icon", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("is-mat-icon", !ctx_r0.options.buttonIcon.fontSet);
    i0.ɵɵproperty("ngClass", ctx_r0.options.buttonIcon.customClass)("fontSet", ctx_r0.options.buttonIcon.fontSet)("fontIcon", ctx_r0.options.buttonIcon.fontIcon)("color", ctx_r0.options.buttonIcon.color)("svgIcon", ctx_r0.options.buttonIcon.svgIcon)("inline", ctx_r0.options.buttonIcon.inline);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.options.buttonIcon.fontSet ? "" : ctx_r0.options.buttonIcon.fontIcon, " ");
} }
function MatBarButtonComponent_mat_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-progress-bar", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r1.options.barColor)("mode", ctx_r1.options.mode)("value", ctx_r1.options.value);
} }
export class MatBarButtonComponent {
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
MatBarButtonComponent.ɵfac = function MatBarButtonComponent_Factory(t) { return new (t || MatBarButtonComponent)(i0.ɵɵdirectiveInject(GLOBAL_CONFIG)); };
MatBarButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatBarButtonComponent, selectors: [["mat-bar-button"]], hostBindings: function MatBarButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function MatBarButtonComponent_click_HostBindingHandler($event) { return ctx.handleClick($event); });
    } }, inputs: { options: "options", buttonId: "buttonId", active: "active", disabled: "disabled" }, outputs: { btnClick: "btnClick" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 17, consts: [["mat-button", "", 3, "type", "color", "ngClass", "disabled"], [4, "ngIf"], ["class", "bar", 3, "color", "mode", "value", 4, "ngIf"], [3, "ngClass", "fontSet", "fontIcon", "color", "svgIcon", "inline"], [1, "bar", 3, "color", "mode", "value"]], template: function MatBarButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtemplate(1, MatBarButtonComponent_ng_container_1_Template, 3, 9, "ng-container", 1);
        i0.ɵɵelementStart(2, "span");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, MatBarButtonComponent_mat_progress_bar_4_Template, 1, 3, "mat-progress-bar", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("active", ctx.options.active)("mat-raised-button", ctx.options.raised)("mat-stroked-button", ctx.options.stroked)("mat-flat-button", ctx.options.flat)("fullWidth", ctx.options.fullWidth);
        i0.ɵɵproperty("type", ctx.options.type)("color", ctx.options.buttonColor)("ngClass", ctx.options.customClass)("disabled", ctx.options.active || ctx.options.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.options.buttonIcon);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.options.text);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.options.active && !ctx.options.disabled);
    } }, directives: [i1.MatButton, i2.NgClass, i2.NgIf, i3.MatIcon, i4.MatProgressBar], styles: ["[_nghost-%COMP%]   button.active[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]   button.fullWidth[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{position:absolute;top:0;left:0}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-right:5px}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.is-mat-icon[_ngcontent-%COMP%]{font-size:18px;position:relative;top:3px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatBarButtonComponent, [{
        type: Component,
        args: [{ selector: 'mat-bar-button', template: "<button\n  mat-button\n  [type]=\"options.type\"\n  [color]=\"options.buttonColor\"\n  [class.active]=\"options.active\"\n  [class.mat-raised-button]=\"options.raised\"\n  [class.mat-stroked-button]=\"options.stroked\"\n  [class.mat-flat-button]=\"options.flat\"\n  [class.fullWidth]=\"options.fullWidth\"\n  [ngClass]=\"options.customClass\"\n  [disabled]=\"options.active || options.disabled\"\n>\n  <ng-container *ngIf=\"options.buttonIcon\">\n    <mat-icon\n      [class.is-mat-icon]=\"!options.buttonIcon.fontSet\"\n      [ngClass]=\"options.buttonIcon.customClass\"\n      [fontSet]=\"options.buttonIcon.fontSet\"\n      [fontIcon]=\"options.buttonIcon.fontIcon\"\n      [color]=\"options.buttonIcon.color\"\n      [svgIcon]=\"options.buttonIcon.svgIcon\"\n      [inline]=\"options.buttonIcon.inline\"\n    >\n      {{ options.buttonIcon.fontSet ? '' : options.buttonIcon.fontIcon }}\n    </mat-icon>\n  </ng-container>\n\n  <span>{{ options.text }}</span>\n\n  <mat-progress-bar\n    class=\"bar\"\n    *ngIf=\"options.active && !options.disabled\"\n    [color]=\"options.barColor\"\n    [mode]=\"options.mode\"\n    [value]=\"options.value\"\n  >\n  </mat-progress-bar>\n</button>\n", styles: [":host button.active{cursor:not-allowed}:host button.fullWidth{width:100%}:host button .bar{position:absolute;top:0;left:0}:host button mat-icon{padding-right:5px}:host button mat-icon.is-mat-icon{font-size:18px;position:relative;top:3px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXQtcHJvZ3Jlc3MtYnV0dG9ucy9zcmMvbGliL2NvbXBvbmVudC9iYXItYnV0dG9uL2Jhci1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0LXByb2dyZXNzLWJ1dHRvbnMvc3JjL2xpYi9jb21wb25lbnQvYmFyLWJ1dHRvbi9iYXItYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxFQUdaLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFnQixNQUFNLDRDQUE0QyxDQUFDOzs7Ozs7O0lDQ3ZGLDZCQUF5QztJQUN2QyxtQ0FRQztJQUNDLFlBQ0Y7SUFBQSxpQkFBVztJQUNiLDBCQUFlOzs7SUFWWCxlQUFpRDtJQUFqRCxpRUFBaUQ7SUFDakQsK0RBQTBDLDhDQUFBLGdEQUFBLDBDQUFBLDhDQUFBLDRDQUFBO0lBTzFDLGVBQ0Y7SUFERSw0R0FDRjs7O0lBS0Ysc0NBT21COzs7SUFKakIsK0NBQTBCLDZCQUFBLCtCQUFBOztBRFo5QixNQUFNLE9BQU8scUJBQXFCO0lBZWhDLFlBQTJDLE1BQW9CO1FBQXBCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFUckQsYUFBUSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO0lBU1osQ0FBQztJQU5uRSxXQUFXLENBQUMsS0FBaUI7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBSUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWTtZQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN2RCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekQsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQzs7MEZBbkNVLHFCQUFxQix1QkFlWixhQUFhO3dFQWZ0QixxQkFBcUI7d0dBQXJCLHVCQUFtQjs7UUNuQmhDLGlDQVdDO1FBQ0Msd0ZBWWU7UUFFZiw0QkFBTTtRQUFBLFlBQWtCO1FBQUEsaUJBQU87UUFFL0IsZ0dBT21CO1FBQ3JCLGlCQUFTOztRQWhDUCw0Q0FBK0IseUNBQUEsMkNBQUEscUNBQUEsb0NBQUE7UUFGL0IsdUNBQXFCLGtDQUFBLG9DQUFBLHdEQUFBO1FBVU4sZUFBd0I7UUFBeEIsNkNBQXdCO1FBY2pDLGVBQWtCO1FBQWxCLHNDQUFrQjtRQUlyQixlQUF5QztRQUF6QyxrRUFBeUM7O3VGRFhqQyxxQkFBcUI7Y0FOakMsU0FBUzsyQkFFRSxnQkFBZ0I7O3NCQW1CYixNQUFNO3VCQUFDLGFBQWE7d0JBZHhCLE9BQU87a0JBQWYsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBRUksUUFBUTtrQkFBakIsTUFBTTtZQUdQLFdBQVc7a0JBRFYsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc0J1dHRvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9tYXQtcHJvZ3Jlc3MtYnV0dG9ucy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgR0xPQkFMX0NPTkZJRywgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vbWF0LXByb2dyZXNzLWJ1dHRvbnMuaW5qZWN0aW9uLXRva2VuJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdtYXQtYmFyLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXItYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFyLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRCYXJCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBvcHRpb25zOiBNYXRQcm9ncmVzc0J1dHRvbk9wdGlvbnM7XG4gIEBJbnB1dCgpIGJ1dHRvbklkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIGJ0bkNsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBoYW5kbGVDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGVkICYmICF0aGlzLm9wdGlvbnMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmJ0bkNsaWNrLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoR0xPQkFMX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IEdsb2JhbENvbmZpZykge31cblxuICBnZXQgY29uZmlnRXhpc3RzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuYnV0dG9uSWQgJiYgISF0aGlzLmNvbmZpZztcbiAgfVxuXG4gIGdldCBnbG9iYWxDb25maWcoKTogTWF0UHJvZ3Jlc3NCdXR0b25PcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWdFeGlzdHNcbiAgICAgID8gdGhpcy5jb25maWcuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gdGhpcy5idXR0b25JZClcbiAgICAgIDogdGhpcy5vcHRpb25zO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4udGhpcy5nbG9iYWxDb25maWcsIC4uLnRoaXMub3B0aW9ucyB9O1xuICAgIGlmIChjaGFuZ2VzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5vcHRpb25zLmFjdGl2ZSA9IGNoYW5nZXMuYWN0aXZlLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5kaXNhYmxlZCA9IGNoYW5nZXMuZGlzYWJsZWQuY3VycmVudFZhbHVlO1xuICAgIH1cbiAgfVxufVxuIiwiPGJ1dHRvblxuICBtYXQtYnV0dG9uXG4gIFt0eXBlXT1cIm9wdGlvbnMudHlwZVwiXG4gIFtjb2xvcl09XCJvcHRpb25zLmJ1dHRvbkNvbG9yXCJcbiAgW2NsYXNzLmFjdGl2ZV09XCJvcHRpb25zLmFjdGl2ZVwiXG4gIFtjbGFzcy5tYXQtcmFpc2VkLWJ1dHRvbl09XCJvcHRpb25zLnJhaXNlZFwiXG4gIFtjbGFzcy5tYXQtc3Ryb2tlZC1idXR0b25dPVwib3B0aW9ucy5zdHJva2VkXCJcbiAgW2NsYXNzLm1hdC1mbGF0LWJ1dHRvbl09XCJvcHRpb25zLmZsYXRcIlxuICBbY2xhc3MuZnVsbFdpZHRoXT1cIm9wdGlvbnMuZnVsbFdpZHRoXCJcbiAgW25nQ2xhc3NdPVwib3B0aW9ucy5jdXN0b21DbGFzc1wiXG4gIFtkaXNhYmxlZF09XCJvcHRpb25zLmFjdGl2ZSB8fCBvcHRpb25zLmRpc2FibGVkXCJcbj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnMuYnV0dG9uSWNvblwiPlxuICAgIDxtYXQtaWNvblxuICAgICAgW2NsYXNzLmlzLW1hdC1pY29uXT1cIiFvcHRpb25zLmJ1dHRvbkljb24uZm9udFNldFwiXG4gICAgICBbbmdDbGFzc109XCJvcHRpb25zLmJ1dHRvbkljb24uY3VzdG9tQ2xhc3NcIlxuICAgICAgW2ZvbnRTZXRdPVwib3B0aW9ucy5idXR0b25JY29uLmZvbnRTZXRcIlxuICAgICAgW2ZvbnRJY29uXT1cIm9wdGlvbnMuYnV0dG9uSWNvbi5mb250SWNvblwiXG4gICAgICBbY29sb3JdPVwib3B0aW9ucy5idXR0b25JY29uLmNvbG9yXCJcbiAgICAgIFtzdmdJY29uXT1cIm9wdGlvbnMuYnV0dG9uSWNvbi5zdmdJY29uXCJcbiAgICAgIFtpbmxpbmVdPVwib3B0aW9ucy5idXR0b25JY29uLmlubGluZVwiXG4gICAgPlxuICAgICAge3sgb3B0aW9ucy5idXR0b25JY29uLmZvbnRTZXQgPyAnJyA6IG9wdGlvbnMuYnV0dG9uSWNvbi5mb250SWNvbiB9fVxuICAgIDwvbWF0LWljb24+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxzcGFuPnt7IG9wdGlvbnMudGV4dCB9fTwvc3Bhbj5cblxuICA8bWF0LXByb2dyZXNzLWJhclxuICAgIGNsYXNzPVwiYmFyXCJcbiAgICAqbmdJZj1cIm9wdGlvbnMuYWN0aXZlICYmICFvcHRpb25zLmRpc2FibGVkXCJcbiAgICBbY29sb3JdPVwib3B0aW9ucy5iYXJDb2xvclwiXG4gICAgW21vZGVdPVwib3B0aW9ucy5tb2RlXCJcbiAgICBbdmFsdWVdPVwib3B0aW9ucy52YWx1ZVwiXG4gID5cbiAgPC9tYXQtcHJvZ3Jlc3MtYmFyPlxuPC9idXR0b24+XG4iXX0=
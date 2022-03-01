import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSpinnerButtonComponent } from './component/spinner-button/spinner-button.component';
import { MatBarButtonComponent } from './component/bar-button/bar-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { GLOBAL_CONFIG } from './mat-progress-buttons.injection-token';
import * as i0 from "@angular/core";
// Export module's public API
export { MatSpinnerButtonComponent } from './component/spinner-button/spinner-button.component';
export { MatBarButtonComponent } from './component/bar-button/bar-button.component';
export class MatProgressButtonsModule {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatProgressButtonsModule, [{
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MatProgressButtonsModule, { declarations: [MatSpinnerButtonComponent, MatBarButtonComponent], imports: [CommonModule,
        MatButtonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatIconModule], exports: [MatSpinnerButtonComponent, MatBarButtonComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXByb2dyZXNzLWJ1dHRvbnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0LXByb2dyZXNzLWJ1dHRvbnMvc3JjL2xpYi9tYXQtcHJvZ3Jlc3MtYnV0dG9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQWdCLE1BQU0sd0NBQXdDLENBQUM7O0FBRXJGLDZCQUE2QjtBQUM3QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQWVwRixNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQ1osTUFBcUI7UUFFckIsT0FBTztZQUNMLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUMxRCxDQUFDO0lBQ0osQ0FBQzs7Z0dBUlUsd0JBQXdCOzBFQUF4Qix3QkFBd0I7OEVBWDFCO1lBQ1AsWUFBWTtZQUNaLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsd0JBQXdCO1lBQ3hCLGVBQWU7WUFDZixhQUFhO1NBQ2Q7dUZBSVUsd0JBQXdCO2NBWnBDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLG9CQUFvQjtvQkFDcEIsd0JBQXdCO29CQUN4QixlQUFlO29CQUNmLGFBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFLENBQUMseUJBQXlCLEVBQUUscUJBQXFCLENBQUM7Z0JBQzNELFlBQVksRUFBRSxDQUFDLHlCQUF5QixFQUFFLHFCQUFxQixDQUFDO2FBQ2pFOzt3RkFDWSx3QkFBd0IsbUJBRnBCLHlCQUF5QixFQUFFLHFCQUFxQixhQVI3RCxZQUFZO1FBQ1osZUFBZTtRQUNmLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsZUFBZTtRQUNmLGFBQWEsYUFFTCx5QkFBeUIsRUFBRSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0U3Bpbm5lckJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3NwaW5uZXItYnV0dG9uL3NwaW5uZXItYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRCYXJCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9iYXItYnV0dG9uL2Jhci1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbmltcG9ydCB7IE1hdFJpcHBsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgR0xPQkFMX0NPTkZJRywgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9tYXQtcHJvZ3Jlc3MtYnV0dG9ucy5pbmplY3Rpb24tdG9rZW4nO1xuXG4vLyBFeHBvcnQgbW9kdWxlJ3MgcHVibGljIEFQSVxuZXhwb3J0IHsgTWF0U3Bpbm5lckJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3NwaW5uZXItYnV0dG9uL3NwaW5uZXItYnV0dG9uLmNvbXBvbmVudCc7XG5leHBvcnQgeyBNYXRCYXJCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9iYXItYnV0dG9uL2Jhci1idXR0b24uY29tcG9uZW50JztcbmV4cG9ydCB7IE1hdFByb2dyZXNzQnV0dG9uT3B0aW9ucyB9IGZyb20gJy4vbWF0LXByb2dyZXNzLWJ1dHRvbnMuaW50ZXJmYWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbTWF0U3Bpbm5lckJ1dHRvbkNvbXBvbmVudCwgTWF0QmFyQnV0dG9uQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTWF0U3Bpbm5lckJ1dHRvbkNvbXBvbmVudCwgTWF0QmFyQnV0dG9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0UHJvZ3Jlc3NCdXR0b25zTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoXG4gICAgY29uZmlnPzogR2xvYmFsQ29uZmlnXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TWF0UHJvZ3Jlc3NCdXR0b25zTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNYXRQcm9ncmVzc0J1dHRvbnNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEdMT0JBTF9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfV0sXG4gICAgfTtcbiAgfVxufVxuIl19
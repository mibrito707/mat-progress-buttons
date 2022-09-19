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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXByb2dyZXNzLWJ1dHRvbnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvbWF0LXByb2dyZXNzLWJ1dHRvbnMvc3JjL2xpYi9tYXQtcHJvZ3Jlc3MtYnV0dG9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQWdCLE1BQU0sd0NBQXdDLENBQUM7O0FBRXJGLDZCQUE2QjtBQUM3QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQWVwRixNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQ1osTUFBcUI7UUFFckIsT0FBTztZQUNMLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUMxRCxDQUFDO0lBQ0osQ0FBQzs7cUhBUlUsd0JBQXdCO3NIQUF4Qix3QkFBd0IsaUJBRnBCLHlCQUF5QixFQUFFLHFCQUFxQixhQVI3RCxZQUFZO1FBQ1osZUFBZTtRQUNmLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsZUFBZTtRQUNmLGFBQWEsYUFFTCx5QkFBeUIsRUFBRSxxQkFBcUI7c0hBRy9DLHdCQUF3QixZQVZqQyxZQUFZO1FBQ1osZUFBZTtRQUNmLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsZUFBZTtRQUNmLGFBQWE7MkZBS0osd0JBQXdCO2tCQVpwQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLGVBQWU7d0JBQ2YsYUFBYTtxQkFDZDtvQkFDRCxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxxQkFBcUIsQ0FBQztvQkFDM0QsWUFBWSxFQUFFLENBQUMseUJBQXlCLEVBQUUscUJBQXFCLENBQUM7aUJBQ2pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hdFNwaW5uZXJCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9zcGlubmVyLWJ1dHRvbi9zcGlubmVyLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0QmFyQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvYmFyLWJ1dHRvbi9iYXItYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IEdMT0JBTF9DT05GSUcsIEdsb2JhbENvbmZpZyB9IGZyb20gJy4vbWF0LXByb2dyZXNzLWJ1dHRvbnMuaW5qZWN0aW9uLXRva2VuJztcblxuLy8gRXhwb3J0IG1vZHVsZSdzIHB1YmxpYyBBUElcbmV4cG9ydCB7IE1hdFNwaW5uZXJCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9zcGlubmVyLWJ1dHRvbi9zcGlubmVyLWJ1dHRvbi5jb21wb25lbnQnO1xuZXhwb3J0IHsgTWF0QmFyQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvYmFyLWJ1dHRvbi9iYXItYnV0dG9uLmNvbXBvbmVudCc7XG5leHBvcnQgeyBNYXRQcm9ncmVzc0J1dHRvbk9wdGlvbnMgfSBmcm9tICcuL21hdC1wcm9ncmVzcy1idXR0b25zLmludGVyZmFjZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW01hdFNwaW5uZXJCdXR0b25Db21wb25lbnQsIE1hdEJhckJ1dHRvbkNvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW01hdFNwaW5uZXJCdXR0b25Db21wb25lbnQsIE1hdEJhckJ1dHRvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdFByb2dyZXNzQnV0dG9uc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIGNvbmZpZz86IEdsb2JhbENvbmZpZ1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE1hdFByb2dyZXNzQnV0dG9uc01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWF0UHJvZ3Jlc3NCdXR0b25zTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBHTE9CQUxfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH1dLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
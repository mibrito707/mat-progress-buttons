import {
  Component,
  Input,
  Output,
  HostListener,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  Inject,
} from '@angular/core';
import { MatProgressButtonOptions } from '../../mat-progress-buttons.interface';
import {
  GLOBAL_CONFIG,
  GlobalConfig,
} from '../../mat-progress-buttons.injection-token';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mat-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss'],
})
export class MatSpinnerButtonComponent implements OnChanges {
  @Input() options: MatProgressButtonOptions;
  @Input() buttonId: string;
  @Input() active: boolean;
  @Input() disabled: boolean;

  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  @HostListener('click', ['$event'])
  public handleClick(event: MouseEvent): boolean {
    console.log('options', this.options);
    if (!this.options.disabled && !this.options.active) {
      this.btnClick.emit(event);
    }
    event.preventDefault();
    event.stopImmediatePropagation();
    return false;
  }

  constructor(@Inject(GLOBAL_CONFIG) private config: GlobalConfig) {
    console.log(config);
  }

  get configExists(): boolean {
    return !!this.buttonId && !!this.config;
  }

  get globalConfig(): MatProgressButtonOptions {
    return this.configExists
      ? this.config.find((item) => item.id === this.buttonId)
      : this.options;
  }

  private mergeObjects(globalOptions: MatProgressButtonOptions, options: MatProgressButtonOptions): void {
    for (const key in globalOptions) {
      if (options[key] === undefined) {
        options[key] = globalOptions[key];
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.active) {
      this.options.active = changes.active.currentValue;
    }
    if (changes.disabled) {
      this.options.disabled = changes.disabled.currentValue;
    }
    this.mergeObjects(this.globalConfig, this.options);
  }
}

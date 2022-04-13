import { ControlValueAccessor, FormControl } from "@angular/forms";
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Provider,
  SimpleChanges,
} from "@angular/core";

export const COUNTER_VALUE_ACCESSOR: Provider = [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterInputComponent),
    multi: true,
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CounterInputComponent),
    multi: true,
  },
];

export function createCounterRangeValidator(maxValue: number, minValue: number) {
  return (c: FormControl) => {
    const err = {
      rangeError: {
        given: c.value,
        max: maxValue || 10,
        min: minValue || 0,
      },
    };

    return c.value > +maxValue || c.value < +minValue ? err : null;
  };
}

@Component({
  selector: "app-counter-input",
  templateUrl: "./counter-input.component.html",
  styleUrls: ["./counter-input.component.scss"],
  providers: [...COUNTER_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterInputComponent implements OnChanges, ControlValueAccessor {
  @Input("counterValue") _counterValue = 0;
  @Input() counterRangeMax;
  @Input() counterRangeMin;

  propagateChange: any = () => {};
  validatorFn: any = () => {};

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val: number) {
    this._counterValue = val;
    this.propagateChange(val);
  }

  public ngOnChanges(inputs: SimpleChanges) {
    if (inputs.counterRangeMax || inputs.counterRangeMin) {
      this.validatorFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
    }
  }

  writeValue(value: number) {
    if (value) {
      this.counterValue = value;
    }
  }

  registerOnChange(fn: () => {}) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  increase() {
    this.counterValue++;
  }

  decrease() {
    this.counterValue--;
  }

  validate(c: FormControl) {
    return this.validatorFn(c);
  }
}

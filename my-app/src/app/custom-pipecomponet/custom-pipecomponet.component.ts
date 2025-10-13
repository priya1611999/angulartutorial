import { Component } from '@angular/core';
import { CurrencyConverterPipe } from '../pipe/currency-converter-pipe';

@Component({
  selector: 'app-custom-pipecomponet',
  imports: [CurrencyConverterPipe],
  templateUrl: './custom-pipecomponet.component.html',
  styleUrl: './custom-pipecomponet.component.css'
})
export class CustomPipecomponetComponent {
amount = 10;
}

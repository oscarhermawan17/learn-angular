import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})

export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService)

  // get results() {
  //   return this.investmentService.resultData;
  // }

  // with computed, read only data
  results = computed(() => this.investmentService.resultData())

  // Optional without computed, and still read only
  // results = this.investmentService.resultData.asReadonly()
}

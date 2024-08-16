import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeService } from '../services/cake.service'; // Re-added import for CakeService

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItem: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private cakeService: CakeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchItem']) {
        this.searchItem = params['searchItem'];
      }
    });
  }

  search(): void {
    if (this.searchItem) {
      this.router.navigateByUrl('/search/' + this.searchItem);
      this.searchTextChanged.emit(this.searchItem);
      // You can use this.cakeService here if needed for any logic
    }
  }
}

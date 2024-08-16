import { Component, OnInit } from '@angular/core';
import { CakeService } from '../services/cake/cake.service';
import { cakes } from '../shared/models/cake';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl:'./landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  cakes: cakes[] = [];
  constructor(private cs: CakeService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if (params['searchItem'])
        this.cakes = this.cs.getAll().filter(cake => cake.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      else if(params['tag'])
      this.cakes = this.cs.getAllCakeByTag(params['tag'])
        else 
      this.cakes = this.cs.getAll();
    })
  }
}

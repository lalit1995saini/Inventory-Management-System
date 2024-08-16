import { Component,Input,OnInit} from '@angular/core';
// import { tag } from '../shared/models/tag';
import { CakeService } from '../services/cake/cake.service';
import { tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  @Input()
  foodpagetags?:string[];
  @Input()
  justifyContent:string='center';
  
  tags ?: tag[] = []
  constructor(private cs:CakeService){ }

  ngOnInit(): void {
    if(!this.foodpagetags)
     this.tags = this.cs.getAllTag()
  }

}

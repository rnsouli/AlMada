import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { SharedService } from '../../../services/shared.service';
import { FunctionsService } from '../../../services/functions.service';

import { _globals } from '../../../../includes/globals';
import { GlobalModel, CategoryModel, SubCategoryModel, SharedModel } from '../../../../includes/Models';

import { MomentModule } from 'angular2-moment';
//import 'moment/locale/ar-sa';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  CONTENT_PATH:string;
  RESIZED_CONTENT_PATH:string;

  category_template_whiteboxes:number;
  category_template_2_6:number;
  category_template_1_3_8:number;

  sharedModel:SharedModel;

  @Input() SubCategoryModels: SubCategoryModel[];
  
  constructor(private route: ActivatedRoute, private myFunctions:FunctionsService, private sharedService:SharedService, private http:HttpClient) { 
  }

  ngOnInit() {

    this.CONTENT_PATH = _globals.CONTENT_PATH;
    this.RESIZED_CONTENT_PATH = _globals.RESIZED_CONTENT_PATH;
    this.sharedService.sharedModel.subscribe((sharedModel:any) => this.sharedModel = sharedModel);

    this.category_template_whiteboxes = _globals.category_template_whiteboxes;
    this.category_template_2_6 = _globals.category_template_2_6;
    this.category_template_1_3_8 = _globals.category_template_1_3_8;
    this.myFunctions.hide_comments_counter();

  }

}

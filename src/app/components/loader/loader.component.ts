import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderInterceptor } from 'src/app/services/interceptors/interceptor-loader.service';
import { LoaderService } from 'src/app/services/loaderService/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isLoading !: boolean

  constructor(public loader : LoaderService) {}

  ngOnInit(): void {
    this.loader.loader$.subscribe(item => this.isLoading = item)
  }

  getLoading = () => {
    return this.isLoading
  }

}

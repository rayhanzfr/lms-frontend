import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingService } from 'projects/core/src/app/services/loading/loading.service';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Event
} from '@angular/router'
import { RouteConfigLoadEnd } from "@angular/router";
import { RouteConfigLoadStart } from "@angular/router";
import { debounceTime, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  loadingSubscription!: Subscription
  load?:boolean
  constructor(private loading:LoadingService,private router: Router) {
    this.router.events.subscribe((event: Event) => {
      var asyncLoadCount = 0;
      if ( event instanceof RouteConfigLoadStart ) {
 
        asyncLoadCount++;

      } else if ( event instanceof RouteConfigLoadEnd ) {

        asyncLoadCount--;

      }

      this.load = !! asyncLoadCount;
    });
  }
  ngOnInit(): void {
    this.loadingSubscription = this.loading.loadingStatus.pipe(
      debounceTime(200)
    ).subscribe((value) => {
      this.load = value;
    });
  }  
  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}

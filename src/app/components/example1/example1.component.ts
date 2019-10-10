import { Component, OnInit, OnDestroy } from '@angular/core';
import { BroadcasterService } from 'src/app/service/broadcaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit, OnDestroy {
  constructor(private broadcasterService: BroadcasterService, private router: Router) { }
  broadCasterEvent: any;
  subscription: any = [];
  ngOnInit() {
    this.sendData();
    this.recivedData();
  }

  sendData() {
    setTimeout(() => {
      this.broadcasterService.broadcast("loginDashboard:newActivity", "Hi login user");
      this.broadcasterService.broadcast("signUpDashboard:newUser", "Hi sign up user");
      this.broadcasterService.broadcast("resetPasswordDashboard:newAction", "Hi reset user");
    }, 2000);

  }

  recivedData() {
    this.subscription.push(this.broadCasterEvent = this.broadcasterService.on("loginDashboard:newActivity").subscribe(data => {
      console.log("Data Recived 1", data);
    }));
    this.subscription.push(this.broadCasterEvent = this.broadcasterService.on("signUpDashboard:newUser").subscribe(data => {
      console.log("Data Recived 2", data);
    }));
    this.subscription.push(this.broadCasterEvent = this.broadcasterService.on("resetPasswordDashboard:newAction").subscribe(data => {
      console.log("Data Recived 3", data);
    }));
  }

  ngOnDestroy(): void {
    this.broadCasterEvent.unsubscribe();
    console.log("un-subscribe")
  }

  pageChange() {
    this.router.navigate(['/example2'])
  }
  seeTheSubscription() {
    console.log("-->", this.subscription)
  }

}

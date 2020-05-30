import { Component, OnInit } from '@angular/core';
import { AngularAgoraRtcService, Stream } from 'angular-agora-rtc';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {Renderer2} from '@angular/core';
import { CountdownModule } from "ngx-countdown";
import { DataService } from './../../services/data.service';
import { AuthService } from './../../services/auth.service';
import { HttpService } from './../../services/http.service';
import { ToastService } from './../../services/toast.service';



@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

 localStream: Stream // Add
 data_object: any;
 subscription : any;
 remoteCalls: any = [];
 @ViewChild('agora_local',{static: false}) private element : ElementRef;
 @ViewChild('remote_calls',{static: false}) private container : ElementRef;
 public authUser: any;
  // Add
  constructor(
    private agoraService: AngularAgoraRtcService,    
    private renderer: Renderer2,
    public data : DataService ,
    private toastService: ToastService,
    private auth: AuthService,
    private httpservice : HttpService 
  ) {
    this.agoraService.createClient();
  }

  // Add
  startCall() {
  this.data_object = this.data.getData();
  console.log(this.data_object.channel_name,this.data_object.room_id);
    this.agoraService.client.join(null, this.data_object.channel_name, this.data_object.room_id, (uid) => {
      this.localStream = this.agoraService.createStream(uid, true, null, null, true, false);
      this.localStream.setVideoProfile('720p_3');
      this.subscribeToStreams();
    });
  }

  // Add
  private subscribeToStreams() {

    this.localStream.init(() => {
      console.log("getUserMedia successfully");
      this.localStream.play('agora_local');
      this.agoraService.client.publish(this.localStream, function (err) {
        console.log("Publish local stream error: " + err);
      });
      this.agoraService.client.on('stream-published', function (evt) {
        console.log("Publish local stream successfully");
      });
    }, function (err) {
      console.log("getUserMedia failed", err);
    });

    // Add
    this.agoraService.client.on('error', (err) => {
      console.log("Got error msg:", err.reason);
      if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.agoraService.client.renewChannelKey("", () => {
          console.log("Renew channel key successfully");
        }, (err) => {
          console.log("Renew channel key failed: ", err);
        });
      }
    });

    // Add
    this.agoraService.client.on('stream-added', (evt) => {
      this.toastService.presentToast('stream added');
      const stream = evt.stream;
      this.agoraService.client.subscribe(stream, (err) => {
        console.log("Subscribe stream failed", err);
      });
    });

    // Add
    this.agoraService.client.on('stream-subscribed', (evt) => {
      this.toastService.presentToast('subscribed to a stream');
      const stream = evt.stream;
      if (!this.remoteCalls.includes(`agora_remote${stream.getId()}`)) this.remoteCalls.push(`agora_remote${stream.getId()}`);
      setTimeout(() => stream.play(`agora_remote${stream.getId()}`), 2000);
    });

    // Add
    this.agoraService.client.on('stream-removed', (evt) => {
      const stream = evt.stream;
      stream.stop();
      this.remoteCalls = this.remoteCalls.filter(call => call !== `#agora_remote${stream.getId()}`);
      console.log(`Remote stream is removed ${stream.getId()}`);
    });

    // Add
    this.agoraService.client.on('peer-leave', (evt) => {
      this.toastService.presentToast('someone left the chat');
      const stream = evt.stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
        console.log(`${evt.uid} left from this channel`);
      }
    });
    this.adjust()
  }


  leave() {
    this.agoraService.client.leave(() => {
      this.toastService.presentToast('left channel');
      console.log("Leavel channel successfully");
    }, (err) => {
      console.log("Leave channel failed");
    });
       console.log("hello");
    for (let child of this.element.nativeElement.children) {
  this.renderer.removeChild(this.element.nativeElement, child);
  let data = {"id":this.data_object.id,"room_id":this.data_object.room_id};
  console.log(data);
  this.httpservice.post("update_meeting_status.php",data).subscribe((res: any) => {
        console.log("response");
        console.log(res);
    });
}
    console.log(this.remoteCalls);
}


adjust(){
  this.renderer.setStyle(this.container.nativeElement,"position","absolute");
  this.renderer.setStyle(this.element.nativeElement,"position","absolute");
 this.renderer.setStyle(this.container.nativeElement,"z-index","1");
  this.renderer.setStyle(this.element.nativeElement,"z-index","2");
}

  ngOnInit() {
  this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log(typeof this.authUser);
    });

   console.log(this.authUser);
  }

}

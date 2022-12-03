import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  vcaFeatures: any[] = [
    {
      image: "./assets/images/services/icon3.png",
      text: "My Unit",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Vehicle",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Parking",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Agreement",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Complaint",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Soft lock",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Visitor Invite",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Family",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Tenant",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Facilities",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "E-News",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Delivery",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Notification",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "SOS",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Resident Qr",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Multiple Unit",
      
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Complaint Chats",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Vehicle In/Out Alert",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Visitor Notification",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Family SOS Alert",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Visitor Verification",
    },
    {
      image: "./assets/images/services/icon3.png",
      text: "Upcoming Visitor",
    },
  ];

  vcaFeatures2: any[] = [];

  vgpFeatures: any[] = [
    {
      image: "",
      text: "Manual checkin/out"
    },
    {
      image: "",
      text: "Patrol"
    },
    {
      image: "",
      text: "Checkpoints"
    },
    {
      image: "",
      text: "Visitor checkin/out"
    },
    {
      image: "",
      text: "Switch Guard"
    },
    {
      image: "",
      text: "Guard Attendance"
    },
    {
      image: "",
      text: "SOS"
    },
    {
      image: "",
      text: "Report Incident"
    },
    {
      image: "",
      text: "Shift Detail"
    },
    {
      image: "",
      text: "Shift Detail"
    },
    {
      image: "",
      text: "Start/end Shift"
    },
    {
      image: "",
      text: "Self checkin/out"
    },
  ]

  vvpFeatures:any[] = [
    {
      image: "",
      text: 'Walkin'
    },
    {
      image: "",
      text: 'Visitor checkin/out'
    },
    {
      image: "",
      text: 'OCR'
    },
    {
      image: "",
      text: 'SOS Alarm'
    },
    {
      image: "",
      text: 'Expected Visitors'
    },
    {
      image: "",
      text: 'Delivery'
    },
    {
      image: "",
      text: 'Epass'
    },
    {
      image: "",
      text: 'Kiosk'
    },
  ]

  constructor() {}

  ngOnInit() {}
}

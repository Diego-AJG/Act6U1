import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource }
      from "@capacitor/camera";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})

export class Tab1Page  implements OnInit{
  ngOnInit(): void {
    Camera.requestPermissions();
}

  tomarfoto= async () =>{
    const image = await Camera.getPhoto({
        quality:100,
        allowEditing: false,
        resultType:CameraResultType.Uri,
        source:CameraSource.Camera
    });

    var imageUrl = image.webPath;

  };
  constructor() {}

}

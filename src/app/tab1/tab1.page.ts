import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  capturedImage = null;

  constructor( private alertController: AlertController) {}


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  //acceso a la camara
  async addImage(){
    const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Base64,
    promptLabelCancel: "Cancelar",
    promptLabelPicture:"Camara",
    promptLabelPhoto: "Galeria"
  });

  console.log('resultado de la foto: ', image);
  this.capturedImage = `data:image/jpge;base64,${image.base64String}`;

  }

}

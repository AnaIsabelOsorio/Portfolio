import { Component } from '@angular/core';

@Component({
  selector: 'intro',
  imports: [],
  templateUrl: './intro.component.html',
})
export class IntroComponent {
  emailAddress: string = 'anaisabelpatinoosorio1@gmail.com';
  showNotification: boolean = false;

  async copyEmailToClipboard(event: Event): Promise<void> {
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(this.emailAddress);
      this.showNotification = true;
      console.log('Correo copiado al portapapeles con éxito.');

      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    } catch (err) {
      window.location.href = `mailto:${this.emailAddress}`;
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'ImageViewer';
	imgSrc = "assets/img/bottle.png";
	//resultArray = new Array;
	
	PreviousButton() {
		this.imgSrc = "assets/img/bottle.png";
	}
	NextButton() {
		this.imgSrc = "assets/img/carton.jpg";
	}
	/*Test(nb) {
		this.resultArray.push(this.imgSrc + " : " + nb);
		alert(this.resultArray);
	}*/
}

/*const {auth} = require('google-auth-library');

async function main () {
	const client = await auth.getClient({
		scopes: 'https://www.googleapis.com/auth/cloud-platform'
	})
	const projectId = await auth.getProjetId();
	const url = `https://www.googleapis.com/dnw/v1/projects/$(projectId)`
	const res = await client.request({ url });
	console.log(res.data);
}
main().catch(console.error);*/
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
  
  videoUrl: string = '';
  safeUrl: SafeResourceUrl | undefined;
  
  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    let videoId = this.activatedRoute.snapshot.paramMap.get('id');
    this.videoUrl = 'https://www.youtube-nocookie.com/embed/' + videoId;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
}

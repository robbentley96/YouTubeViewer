import { Component, Inject } from '@angular/core';
import { Video } from '../models/youtube-response';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
import { Fields } from '../models/fields';
import * as fieldsJson from 'src/assets/fields.json';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  videoTypes: string[];
  videoSubjects: string[];
  videoSubjectControl = new FormControl('');
  videoTypeControl = new FormControl('');
  searchTermControl = new FormControl('');
  videoIdControl = new FormControl('');
  searchByControl = new FormControl('');

  constructor(public dialog: MatDialog, private searchService: SearchService, private router: Router) {
    const fields: Fields = fieldsJson;
    this.videoTypes = fields.video_type;
    this.videoSubjects = fields.video_subject;
  }

  search() {
    if(this.videoTypeControl.value && this.searchTermControl.value && this.videoSubjectControl.value)
    this.searchService.getSearchResults(`${this.searchTermControl.value} ${this.videoSubjectControl.value} ${ this.videoTypeControl.value }`).subscribe((data) => {
      console.log(data.items);
      this.openDialog({ videos: data.items })
    });
  }

  private openDialog(data: DialogData) {
    const dialogRef = this.dialog.open(VideosDialog, {
      data: data,
      autoFocus: false,
      maxHeight: '90vh'
    });
  }

  viewVideo(id: string | null) {
    if(id) {
      this.router.navigate(['view/' + id]);
    }
  }
}

export interface DialogData {
  videos: Video[];
}

@Component({
  selector: 'videos-dialog',
  templateUrl: 'videos-dialog.html',
  styleUrls: ['./search-page.component.css']
})
export class VideosDialog {
  constructor(
    public dialogRef: MatDialogRef<VideosDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router
  ) {}

  viewVideo(id: string | null) {
    if(id) {
      this.dialogRef.close();
      this.router.navigate(['view/' + id]);
    }
  }
}



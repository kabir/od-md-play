import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _width: number;

  private states = ['Backlog', 'Analysis Dev', 'Analysis Handoff', 'Analysis QE', 'Dev TODO', 'Dev In Progress',
                    'Review', 'QA TODO', 'QA In Progress', 'Verified'];

  private issueTable: object[][] = new Array<object[]>(this.states.length);

  constructor() {
    this.setWindowSize();
  }

  private onResize(event: any) {
    this.setWindowSize();
  }

  private setWindowSize() {
    // If we have one row of headers the height is 42px, for two rows the height is 82px
    console.log('Width: ' + window.innerWidth + ' ; Height: ' + window.innerHeight);
    this._width = window.innerWidth;
  }

  isSmallDevice(): boolean {
    return this._width < 600;
  }

  ngOnInit() {
    this._initSampleData();
  }

  private _initSampleData() {
    const testDataLength = 15;
    const populateStatesLength = 3; // this.states.length;
    for (let i = 0 ; i < testDataLength ; i++) {
      const stateIndex = Math.floor(Math.random() * (this.states.length - 1));
      let issuesForState = this.issueTable[stateIndex];
      if (!issuesForState) {
        issuesForState = new Array<object>();
        this.issueTable[stateIndex] = issuesForState;
      }
      let assignee: string;
      let assigneeInitials: string;
      let summary: string;
      switch (i % 3) {
        case 0:
          assignee = 'Kabir Khan';
          assigneeInitials = 'KK';
          summary = 'This is a an issue only Kabir can do';
          break;
        case 1:
          assignee = 'Rostislav Svoboda';
          assigneeInitials = 'RS';
          summary = 'Since Rostislav has a long name, he likes issues that have long descriptions and a lot of detail.' +
            ' Do we need to truncate the text? Will the long text be fine? The world waits in suspense to see how this ' +
            'will go! Stay tuned.';
          break;
        case 2:
          assignee = 'None';
          assigneeInitials = '-'
          summary = 'This issue is up for grabs';
          break;
        case 3:
          throw new Error();
      }


      const issue: object = {
        key: 'PROJ-' + i,
        assigneeInitials: assigneeInitials,
        assignee: assignee,
        summary: summary,
        avatar: ''
      };
      issuesForState.push(issue);
    }
    console.log(this.issueTable);
  }

}

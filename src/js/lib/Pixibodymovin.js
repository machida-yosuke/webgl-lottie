import data from '../data.json';
import CreateBodymovinContainer from "../CreateBodymovinContainer";
import _ from "lodash"

export default class Pixibodymovin {
  constructor() {
    this.stage = new PIXI.Container();
    this.json = _.clone(data);
    
    this.createBodymovinContainer = CreateBodymovinContainer(this.json);
    this.container = this.createBodymovinContainer.container;
    this.timeline = this.createBodymovinContainer.timeline;
    this.stage.addChild(this.container);

    this.timeline.eventCallback("onStart", () => {
      console.log('start');
    });
    this.timeline.eventCallback("onComplete", () => {
      console.log('end');
    });
  }
}
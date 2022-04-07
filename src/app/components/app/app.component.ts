import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { Application, Container, Sprite, Graphics, Polygon } from 'pixi.js';
import { IPixiTemplateOptions } from 'src/app/components/pixi-template/interfaces';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    private _app!: Application;

    public renderOptions: IPixiTemplateOptions = {
        alpha: 0,
        width: 400,
        height: 400,
        grid: { type: 'isometric', color: 'grey', drawVerticalLines: true, distance: 16 },
        onReady: (app) => this.onRender(app)
    }

    public onRender(app: Application) {
        this._app = app;
        //this._app.ticker.start();

        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                for (let z = 0; z < 10; z ++) {
                    const block = Sprite.from('/assets/sprites/firstBlock.png');
                    block.scale.set(1);
                    block.interactive = true;
                    block.hitArea = new Polygon([ 
                        16, 0,
                        32, 8,
                        32, 24,
                        16, 32,
                        0, 24,
                        0, 8,
                    ]);
                    block.on('mouseover', () => { block.tint = 0xFF0000 });
                    block.on('pointerout', () => { block.tint = 0xFFFFFF });
                    block.x = 600 + 32 * x - y * 16;
                    block.y = 600 + y * 8 - x * 16;
    
                    app.stage.addChild(block);
                }
            }
        }
    }

    public test(e: any) {
        console.log((this as any as Sprite).name)
    }

    constructor(private _ngZone: NgZone) {

    }
}

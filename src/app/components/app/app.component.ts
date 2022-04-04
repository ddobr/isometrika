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
        grid: { type: 'isometric', color: 'grey', drawVerticalLines: false, distance: 32 },
        height: 800,
        width: 32 * 26,
        onReady: (app) => this.onRender(app)
    }

    public onRender(app: Application) {
        this._app = app;

        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                for (let z = 0; z < 10; z ++) {
                    const block = Sprite.from('/assets/sprites/firstBlock.png');
                    block.scale.set(2);
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
                    block.x = 32 * 13 - 32 + x * 32 - y * 32;
                    block.y = 64 + 32 * 11 - 16 + x * 32 * 0.5 + y * 16 - z * 32;
    
                    app.stage.addChild(block)
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

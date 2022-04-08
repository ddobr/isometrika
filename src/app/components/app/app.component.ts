import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { Application, Container, Sprite, Graphics, Polygon } from 'pixi.js';
import { IPixiTemplateOptions } from 'src/app/components/pixi-template/interfaces';
import { scaleVector2d, SimpleVector2d } from 'src/app/math';
import { toCartesian2d } from 'src/app/math/functions/cartesian-isometric.function';

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
        grid: { type: 'isometric', color: 'grey', drawVerticalLines: true, distance: 16 },
        onReady: (app) => this.onRender(app)
    }

    public onRender(app: Application) {
        this._app = app;

        const container = new Container();
        container.x = 600;
        container.y = 600;
        //this._app.ticker.start();

        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                const block = Sprite.from('/assets/sprites/firstBlock.png');
                const isometric: SimpleVector2d = [x, y];
                const cartesian = scaleVector2d(toCartesian2d(isometric), 16);

                block.interactive = true;
                block.on('mouseover', () => {
                    block.tint = 0xFF0000
                    console.log(cartesian[0], cartesian[1]);
                });
                block.on('mouseout', () => block.tint = 0xFFFFFF);

                block.x = cartesian[0];
                block.y = cartesian[1];

                container.addChild(block);
            }
        }

        app.stage.addChild(container);
    }

    public test(e: any) {
        console.log((this as any as Sprite).name)
    }

    constructor(private _ngZone: NgZone) {

    }
}

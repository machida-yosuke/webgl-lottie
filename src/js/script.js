import Pixibodymovin from './lib/Pixibodymovin'
const canvas = document.querySelector('#js-canvas')
const pixibodymovin = new Pixibodymovin({})

const renderer = PIXI.autoDetectRenderer(640, 800, {
    view: canvas,
    transparent: true,
    resolution: 1
}, );

renderer.plugins.interaction.autoPreventDefault = false;

const onTick = () => {
    renderer.render(pixibodymovin.stage);
}
TweenMax.ticker.addEventListener('tick', () => onTick());
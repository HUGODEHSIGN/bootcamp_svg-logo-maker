import inquirer from 'inquirer';
import Square from './shapes/square.js';
import Triangle from './shapes/triangle.js';
import Circle from './shapes/circle.js';
import Text from './text.js';
import SVG from './svg.js';
import { writeFile, mkdir } from 'fs/promises';

const shapes = ['circle', 'triangle', 'square'];
const classes = { circle: Circle, triangle: Triangle, square: Square };

export default class CLI {
  constructor() {
    this.svg;
    this.color;
    this.shape;
    this.text;
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'shape',
          message: 'What shape do you want?',
          choices: shapes,
        },
        {
          type: 'input',
          name: 'color',
          message:
            'What color do you want? (input a color keyword or a hex code)',
          validate: (answer) =>
            answer.length === 0 ? 'Please enter a color' : true,
        },
        {
          type: 'input',
          name: 'text',
          message: 'What should the text be? (3 characters)',
          validate: (answer) =>
            answer.length !== 3 ? 'Please enter 3 characters' : true,
        },
      ])
      .then(({ shape, color, text }) => {
        this.shape = shape;
        this.color = color;
        this.text = text;
      })
      .then(() => {
        this.svg = new SVG(
          new classes[this.shape](this.color),
          new Text(this.text, this.shape)
        );
        console.log(this.svg);
      })
      .then(() => {
        mkdir(`./output`, { recursive: true });
      })
      .then(() => {
        writeFile(`./output/${this.text}.svg`, this.svg.render());
      })
      .then(() => console.log('Created SVG file'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

const { Circle, Square, Triangle, Sonic, Mario } = require('./shapes');

test('Circle renders correctly', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Square renders correctly', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render()).toBe('<rect x="75" y="25" width="150" height="150" fill="blue" />');
});

test('Triangle renders correctly', () => {
    const shape = new Triangle();
    shape.setColor('green');
    expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
});

test('Sonic renders correctly', () => {
    const shape = new Sonic();
    expect(shape.render()).toContain('<circle cx="100" cy="100" r="80" fill="blue" />');
});

test('Mario renders correctly', () => {
    const shape = new Mario();
    expect(shape.render()).toContain('<circle cx="100" cy="100" r="80" fill="peachpuff" />');
});

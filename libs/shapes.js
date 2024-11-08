class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Sonic extends Shape {
    render() {
        return `
        <circle cx="100" cy="100" r="80" fill="blue" />
        <polygon points="100,20 120,50 80,50" fill="blue" />
        <polygon points="50,70 70,90 30,90" fill="blue" />
        <polygon points="150,70 170,90 130,90" fill="blue" />
        <ellipse cx="80" cy="90" rx="15" ry="25" fill="white" />
        <ellipse cx="120" cy="90" rx="15" ry="25" fill="white" />
        <circle cx="80" cy="90" r="10" fill="black" />
        <circle cx="120" cy="90" r="10" fill="black" />
        <ellipse cx="100" cy="140" rx="30" ry="15" fill="white" />
        `;
    }
}

class Mario extends Shape {
    render() {
        return `
        <circle cx="100" cy="100" r="80" fill="peachpuff" />
        <ellipse cx="100" cy="60" rx="70" ry="40" fill="red" />
        <rect x="30" y="40" width="140" height="50" fill="red" />
        <ellipse cx="80" cy="90" rx="15" ry="25" fill="white" />
        <ellipse cx="120" cy="90" rx="15" ry="25" fill="white" />
        <circle cx="80" cy="90" r="10" fill="black" />
        <circle cx="120" cy="90" r="10" fill="black" />
        <path d="M60,120 Q80,150 100,120 Q120,150 140,120" stroke="black" stroke-width="10" fill="none" />
        `;
    }
}

module.exports = { Circle, Square, Triangle, Sonic, Mario };

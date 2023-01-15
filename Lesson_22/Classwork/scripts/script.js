const cvs = document.querySelector('#cvs');
const range = document.querySelector('#plot_size');


const ctx = cvs.getContext('2d');
cvs.width = 500;
cvs.height = 500;

range.addEventListener('input', event => {
    const value = event.target.value;
    Plot.change_size(ctx, value);
});

// ctx.fillStyle = '#778beb';
// ctx.fillRect(10, 10, 100, 200);

// ctx.strokeStyle = '#778beb';
// ctx.strokeRect(10, 10, 200, 200);

// ctx.beginPath();
// ctx.moveTo(250, 250);
// ctx.lineTo(300, 300);
// ctx.lineTo(300, 250);
// ctx.lineTo(250, 250);
// ctx.stroke();
// ctx.fill();



class Plot {

    static size = 50;
    static plots = [];

    static change_size(ctx, value = 1){
        
        this.size = value;
        ctx.clearRect(0, 0, 500, 500);
        this.plots.forEach(plot => plot.render(ctx));
    }

   constructor(x_list, func, line_color  = '#f78fb3') {
    this.x_list = x_list;
    this.strokeStyle = line_color;
    this._func = func;
    Plot.plots.push(this);
  }

  render(ctx) {
    // ctx.lineWidth = 5;
    ctx.strokeStyle = this.strokeStyle;
    ctx.beginPath();
    this.x_list.forEach((elem) => {
      const y = this._func(elem);
      ctx.lineTo(elem * Plot.size + 250, y * Plot.size + 250);
    });
    ctx.stroke();
  }
}

const x = [...new Array(10000)].map((_, index) => index * 0.01 - 50);

const tan = new Plot(x, x => - (x ** 2));
tan.render(ctx);

const sin = new Plot(x, Math.sin, '#303952');
sin.render(ctx);
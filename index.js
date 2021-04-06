const plus = document.querySelector('.btn-plus');
const minus = document.querySelector('.btn-minus');
const progress = document.querySelector('#counter');
const bar = document.querySelector('.knob');

plus.addEventListener('click', function(){
    
        progress.textContent = Number(progress.textContent) +1;
        bar.style.width =  `${progress.textContent*10}%` ;
        
});

minus.addEventListener('click', function(){
    progress.textContent= Number(progress.textContent) -1;
    bar.style.width = `${progress.textContent*10}%` ;
});


class Bar{
    constructor(maxWidth, number, element){
        this.width = maxWidth;
        this.number = number;
        this.element = element;
    }
    
    
}


class Clovek{
    constructor(vek, jmeno, IQ){
        this.vek = vek;
        this.jmeno = jmeno;
        this.IQ = IQ;
    }

    sectis(dalsiClovek){
        return this.IQ + dalsiClovek.IQ
    }
}

const petr = new Clovek(38, 'Petr', 0)
const roman = new Clovek(40, 'Roman', 40)
petr.sectis(roman)
roman.sectis(roman)

function calcIQ() {
    let hromadnyIQ = petr.IQ + roman.IQ
    
}
var character = (function() {
    var role = undefined;

    var section = document.getElementById('characters');

    var show = function() {
        section.classList.remove('show');
    };

    var hide = function() {
        section.classList.add('hide');
    }

    return {
        show: show,
        hide: hide
    }
})();


var characterConfigs = (function() {
    var role = undefined;

    var section = document.getElementById('characters');

    return {
        show: show,
        hide: hide
    }
})();


window.addEventListener('load', function() {
    const figures = document.getElementsByTagName('figure');

    for (let figure of figures) {
       figure.addEventListener('click', e => {
            characterConfigs.role = figure.innerText.toLowerCase();
            character.hide();
            console.log(character.role);
      });
    }
    console.log('all ready');
 }, false);

 
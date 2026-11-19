(function () {
  'use strict';

  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var current = 0;
  var notesOpen = false;
  var controlsHidden = false;
  var processTimer = null;
  var suppressClickUntil = 0;

  var notes = [
    {
      speaker: 'Алишер', time: '00:42',
      text: 'Здравствуйте! Мы расскажем о стали — материале, который встречается вокруг нас так часто, что мы перестаём его замечать. Каркас здания, мост, рельсы, корпус инструмента — во многих таких вещах есть сталь. Но она не просто кусок железа. Это материал, свойства которого люди научились настраивать. Сегодня разберём, из чего она состоит, как её получают и почему она стала такой важной для современного мира.',
      next: 'Почти любому металлу можно изменить характер. Для этого создают сплавы.'
    },
    {
      speaker: 'Алишер', time: '00:43',
      text: 'Сплав — это материал из нескольких химических элементов. Обычно в нём есть один основной металл и добавки. Представьте, что железо — это основа, а маленькие добавки меняют итоговый результат. Одни составы делают прочнее, другие — твёрже или устойчивее к ржавчине. Поэтому инженеры не берут один и тот же металл для всех задач. Они подбирают состав под нагрузку, среду и способ изготовления.',
      next: 'Сталь — один из самых важных сплавов на основе железа.'
    },
    {
      speaker: 'Алишер', time: '00:42',
      text: 'Главный ответ короткий: сталь — это сплав железа с углеродом и, часто, с другими элементами. Углерода в стали меньше двух процентов, а во многих марках его доля намного ниже. Это небольшое количество всё равно сильно влияет на свойства. Поэтому сталь нельзя считать просто железом с примесью: это материал с точно заданным составом и поведением.',
      next: 'Посмотрим, какие элементы могут входить в её состав.'
    },
    {
      speaker: 'Алишер', time: '00:47',
      text: 'Железо — основа большинства сталей. Углерод помогает менять твёрдость и прочность. Хром в подходящем составе повышает сопротивление коррозии: на поверхности появляется очень тонкий защитный слой. Никель тоже меняет свойства и встречается в разных специальных сталях. Важно, что добавка не действует сама по себе одинаково во всех случаях. Значение имеют её количество, остальные элементы и обработка металла. Нажатием можно посмотреть каждый элемент отдельно.',
      next: 'Теперь проследим путь от сырья до готовой стали.'
    },
    {
      speaker: 'Алишер', time: '00:49',
      text: 'Это упрощённая схема одного распространённого пути. Железную руду перерабатывают, чтобы получить железо; в доменной печи получают чугун с большим количеством углерода. Затем в сталеплавильном агрегате удаляют часть углерода и примесей. Состав точно настраивают, металл разливают и прокатывают в листы, балки или другие формы. Есть и другой маршрут: электродуговая печь плавит металлолом, который можно снова превратить в сталь.',
      next: 'У разных марок стали — разные сочетания свойств. Об этом расскажет Жанибек.'
    },
    {
      speaker: 'Жанибек', time: '00:46',
      text: 'Спасибо. Часто сталь называют прочной, но одного свойства недостаточно. Прочность помогает выдерживать нагрузку. Твёрдость важна там, где нужно сопротивляться износу. Пластичность позволяет прокатывать металл в лист или менять форму без разрушения. Долговечность зависит и от марки, и от условий, и от защиты поверхности. Инженер выбирает баланс: слишком твёрдая сталь может оказаться менее удобной для другой задачи. Поэтому сначала определяют, как именно будет работать деталь.',
      next: 'Такой выбор определяет облик городов и работу целых отраслей.'
    },
    {
      speaker: 'Жанибек', time: '00:45',
      text: 'Сталь изменила масштабы строительства и транспорта. С ней можно собирать высокие здания, длинные мосты, поезда и большие производственные машины. По данным World Steel Association, в 2024 году около 52 процентов использования стали пришлось на здания и инфраструктуру. Это больше половины. За этим процентом — дороги, сети, вокзалы, заводы и конструкции, которые соединяют людей и поддерживают повседневную жизнь.',
      next: 'И всё это не только на фотографиях — сталь есть в привычных вещах.'
    },
    {
      speaker: 'Жанибек', time: '00:43',
      text: 'Сталь буквально повсюду. В автомобиле она помогает создать прочный корпус. В мосту держит пролёты. В железнодорожных рельсах переносит повторяющиеся нагрузки. Ещё она используется в инструментах, бытовой технике и промышленном оборудовании. На коллаже — только несколько примеров. Мы редко видим металл внутри стиральной машины или под слоем краски на машине, но многие предметы вокруг нас были бы совсем другими без стали.',
      next: 'Для каждой такой задачи выбирают свой вид стали.'
    },
    {
      speaker: 'Жанибек', time: '00:45',
      text: 'Нержавеющая сталь содержит хром и умеет защищать свою поверхность от коррозии. Инструментальные стали подбирают для резцов, штампов и деталей, которым нужна твёрдость и стойкость к износу. Легированные стали содержат добавки, например никель или молибден, чтобы добиться нужного сочетания свойств. Интересный ориентир: для нержавеющей стали часто указывают не менее десяти с половиной процентов хрома. А электродуговая печь может работать даже на полностью металлическом ломе.',
      next: 'Осталось собрать всё в одну мысль.'
    },
    {
      speaker: 'Жанибек', time: '00:43',
      text: 'Сталь часто спрятана в стенах, дорогах, приборах и машинах. Мы замечаем её только тогда, когда смотрим на мост или на горячую работу металлургического цеха. Но этот материал изменил то, как люди строят, путешествуют и производят вещи. И дело не в одной волшебной марке — важно уметь подобрать состав и обработку под задачу. Спасибо за внимание! Мы будем рады ответить на ваши вопросы.',
      next: 'Финал. Спасибо за внимание.'
    }
  ];

  var processDescriptions = [
    'Сырьё проходит подготовку. В интегрированном маршруте используют железную руду, уголь, известняк и металлолом.',
    'В доменной печи из руды получают горячий металл — чугун с высоким содержанием углерода.',
    'В кислородном конвертере или электродуговой печи металл перерабатывают и удаляют часть примесей.',
    'Состав регулируют: при необходимости добавляют элементы, чтобы получить нужные свойства.',
    'Сталь разливают, затем прокатывают в лист, балку, пруток или другой готовый профиль.'
  ];

  var gradeFacts = {
    stainless: {
      ghost: 'Cr', kicker: 'ФАКТ 01 / КОРРОЗИЯ', title: 'Хром защищает поверхность',
      text: 'В нержавеющей стали хром помогает образовать тонкий пассивный слой. Для классификации stainless steel часто используют ориентир от 10,5% хрома.'
    },
    tool: {
      ghost: 'H', kicker: 'ФАКТ 02 / ЖАРОСТОЙКОСТЬ', title: 'Некоторые резцы держат жар',
      text: 'Отдельные быстрорежущие инструментальные стали сохраняют твёрдость при нагреве выше 500°C. Это помогает резать металл на высокой скорости.'
    },
    alloy: {
      ghost: 'Ni', kicker: 'ФАКТ 03 / ТОЧНЫЙ ВЫБОР', title: 'Универсальной стали нет',
      text: 'Легированные стали содержат специальные добавки — например, никель или молибден. Состав выбирают под нагрузку, температуру и среду, где будет работать деталь.'
    }
  };

  var stageNames = ['сырьё', 'чугун', 'переработка', 'настройка состава', 'сталь'];
  var chapterLabel = document.getElementById('chapterLabel');
  var slideCounter = document.getElementById('slideCounter');
  var progressBar = document.getElementById('progressBar');
  var dockProgress = document.getElementById('dockProgress');
  var announcement = document.getElementById('slideAnnouncement');
  var notesPanel = document.getElementById('notesPanel');
  var notesSpeaker = document.getElementById('notesSpeaker');
  var notesHeading = document.getElementById('notesHeading');
  var notesText = document.getElementById('notesText');
  var notesTransition = document.getElementById('notesTransition');
  var deck = document.getElementById('deck');

  function pad(value) { return value < 10 ? '0' + value : String(value); }

  function updateNotes() {
    var note = notes[current];
    notesHeading.textContent = 'СЛАЙД ' + pad(current + 1) + ' / ' + pad(slides.length);
    notesSpeaker.innerHTML = note.speaker.toUpperCase() + ' <span>· ' + note.time + '</span>';
    notesText.textContent = note.text;
    notesTransition.textContent = note.next;
  }

  function updateChapter() {
    var title = slides[current].getAttribute('data-title') || 'СТАЛЬ';
    chapterLabel.innerHTML = pad(current + 1) + ' / ' + pad(slides.length) + ' <span>' + title + '</span>';
    slideCounter.innerHTML = pad(current + 1) + ' <i>/</i> ' + pad(slides.length);
    var percent = ((current + 1) / slides.length) * 100;
    progressBar.style.width = percent + '%';
    dockProgress.style.width = percent + '%';
    announcement.textContent = 'Слайд ' + (current + 1) + ' из ' + slides.length + ': ' + title;
    document.getElementById('previousButton').disabled = current === 0;
    document.getElementById('nextButton').disabled = current === slides.length - 1;
    document.getElementById('edgePrevious').disabled = current === 0;
    document.getElementById('edgeNext').disabled = current === slides.length - 1;
    updateNotes();
  }

  function stopProcessSequence() {
    if (processTimer) window.clearInterval(processTimer);
    processTimer = null;
  }

  function setProcessStep(step) {
    var stages = Array.prototype.slice.call(document.querySelectorAll('.process-stage'));
    var bounded = Math.max(0, Math.min(stages.length - 1, step));
    stages.forEach(function (stage, index) {
      stage.classList.toggle('is-current', index === bounded);
      stage.classList.toggle('is-reached', index < bounded);
      stage.setAttribute('aria-pressed', index === bounded ? 'true' : 'false');
    });
    document.getElementById('processLine').style.width = (bounded / (stages.length - 1) * 100) + '%';
    document.getElementById('processNote').textContent = processDescriptions[bounded];
    document.getElementById('processNext').innerHTML = bounded === stages.length - 1 ? 'ПОВТОРИТЬ ПУТЬ <span>↻</span>' : 'СЛЕДУЮЩИЙ ЭТАП <span>↗</span>';
    document.getElementById('processTrack').setAttribute('data-current', bounded);
  }

  function startProcessSequence() {
    stopProcessSequence();
    setProcessStep(0);
    var next = 1;
    processTimer = window.setInterval(function () {
      if (current !== 4 || next >= 5) {
        stopProcessSequence();
        return;
      }
      setProcessStep(next);
      next += 1;
    }, 670);
  }

  function selectSlide(index, options) {
    var nextIndex = Math.max(0, Math.min(slides.length - 1, index));
    if (nextIndex === current && !(options && options.force)) return;
    stopProcessSequence();
    slides[current].classList.remove('is-active');
    current = nextIndex;
    slides[current].classList.add('is-active');
    updateChapter();
    if (current === 4) startProcessSequence();
    if (options && options.focus && options.focus.focus) options.focus.focus();
    preloadNearSlides();
  }

  function preloadNearSlides() {
    [current - 1, current + 1].forEach(function (index) {
      if (index < 0 || index >= slides.length) return;
      var image = slides[index].querySelector('img.photo');
      if (image && image.loading === 'lazy') image.loading = 'eager';
    });
  }

  function replayScene() {
    var active = slides[current];
    active.classList.remove('is-active');
    void active.offsetWidth;
    active.classList.add('is-active');
    if (current === 4) startProcessSequence();
  }

  function toggleNotes(force) {
    notesOpen = typeof force === 'boolean' ? force : !notesOpen;
    document.body.classList.toggle('notes-open', notesOpen);
    notesPanel.setAttribute('aria-hidden', notesOpen ? 'false' : 'true');
    if (notesOpen) document.getElementById('notesClose').focus();
    else document.getElementById('notesButton').focus();
  }

  function toggleControls(force) {
    controlsHidden = typeof force === 'boolean' ? force : !controlsHidden;
    document.body.classList.toggle('controls-hidden', controlsHidden);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      var request = document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen;
      if (request) request.call(document.documentElement);
    } else {
      var exit = document.exitFullscreen || document.webkitExitFullscreen;
      if (exit) exit.call(document);
    }
  }

  function chooseElement(button) {
    document.querySelectorAll('.element-row').forEach(function (row) {
      row.classList.toggle('is-selected', row === button);
      row.setAttribute('aria-pressed', row === button ? 'true' : 'false');
    });
    document.getElementById('readoutSymbol').textContent = button.getAttribute('data-symbol');
    document.getElementById('readoutName').textContent = button.getAttribute('data-name');
    document.getElementById('readoutCopy').textContent = button.getAttribute('data-copy');
  }

  function chooseGrade(button) {
    document.querySelectorAll('.grade-tab').forEach(function (tab) {
      var selected = tab === button;
      tab.classList.toggle('is-selected', selected);
      tab.setAttribute('aria-selected', selected ? 'true' : 'false');
    });
    var fact = gradeFacts[button.getAttribute('data-grade')];
    var order = ['stainless', 'tool', 'alloy'].indexOf(button.getAttribute('data-grade')) + 1;
    document.getElementById('gradeGhost').textContent = fact.ghost;
    document.getElementById('gradeKicker').textContent = fact.kicker;
    document.getElementById('gradeTitle').textContent = fact.title;
    document.getElementById('gradeText').textContent = fact.text;
    document.getElementById('gradeCount').textContent = pad(order);
  }

  document.getElementById('previousButton').addEventListener('click', function () { selectSlide(current - 1); });
  document.getElementById('nextButton').addEventListener('click', function () { selectSlide(current + 1); });
  document.getElementById('edgePrevious').addEventListener('click', function () { selectSlide(current - 1); });
  document.getElementById('edgeNext').addEventListener('click', function () { selectSlide(current + 1); });
  document.getElementById('replayButton').addEventListener('click', replayScene);
  document.getElementById('fullscreenButton').addEventListener('click', toggleFullscreen);
  document.getElementById('hideControlsButton').addEventListener('click', function () { toggleControls(true); });
  document.getElementById('showControlsButton').addEventListener('click', function () { toggleControls(false); });
  document.getElementById('notesButton').addEventListener('click', function () { toggleNotes(true); });
  document.getElementById('notesClose').addEventListener('click', function () { toggleNotes(false); });
  document.getElementById('notesScrim').addEventListener('click', function () { toggleNotes(false); });

  document.querySelectorAll('.mix-particle').forEach(function (particle) {
    particle.addEventListener('click', function () {
      var labels = { C: 'Углерод меняет твёрдость и прочность.', Cr: 'Хром защищает сталь от коррозии в подходящем составе.', Ni: 'Никель меняет свойства легированной стали.' };
      document.getElementById('mixCaption').textContent = labels[particle.getAttribute('data-element')];
      document.querySelectorAll('.mix-particle').forEach(function (item) { item.classList.toggle('is-active', item === particle); });
    });
  });

  document.querySelectorAll('.element-row').forEach(function (button) {
    button.addEventListener('click', function () { chooseElement(button); });
  });

  document.querySelectorAll('.process-stage').forEach(function (button) {
    button.addEventListener('click', function () {
      stopProcessSequence();
      setProcessStep(Number(button.getAttribute('data-step')));
    });
  });
  document.getElementById('processNext').addEventListener('click', function () {
    var now = Number(document.getElementById('processTrack').getAttribute('data-current') || 0);
    if (now >= 4) setProcessStep(0);
    else setProcessStep(now + 1);
    stopProcessSequence();
  });

  document.querySelectorAll('.grade-tab').forEach(function (button) {
    button.addEventListener('click', function () { chooseGrade(button); });
  });

  deck.addEventListener('click', function (event) {
    if (Date.now() < suppressClickUntil) return;
    if (event.target.closest('button, .use-frame, .notes-panel, .control-dock')) return;
    if (event.clientX < window.innerWidth / 2) selectSlide(current - 1);
    else selectSlide(current + 1);
  });

  var pointerStart = null;
  deck.addEventListener('pointerdown', function (event) {
    if (event.target.closest('button, .process-track, .use-frame')) return;
    pointerStart = { x: event.clientX, y: event.clientY };
  }, { passive: true });
  deck.addEventListener('pointerup', function (event) {
    if (!pointerStart) return;
    var dx = event.clientX - pointerStart.x;
    var dy = event.clientY - pointerStart.y;
    pointerStart = null;
    if (Math.abs(dx) > 58 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      suppressClickUntil = Date.now() + 450;
      selectSlide(current + (dx < 0 ? 1 : -1));
    }
  }, { passive: true });
  deck.addEventListener('pointercancel', function () { pointerStart = null; });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && notesOpen) { toggleNotes(false); return; }
    if (event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
    if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') { event.preventDefault(); selectSlide(current + 1); }
    else if (event.key === 'ArrowLeft' || event.key === 'PageUp') { event.preventDefault(); selectSlide(current - 1); }
    else if (event.key === 'Home') { event.preventDefault(); selectSlide(0); }
    else if (event.key === 'End') { event.preventDefault(); selectSlide(slides.length - 1); }
    else if (event.key.toLowerCase() === 'n') toggleNotes();
    else if (event.key.toLowerCase() === 'f') toggleFullscreen();
    else if (event.key.toLowerCase() === 'h') toggleControls();
    else if (event.key.toLowerCase() === 'r') replayScene();
  });

  document.addEventListener('contextmenu', function (event) { event.preventDefault(); });
  document.addEventListener('dragstart', function (event) { if (!event.target.closest('.notes-panel')) event.preventDefault(); });
  document.querySelectorAll('img.photo').forEach(function (image) {
    image.addEventListener('error', function () {
      image.hidden = true;
      image.closest('.scene-backdrop, .use-frame').classList.add('image-fallback');
    });
  });

  updateChapter();
  preloadNearSlides();
  window.SteelDeck = { next: function () { selectSlide(current + 1); }, previous: function () { selectSlide(current - 1); }, goTo: function (number) { selectSlide(number - 1); }, replay: replayScene };
}());

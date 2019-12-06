/*******************
 * Academicsr Test *
 *******************/

import { PsychoJS } from 'https://pavlovia.org/lib/core-3.2.js';
import * as core from 'https://pavlovia.org/lib/core-3.2.js';
import { TrialHandler } from 'https://pavlovia.org/lib/data-3.2.js';
import { Scheduler } from 'https://pavlovia.org/lib/util-3.2.js';
import * as util from 'https://pavlovia.org/lib/util-3.2.js';
import * as visual from 'https://pavlovia.org/lib/visual-3.2.js';
import { Sound } from 'https://pavlovia.org/lib/sound-3.2.js';

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'AcademicSR';  // from the Builder filename that created this script
let expInfo = {};
var frameDur;
var frameRemains;
// schedule the experiment:
// psychoJS.schedule(psychoJS.gui.DlgFromDict({
//   dictionary: expInfo,
//   title: expName
// }));

const flowScheduler = new Scheduler(psychoJS);
// const dialogCancelScheduler = new Scheduler(psychoJS);
// psychoJS.scheduleCondition(flowScheduler);
// { return (psychoJS.gui.dialogComponent.button === 'OK'); }
// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
// flowScheduler.add(InstructionsRoutineBegin);
// flowScheduler.add(InstructionsRoutineEachFrame);
// flowScheduler.add(InstructionsRoutineEnd);
const AllTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(AllTrialsLoopBegin, AllTrialsLoopScheduler);
flowScheduler.add(AllTrialsLoopScheduler);
flowScheduler.add(AllTrialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
// dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);

  return Scheduler.Event.NEXT;
}
var globalClock;
var testQsClock;
  // Initialize components for Routine "Instructions"
var InstructionsClock;
var instruct;
InstructionsClock = new util.Clock();
instruct = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct',
    text: 'In this part of the study, you will be choosing between answering practice questions for standardized tests, or playing a videogame. \n\nYou will be completing 5 rounds of the chosen option, and will then be given a chance to choose again.\n\nPrior to choosing, you will be given a regulation strategy to use. Please employ this strategy while making your decision.  \n\nPress SPACE to begin!',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.05,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
 });
var space;
space = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
var ISIClock;
var CueClock;
var regCue;
  
  // Initialize components for Routine "ISI"
ISIClock = new util.Clock();
  // Initialize components for Routine "Cue"
CueClock = new util.Clock();
regCue = new visual.TextStim({
    win: psychoJS.window,
    name: 'regCue',
    text: 'REGULATE',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });
var ChoiceClock;
var choiceQ;
  // Initialize components for Routine "ISI"
ISIClock = new util.Clock();
  // Initialize components for Routine "Choice"
ChoiceClock = new util.Clock();
choiceQ = new visual.TextStim({
    win: psychoJS.window,
    name: 'choiceQ',
    text: "Please indicate which option you would like to complete by pressing '1' for the choice on the left, or '2' for the choice on the right. ",
    font: 'Arial',
    units : undefined,
    pos: [0, 0.35], height: 0.05,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });
var choiceResp;
var testChoice;
var videogameChoice;
choiceResp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});

testChoice = new visual.TextStim({
    win: psychoJS.window,
    name: 'testChoice',
    text: 'Practice Standardized Test Questions',
    font: 'Arial',
    units : undefined,
    pos: [(- 0.41), 0.15], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0
  });

videogameChoice = new visual.TextStim({
    win: psychoJS.window,
    name: 'videogameChoice',
    text: 'Play a Videogame',
    font: 'Arial',
    units : undefined,
    pos: [0.41, 0.15], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0
  });
var gre;
var gmat;
var lsat;
var game;
var blank;
var key_resp;  
  
blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0
  });
var testQuestionsChoiceClock;
var testQChoice;
  
  // Initialize components for Routine "testQuestionsChoice"
testQuestionsChoiceClock = new util.Clock();
testQChoice = new visual.TextStim({
    win: psychoJS.window,
    name: 'testQChoice',
    text: "What test would you like to practice questions for? Use the keys '1', '2', '3' to move up and down, then press ENTER to select.",
    font: 'Arial',
    units : undefined,
    pos: [0, 0.35], height: 0.055,  wrapWidth: 1.3, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });
var image1;
var image_2;
image1 = new visual.ImageStim({ win : psychoJS.window, name : 'image', units : undefined, image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.105], size : [0.3, 0.11], color : new util.Color([1, 1, 1]), opacity : 1, flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
image_2 = new visual.ImageStim({win : psychoJS.window, name : 'image_2', units : undefined, image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.05)], size : [0.3, 0.11], color : new util.Color([1, 1, 1]), opacity : 1, flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0
    });
  var image_3;
  var upDown;
  var polygon;
  var enter;
  
image_3 = new visual.ImageStim({win : psychoJS.window, name : 'image_3', units : undefined,   image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.2)], size : [0.3, 0.11],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0
  });
  upDown = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});


enter = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});

var TextQuestion;
var letterKey;
var enterKey;
var choiceA;
var choiceB;
var choiceC;
var qInstClock;
var textInst;
qInstClock = new util.Clock();
textInst = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'For the following questions, use the keys "a", "b", "c", "d", "e" to make your choice, then press ENTER to see the answer.\n\nPress SPACE to begin.',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});  
  // Initialize components for Routine "testQs"
testQsClock = new util.Clock();
TextQuestion = new visual.TextStim({
    win: psychoJS.window,
    name: 'TextQuestion',
    text: 'default text',
    font: 'Arial',
    units : undefined,
    pos: [0, 0.35], height: 0.028,  wrapWidth: 1.45, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

letterKey = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});

enterKey = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});

choiceA = new visual.TextStim({
    win: psychoJS.window,
    name: 'choiceA',
    text: 'default text',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.026,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0
  });

choiceB = new visual.TextStim({
    win: psychoJS.window,
    name: 'choiceB',
    text: 'default text',
    font: 'Arial',
    units : undefined,
    pos: [0, (- 0.1)], height: 0.026,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0
  });

choiceC = new visual.TextStim({
    win: psychoJS.window,
    name: 'choiceC',
    text: 'default text',
    font: 'Arial',
    units : undefined,
    pos: [0, (- 0.2)], height: 0.026,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0
  });
var choiceD;
var choiceE;
  
choiceD = new visual.TextStim({
    win: psychoJS.window,
    name: 'choiceD',
    text: 'default text',
    font: 'Arial',
    units : undefined,
    pos: [0, (- 0.3)], height: 0.026,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0
  });

choiceE = new visual.TextStim({
    win: psychoJS.window,
    name: 'choiceE',
    text: 'default text',
    font: 'Arial',
    units : undefined,
    pos: [0, (- 0.4)], height: 0.026,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0
  });
var conBlank;
  
conBlank = new visual.TextStim({
    win: psychoJS.window,
    name: 'conBlank',
    text: '',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0
  });
var GameClock;
var gameInstructions;
var spaceKey;
  
  // Initialize components for Routine "Game"
GameClock = new util.Clock();
gameInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'gameInstructions',
    text: 'You will be playing a version of Pacman. You will be playing as the yellow dot. Your goal is to gather as many points while avoiding the red dots. \n\nWhen you are ready, press SPACE!',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

spaceKey = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
var pacmanClock;
var routineTimer;
  // Initialize components for Routine "pacman"
pacmanClock = new util.Clock();
  // Create some handy timers
globalClock = new util.Clock();  // to track the time since experiment started
routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine

var t;
var frameN;
var InstructionsComponents;
function InstructionsRoutineBegin() {
  //------Prepare to start Routine 'Instructions'-------
  t = 0;
  InstructionsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  space.keys = undefined;
  space.rt = undefined;
  // keep track of which components have finished
  InstructionsComponents = [];
  InstructionsComponents.push(instruct);
  InstructionsComponents.push(space);

  for (const thisComponent of InstructionsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function InstructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'Instructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = InstructionsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame

  // *instruct* updates
  if (t >= 0.0 && instruct.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instruct.tStart = t;  // (not accounting for frame time here)
    instruct.frameNStart = frameN;  // exact frame index
    instruct.setAutoDraw(true);
  }


  // *space* updates
  if (t >= 0.0 && space.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    space.tStart = t;  // (not accounting for frame time here)
    space.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { space.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { space.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { space.clearEvents(); });
  }

  if (space.status === PsychoJS.Status.STARTED) {
    let theseKeys = space.getKeys({keyList: ['space'], waitRelease: false});

    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  // at least one key was pressed
      space.keys = theseKeys[0].name;  // just the last key pressed
      space.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of InstructionsComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function InstructionsRoutineEnd() {
  //------Ending Routine 'Instructions'-------
  for (const thisComponent of InstructionsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('space.keys', space.keys);
  if (typeof space.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('space.rt', space.rt);
      routineTimer.reset();
      }

  space.stop();
  // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}
var AllTrials;
var currentLoop;
function AllTrialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  AllTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'RowsExcel.xlsx'),
    seed: undefined, name: 'AllTrials'});
  psychoJS.experiment.addLoop(AllTrials); // add the loop to the experiment
  currentLoop = AllTrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisAllTrial of AllTrials) {
    thisScheduler.add(importConditions(AllTrials));
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    thisScheduler.add(CueRoutineBegin);
    thisScheduler.add(CueRoutineEachFrame);
    thisScheduler.add(CueRoutineEnd);
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    thisScheduler.add(ChoiceRoutineBegin);
    thisScheduler.add(ChoiceRoutineEachFrame);
    thisScheduler.add(ChoiceRoutineEnd);
    const QuestionTrialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(QuestionTrialsLoopBegin, QuestionTrialsLoopScheduler);
    thisScheduler.add(QuestionTrialsLoopScheduler);
    thisScheduler.add(QuestionTrialsLoopEnd);
    const GameTrialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(GameTrialsLoopBegin, GameTrialsLoopScheduler);
    thisScheduler.add(GameTrialsLoopScheduler);
    thisScheduler.add(GameTrialsLoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}
var QuestionTrials;
var doTestPractice = [];
var doGame = [];
function QuestionTrialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  QuestionTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: doTestPractice, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'QuestionTrials'});
  psychoJS.experiment.addLoop(QuestionTrials); // add the loop to the experiment
  currentLoop = QuestionTrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisQuestionTrial of QuestionTrials) {
    thisScheduler.add(importConditions(QuestionTrials));
    thisScheduler.add(testQuestionsChoiceRoutineBegin);
    thisScheduler.add(testQuestionsChoiceRoutineEachFrame);
    thisScheduler.add(testQuestionsChoiceRoutineEnd);
    thisScheduler.add(qInstRoutineBegin);
    thisScheduler.add(qInstRoutineEachFrame);
    thisScheduler.add(qInstRoutineEnd);
    const Questions5LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(Questions5LoopBegin, Questions5LoopScheduler);
    thisScheduler.add(Questions5LoopScheduler);
    thisScheduler.add(Questions5LoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}
var Questions5;
function Questions5LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Questions5 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'QuestionsText.xlsx', Rows),
    seed: undefined, name: 'Questions5'});
  psychoJS.experiment.addLoop(Questions5); // add the loop to the experiment
  currentLoop = Questions5;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisQuestions5 of Questions5) {
    thisScheduler.add(importConditions(Questions5));
    thisScheduler.add(testQsRoutineBegin);
    thisScheduler.add(testQsRoutineEachFrame);
    thisScheduler.add(testQsRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

function Questions5LoopEnd() {
  psychoJS.experiment.removeLoop(Questions5);

  return Scheduler.Event.NEXT;
}

function QuestionTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(QuestionTrials);

  return Scheduler.Event.NEXT;
}
var GameTrials;
function GameTrialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  GameTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: doGame, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'GameTrials'});
  psychoJS.experiment.addLoop(GameTrials); // add the loop to the experiment
  currentLoop = GameTrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisGameTrial of GameTrials) {
    thisScheduler.add(importConditions(GameTrials));
    thisScheduler.add(GameRoutineBegin);
    thisScheduler.add(GameRoutineEachFrame);
    thisScheduler.add(GameRoutineEnd);
    const trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}
var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 5, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(pacmanRoutineBegin);
    thisScheduler.add(pacmanRoutineEachFrame);
    thisScheduler.add(pacmanRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

function GameTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(GameTrials);

  return Scheduler.Event.NEXT;
}

function AllTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(AllTrials);

  return Scheduler.Event.NEXT;
}
var ISIComponents;
function ISIRoutineBegin() {
  //------Prepare to start Routine 'ISI'-------
  t = 0;
  ISIClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  ISIComponents = [];

  for (const thisComponent of ISIComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function ISIRoutineEachFrame() {
  //------Loop for each frame of Routine 'ISI'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ISIClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of ISIComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function ISIRoutineEnd() {
  //------Ending Routine 'ISI'-------
  for (const thisComponent of ISIComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "ISI" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}
var CueComponents;
function CueRoutineBegin() {
  //------Prepare to start Routine 'Cue'-------
  t = 0;
  CueClock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  CueComponents = [];
  regCue.setText(rows3);
  CueComponents.push(regCue);

  for (const thisComponent of CueComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function CueRoutineEachFrame() {
  //------Loop for each frame of Routine 'Cue'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = CueClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame

  // *regCue* updates
  if (t >= 0.0 && regCue.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    regCue.tStart = t;  // (not accounting for frame time here)
    regCue.frameNStart = frameN;  // exact frame index
    regCue.setAutoDraw(true);
  }

  frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (regCue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    regCue.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of CueComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function CueRoutineEnd() {
  //------Ending Routine 'Cue'-------
  for (const thisComponent of CueComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}
gre = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gre', units : undefined,
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.41), 0.02], size : [0.3, 0.105],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0
  });
gmat = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gmat', units : undefined,
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.41), (- 0.13)], size : [0.3, 0.11],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0
  });
lsat = new visual.ImageStim({
    win : psychoJS.window,
    name : 'lsat', units : undefined,
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.41), (- 0.27)], size : [0.3, 0.11],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0
  });
game = new visual.ImageStim({
    win : psychoJS.window,
    name : 'game', units : undefined,
    image : undefined, mask : undefined,
    ori : 0, pos : [0.41, (- 0.19)], size : [0.4, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0
  });
var ChoiceComponents;
function ChoiceRoutineBegin() {
  //------Prepare to start Routine 'Choice'-------
  t = 0;
  ChoiceClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  choiceResp.keys = undefined;
  choiceResp.rt = undefined;
  gre.setImage("gre.jpg");
  gmat.setImage("gmat.jpg");
  lsat.setImage("lsat.jpg");
  game.setImage("game.jpg");
  doGame = []
  doTestPractice = []
  blank.setText('');
  // keep track of which components have finished
  ChoiceComponents = [];
  ChoiceComponents.push(choiceQ);
  ChoiceComponents.push(choiceResp);
  ChoiceComponents.push(testChoice);
  ChoiceComponents.push(videogameChoice);
  ChoiceComponents.push(gre);
  ChoiceComponents.push(gmat);
  ChoiceComponents.push(lsat);
  ChoiceComponents.push(game);
  ChoiceComponents.push(blank);

  for (const thisComponent of ChoiceComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function ChoiceRoutineEachFrame() {
  //------Loop for each frame of Routine 'Choice'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ChoiceClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame

  // *choiceQ* updates
  if (t >= 0.0 && choiceQ.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    choiceQ.tStart = t;  // (not accounting for frame time here)
    choiceQ.frameNStart = frameN;  // exact frame index
    choiceQ.setAutoDraw(true);
  }

  if (choiceQ.status === PsychoJS.Status.STARTED && Boolean((blank.status == FINISHED))) {
    choiceQ.setAutoDraw(false);
  }

  // *choiceResp* updates
  if (t >= 0.0 && choiceResp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    choiceResp.tStart = t;  // (not accounting for frame time here)
    choiceResp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { choiceResp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { choiceResp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { choiceResp.clearEvents(); });
  }

  if (choiceResp.status === PsychoJS.Status.STARTED && Boolean((choiceQ.status == FINISHED))) {
    choiceResp.status = PsychoJS.Status.FINISHED;
  }

  if (choiceResp.status === PsychoJS.Status.STARTED) {
    let theseKeys = choiceResp.getKeys({keyList: ['1', '2'], waitRelease: false});

    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  // at least one key was pressed
      choiceResp.keys = theseKeys[0].name;  // just the last key pressed
      choiceResp.rt = theseKeys[0].rt;
    }
  }
    if (choiceResp.keys == '1'){
        testChoice.setColor(new util.Color('green'));
    }
    if (choiceResp.keys == '2'){
        videogameChoice.setColor(new util.Color('green'));
    }

  if (choiceResp.keys == '2' || choiceResp.keys == '1'){
    choiceResp.status = (PsychoJS.Status.FINISHED);
  }

  // *testChoice* updates
  if (t >= 0.0 && testChoice.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    testChoice.tStart = t;  // (not accounting for frame time here)
    testChoice.frameNStart = frameN;  // exact frame index
    testChoice.setAutoDraw(true);
  }

  if (testChoice.status === PsychoJS.Status.STARTED && Boolean((blank.status == FINISHED))) {
    testChoice.setAutoDraw(false);
  }

  // *videogameChoice* updates
  if (t >= 0.0 && videogameChoice.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    videogameChoice.tStart = t;  // (not accounting for frame time here)
    videogameChoice.frameNStart = frameN;  // exact frame index
    videogameChoice.setAutoDraw(true);
  }

  if (videogameChoice.status === PsychoJS.Status.STARTED && Boolean((blank.status == FINISHED))) {
    videogameChoice.setAutoDraw(false);
  }

  // *gre* updates
  if (t >= 0.0 && gre.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    gre.tStart = t;  // (not accounting for frame time here)
    gre.frameNStart = frameN; 
    gre.setImage('gre.jpg');// exact frame index
    gre.setAutoDraw(true);
  }

  if (gre.status === PsychoJS.Status.STARTED && Boolean((blank.status == FINISHED))) {
    gre.setAutoDraw(false);
  }

  // *gmat* updates
  if (t >= 0.0 && gmat.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    gmat.tStart = t;  // (not accounting for frame time here)
    gmat.frameNStart = frameN;
    gmat.setImage('gmat.jpg');// exact frame index
    gmat.setAutoDraw(true);
  }

  if (gmat.status === PsychoJS.Status.STARTED && Boolean((blank.status == FINISHED))) {
    gmat.setAutoDraw(false);
  }

  // *lsat* updates
  if (t >= 0.0 && lsat.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    lsat.tStart = t;  // (not accounting for frame time here)
    lsat.frameNStart = frameN; 
    lsat.setImage('lsat.jpg');// exact frame index
    lsat.setAutoDraw(true);
  }

  if (lsat.status === PsychoJS.Status.STARTED && Boolean((blank.status == FINISHED))) {
    lsat.setAutoDraw(false);
  }

  // *game* updates
  if (t >= 0.0 && game.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    game.tStart = t;  // (not accounting for frame time here)
    game.frameNStart = frameN; 
    game.setImage('game.jpg')// exact frame index
    game.setAutoDraw(true);
  }

  if (game.status === PsychoJS.Status.STARTED && Boolean((blank.status == FINISHED))) {
    game.setAutoDraw(false);
  }

  // *blank* updates
  if ((choiceResp.keys !== undefined) && blank.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blank.tStart = t;  // (not accounting for frame time here)
    blank.frameNStart = frameN;  // exact frame index
    blank.setAutoDraw(true);
  }

  if (blank.status === PsychoJS.Status.STARTED && t >= (blank.tStart + 1.5)) {
    blank.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of ChoiceComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutineEnd() {
  //------Ending Routine 'Choice'-------
  for (const thisComponent of ChoiceComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('choiceResp.keys', choiceResp.keys);
  if (typeof choiceResp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('choiceResp.rt', choiceResp.rt);
      }
  videogameChoice.setColor(new util.Color('white'));
  testChoice.setColor(new util.Color('white'));
  if (choiceResp.keys == '1'){
      doTestPractice = 1;
      doGame = 0;
  }
  if (choiceResp.keys == '2'){
      doTestPractice = 0;
      doGame = 1;
  }
  choiceResp.stop();
  // the Routine "Choice" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}
var testQuestionsChoiceComponents;
var y;
var q;
y = 0;
q = [];
polygon = new visual.Rect ({win: psychoJS.window, name: 'polygon',
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, pos: [0, y],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    // fillColor: new util.Color(None),
    opacity: 1.0, depth: -5, interpolate: true,
  });

function testQuestionsChoiceRoutineBegin() {
  //------Prepare to start Routine 'testQuestionsChoice'-------
  t = 0;
  testQuestionsChoiceClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  upDown.keys = undefined;
  image1.setImage('gre.jpg');
  image_2.setImage("gmat.jpg");
  image_3.setImage("lsat.jpg");
  upDown.rt = undefined;
  polygon.setOpacity(1);
  polygon.setSize([0.32, 0.13]);
  polygon.setOri(0);
  polygon.setLineWidth(8);
  enter.keys = undefined;
  enter.rt = undefined;
  // keep track of which components have finished
  testQuestionsChoiceComponents = [];
  testQuestionsChoiceComponents.push(testQChoice);
  testQuestionsChoiceComponents.push(image1);
  testQuestionsChoiceComponents.push(image_2);
  testQuestionsChoiceComponents.push(image_3);
  testQuestionsChoiceComponents.push(upDown);
  testQuestionsChoiceComponents.push(polygon);
  testQuestionsChoiceComponents.push(enter);
  
  if(upDown.keys === '1'){
      y = 0.105;
  }
  if(upDown.keys === '2'){
      y = -0.05;
  }
  if(upDown.keys === '3'){
      y = -0.2;
  }
  for (const thisComponent of testQuestionsChoiceComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function testQuestionsChoiceRoutineEachFrame() {
  //------Loop for each frame of Routine 'testQuestionsChoice'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = testQuestionsChoiceClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame

  // *testQChoice* updates
  if (t >= 0.0 && testQChoice.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    testQChoice.tStart = t;  // (not accounting for frame time here)
    testQChoice.frameNStart = frameN;  // exact frame index
    testQChoice.setAutoDraw(true);
  }


  // *image* updates
  if (t >= 0.0 && image1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    image1.tStart = t;  // (not accounting for frame time here)
    image1.frameNStart = frameN;
    image1.setImage('gre.jpg');// exact frame index
    image1.setAutoDraw(true);
  }


  // *image_2* updates
  if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    image_2.tStart = t;  // (not accounting for frame time here)
    image_2.frameNStart = frameN;
    image_2.setImage("gmat.jpg")// exact frame index
    image_2.setAutoDraw(true);
  }


  // *image_3* updates
  if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    image_3.tStart = t;  // (not accounting for frame time here)
    image_3.frameNStart = frameN;  
    image_3.setImage("lsat.jpg");// exact frame index
    image_3.setAutoDraw(true);
  }


  // *upDown* updates
  if (t >= 0.0 && upDown.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    upDown.tStart = t;  // (not accounting for frame time here)
    upDown.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { upDown.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { upDown.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { upDown.clearEvents(); });
  }

  if (upDown.status === PsychoJS.Status.STARTED) {
    let theseKeys = upDown.getKeys({keyList: ['1', '2', '3'], waitRelease: false});

    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  // at least one key was pressed
      upDown.keys = theseKeys[0].name;  // just the last key pressed
      upDown.rt = theseKeys[0].rt;
    }
  }

  if(upDown.keys === '1'){
      y = 0.105;
  }
  if(upDown.keys == '2'){
      y = -0.05;
  }
  if(upDown.keys === '3'){
      y = -0.2;
  }
  // *polygon* updates
  if ((((upDown.keys == '1') || (upDown.keys == '2') || (upDown.keys == '3') || (upDown.keys == '4'))) && polygon.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    polygon.tStart = t;  // (not accounting for frame time here)
    polygon.frameNStart = frameN;  // exact frame index
    polygon.setAutoDraw(true);
  }


  if (polygon.status === PsychoJS.Status.STARTED){ // only update if being drawn
    polygon.setPos([0, y]);
  }

  // *enter* updates
  if (t >= 0.0 && enter.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    enter.tStart = t;  // (not accounting for frame time here)
    enter.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { enter.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { enter.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { enter.clearEvents(); });
  }

  if (enter.status === PsychoJS.Status.STARTED) {
    let theseKeys = enter.getKeys({keyList: ['return'], waitRelease: false});

    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  // at least one key was pressed
      enter.keys = theseKeys[0].name;  // just the last key pressed
      enter.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of testQuestionsChoiceComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function testQuestionsChoiceRoutineEnd() {
  //------Ending Routine 'testQuestionsChoice'-------
  for (const thisComponent of testQuestionsChoiceComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('upDown.keys', upDown.keys);
  if (typeof upDown.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('upDown.rt', upDown.rt);
      }

  upDown.stop();
  psychoJS.experiment.addData('enter.keys', enter.keys);
  if (typeof enter.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('enter.rt', enter.rt);
      routineTimer.reset();
      }
  if (upDown.keys === '1' && enter.keys !== undefined){
      q = 1;
  }
  if (upDown.keys === '2' && enter.keys !== undefined){
      q = 2;
  }
  if (upDown.keys === '3' && enter.keys !==undefined){
      q = 3;
  }
  enter.stop();
  // the Routine "testQuestionsChoice" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}
var qInstComponents;
function qInstRoutineBegin() {
  //------Prepare to start Routine 'qInst'-------
  t = 0;
  qInstClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp.keys = undefined;
  key_resp.rt = undefined;
  // keep track of which components have finished
  qInstComponents = [];
  qInstComponents.push(textInst);
  qInstComponents.push(key_resp);
  
  for (const thisComponent of qInstComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function qInstRoutineEachFrame() {
  //------Loop for each frame of Routine 'qInst'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = qInstClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text* updates
  if (t >= 0.0 && textInst.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    textInst.tStart = t;  // (not accounting for frame time here)
    textInst.frameNStart = frameN;  // exact frame index
    textInst.setAutoDraw(true);
  }

  
  // *key_resp* updates
  if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp.tStart = t;  // (not accounting for frame time here)
    key_resp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
  }

  if (key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp.keys = theseKeys[0].name;  // just the last key pressed
      key_resp.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of qInstComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function qInstRoutineEnd() {
  //------Ending Routine 'qInst'-------
  for (const thisComponent of qInstComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
  if (typeof key_resp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
      routineTimer.reset();
      }
  
  key_resp.stop();
  // the Routine "qInst" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


var testQsComponents;
var answerKey;
function testQsRoutineBegin() {
  //------Prepare to start Routine 'testQs'-------
  t = 0;
  testQsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  TextQuestion.setText('PLACEHOLDER');
  answerKey = [];
  letterKey.keys = undefined;
  letterKey.rt = undefined;
  enterKey.keys = undefined;
  enterKey.rt = undefined;
  choiceA.setText('QA');
  choiceB.setText('QB');
  choiceC.setText('QC');
  choiceD.setText('QD');
  choiceE.setText('QE');
  // keep track of which components have finished
  testQsComponents = [];
  testQsComponents.push(TextQuestion);
  testQsComponents.push(letterKey);
  testQsComponents.push(enterKey);
  testQsComponents.push(choiceA);
  testQsComponents.push(choiceB);
  testQsComponents.push(choiceC);
  testQsComponents.push(choiceD);
  testQsComponents.push(choiceE);
  testQsComponents.push(conBlank);
  

  if (q === 3){
      TextQuestion.setText(LSAT);
      choiceA.setText(LSATQA);
      choiceB.setText(LSATQB);
      choiceC.setText(LSATQC);
      choiceD.setText(LSATQD);
      choiceE.setText(LSATQE);
      answerKey = (LSATAs);
  }
    
  if (q === 2){
      TextQuestion.setText(GMAT);
      choiceA.setText(GMATQA);
      choiceB.setText(GMATQB);
      choiceC.setText(GMATQC);
      choiceD.setText(GMATQD);
      choiceE.setText(GMATQE);
      answerKey = (GMATAs);
  }
    
  if (q === 1){
      TextQuestion.setText(GRE);
      choiceA.setText(GREQA);
      choiceB.setText(GREQB);
      choiceC.setText(GREQC);
      choiceD.setText(GREQD);
      choiceE.setText(GREQE);
      answerKey = (GREA);
  }
    
  for (const thisComponent of testQsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function testQsRoutineEachFrame() {
  //------Loop for each frame of Routine 'testQs'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = testQsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame

  // *TextQuestion* updates
  if (t >= 0.0 && TextQuestion.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    TextQuestion.tStart = t;  // (not accounting for frame time here)
    TextQuestion.frameNStart = frameN;  // exact frame index
    TextQuestion.setAutoDraw(true);
  }

  if (TextQuestion.status === PsychoJS.Status.STARTED && Boolean(((conBlank.status == FINISHED) || (t >= 180)))) {
    TextQuestion.setAutoDraw(false);
  }

  // *letterKey* updates
  if (t >= 0.0 && letterKey.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    letterKey.tStart = t;  // (not accounting for frame time here)
    letterKey.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { letterKey.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { letterKey.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { letterKey.clearEvents(); });
  }

  if (letterKey.status === PsychoJS.Status.STARTED && Boolean((conBlank.status == STARTED))) {
    letterKey.status = PsychoJS.Status.FINISHED;
  }

  if (letterKey.status === PsychoJS.Status.STARTED) {
    let theseKeys = letterKey.getKeys({keyList: ['a', 'b', 'c', 'd', 'e'], waitRelease: false});

    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  // at least one key was pressed
      letterKey.keys = theseKeys[0].name;  // just the last key pressed
      letterKey.rt = theseKeys[0].rt;
    }
  }
  if ((letterKey.keys === 'a' && enterKey.keys === 'return') && answerKey === 'a'){
      choiceA.setColor(new util.Color('green'));
  }
  if ((letterKey.keys === 'b' && enterKey.keys === 'return') && answerKey === 'b'){
      choiceB.setColor(new util.Color('green'));
  }
  if ((letterKey.keys === 'c' && enterKey.keys === 'return') && answerKey === 'c'){
      choiceC.setColor(new util.Color('green'));
  }
  if ((letterKey.keys === 'd' && enterKey.keys === 'return') && answerKey === 'd'){
      choiceD.setColor(new util.Color('green'));
  }
  if ((letterKey.keys === 'e' && enterKey.keys === 'return') && answerKey === 'e'){
      choiceE.setColor(new util.Color('green'));
  }
    
  if ((letterKey.keys === 'a' && enterKey.keys === 'return') && answerKey !== 'a'){
      choiceA.setColor(new util.Color('red'));
  }
  if ((letterKey.keys === 'b' && enterKey.keys === 'return') && answerKey !== 'b'){
      choiceB.setColor(new util.Color('red'));
  }
  if ((letterKey.keys === 'c' && enterKey.keys === 'return') && answerKey !== 'c'){
      choiceC.setColor(new util.Color('red'));
  }
  if ((letterKey.keys === 'd' && enterKey.keys === 'return') && answerKey !== 'd'){
      choiceD.setColor(new util.Color('red'));
  }
  if ((letterKey.keys === 'e' && enterKey.keys == 'return') && answerKey !== 'e'){
      choiceE.setColor(new util.Color('red'));
  }

  if ((enterKey.keys === 'return' && letterKey.keys !== 'a') && answerKey === 'a'){
      choiceA.setColor(new util.Color('green'));
  }
  if ((enterKey.keys === 'return' && letterKey.keys !== 'b') && answerKey === 'b'){
      choiceB.setColor(new util.Color('green'));
  }
  if ((enterKey.keys === 'return' && letterKey.keys !== 'c') && answerKey === 'c'){
      choiceC.setColor(new util.Color('green'));
  }
  if ((enterKey.keys === 'return' && letterKey.keys !== 'd') && answerKey === 'd'){
      choiceD.setColor(new util.Color('green'));
  }
  if ((enterKey.keys === 'return' && letterKey.keys !== 'e') && answerKey === 'e'){
      choiceE.setColor(new util.Color('green'));
  }

  // *enterKey* updates
  if (t >= 0.0 && enterKey.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    enterKey.tStart = t;  // (not accounting for frame time here)
    enterKey.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { enterKey.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { enterKey.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { enterKey.clearEvents(); });
  }

  if (enterKey.status === PsychoJS.Status.STARTED && Boolean((conBlank.status == STARTED))) {
    enterKey.status = PsychoJS.Status.FINISHED;
  }

  if (enterKey.status === PsychoJS.Status.STARTED) {
    let theseKeys = enterKey.getKeys({keyList: ['return'], waitRelease: false});

    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  // at least one key was pressed
      enterKey.keys = theseKeys[0].name;  // just the last key pressed
      enterKey.rt = theseKeys[0].rt;
    }
  }


  // *choiceA* updates
  if (t >= 0.0 && choiceA.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    choiceA.tStart = t;  // (not accounting for frame time here)
    choiceA.frameNStart = frameN;  // exact frame index
    choiceA.setAutoDraw(true);
  }

  if (choiceA.status === PsychoJS.Status.STARTED && Boolean(((conBlank.status == FINISHED) || (t >= 180)))) {
    choiceA.setAutoDraw(false);
  }

  // *choiceB* updates
  if (t >= 0.0 && choiceB.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    choiceB.tStart = t;  // (not accounting for frame time here)
    choiceB.frameNStart = frameN;  // exact frame index
    choiceB.setAutoDraw(true);
  }

  if (choiceB.status === PsychoJS.Status.STARTED && Boolean(((conBlank.status == FINISHED) || (t >= 180)))) {
    choiceB.setAutoDraw(false);
  }

  // *choiceC* updates
  if (t >= 0.0 && choiceC.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    choiceC.tStart = t;  // (not accounting for frame time here)
    choiceC.frameNStart = frameN;  // exact frame index
    choiceC.setAutoDraw(true);
  }

  if (choiceC.status === PsychoJS.Status.STARTED && Boolean(((conBlank.status == FINISHED) || (t >= 180)))) {
    choiceC.setAutoDraw(false);
  }

  // *choiceD* updates
  if (t >= 0.0 && choiceD.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    choiceD.tStart = t;  // (not accounting for frame time here)
    choiceD.frameNStart = frameN;  // exact frame index
    choiceD.setAutoDraw(true);
  }

  if (choiceD.status === PsychoJS.Status.STARTED && Boolean(((conBlank.status == FINISHED) || (t >= 180)))) {
    choiceD.setAutoDraw(false);
  }

  // *choiceE* updates
  if (t >= 0.0 && choiceE.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    choiceE.tStart = t;  // (not accounting for frame time here)
    choiceE.frameNStart = frameN;  // exact frame index
    choiceE.setAutoDraw(true);
  }

  if (choiceE.status === PsychoJS.Status.STARTED && Boolean(((conBlank.status == FINISHED) || (t >= 180)))) {
    choiceE.setAutoDraw(false);
  }

  // *conBlank* updates
  if (((enterKey.keys == 'return')) && conBlank.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    conBlank.tStart = t;  // (not accounting for frame time here)
    conBlank.frameNStart = frameN;  // exact frame index
    conBlank.setAutoDraw(true);
  }

  if (conBlank.status === PsychoJS.Status.STARTED && t >= (conBlank.tStart + 2.5)) {
    conBlank.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of testQsComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function testQsRoutineEnd() {
  //------Ending Routine 'testQs'-------
  for (const thisComponent of testQsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('letterKey.keys', letterKey.keys);
  if (typeof letterKey.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('letterKey.rt', letterKey.rt);
      }

  choiceA.setColor(new util.Color('white'));
  choiceB.setColor(new util.Color('white'));
  choiceC.setColor(new util.Color('white'));
  choiceD.setColor(new util.Color('white'));
  choiceE.setColor(new util.Color('white'));
  letterKey.stop();
  doTestPractice = 0;
  psychoJS.experiment.addData('enterKey.keys', enterKey.keys);
  if (typeof enterKey.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('enterKey.rt', enterKey.rt);
      }

  enterKey.stop();
  // the Routine "testQs" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}
var GameComponents;
function GameRoutineBegin() {
  //------Prepare to start Routine 'Game'-------
  t = 0;
  GameClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  spaceKey.keys = undefined;
  spaceKey.rt = undefined;
  // keep track of which components have finished
  GameComponents = [];
  GameComponents.push(gameInstructions);
  GameComponents.push(spaceKey);

  for (const thisComponent of GameComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function GameRoutineEachFrame() {
  //------Loop for each frame of Routine 'Game'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = GameClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame

  // *gameInstructions* updates
  if (t >= 0.0 && gameInstructions.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    gameInstructions.tStart = t;  // (not accounting for frame time here)
    gameInstructions.frameNStart = frameN;  // exact frame index
    gameInstructions.setAutoDraw(true);
  }


  // *spaceKey* updates
  if (t >= 0.0 && spaceKey.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    spaceKey.tStart = t;  // (not accounting for frame time here)
    spaceKey.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { spaceKey.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { spaceKey.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { spaceKey.clearEvents(); });
  }

  if (spaceKey.status === PsychoJS.Status.STARTED) {
    let theseKeys = spaceKey.getKeys({keyList: ['space'], waitRelease: false});

    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  // at least one key was pressed
      spaceKey.keys = theseKeys[0].name;  // just the last key pressed
      spaceKey.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of GameComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function GameRoutineEnd() {
  //------Ending Routine 'Game'-------
  for (const thisComponent of GameComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('spaceKey.keys', spaceKey.keys);
  if (typeof spaceKey.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('spaceKey.rt', spaceKey.rt);
      routineTimer.reset();
      }

  spaceKey.stop();
  // the Routine "Game" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}
var pacmanComponents;
function pacmanRoutineBegin() {
  //------Prepare to start Routine 'pacman'-------
  t = 0;
  pacmanClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  pacmanComponents = [];

  for (const thisComponent of pacmanComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

function pacmanRoutineEachFrame() {
  //------Loop for each frame of Routine 'pacman'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = pacmanClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of pacmanComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function pacmanRoutineEnd() {
  //------Ending Routine 'pacman'-------
  for (const thisComponent of pacmanComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  doGame = 0;
  window.location.replace("http://JoanneStasiak.github.io");
  // the Routine "pacman" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();

  return Scheduler.Event.NEXT;
}

function endLoopIteration({thisScheduler, isTrials=true}) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      // Check for and save orphaned data
      if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
        psychoJS.experiment.nextEntry();
      }
      thisScheduler.stop();
    } else if (isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}

function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}

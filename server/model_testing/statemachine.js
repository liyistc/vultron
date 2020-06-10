const aa = require("aa");
const assert = require("assert");
const hex2ascii = require('hex2ascii')
const Machine = require("xstate").Machine;
const assign = require("xstate").assign;
const interpret = require("xstate").interpret;
const createModel = require("@xstate/test").createModel;
const FiscoFuzzer = require("../connection/fisco/fuzzer.js").FiscoFuzzer;
const FiscoDeployer = require("../connection/fisco/fuzzer.js").FiscoDeployer;
let asyncFlag = false;

function revertAsyncFlag() {
asyncFlag = !asyncFlag;
}


// contract interface 

class CreditController {
constructor(fuzzer) {
  this.address = "0x04f5f0cd6c15d0a945506fff58d633063a30c328";
  this.name = "CreditController";
  this.fuzzer = fuzzer;
}

async getCreditAddressByCreditNo() {
  let fuzz = await this.fuzzer.full_fuzz_fun("CreditController", "0x04f5f0cd6c15d0a945506fff58d633063a30c328", "getCreditAddressByCreditNo");
  return fuzz;
}

async transferAndDiscountCheck() {
  let fuzz = await this.fuzzer.full_fuzz_fun("CreditController", "0x04f5f0cd6c15d0a945506fff58d633063a30c328", "transferAndDiscountCheck");
  return fuzz;
}

async transferCredit() {
  let fuzz = await this.fuzzer.full_fuzz_fun("CreditController", "0x04f5f0cd6c15d0a945506fff58d633063a30c328", "transferCredit");
  return fuzz;
}

async staticArrayToDynamicArray() {
  let fuzz = await this.fuzzer.full_fuzz_fun("CreditController", "0x04f5f0cd6c15d0a945506fff58d633063a30c328", "staticArrayToDynamicArray");
  return fuzz;
}

async accountIsOk() {
  let fuzz = await this.fuzzer.full_fuzz_fun("CreditController", "0x04f5f0cd6c15d0a945506fff58d633063a30c328", "accountIsOk");
  return fuzz;
}

async expireOrClearOrCloseCredit() {
  let fuzz = await this.fuzzer.full_fuzz_fun("CreditController", "0x04f5f0cd6c15d0a945506fff58d633063a30c328", "expireOrClearOrCloseCredit");
  return fuzz;
}

async discountCredit() {
  let fuzz = await this.fuzzer.full_fuzz_fun("CreditController", "0x04f5f0cd6c15d0a945506fff58d633063a30c328", "discountCredit");
  return fuzz;
}

async createCredit() {
  let fuzz = await this.fuzzer.full_fuzz_fun("CreditController", "0x04f5f0cd6c15d0a945506fff58d633063a30c328", "createCredit");
  return fuzz;
}

}
// state machine context
class StateMachineCtx {
constructor(fuzzer) {
  this.CreditController = new CreditController(fuzzer);

  this.state = {
    "id": "FSM#1"
  };
  this.fuzzer = fuzzer;
}
static getInstance(fuzzer) {
  if (!StateMachineCtx.instance)
    StateMachineCtx.instance = new StateMachineCtx(fuzzer);
  return StateMachineCtx.instance;
}
getState() {
  //TO DO, set what your state means and how to get the state

}
// action_functions_mapping
async action_CREATE() {
  let ret = [];
  if (asyncFlag) {
    // PreCondition. TO DO
    let retcreateCredit = await StateMachineCtx.getInstance().CreditController.createCredit();
    ret.push(retcreateCredit);

    // PostCondition. TO DO
  }
  return ret;
}
async action_DISCOUNT() {
  let ret = [];
  if (asyncFlag) {
    // PreCondition. TO DO
    let retdiscountCredit = await StateMachineCtx.getInstance().CreditController.discountCredit();
    ret.push(retdiscountCredit);

    // PostCondition. TO DO
  }
  return ret;
}
async action_TRANSFER() {
  let ret = [];
  if (asyncFlag) {
    // PreCondition. TO DO
    let rettransferCredit = await StateMachineCtx.getInstance().CreditController.transferCredit();
    ret.push(rettransferCredit);

    // PostCondition. TO DO
  }
  return ret;
}
async action_EXPIRE() {
  let ret = [];
  if (asyncFlag) {
    // PreCondition. TO DO
    let retexpireOrClearOrCloseCredit = await StateMachineCtx.getInstance().CreditController.expireOrClearOrCloseCredit();
    ret.push(retexpireOrClearOrCloseCredit);

    // PostCondition. TO DO
  }
  return ret;
}
async action_CLOSE() {
  let ret = [];
  if (asyncFlag) {
    // PreCondition. TO DO
    let retexpireOrClearOrCloseCredit = await StateMachineCtx.getInstance().CreditController.expireOrClearOrCloseCredit();
    ret.push(retexpireOrClearOrCloseCredit);

    // PostCondition. TO DO
  }
  return ret;
}
async action_CLEAR() {
  let ret = [];
  if (asyncFlag) {
    // PreCondition. TO DO
    let retexpireOrClearOrCloseCredit = await StateMachineCtx.getInstance().CreditController.expireOrClearOrCloseCredit();
    ret.push(retexpireOrClearOrCloseCredit);

    // PostCondition. TO DO
  }
  return ret;
}
}
// state machine 
const createStateMachine = statectx => {
return Machine({
  id: "FSM#1",
  initial: "initial",
  context: {
    ctx: statectx
  },
  states: {

    initial: {
      on: {
        CREATE: {
          target: "created",
          actions: "action_CREATE"
        }
      }
    },
    created: {
      on: {
        TRANFER: {
          target: "created",
          actions: "action_TRANFER"
        },
        DISCOUNT: {
          target: "discounted",
          actions: "action_DISCOUNT"
        },
        EXPIRE: {
          target: "expired",
          actions: "action_EXPIRE"
        },
        CLEAR: {
          target: "cleared",
          actions: "action_CLEAR"
        },
        CLOSE: {
          target: "closed",
          actions: "action_CLOSE"
        }
      }
    },
    discounted: {
      on: {
        EXPIRE: {
          target: "expired",
          actions: "action_EXPIRE"
        },
        CLEAR: {
          target: "cleared",
          actions: "action_CLEAR"
        },
        CLOSE: {
          target: "closed",
          actions: "action_CLOSE"
        }
      }
    },
    expired: {
      type: "final"
    },
    cleared: {
      type: "final"
    },
    closed: {
      type: "final"
    }
  }
}, {
  actions: {
    action_CREATE: statectx.action_CREATE,
    action_DISCOUNT: statectx.action_DISCOUNT,
    action_TRANSFER: statectx.action_TRANSFER,
    action_EXPIRE: statectx.action_EXPIRE,
    action_CLOSE: statectx.action_CLOSE,
    action_CLEAR: statectx.action_CLEAR
  }
});
}


class FiscoStateMachineFuzzer extends FiscoFuzzer {
constructor(seed, contract_name, ) {
  super(seed, contract_name);
}
static getInstance(seed, contract_name) {
  if (!FiscoStateMachineFuzzer.instance) {
    FiscoStateMachineFuzzer.instance = new FiscoStateMachineFuzzer(seed, contract_name)
  }
  return FiscoStateMachineFuzzer.instance;
}
async bootstrap(socket) {
  let stateMachine = createStateMachine(
    StateMachineCtx.getInstance(
      FiscoStateMachineFuzzer.getInstance()
    ));
  // console.log(stateMachine.context);
  let service = interpret(stateMachine).onTransition(state => {
    console.log(state.value);
  });
  service = aa.promisifyAll(service);
  // console.log(stateMachine);
  const toggleModel = createModel(stateMachine);
  console.log(JSON.stringify(toggleModel));
  console.log(toggleModel.machine.context);
  console.log("******************************");
  let plans = toggleModel.getSimplePathPlans();
  console.log("size of  simplepath plans:", plans.length);
  let index = 1;
  for (let plan of plans) {
    console.log("plan#", index++);
    for (let path of plan.paths) {
      console.log(path.description);
    }
  }
  console.log("******************************");
  plans = toggleModel.getShortestPathPlans();
  console.log("size of shortestpath plans:", plans.length);
  index = 1;
  for (let plan of plans) {
    console.log("plan#", index++);
    for (let path of plan.paths) {
      console.log(path.description);
    }
  }
  console.log("******************************");
  index = 1;
  for (let plan of plans) {
    console.log("plan#", index++, Date().now());
    for (let path of plan.paths) {
      let start = service.start();
      let events = path.description.split("via ")[1].split(" → ");
      console.log(path.description);
      console.log("transition by event ", events);
      let state = service.send(events);
      // console.log(state);
      console.log(state.actions);
      revertAsyncFlag();
      let startTime = Math.floor(Date().now() / 1000);
      for (let action of state.actions) {

        let ret = await action.exec(start.context, undefined);
        console.log(action.type, ret);
        console.log({
          event: "Action_Report",
          data: {
            startTime: startTime,
            currentTime: Math.floor(Date().now() / 1000),
            plan: state.actions,
            action: action.type
          }
        });
        socket.emit("server", {
          event: "Action_Report",
          data: {
            startTime: startTime,
            currentTime: Math.floor(Date().now() / 1000),
            plan: state.actions,
            action: action.type
          }
        });
        // while (ret.length == 0) {
        //     ret = await action.exec(start.context, undefined);
        //     console.log(action.type, ret);
        // }
      }
      revertAsyncFlag();
      service.stop();
      // console.log(path.segments);
    }
    console.log("Approaching fsm state->", plan.state.value);
    console.log("********************************************");
    // if (index == 3)
    //     break;
  }

  return {
    callFuns: [],
    execResults: []
  };
}

async _seed_callSequence() {
  console.log(__filename, "_seed_callSequence");
  let ret = await super._seed_callSequence();
  return ret;
}
}
module.exports.FiscoStateMachineFuzzer = FiscoStateMachineFuzzer
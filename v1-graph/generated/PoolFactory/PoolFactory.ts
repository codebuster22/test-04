// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class DeployPool extends ethereum.Event {
  get params(): DeployPool__Params {
    return new DeployPool__Params(this);
  }
}

export class DeployPool__Params {
  _event: DeployPool;

  constructor(event: DeployPool) {
    this._event = event;
  }

  get pool(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get originalCollection(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get collateralCoverageRatio(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get interestRate(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get chargeInterval(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get burnRate(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get loanTerm(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get minLiquidity(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get minDeposit(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get paymentFrequency(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }
}

export class PoolFactory extends ethereum.SmartContract {
  static bind(address: Address): PoolFactory {
    return new PoolFactory("PoolFactory", address);
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreatePoolCall extends ethereum.Call {
  get inputs(): CreatePoolCall__Inputs {
    return new CreatePoolCall__Inputs(this);
  }

  get outputs(): CreatePoolCall__Outputs {
    return new CreatePoolCall__Outputs(this);
  }
}

export class CreatePoolCall__Inputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }

  get originalCollection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get collateralCoverageRatio(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get interestRate(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get chargeInterval(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get burnRate(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get loanTerm(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get minLiquidity(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get minDeposit(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get paymentFrequency(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }
}

export class CreatePoolCall__Outputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}
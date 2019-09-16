function BoardMember (name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;

  this.veto = function(){  // ili User.prototype.sayHello
    return `No, I must disagree`;
  }

  this.approve = function(){  // ili User.prototype.sayHello
    return `You can do that!`;
  }

  this.doCharity = function(){  // ili User.prototype.sayHello
    return `I like to help people.`;
  }

  this.releasePressStatement = function(){  // ili User.prototype.sayHello
    return `You will see great things from Scuber.`;
  }

  this.sayHi = function(){  // ili User.prototype.sayHello
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  }




}

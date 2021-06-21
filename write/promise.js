const Promise1 = (executor) => {
  let self = this;
  self.status = "pending";
  self.value = undefined;
  self.reason = undefined;

  const resolve = (value) => {
    if (self.status === "pending") {
      self.status = "resolve";
      self.value = value;
    }
  };

  const reject = (reason) => {
    if (self.status === "pending") {
      self.status = "reject";
      self.reason = reason;
    }
  };

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
};

Promise1.prototype.then = (onFufiled, onRejected) => {
  let self = this;
  if (self.status === "resolve") {
    onFufiled(self.value);
  }
  if (self.status === "reject") {
    onRejected(self.reason);
  }
};

export { Promise1 }

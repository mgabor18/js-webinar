/**
 * Create Element class, which represents an element of
 * the application, and
 *
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("h1.title")
 * 2. It has a name (.name), e.g. "Document Title"
 * 3. It can have a parent Element,
 *    which is the context of the element (.parent)
 * 4. It can have children Elements (.children)
 * 5. It has a method to retrieve the protractor element
 *    by the locator (.get([name])) in it's context
 *     - if it gets a name as parameter, it tries to find
 *       in it's children (recursively) the Element with
 *       the given name or throws an Error if it cannot
 *       find the element
 */
module.exports = class Element {
  constructor(name, locator) {
    this.name = name;
    this.locator = locator;
    this.parent = null;
    this.children = {};
  }
  setParent(parent) {
    this.parent = parent;
  }
  addChildren(child) {
    if (this.children.hasOwnProperty(child.name)) {
      throw new Error(`${child.name} is already added.`);
    }
    this.children[child.name] = child;
  }
  get(name) {
    if (name === undefined) {
      return element(this.locator);
    }
    if (this.children[name]) {
      return element(this.children[name].locator);
    }
    if (this.children !== {}) {
      for (let key in this.children) {
        return this.children[key].get(name);
      }
    }
    throw new Error("Children is not found!");
  }
};

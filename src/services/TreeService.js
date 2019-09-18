class TreeService {
  tree = {};

  constructor() {
    this.getTree = this.getTree.bind(this);
  }

  getTree() {
    return this.tree;
  }

  getKeyMap(key) {
    if (!this.tree[key] || !this.tree[key].keyMap) {
      return;
    }

    return this.tree[key].keyMap;
  }

  registerTreeKey(key) {
    if (this.tree[key]) {
      return;
    }

    this.tree = {
      ...this.tree,
      [key]: {
        items: {},
        keyMap: {}
      }
    };
  }

  registerTreeItem(key, i, element) {
    if (!this.tree[key]) {
      this.registerTreeKey(key);
    }

    if (this.tree[key].items[i]) {
      return;
    }

    this.tree[key].items[i] = element;
  }

  registerKeyMap(key, keyMap) {
    if (!this.tree[key]) {
      this.registerTreeKey(key);
    }

    this.tree[key].keyMap = keyMap;
  }
}

export default new TreeService();

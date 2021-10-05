/******************************************* 链表 ************************************************/
/**
 * 链表节点
 * @param {*} val
 * @param {ListNode} next
 */
const ListNode = function(val, next = null) {
    this.val = val;
    this.next = next;
}
/**
 * 将一个数组转为链表
 * @param {array} a
 * @return {ListNode}
 */
const getListFromArray = (a) => {
    let dummy = new ListNode()
    let pre = dummy;
    a.forEach(x => pre = pre.next = new ListNode(x));
    return dummy.next;
}
/**
 * 将一个链表转为数组
 * @param {ListNode} node
 * @return {array}
 */
const getArrayFromList = (node) => {
    let a = [];
    while (node) {
        a.push(node.val);
        node = node.next;
    }
    return a;
}
/**
 * 打印一个链表
 * @param {ListNode} node
 */
const logList = (node) => {
    let str = 'list: ';
    while (node) {
        str += node.val + '->';
        node = node.next;
    }
    str += 'end';
    log(str);
}
// 还有一个常用小技巧，每次写链表的操作，都要注意判断表头，如果创建一个空表头来进行操作会方便很多。

// let dummy = new ListNode();
// // 返回
// return dummy.next;

/******************************************* 矩阵 ************************************************/

/**
 * 初始化一个二维数组
 * @param {number} r 行数
 * @param {number} c 列数
 * @param {*} init 初始值
 */
const initMatrix = (r, c, init = 0) => new Array(r).fill().map(_ => new Array(c).fill(init));
/**
 * 获取一个二维数组的行数和列数
 * @param {any[][]} matrix
 * @return [row, col]
 */
const getMatrixRowAndCol = (matrix) => matrix.length === 0 ? [0, 0] : [matrix.length, matrix[0].length];
/**
 * 遍历一个二维数组
 * @param {any[][]} matrix
 * @param {Function} func
 */
const matrixFor = (matrix, func) => {
    matrix.forEach((row, i) => {
        row.forEach((item, j) => {
            func(item, i, j, row, matrix);
        });
    })
}
/**
 * 获取矩阵第index个元素 从0开始
 * @param {any[][]} matrix
 * @param {number} index
 */
const getMatrix = function(matrix, index) {
    let col = matrix[0].length;
    let i = ~~(index / col);
    let j = index - i * col;
    return matrix[i][j];
}
/**
 * 设置矩阵第index个元素 从0开始
 * @param {any[][]} matrix
 * @param {number} index
 */
const setMatrix = function(matrix, index, value) {
    let col = matrix[0].length;
    let i = ~~(index / col);
    let j = index - i * col;
    return matrix[i][j] = value;
}

/******************************************* 二叉树 ************************************************/

const TreeNode = function(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
/**
 * 通过一个层次遍历的数组生成一棵二叉树
 * @param {any[]} array
 * @return {TreeNode}
 */
const getTreeFromLayerOrderArray = function(array) {
    let n = array.length;
    if (!n) return null;
    let index = 0;
    let root = new TreeNode(array[index++]);
    let queue = [root];
    while(index < n) {
        let top = queue.shift();
        let v = array[index++];
        top.left = v == null ? null : new TreeNode(v);
        if (index < n) {
            let v = array[index++];
            top.right = v == null ? null : new TreeNode(v);
        }
        if (top.left) queue.push(top.left);
        if (top.right) queue.push(top.right);
    }
    return root;
}
/**
 * 层序遍历一棵二叉树 生成一个数组
 * @param {TreeNode} root
 * @return {any[]}
 */
const getLayerOrderArrayFromTree = function(root) {
    let res = [];
    let que = [root];
    while (que.length) {
        let len = que.length;
        for (let i = 0; i < len; i++) {
            let cur = que.shift();
            if (cur) {
                res.push(cur.val);
                que.push(cur.left, cur.right);
            } else {
                res.push(null);
            }
        }
    }
    while (res.length > 1 && res[res.length - 1] == null) res.pop(); // 删掉结尾的 null
    return res;
}

/******************************************* 二分查找 ************************************************/

/**
 * 寻找>=target的最小下标
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const lower_bound = function(nums, target) {
    let first = 0;
    let len = nums.length;

    while (len > 0) {
        let half = len >> 1;
        let middle = first + half;
        if (nums[middle] < target) {
            first = middle + 1;
            len = len - half - 1;
        } else {
            len = half;
        }
    }
    return first;
}

/**
 * 寻找>target的最小下标
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const upper_bound = function(nums, target) {
    let first = 0;
    let len = nums.length;

    while (len > 0) {
        let half = len >> 1;
        let middle = first + half;
        if (nums[middle] > target) {
            len = half;
        } else {
            first = middle + 1;
            len = len - half - 1;
        }
    }
    return first;
}

/******************************************* 其他工具 ************************************************/
const deepClone = (source) => {
    if (!source && typeof source !== 'object') {
        throw new Error('error arguments', 'deepClone');
    }
    const targetObj = source.constructor === Array ? [] : {};
    Object.keys(source).forEach(keys => {
        if (source[keys] && typeof source[keys] === 'object') {
            targetObj[keys] = deepClone(source[keys]);
        } else {
            targetObj[keys] = source[keys];
        }
    });
    return targetObj;
}
const random = (min, max) => {
    if (min > max) {
        min = [max, max = min][0];
    }
    const range = max - min;
    return (min + Math.round(Math.random() * range));
}
const arrSum = function(arr) {
    return arr.reduce((x, y) => x + y)
}
const formatFloat = function(num, x = 2) {
    if (!num) {
        num = 0
    } else if (typeof num !== 'number') {
        num = Number.parseFloat(num)
    }
    return Number.parseFloat(Number.parseFloat(num).toFixed(x))
}
export default {
    ListNode,
    getArrayFromList,
    getListFromArray,
    logList,
    initMatrix,
    getMatrix,
    setMatrix,
    matrixFor,
    getMatrixRowAndCol,
    TreeNode,
    getLayerOrderArrayFromTree,
    getTreeFromLayerOrderArray,
    upper_bound,
    lower_bound,
    deepClone,
    random,
    arrSum,
    formatFloat
}
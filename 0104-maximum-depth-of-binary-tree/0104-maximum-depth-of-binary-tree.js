/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let max_depth = 0;
    
    if(!root){
        return max_depth;
    }
    
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    max_depth = Math.max(leftDepth,rightDepth) + 1;
    return max_depth
};
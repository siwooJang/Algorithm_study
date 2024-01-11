
var lowestCommonAncestor = function(root, p, q) {
    let result = null;
    
    let dfs = (node) => {
        if(node === null) return false;
        
        let left = dfs(node.left);
        let right = dfs(node.right);
        
        let cur = node === p || node === q;
        
        if(left+right+cur >= 2) result = node;
        
        return left || right || cur;
    }
    
    dfs(root);
    return result
};
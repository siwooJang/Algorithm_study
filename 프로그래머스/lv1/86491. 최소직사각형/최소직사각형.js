function solution(sizes) {
    const [hr, ver] = sizes.reduce(([h, v], [a, b]) => 
    [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hr * ver;
}

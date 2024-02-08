function solution(sizes) {
    const r = sizes.map(([w,h]) =>  w<h ? [h,w] : [w,h]  );
    let max = [0,0];
    r.forEach(([w,h]) =>{
        if(w>max[0]) max[0] = w;
        if(h>max[1]) max[1] = h;
    })
    return max[0] * max[1]
}
const solution = my_string => my_string.split('').map(Number).filter(t=>!isNaN(t)).sort((a,b) => a-b)

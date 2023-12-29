SELECT f.flavor
from first_half f
join july j on f.flavor = j.flavor
group by f.flavor
order by sum(j.total_order) + sum(f.total_order) desc limit 3
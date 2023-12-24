SELECT a.flavor
from first_half a
join july b on a.flavor = b.flavor
group by a.flavor
order by sum(b.total_order) + sum(a.total_order) desc limit 3
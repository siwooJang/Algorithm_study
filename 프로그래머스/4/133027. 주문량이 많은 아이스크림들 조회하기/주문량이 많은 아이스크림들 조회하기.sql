select a.flavor
from first_half a, july b
where a.flavor = b.flavor
group by a.flavor
order by sum(a.total_order)+sum(b.total_order) desc
limit 3;
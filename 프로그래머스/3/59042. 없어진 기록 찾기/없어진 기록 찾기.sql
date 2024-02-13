select distinct b.animal_id,b.name
from animal_outs b left join animal_ins a on a.animal_id = b.animal_id
where a.animal_id is null
order by b.animal_id
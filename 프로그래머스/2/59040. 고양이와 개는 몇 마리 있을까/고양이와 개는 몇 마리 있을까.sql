select ANIMAL_TYPE , count(*) as count
FROM ANIMAL_INS
group by animal_type
order by animal_type
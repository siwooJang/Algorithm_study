select book_id,author_name,DATE_FORMAT(published_date,"%Y-%m-%d")
from book a, author b
where a.author_id = b.author_id
and category = '경제'
order by a.published_date
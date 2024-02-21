select CATEGORY,sum(b.sales) as TOTAL_SALES
from book a, book_sales b
where a.book_id = b.book_id
and b.sales_date between '2022-01-01' and '2022-01-31'
group by a.category
order by a.category;
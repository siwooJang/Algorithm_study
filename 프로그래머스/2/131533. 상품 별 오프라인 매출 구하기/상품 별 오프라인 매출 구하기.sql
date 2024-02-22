select a.product_code as PRODUCT_CODE, (a.price * sum(b.sales_amount)) as SALES
from product a, offline_sale b
where a.product_id = b.product_id
group by a.product_code
order by sales desc, a.product_code;
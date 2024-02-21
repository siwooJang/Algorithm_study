select MONTH(START_DATE) AS MONTH, CAR_ID, COUNT(HISTORY_ID) AS RECORDS
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
where date_format(START_DATE,'%Y-%m') between '2022-08' and '2022-10'
and car_id in 
(select car_id from CAR_RENTAL_COMPANY_RENTAL_HISTORY 
where date_format(START_DATE,'%Y-%m') between '2022-08' and '2022-10' 
group by car_id having count(*) >= 5 )
group by MONTH,CAR_ID
ORDER BY MONTH,CAR_ID DESC;
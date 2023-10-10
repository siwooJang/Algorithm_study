select MCDP_CD AS "진료과코드" , count(*) as "5월예약건수"
from APPOINTMENT where APNT_YMD like '2022-05%' group by MCDP_CD order by count(*) ASC
,MCDP_CD ASC;
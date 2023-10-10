select MCDP_CD AS "진료과코드" , count(*) as "5월예약건수"
from APPOINTMENT where TO_CHAR(APNT_YMD,'YYYYMM')='202205' group by MCDP_CD order by "5월예약건수","진료과코드";
update shelf
set name = null,
    price = null
where id = $1;
select * from shelf;
const db = require('./config/dbConn');

const dischargeUpdate=async()=>{
    const date = new Date();
    const result = await db.query('SELECT * FROM INPATIENTS WHERE DISCHARGE_DATE <= $1 AND DISCHARGE_DATE = $2',[date, 'N']);
    for( i of result.rows){
        await db.query('UPDATE ROOMS SET CURR_AVBL_OCC_CAPACITY = CURR_AVBL_OCC_CAPACITY+1 WHERE ROOM_ID = $1', [i.room_id]);
        await db.query('UPDATE INPATIENTS SET DISCHARGE_STATUS = $1 WHERE ADMISSION_ID = $2',['Y',i.admission_id])
    }
    // await db.query('DELETE FROM INPATIENTS WHERE DISCHARGE_DATE <= $1',[date]);
    console.log(result.rows.length +' patients discharged!');
}

module.exports = dischargeUpdate;
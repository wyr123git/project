module.exports = {//导出数据库中的记录
	NewsModel:{
			id        : { type: 'serial', key: true },
			title     : String,
			img       : String,
			col_id    : Number,
			tag_id    : Number,
			create_time : Date
		},
	ColumnModel:{
			id        : { type: 'serial', key: true },
			col_name  : String
		},
	TagModel:{
			id        : { type: 'serial', key: true },
			tag_name  : String
		}
}
import {field, params, pack} from '../utils';
import {mock, Random} from 'mockjs';

const apiPrefix="/api";

export default {
	"GET /demoapi1":{
	    $desc: '接口名称1',
		$params: {
			currentPage:{
				desc: '第几页',
				exp: 1,
			}
		},
	    $body: {}
    },
    "GET /demoapi2":{
	    $desc: '接口名称2',
		$params: {
			...field('currentPage', '第几页', 1),
			...field('pageSize', '每页数据量', 10),
		},
	    $body: {}
    },
	"GET /demoapi3":{
	    $desc: '接口名称3',
		$params: params([
		  ['currentPage', '第几页', 1],
		  ['pageSize', '每页数据量', 10],
		  ['startTime', '开始时间', 15235646898],
		]),
	    $body: {}
    },
    "GET /demoapi4":{
	    $desc: '接口名称4',
		$params: pack([
			'currentPage',
			'pageSize',
			'startTime',
			'endTime'
		]),
	    $body: {}
    },
    [`GET ${apiPrefix}/mockData`]:{
	    $desc: '接口名称',
	    $body: mock({
	    	'list|5':[
	    		{
	    			'id|+1':0,
	    			'name':'@CNAME',
	    			'email':'@EMIAL(bitors.com)',
	    			'phone': /1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}/,
	    			'avatar':'@IMAGE(125x125)',
	    			'isadmin|0-1': 1,
					'created_at': () => {
						return Random.datetime('yyyy-MM-dd HH:mm:ss');
					},
					'updated_at': () => {
						// 随机 时间戳
						let tmp = Random.datetime();
						return new Date(tmp).getTime();
					},
	    		}
	    	]
	    })
    },

    [`GET ${apiPrefix}/users/1`](req, res) {
	    const params = req.query;
	    // console.log(params)
	    res.json({
	      	$desc: '模拟接受接口请求',
		    $body: mock({
		    	'list|5':[
		    		{
		    			'id|+1':0,
		    			'name':'@CNAME',
		    			'email':'@EMIAL(bitors.com)',
		    			'phone': /1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}/,
		    			'avatar':'@IMAGE(125x125)',
		    			'isadmin|0-1': 1,
						'created_at': () => {
							return Random.datetime('yyyy-MM-dd HH:mm:ss');
						},
						'updated_at': () => {
							// 随机 时间戳
							let tmp = Random.datetime();
							return new Date(tmp).getTime();
						},
		    		}
		    	],
		    	pagination:{
		    		currentPage: params.currentPage,
		    		pageSize: params.pageSize,
		    		total: 15
		    	}
		    })
	    })
	}

}
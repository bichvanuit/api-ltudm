module.exports = {
	friendlyName: 'Template mail order',
	description: '',	
	inputs: {
		order : {type : 'ref'},
		product : {type : 'ref'},
		location : {type : 'ref'},
	},
	exits: {
	},
	fn: async function (inputs, exits) {    
		let order = inputs.order,
		product = inputs.product,
		location = inputs.location,
		total = product.map(item => item.price_sale).reduce((prev, next) => parseInt(prev) + parseInt(next));
		let html = `
			<!doctype html>
			<html lang="en">
			<head>
			  <meta charset="utf-8">
			  <meta http-equiv="X-UA-Compatible" content="IE=edge">
			  <title>MWMark.vn</title>
			  <style>
				body{
					background-color: #f6f6f6;
					font-family: sans-serif;
					-webkit-font-smoothing: antialiased;
					font-size: 14px;
					line-height: 1.4;
					-ms-text-size-adjust: 100%;
					-webkit-text-size-adjust: 100%;
				}
				
				.body {
					background-color: #f6f6f6;
					width: 100%;			
					padding-bottom: 10px;
					padding-top: 10px;
				}
				
				p {
					margin-top: 0px;
					margin-bottom: 5px;
				}
				
				.container {
					margin: 0px auto;	
					background-color: #fff;	 
					max-width: 580px;
					box-sizing: border-box;
					display: block;
				}
				
				.title-page {
					font-size: 18px;
					font-weight: bold;
					color: #021f3d;
				}

				.title-para {
					color: #021f3d;
					font-size: 16px;
					font-weight: bold;
					padding-bottom: 5px;
					margin-bottom: 10px;
					border-bottom: 1px solid #ccc;
				}
				.header {
					padding: 10px 20px;
					border-bottom: 2px solid #000;
				}
				
				.footer {
					padding: 10px 20px;
				}
				
				.body-content {
					padding: 20px;
				}
				
				.main-content {
					display: inline-flex;
					width: 100%;
				}
				
				.col-left, .col-right {
					width: 50%;
				}
				
				.detail-order {
					margin-top: 20px;
					width: 100%;
				}
				
				table {
					border-collapse: collapse;
					width: 100%;		
				}
				
				table, th, td {	
					padding: 10px;
				}
				
				tr.title-table {
					background-color: #021f3d;
					color: #fff;
				}
				
				tr.product-item, tr.summary {
					background-color: #eee;
					color: #000;
				}
				
				tr.calulator {
					background-color: #f5f5f5;
					color: #000;
					text-align: right;
				}
				
				tr.summary {
					text-align: right;
					font-height: 700;
				}
				
				.text-right {
					text-align: right;
					font-height: 700 !important;
				}
				
				.text-center {
					text-align: center;
				}
				
				.contact {
					color: #099202;		
				}							
			  </style>
			</head>
			<body>
				<div class="body">
					<div class="container">
						<div class="header">
							<p class="title-page">MWMart đã nhận đơn hàng #${order.id}</p>
						</div>
						<div class="body-content">
							<div class="info-order">
								<p class="title-para">Thông tin đơn hàng</p>
								<div class="main-content">
									<div class="col-left">
										<p><strong>Thông tin thanh toán</strong></p>
										<p>${order.fullname}</p>
										<p>${order.email}</p>
										<p>${order.phone_number}</p>
									</div>
									<div class="col-right">
										<p><strong>Địa chỉ giao hàng</strong></p>
										<p>${order.apartment_street_number}, ${location.commune_name}, ${location.district_name}, ${location.province_name}</p>
									</div>
								</div>
							</div>
							<div class="detail-order">
								<p class="title-para">Chi tiết đơn hàng</p>
								<table>
									<thead>
									  <tr class="title-table">                   
										<th>Tên sản phẩm</th>                    
										<th>Đơn giá</th>
										<th>Số lượng</th>                   
										<th>Tổng tạm</th>
									  </tr>
									</thead>
									<tbody>`;
										for(var i in product) {
										 html += `<tr class="product-item">                   
											<td style="width:250px;">${product[i].product_name}</td>
											<td>${product[i].price_sale} ₫</td>
											<td class="text-center">${product[i].amount}</td>   
											<td class="text-right"><strong>${product[i].price_sale * product[i].amount} ₫</strong></td> 
										</tr>`;	
										}
										html += `
										<tr class="calulator">
											<td colspan="3">Thành tiền</td>
											<td><strong>${total} ₫</strong></td>
										</tr>
										<tr class="calulator">
											<td colspan="3">Phí vận chuyển</td>
											<td><strong>${order.transport_fee} ₫</strong></td>
										</tr>
										<tr class="summary">
											<td colspan="3"><strong>Tổng giá trị đơn hàng</strong></td>
											<td><strong>${total + order.transport_fee} ₫</strong></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="footer">
							<p>Bạn cần được hỗ trợ ngay?</p> 
							<p>Hãy gửi email về địa chỉ <strong class="contact">cskh@mwmart.com</strong> , hoặc gọi số điện thoại <strong class="contact">035 210 7018</strong> (8-21h cả T7,CN). MW Team luôn sẵn sàng hỗ trợ bạn bất kì lúc nào.</p>
						</div>
					</div>
				</div>
			</body>
			</html>
		`;
		return exits.success(html);
	}
};


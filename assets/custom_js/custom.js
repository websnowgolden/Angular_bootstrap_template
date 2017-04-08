$(function() {

	setInterval(auto_animation_csv1,1000000);    
	function auto_animation_csv1() {
		$("#import-csv1").trigger("click");
	}


	$("#import-csv1").click(function(e) {

		autoload_csv1();
	});
	function autoload_csv1(){
//		alert('this is autoload_csv1');

		var data21, data22;
		$.ajax({
			url: '../assets/csv.php?id=1',
			method: 'get',
			dataType: 'json',
			success: function(data) {

				data22=data.result2;
				data21=data.result1;
				// console.log(data);
				var appendHtml = "";
//				alert('CSV1 updated successfully.');
				for (var key in data21) {
					// console.log(key, '---', data[key]);

					var server_time = new Date(data22);
					var votes_time = new Date(data21[key].Time);
					var diff = server_time - votes_time;
					var diffSeconds = diff/1000;
					var MM = Math.floor(diffSeconds/60);

					if (MM <= 30)
					{
						appendHtml += '<tr class="lastest_news">' +
										'<td>' + data21[key].Time + ' </td>' +
										'<td>' + data21[key].Symbol + ' </td>' +
										'<td>' + data21[key].Message1 + ' </td>' +
										'<td> makr124 </td>' +
										'<td>' +
											'<span class="label label-sm label-success"> Approved </span>' +
										'</td>' +
									'</tr>';
					}else {
						appendHtml += '<tr>' +
										'<td>' + data21[key].Time + ' </td>' +
										'<td>' + data21[key].Symbol + ' </td>' +
										'<td>' + data21[key].Message1 + ' </td>' +
										'<td> makr124 </td>' +
										'<td>' +
											'<span class="label label-sm label-success"> Approved </span>' +
										'</td>' +
									'</tr>';
					}
					
				}

				$("#tbody-csv1").html(appendHtml);
			},
			error: function(e) {
				alert(e);
			}
		});
	}
	
	//setInterval(auto_animation_csv2,12000);		//12 sec
// //setInterval(function(){alert('This is alert');},3000);
	function auto_animation_csv2() {
		$("#import-csv2").trigger("click");
	}

	$("#import-csv2").click(function(e) {
//		alert('updated');
		autoload_csv2();
	});
	function autoload_csv2(){
//		alert('this is autoload_csv1');
		var data21, data22;
		$.ajax({
			url: '../assets/csv.php?id=2',
			method: 'get',
			dataType: 'json',
			success: function(data) {

				data22=data.result2;
				data21=data.result1;
				// console.log(data);
				var appendHtml = "";
//				alert('CSV1 updated successfully.');
				for (var key in data21) {
					// console.log(key, '---', data[key]);

					var server_time = new Date(data22);
					var votes_time = new Date(data21[key].Time);
					var diff = server_time - votes_time;
					var diffSeconds = diff/1000;
					var MM = Math.floor(diffSeconds/60);

					if (MM <= 30)
					{
						appendHtml += '<tr class="lastest_news">' +
										'<td>' + data21[key].Time + ' </td>' +
										'<td>' + data21[key].Symbol + ' </td>' +
										'<td>' + data21[key].Message1 + ' </td>' +
										'<td> makr124 </td>' +
										'<td>' +
											'<span class="label label-sm label-success"> Approved </span>' +
										'</td>' +
									'</tr>';
					}else {
						appendHtml += '<tr>' +
										'<td>' + data21[key].Time + ' </td>' +
										'<td>' + data21[key].Symbol + ' </td>' +
										'<td>' + data21[key].Message1 + ' </td>' +
										'<td> makr124 </td>' +
										'<td>' +
											'<span class="label label-sm label-success"> Approved </span>' +
										'</td>' +
									'</tr>';
					}
					
				}

				$("#tbody-csv2").html(appendHtml);
			},
			error: function(e) {
				alert(e);
			}
		});
	}

	//setInterval(auto_animation_csv3,13000);		//13 sec
// //setInterval(function(){alert('This is alert');},3000);
	function auto_animation_csv3() {
		$("#import-csv3").trigger("click");
	}


	$("#import-csv3").click(function(e) {
//		alert('updated');
		autoload_csv3();
	});
	function autoload_csv3(){
//		var data21, data22;
		$.ajax({
			url: '../assets/csv.php?id=3',
			method: 'get',
			dataType: 'json',
			success: function(data) {

				data22=data.result2;
				data21=data.result1;
				// console.log(data);
				var appendHtml = "";
//				alert('CSV1 updated successfully.');
				for (var key in data21) {
					// console.log(key, '---', data[key]);

					var server_time = new Date(data22);
					var votes_time = new Date(data21[key].Time);
					var diff = server_time - votes_time;
					var diffSeconds = diff/1000;
					var MM = Math.floor(diffSeconds/60);

					if (MM <= 30)
					{
						appendHtml += '<tr class="lastest_news">' +
										'<td>' + data21[key].Time + ' </td>' +
										'<td>' + data21[key].Symbol + ' </td>' +
										'<td>' + data21[key].Message1 + ' </td>' +
										'<td> makr124 </td>' +
										'<td>' +
											'<span class="label label-sm label-success"> Approved </span>' +
										'</td>' +
									'</tr>';
					}else {
						appendHtml += '<tr>' +
										'<td>' + data21[key].Time + ' </td>' +
										'<td>' + data21[key].Symbol + ' </td>' +
										'<td>' + data21[key].Message1 + ' </td>' +
										'<td> makr124 </td>' +
										'<td>' +
											'<span class="label label-sm label-success"> Approved </span>' +
										'</td>' +
									'</tr>';
					}
					
				}

				$("#tbody-csv3").html(appendHtml);
			},
			error: function(e) {
				alert(e);
			}
		});
	}
	
	//setInterval(auto_animation_csv4,14000);		//14 sec
// //setInterval(function(){alert('This is alert');},3000);
	function auto_animation_csv4() {
		$("#import-csv4").trigger("click");
	}


	$("#import-csv4").click(function(e) {
//		alert('updated');
		autoload_csv4();
	});
	function autoload_csv4(){
//		alert('this is autoload_csv1');
		var data21, data22;
		$.ajax({
			url: '../assets/csv.php?id=4',
			method: 'get',
			dataType: 'json',
			success: function(data) {

				data22=data.result2;
				data21=data.result1;
				// console.log(data);
				var appendHtml = "";
//				alert('CSV1 updated successfully.');
				for (var key in data21) {
					// console.log(key, '---', data[key]);

					var server_time = new Date(data22);
					var votes_time = new Date(data21[key].Time);
					var diff = server_time - votes_time;
					var diffSeconds = diff/1000;
					var MM = Math.floor(diffSeconds/60);

					if (MM <= 30)
					{
						appendHtml += '<tr class="lastest_news">' +
										'<td>' + data21[key].Time + ' </td>' +
										'<td>' + data21[key].Symbol + ' </td>' +
										'<td>' + data21[key].Message1 + ' </td>' +
										'<td> makr124 </td>' +
										'<td>' +
											'<span class="label label-sm label-success"> Approved </span>' +
										'</td>' +
									'</tr>';
					}else {
						appendHtml += '<tr>' +
										'<td>' + data21[key].Time + ' </td>' +
										'<td>' + data21[key].Symbol + ' </td>' +
										'<td>' + data21[key].Message1 + ' </td>' +
										'<td> makr124 </td>' +
										'<td>' +
											'<span class="label label-sm label-success"> Approved </span>' +
										'</td>' +
									'</tr>';
					}
					
				}

				$("#tbody-csv4").html(appendHtml);
			},
			error: function(e) {
				alert(e);
			}
		});
	}

	//setInterval(auto_animation_csv5,16000);		//16 sec
// //setInterval(function(){alert('This is alert');},3000);
	function auto_animation_csv5() {
		$("#import-csv5").trigger("click");
	}


	$("#import-csv5").click(function(e) {
//		alert('updated');
		autoload_csv5();
	});
	function autoload_csv5(){
//		alert('this is autoload_csv1');
		var data21, data22;
		$.ajax({
			url: '../assets/csv.php?id=5',
			method: 'get',
			dataType: 'json',
			success: function(data) {

				data22=data.result2;
				data21=data.result1;
				// console.log(data);
				var appendHtml = "";
//				alert('CSV1 updated successfully.');
				for (var key in data21) {
					// console.log(key, '---', data[key]);

					var server_time = new Date(data22);
					var votes_time = new Date(data21[key].Time);
					var diff = server_time - votes_time;
					var diffSeconds = diff/1000;
					var MM = Math.floor(diffSeconds/60);

					if (MM <= 30)
					{
						appendHtml += '<tr class="lastest_news">' +
										'<td>' + data21[key].Time + ' </td>' +
										'<td>' + data21[key].Symbol + ' </td>' +
										'<td>' + data21[key].Message1 + ' </td>' +
										'<td> makr124 </td>' +
										'<td>' +
											'<span class="label label-sm label-success"> Approved </span>' +
										'</td>' +
									'</tr>';
					}else {
						appendHtml += '<tr>' +
										'<td>' + data21[key].Time + ' </td>' +
										'<td>' + data21[key].Symbol + ' </td>' +
										'<td>' + data21[key].Message1 + ' </td>' +
										'<td> makr124 </td>' +
										'<td>' +
											'<span class="label label-sm label-success"> Approved </span>' +
										'</td>' +
									'</tr>';
					}
					
				}

				$("#tbody-csv5").html(appendHtml);
			},
			error: function(e) {
				alert(e);
			}
		});
	}

	//setInterval(auto_animation_csv6,17000);		//17 sec

// //setInterval(function(){alert('This is alert');},3000);
	function auto_animation_csv6() {
		$("#import-csv6").trigger("click");
	}


	$("#import-csv6").click(function(e) {
//		alert('updated');
		autoload_csv6();
	});
	function autoload_csv6(){
//		alert('this is autoload_csv1');
		var data21, data22;
		$.ajax({
			url: '../assets/csv.php?id=6',
			method: 'get',
			dataType: 'json',
			success: function(data) {

				data22=data.result2;
				data21=data.result1;
				// console.log(data);
				var appendHtml = "";
//				alert('CSV1 updated successfully.');
				for (var key in data21) {
					// console.log(key, '---', data[key]);

					var server_time = new Date(data22);
					var votes_time = new Date(data21[key].Time);
					var diff = server_time - votes_time;
					var diffSeconds = diff/1000;
					var MM = Math.floor(diffSeconds/60);

					if (MM <= 30)
					{
						appendHtml += '<tr class="lastest_news">' +
										'<td>' + data21[key].Time + ' </td>' +
										'<td>' + data21[key].Symbol + ' </td>' +
										'<td>' + data21[key].Message1 + ' </td>' +
										'<td> makr124 </td>' +
										'<td>' +
											'<span class="label label-sm label-success"> Approved </span>' +
										'</td>' +
									'</tr>';
					}else {
						appendHtml += '<tr>' +
										'<td>' + data21[key].Time + ' </td>' +
										'<td>' + data21[key].Symbol + ' </td>' +
										'<td>' + data21[key].Message1 + ' </td>' +
										'<td> makr124 </td>' +
										'<td>' +
											'<span class="label label-sm label-success"> Approved </span>' +
										'</td>' +
									'</tr>';
					}
					
				}

				$("#tbody-csv6").html(appendHtml);
			},
			error: function(e) {
				alert(e);
			}
		});
	}
	for (var i = 1; i <= 6; i++) {
		var element = '#tbody-csv' + i;
		$(element).html("");
//		alert (element);
		$.ajax({
			url: '../assets/csv.php?id=' + i,
			method: 'get',
			dataType: 'json',
			async: false,
			success: function(data) {
//				console.log(data);
// 				var appendHtml = "";

// 				for (var key in data) {
// //					console.log(key, '---', data[key]);
// 					appendHtml += '<tr>' +
// 									'<td>' + data[key].Time + ' </td>' +
// 									'<td>' + data[key].Symbol + ' </td>' +
// 									'<td>' + data[key].Message1 + ' </td>' +
// 									'<td> makr124 </td>' +
// 									'<td>' +
// 										'<span class="label label-sm label-success"> Approved </span>' +
// 									'</td>' +
// 								'</tr>';
					
// 				}
// 				$(element).html(appendHtml);
				data22=data.result2;
				data21=data.result1;
				// console.log(data);
				var appendHtml = "";
//				alert('CSV1 updated successfully.');
				for (var key in data21) {
					// console.log(key, '---', data[key]);

					var server_time = new Date(data22);
					var votes_time = new Date(data21[key].Time);
					var diff = server_time - votes_time;
					var diffSeconds = diff/1000;
					var MM = Math.floor(diffSeconds/60);

					if (MM <= 30)
					{
						appendHtml += '<tr class="lastest_news">' +
										'<td>' + data21[key].Time + ' </td>' +
										'<td>' + data21[key].Symbol + ' </td>' +
										'<td>' + data21[key].Message1 + ' </td>' +
										'<td> makr124 </td>' +
										'<td>' +
											'<span class="label label-sm label-success"> Approved </span>' +
										'</td>' +
									'</tr>';
					}else {
						appendHtml += '<tr>' +
										'<td>' + data21[key].Time + ' </td>' +
										'<td>' + data21[key].Symbol + ' </td>' +
										'<td>' + data21[key].Message1 + ' </td>' +
										'<td> makr124 </td>' +
										'<td>' +
											'<span class="label label-sm label-success"> Approved </span>' +
										'</td>' +
									'</tr>';
					}
					
				}

				// $("#tbody-csv6").html(appendHtml);
				$(element).html(appendHtml);
			},
			error: function(e)
	        {
	         //    var msg = '';
		        // if (jqXHR.status === 0) {
		        //     msg = 'Not connect.\n Verify Network.';
		        // } else if (jqXHR.status == 404) {
		        //     msg = 'Requested page not found. [404]';
		        // } else if (jqXHR.status == 500) {
		        //     msg = 'Internal Server Error [500].';
		        // } else if (exception === 'parsererror') {
		        //     msg = 'Requested JSON parse failed.';
		        // } else if (exception === 'timeout') {
		        //     msg = 'Time out error.';
		        // } else if (exception === 'abort') {
		        //     msg = 'Ajax request aborted.';
		        // } else {
		        //     msg = 'Uncaught Error.\n' + jqXHR.responseText;
		        // }
		        // s(msg);
	         //    // STOP LOADING SPINNER
	         	alert ("CSV file upload failed!!!");
	        }
		})	
	}

});
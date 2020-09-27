$(document).ready(function(){
	$("#kirim").click(function(){
		$("#nama").text(
			$("#fnama").val()
		);
		$("#alamat").text(
			$("#falamat").val()
		);
		$("#nama makanan").text(
			$("nama_makanan").val()
		);
		$("#jumlah makanan").text(
			$("jml_makanan").val()
		$("#kabupaten").text(
			$("#fkabupaten").val()
		);
	});
	$("#reset").click(function(){
		$("#fnama").val("");
		$("#nama").text("");
		$("#falamat").val("");
		$("#alamat").text("");
		$("#nama makanan").text("");
		$("#jumlah makanan").text("");
		$("#kabupaten").text("");
	});
});
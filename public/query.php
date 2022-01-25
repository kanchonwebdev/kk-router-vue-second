<?php
	$out = array('error' => false);

	$crud = 'read';

	if(isset($_GET['crud'])){
		$crud = $_GET['crud'];
	}

	if($crud == 'create'){
		$query = 'kanchon';

		if($query == 'kanchon'){
			$out['message'] = "Member Added Successfully";
		}
		else{
			$out['error'] = true;
			$out['message'] = "Could not add Member";
		}
		
	}

	header("Content-type: application/json");
	echo json_encode($out);
	die();
?>
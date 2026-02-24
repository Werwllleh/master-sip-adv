<?
function debuger($data, $title)
{
	$log = "\n------------------------\n";
	$log .= date("Y.m.d G:i:s") . "\n";
	$log .= (strlen($title) > 0 ? $title : 'DEBUG') . "\n";
	$log .= print_r($data, 1);
	$log .= "\n------------------------\n";
	file_put_contents(getcwd() . '/logs/' . $title . '_' . date('d-m-y') . '.log', $log, FILE_APPEND);
	return true;
}

debuger($_POST, 'chat');

$post_data = array(
	'type_request' => $_POST['type_request'],
	'token' => $_POST['token'],
	'name' => $_POST['name'],
	'phone' => preg_replace("/[^0-9]/", '', $_POST['phone']),
	'question1' => $_POST['question1'],
	'question2' => $_POST['question2'],
	'question3' => $_POST['question3'],
	'question4' => $_POST['question4'],
	'question5' => $_POST['question5'],
	'callTime' => $_POST['callTime'],
	'v' => $_POST['v'],
	'mw_u_type' => $_POST['mw_u_type'],
	'mw_u_source' => $_POST['mw_u_source'],
	'mw_u_medium' => $_POST['mw_u_medium'],
	'mw_u_campaign' => $_POST['mw_u_campaign'],
	'mw_u_content' => $_POST['mw_u_content'],
	'mw_u_term' => $_POST['mw_u_term'],
	'mw_u_entrance_point' => $_POST['mw_u_entrance_point'],
	'mw_u_visits' => $_POST['mw_u_visits'],
	'mw_u_pages' => $_POST['mw_u_pages'],
	'mw_u_data' => $_POST['mw_u_data'],
	'mw_u_current_url' => $_POST['mw_u_current_url'],
	'mw_u_referer' => $_POST['mw_u_referer'],
	'mw_u_ip' => $_POST['mw_u_ip'],
	'mw_u_user_agent' => $_POST['mw_u_user_agent'],
	'mw_u_gid' => $_POST['mw_u_gid'],
	'mw_u_yid' => $_POST['mw_u_yid'],
	'mw_u_roistat' => $_POST['mw_u_roistat'],
	'mw_u_ct' => $_POST['mw_u_ct'],
	'city_ip' => $_POST['city_ip'],
	'region_ip' => $_POST['region_ip'],
	'country_ip' => $_POST['country_ip'],
);

function background_curl_request($url, $post_parameters, $method = 'POST')
{
	if (is_array($post_parameters)) {
		$params = "";
		foreach ($post_parameters as $key => $value) {
			$params .= $key . "=" . urlencode($value) . '&';
		}
		$params = rtrim($params, "&");
	} else {
		$params = $post_parameters;
	}
	$command = "/usr/bin/curl -X '" . $method . "' -d '" . $params . "' --url '" . $url . "' >> /dev/shm/request.log 2> /dev/null &";
	exec($command);
}

background_curl_request('https://ajax.mworx.ru/', $post_data);

// echo json_encode(["success" => true]);

$arrQuestions = [
	'question1' => 'Что планируете строить?',
	'question2' => 'Площадь помещения',
	'question3' => 'Дом',
];

$arrAnswers = '';
foreach ($arrQuestions as $key => $question) {
	if (isset($post_data[$key])) {
		$arrAnswers .= $question . " - " . $post_data[$key] . "\n";
	}
}

// Проверка наличия обязательного поля PHONE
if (!isset($_POST['phone']) || empty($_POST['phone'])) {
	// Вывод сообщения об ошибке и прекращение выполнения скрипта
	exit;
}


$arFields = array(
	"TITLE" => "Заявка с чата sales.angarskieterema.ru",
	"ASSIGNED_BY_ID" => 350,
	"SOURCE_ID" => 79135207580, 
	"NAME" => isset($_POST['name']) && !empty($_POST['name']) ? $_POST['name'] : "не указано",
	"PHONE" => array(array("VALUE" => preg_replace("/[^0-9]/", '', $_POST['phone']), "VALUE_TYPE" => "WORK")),
	"COMMENTS" => $arrAnswers, //дубликат
	"UF_CRM_CHTOSTROITBUD" => $_POST['question1'], //Объект строительства
	"UF_CRM_M2" => $_POST['question2'], //Площадь
	"UF_CRM_FORMNAME" => $_POST['question3'],
	"UTM_CAMPAIGN" => $_POST['mw_u_campaign'],
	"UTM_CONTENT" => $_POST['mw_u_content'],
	"UTM_MEDIUM" => $_POST['mw_u_medium'],
	"UTM_SOURCE" => $_POST['mw_u_source'],
	"UTM_TERM" => $_POST['mw_u_term'],
);

//выполняем запрос
$result = CurlBitrix24('crm.lead.add.json', array(
	'fields' => $arFields,
	'params' => array("REGISTER_SONET_EVENT" => "Y")
));

$leadId = (is_array($result) && !empty($result["result"])) ? $result["result"] : false;
// echo json_encode(["success" => true]);
// echo json_encode($leadId);

$result = [
	"success" => true,
	"leadId" => $leadId
];

echo json_encode($result);

die();

function formattedPhone(phone) {
	
	const result = phone.charAt(0) + phone.charAt(1) + ' (' + phone.charAt(2) + phone.charAt(3) + phone.charAt(4) + ') ' + phone.charAt(5) + phone.charAt(6) + phone.charAt(7) + '-' + phone.charAt(8) + phone.charAt(9) + '-' + phone.charAt(10) + phone.charAt(11);
    return result;
}


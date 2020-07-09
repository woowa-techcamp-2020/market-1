
const checkAccount = function (e) {
    e.preventDefault();
    const url = "";
    // console.log(e)
    // console.log("check2")
    const idRegex = /^[a-z0-9_-]{4,20}$/;
    const pwRegex = /^[a-zA-Z0-9]{8,20}$/;

    const inputId = document.querySelector(".accountId");
    const inputPwd = document.querySelector(".accountPwd");
    const errorMsg = document.querySelector(".errorMsg");

    if(inputId.value === ""){
        errorMsg.innerHTML = "아이디를 입력해 주세요."
    }else if(inputPwd.value === ""){
        errorMsg.innerHTML = "비밀번호를 입력해 주세요."
    }else{
        if(!idRegex.test(inputId.value)){
            errorMsg.innerHTML = "아이디는 4~20자의 영 소문자, 숫자, 특수기호(_), (-)만 사용 가능합니다."
        }else if(!pwRegex.test(inputPwd.value)){
            errorMsg.innerHTML = "비밀번호는 영문+숫자 조합만 허용하며, 8~20자만 사용 가능합니다."
        }else{
            //무결성 체크 완료
            const accountInfo = {id: inputId.value, pwd: inputPwd.value};
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(accountInfo),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => function(res){
                //메인 페이지로 이동 or 로그인정보 불일치
                if(res.data.success){
                    const mainPageURL = "/main";
                    window.location.href = mainPageURL;
                }else{
                    alert('로그인 정보가 일치하지 않습니다.');
                }
            }).catch(error => console.log('Error :로그인 에러'));
        }
    }
}
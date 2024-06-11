document.addEventListener("DOMContentLoaded", 
    function(e){
        // 설정 아이콘 찾기
        let configID = document.querySelector("#id i");
        // 아이디 찾기
        let idText = document.querySelector("#id span");

        // 설정 아이콘이 클릭되었을 때 prompt 창을 띄운다.
        configID.addEventListener("click", 
            function(e){
                // console.log(prompt("새로운 아이디를 입력하세요"));
                idText.textContent = prompt("새로운 아이디를 입력하세요"); // 프롬프트로 아이디 변경. 요즘 트렌드는 프롬프트가 아니라 modal 창.
                // textContent : 태그의 글자를 바꿀 때 사용
            }
        )
        
        // id로 필요한 태그 찾기
        let profileEditButton = document.querySelector("#profile_info button"); // 프로필 편집 버튼
        let userInfo = document.querySelector("#userInfo"); // 이름
        let summary = document.querySelector("#summary");  // 직업
        let profileDetail = document.querySelector("#profileDetail"); // github 주소

        // 변경 여부 확인 flag. 기본값 : false. // let isChanged=false; 라고 하기도 함.
        let changing = false; // 변경 안 됐다는 뜻 (변경 되면 true)
        
        // 프로필 변경 버튼 이벤트 처리
        profileEditButton.addEventListener("click", // 프로필 편집 버튼이 클릭되었을 때
            function (e) {
                // 변경된 경우(changing이 true인 경우. 즉, 괄호 안의 조건이 참(true)일 때)
                if (changing) {
                    // input태그의 값(value)을 변수에 저장
                    let _userInfo = userInfo.querySelector("input").value;
                    let _summary = summary.querySelector("input").value;
                    let _profileDetail = profileDetail.querySelector("input").value;

                    // text 변경
                    userInfo.innerHTML = _userInfo; //innerHTML : 시작태그와 끝태그 사이에 html을 넣어서 덮어쓸 때 사용
                    summary.innerHTML = _summary;
                    
                    // _profileDetail의 내용이 http로 시작하면 링크 걸어주기
                    if (_profileDetail.startsWith("http")){ // startsWith : 해당 글자로 시작하는지
                        _profileDetail = "<a href='"+_profileDetail+"'>"+_profileDetail+"</a>" ;// http로 시작하면 링크를 붙여주겠다 //+연산자는 문자열을 연결하는 연산자
                    } 

                    profileDetail.innerHTML = _profileDetail;
                    
                    // 프로필 편집 버튼 글자 수정
                    e.target.textContent = "프로필 편집"; // e==profileEditButton
                    changing = false; // 원래대로 false로 변경

                } else { // 변경되지 않은 경우(changing이 false인 경우)
                    // 태그 사이에 있는 text를 변수에 저장
                    let _userInfo = userInfo.textContent;
                    let _summary = summary.textContent;
                    let _profileDetail = profileDetail.textContent;

                    // input 태그로 바꿔줌
                    // userInfo.innerHTML = "<input value=" + _userInfo + "></input>"; 교재에는 '' 없음
                    userInfo.innerHTML = "<input value='" + _userInfo + "'></input>"; // value에 원래 따옴표 쓰니까 따옴표를 넣어줘야 하는데, ""를 쓰면 안에 ""를 쓸 수 없음. 그래서 ''를 써준 것임. 
                    summary.innerHTML = "<input value='" + _summary + "'></input>";
                    profileDetail.innerHTML = "<input value='" + _profileDetail + "'></input>";
                    
                    // 프로필 편집 버튼 글자 수정
                    e.target.textContent = "프로필 편집 완료";

                    changing = true; // 변경이 됐다고 표시.
                } // 프로필 편집 버튼 이벤트 function 조건문 else 끝
            } // 프로필 편집 버튼 이벤트 function 끝
        ) // 프로필 편집 버튼 이벤트 끝

        
        // 프로필 사진에 마우스가 올라갔을 때/벗어났을 때 이벤트 처리
        let profile_pic = document.querySelector("#profile_pic .circle_pic")
        profile_pic.addEventListener("mouseover",function(e){ //mouseover
            e.target.style.filter="grayscale(100%)"
        })
        profile_pic.addEventListener("mouseleave",function(e){ //mouseleave
            e.target.style.filter="grayscale(0%)"
        })

        // 프로필 사진을 클릭해서 prompt로 사진 변경 이벤트 처리
        profile_pic.addEventListener("click",function(e){
            profile_pic.setAttribute("src",prompt("이미지 url을 입력해 주세요!"))
        })



    } // document 이벤트 function 끝
) // document 이벤트 끝


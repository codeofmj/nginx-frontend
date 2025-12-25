const addBoardBtn = document.getElementById("addBoardBtn");

//데이터 저장 함수 구현
const boardInsert = async (e) => {
  e.preventDefault();

  let boardFrm = document.boardFrm;

  //FormData: form태그 내 있는 입력요소(input, select, textarea)들을 묶어서 보내기 위한 객체
  //구조: key=value&key=value...
  //파일 업로드 포함 전송(multipart/form-data)
  let bData = new FormData(boardFrm);

  try {
    let res = await axios.post(
      "http://localhost:8081/api/board/register",
      bData
    );
    // let res = await axios.post("/api/board/register", bData);

    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

addBoardBtn.addEventListener("click", boardInsert);

const addBoardBtn = document.getElementById("addBoardBtn");

//데이터 저장 함수 구현
const boardInsert = async () => {
  let boardFrm = document.boardFrm;
  let boardFormData = new FormData(boardFrm);

  let entries = boardFormData.entries();
  for (const pair of entries) {
    console.log(pair);
  }

  let res = await axios.post(
    "http://localhost:8081/api/board/register",
    boardFormData
  );
};

addBoardBtn.addEventListener("click", boardInsert);

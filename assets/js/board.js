const tbody = document.querySelector("#board > tbody");

//데이터 요청 함수 구현
const getList = async () => {
  // let res = await axios.get("http://localhost:8081/api/board/list");
  let res = await axios.get("/api/board/list");
  let boardList = res.data;
  let resultHTML = "";

  console.log("게시글 데이터>> ", res.data);

  for (let i = 0; i < boardList.length; i++) {
    let board = boardList[i];

    console.log(board);

    resultHTML += `
        <tr>
            <td>${board.b_idx}</td>
            <td>${board.b_title}</td>
            <td>${board.b_writer}</td>
            <td>${board.b_datetime}</td>
            <td>${board.b_count}</td>
        </tr>
    `;

    tbody.innerHTML = resultHTML;
  }
};

getList();

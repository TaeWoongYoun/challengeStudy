const chartData = {
    "나이트리그": { "월": [50, 70, 0], "화": [20, 100, 0], "수": [60, 80, 0], "목": [90, 120, 0], "금": [100, 200, 0], "토": [150, 170, 0], "일": [30, 20, 0] },
    "주말리그": { "월": [200, 170, 180], "화": [230, 200, 280], "수": [270, 270, 320], "목": [290, 170, 380], "금": [320, 370, 380], "토": [230, 670, 280], "일": [220, 270, 280] },
    "새벽리그": { "월": [20, 40, 0], "화": [21, 41, 0], "수": [30, 33, 0], "목": [32, 38, 0], "금": [25, 29, 0], "토": [30, 37, 0], "일": [29, 39, 0] }
};

function updateChart(day){
    const league = $(".select").text().trim();
    const data= chartData[league][day];
    $(".bar").each((i, element) => $(element).attr("height", data[i]));
};

function changeLeague(league){
    const index = ["나이트리그", "주말리그", "새벽리그"].indexOf(league);
    $(".league div").removeClass("select").eq(index).addClass("select");
    const labels = {
        "나이트리그": ["오후 6시", "오후 10시", ""],
        "주말리그": ["오전 10시", "오후 2시", "오후 4시"],
        "새벽리그": ["오전 4시", "오전 7시", ""]
    }
    setText(labels[league][0],labels[league][1],labels[league][2]);
    updateChart("월");
}

function setText(label1,label2,label3){
    $("#xLabel1").text(label1);
    $("#xLabel2").text(label2);
    $("#xLabel3").text(label3);
}

function updateChart2(day) {
    const league = $(".select2").text().trim(); // 클래스 select2로 수정
    const data = chartData[league][day];
    $(".bar2").each((i, element) => $(element).attr("width", data[i])); // width 속성으로 수정
}

function changeLeague2(league) {
    const index = ["나이트리그", "주말리그", "새벽리그"].indexOf(league);
    $(".league2 div").removeClass("select2").eq(index).addClass("select2"); // 클래스 select2로 수정
    const labels = {
        "나이트리그": ["오후 6시", "오후 10시", ""],
        "주말리그": ["오전 10시", "오후 2시", "오후 4시"],
        "새벽리그": ["오전 4시", "오전 7시", ""]
    };
    setText2(labels[league][0], labels[league][1], labels[league][2]); // setText2 함수로 수정
    updateChart2("월");
}

function setText2(label1, label2, label3) {
    $("#xLabel12").text(label1); // xLabel12로 수정
    $("#xLabel22").text(label2); // xLabel22로 수정
    $("#xLabel32").text(label3); // xLabel32로 수정
}

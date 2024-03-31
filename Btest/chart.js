const chartData = {
    "나이트리그": { "월": [50, 70, 0], "화": [20, 100, 0], "수": [60, 80, 0], "목": [90, 120, 0], "금": [100, 200, 0], "토": [150, 170, 0], "일": [30, 20, 0] },
    "주말리그": { "월": [200, 170, 180], "화": [230, 200, 280], "수": [270, 270, 320], "목": [290, 170, 380], "금": [320, 370, 380], "토": [230, 670, 280], "일": [220, 270, 280] },
    "새벽리그": { "월": [20, 40, 0], "화": [21, 41, 0], "수": [30, 33, 0], "목": [32, 38, 0], "금": [25, 29, 0], "토": [30, 37, 0], "일": [29, 39, 0] }
};

function updateChart(day){
    const league = $(".select").text().trim();
    const data = chartData[league][day];
    $(".bar").each((i, element) => $(element).attr("height", data[i]));
}

function changeLeague(league){
    const index = ["나이트리그", "주말리그", "새벽리그"].indexOf(league);
    $(".league div").removeClass("select").eq(index).addClass("select");
    const labels = {
        "나이트리그": ["오후 6시", "오후 10시", ""],
        "주말리그": ["오전 10시", "오후 2시", "오후 4시"],
        "새벽리그"
    }
}
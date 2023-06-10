const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;
app.use(bodyParser.json());

// 정적 파일 제공
app.use(express.static('public'));

// JSON 파일 경로
const jsonFilePath = 'markers.json';

// 마커 정보를 JSON 파일에서 읽어오는 함수
function readMarkersFromFile() {
    try {
        const markersData = fs.readFileSync(jsonFilePath, 'utf8');
        return JSON.parse(markersData);
    } catch (error) {
        console.error('JSON 파일을 읽는 중 오류가 발생했습니다:', error);
        return [];
    }
}

// 마커 정보를 JSON 파일에 저장하는 함수
function saveMarkersToFile(markers) {
    try {
        fs.writeFileSync(jsonFilePath, JSON.stringify(markers), 'utf8');
        console.log('JSON 파일이 업데이트되었습니다.');
    } catch (error) {
        console.error('JSON 파일을 저장하는 중 오류가 발생했습니다:', error);
    }
}

// POST 요청 처리
app.post('/updateMarker', (req, res) => {
    const { latitude, longitude, content } = req.body;

    // 기존 마커 정보 가져오기
    const markers = readMarkersFromFile();

    // 새로운 마커 추가
    markers.push({ latitude, longitude, content });

    // 마커 정보를 JSON 파일에 저장
    saveMarkersToFile(markers);

    res.sendStatus(200);
});

// 서버 실행
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

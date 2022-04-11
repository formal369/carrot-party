import React, { useState } from 'react';
import Header from '../components/Header';

import '../assets/css/bootstrap.min.css';
import '../assets/css/reset.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 	// 스타일 먹이기
import ko from 'date-fns/locale/ko';

import Counter from '../components/Counter';
registerLocale("ko", ko);

const MakePartyPage = () => {
    
        const [startDate, setStartDate] = useState(new Date());
      
        let handleColor = (time) => {
          return time.getHours() > 12 ? "text-success" : "text-error";
        };


    return (
        <div>
            <Header title="파티만들기" />
        
            <Form>
                {/* 파티 제목 입력 */}
                <Form.Group className="mb-3">
                    <Form.Label>파티 제목</Form.Label>
                    <Form.Control type="text" placeholder="제목을 입력해주세요" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>날짜 및 시간</Form.Label>
                    {/* 날짜 입력 */}
                    <DatePicker
                        showTimeSelect
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="yyyy년 MM월 dd일 eeee hh시 mm분" // 날짜 형식
                        timeClassName={handleColor}
                        locale="ko"
                    />
                </Form.Group>

                {/* 성별 입력 */}
                <Form.Group key="inline-radio" className="mb-3">
                    <Form.Label>성별 및 인원</Form.Label>
                    <Form.Check
                        inline
                        label="남자만"
                        name="group1"
                        type="radio"
                        id="inline-radio-1"
                    />
                    <Form.Check
                        inline
                        label="여자만"
                        name="group1"
                        type="radio"
                        id="inline-radio-2"
                    />
                    <Form.Check
                        inline
                        label="남녀모두"
                        name="group1"
                        type="radio"
                        id="inline-radio-3"
                    />
                </Form.Group>
                
                {/* 참가비 */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>참가비</Form.Label>
                    <Form.Control type="text" placeholder="참가비를 입력해주세요" />
                </Form.Group>
                
                {/* 소개이미지 업로드 */}
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>파티 소개이미지</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                {/* 파티 설명 */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>파티 설명</Form.Label>
                    <Form.Control as="textarea" rows={5} style={{ height: '100px' }} placeholder="파티에 대한 자세한 설명을 해주세요" />
                </Form.Group>

                <Form.Group key="inline-button">
                    <Counter />
                </Form.Group>

                {/* 파티 생성 버튼 */}
                <Button variant="primary" type="submit">
                    파티 생성
                </Button>
                
            </Form>
        </div>
    );
};

export default MakePartyPage;
# Weather App (Dev Ed)

git test

## API

www.darksky.net 사용

navigator.geolocation.getCurrentPosition(success[, error[, [options]]);

fetch() =>
    fetch('http://hanur.me/users')
    .then(res => res.json())
    .then(data => data.filter(item => item.isRequired));
    = Promise기반 API, 3개의 Interface를 도입하고 있는데 Headers,Request,Response 이다.

json() = JavaScript Object Notation (JSON)은 Javascript 객체 문법으로
         구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷이다.

Proxy = 대신 이라는 의미로 프로토콜에 있어서 대리 응답 등에서 사용하는 개념.
        보안상의 문제로 직접 통신을 주고 받을 수 없는 사이에서 프록시를 이용해 중계를 하는 개념
        => 프록시 서버 (cors-anywhere.herokuapp.com 사용)

## Properties

Node.textContent 프로퍼티는 노드와 그 자손의 텍스트 내용을 표시한다.

## Method

String.prototype.replace() = 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환.
                             그 패턴은 문자열이나 정규식(RegExp)이 될 수 있으며,
                             교체 문자열은 문자열이나 모든 매치에 대해서 호출된 함수일 수 있습니다.

HTMLMediaElement = 오디오와 비디오에 통용되는 미디어 관련 확장성을 제공하기 위해 HTMLElement에
                   메소드와 프로퍼티를 추가한 인터페이스입니다.
                   HTMLVideoElement 와 HTMLAudioElement 는 이 인터페이스를 상속합니다.

HTMLMediaElement.play() =  미디어 재생을 시작하려고 시도합니다. 재생이 성공적으로 시작되면 해결되는 약속을 반환합니다.
                           권한 문제와 같은 어떤 이유로 든 재생을 시작하지 않으면 약속이 거부됩니다.
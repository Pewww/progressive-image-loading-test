# progressive-image-lazy-loading

> :warning: Image Lazy Loading의 테스트를 위한 레포이기 때문에 컴포넌트의 구조 등은 크게 신경 쓰지 않음

Lazy Loading은 Request의 개수를 줄이는 방법들 중 하나로서, 초기 렌더링 최적화를 위해 적용한다.

이미지와 같이 사이즈가 큰 데이터를 로딩할 때, 사용자의 브라우저 화면에 나타나지 않은 이미지까지 로딩을 하면 페이지의 로딩 역시 느려질 수 있다.

이런 상황에서 유용하게 쓰일 수 있으며, 사용자 브라우저에 보이는 이미지만 로딩을 하고 다른 이미지들은 사용자가 스크롤을 하면서 이미지를 만나거나 가까워질 때 로딩을 한다.

전체 이미지를 한 번에 로딩하지 않고, 사용자에게 필요한 부분만 보여줄 수 있기 때문에 로딩에 대한 비용을 줄일 수 있다는 장점이 있지만, 전체 Request의 개수를 줄이는 것은 아니라는 점을 유의해야 한다.

실제 Lazy Loading이 적용된 페이지와 그렇지 않은 페이지를 비교 했을 때, 그 차이는 확연히 드러난다.

**Network (Without Lazy-Loading)**

![Lazy Loading이 적용되지 않은 Network 탭](https://user-images.githubusercontent.com/23455736/84564451-c469e880-ad9c-11ea-90ec-f963363ecdbb.png)

**Network (Lazy-Loading)**

![Lazy Loading이 적용된 Network 탭](https://user-images.githubusercontent.com/23455736/84564473-fbd89500-ad9c-11ea-92d2-211357d38376.png)

요청하는 Request의 개수가 줄었다는 것은 분명 장점이라고 말 할 수 있지만, 그렇다고 페이지의 렌더링이 완료되는 시간에 있어서 항상 이점을 가진다는 얘기는 아니다.<br>
특히나, 빠른 인터넷 환경에서는 리소스나 콘텐츠를 다운로드 받는 시간 역시 빠르기 때문에, Request의 개수 보다는 Layout, Painting 등의 작업들이 오히려 렌더링 시간에 더욱 큰 영향을 끼칠 수 있다는 얘기이다.

**Performance (Without Lazy-Loading)**

![Lazy Loading이 적용되지 않은 Performance 탭](https://user-images.githubusercontent.com/23455736/84564500-23c7f880-ad9d-11ea-9770-89dd697f745e.png)


**Performance (Lazy-Loading)**

![Lazy Loading이 적용된 Performance 탭](https://user-images.githubusercontent.com/23455736/84564516-42c68a80-ad9d-11ea-993e-c19259c590ff.png)


인터넷 속도가 비교적 느린 Fast 3G 환경에서는 렌더링 속도의 차이가 확연히 드러났는데, 크게 수십배 까지 차이가 발생하였다.

**Performace (Fast 3G, Without Lazy-Loading)**

![Fast 3G 환경에서의 Lazy Loading이 적용되지 않은 Performance 탭](https://user-images.githubusercontent.com/23455736/84564538-6984c100-ad9d-11ea-911e-87a8515ceb66.png)


**Performance (Fast 3G, Lazy-Loading)**

![Fast 3G 환경에서의 Lazy Loading이 적용된 Performance 탭](https://user-images.githubusercontent.com/23455736/84564570-920cbb00-ad9d-11ea-8d2c-decc6f3b1b08.png)


정리를 해보자면, Lazy Loading은 초기 렌더링 최적화를 위한 작업이라고 할 수 있다.<br>
예시를 들었던 이미지 외의 API, Database, Component 등 여러 곳에도 Lazy Loading을 적용시킬 수 있다.

다만, 개발자 입장에서 최적화라고 진행한 작업이, 항상 좋은 사용자 경험을 가져다주진 않을 수 있다는 점을 염두에 둬야 한다.

언제든 예외는 생길 수 있기 때문에, 상황에 알맞는 작업을 진행하자! :D

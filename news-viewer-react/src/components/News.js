import React from 'react';

const News = () => {
  return (
    <section>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            전체보기
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            비즈니스
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            엔터테인먼트
          </a>
        </li>
      </ul>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  src="https://placehold.co/160X80"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4>title</h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="#" className="btn btn-sm btn-outline-secondary">
                        View
                      </a>
                    </div>
                    <small className="text-muted">NAVER</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  src="https://placehold.co/160X80"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4>title</h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="#" className="btn btn-sm btn-outline-secondary">
                        View
                      </a>
                    </div>
                    <small className="text-muted">NAVER</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

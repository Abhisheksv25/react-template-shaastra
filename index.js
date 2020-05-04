import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {Row ,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <div id="full">
      <img src="https://images.unsplash.com/photo-1452740670610-9981dacea7ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" id="backimg"/>
      <section id="main">
						<header id="head">
							<span class="avatar">
              <div id="left"> ________________</div>
              <img src="https://lh3.googleusercontent.com/K9vplPyaAxWu4__TfojZ2_nl6gSDkNF6sIekS-izggyTNuVUQSiG79mevBgAn48Bq1Uhd61o1J9k09JqGR4bZuAqipyytt_zIQceSVWJhAL5Z38jWiUwySf2-aOZGSPma0zDLVuxRNfdHwyL47VhbFqW27gpohBE9KB3Ihu1TEG1qaTYuxqDXFKF0_cGBx2nBJ1LbAsoHc_CIyhi18Evm6al0R1Am7VA8qjf1dDjl-IEf4RUFvErrzU3usz0yyPPVw5lxHMw0f8GqZKeDCV8K4VqqNCdiQJ3VuT_23Zx7jT-yGHvZDkzeeGR4dzwYX5YGuvmxIa0h7IEI0h-KFCR7DeUNm4cUcMXi6MpJd8WU5cU3BCyAtsi4hX7bGS9No7O5gWHP7NSb0lNJ7CcqaHLw9d0NiCS4YIBeYuWb1VFiKtSsw21u2RcSUwlfNtiQ2edM4Km4p9GwJ_9eLp2viiupaCPAZQZTynKXuc6q8iM5S25XQkxrdAXU4iVIZ-LEJPQ_rL_Jreu9vsoYW8jFba_Ks3SCQYy0Ia_532MmJ26RWXY6ImCG_TPnNnA59OLVDgt0O4fno79tKmid-mCC6lULnIsAheP7WC6IRnAr3rqi5HPXmNDOB6i-5njyzlWLLXybEsHoQ95ywtph6I2VvCvKz9yje_LJRigDNj_qVK3b5RDS87W3C8S9F4=s657-no" alt="" id="pic"/>
              <div id="right"> ________________</div></span>
							<h1 id="name">Abhishek sv</h1>
							<p id="occupation">Senior Bio-tech Engineer</p>
						</header>
            <footer>
							<ul class="icons">
								<li><a href="#" ><img src="https://cdn3.iconfinder.com/data/icons/sympletts-part-2/128/circle-social-twitter-512.png" id="twitter"/></a></li>
								<li><a href="#" ><img src="https://cdn3.iconfinder.com/data/icons/sympletts-part-2/128/circle-social-instagram-512.png " id="instagram"/></a></li>
								<li><a href="#"> </a><img src="https://cdn3.iconfinder.com/data/icons/sympletts-part-2/128/circle-social-facebook-512.png" id="facebook"/></li>
							</ul>
						</footer>
					</section>
          <footer id="footer">
						<ul class="copyright">
							<li>&copy; Abhishek sv | Design: <a href="http://html5up.net" id="link">HTML5 UP</a></li>
						</ul>
					</footer>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

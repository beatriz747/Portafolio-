import * as utils from '../utils';
import './ProfileBio.css';

function ProfileBio({ profile }) {
  return (
    <div className="container-fluid fh5co-profile-bio">
      <div className="background-bio section-bg-gradient"></div>
      <ContactCard profile={profile} />
    </div>
  );
}

function ContactCard({ profile }) {
  return (
    <div className="container contact-pop py-4">
      <div className="row">
        <div className="col-md-6 pr-0">
          <div className="card">
              <img className="card-img w-100" src={utils.assetUrl(profile.avatar)} alt="" />
              <div className="card-img-overlay"></div>
          </div>
        </div>
        <div className="col-md-6 pl-0" id="about">
          <div className="content">
              <h3>{ profile.name }</h3>
              <h4>{ profile.jobTitle }</h4>
              <hr />
              <p className="pre">{ profile.bio }</p>
              <p>
                <i className="fas fa-envelope mr-2"></i>
                <a href={"mailto:"+profile.contact.email}>{ profile.contact.email }</a>
              </p>
              <p>
                <i className="fab fa-whatsapp-square mr-2"></i>
                <a href={profile.contact.telephone.link}>{ profile.contact.telephone.text }</a>
              </p>
              <p>
                <i className="fas fa-map-marker mr-2"></i>
                { profile.contact.location }
              </p>
              <div className="social-links text-center">
                { profile.socialNetworks.map((network, index) => (
                  <a key={"sn-link-"+index} href={network.url} className="btn btn-light mr-2 mb-2" target="_blank" rel="noopener noreferrer">
                    <i className={network.icon}></i>
                  </a>
                ))}
              </div>
              <hr/>
              <div className="text-center">
                <a href="/" className="btn btn-contact">
                <i class="fas fa-download"></i> Descargar CV
                </a>
              </div>
              
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProfileBio;
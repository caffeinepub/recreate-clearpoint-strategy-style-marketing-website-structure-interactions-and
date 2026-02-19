import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type ContactForm = {
    name : Text;
    email : Text;
    organization : Text;
    message : Text;
  };

  type PersistentContact = {
    id : Nat;
    submittedAt : Time.Time;
    contactForm : ContactForm;
  };

  var lastContactId = 0;
  let contacts = Map.empty<Nat, PersistentContact>();

  // Public contact form submission - accessible to everyone including guests
  public shared ({ caller }) func saveContact(form : ContactForm) : async () {
    // No authorization check - anyone can submit a contact form
    lastContactId += 1;

    let persistentContact : PersistentContact = {
      id = lastContactId;
      submittedAt = Time.now();
      contactForm = form;
    };

    contacts.add(lastContactId, persistentContact);
  };

  // Admin-only: retrieve a specific contact submission
  public query ({ caller }) func getContact(contactId : Nat) : async PersistentContact {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access contact data");
    };

    switch (contacts.get(contactId)) {
      case (null) { Runtime.trap("Contact does not exist") };
      case (?contact) { contact };
    };
  };

  // Admin-only: retrieve all contact submissions
  public query ({ caller }) func getAllContacts() : async [PersistentContact] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access contact data");
    };
    contacts.values().toArray();
  };
};

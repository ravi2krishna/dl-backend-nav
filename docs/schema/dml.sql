insert into type_role(id, code, name)
    values ('ROLE_NA', 'ROLE', 'Not Active');

insert into type_role(id, code, name)
    values ('ROLE_ADMIN', 'ROLE', 'Admin');

insert into type_role(id, code, name)
    values ('ROLE_SUPER_ADMIN', 'ROLE', 'Super Admin');

    INSERT INTO type_role (id, code, name, active) VALUES ('ROLE_STUDENT','ROLE','Student',1);
    INSERT INTO type_role (id, code, name, active) VALUES ('ROLE_TRAINER','ROLE','Trainer',1);

insert into address (id)
    values ('DL_MAIN_BRANCH');

INSERT INTO branch (id, name, title,  address_id )
    VALUES ('DL_MAIN_BRANCH','Digital Lync','Lanco Hills','DL_MAIN_BRANCH');



insert into address (id)
    values ('SUPER_USER');

INSERT INTO user (id, name, email, mobile, password, role_id,  address_id, branch_id )
    VALUES ('SUPER_USER','Digital Lync','support@digital-lync.com','123456789', '1234', 'ROLE_SUPER_ADMIN', 'SUPER_USER', 'DL_MAIN_BRANCH');



INSERT INTO status_batch (id, code, name) VALUES ('completed','BATCH_STATUS','Completed');
INSERT INTO status_batch (id, code, name) VALUES ('inprogress','BATCH_STATUS','Inprogress');
INSERT INTO status_batch (id, code, name) VALUES ('notstarted','BATCH_STATUS','Not Started');


INSERT INTO type_batch (id, code, name, active) VALUES ('advance','BATCH_TYPE','Advance',1);
INSERT INTO type_batch (id, code, name, active) VALUES ('basic','BATCH_TYPE','Basic',1);
INSERT INTO type_batch (id, code, name, active) VALUES ('intermediate','BATCH_TYPE','Intermediate',1);


INSERT INTO type_link (id, name, code) VALUES ('doc','LINK_TYPE','DOC');
INSERT INTO type_link (id, name, code) VALUES ('pdf','LINK_TYPE','PDF');
INSERT INTO type_link (id, name, code) VALUES ('video','LINK_TYPE','VIDEO');


INSERT INTO link (id, name, url, icon, priority) VALUES ('J6BR4ZJ5','Menu','/menu','menu',1);
INSERT INTO link (id, name, url, icon, priority) VALUES ('J6BR6EUB','Accounts','/account','supervisor_account',1);
INSERT INTO link (id, name, url, icon, priority) VALUES ('J6BR7P4L','Course','/courses','copyright',1);
INSERT INTO link (id, name, url, icon, priority) VALUES ('J6BR8GEG','Batches','/batches','format_bold',1);
INSERT INTO link (id, name, url, icon, priority) VALUES ('J6BR3WTF','My Profile','/myprofile','account_box',1);
INSERT INTO link (id, name, url, icon, priority) VALUES ('J6BR9FWH','Settings','/settings','settings',1);
-- INSERT INTO link (id, name, url, icon, priority) VALUES ('J6BR9JRF','Course','/student/courses','copyright',1);
-- INSERT INTO link (id, name, url, icon, priority) VALUES ('J6BRA4GO','Batches','/student/batches','format_bold',1);
-- INSERT INTO link (id, name, url, icon, priority) VALUES ('J6BRAUL7','Batches','/trainer/batches','format_bold',1);
-- INSERT INTO link (id, name, url, icon, priority) VALUES ('J6BRBNBK','Course','/trainer/courses','copyright',1);




INSERT INTO menu (id, role_id, link_id, active) VALUES ('J6BUMO8D','ROLE_ADMIN','J6BR6EUB',1);
INSERT INTO menu (id, role_id, link_id, active) VALUES ('J6BUMO98','ROLE_ADMIN','J6BR7P4L',1);
INSERT INTO menu (id, role_id, link_id, active) VALUES ('J6BUMO9P','ROLE_ADMIN','J6BR8GEG',1);
INSERT INTO menu (id, role_id, link_id, active) VALUES ('J6BUMV0Z','ROLE_STUDENT','J6BR9JRF',1);
INSERT INTO menu (id, role_id, link_id, active) VALUES ('J6BUMV1F','ROLE_STUDENT','J6BRA4GO',1);

INSERT INTO menu (id, role_id, link_id, active) VALUES ('J6BUN34N','ROLE_SUPER_ADMIN','J6BR4ZJ5',1);
INSERT INTO menu (id, role_id, link_id, active) VALUES ('J6BUN34Z','ROLE_SUPER_ADMIN','J6BR6EUB',1);
INSERT INTO menu (id, role_id, link_id, active) VALUES ('J6BUN35B','ROLE_SUPER_ADMIN','J6BR7P4L',1);
INSERT INTO menu (id, role_id, link_id, active) VALUES ('J6BUN35M','ROLE_SUPER_ADMIN','J6BR8GEG',1);
INSERT INTO menu (id, role_id, link_id, active) VALUES ('J6BUN7JW','ROLE_TRAINER','J6BRAUL7',1);
INSERT INTO menu (id, role_id, link_id, active) VALUES ('J6BUN7K9','ROLE_TRAINER','J6BRBNBK',1);
INSERT INTO menu (id, role_id, link_id, active) VALUES ('J6CONN89','ROLE_ADMIN','J6BR4ZJ5',1);



create table type_role(
	id varchar(30) primary key,
	code varchar(30) not null,
	name varchar(30) not null,
	active boolean default true not null,
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);
ALTER TABLE type_role ADD CONSTRAINT type_role_uq_code_name UNIQUE (code, name);


create table link(
	id varchar(30) primary key,
	name varchar(30) not null,
	url varchar(100) not null,
    icon varchar(30) not null,
	priority int not null default 999
);

create table menu(
	id varchar(30) primary key,
	role_id varchar(30) not null,
    link_id varchar(30) not null,
	active boolean default true not null,
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);

ALTER TABLE menu ADD CONSTRAINT menu_fk_link FOREIGN KEY (link_id) REFERENCES link(id);
ALTER TABLE menu ADD CONSTRAINT menu_fk_role FOREIGN KEY (role_id) REFERENCES type_role(id);

create table address (
	id varchar(30) primary key,
	lane varchar(30),
	street varchar(30),
	city varchar(30),
	state varchar(30),
	country varchar(30) default 'INDIA',
	zipcode int(10)
);



create table branch (
	id varchar(30) primary key,
	name varchar(50) not null,
	title varchar(30) not null,
	email varchar(100),
	mobile varchar(15),
	phone varchar(15),
	xCord varchar(30),
	yCord varchar(30),
	address_id varchar(30) not null,
	active boolean default true not null,
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);
ALTER TABLE branch ADD CONSTRAINT branch_fk_address FOREIGN KEY (address_id) REFERENCES address(id);


create table user (
	id varchar(30) primary key,
	name varchar(50) not null default 'Anonymous',
	email varchar(100),
	mobile varchar(15),
	password varchar(30) not null default '0',
	role_id varchar(30) not null,
	address_id varchar(30) not null,
	branch_id varchar(30) not null,
	active boolean default true not null,
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);


ALTER TABLE user ADD CONSTRAINT user_fk_role FOREIGN KEY (role_id) REFERENCES type_role(id);
ALTER TABLE user ADD CONSTRAINT user_fk_branch FOREIGN KEY (branch_id) REFERENCES branch(id);
ALTER TABLE user ADD CONSTRAINT user_fk_address FOREIGN KEY (address_id) REFERENCES address(id);


create table img (
	id varchar(30) primary key,
	src LONGTEXT
);

create table course (
	id varchar(30) primary key,
	name varchar(50) not null,
	des varchar(100) not null,
	img_id varchar(30),
	active boolean default true not null,
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);

ALTER TABLE course ADD CONSTRAINT course_fk_img FOREIGN KEY (img_id) REFERENCES img(id);

create table topic (
	id varchar(30) primary key,
	name varchar(50) not null,
	des varchar(100) not null,
	priority int not null default 999,
	course_id varchar(30) not null,
	parent_topic_id varchar(30),
	active boolean default true not null,
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);

ALTER TABLE topic ADD CONSTRAINT topic_fk_course FOREIGN KEY (course_id) REFERENCES course(id);

create table type_batch(
	id varchar(30) primary key,
	code varchar(30) not null,
	name varchar(30) not null,
	active boolean default true not null,
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);
ALTER TABLE type_batch ADD CONSTRAINT type_batch_uq_code_name UNIQUE (code, name);

create table batch(
	id varchar(30) primary key,
	name varchar(50) not null,
	type_batch_id varchar(50) not null,
	course_id varchar(50) not null,
	from_date date ,
	to_date date,
	from_time varchar(50),
	to_time varchar(50),
	des varchar(50),
	branch_id varchar(50) not null,
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);

ALTER TABLE batch ADD CONSTRAINT batch_fk_course FOREIGN KEY (course_id) REFERENCES course(id);
ALTER TABLE batch ADD CONSTRAINT batch_fk_type FOREIGN KEY (type_batch_id) REFERENCES type_batch(id);
ALTER TABLE batch ADD CONSTRAINT batch_fk_branch FOREIGN KEY (branch_id) REFERENCES branch(id);

create table status_batch(
	id varchar(30) primary key,
	code varchar(30) not null,
	name varchar(30) not null,
	active boolean default true not null,
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);
ALTER TABLE status_batch ADD CONSTRAINT status_batch_uq_code_name UNIQUE (code, name);


create table batch_topic(
	id varchar(30) primary key,
	batch_id varchar(50) not null,
	status_id varchar(50) not null,
	topic_id varchar(50) not null
);

ALTER TABLE batch_topic ADD CONSTRAINT batch_topic_fk_status FOREIGN KEY (status_id) REFERENCES status_batch(id);
ALTER TABLE batch_topic ADD CONSTRAINT batch_topic_fk_batch FOREIGN KEY (batch_id) REFERENCES batch(id);
ALTER TABLE batch_topic ADD CONSTRAINT batch_topic_fk_topic FOREIGN KEY (topic_id) REFERENCES topic(id);

create table batch_timing(
	id varchar(30) primary key,
	batch_id varchar(50) not null,
	from_time datetime not null,
	to_time datetime,
	mins int not null default 0,
	user_id varchar(50) not null,
	status_id varchar(50) not null,
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);

ALTER TABLE batch_timing ADD CONSTRAINT batch_timing_fk_batch FOREIGN KEY (batch_id) REFERENCES batch(id);
ALTER TABLE batch_timing ADD CONSTRAINT batch_timing_fk_user FOREIGN KEY (user_id) REFERENCES user(id);
ALTER TABLE batch_timing ADD CONSTRAINT batch_timing_fk_status_batch FOREIGN KEY (status_batch_id) REFERENCES status_batch(id);

create table batch_user(
	id varchar(30) primary key,
	user_id varchar(50) not null,
	batch_id varchar(50) not null
);

ALTER TABLE batch_user ADD CONSTRAINT batch_user_fk_user FOREIGN KEY (user_id) REFERENCES user(id);
ALTER TABLE batch_user ADD CONSTRAINT batch_user_fk_batch FOREIGN KEY (batch_id) REFERENCES batch(id);

create table attendance(
	id varchar(30) primary key,
	from_time datetime not null,
	to_time datetime,
	mins int not null default 0,
	user_id varchar(50) not null,
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);

ALTER TABLE attendance ADD CONSTRAINT attendance_fk_user FOREIGN KEY (user_id) REFERENCES user(id);

CREATE TABLE type_link (
  	id varchar(30) NOT NULL PRIMARY KEY,
  	name varchar(30) NOT NULL,
  	code varchar(30) NOT NULL,
	active boolean default true not null,
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);
ALTER TABLE type_link ADD CONSTRAINT type_link_uq_code_name UNIQUE (code, name);

CREATE TABLE topic_link (
  	id varchar(45) NOT NULL PRIMARY KEY,
  	name varchar(45) NOT NULL,
  	url varchar(45) NOT NULL,
  	type_link_id varchar(45) NOT NULL,
  	topic_id varchar(45) NOT NULL,
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);

ALTER TABLE topic_link ADD CONSTRAINT topic_link_fk_type_link_id FOREIGN KEY (type_link_id) REFERENCES type_link(id);
ALTER TABLE topic_link ADD CONSTRAINT topic_link_fk_topic_id FOREIGN KEY (topic_id) REFERENCES topic(id);

CREATE TABLE batch_topic_link (
  	id varchar(45) NOT NULL PRIMARY KEY,
  	name varchar(45) NOT NULL,
  	url varchar(45) NOT NULL,
  	type_link_id varchar(45) NOT NULL,
  	batch_topic_id varchar(45) NOT NULL,
		updated_by varchar(30) default 'system',
		updated_date timestamp default now()
);

ALTER TABLE batch_topic_link ADD CONSTRAINT type_link_id FOREIGN KEY (`type_link_id`) REFERENCES `dledu-dev`.`type_link` (`id`)
ALTER TABLE batch_topic_link ADD CONSTRAINT batch_topic_id FOREIGN KEY (`batch_topic_id`) REFERENCES `dledu-dev`.`batch_topic` (`id`)


create table master_data(
	id varchar(30) primary key,
	code varchar(30) not null,
	name varchar(30) not null,
	active boolean default true not null,
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);
ALTER TABLE master_data ADD CONSTRAINT master_data_uq_code_name UNIQUE (code, name);

create table task (
	id varchar(30) primary key,
	assign_date date,
	txn_date date,
	pass_marks int,
	marks int,
	user_profile_id varchar(30) not null,
	topic_id varchar(30) not null,
	batch_id varchar(30) not null,
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);
ALTER TABLE task ADD CONSTRAINT task_fk_user_profile_id FOREIGN KEY (user_profile_id) REFERENCES user(id);
ALTER TABLE task ADD CONSTRAINT task_fk_topic_id FOREIGN KEY (topic_id) REFERENCES topic(id);
ALTER TABLE task ADD CONSTRAINT task_fk_batch_id FOREIGN KEY (batch_id) REFERENCES batch(id);

create table task_mcq (
	id varchar(30) primary key,
	is_right_ans boolean,
	your_ans varchar(30),
	mcq_id varchar(30),
	task_id varchar(30),
	updated_by varchar(30) default 'system',
	updated_date timestamp default now()
);
ALTER TABLE task_mcq ADD CONSTRAINT task_mcq_fk_mcq_id FOREIGN KEY (mcq_id) REFERENCES mcq(id);
ALTER TABLE task_mcq ADD CONSTRAINT task_mcq_fk_task_id FOREIGN KEY (task_id) REFERENCES task(id);

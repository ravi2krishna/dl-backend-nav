-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: dledu
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `id` varchar(30) NOT NULL,
  `lane` varchar(30) DEFAULT NULL,
  `street` varchar(30) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `state` varchar(30) DEFAULT NULL,
  `country` varchar(30) DEFAULT 'INDIA',
  `zipcode` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES ('DL_MAIN_BRANCH',NULL,'Khajaguda','Hyderabad','Telangan','India',NULL),('DL_KUKATPALLY',NULL,'Manjeera Mall','Hyderabad','Telangan','India',NULL),('SUPER_USER',NULL,NULL,NULL,NULL,'INDIA',NULL);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attendance` (
  `id` varchar(30) NOT NULL,
  `from_time` datetime NOT NULL,
  `to_time` datetime DEFAULT NULL,
  `mins` int(11) NOT NULL DEFAULT '0',
  `user_id` varchar(50) NOT NULL,
  `updated_by` varchar(30) DEFAULT 'system',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `attendance_fk_user` (`user_id`),
  CONSTRAINT `attendance_fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `id` varchar(30) NOT NULL,
  `question` varchar(100) NOT NULL,
  `des` varchar(50) DEFAULT NULL,
  `is_multi_ans` tinyint(1) NOT NULL DEFAULT '1',
  `option_a` varchar(50) NOT NULL,
  `check_a` tinyint(1),
  `option_b` varchar(50) NOT NULL,
  `check_b` tinyint(1),
  `option_c` varchar(50) NOT NULL,
  `check_c` tinyint(1),
  `option_d` varchar(50) NOT NULL,
  `check_d` tinyint(1),
  'active' tinyint(1) NOT NULL DEFAULT '1',
  `updated_by` varchar(30) DEFAULT 'system',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `topic_id` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `questions_fk_topic` (`topic_id`),
  CONSTRAINT `questions_fk_topic` FOREIGN KEY (`topic_id`) REFERENCES `topic` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `batch`
--

DROP TABLE IF EXISTS `batch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `batch` (
  `id` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `type_batch_id` varchar(50) NOT NULL,
  `course_id` varchar(50) NOT NULL,
  `from_date` date DEFAULT NULL,
  `to_date` date DEFAULT NULL,
  `from_time` varchar(50) DEFAULT NULL,
  `to_time` varchar(50) DEFAULT NULL,
  `des` varchar(50) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `branch_id` varchar(50) NOT NULL,
  `updated_by` varchar(30) DEFAULT 'system',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `batch_fk_course` (`course_id`),
  KEY `batch_fk_branch` (`branch_id`),
  KEY `batch_fk_type` (`type_batch_id`),
  CONSTRAINT `batch_fk_branch` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`id`),
  CONSTRAINT `batch_fk_course` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`),
  CONSTRAINT `batch_fk_type` FOREIGN KEY (`type_batch_id`) REFERENCES `type_batch` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batch`
--

LOCK TABLES `batch` WRITE;
/*!40000 ALTER TABLE `batch` DISABLE KEYS */;

/*!40000 ALTER TABLE `batch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `batch_timing`
--

DROP TABLE IF EXISTS `batch_timing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `batch_timing` (
  `id` varchar(30) NOT NULL,
  `batch_id` varchar(50) NOT NULL,
  `from_time` datetime NOT NULL,
  `to_time` datetime DEFAULT NULL,
  `mins` int(11) NOT NULL DEFAULT '0',
  `user_id` varchar(50) NOT NULL,
  `updated_by` varchar(30) DEFAULT 'system',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `batch_timing_fk_batch` (`batch_id`),
  KEY `batch_timing_fk_user` (`user_id`),
  CONSTRAINT `batch_timing_fk_batch` FOREIGN KEY (`batch_id`) REFERENCES `batch` (`id`),
  CONSTRAINT `batch_timing_fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batch_timing`
--

LOCK TABLES `batch_timing` WRITE;
/*!40000 ALTER TABLE `batch_timing` DISABLE KEYS */;

/*!40000 ALTER TABLE `batch_timing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `batch_topic`
--

DROP TABLE IF EXISTS `batch_topic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `batch_topic` (
  `id` varchar(30) NOT NULL,
  `batch_id` varchar(50) NOT NULL,
  `status_id` varchar(50) NOT NULL,
  `topic_id` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `batch_topic_fk_status` (`status_id`),
  KEY `batch_topic_fk_batch` (`batch_id`),
  KEY `batch_topic_fk_topic` (`topic_id`),
  CONSTRAINT `batch_topic_fk_batch` FOREIGN KEY (`batch_id`) REFERENCES `batch` (`id`),
  CONSTRAINT `batch_topic_fk_status` FOREIGN KEY (`status_id`) REFERENCES `status_batch` (`id`),
  CONSTRAINT `batch_topic_fk_topic` FOREIGN KEY (`topic_id`) REFERENCES `topic` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batch_topic`
--

LOCK TABLES `batch_topic` WRITE;
/*!40000 ALTER TABLE `batch_topic` DISABLE KEYS */;
/*!40000 ALTER TABLE `batch_topic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `batch_topic_link`
--

DROP TABLE IF EXISTS `batch_topic_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `batch_topic_link` (
  `id` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `url` varchar(45) NOT NULL,
  `type_link_id` varchar(45) NOT NULL,
  `batch_topic_id` varchar(45) NOT NULL,
  `updated_by` varchar(30) DEFAULT 'system',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `type_link_id_idx` (`type_link_id`),
  KEY `batch_topic_id_idx` (`batch_topic_id`),
  CONSTRAINT `batch_topic_id` FOREIGN KEY (`batch_topic_id`) REFERENCES `batch_topic` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `type_link_id` FOREIGN KEY (`type_link_id`) REFERENCES `type_link` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batch_topic_link`
--

LOCK TABLES `batch_topic_link` WRITE;
/*!40000 ALTER TABLE `batch_topic_link` DISABLE KEYS */;
/*!40000 ALTER TABLE `batch_topic_link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `batch_user`
--

DROP TABLE IF EXISTS `batch_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `batch_user` (
  `id` varchar(30) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `batch_id` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `batch_user_fk_user` (`user_id`),
  KEY `batch_user_fk_batch` (`batch_id`),
  CONSTRAINT `batch_user_fk_batch` FOREIGN KEY (`batch_id`) REFERENCES `batch` (`id`),
  CONSTRAINT `batch_user_fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batch_user`
--

LOCK TABLES `batch_user` WRITE;
/*!40000 ALTER TABLE `batch_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `batch_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `branch`
--

DROP TABLE IF EXISTS `branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `branch` (
  `id` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `title` varchar(30) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `xCord` varchar(30) DEFAULT NULL,
  `yCord` varchar(30) DEFAULT NULL,
  `address_id` varchar(30) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `updated_by` varchar(30) DEFAULT 'system',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `branch_fk_address` (`address_id`),
  CONSTRAINT `branch_fk_address` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branch`
--

LOCK TABLES `branch` WRITE;
/*!40000 ALTER TABLE `branch` DISABLE KEYS */;
INSERT INTO `branch` VALUES ('DL_MAIN_BRANCH','Digital Lync','Lanco Hills',NULL,NULL,NULL,NULL,NULL,'DL_MAIN_BRANCH',1,'system','2017-08-17 11:50:40'),('DL_KUKATPALLY','Digital Lync Kukatpally','Kukatpally',NULL,NULL,NULL,NULL,NULL,'DL_KUKATPALLY',1,'system','2017-08-17 11:50:40');
/*!40000 ALTER TABLE `branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `id` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `des` varchar(100) NOT NULL,
  `img_id` varchar(30) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `updated_by` varchar(30) DEFAULT 'system',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `course_fk_img` (`img_id`),
  CONSTRAINT `course_fk_img` FOREIGN KEY (`img_id`) REFERENCES `img` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `img`
--

DROP TABLE IF EXISTS `img`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `img` (
  `id` varchar(30) NOT NULL,
  `src` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `img`
--

LOCK TABLES `img` WRITE;
/*!40000 ALTER TABLE `img` DISABLE KEYS */;
/*!40000 ALTER TABLE `img` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `link`
--

DROP TABLE IF EXISTS `link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `link` (
  `id` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `url` varchar(100) NOT NULL,
  `icon` varchar(30) NOT NULL,
  `priority` int(11) NOT NULL DEFAULT '999',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `link`
--

LOCK TABLES `link` WRITE;
/*!40000 ALTER TABLE `link` DISABLE KEYS */;
INSERT INTO `link` VALUES ('J6BR4ZJ5','Menu','/menu','menu',1),('J6BR6EUB','Accounts','/account','supervisor_account',1),('J6BR7P4L','Course','/courses','copyright',1),('J6BR8GEG','Batches','/batches','format_bold',1),('J6MC1BUX','Course','/student/courses','copyright',1),('J6MC2B1V','Batches','/student/batches','format_bold',1),('J6MC2PE2','Batches','/trainer/batches','format_bold',1),('J6MC3EEB','Course','/trainer/courses','copyright',1),('J6BR9FWH','Settings','/settings','settings',1),('J6BR3WTF','MY Profile','/myprofile','account_box',1);
/*!40000 ALTER TABLE `link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `id` varchar(30) NOT NULL,
  `role_id` varchar(30) NOT NULL,
  `link_id` varchar(30) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `updated_by` varchar(30) DEFAULT 'system',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `menu_fk_link` (`link_id`),
  KEY `menu_fk_role` (`role_id`),
  CONSTRAINT `menu_fk_link` FOREIGN KEY (`link_id`) REFERENCES `link` (`id`),
  CONSTRAINT `menu_fk_role` FOREIGN KEY (`role_id`) REFERENCES `type_role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES ('J6IZSQ8K','ROLE_ADMIN','J6BR4ZJ5',1,'system','2017-08-19 07:38:49'),('J6IZSQ8X','ROLE_ADMIN','J6BR6EUB',1,'system','2017-08-19 07:38:49'),('J6IZSQ96','ROLE_ADMIN','J6BR7P4L',1,'system','2017-08-19 07:38:49'),('J6IZSQ9E','ROLE_ADMIN','J6BR8GEG',1,'system','2017-08-19 07:38:49'),('J6IZSXO1','ROLE_SUPER_ADMIN','J6BR4ZJ5',1,'system','2017-08-19 07:38:59'),('J6IZSXOA','ROLE_SUPER_ADMIN','J6BR6EUB',1,'system','2017-08-19 07:38:59'),('J6IZSXOH','ROLE_SUPER_ADMIN','J6BR7P4L',1,'system','2017-08-19 07:38:59'),('J6IZSXOP','ROLE_SUPER_ADMIN','J6BR8GEG',1,'system','2017-08-19 07:38:59'),('J6J05QT2','ROLE_SUPER_ADMIN','J6BR3WTF',1,'system','2017-08-19 07:48:57'),('J6J05QTB','ROLE_SUPER_ADMIN','J6BR9FWH',1,'system','2017-08-19 07:48:57'),('J6J061RL','ROLE_STUDENT','J6BR3WTF',1,'system','2017-08-19 07:49:11'),('J6J067RS','ROLE_TRAINER','J6BR3WTF',1,'system','2017-08-19 07:49:19'),('J6J06EEQ','ROLE_NA','J6BR3WTF',1,'system','2017-08-19 07:49:27'),('J6JK4BZW','ROLE_ADMIN','J6BR3WTF',1,'system','2017-08-19 17:07:43'),('J6MC7NGP','ROLE_STUDENT','J6MC1BUX',1,'system','2017-08-21 15:49:40'),('J6MC7NGZ','ROLE_STUDENT','J6MC2B1V',1,'system','2017-08-21 15:49:40'),('J6MC7WAC','ROLE_TRAINER','J6MC2PE2',1,'system','2017-08-21 15:49:51'),('J6MC7WAL','ROLE_TRAINER','J6MC3EEB',1,'system','2017-08-21 15:49:51'),('J6OM4MXQ','ROLE_TRAINER','J6BR4ZJ5',1,'system','2017-08-23 06:02:47');
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status_batch`
--

DROP TABLE IF EXISTS `status_batch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status_batch` (
  `id` varchar(30) NOT NULL,
  `code` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `updated_by` varchar(30) DEFAULT 'system',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `status_batch_uq_code_name` (`code`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_batch`
--

LOCK TABLES `status_batch` WRITE;
/*!40000 ALTER TABLE `status_batch` DISABLE KEYS */;
INSERT INTO `status_batch` VALUES ('completed','BATCH_STATUS','Completed',1,'system','2017-08-17 11:50:40'),('inprogress','BATCH_STATUS','Inprogress',1,'system','2017-08-17 11:50:41'),('notstarted','BATCH_STATUS','Not Started',1,'system','2017-08-17 11:50:41');
/*!40000 ALTER TABLE `status_batch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timing`
--

DROP TABLE IF EXISTS `timing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `timing` (
  `id` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `code` varchar(30) DEFAULT 'Timing',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timing`
--

LOCK TABLES `timing` WRITE;
/*!40000 ALTER TABLE `timing` DISABLE KEYS */;
INSERT INTO `timing` VALUES ('00:00','00:00','Timing'),('00:30','00:30','Timing'),('01:00','01:00','Timing'),('01:30','01:30','Timing'),('02:00','02:00','Timing'),('02:30','02:30','Timing'),('03:00','03:00','Timing'),('03:30','03:30','Timing'),('04:00','04:00','Timing'),('04:30','04:30','Timing'),('05:00','05:00','Timing'),('05:30','05:30','Timing'),('06:00','06:00','Timing'),('06:30','06:30','Timing'),('07:00','07:00','Timing'),('07:30','07:30','Timing'),('08:00','08:00','Timing'),('08:30','08:30','Timing'),('09:00','09:00','Timing'),('09:30','09:30','Timing'),('10:00','10:00','Timing'),('10:30','10:30','Timing'),('11:00','11:00','Timing'),('11:30','11:30','Timing'),('12:00','12:00','Timing'),('12:30','12:30','Timing'),('13:00','13:00','Timing'),('13:30','13:30','Timing'),('14:00','14:00','Timing'),('14:30','14:30','Timing'),('15:00','15:00','Timing'),('15:30','15:30','Timing'),('16:00','16:00','Timing'),('16:30','16:30','Timing'),('17:00','17:00','Timing'),('17:30','17:30','Timing'),('18:00','18:00','Timing'),('18:30','18:30','Timing'),('19:00','19:00','Timing'),('19:30','19:30','Timing'),('20:00','20:00','Timing'),('20:30','20:30','Timing'),('21:00','21:00','Timing'),('21:30','21:30','Timing'),('22:00','22:00','Timing'),('22:30','22:30','Timing'),('23:00','23:00','Timing'),('23:30','23:30','Timing');
/*!40000 ALTER TABLE `timing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topic`
--

DROP TABLE IF EXISTS `topic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `topic` (
  `id` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `des` varchar(100) NOT NULL,
  `priority` int(11) NOT NULL DEFAULT '999',
  `course_id` varchar(30) NOT NULL,
  `parent_topic_id` varchar(30) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `updated_by` varchar(30) DEFAULT 'system',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `topic_fk_course` (`course_id`),
  CONSTRAINT `topic_fk_course` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topic`
--

LOCK TABLES `topic` WRITE;
/*!40000 ALTER TABLE `topic` DISABLE KEYS */;
/*!40000 ALTER TABLE `topic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topic_link`
--

DROP TABLE IF EXISTS `topic_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `topic_link` (
  `id` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `url` varchar(45) NOT NULL,
  `type_link_id` varchar(45) NOT NULL,
  `topic_id` varchar(45) NOT NULL,
  `updated_by` varchar(30) DEFAULT 'system',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `topic_link_fk_type_link_id` (`type_link_id`),
  KEY `topic_link_fk_topic_id` (`topic_id`),
  CONSTRAINT `topic_link_fk_topic_id` FOREIGN KEY (`topic_id`) REFERENCES `topic` (`id`),
  CONSTRAINT `topic_link_fk_type_link_id` FOREIGN KEY (`type_link_id`) REFERENCES `type_link` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topic_link`
--

LOCK TABLES `topic_link` WRITE;
/*!40000 ALTER TABLE `topic_link` DISABLE KEYS */;
/*!40000 ALTER TABLE `topic_link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_batch`
--

DROP TABLE IF EXISTS `type_batch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type_batch` (
  `id` varchar(30) NOT NULL,
  `code` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `updated_by` varchar(30) DEFAULT 'system',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `type_batch_uq_code_name` (`code`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_batch`
--

LOCK TABLES `type_batch` WRITE;
/*!40000 ALTER TABLE `type_batch` DISABLE KEYS */;
INSERT INTO `type_batch` VALUES ('advance','BATCH_TYPE','Advance',1,'system','2017-08-17 11:50:41'),('basic','BATCH_TYPE','Basic',1,'system','2017-08-17 11:50:42'),('intermediate','BATCH_TYPE','Intermediate',1,'system','2017-08-17 11:50:42');
/*!40000 ALTER TABLE `type_batch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_link`
--

DROP TABLE IF EXISTS `type_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type_link` (
  `id` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `code` varchar(30) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `updated_by` varchar(30) DEFAULT 'system',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `type_link_uq_code_name` (`code`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_link`
--

LOCK TABLES `type_link` WRITE;
/*!40000 ALTER TABLE `type_link` DISABLE KEYS */;
INSERT INTO `type_link` VALUES ('doc','LINK_TYPE','DOC',1,'system','2017-08-17 11:50:42'),('pdf','LINK_TYPE','PDF',1,'system','2017-08-17 11:50:42'),('video','LINK_TYPE','VIDEO',1,'system','2017-08-17 11:50:43');
/*!40000 ALTER TABLE `type_link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_role`
--

DROP TABLE IF EXISTS `type_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type_role` (
  `id` varchar(30) NOT NULL,
  `code` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `updated_by` varchar(30) DEFAULT 'system',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `type_role_uq_code_name` (`code`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_role`
--

LOCK TABLES `type_role` WRITE;
/*!40000 ALTER TABLE `type_role` DISABLE KEYS */;
INSERT INTO `type_role` VALUES ('ROLE_ADMIN','ROLE','Admin',1,'system','2017-08-17 11:50:38'),('ROLE_NA','ROLE','Not Active',1,'system','2017-08-17 11:50:38'),('ROLE_STUDENT','ROLE','Student',1,'system','2017-08-17 11:50:39'),('ROLE_SUPER_ADMIN','ROLE','Super Admin',1,'system','2017-08-17 11:50:38'),('ROLE_TRAINER','ROLE','Trainer',1,'system','2017-08-17 11:50:39');
/*!40000 ALTER TABLE `type_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL DEFAULT 'Anonymous',
  `email` varchar(100) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `password` varchar(30) NOT NULL DEFAULT '0',
  `role_id` varchar(30) NOT NULL,
  `address_id` varchar(30) NOT NULL,
  `branch_id` varchar(30) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `updated_by` varchar(30) DEFAULT 'system',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_fk_role` (`role_id`),
  KEY `user_fk_branch` (`branch_id`),
  KEY `user_fk_address` (`address_id`),
  CONSTRAINT `user_fk_address` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `user_fk_branch` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`id`),
  CONSTRAINT `user_fk_role` FOREIGN KEY (`role_id`) REFERENCES `type_role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('SUPER_USER','Digital Lync','support@digital-lync.com','123456789','1234','ROLE_SUPER_ADMIN','SUPER_USER','DL_MAIN_BRANCH',1,'system','2017-08-17 11:50:40');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-19 15:03:00

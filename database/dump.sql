-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: coffeineSupplyCo
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

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
-- Table structure for table `cartItems`
--

DROP TABLE IF EXISTS `cartItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cartItems` (
  `cartItemId` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`cartItemId`)
) ENGINE=InnoDB AUTO_INCREMENT=160 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartItems`
--

LOCK TABLES `cartItems` WRITE;
/*!40000 ALTER TABLE `cartItems` DISABLE KEYS */;
INSERT INTO `cartItems` VALUES (1,18,1,2999),(2,19,1,2999),(3,20,1,2999),(4,21,1,2999),(5,22,1,2999),(6,23,1,2999),(7,24,1,2999),(8,25,1,2999),(9,26,1,2999),(10,27,1,2999),(11,28,1,2999),(12,29,1,2999),(13,30,1,2999),(14,31,1,2999),(15,32,4,999),(16,33,4,999),(17,34,4,999),(18,35,4,999),(19,36,4,999),(20,37,5,9900),(21,39,5,9900),(22,40,6,830),(23,41,1,2999),(24,42,1,2999),(25,43,1,2999),(26,44,1,2999),(27,45,1,2999),(28,46,1,2999),(29,47,1,2999),(30,48,3,2900),(31,49,3,2900),(32,50,3,2900),(33,51,3,2900),(34,52,3,2900),(35,53,3,2900),(36,54,4,999),(37,55,4,999),(38,56,4,999),(39,57,5,9900),(40,58,2,2595),(41,59,3,2900),(42,60,3,2900),(43,62,5,9900),(44,63,3,2900),(45,64,3,2900),(46,64,3,2900),(47,64,5,9900),(48,64,2,2595),(49,64,2,2595),(50,64,5,9900),(51,65,3,2900),(52,65,3,2900),(53,65,3,2900),(54,65,3,2900),(55,65,3,2900),(56,65,3,2900),(57,65,3,2900),(58,65,1,2999),(59,65,3,2900),(60,65,1,2999),(61,65,1,2999),(62,65,1,2999),(63,65,1,2999),(64,65,3,2900),(65,65,6,830),(66,65,2,2595),(67,66,1,2999),(68,67,3,2900),(69,68,5,9900),(70,69,5,9900),(71,70,5,9900),(72,71,5,9900),(73,72,5,9900),(74,73,5,9900),(75,74,5,9900),(76,75,5,9900),(77,76,5,9900),(78,76,5,9900),(79,77,6,830),(80,78,3,2900),(81,79,3,2900),(82,80,2,2595),(83,80,1,2999),(84,81,5,9900),(85,82,6,830),(86,83,6,830),(87,83,1,2999),(88,84,3,2900),(89,85,6,830),(90,86,3,2900),(91,86,3,2900),(92,86,3,2900),(93,86,3,2900),(94,87,6,830),(95,87,6,830),(96,87,6,830),(97,87,6,830),(98,88,1,19999),(99,88,1,19999),(100,88,1,19999),(101,88,1,19999),(102,88,1,19999),(103,88,1,19999),(104,88,1,19999),(105,88,1,19999),(106,88,1,19999),(107,89,1,19999),(108,90,1,19999),(109,91,2,6900),(110,91,1,19999),(111,91,5,3000),(112,91,5,3000),(113,91,5,3000),(114,91,5,3000),(115,91,5,3000),(116,91,5,3000),(117,91,5,3000),(118,91,5,3000),(119,91,5,3000),(120,91,5,3000),(121,91,5,3000),(122,91,5,3000),(123,91,5,3000),(124,92,3,3000),(125,93,1,19999),(126,94,1,19999),(127,95,5,3000),(128,96,5,3000),(129,97,4,2500),(130,98,1,19999),(131,99,2,6900),(132,100,1,19999),(133,100,1,19999),(134,100,1,19999),(135,100,1,19999),(136,100,1,19999),(137,100,1,19999),(138,100,2,6900),(139,100,2,6900),(140,100,2,6900),(141,100,2,6900),(142,100,2,6900),(143,100,2,6900),(144,101,1,19999),(145,102,1,19999),(146,103,5,3000),(147,104,3,3000),(148,105,3,3000),(149,105,3,3000),(150,105,1,19999),(151,106,1,19999),(152,107,1,19999),(153,107,1,19999),(154,107,1,19999),(155,107,1,19999),(156,107,1,19999),(157,107,1,19999),(158,107,1,19999),(159,105,1,19999);
/*!40000 ALTER TABLE `cartItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `cartId` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cartId`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,'2019-11-20 04:34:26'),(2,'2019-11-20 04:35:02'),(3,'2019-11-20 04:39:20'),(4,'2019-11-20 04:51:00'),(5,'2019-11-20 04:51:46'),(6,'2019-11-20 04:51:47'),(7,'2019-11-20 18:50:26'),(8,'2019-11-20 19:02:58'),(9,'2019-11-20 19:03:42'),(10,'2019-11-20 19:08:33'),(11,'2019-11-20 19:08:38'),(12,'2019-11-20 19:10:03'),(13,'2019-11-20 19:10:17'),(14,'2019-11-20 19:10:47'),(15,'2019-11-20 19:10:52'),(16,'2019-11-20 19:16:35'),(17,'2019-11-20 19:17:34'),(18,'2019-11-20 19:24:51'),(19,'2019-11-20 19:31:24'),(20,'2019-11-20 19:34:51'),(21,'2019-11-20 19:50:12'),(22,'2019-11-20 19:50:34'),(23,'2019-11-20 19:52:24'),(24,'2019-11-20 19:52:46'),(25,'2019-11-20 20:15:19'),(26,'2019-11-20 20:15:25'),(27,'2019-11-20 20:22:06'),(28,'2019-11-20 20:24:20'),(29,'2019-11-20 20:24:55'),(30,'2019-11-20 20:25:18'),(31,'2019-11-20 20:25:54'),(32,'2019-11-20 20:26:02'),(33,'2019-11-20 20:47:21'),(34,'2019-11-20 20:48:22'),(35,'2019-11-20 20:52:57'),(36,'2019-11-20 20:53:45'),(37,'2019-11-20 20:55:40'),(38,'2019-11-20 20:57:53'),(39,'2019-11-20 21:00:59'),(40,'2019-11-20 21:01:16'),(41,'2019-11-20 21:01:21'),(42,'2019-11-20 21:04:27'),(43,'2019-11-20 21:21:45'),(44,'2019-11-20 21:22:20'),(45,'2019-11-20 21:22:33'),(46,'2019-11-20 21:27:34'),(47,'2019-11-20 21:27:38'),(48,'2019-11-20 22:38:46'),(49,'2019-11-20 22:39:03'),(50,'2019-11-20 22:45:41'),(51,'2019-11-20 22:45:52'),(52,'2019-11-20 22:46:01'),(53,'2019-11-20 22:46:26'),(54,'2019-11-20 23:30:15'),(55,'2019-11-20 23:30:17'),(56,'2019-11-20 23:30:19'),(57,'2019-11-20 23:34:34'),(58,'2019-11-20 23:36:48'),(59,'2019-11-20 23:37:05'),(60,'2019-11-20 23:38:17'),(61,'2019-11-20 23:41:02'),(62,'2019-11-20 23:42:10'),(63,'2019-11-20 23:51:15'),(64,'2019-11-20 23:52:05'),(65,'2019-11-21 17:34:57'),(66,'2019-11-21 21:14:02'),(67,'2019-11-21 23:51:56'),(68,'2019-11-21 23:57:08'),(69,'2019-11-21 23:58:41'),(70,'2019-11-21 23:59:29'),(71,'2019-11-21 23:59:57'),(72,'2019-11-22 00:00:11'),(73,'2019-11-22 00:02:53'),(74,'2019-11-22 00:07:30'),(75,'2019-11-22 00:16:20'),(76,'2019-11-22 00:17:08'),(77,'2019-11-22 00:49:35'),(78,'2019-11-22 01:32:41'),(79,'2019-11-22 01:35:52'),(80,'2019-11-22 01:37:29'),(81,'2019-11-22 01:39:19'),(82,'2019-11-22 01:39:41'),(83,'2019-11-22 01:58:02'),(84,'2019-11-22 02:15:07'),(85,'2019-11-22 02:16:07'),(86,'2019-11-22 02:26:24'),(87,'2019-11-22 06:14:53'),(88,'2019-12-17 01:31:43'),(89,'2019-12-17 01:34:37'),(90,'2019-12-17 01:35:25'),(91,'2019-12-17 01:35:31'),(92,'2019-12-17 06:34:01'),(93,'2019-12-17 06:59:25'),(94,'2019-12-17 17:48:05'),(95,'2019-12-17 18:01:06'),(96,'2019-12-17 18:02:53'),(97,'2019-12-17 18:05:22'),(98,'2019-12-17 19:17:28'),(99,'2019-12-17 19:22:53'),(100,'2019-12-17 20:22:34'),(101,'2019-12-17 20:24:37'),(102,'2019-12-17 23:34:04'),(103,'2019-12-17 23:41:35'),(104,'2019-12-17 23:54:28'),(105,'2019-12-18 00:07:25'),(106,'2019-12-18 02:07:41'),(107,'2019-12-18 02:08:33');
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) NOT NULL,
  `name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creditCard` varchar(24) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shippingAddress` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (3,1,'test','123','123test','2019-11-21 22:51:08'),(4,66,'Kevin Akahoshi','123456789','123 Main Street','2019-11-21 23:46:46'),(5,66,'Kevin Akahoshi','123456789','123 Main Street','2019-11-21 23:48:07'),(6,66,'Kevin Akahoshi','123456789','123 Main Street','2019-11-21 23:48:14'),(7,66,'Kevin Akahoshi','123456789','123 Main Street','2019-11-21 23:49:01'),(8,67,'test','123','123abc','2019-11-21 23:52:10'),(9,68,'Kevin Akahoshi','123456789','123 Main Street','2019-11-21 23:57:25'),(10,69,'Kevin Akahoshi','123456789','123 Main Street','2019-11-21 23:58:49'),(11,70,'Kevin Akahoshi','123456789','123 Main Street','2019-11-21 23:59:34'),(12,71,'Kevin Akahoshi','123456789','123 Main Street','2019-11-21 23:59:59'),(13,72,'Kevin Akahoshi','123456789','123 Main Street','2019-11-22 00:00:13'),(14,14,'test','123','123main','2019-11-22 00:02:46'),(15,73,'Kevin Akahoshi','123456789','123 Main Street','2019-11-22 00:02:55'),(16,74,'Kevin Akahoshi','123456789','123 Main Street','2019-11-22 00:07:36'),(17,75,'Kevin Akahoshi','123456789','123 Main Street','2019-11-22 00:16:22'),(18,77,'Testing Test','123400000000000','09809809 Test','2019-11-22 01:32:07'),(19,78,'asdf','1203940349580349','lk;laksdf;alksdf','2019-11-22 01:33:01'),(20,79,'Kevin Test','123456789101112','9200 Irvine Center Drive\nSuite 200\nIrvine, CA 92618','2019-11-22 01:36:22'),(21,80,'Test','1245','asdfl;k','2019-11-22 01:37:51'),(22,81,'Test','1234','Fake Address','2019-11-22 01:39:31'),(23,82,'Poop','123456','9222 Poop Drive\nApt 69\n420','2019-11-22 01:40:08'),(24,83,'asdf','123','asdf','2019-11-22 02:12:45'),(25,84,'Test','1235','asl;kdfja;lsdfkj','2019-11-22 02:16:04'),(26,85,'Name','123456','954asdf ','2019-11-22 02:26:20'),(27,86,'Test','123409850','asld;kfja;ksdlf','2019-11-22 02:26:32'),(28,87,'Sprinna','1234','1234 Main Street\nAnaheim, CA 928907asd020rapoisdf','2019-11-22 06:15:28'),(29,88,'fdsadfasdg','asdfasdfasd','fasdfasdfasdfasdf','2019-12-17 01:33:53'),(30,89,'kevin akahoshi','123123123123','asldjfalskzdbjnlksdjnvlksdfvsdfgsdgf','2019-12-17 01:35:01'),(31,92,'asdf','1111111111111111111111','123','2019-12-17 06:58:54'),(32,93,'asdf','1234123412341234','asdf','2019-12-17 17:47:42'),(33,94,'asdf','1234','asdfasdf','2019-12-17 17:48:58'),(34,95,'asdf','1234asdfasdfasdf','asdf','2019-12-17 18:02:46'),(35,96,'asdf','1111222233334444','asdf','2019-12-17 18:05:11'),(36,97,'asdf','1111222233334444','asfdf','2019-12-17 19:17:24'),(37,98,'asdfasdf','1231231231231231','asdfasdf','2019-12-17 19:22:48'),(38,99,'asdf','1234123412341234','asdf','2019-12-17 20:22:11'),(39,100,'Kevin Akahoshi','1234567891236544','1234 Main Street','2019-12-17 20:23:59'),(40,101,'asdfadsf','1236541231321321','9200 Irvine Center Drive\nSuite 200\nIrvine, CA 92618','2019-12-17 23:33:57'),(41,102,'asdf','asdfasdfasdfasdf','asdf','2019-12-17 23:40:58'),(42,103,'asdf','1111222233334444','asdf','2019-12-17 23:41:58'),(43,104,'asdf','1111111111111111','asdf','2019-12-17 23:54:48'),(44,106,'dfgdfssdfgsdfg','1234567898345345','sdfgsdfgsdfgsdfgsdfgsdfg','2019-12-18 02:08:25'),(45,105,'asdf','1232020202002022','asdf','2019-12-18 02:14:20');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `productId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shortDescription` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `longDescription` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Stagg EKG+ Electric Kettle',19999,'/images/01_Stagg-EKG-Plus-Electric-Kettle.png','Stagg EKG+ has all of Stagg EKG’s features and then some using Bluetooth magic.','Whether you\'re a coffee aficionado or a brewing beginner, Stagg EKG+ will be your countertop partner in the pursuit of a ridiculously good cup of coffee.\r\n\r\nVariable temperature control, Bluetooth connectivity, and a stunning, minimalist design, Stagg EKG+ is the pour-over kettle perfected.\r\n\r\nFeaturing Bluetooth app connectivity, precision pour spout, variable temperature control, LCD screen, 60-minute hold mode, a brew stopwatch, and a small, minimalist base.'),(2,'Stagg Pour Over Kettle',6900,'/images/02_Stagg-Pour-Over-Kettle.png','Stagg Pour-Over Kettle\'s beautifully functional design kicks your brewing up a notch.','Enjoy an intuitive, steady pour with Stagg\'s precision pour spout. Keep track of temperature with a built in brew-range thermometer. Pour at an even, slow pace with Stagg\'s counterbalanced handle that moves the center of mass back towards your hand.'),(3,'Eddy Steaming Pitcher',3000,'/images/03_Eddy-Steaming-Pitcher.png','Meet Eddy Steaming Pitcher, the barista\'s paintbrush for pouring precise latte art.','The fluted spout, unique sharp front crease, and tapered body work in tandem to Monet your milk.\r\n\r\nEddy’s unique sharp front crease runs the length of the body. This crease moves milk forward toward the spout in one seamless motion for an intuitive pour.\r\n\r\nSpins milk more consistently for silky smooth micro-foam. Steams easier than a car window on the Titanic.\r\n\r\nBorn from extensive user testing with baristas, Eddy’s handle is intentionally open-ended to hold any way you want. Each barista’s personal pouring style can easily be accommodating by this first-of-its-kind ribbon shape.'),(4,'Atmos Vacuum Canister',2500,'/images/04_Atmos-Vacuum-Canister.png','Oxygen makes coffee stale and robs your brew of its full potential.','Atmos banishes air, moisture, and odors to stop your beans from aging out before you’ve enjoyed the whole bag.\r\n\r\nTwisting the lid back and forth sucks air out to prevent oxidation and extends coffee’s shelf life up to 50%.\r\n\r\nChoose between clear glass or upgrade to matte black stainless steel for an extra layer of protection from flavor-sucking sunlight.\r\n\r\nNow available in 3-Packs - save $7.50 on Clear Glass or $9.50 on Matte Black & Matte White when you buy together. \r\n\r\nTwist the lid back and forth to remove air from the inside. The integrated pump means no more hunting down a separate piece.\r\n\r\nWatch the dot drop to reveal a green ring. The vacuum is now locked to prevent oxidation and extend the shelf life of your coffee.\r\n\r\nWhen the contents are calling your name, press the button to unlock and bring the air pressure back to normal.'),(5,'Stagg Tasting Glasses',3000,'/images/05_Stagg-Tasting-Glasses.png','Ever see these tasting notes on bag of beans, but never understand what they\'re talking about?','These beauties\' unique shape will help you understand. The flared lip delivers coffee to your entire palate in order to taste the full spectrum of coffee flavors.\r\n\r\nSold as a pair.\r\n\r\nOutward flared lip delivers coffee across your tongue for more flavor\r\n\r\nEasy to sip single wall lip. Double wall body for insulation.\r\n\r\nOur borosilicate tasting glasses, the Arnold Schwarzenegger of glass, are handblown.'),(6,'Carter Everywhere Mug',3000,'/images/06_Carter-Everywhere-Mug.png','\r\nWe never understood why to-go tumblers made design decisions that compromised the coffee drinking experience.','The senses–taste, smell, and touch–were ignored, while durability and extreme heat retention were prioritized. Why not both?\r\n\r\nIntroducing Carter, a travel mug finally worthy of the coffee inside. Designed to amplify the senses and engineered to fit the most popular manual brewing devices, you can now enjoy coffee at its fullest, everywhere.\r\n\r\nImagine the feeling of your favorite Saturday morning mug, designed for Saturday afternoon errands.\r\n\r\nYou don’t sip out of a tiny hole at home. A mug-inspired mouth lets you access coffee’s full aroma and gage the temperature before you drink\r\n\r\nA tapered thin lip mimics a Cabernet glass to deliver coffee directly to your taste buds while also sitting comfortably on your mouth.\r\n\r\nYour coffee should taste how you intended. Unlike stainless steel, a ceramic interior keeps your brew free of odors, oils, and “old penny” tasting notes.');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-18  2:21:29

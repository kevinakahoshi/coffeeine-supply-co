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
  `quantity` int(10) unsigned NOT NULL,
  PRIMARY KEY (`cartItemId`),
  UNIQUE KEY `cartId` (`cartId`,`productId`),
  KEY `SECONDARY` (`cartId`,`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=2149 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartItems`
--

LOCK TABLES `cartItems` WRITE;
/*!40000 ALTER TABLE `cartItems` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
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
  `fullName` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creditCard` varchar(24) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expirationDate` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cvv` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shippingAddress` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
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

-- Dump completed on 2019-12-21 23:13:38

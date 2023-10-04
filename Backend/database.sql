-- MySQL Script generated by MySQL Workbench
-- Tue Oct  3 13:05:34 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydbhackathon
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydbhackathon
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydbhackathon` DEFAULT CHARACTER SET utf8 ;
USE `mydbhackathon` ;

-- -----------------------------------------------------
-- Table `mydbhackathon`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydbhackathon`.`user` (
  `iduser` INT NOT NULL,
  `pseudo` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydbhackathon`.`event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydbhackathon`.`event` (
  `idevent` INT NOT NULL,
  `name_event` VARCHAR(255) NOT NULL,
  `date` DATETIME NOT NULL,
  `description` LONGTEXT NOT NULL,
  `image` MEDIUMTEXT NOT NULL,
  `id_user` INT NOT NULL,
  PRIMARY KEY (`idevent`),
  INDEX `id_user_idx` (`id_user` ASC) VISIBLE,
  CONSTRAINT `id_user`
    FOREIGN KEY (`id_user`)
    REFERENCES `mydbhackathon`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydbhackathon`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydbhackathon`.`comment` (
  `idcomment` INT NOT NULL,
  `description` LONGTEXT NOT NULL,
  `date` DATETIME NOT NULL,
  `id_event` INT NOT NULL,
  `id_user` INT NOT NULL,
  PRIMARY KEY (`idcomment`),
  INDEX `id_user_idx` (`id_user` ASC) VISIBLE,
  INDEX `id_event_idx` (`id_event` ASC) VISIBLE,
  CONSTRAINT `id_user`
    FOREIGN KEY (`id_user`)
    REFERENCES `mydbhackathon`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_event`
    FOREIGN KEY (`id_event`)
    REFERENCES `mydbhackathon`.`event` (`idevent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydbhackathon`.`like`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydbhackathon`.`like` (
  `idlike` INT NOT NULL,
  `nb_like` INT NOT NULL,
  `idlike_iduser` INT NOT NULL,
  `idlike_idevent` INT NOT NULL,
  PRIMARY KEY (`idlike`),
  INDEX `idLike_idUser_idx` (`idlike_iduser` ASC) VISIBLE,
  INDEX `idLike_idEvent_idx` (`idlike_idevent` ASC) VISIBLE,
  CONSTRAINT `idLike_idUser`
    FOREIGN KEY (`idlike_iduser`)
    REFERENCES `mydbhackathon`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idLike_idEvent`
    FOREIGN KEY (`idlike_idevent`)
    REFERENCES `mydbhackathon`.`event` (`idevent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydbhackathon`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydbhackathon`.`category` (
  `idcategory` INT NOT NULL,
  `name_category` VARCHAR(45) NOT NULL,
  `id_event` INT NOT NULL,
  PRIMARY KEY (`idcategory`),
  INDEX `idEvent_idx` (`id_event` ASC) VISIBLE,
  CONSTRAINT `idEvent`
    FOREIGN KEY (`id_event`)
    REFERENCES `mydbhackathon`.`event` (`idevent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydbhackathon`.`place`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydbhackathon`.`place` (
  `idplace` INT NOT NULL,
  `cardinal` VARCHAR(45) NOT NULL,
  `id_event` INT NOT NULL,
  PRIMARY KEY (`idplace`),
  INDEX `id_event_idx` (`id_event` ASC) VISIBLE,
  CONSTRAINT `id_event`
    FOREIGN KEY (`id_event`)
    REFERENCES `mydbhackathon`.`event` (`idevent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
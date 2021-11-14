var app = angular.module("spaApp", ["ngRoute"]);
var me =
  "programador Java com foco na plataforma SOClass. Nos ultimos anos tenho trabalhado ligado as alfangegas de Cabo Verde desenvolvimento " +
  "modulos para  o sofware Asycuda World. Tenho mais 9 anos de experienca na area informatica aduaneira. " +
  "Actualmente trabalho como Expert IT a nivel da ECOWAS (Economic Community of West African States) " +
  "implementando solucoes informatica  a nivel de transito aduaneiro";

var whatIdo =
  "Trabalho como Customs IT and Interconnectivity Specialist no projecto Promoting Trade in West Africa II (WATIP II)" +
  " onde sou responsavel tecnico para a implementacao do Software SIGMAT (Sistema de Informacao e Gestao Mercadorias em Transito) nas suas duas versoes (Desktop e Mobile).";

var hobbies = "Gosto de jogar e ver futebol ,  fazer tracking e viajar  ";

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/home.html",
      controller: "HomeController",
    })

    .when("/whatIdo", {
      templateUrl: "pages/whatIdo.html",
      controller: "WhatIdoController",
    })

    .when("/hobbies", {
      templateUrl: "pages/hobbies.html",
      controller: "HobbiesController",
    })
    .when("/contacts", {
      templateUrl: "pages/contacts.html",
      controller: "ContactsController",
    })

    .otherwise({ redirectTo: "/" });
});
/*
app.controller("mainController", function ($scope) {

  $scope.message = "Teste controler ";
});
*/
app.controller("HomeController", function ($scope) {
  $scope.message = me;
  //"In this Video I am gonna show you how to create a personal website with all pages.After Watching this tutorial you will be able to craete website like this";
});

app.controller("WhatIdoController", function ($scope) {
  $scope.message = whatIdo;
});

app.controller("HobbiesController", function ($scope) {
  $scope.message = hobbies;
});

app.controller("ContactsController", function ($scope) {
  $scope.message = "Hello from contactsController";
});

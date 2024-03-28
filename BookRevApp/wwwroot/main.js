(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/approve-comments/approve-comments.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/approve-comments/approve-comments.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div *ngIf=\"comments?.length === 0\" class=\"row no-comments\">\n      <div class=\"container\">\n        <div class=\"jumbotron\">\n          <h1 class=\"display-4 text-center\">No comments are waiting for approval</h1>\n          <hr class=\"my-4\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div *ngIf=\"comments?.length > 0\" class=\"header mt-4\">\n      <h1 class=\"p-4\">Comments waiting for approval</h1>\n    </div>\n\n  <div *ngIf=\"comments?.length > 0\" class=\"container p-0\">\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 my-5\" style=\"width: 100%;\">\n\n      <ng-container matColumnDef=\"username\">\n        <th mat-header-cell *matHeaderCellDef style=\"width: 10%;\"> Username </th>\n        <td mat-cell *matCellDef=\"let comment\" class=\"pr-2\"> {{comment.username}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"book\">\n        <th mat-header-cell *matHeaderCellDef style=\"width: 20%;\"> Book </th>\n        <td mat-cell *matCellDef=\"let comment\" class=\"pr-2\"> {{comment.book}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"commentText\">\n        <th mat-header-cell *matHeaderCellDef style=\"width: 40%;\"> Comment </th>\n        <td mat-cell *matCellDef=\"let comment\" class=\"pr-2\"> {{comment.commentText}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"addedOn\">\n        <th mat-header-cell *matHeaderCellDef style=\"width: 10%;\"> Added On </th>\n        <td mat-cell *matCellDef=\"let comment\" class=\"pr-2\"> {{comment.addedOn | timeAgo}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"operations\">\n        <th mat-header-cell *matHeaderCellDef style=\"width: 10%;\"></th>\n        <td mat-cell *matCellDef=\"let comment\" class=\"\">\n          <a matTooltip=\"Approve Comment\" class=\"text-success ml-3\"\n            (click)=\"approveComment(comment.id)\">\n            <mat-icon>done</mat-icon>\n          </a>\n          <a matTooltip=\"Reject Comment\" class=\"text-danger ml-3\" (click)=\"rejectComment(comment.id)\">\n            <mat-icon>delete</mat-icon>\n          </a>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky:true\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-book/add-book.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-book/add-book.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" id=\"add-book-style\">\n  <div class=\"col-sm-10 offset-sm-1 jumbotron\"><h1>Book Informations</h1></div>\n  <div class=\"col-sm-10 offset-sm-1 changeBackgroundBookChild py-5\">\n    <app-book-upsert [selectedBook]=\"book\"\n                      [submitLabel]=\"label\"\n                      (onSubmit)=\"reloadData($event)\">\n    </app-book-upsert>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-comment/add-comment.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-comment/add-comment.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"addCommentForm\" (ngSubmit)=\"save()\">\n\n  <div class=\"form-group\">\n    <label for=\"addCommnet\">Leave a comment...</label>\n    <textarea class=\"form-control\" id=\"addCommnet\" rows=\"3\" formControlName=\"commentText\" autofocus required></textarea>\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-outline-primary btn-sm mr-2\" type=\"submit\" [disabled]=\"!addCommentForm.valid\">Save</button>\n    <button class=\"btn btn-outline-danger btn-sm\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n  </div>\n\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/book-details/book-details.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/book-details/book-details.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"currentBook\" class=\"container\" id=\"details\">\n    <div class=\"jumbotron\">\n        <h1>{{ currentBook.title }}</h1>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-7\" id=\"bookDetails\">\n          <h4><b>Details:</b></h4>\n          <h5><b>Year: </b>{{ currentBook.year }}</h5>\n          <h5><b>Author: </b>{{ currentBook.author }}</h5>\n          <h5><b>Description: </b>{{ currentBook.description }}</h5>\n          <h5><b>Earnings: </b>{{ currentBook.earnings }}</h5>\n          <h5><b>Available in electronic format: </b>{{ currentBook.isElectronicFormat }}</h5>\n          <h5><b>Genre: </b>{{ currentBook.genre }}</h5>\n          <h5 *ngIf=\"currentBook.rating != 0\">\n            <b>Rating:</b> {{ currentBook.rating }}<span class=\"mr-4\"></span>\n            <fa *ngFor=\"let item of constructEmptyArray(currentBook.rating)\" class=\"rating-list star\" name=\"star\"><i class=\"fa fa-star\"></i></fa>\n          </h5>\n          <h5 *ngIf=\"currentBook.rating == 0\"><b>Rating: </b>Not rated yet</h5>\n          <hr />\n          \n          <div class=\"row\" id=\"book-details-btn\">\n            <div class=\"col-sm-12\">\n              <div *ngIf=\"!addCommentMode && isUserLoggedIn\" class=\"col-sm-6\" id=\"add-comment-btn\">\n                <button class=\"btn btn-outline-primary btn-sm \" type=\"button\" (click)=\"commentFormToggle()\">\n                  Add Comment\n                </button>\n                <button id=\"addFavourite\" *ngIf=\"!isAddToFavouriteButtonDisabled\" class=\"btn btn-outline-info btn-sm \" type=\"button\" (click)=\"addToFavourites()\">\n                  <i class=\"fa fa-plus mr-1\"></i>\n                  Add to Favourites\n                </button>\n              </div>\n\n              <div class=\"col-sm-6\" id=\"crud-book-btn\">\n                <button *ngIf=\"currentUserRole == 'Admin'\" class=\"btn btn-outline-danger btn-sm\" type=\"button\"\n                        (click)=\"initializeDeleteBook()\">\n                  Delete\n                  Book\n                </button>\n                <button *ngIf=\"currentUserRole == 'Admin'\" class=\"btn btn-outline-warning btn-sm\" type=\"button\"\n                        (click)=\"initializeUpdateBook()\">\n                  Update\n                  Book\n                </button>\n              </div>\n            </div>\n\n          </div>\n\n          <div *ngIf=\"isOpen\">\n            <app-book-upsert [selectedBook]=\"currentBook\" [submitLabel]=\"label\" (onSubmit)=\"reloadData()\">\n            </app-book-upsert>\n          </div>\n        \n          <div *ngIf=\"isUserLoggedIn\">\n            <hr />\n            <h4><b>Your rating:</b></h4>\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <ul class=\"list-inline rating-list\" *ngFor=\"let rating of ratings\">\n                  <li (mouseenter)=\"hoverIndex=rating\"\n                      (mouseleave)=\"hoverIndex=-1\"\n                      (click)=\"sendRating(rating)\"\n                      [ngClass]=\"{'selected': rating <= lastRatingValue, 'hovered': rating <= hoverIndex}\">\n                    <i class=\"fa fa-star\"></i>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n\n          <h4 *ngIf=\"currentBook.userComments.length > 0\">Comments:</h4>\n          <table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"currentBook.userComments.length > 0\">\n            <thead>\n              <tr>\n                <th style=\"width: 10%;\">Username</th>\n                <th style=\"width: 40%;\">Text</th>\n                <th style=\"width: 20%;\">Added On</th>\n                <th style=\"width: 30%;\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let comment of currentBook.userComments\">\n                <td>{{ comment.username }}</td>\n                <td>{{ comment.textComment }}</td>\n                <td>{{ comment.whenAdded | timeAgo }}</td>\n                <td>\n                  <a *ngIf=\"comment.username === loggedUser\" class=\"btn btn-outline-primary btn-sm mr-3\"\n                     (click)=\"updateCommentFormToggle(comment)\">Update</a>\n                  <a *ngIf=\"comment.username === loggedUser\" class=\"btn btn-outline-danger btn-sm\"\n                     (click)=\"deleteComment(comment.id)\" (onSubmit)=\"reloadData()\">Delete</a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div *ngIf=\"addCommentMode\">\n            <app-add-comment [currentBook]=\"currentBook\" (onSubmit)=\"addCommentPassChild()\"\n                             (onClose)=\"closeFormAtCancel()\">\n            </app-add-comment>\n          </div>\n          <div *ngIf=\"updateCommentMode\">\n            <app-update-comments [currentBook]=\"currentBook\" [comment]=\"currentComment\"\n                                 (onSubmit)=\"reloadData()\" (onClose)=\"closeUpdateFormAtCancel()\">\n            </app-update-comments>\n            <hr />\n          </div>\n          <div> <button id=\"backBtn\" class=\"btn btn-primary\" type=\"button\" (click)=\"goBack()\"><i class=\"fa fa-arrow-left\"></i></button></div>\n\n        </div>\n        <hr />\n        <div class=\"col-lg-5\">\n          <div class=\"text-center\">\n            <img src=\"{{ currentBook.pictureURL }}\" class=\"img-fluid\" />\n          </div>\n        </div>\n\n      </div>\n    </div>\n   \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/book-list/book-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/book-list/book-list.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container book-list-jumboton\">\n  <div class=\"jumbotron\">\n    <h1 *ngIf=\"!isFavourites\">\n      <fa name=\"book\">\n      </fa> Welcome to Books App <fa name=\"book\"></fa>\n    </h1>\n    <h1 *ngIf=\"isFavourites\">\n      <fa name=\"book\"></fa> Favourite Books <fa name=\"book\"></fa>\n    </h1>\n    <p class=\"subtitle\" *ngIf=\"isFavourites\">Your preferred books at a glance</p>\n    <p class=\"subtitle\" *ngIf=\"!isFavourites\">Your favourite place to discuss and review the latest books</p>\n    <div class=\"wmx12 mx-auto grid ai-center row\">\n      <form *ngIf=\"!isOpen && !isFavourites\" id=\"search\" role=\"search\" action=\"/books\" method=\"get\"\n        class=\"grid--cell fl-grow1 searchbar px12 js-searchbar \" autocomplete=\"off\">\n        <div class=\"ps-relative\">\n          <input (keyup)=\"doSearch()\" name=\"searchText\" type=\"text\" placeholder=\"Search…\" value=\"\" autocomplete=\"off\"\n            maxlength=\"150\" class=\"s-input s-input__search js-search-field\" aria-label=\"Search\"\n            aria-controls=\"top-search\" data-controller=\"s-popover\" data-action=\"focus->s-popover#show\"\n            data-s-popover-placement=\"bottom-start\" [(ngModel)]=\"searchText\">\n          <svg aria-hidden=\"true\" class=\"s-input-icon s-input-icon__search svg-icon iconSearch\" width=\"18\" height=\"18\"\n            viewBox=\"0 0 18 18\">\n            <path d=\"M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z\">\n            </path>\n          </svg>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div *ngIf=\"!isOpen\" class=\"row text-center spacer\" style=\"display:flex; flex-wrap:wrap;\">\n    <div *ngFor=\"let book of allBooks\" class=\"col-md-3 col-sm-6 book\" (click)=\"id = book.id\">\n      <div class=\"thumbnail px-3 shadow rounded\">\n        <div>\n          <img [src]=\"book.pictureURL\" class=\"poster\" alt=\"\">\n        </div>\n        <div class=\"caption\">\n          <h4>{{book.title | uppercase}}</h4>\n        </div>\n        <p *ngIf=\"book.rating != 0\">Rating: {{ book.rating }} - <fa\n            *ngFor=\"let item of constuctEmptyArray(book.rating)\" class=\"rating-star\" name=\"star\"></fa>\n        </p>\n        <p *ngIf=\"book.rating == 0\">Not rated yet</p>\n        <p>{{ book.description | slice:0:50 }}...</p>\n        <p>\n          <a class=\"btn btn-primary mb-3\" [routerLink]=\"['/books/', book.id]\">More Info</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/book-upsert/book-upsert.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/book-upsert/book-upsert.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div id=\"changeBackgroundBookC\">\n  <form [formGroup]=\"bookForm\">\n    <div class=\"form-group\">\n      <label class=\"font-weight-bold\">Title</label>\n      <input type=\"text\"\n             class=\"form-control form-control-sm book\"\n             name=\"title\"\n             formControlName=\"title\"\n             required>\n      <div *ngIf=\"bookForm.controls['title'].invalid && (bookForm.controls['title'].dirty || bookForm.controls['title'].touched)\" class=\"text-danger\">\n        <div *ngIf=\"bookForm.controls['title'].errors.required\">\n          Title is required.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"font-weight-bold\">Author</label>\n      <input type=\"text\"\n             class=\"form-control form-control-sm book\"\n             name=\"author\"\n             formControlName=\"author\"\n             required>\n      <div *ngIf=\"bookForm.controls['author'].invalid && (bookForm.controls['author'].dirty || bookForm.controls['author'].touched)\" class=\"text-danger\">\n        <div *ngIf=\"bookForm.controls['author'].errors.required\">\n          Author is required.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"font-weight-bold\">Year</label>\n      <input type=\"number\"\n             class=\"form-control book\"\n             name=\"year\"\n             formControlName=\"year\"\n             required>\n      <div *ngIf=\"bookForm.controls['year'].invalid && (bookForm.controls['year'].dirty || bookForm.controls['year'].touched)\" class=\"text-danger\">\n        <div *ngIf=\"bookForm.controls['year'].errors.required\">\n          Year is required.\n        </div>\n        <div *ngIf=\"bookForm.controls['year'].errors.min\">\n          Year must be greater than 1900.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"font-weight-bold\">Year</label>\n      <input type=\"text\"\n             class=\"form-control book\"\n             name=\"author\"\n             formControlName=\"author\"\n             required>\n      <div *ngIf=\"bookForm.controls['author'].invalid && (bookForm.controls['author'].dirty || bookForm.controls['author'].touched)\" class=\"text-danger\">\n        <div *ngIf=\"bookForm.controls['author'].errors.required\">\n          Author is required.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"font-weight-bold\">Description</label>\n      <textarea name=\"description\"\n                class=\"form-control book\"\n                formControlName=\"description\"\n                required>\n    </textarea>\n      <div *ngIf=\"bookForm.controls['description'].invalid && (bookForm.controls['description'].dirty || bookForm.controls['description'].touched)\" class=\"text-danger\">Enter a description of the book.</div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"font-weight-bold\">Earnings Amount</label>\n      <input type=\"number\"\n             class=\"form-control book\"\n             name=\"earnings\"\n             formControlName=\"earnings\"\n             required>\n      <div *ngIf=\"bookForm.controls['earnings'].invalid && (bookForm.controls['earnings'].dirty || bookForm.controls['earnings'].touched)\" class=\"text-danger\">\n        <div *ngIf=\"bookForm.controls['earnings'].errors.required\">\n          Earnings required.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"font-weight-bold\">Available in electronic format&nbsp;&nbsp; </label>\n\n      <input class=\"radio-button\"\n             type=\"radio\"\n             name=\"isElectronicFormat\"\n             [value]=\"true\"\n             required\n             formControlName=\"isElectronicFormat\"> Yes&nbsp;\n      <input class=\"radio-button\"\n             type=\"radio\"\n             name=\"isElectronicFormat\"\n             [value]=\"false\"\n             required\n             formControlName=\"isElectronicFormat\"> No\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"font-weight-bold\">Genre</label>\n      <select name=\"genre\" formControlName=\"genre\" class=\"form-control book\" required>\n        <option value=\"Finction\">Finction</option>\n        <option value=\"Poetry\">Poetry</option>\n        <option value=\"Narrative\">Narrative</option>\n        <option value=\"Encyclopedia\">Encyclopedia</option>\n        <option value=\"Historical\">Historical</option>\n        <option value=\"Mystery\">Mystery</option>\n        <option value=\"Romance\">Romance</option>\n        <option value=\"Biography\">Biography</option>\n        <option value=\"Philosophy\">Philosophy</option>\n        <option value=\"Psychology\">Psychology</option>\n        <option value=\"PersonalDevelopment\">PersonalDevelopment</option>\n      </select>\n      <div *ngIf=\"bookForm.controls['genre'].invalid && (bookForm.controls['genre'].dirty || bookForm.controls['genre'].touched)\" class=\"text-danger\">\n        <div *ngIf=\"bookForm.controls['genre'].errors.required\">\n          Genre is required.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"font-weight-bold\">Picture Url</label>\n      <input type=\"text\"\n             name=\"pictureUrl\"\n             class=\"form-control book\"\n             formControlName=\"pictureURL\"\n             required>\n      <div *ngIf=\"bookForm.controls['pictureURL'].invalid && (bookForm.controls['pictureURL'].dirty || bookForm.controls['pictureURL'].touched)\" class=\"text-danger\">\n        <div *ngIf=\"bookForm.controls['pictureURL'].errors.required\">\n          Picture url is required.\n        </div>\n        <div *ngIf=\"bookForm.controls['pictureURL'].errors.pattern\">\n          Enter a valid url!\n        </div>\n      </div>\n    </div>\n\n    <div class=\"btn-group\">\n      <button class=\"btn btn-sm btn-primary mr-3\"\n              type=\"button\"\n              [disabled]=\"!bookForm.valid\"\n              (click)=\"submitBookData()\">\n        {{ submitLabel }}\n      </button>\n      <button class=\"btn btn-sm btn-secondary\"\n              type=\"button\"\n              (click)=\"redirectToViewBooks()\">\n        Cancel\n      </button>\n    </div>\n  </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/update-comments/update-comments.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/update-comments/update-comments.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"updateCommentForm\" (ngSubmit)=\"save()\">\n\n  <div class=\"form-group\">\n    <label for=\"addCommnet\">Update comment...</label>\n    <textarea class=\"form-control\" id=\"addCommnet\" rows=\"3\" formControlName=\"commentText\" autofocus required></textarea>\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-outline-primary btn-sm mr-2\" type=\"submit\" [disabled]=\"!updateCommentForm.valid\">Save</button>\n    <button class=\"btn btn-outline-danger btn-sm\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n  </div>\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/user-profile/user-profile.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/user-profile/user-profile.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"justify-content-center align-items-center container\">\n\n    <div class=\"row justify-content-center align-items-center header\">\n      <div>\n        <h1 class=\"p-5\">Edit Your Info</h1>\n      </div>\n    </div>\n\n    <div class=\"row justify-content-center align-items-center\" id=\"formRow\">\n      \n      <form class=\"editProfile\" [formGroup]=\"profileForm\" (ngSubmit)=\"saveUserData()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\" required>\n          <div\n            *ngIf=\"profileForm.controls['name'].invalid && (profileForm.controls['name'].dirty || profileForm.controls['name'].touched)\"\n            class=\"text-danger\">\n            <div *ngIf=\"profileForm.controls['name'].errors.required\">\n              Name is required.\n            </div>\n            <div *ngIf=\"profileForm.controls['name'].errors.hasOnlyLetters\">\n              Name must contain only letters.\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input type=\"text\" class=\"form-control\" id=\"username\" formControlName=\"username\" required>\n          <div\n            *ngIf=\"profileForm.controls['username'].invalid && (profileForm.controls['username'].dirty || profileForm.controls['username'].touched)\"\n            class=\"text-danger\">\n            <div *ngIf=\"profileForm.controls['username'].errors.required\">\n              Username is required.\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\" required>\n          <div\n            *ngIf=\"profileForm.controls['email'].invalid && (profileForm.controls['email'].dirty || profileForm.controls['email'].touched)\"\n            class=\"text-danger\">\n            <div *ngIf=\"profileForm.controls['email'].errors.required\">\n              Email is required.\n            </div>\n            <div *ngIf=\"profileForm.controls['email'].errors.email\">\n              Enter a valid email address.\n            </div>\n          </div>\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!profileForm.valid\">Save</button>\n        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"goBack()\">Back</button>\n      </form>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-flex\" id=\"login\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3>Forgot Password</h3>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"resetPassword()\">\n          <div class=\"form-group\">\n            <label for=\"username\" class=\"text-light font-weight-bold\">Username</label>\n            <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\" required>\n            <div *ngIf=\"forgotPasswordForm.controls['username'].invalid && (forgotPasswordForm.controls['username'].dirty || forgotPasswordForm.controls['username'].touched)\" class=\"text-danger\">\n              <div *ngIf=\"forgotPasswordForm.controls['username'].errors.required\">\n                Username required.\n              </div>\n              </div>\n            </div>\n\n          <div class=\"form-group\">\n            <label for=\"email\" class=\"text-light font-weight-bold\">Email</label>\n            <input id=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\" required>\n            <div *ngIf=\"forgotPasswordForm.controls['email'].invalid && (forgotPasswordForm.controls['email'].dirty || forgotPasswordForm.controls['email'].touched)\" class=\"text-danger\">\n              <div *ngIf=\"forgotPasswordForm.controls['email'].errors.required\">\n                Email required.\n              </div>\n              <div *ngIf=\"forgotPasswordForm.controls['email'].errors.email\">\n                Enter a valid email address.\n              </div>\n            </div>\n          </div>\n\n            <div class=\"form-group text-center\">\n              <button *ngIf=\"!isSubmitting\"\n                      @fade\n                      class=\"btn login_btn\"\n                      type=\"submit\"\n                      [disabled]=\"!forgotPasswordForm.valid\">\n                Reset Password\n              </button>\n              <button *ngIf=\"isSubmitting\" class=\"btn login_btn\">\n                <i class=\"fa fa-spinner fa-spin\"></i> Reset Password\n              </button>\n            </div>\n</form>\n      </div>\n      <div class=\"card-footer\">\n        <div class=\"d-flex justify-content-center links\">\n          <a href=\"/login\" class=\"subLinks\">Jump to Login page</a>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container container-home\">\n  <div id=\"landing-header\">\n    <h3>{{title}}</h3>\n    <a routerLink=\"/books\" class=\"btn btn-lg btn-success\">Enter</a>\n  </div>\n\n  <ul class=\"slideshow\">\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-flex\" id=\"login\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3>Sign In</h3>\n      </div>\n      <div class=\"card-body\">\n        <form \n          [formGroup]=\"loginForm\" \n          (ngSubmit)=\"loginUser()\">\n\n          <div class=\"form-group\">\n            <label for=\"username\" class=\"text-light font-weight-bold\">Username</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\" required>\n            <div *ngIf=\"loginForm.controls['username'].invalid && (loginForm.controls['username'].dirty || loginForm.controls['username'].touched)\" class=\"text-danger\">\n              <div *ngIf=\"loginForm.controls['username'].errors.required\">\n                Username required.\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\" class=\"text-light font-weight-bold\">Password</label>\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" required>\n            <div *ngIf=\"loginForm.controls['password'].invalid && (loginForm.controls['password'].dirty || loginForm.controls['password'].touched)\" class=\"text-danger\">\n              <div *ngIf=\"loginForm.controls['password'].errors.required\">\n                Password required.\n              </div>\n            </div>\n            </div>\n\n          <div class=\"form-group\">\n            <input type=\"submit\" value=\"Login\" class=\"btn btn-sm float-right login_btn\" [disabled]=\"!loginForm.valid\">\n          </div>\n        </form>\n      </div>\n      <div class=\"card-footer\">\n        <div class=\"d-flex justify-content-center links\">\n          Don't have an account?<a href=\"/sign-up\" class=\"subLinks\">Sign Up</a>\n        </div>\n        <div class=\"d-flex justify-content-center\">\n          <a [routerLink]=\"['/forgotPassword']\" class=\"subLinks\">Forgot your password?</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <nav id=\"nav-style\"\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i>\n        Books App</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"\n        aria-label=\"Toggle navigation\" [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\" [ngClass]=\"{ show: isExpanded }\">\n        <ul class=\"navbar-nav flex-grow\">\n          <li *ngIf=\"loggedIn()\" class=\"nav-item mr-3\">\n            <a *appHasRole=\"['Admin']\" class=\"nav-link text-dark\" [routerLink]=\"['/books/new']\">\n              <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n              Add book\n            </a>\n          </li>\n          <li *ngIf=\"loggedIn()\" class=\"nav-item mr-3\">\n            <a *appHasRole=\"['Admin','Moderator']\" class=\"nav-link text-dark\" [routerLink]=\"['/commentsToApprove']\">\n              <i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>\n              Approve comments\n            </a>\n          </li>\n          <li class=\"nav-item mr-3\" [routerLinkActive]=\"['link-active']\">\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/books']\">\n              <i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i>\n              Books\n            </a>\n          </li>\n\n          <li *ngIf=\"loggedIn()\" class=\"nav-item mr-3\" [routerLinkActive]=\"['link-active']\">\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/favourites']\">\n              <i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i>\n              Favourites\n            </a>\n          </li>\n\n          <li *ngIf=\"!loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/login']\">\n              <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n              Login\n            </a>\n          </li>\n          <li>\n            <div *ngIf=\"loggedIn()\" class=\"dropdown mt-2\" dropdown>\n              <a class=\"dropdown-toggle text-dark\" dropdownToggle>\n                <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\n                Welcome {{loggedInUser | titlecase}}\n              </a>\n              <div class=\"dropdown-menu mt-3\" *dropdownMenu>\n                <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">\n                  <i class=\"fa fa-user\"></i> Edit Profile\n                </a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" (click)=\"logout()\">\n                  <i class=\"fa fa-sign-out\"></i>Logout\n                </a>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-flex\" id=\"login\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h2>Register</h2>\n      </div>\n      <div class=\"card-body py-1\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"addUser()\">\n\n          <div class=\"form-group\">\n            <label for=\"name\" class=\"text-light font-weight-bold\">Name</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Name\" required>\n            <div *ngIf=\"form.controls['name'].invalid && (form.controls['name'].dirty || form.controls['name'].touched)\"\n              class=\"text-danger\">\n              <div *ngIf=\"form.controls['name'].errors.required\">\n                Name required.\n              </div>\n              <div *ngIf=\"form.controls['name'].errors.hasOnlyLetters\">\n                Name must contain only letters.\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"username\" class=\"text-light font-weight-bold\">Username</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Username\" required />\n            <div\n              *ngIf=\"form.controls['username'].invalid && (form.controls['username'].dirty || form.controls['username'].touched)\"\n              class=\"text-danger\">\n              <div *ngIf=\"form.controls['username'].errors.required\">\n                Username required.\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"email\" class=\"text-light font-weight-bold\">Email</label>\n            <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" required>\n            <div\n              *ngIf=\"form.controls['email'].invalid && (form.controls['email'].dirty || form.controls['email'].touched)\"\n              class=\"text-danger\">\n              <div *ngIf=\"form.controls['email'].errors.required\">\n                Email address required.\n              </div>\n              <div *ngIf=\"form.controls['email'].errors.email\">\n                Enter a valid email address.\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"password\" class=\"text-light font-weight-bold\">Password</label>\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" required>\n            <div\n              *ngIf=\"form.controls['password'].invalid && (form.controls['password'].dirty || form.controls['password'].touched)\"\n              class=\"text-danger\">\n              <div *ngIf=\"form.controls['password'].errors.required\">Password is required!</div>\n              <div *ngIf=\"form.controls['password'].errors.hasNumber\">Password must contain 1 number!</div>\n              <div *ngIf=\"form.controls['password'].errors.hasCapitalCase\">Password must contain 1 capital case!</div>\n              <div *ngIf=\"form.controls['password'].errors.hasSmallCase\">Password must contain 1 small case!</div>\n              <div *ngIf=\"form.controls['password'].errors.minlength\">Password must contain at least 8 characters!</div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"confirmedPassword\" class=\"text-light font-weight-bold\">Confirm password</label>\n            <input type=\"password\" class=\"form-control\" formControlName=\"confirmedPassword\"\n              placeholder=\"Confirm password\" required>\n            <div\n              *ngIf=\"form.controls['confirmedPassword'].invalid && (form.controls['confirmedPassword'].dirty || form.controls['confirmedPassword'].touched)\"\n              class=\"text-danger\">\n              <div *ngIf=\"form.controls['confirmedPassword'].errors.required\">Confirmation password is required!</div>\n              <div *ngIf=\"form.controls['confirmedPassword'].errors.mustMatch\">Password must match!</div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <button class=\"btn btn-sm login_btn mr-4\" [disabled]=\"!form.valid\">Register</button>\n            <button class=\"btn btn-sm btn-secondary\" type=\"reset\" (click)=\"resetForm()\">Reset changes</button>\n          </div>\n\n          <div class=\"d-flex justify-content-center links\">\n            Already have an account?<a href=\"/login\" class=\"subLinks\">Go to login</a>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/_directives/hasRole.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/_directives/hasRole.directive.ts ***!
  \**************************************************/
/*! exports provided: HasRoleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasRoleDirective", function() { return HasRoleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");



let HasRoleDirective = class HasRoleDirective {
    constructor(viewContainerRef, templateRef, authService) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.authService = authService;
        this.isVisible = false;
    }
    ngOnInit() {
        const userRoles = this.authService.decodedToken.role;
        if (!userRoles) {
            this.viewContainerRef.clear();
        }
        if (this.authService.roleMatch(this.appHasRole)) {
            if (!this.isVisible) {
                this.isVisible = true;
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
            else {
                this.isVisible = false;
                this.viewContainerRef.clear();
            }
        }
    }
};
HasRoleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HasRoleDirective.prototype, "appHasRole", void 0);
HasRoleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHasRole]'
    })
], HasRoleDirective);



/***/ }),

/***/ "./src/app/_shared/angular-material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/_shared/angular-material.module.ts ***!
  \****************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");









let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]
        ],
        exports: [
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]
        ]
    })
], AngularMaterialModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/book-list/book-list.component */ "./src/app/component/book-list/book-list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _component_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/book-details/book-details.component */ "./src/app/component/book-details/book-details.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _component_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/user-profile/user-profile.component */ "./src/app/component/user-profile/user-profile.component.ts");
/* harmony import */ var _approve_comments_approve_comments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./approve-comments/approve-comments.component */ "./src/app/approve-comments/approve-comments.component.ts");
/* harmony import */ var _service_auth_guard_child_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/auth-guard-child.service */ "./src/app/service/auth-guard-child.service.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _component_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/add-book/add-book.component */ "./src/app/component/add-book/add-book.component.ts");













const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'books', component: _component_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_3__["BookListComponent"] },
    { path: 'books/new', component: _component_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_12__["AddBookComponent"],
        data: { roles: ['Admin'] },
        canActivate: [_service_auth_guard_child_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardChild"]]
    },
    { path: 'books/:id', component: _component_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_5__["BookDetailsComponent"] },
    { path: 'favourites', component: _component_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_3__["BookListComponent"] },
    { path: 'sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"] },
    { path: 'profile', component: _component_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"] },
    { path: 'forgotPassword', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"] },
    {
        path: 'commentsToApprove', component: _approve_comments_approve_comments_component__WEBPACK_IMPORTED_MODULE_9__["ApproveCommentsComponent"],
        data: { roles: ['Admin', 'Moderator'] },
        canActivate: [_service_auth_guard_child_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardChild"]]
    },
    { path: '**', redirectTo: 'books', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");




let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'Books App';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    ngOnInit() {
        const token = localStorage.getItem('token');
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
            this.authService.changeLoggedInUser(this.authService.decodedToken.unique_name);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _component_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/book-details/book-details.component */ "./src/app/component/book-details/book-details.component.ts");
/* harmony import */ var _component_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/book-list/book-list.component */ "./src/app/component/book-list/book-list.component.ts");
/* harmony import */ var _component_book_upsert_book_upsert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/book-upsert/book-upsert.component */ "./src/app/component/book-upsert/book-upsert.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _component_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/user-profile/user-profile.component */ "./src/app/component/user-profile/user-profile.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _service_alertify_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/alertify.service */ "./src/app/service/alertify.service.ts");
/* harmony import */ var _service_error_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/error.interceptor */ "./src/app/service/error.interceptor.ts");
/* harmony import */ var _approve_comments_approve_comments_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./approve-comments/approve-comments.component */ "./src/app/approve-comments/approve-comments.component.ts");
/* harmony import */ var _service_comment_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service/comment.service */ "./src/app/service/comment.service.ts");
/* harmony import */ var _directives_hasRole_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_directives/hasRole.directive */ "./src/app/_directives/hasRole.directive.ts");
/* harmony import */ var _component_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/add-comment/add-comment.component */ "./src/app/component/add-comment/add-comment.component.ts");
/* harmony import */ var _component_update_comments_update_comments_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/update-comments/update-comments.component */ "./src/app/component/update-comments/update-comments.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _component_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./component/add-book/add-book.component */ "./src/app/component/add-book/add-book.component.ts");
/* harmony import */ var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_shared/angular-material.module */ "./src/app/_shared/angular-material.module.ts");































function tokenGetter() {
    return localStorage.getItem('token');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _component_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_10__["BookDetailsComponent"],
            _component_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_11__["BookListComponent"],
            _component_book_upsert_book_upsert_component__WEBPACK_IMPORTED_MODULE_12__["BookUpsertComponent"],
            _component_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_26__["AddCommentComponent"],
            _component_update_comments_update_comments_component__WEBPACK_IMPORTED_MODULE_27__["UpdateCommentsComponent"],
            _component_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_29__["AddBookComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_15__["NavMenuComponent"],
            _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
            _component_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_18__["UserProfileComponent"],
            _approve_comments_approve_comments_component__WEBPACK_IMPORTED_MODULE_23__["ApproveCommentsComponent"],
            _directives_hasRole_directive__WEBPACK_IMPORTED_MODULE_25__["HasRoleDirective"],
            time_ago_pipe__WEBPACK_IMPORTED_MODULE_6__["TimeAgoPipe"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_28__["ForgotPasswordComponent"]
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_19__["BsDropdownModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtModule"].forRoot({
                config: {
                    tokenGetter,
                    whitelistedDomains: ['localhost:5000'],
                    blacklistedRoutes: ['localhost:5000/users/authenticate']
                },
            }),
            _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_30__["AngularMaterialModule"],
        ],
        exports: [
            _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_30__["AngularMaterialModule"]
        ],
        entryComponents: [],
        providers: [
            _service_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
            _service_alertify_service__WEBPACK_IMPORTED_MODULE_21__["AlertifyService"],
            _service_error_interceptor__WEBPACK_IMPORTED_MODULE_22__["ErrorInterceptorProvider"],
            _service_comment_service__WEBPACK_IMPORTED_MODULE_24__["CommentService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/approve-comments/approve-comments.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/approve-comments/approve-comments.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n   opacity: 0.8;\n   text-align: center;\n   padding: 0;\n   background-color: #eee;\n}\n\n.no-comments {\n    position: fixed;\n    top: 25%;\n    left: 25%;\n    width: 50%;\n    height: 50%;\n    opacity: 0.9;\n}\n\na {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcm92ZS1jb21tZW50cy9hcHByb3ZlLWNvbW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLFVBQVU7R0FDVixzQkFBc0I7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwcm92ZS1jb21tZW50cy9hcHByb3ZlLWNvbW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgIG9wYWNpdHk6IDAuODtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIHBhZGRpbmc6IDA7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG4ubm8tY29tbWVudHMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDI1JTtcbiAgICBsZWZ0OiAyNSU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBvcGFjaXR5OiAwLjk7XG59XG5cbmEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/approve-comments/approve-comments.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/approve-comments/approve-comments.component.ts ***!
  \****************************************************************/
/*! exports provided: ApproveCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveCommentsComponent", function() { return ApproveCommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/comment.service */ "./src/app/service/comment.service.ts");
/* harmony import */ var _service_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/alertify.service */ "./src/app/service/alertify.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");





let ApproveCommentsComponent = class ApproveCommentsComponent {
    constructor(commentService, alertify) {
        this.commentService = commentService;
        this.alertify = alertify;
        this.displayedColumns = ['username', 'book', 'commentText', 'addedOn', 'operations'];
    }
    ngOnInit() {
        this.loadComments();
        document.body.classList.add('book-list-background');
    }
    loadComments() {
        this.commentService.getCommentsForApproval().subscribe(comments => {
            this.comments = comments;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.comments);
        }, error => {
            console.log(error);
            this.alertify.error(error);
        });
    }
    approveComment(commentId) {
        this.commentService.approveComment(commentId).subscribe(() => {
            this.comments.splice(this.comments.findIndex(c => c.id === commentId), 1);
            this.dataSource._updateChangeSubscription();
            this.alertify.success('Comment approved');
        }, error => {
            this.alertify.error(error);
        });
    }
    rejectComment(commentId) {
        this.commentService.rejectComment(commentId).subscribe(() => {
            this.comments.splice(this.comments.findIndex(c => c.id === commentId), 1);
            this.dataSource.data = this.comments;
            this.alertify.success('Comment rejected');
        }, error => {
            this.alertify.error(error);
        });
    }
    ngOnDestroy() {
        document.body.classList.remove('book-list-background');
    }
};
ApproveCommentsComponent.ctorParameters = () => [
    { type: _service_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"] },
    { type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] }
];
ApproveCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-approve-comments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./approve-comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/approve-comments/approve-comments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./approve-comments.component.css */ "./src/app/approve-comments/approve-comments.component.css")).default]
    })
], ApproveCommentsComponent);



/***/ }),

/***/ "./src/app/component/add-book/add-book.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/add-book/add-book.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 60px;\n}\n\ninput {\n    width: 100%;\n}\n\ntextarea {\n    width: 100%;\n    height: 100px;\n}\n\n.radio-button {\n    width: auto;\n}\n\n.spacer {\n    margin-top: 15px;\n}\n\n.btn-primary {\n    margin-right: 10px;\n}\n\n.ng-invalid.ng-touched.book {\n  border: 1px solid red;\n}\n\n#add-book-style {\n  color: white;\n}\n\n.changeBackgroundBookChild {\n  margin-top: 2rem;\n  padding: 4rem;\n  background-color: #0b0b0bc9;\n  height: 100%;\n}\n\n#add-book-style .jumbotron {\n  text-align: center;\n  background-color: #0b0b0bc9;\n}\n\n@media screen and (min-width: 768px) {\n  #add-book-style .jumbotron {\n    padding-top: 30px !important;\n    padding-bottom: 30px !important;\n    margin-right: -15px !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2FkZC1ib29rL2FkZC1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLDhCQUE4QjtFQUNoQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2FkZC1ib29rL2FkZC1ib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnJhZGlvLWJ1dHRvbiB7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5zcGFjZXIge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm5nLWludmFsaWQubmctdG91Y2hlZC5ib29rIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4jYWRkLWJvb2stc3R5bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jaGFuZ2VCYWNrZ3JvdW5kQm9va0NoaWxkIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgcGFkZGluZzogNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiMGIwYmM5O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNhZGQtYm9vay1zdHlsZSAuanVtYm90cm9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIwYjBiYzk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAjYWRkLWJvb2stc3R5bGUgLmp1bWJvdHJvbiB7XG4gICAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHggIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/component/add-book/add-book.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/add-book/add-book.component.ts ***!
  \**********************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_model_book_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/book/book */ "./src/app/model/book/book.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddBookComponent = class AddBookComponent {
    constructor(router) {
        this.router = router;
        this.label = 'Add';
        this.book = new src_app_model_book_book__WEBPACK_IMPORTED_MODULE_2__["Book"]();
    }
    ngOnInit() {
        document.body.classList.add('book-list-background');
    }
    reloadData(action) {
        this.router.navigate(['books']);
    }
    ngOnDestroy() {
        document.body.classList.remove('book-list-background');
    }
};
AddBookComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-book/add-book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-book.component.css */ "./src/app/component/add-book/add-book.component.css")).default]
    })
], AddBookComponent);



/***/ }),

/***/ "./src/app/component/add-comment/add-comment.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/add-comment/add-comment.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZGQtY29tbWVudC9hZGQtY29tbWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/add-comment/add-comment.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/add-comment/add-comment.component.ts ***!
  \****************************************************************/
/*! exports provided: AddCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentComponent", function() { return AddCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _service_comment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/comment.service */ "./src/app/service/comment.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_alertify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/alertify.service */ "./src/app/service/alertify.service.ts");








let AddCommentComponent = class AddCommentComponent {
    constructor(router, http, fb, commentService, authService, alertify) {
        this.router = router;
        this.http = http;
        this.fb = fb;
        this.commentService = commentService;
        this.authService = authService;
        this.alertify = alertify;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addCommentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            commentText: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    save() {
        const newComment = this.addCommentForm.value;
        this.commentService.addComment(this.currentBook.id, newComment)
            .subscribe(() => {
            this.alertify.success('Comment waiting for approval!');
            this.onSubmit.emit();
        }, err => {
            this.alertify.error(err);
        });
    }
    cancel() {
        this.onClose.emit();
    }
};
AddCommentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _service_comment_service__WEBPACK_IMPORTED_MODULE_5__["CommentService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_7__["AlertifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddCommentComponent.prototype, "onSubmit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddCommentComponent.prototype, "onClose", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddCommentComponent.prototype, "currentBook", void 0);
AddCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-comment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-comment/add-comment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-comment.component.css */ "./src/app/component/add-comment/add-comment.component.css")).default]
    })
], AddCommentComponent);



/***/ }),

/***/ "./src/app/component/book-details/book-details.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/book-details/book-details.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#details h4{\n    font-size:  1.3rem!important;\n}\n#details h5 {\n  font-size: 1rem !important;\n}\n#details .jumbotron {\n  background-image: url(https://images.wallpaperscraft.com/image/book_garland_light_134006_1280x720.jpg);\n  background-size: cover;\n  /*background-image: linear-gradient(to right top, #838383, #85858b, #878793, #878a9b, #868da3, #8696b2, #82a0c0, #7cabcd, #70bfe0, #62d3ec, #58e8f2, #5ffbf1);*/\n}\n#bookDetails {\n  background-color: #f8f8f8;\n}\n#details h1 {\n  text-align: center;\n  color: #e9e3e3;\n}\nbutton {\n    margin-right: 10px;\n}\n.rating-list li {\n    float: right;\n    color: #ddd;\n    padding: 5px 5px;\n}\n.rating-list li.selected,\n.rating-list li.hovered,\n.rating-list li:hover { \n    color: #ffd700;\n    cursor: pointer;\n}\n.rating-list {\n    display: inline-block;\n    list-style: none;\n}\n#bookDetails {\n  box-shadow: 0px 4px 21px 0px rgba(0,0,0,0.75);\n  padding: 2rem;\n}\n#bookDetails h4 {\n    margin-bottom: 20px;\n    margin-top:20px;\n}\n.rating-list.star {\n  color: #ffd700;\n}\n#crud-book-btn, #add-comment-btn {\n  display: inline;\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n#book-details-btn {\n  margin-bottom: 20px;\n}\n@media screen and (min-width: 768px) {\n  #details .jumbotron {\n    padding-top: 30px !important;\n    padding-bottom: 30px !important;\n    margin-right: -15px!important;\n  }\n}\n.img-fluid {\n  max-height: 470px;\n  width: auto;\n  max-width: 100%;\n}\n@media screen and (min-width: 1600px) {\n  .img-fluid {\n    max-height: 680px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Jvb2stZGV0YWlscy9ib29rLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxzR0FBc0c7RUFDdEcsc0JBQXNCO0VBQ3RCLCtKQUErSjtBQUNqSztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjtBQUNBO0VBR0UsNkNBQTZDO0VBQzdDLGFBQWE7QUFDZjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQiw2QkFBNkI7RUFDL0I7QUFDRjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2Jvb2stZGV0YWlscy9ib29rLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZXRhaWxzIGg0e1xuICAgIGZvbnQtc2l6ZTogIDEuM3JlbSFpbXBvcnRhbnQ7XG59XG4jZGV0YWlscyBoNSB7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4jZGV0YWlscyAuanVtYm90cm9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLndhbGxwYXBlcnNjcmFmdC5jb20vaW1hZ2UvYm9va19nYXJsYW5kX2xpZ2h0XzEzNDAwNl8xMjgweDcyMC5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvKmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICM4MzgzODMsICM4NTg1OGIsICM4Nzg3OTMsICM4NzhhOWIsICM4NjhkYTMsICM4Njk2YjIsICM4MmEwYzAsICM3Y2FiY2QsICM3MGJmZTAsICM2MmQzZWMsICM1OGU4ZjIsICM1ZmZiZjEpOyovXG59XG4jYm9va0RldGFpbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xufVxuXG4jZGV0YWlscyBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlOWUzZTM7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucmF0aW5nLWxpc3QgbGkge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogI2RkZDtcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xufVxuICBcbi5yYXRpbmctbGlzdCBsaS5zZWxlY3RlZCxcbi5yYXRpbmctbGlzdCBsaS5ob3ZlcmVkLFxuLnJhdGluZy1saXN0IGxpOmhvdmVyIHsgXG4gICAgY29sb3I6ICNmZmQ3MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuICBcbi5yYXRpbmctbGlzdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4jYm9va0RldGFpbHMge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMjFweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDIxcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjFweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuI2Jvb2tEZXRhaWxzIGg0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6MjBweDtcbn1cblxuLnJhdGluZy1saXN0LnN0YXIge1xuICBjb2xvcjogI2ZmZDcwMDtcbn1cblxuI2NydWQtYm9vay1idG4sICNhZGQtY29tbWVudC1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbiNib29rLWRldGFpbHMtYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgI2RldGFpbHMgLmp1bWJvdHJvbiB7XG4gICAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHghaW1wb3J0YW50O1xuICB9XG59XG5cbi5pbWctZmx1aWQge1xuICBtYXgtaGVpZ2h0OiA0NzBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIC5pbWctZmx1aWQge1xuICAgIG1heC1oZWlnaHQ6IDY4MHB4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/component/book-details/book-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/book-details/book-details.component.ts ***!
  \******************************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_model_user_user_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/user/user-rating */ "./src/app/model/user/user-rating.ts");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_service_book_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/book.service */ "./src/app/service/book.service.ts");
/* harmony import */ var _service_comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/comment.service */ "./src/app/service/comment.service.ts");
/* harmony import */ var _service_alertify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/alertify.service */ "./src/app/service/alertify.service.ts");








let BookDetailsComponent = class BookDetailsComponent {
    constructor(route, router, authService, bookService, commentService, alertify) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.bookService = bookService;
        this.commentService = commentService;
        this.alertify = alertify;
        this.isOpen = false;
        this.label = 'Update';
        this.addCommentMode = false;
        this.updateCommentMode = false;
        this.isUserLoggedIn = false;
        this.userRating = new src_app_model_user_user_rating__WEBPACK_IMPORTED_MODULE_3__["UserRating"]();
        this.ratings = [1, 2, 3, 4, 5];
        this.favouriteBooks = [];
        this.isAddToFavouriteButtonDisabled = false;
    }
    ngOnInit() {
        this.bookId = Number(this.route.snapshot.paramMap.get('id'));
        this.getDetails();
        this.lastRatingValue = parseInt(localStorage.getItem(this.bookId.toString()), 10);
        this.isUserLoggedIn = this.authService.isLoggedIn();
        if (this.isUserLoggedIn) {
            this.loggedUser = this.authService.decodedToken.unique_name;
        }
        this.currentUserRole = this.authService.getUserRole();
        if (this.isUserLoggedIn) {
            this.getFavouriteBooks();
        }
    }
    getFavouriteBooks() {
        this.authService.getFavouriteBooks(this.authService.decodedToken.nameid)
            .subscribe(data => {
            this.favouriteBooks = data;
            const foundBook = this.favouriteBooks.find(element => element.id === this.bookId);
            if (foundBook !== undefined) {
                this.isAddToFavouriteButtonDisabled = true;
            }
        });
    }
    addToFavourites() {
        this.bookService.addBookToFavourite(this.bookId, this.currentBook).subscribe(res => {
            this.alertify.success('Added to favourites!');
            this.isAddToFavouriteButtonDisabled = true;
        });
    }
    getDetails() {
        this.bookService.getBookDetails(this.bookId).subscribe(book => {
            console.log(book);
            this.currentBook = book;
        });
    }
    initializeDeleteBook() {
        this.alertify.confirm('Are you sure you want to delete this book?', () => this.bookService.deleteBook(this.bookId).subscribe(_ => {
            this.alertify.success('Book successfully deleted');
            this.router.navigateByUrl('book');
        }, error => {
            this.alertify.error('Cannot delete book!');
        }));
    }
    initializeUpdateBook() {
        if (this.isOpen === false) {
            this.isOpen = true;
        }
        else {
            this.isOpen = false;
        }
    }
    reloadData() {
        this.updateCommentMode = false;
        this.isOpen = false;
        this.getDetails();
    }
    sendRating(rating) {
        localStorage.setItem(this.bookId.toString(), rating.toString());
        this.lastRatingValue = rating;
        this.userRating.userId = parseInt(this.authService.decodedToken.nameid, 10);
        this.userRating.bookId = this.bookId;
        this.userRating.ratingValue = rating;
        this.bookService.sendBookRating(this.bookId, this.userRating).subscribe(_ => {
            this.alertify.success('Rating submitted!');
            this.getDetails();
        });
    }
    commentFormToggle() {
        this.updateCommentMode = false;
        this.addCommentMode = !this.addCommentMode;
    }
    updateCommentFormToggle(comment) {
        this.currentComment = comment;
        this.addCommentMode = false;
        this.updateCommentMode = !this.updateCommentMode;
    }
    addCommentPassChild() {
        this.addCommentMode = false;
    }
    closeFormAtCancel() {
        this.addCommentMode = false;
    }
    closeUpdateFormAtCancel() {
        this.updateCommentMode = false;
    }
    deleteComment(commentId) {
        this.updateCommentMode = false;
        this.alertify.confirm('Are you sure you want to delete this comment?', () => {
            this.commentService.deleteComment(commentId)
                .subscribe(result => {
                this.alertify.success('Comment successfully deleted!');
                this.getDetails();
            }, error => this.alertify.error(error));
        });
    }
    constructEmptyArray(n) {
        return Array(Math.round(n));
    }
    goBack() {
        this.router.navigateByUrl('/books');
    }
};
BookDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_service_book_service__WEBPACK_IMPORTED_MODULE_5__["BookService"] },
    { type: _service_comment_service__WEBPACK_IMPORTED_MODULE_6__["CommentService"] },
    { type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_7__["AlertifyService"] }
];
BookDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/book-details/book-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-details.component.css */ "./src/app/component/book-details/book-details.component.css")).default]
    })
], BookDetailsComponent);



/***/ }),

/***/ "./src/app/component/book-list/book-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/book-list/book-list.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thumbnail .caption-full {\n    padding: 9px;\n}\n.thumbnail h4 {\n  font-size: 1.2rem !important;\n}\n.wmx12 {\n  max-width: 97.2307692rem !important;\n}\n.grid {\n  display: flex;\n}\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n.spacer {\n    margin-top: 30px;\n    margin-bottom: 20px;\n}\n.searchbar {\n  color: var(--black-800);\n  flex-shrink: 10000;\n}\n.fl-grow1 {\n  flex-grow: 1;\n}\n.px12 {\n  padding-left: 12px !important;\n  padding-right: 12px !important;\n}\n.searchbar .s-input {\n  border-color: #9199a1;\n  background-color: #fff;\n  box-shadow: none;\n  color: #383f47;\n}\n.s-input.s-input__search {\n  padding-left: 32px;\n  width: 100%;\n  height: 30px;\n}\n.s-input {\n  -webkit-appearance: none;\n  width: 80%;\n  margin: 0;\n  padding: .6em .7em;\n  border: 1px solid #9fa2a5;\n  border-radius: 3px;\n  font-size: 13px;\n  font-family: inherit;\n  line-height: 1.15384615;\n}\n.ps-relative {\n  position: relative !important;\n  display: block;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n}\n.jumbotron {\n  margin-top: 10px;\n  padding-top: 8px;\n  padding-bottom: 28px;\n}\n.s-input-icon.s-input-icon__search {\n  right: auto;\n  left: .7em;\n  color: var(--black-200);\n}\n.svg-icon {\n  vertical-align: bottom;\n}\n.s-input-icon {\n  position: absolute;\n  top: 50%;\n  margin-top: -9px;\n  pointer-events: none;\n}\n.svg-icon:not(.native) * {\n  fill: currentColor;\n}\n.rating-star {\n    color: orange\n}\n.jumbotron h1, p {\n    text-align: center;\n}\n.thumbnail .poster{\n        width: 150px;\n        height: 210px;\n}\n.thumbnail {\n  background:#f7f7f7;\n  transition: transform .2s;\n}\n.thumbnail:hover { /* IE 9 */ /* Safari 3-8 */\n  transform: scale(1.05); \n}\n@media screen and (min-width: 768px) {\n  .book-list-jumboton .jumbotron {\n    opacity:0.95;\n    padding-top: 30px !important;\n    padding-bottom: 30px !important;\n  }\n}\n.subtitle {\n  font-size: 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Jvb2stbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsU0FBUztFQUNULGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7UUFDUSxZQUFZO1FBQ1osYUFBYTtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUVBLG1CQUM4QixTQUFTLEVBQ0wsZUFBZTtFQUMvQyxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QiwrQkFBK0I7RUFDakM7QUFDRjtBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ib29rLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGh1bWJuYWlsIC5jYXB0aW9uLWZ1bGwge1xuICAgIHBhZGRpbmc6IDlweDtcbn1cbi50aHVtYm5haWwgaDQge1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xufVxuLndteDEyIHtcbiAgbWF4LXdpZHRoOiA5Ny4yMzA3NjkycmVtICFpbXBvcnRhbnQ7XG59XG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5teC1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5zcGFjZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNlYXJjaGJhciB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjay04MDApO1xuICBmbGV4LXNocmluazogMTAwMDA7XG59XG5cbi5mbC1ncm93MSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnB4MTIge1xuICBwYWRkaW5nLWxlZnQ6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTJweCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoYmFyIC5zLWlucHV0IHtcbiAgYm9yZGVyLWNvbG9yOiAjOTE5OWExO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiBub25lO1xuICBjb2xvcjogIzM4M2Y0Nztcbn1cblxuLnMtaW5wdXQucy1pbnB1dF9fc2VhcmNoIHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ucy1pbnB1dCB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAuNmVtIC43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ZmEyYTU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDEuMTUzODQ2MTU7XG59XG5cbi5wcy1yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbi5qdW1ib3Ryb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjhweDtcbn1cblxuLnMtaW5wdXQtaWNvbi5zLWlucHV0LWljb25fX3NlYXJjaCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAuN2VtO1xuICBjb2xvcjogdmFyKC0tYmxhY2stMjAwKTtcbn1cblxuLnN2Zy1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cblxuLnMtaW5wdXQtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc3ZnLWljb246bm90KC5uYXRpdmUpICoge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbi5yYXRpbmctc3RhciB7XG4gICAgY29sb3I6IG9yYW5nZVxufVxuXG4uanVtYm90cm9uIGgxLCBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aHVtYm5haWwgLnBvc3RlcntcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDIxMHB4O1xufVxuXG4udGh1bWJuYWlsIHtcbiAgYmFja2dyb3VuZDojZjdmN2Y3O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xufVxuXG4udGh1bWJuYWlsOmhvdmVyIHtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IC8qIElFIDkgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAvKiBTYWZhcmkgMy04ICovXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYm9vay1saXN0LWp1bWJvdG9uIC5qdW1ib3Ryb24ge1xuICAgIG9wYWNpdHk6MC45NTtcbiAgICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/component/book-list/book-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/book-list/book-list.component.ts ***!
  \************************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/book.service */ "./src/app/service/book.service.ts");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");





let BookListComponent = class BookListComponent {
    constructor(router, activatedRoute, bookService, authService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.bookService = bookService;
        this.authService = authService;
        this.isOpen = false;
        this.allBooks = [];
        document.querySelector('app-nav-menu').setAttribute('style', 'display:block;');
    }
    ngOnInit() {
        document.body.classList.add('book-list-background');
        this.isFavourites = this.activatedRoute.snapshot.url[0].path === 'favourites';
        this.getBooks();
        this.isLoggedIn = this.authService.isLoggedIn();
        this.currentUserRole = this.authService.getUserRole();
    }
    doSearch() {
        this.router.navigate([], {
            queryParams: { searchText: this.searchText }
        });
        this.getBooks();
    }
    getBooks() {
        if (this.searchText) {
            this.bookService.getFilteredBooks(this.searchText).subscribe(result => this.allBooks = result);
        }
        else if (this.isFavourites) {
            this.authService.getFavouriteBooks(parseInt(this.authService.decodedToken.nameid, 10)).subscribe(books => this.allBooks = books);
        }
        else {
            this.bookService.getBooks().subscribe(books => this.allBooks = books);
            this.router.navigate(['/books']);
        }
    }
    initializeUpdateBook() {
        this.isOpen = true;
        this.label = 'Update';
        this.book = this.getBookById(this.id);
    }
    reloadData(action) {
        this.id = undefined;
        this.isOpen = false;
        if (action !== 'Cancel') {
            this.getBooks();
        }
    }
    getBookById(id) {
        return this.allBooks.find(book => book.id === id);
    }
    // Used for Font Awesome icon generation
    constuctEmptyArray(n) {
        return Array(Math.round(n));
    }
    ngOnDestroy() {
        document.body.classList.remove('book-list-background');
    }
};
BookListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _service_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] },
    { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-book-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/book-list/book-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-list.component.css */ "./src/app/component/book-list/book-list.component.css")).default]
    })
], BookListComponent);



/***/ }),

/***/ "./src/app/component/book-upsert/book-upsert.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/book-upsert/book-upsert.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n    width: 100%;\n}\n\ntextarea {\n    width: 100%;\n    height: 100px;\n}\n\n.radio-button {\n    width: auto;\n}\n\n.spacer {\n    margin-top: 15px;\n}\n\n.btn-primary {\n    margin-right: 10px;\n}\n\n.ng-invalid.ng-touched.book {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Jvb2stdXBzZXJ0L2Jvb2stdXBzZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ib29rLXVwc2VydC9ib29rLXVwc2VydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnJhZGlvLWJ1dHRvbiB7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5zcGFjZXIge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm5nLWludmFsaWQubmctdG91Y2hlZC5ib29rIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/book-upsert/book-upsert.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/book-upsert/book-upsert.component.ts ***!
  \****************************************************************/
/*! exports provided: BookUpsertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookUpsertComponent", function() { return BookUpsertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_service_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/book.service */ "./src/app/service/book.service.ts");
/* harmony import */ var src_app_service_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/alertify.service */ "./src/app/service/alertify.service.ts");





let BookUpsertComponent = class BookUpsertComponent {
    constructor(bookService, alertify) {
        this.bookService = bookService;
        this.alertify = alertify;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.initializeFormControls();
    }
    initializeFormControls() {
        this.bookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "title": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedBook.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            "author": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedBook.author, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            "year": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedBook.year, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1900)]),
            "description": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedBook.description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            "earnings": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedBook.earnings),
            "isElectronicFormat": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedBook.isElectronicFormat),
            "genre": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedBook.genre, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            "pictureURL": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedBook.pictureURL, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/)])
        });
        this.bookForm.updateValueAndValidity();
    }
    submitBookData() {
        try {
            const book = this.bookForm.value;
            book.id = this.selectedBook.id;
            if (this.submitLabel === "Add") {
                this.bookService.addBook(book).subscribe(_ => {
                    this.onSubmit.emit(this.submitLabel);
                    this.alertify.success("Book successfully added");
                }, error => {
                    alert(error);
                });
            }
            else {
                this.bookService.updateBook(book.id, book).subscribe(_ => {
                    this.onSubmit.emit(this.submitLabel);
                    this.alertify.success("Book successfully updated");
                }, error => {
                    alert(error);
                });
            }
        }
        catch (e) {
            alert(e.message);
        }
    }
    redirectToViewBooks() {
        this.onSubmit.emit("Cancel");
    }
};
BookUpsertComponent.ctorParameters = () => [
    { type: src_app_service_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] },
    { type: src_app_service_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BookUpsertComponent.prototype, "submitLabel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BookUpsertComponent.prototype, "selectedBook", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BookUpsertComponent.prototype, "onSubmit", void 0);
BookUpsertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-upsert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-upsert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/book-upsert/book-upsert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-upsert.component.css */ "./src/app/component/book-upsert/book-upsert.component.css")).default]
    })
], BookUpsertComponent);



/***/ }),

/***/ "./src/app/component/update-comments/update-comments.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/update-comments/update-comments.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91cGRhdGUtY29tbWVudHMvdXBkYXRlLWNvbW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/component/update-comments/update-comments.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/update-comments/update-comments.component.ts ***!
  \************************************************************************/
/*! exports provided: UpdateCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCommentsComponent", function() { return UpdateCommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/comment.service */ "./src/app/service/comment.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/alertify.service */ "./src/app/service/alertify.service.ts");






let UpdateCommentsComponent = class UpdateCommentsComponent {
    constructor(commentService, authService, alertify, fb) {
        this.commentService = commentService;
        this.authService = authService;
        this.alertify = alertify;
        this.fb = fb;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateCommentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            commentText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.initializeUpdateCommentData();
    }
    initializeUpdateCommentData() {
        this.updateCommentForm = this.fb.group({
            id: [this.comment.commentId],
            commentText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.comment.commentText)
        });
    }
    save() {
        this.commentService.updateComment(this.updateCommentForm.value, this.comment.commentId)
            .subscribe(_ => {
            this.initializeUpdateCommentData();
            this.onSubmit.emit();
        }, err => {
            this.alertify.error(err);
        });
    }
    cancel() {
        this.onClose.emit();
    }
};
UpdateCommentsComponent.ctorParameters = () => [
    { type: _service_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpdateCommentsComponent.prototype, "comment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpdateCommentsComponent.prototype, "currentBook", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UpdateCommentsComponent.prototype, "onSubmit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UpdateCommentsComponent.prototype, "onClose", void 0);
UpdateCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-comments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/update-comments/update-comments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-comments.component.css */ "./src/app/component/update-comments/update-comments.component.css")).default]
    })
], UpdateCommentsComponent);



/***/ }),

/***/ "./src/app/component/user-profile/user-profile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/user-profile/user-profile.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control {\n    position: relative;\n    box-sizing: border-box;\n    height: auto;\n    width: 100%;\n    padding: 10px;\n    font-size: 16px;\n}\n\n.editProfile{\n    width: 300px;\n}\n\nh1 {\n    text-align: center;\n}\n\n.form-control:focus {\n    z-index: 2;\n}\n\n.btn-primary {\n    margin-right: 10px;\n}\n\n.ng-invalid.ng-touched.form-control {\n  border: 1px solid red;\n}\n\n.header {\n   opacity: 0.8;\n   text-align: center;\n   padding: 0;\n   background-color: #eee;\n   width: 60%;\n   margin: auto;\n   margin-bottom: 10px;\n   margin-top: 20px;\n}\n\n#formRow {\n    box-shadow: 0px 4px 21px 0px rgba(0,0,0,0.75);\n    padding: 3rem;\n    width: 60%;\n    margin: auto;\n    background-color: #eee;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7R0FDRyxZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLFVBQVU7R0FDVixzQkFBc0I7R0FDdEIsVUFBVTtHQUNWLFlBQVk7R0FDWixtQkFBbUI7R0FDbkIsZ0JBQWdCO0FBQ25COztBQUVBO0lBR0ksNkNBQTZDO0lBQzdDLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5lZGl0UHJvZmlsZXtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5cbmgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm5nLWludmFsaWQubmctdG91Y2hlZC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5oZWFkZXIge1xuICAgb3BhY2l0eTogMC44O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgcGFkZGluZzogMDtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICB3aWR0aDogNjAlO1xuICAgbWFyZ2luOiBhdXRvO1xuICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbiNmb3JtUm93IHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMjFweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggMjFweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/component/user-profile/user-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/user-profile/user-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_service_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/alertify.service */ "./src/app/service/alertify.service.ts");
/* harmony import */ var _validators_custom_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validators/custom-validators */ "./src/app/validators/custom-validators.ts");







let UserProfileComponent = class UserProfileComponent {
    constructor(alertify, formBuilder, router, authService) {
        this.alertify = alertify;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.profileForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.getUserDetails();
        this.createUserProfileForm();
        document.body.classList.add('book-list-background');
    }
    createUserProfileForm() {
        this.profileForm = this.formBuilder.group({
            name: ['', _validators_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].patternValidator(/^[a-zA-Z ]*$/, { hasOnlyLetters: true })],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
        });
    }
    getUserDetails() {
        this.userId = this.authService.decodedToken.nameid;
        this.authService.getUserById(this.userId).subscribe(user => {
            this.currentUser = user;
            this.profileForm.patchValue({
                name: this.currentUser.name,
                username: this.currentUser.username,
                email: this.currentUser.email
            });
        });
    }
    saveUserData() {
        this.currentUser = this.profileForm.value;
        this.authService.updateUser(this.userId, this.currentUser).subscribe(_ => {
            localStorage.setItem('loggedInUser', this.profileForm.value.username);
            this.authService.changeLoggedInUser(this.profileForm.value.username);
            this.router.navigate(['/books']);
        }, error => this.alertify.error(error));
    }
    goBack() {
        this.router.navigate(['/books']);
    }
    ngOnDestroy() {
        document.body.classList.remove('book-list-background');
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: src_app_service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/user-profile/user-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.component.css */ "./src/app/component/user-profile/user-profile.component.css")).default]
    })
], UserProfileComponent);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Numans');\n\n#login {\n  background-image: url('https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_960_720.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n}\n\n.container {\n  height: 100%;\n  align-content: center;\n}\n\n.card {\n  height: 370px;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 400px;\n  background-color: rgba(0,0,0,0.7) !important;\n}\n\n.card-header h3 {\n  color: white;\n}\n\n.input-group-prepend span {\n  width: 50px;\n  background-color: #FFC312;\n  color: black;\n  border: 0 !important;\n}\n\ninput:focus {\n  outline: 0 0 0 0 !important;\n  box-shadow: 0 0 0 0 !important;\n}\n\n.remember {\n  color: white;\n}\n\n.remember input {\n    width: 20px;\n    height: 20px;\n    margin-left: 15px;\n    margin-right: 5px;\n  }\n\n.login_btn {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n  width: 155px;\n}\n\n.login_btn:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439;\n  }\n\n.links {\n  color: white;\n}\n\n.links a {\n    margin-left: 10px;\n  }\n\n.subLinks{\n    color: black;\n    font-size:14px;\n    font-weight:600;\n}\n\n.cssload-container {\n  position: relative;\n}\n\n.cssload-whirlpool,\n.cssload-whirlpool::before,\n.cssload-whirlpool::after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  border: 1px solid rgb(204,204,204);\n  border-left-color: rgb(0,0,0);\n  border-radius: 974px;\n\n  -webkit-border-radius: 974px;\n  -moz-border-radius: 974px;\n}\n\n.cssload-whirlpool {\n  margin: -24px 0 0 -24px;\n  height: 49px;\n  width: 49px;\n  animation: cssload-rotate 1150ms linear infinite;\n  -o-animation: cssload-rotate 1150ms linear infinite;\n  \n  -webkit-animation: cssload-rotate 1150ms linear infinite;\n  -moz-animation: cssload-rotate 1150ms linear infinite;\n}\n\n.cssload-whirlpool::before {\n    content: \"\";\n    margin: -22px 0 0 -22px;\n    height: 43px;\n    width: 43px;\n    animation: cssload-rotate 1150ms linear infinite;\n    -o-animation: cssload-rotate 1150ms linear infinite;\n\n    -webkit-animation: cssload-rotate 1150ms linear infinite;\n    -moz-animation: cssload-rotate 1150ms linear infinite;\n  }\n\n.cssload-whirlpool::after {\n    content: \"\";\n    margin: -28px 0 0 -28px;\n    height: 55px;\n    width: 55px;\n    animation: cssload-rotate 2300ms linear infinite;\n    -o-animation: cssload-rotate 2300ms linear infinite;\n\n    -webkit-animation: cssload-rotate 2300ms linear infinite;\n    -moz-animation: cssload-rotate 2300ms linear infinite;\n  }\n\n@keyframes cssload-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes cssload-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n.ng-invalid.ng-touched.form-control {\n  border: 1px solid red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDs7QUFFN0Q7RUFDRSxpR0FBaUc7RUFDakcsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDRDQUE0QztBQUM5Qzs7QUFHQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUU7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0FBRUY7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUU7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2Qjs7QUFFRjtFQUNFLFlBQVk7QUFDZDs7QUFFRTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFRjtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0NBQWtDO0VBQ2xDLDZCQUE2QjtFQUM3QixvQkFBb0I7O0VBRXBCLDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnREFBZ0Q7RUFDaEQsbURBQW1EOztFQUVuRCx3REFBd0Q7RUFDeEQscURBQXFEO0FBQ3ZEOztBQUVFO0lBQ0UsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLGdEQUFnRDtJQUNoRCxtREFBbUQ7O0lBRW5ELHdEQUF3RDtJQUN4RCxxREFBcUQ7RUFDdkQ7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0RBQWdEO0lBQ2hELG1EQUFtRDs7SUFFbkQsd0RBQXdEO0lBQ3hELHFEQUFxRDtFQUN2RDs7QUFJRjtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBY0E7RUFDRTtJQUNFLGlDQUFpQztFQUNuQztBQUNGOztBQU9BO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW1hbnMnKTtcblxuI2xvZ2luIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE3LzA4LzA2LzIyLzAxL2Jvb2tzLTI1OTY4MDlfOTYwXzcyMC5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiAzNzBweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNykgIWltcG9ydGFudDtcbn1cblxuXG4uY2FyZC1oZWFkZXIgaDMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuLmlucHV0LWdyb3VwLXByZXBlbmQgc3BhbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDAgMCAwIDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xufVxuXG4ucmVtZW1iZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiAgLnJlbWVtYmVyIGlucHV0IHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cblxuLmxvZ2luX2J0biB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU3ZTM0O1xuICBib3JkZXItY29sb3I6ICMxYzc0MzA7XG4gIHdpZHRoOiAxNTVweDtcbn1cblxuICAubG9naW5fYnRuOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ5ZDQ0O1xuICAgIGJvcmRlci1jb2xvcjogIzM5ODQzOTtcbiAgfVxuXG4ubGlua3Mge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiAgLmxpbmtzIGEge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbi5zdWJMaW5rc3tcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xufVxuXG4uY3NzbG9hZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jc3Nsb2FkLXdoaXJscG9vbCxcbi5jc3Nsb2FkLXdoaXJscG9vbDo6YmVmb3JlLFxuLmNzc2xvYWQtd2hpcmxwb29sOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNCwyMDQsMjA0KTtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigwLDAsMCk7XG4gIGJvcmRlci1yYWRpdXM6IDk3NHB4O1xuXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOTc0cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogOTc0cHg7XG59XG5cbi5jc3Nsb2FkLXdoaXJscG9vbCB7XG4gIG1hcmdpbjogLTI0cHggMCAwIC0yNHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG4gIHdpZHRoOiA0OXB4O1xuICBhbmltYXRpb246IGNzc2xvYWQtcm90YXRlIDExNTBtcyBsaW5lYXIgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUgMTE1MG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZSAxMTUwbXMgbGluZWFyIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUgMTE1MG1zIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuICAuY3NzbG9hZC13aGlybHBvb2w6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBtYXJnaW46IC0yMnB4IDAgMCAtMjJweDtcbiAgICBoZWlnaHQ6IDQzcHg7XG4gICAgd2lkdGg6IDQzcHg7XG4gICAgYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZSAxMTUwbXMgbGluZWFyIGluZmluaXRlO1xuICAgIC1vLWFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUgMTE1MG1zIGxpbmVhciBpbmZpbml0ZTtcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZSAxMTUwbXMgbGluZWFyIGluZmluaXRlO1xuICAgIC1tb3otYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZSAxMTUwbXMgbGluZWFyIGluZmluaXRlO1xuICB9XG5cbiAgLmNzc2xvYWQtd2hpcmxwb29sOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBtYXJnaW46IC0yOHB4IDAgMCAtMjhweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgd2lkdGg6IDU1cHg7XG4gICAgYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZSAyMzAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgIC1vLWFuaW1hdGlvbjogY3NzbG9hZC1yb3RhdGUgMjMwMG1zIGxpbmVhciBpbmZpbml0ZTtcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZSAyMzAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgIC1tb3otYW5pbWF0aW9uOiBjc3Nsb2FkLXJvdGF0ZSAyMzAwbXMgbGluZWFyIGluZmluaXRlO1xuICB9XG5cblxuXG5Aa2V5ZnJhbWVzIGNzc2xvYWQtcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5ALW8ta2V5ZnJhbWVzIGNzc2xvYWQtcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5ALW1zLWtleWZyYW1lcyBjc3Nsb2FkLXJvdGF0ZSB7XG4gIDEwMCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBjc3Nsb2FkLXJvdGF0ZSB7XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgY3NzbG9hZC1yb3RhdGUge1xuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/alertify.service */ "./src/app/service/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");







let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(fb, authService, alertify, router) {
        this.fb = fb;
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.isSubmitting = false;
    }
    ngOnInit() {
        document.body.className = 'hidescrollbar';
        this.createForgotPasswordForm();
    }
    createForgotPasswordForm() {
        this.forgotPasswordForm = this.fb.group({
            username: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
        });
    }
    resetPassword() {
        this.isSubmitting = true;
        this.authService.resetPassword(this.forgotPasswordForm.value).subscribe(() => {
            this.router.navigateByUrl('/login');
            this.alertify.success('Check your mail for the new password');
        }, error => {
            this.alertify.error(error);
        });
    }
    ngOnDestroy() {
        document.body.className = '';
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(2000)
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background-color: black;\n}\n.hidden {\n  display: none !important;\n}\n.container {\n  height: 100vh;\n}\n#nav-style {\n visibility:hidden !important;\n}\n#landing-header {\n  z-index: 1;\n  text-align: center;\n  padding: 3%;\n  background: rgba(5, 5, 5, 0.5);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n#landing-header h3 {\n    color: white;\n    font-size:30px;\n  }\n.slideshow {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.slideshow li {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    opacity: 0;\n    z-index: 0;\n    -webkit-animation: imageAnimation 50s linear infinite;\n            animation: imageAnimation 50s linear infinite;\n  }\n.slideshow li:nth-child(1) {\n      background-image: url(https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg)\n    }\n.slideshow li:nth-child(2) {\n      background-image: url(https://blog.studocu.com/wp-content/uploads/2017/08/best-books-book-youll-ever-read.jpg);\n      -webkit-animation-delay: 10s;\n              animation-delay: 10s;\n    }\n.slideshow li:nth-child(3) {\n      background-image: url(http://blogs.smithsonianmag.com/smartnews/files/2013/06/06_17_2013_book-smell-e1371501750113.jpg);\n      -webkit-animation-delay: 20s;\n              animation-delay: 20s;\n    }\n.slideshow li:nth-child(4) {\n      background-image: url(https://assets.entrepreneur.com/content/3x2/2000/20190102161219-GettyImages-904000456.jpeg?width=700&crop=2:1);\n      -webkit-animation-delay: 30s;\n              animation-delay: 30s;\n    }\n.slideshow li:nth-child(5) {\n      background-image: url(https://cdn.pixabay.com/photo/2015/09/09/20/22/book-933088_960_720.jpg);\n      -webkit-animation-delay: 40s;\n              animation-delay: 40s;\n    }\n@-webkit-keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n\n  10% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n\n  20% {\n    opacity: 1\n  }\n\n  30% {\n    opacity: 0\n  }\n}\n@keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n\n  10% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n\n  20% {\n    opacity: 1\n  }\n\n  30% {\n    opacity: 0\n  }\n}\n/* Older browser support - .no-cssanimations class added by modernizr */\n.no-cssanimations .slideshow li {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7QUFFRTtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0FBRUY7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjtBQUVFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsVUFBVTtJQUNWLHFEQUE2QztZQUE3Qyw2Q0FBNkM7RUFDL0M7QUFFRTtNQUNFO0lBQ0Y7QUFFQTtNQUNFLDhHQUE4RztNQUM5Ryw0QkFBb0I7Y0FBcEIsb0JBQW9CO0lBQ3RCO0FBRUE7TUFDRSx1SEFBdUg7TUFDdkgsNEJBQW9CO2NBQXBCLG9CQUFvQjtJQUN0QjtBQUVBO01BQ0Usb0lBQW9JO01BQ3BJLDRCQUFvQjtjQUFwQixvQkFBb0I7SUFDdEI7QUFFQTtNQUNFLDZGQUE2RjtNQUM3Riw0QkFBb0I7Y0FBcEIsb0JBQW9CO0lBQ3RCO0FBRUo7RUFDRTtJQUNFLFVBQVU7SUFDViwwQ0FBa0M7WUFBbEMsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsVUFBVTtJQUNWLDJDQUFtQztZQUFuQyxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRTtFQUNGOztFQUVBO0lBQ0U7RUFDRjtBQUNGO0FBbEJBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMENBQWtDO1lBQWxDLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLFVBQVU7SUFDViwyQ0FBbUM7WUFBbkMsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0U7RUFDRjs7RUFFQTtJQUNFO0VBQ0Y7QUFDRjtBQUVBLHVFQUF1RTtBQUN2RTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbiNuYXYtc3R5bGUge1xuIHZpc2liaWxpdHk6aGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbiNsYW5kaW5nLWhlYWRlciB7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMyU7XG4gIGJhY2tncm91bmQ6IHJnYmEoNSwgNSwgNSwgMC41KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuICAjbGFuZGluZy1oZWFkZXIgaDMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6MzBweDtcbiAgfVxuXG4uc2xpZGVzaG93IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuICAuc2xpZGVzaG93IGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogMDtcbiAgICBhbmltYXRpb246IGltYWdlQW5pbWF0aW9uIDUwcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cblxuICAgIC5zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDEpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3RoZXdyaXRlbGlmZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvSG93LXRvLWZvcm1hdC1hLWJvb2suanBnKVxuICAgIH1cblxuICAgIC5zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Jsb2cuc3R1ZG9jdS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDgvYmVzdC1ib29rcy1ib29rLXlvdWxsLWV2ZXItcmVhZC5qcGcpO1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxMHM7XG4gICAgfVxuXG4gICAgLnNsaWRlc2hvdyBsaTpudGgtY2hpbGQoMykge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly9ibG9ncy5zbWl0aHNvbmlhbm1hZy5jb20vc21hcnRuZXdzL2ZpbGVzLzIwMTMvMDYvMDZfMTdfMjAxM19ib29rLXNtZWxsLWUxMzcxNTAxNzUwMTEzLmpwZyk7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IDIwcztcbiAgICB9XG5cbiAgICAuc2xpZGVzaG93IGxpOm50aC1jaGlsZCg0KSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9hc3NldHMuZW50cmVwcmVuZXVyLmNvbS9jb250ZW50LzN4Mi8yMDAwLzIwMTkwMTAyMTYxMjE5LUdldHR5SW1hZ2VzLTkwNDAwMDQ1Ni5qcGVnP3dpZHRoPTcwMCZjcm9wPTI6MSk7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IDMwcztcbiAgICB9XG5cbiAgICAuc2xpZGVzaG93IGxpOm50aC1jaGlsZCg1KSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8wOS8wOS8yMC8yMi9ib29rLTkzMzA4OF85NjBfNzIwLmpwZyk7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IDQwcztcbiAgICB9XG5cbkBrZXlmcmFtZXMgaW1hZ2VBbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgMTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG5cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cblxuICAzMCUge1xuICAgIG9wYWNpdHk6IDBcbiAgfVxufVxuXG4vKiBPbGRlciBicm93c2VyIHN1cHBvcnQgLSAubm8tY3NzYW5pbWF0aW9ucyBjbGFzcyBhZGRlZCBieSBtb2Rlcm5penIgKi9cbi5uby1jc3NhbmltYXRpb25zIC5zbGlkZXNob3cgbGkge1xuICBvcGFjaXR5OiAxO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.title = 'Welcome to Books App';
        document.querySelector('app-nav-menu').setAttribute('style', 'display:none;');
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Numans');\n\n#login {\n  background-image: url('https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_960_720.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n}\n\n.container {\n  height: 100%;\n  align-content: center;\n}\n\n.card {\n  height: 370px;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 400px;\n  background-color: rgba(0,0,0,0.7) !important;\n}\n\n.card-header h3 {\n  color: white;\n}\n\n.input-group-prepend span {\n  width: 50px;\n  background-color: #FFC312;\n  color: black;\n  border: 0 !important;\n}\n\ninput:focus {\n  outline: 0 0 0 0 !important;\n  box-shadow: 0 0 0 0 !important;\n}\n\n.remember input {\n    width: 20px;\n    height: 20px;\n    margin-left: 15px;\n    margin-right: 5px;\n  }\n\n.login_btn {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n  width: 20%;\n}\n\n.login_btn:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439;\n  }\n\n.links {\n  color: white;\n}\n\n.links a {\n    margin-left: 10px;\n  }\n\n.subLinks{\n    color: black;\n    font-size:14px;\n    font-weight:600;\n}\n\n.ng-invalid.ng-touched.form-control {\n  border: 1px solid red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7O0FBRTdEO0VBQ0UsaUdBQWlHO0VBQ2pHLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw0Q0FBNEM7QUFDOUM7O0FBR0E7RUFDRSxZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUVFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztBQUVGO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVFO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7O0FBRUY7RUFDRSxZQUFZO0FBQ2Q7O0FBRUU7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUY7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW1hbnMnKTtcblxuI2xvZ2luIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE3LzA4LzA2LzIyLzAxL2Jvb2tzLTI1OTY4MDlfOTYwXzcyMC5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiAzNzBweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNykgIWltcG9ydGFudDtcbn1cblxuXG4uY2FyZC1oZWFkZXIgaDMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuLmlucHV0LWdyb3VwLXByZXBlbmQgc3BhbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDAgMCAwIDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xufVxuXG4gIC5yZW1lbWJlciBpbnB1dCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5cbi5sb2dpbl9idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlN2UzNDtcbiAgYm9yZGVyLWNvbG9yOiAjMWM3NDMwO1xuICB3aWR0aDogMjAlO1xufVxuXG4gIC5sb2dpbl9idG46aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDlkNDQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMzk4NDM5O1xuICB9XG5cbi5saW5rcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuICAubGlua3MgYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cblxuLnN1Ykxpbmtze1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6MTRweDtcbiAgICBmb250LXdlaWdodDo2MDA7XG59XG4ubmctaW52YWxpZC5uZy10b3VjaGVkLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/alertify.service */ "./src/app/service/alertify.service.ts");






let LoginComponent = class LoginComponent {
    constructor(formBuilder, authService, router, alertify) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
        document.body.className = 'hidescrollbar';
    }
    ngOnInit() {
        this.authService.logout();
        this.loginForm = this.formBuilder.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    loginUser() {
        this.authService.loginUser(this.loginForm.value).subscribe(user => {
            //localStorage.setItem('token', user.token);
            this.authService.decodeToken();
            //this.authService.changeLoggedInUser(user.username);
            this.router.navigate(['/books']);
            this.alertify.success('Successfully logged in');
        }, _ => this.alertify.error('Invalid username or password'));
    }
    ngOnDestroy() {
        document.body.className = '';
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/model/book/book.ts":
/*!************************************!*\
  !*** ./src/app/model/book/book.ts ***!
  \************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Book {
}


/***/ }),

/***/ "./src/app/model/user/user-rating.ts":
/*!*******************************************!*\
  !*** ./src/app/model/user/user-rating.ts ***!
  \*******************************************/
/*! exports provided: UserRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRating", function() { return UserRating; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserRating {
}


/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n}\n\nhtml {\n  font-size: 14px;\n}\n\n@media (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n\n.box-shadow {\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\n}\n\n@media (min-width: 768px) {\n  .navbar-collapse.collapse {\n    display: flex !important\n  }\n}\n\n.dropdown-toggle, .dropdown-item{\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUNBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnRcbiAgfVxufVxuXG4uZHJvcGRvd24tdG9nZ2xlLCAuZHJvcGRvd24taXRlbXtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/alertify.service */ "./src/app/service/alertify.service.ts");




let NavMenuComponent = class NavMenuComponent {
    constructor(authService, alertify) {
        this.authService = authService;
        this.alertify = alertify;
        this.isExpanded = false;
    }
    ngOnInit() {
        this.authService.currentLoggedInUser.subscribe(loggedInUser => {
            this.loggedInUser = loggedInUser;
        });
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    loggedIn() {
        return this.authService.isLoggedIn();
    }
    logout() {
        this.authService.logout();
        this.alertify.message('User logged out');
        window.location.href = '/books';
    }
    testUserRoles() {
        this.authService.roleMatch('Admin,Moderator');
    }
};
NavMenuComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] }
];
NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/service/alertify.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/alertify.service.ts ***!
  \*********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alertifyjs */ "./node_modules/alertifyjs/build/alertify.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_2__);



let AlertifyService = class AlertifyService {
    constructor() { }
    confirm(message, okCallback, cancelCallback = () => { }) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["confirm"](message, (e) => {
            if (e) {
                okCallback();
            }
            else {
                cancelCallback();
            }
        });
    }
    success(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["success"](message);
    }
    error(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["error"](message);
    }
    warning(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["warning"](message);
    }
    message(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["message"](message);
    }
};
AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertifyService);



/***/ }),

/***/ "./src/app/service/auth-guard-child.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/auth-guard-child.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardChild", function() { return AuthGuardChild; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alertify.service */ "./src/app/service/alertify.service.ts");





let AuthGuardChild = class AuthGuardChild {
    constructor(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
    }
    canActivate(next) {
        const roles = next.data.roles;
        if (roles) {
            const match = this.authService.roleMatch(roles);
            if (match) {
                return true;
            }
            else {
                this.router.navigate(['books']);
                this.alertify.error('You are not authorized to access this area');
            }
        }
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/books']);
        return false;
    }
    canActivateChild() {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/books']);
        return false;
    }
};
AuthGuardChild.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuardChild = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardChild);



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alertify.service */ "./src/app/service/alertify.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let AuthService = class AuthService {
    constructor(http, alertify) {
        this.http = http;
        this.alertify = alertify;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/users';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        this.loggedInUser = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        this.currentLoggedInUser = this.loggedInUser.asObservable();
    }
    changeLoggedInUser(loggedInUser) {
        this.loggedInUser.next(loggedInUser);
    }
    registerUser(user) {
        return this.http.post(this.baseUrl, user);
    }
    loginUser(user) {
        return this.http.post(this.baseUrl + '/authenticate', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => {
            const user = response;
            if (user) {
                localStorage.setItem('token', user.token);
            }
        }));
    }
    getUserById(id) {
        return this.http.get(this.baseUrl + `/${id}`);
    }
    updateUser(id, user) {
        return this.http.put(this.baseUrl + `/${id}`, user);
    }
    isLoggedIn() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }
    decodeToken() {
        this.decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
        return this.decodedToken;
    }
    getToken() {
        return localStorage.getItem('token');
    }
    getUserRole() {
        if (this.isLoggedIn()) {
            return this.decodeToken().role;
        }
        return '';
    }
    roleMatch(allowedRoles) {
        let isMatch = false;
        if (this.isLoggedIn) {
            const userRole = this.decodedToken.role;
            if (allowedRoles.includes(userRole)) {
                isMatch = true;
            }
        }
        return isMatch;
    }
    resetPassword(userForPasswordRecorer) {
        console.log(this.baseUrl + '/forgotPassword');
        return this.http.post(this.baseUrl + '/forgotPassword', userForPasswordRecorer);
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        this.decodedToken = null;
    }
    getFavouriteBooks(userId) {
        return this.http.get(`${this.baseUrl}/${userId}/favouritebooks`);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/service/book.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/book.service.ts ***!
  \*****************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let BookService = class BookService {
    constructor(http) {
        this.http = http;
        this.backendBooksUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/books';
    }
    getBooks() {
        return this.http.get(this.backendBooksUrl);
    }
    getBookDetails(id) {
        return this.http.get(this.backendBooksUrl + `/${id}`);
    }
    addBook(book) {
        return this.http.post(this.backendBooksUrl, book);
    }
    updateBook(id, book) {
        return this.http.put(this.backendBooksUrl + `/${id}`, book);
    }
    deleteBook(id) {
        return this.http.delete(this.backendBooksUrl + `/${id}`);
    }
    sendBookRating(bookId, rating) {
        return this.http.post(this.backendBooksUrl + `/${bookId}` + '/ratings', rating);
    }
    getFilteredBooks(searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('searchText', searchText);
        return this.http.get(this.backendBooksUrl, { params: params });
    }
    addBookToFavourite(bookId, book) {
        return this.http.post(`${this.backendBooksUrl}/${bookId}/addtofavourite`, book);
    }
};
BookService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], BookService);



/***/ }),

/***/ "./src/app/service/comment.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/comment.service.ts ***!
  \********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CommentService = class CommentService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    addComment(bookId, comment) {
        return this.http.post(`${this.baseUrl}/api/books/${bookId}/comments`, comment);
    }
    deleteComment(commentId) {
        return this.http.delete(`${this.baseUrl}/api/comments/${commentId}`);
    }
    updateComment(comment, commentId) {
        return this.http.put(`${this.baseUrl}/api/comments/${commentId}`, comment);
    }
    getCommentsForApproval() {
        return this.http.get(this.baseUrl + '/api/comments');
    }
    approveComment(commentId) {
        return this.http.post(this.baseUrl + '/api/comments/approve/' + commentId, {});
    }
    rejectComment(commentId) {
        return this.http.post(this.baseUrl + '/api/comments/reject/' + commentId, {});
    }
};
CommentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommentService);



/***/ }),

/***/ "./src/app/service/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/service/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let ErrorInterceptor = class ErrorInterceptor {
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err.statusText);
            }
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                const applicationError = err.headers.get('Application-Error');
                if (applicationError) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(applicationError);
                }
                const serverError = err.error;
                let modalStateErrors = '';
                if (serverError.errors && typeof serverError.errors === 'object') {
                    for (const key in serverError.errors) {
                        if (serverError.errors[key]) {
                            modalStateErrors += serverError.errors[key] + '\n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(modalStateErrors || serverError || 'Server Error');
            }
        }));
    }
};
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);

const ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#login {\n  background-image: url('https://cdn.pixabay.com/photo/2015/11/19/21/11/knowledge-1052014_960_720.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n}\n\n.container {\n  height: 100%;\n  align-content: center;\n}\n\n.card {\n  height: 680px;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 400px;\n  background-color: rgba(0,0,0,0.7) !important;\n}\n\n.card-header h2 {\n  color: white;\n}\n\n.material-icons {\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.input-group-prepend span {\n  width: 50px;\n  background-color: #FFC312;\n  color: black;\n  border: 0 !important;\n}\n\ninput:focus {\n  outline: 0 0 0 0 !important;\n  box-shadow: 0 0 0 0 !important;\n}\n\n.remember input {\n    width: 20px;\n    height: 20px;\n    margin-left: 15px;\n    margin-right: 5px;\n  }\n\n.login_btn {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n  width: 100px;\n}\n\n.login_btn:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439;\n  }\n\n.links {\n  color: white;\n}\n\n.links a {\n    margin-left: 10px;\n  }\n\n.subLinks {\n  color: black;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.ng-invalid.ng-touched.form-control {\n  border: 1px solid red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxR0FBcUc7RUFDckcsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDRDQUE0QztBQUM5Qzs7QUFHQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUVFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztBQUVGO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVFO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7O0FBRUY7RUFDRSxZQUFZO0FBQ2Q7O0FBRUU7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUY7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE1LzExLzE5LzIxLzExL2tub3dsZWRnZS0xMDUyMDE0Xzk2MF83MjAuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogNjgwcHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIHdpZHRoOiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpICFpbXBvcnRhbnQ7XG59XG5cblxuLmNhcmQtaGVhZGVyIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmlucHV0LWdyb3VwLXByZXBlbmQgc3BhbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDAgMCAwIDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xufVxuXG4gIC5yZW1lbWJlciBpbnB1dCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5cbi5sb2dpbl9idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlN2UzNDtcbiAgYm9yZGVyLWNvbG9yOiAjMWM3NDMwO1xuICB3aWR0aDogMTAwcHg7XG59XG5cbiAgLmxvZ2luX2J0bjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0OWQ0NDtcbiAgICBib3JkZXItY29sb3I6ICMzOTg0Mzk7XG4gIH1cblxuLmxpbmtzIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4gIC5saW5rcyBhIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4uc3ViTGlua3Mge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/alertify.service */ "./src/app/service/alertify.service.ts");
/* harmony import */ var _validators_custom_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validators/custom-validators */ "./src/app/validators/custom-validators.ts");







let SignUpComponent = class SignUpComponent {
    constructor(alertify, formBuilder, router, authService) {
        this.alertify = alertify;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.errorMessage = [];
        this.submitted = false;
        document.body.className = 'hidescrollbar';
    }
    ngOnInit() {
        this.authService.logout();
        this.form = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _validators_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].patternValidator(/^[a-zA-Z ]*$/, { hasOnlyLetters: true }),
                ])],
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            ],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _validators_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].patternValidator(/\d/, { hasNumber: true }),
                    _validators_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                    _validators_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].patternValidator(/[a-z]/, { hasSmallCase: true }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
                ])
            ],
            confirmedPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        }, {
            validator: _validators_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].mustMatch('password', 'confirmedPassword')
        });
    }
    addUser() {
        const pswd = this.form.get('password').value;
        const confPswd = this.form.get('confirmedPassword').value;
        if (pswd === confPswd) {
            this.authService.registerUser(this.form.value).subscribe(_ => {
                this.router.navigate(['/login']);
                this.alertify.success('User successfully created');
            }, err => {
                this.alertify.error(err);
            });
        }
        else {
            this.alertify.error('Passwords are not the same!');
        }
    }
    resetForm() {
        this.submitted = false;
        this.form.reset();
    }
    ngOnDestroy() {
        document.body.className = '';
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")).default]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/app/validators/custom-validators.ts":
/*!*************************************************!*\
  !*** ./src/app/validators/custom-validators.ts ***!
  \*************************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CustomValidators {
    static patternValidator(regex, error) {
        return (control) => {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            // test the value of the control against the regexp supplied
            const valid = regex.test(control.value);
            // if true, return no error (no error), else return error passed in the second parameter
            return valid ? null : error;
        };
    }
    static mustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'http://localhost:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\.NET\BooksRevApp\BooksRevApp\BooksRevApp\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
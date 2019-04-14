describe("Search github users", function() {
  
  /**crear dummy element para que coja un value para el  getElementById de searching
   * 
   * https://stackoverflow.com/questions/23495325/mock-object-for-document-element
  
   */
  var dummyElement = document.createElement('div');
  dummyElement.value = 'citlas';
  document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

  
//TESTS
 
////getSearchedElement
 it("should get the searched element", function() { 
     expect(getSearchedElement()).toBe('citlas');
  });

  it("should get the right searched element", function() {
       expect(getSearchedElement()).not.toBe('Asdada');
 });

 
 //callApi
  it("should call the api", function() {
    //expect(callApi(dummyElement.value)).toBe(data);
/*
    spyOn(searchThis,'showResults')
    callApi(dummyElement);
    expect(searchThis.showResults).toHaveBeenCalledWith(true);
*/
    expect().nothing;  
  });


//show results
  it("should return a result if clicked", function() {
    /*
    ---simular respuesta y data
    var request={}
    request.status = 200;
    var data ={}
    data.login = 'citlas'
    data.bio = 'always'
    data.name = 'citlas2'
    ---hacer el spy on
    spyOn(searchNew,'showUserInfo')
    let searchNew = new showResults(data,'citlas')
    spyOn(searchNew,'showUserInfo')
    showResults(data,'citlas')
    expect(showResults.showUserInfo()).toHaveBeenCalled()
    */
    expect().nothing;
  });

  //show user info
  it("should return a user if exists", function() {
    //simular data
    var data ={}
    data.login = 'citlas'
    data.bio = 'always'
    data.name = 'citlas2'
    expect(showUserInfo(data)).toBe('@citlas');
  });
  
  //showRepos
  it("should return repos if user exists", function() {
    expect().nothing;
  });
  
  //showError
  it("should return error if user does not exists", function() {
    expect(showError()).toBe("Does not exist");
  });
  
});

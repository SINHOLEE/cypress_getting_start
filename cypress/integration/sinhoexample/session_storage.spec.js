/// <reference types="cypress"/>

context("Session Storage", () => {
	beforeEach(() => {
		cy.visit("http://localhost:1234");
	});
	afterEach(() => {
		sessionStorage.clear();
	});
	describe("세션스토리지 확인", () => {
		it("버튼이 있다.", () => {
			cy.get('[data-testid="session-btn"]').should("have.text", "click");
		});
		it("버튼을 누르기 전에는 세션에 키가 없다.", () => {
			cy.window().should(() => {
				expect(sessionStorage.getItem("key")).to.eq(null);
			});
		});
		it("버튼을 누르면 세션이 생긴다.", () => {
			cy.get('[data-testid="session-btn"]')
				.click()
				.should(() => {
					expect(sessionStorage.getItem("key")).to.eq("sinho");
				});
		});
	});
});

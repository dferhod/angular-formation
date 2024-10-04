import { ComponentFixture, TestBed } from "@angular/core/testing"
import { MytestComponent } from "./mytest.component"

describe('Tester MyTestComponent', () => {
    let fixture: ComponentFixture<MytestComponent>
    let component: MytestComponent
    let view: HTMLElement

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MytestComponent]
        }).compileComponents()
        fixture = TestBed.createComponent(MytestComponent)
        fixture.detectChanges()
        component = fixture.componentInstance
        view = fixture.nativeElement
    })

    it('Tester la propriété title est bien affichée dans la vue', () => {
        const h1 = view.querySelector('h1')
        expect(component.title).toBe('Mon App')
        expect(h1?.textContent).toContain(component.title)
    })
})
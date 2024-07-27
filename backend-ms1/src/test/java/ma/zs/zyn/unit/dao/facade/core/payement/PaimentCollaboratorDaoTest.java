package ma.zs.zyn.unit.dao.facade.core.payement;

import ma.zs.zyn.bean.core.payement.PaimentCollaborator;
import ma.zs.zyn.dao.facade.core.payement.PaimentCollaboratorDao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.BeforeEach;

import java.math.BigDecimal;
import java.util.List;

import java.util.stream.Collectors;
import java.util.stream.LongStream;
import java.util.stream.IntStream;
import java.time.LocalDateTime;

import ma.zs.zyn.bean.core.collaborator.Collaborator ;
import ma.zs.zyn.bean.core.coupon.Coupon ;
import ma.zs.zyn.bean.core.cloud.OffreCloudProvider ;
import ma.zs.zyn.bean.core.payement.PaimentCollaboratorState ;
import ma.zs.zyn.bean.core.payement.PaimentCollaboratorType ;
import ma.zs.zyn.bean.core.packaging.Packaging ;
import ma.zs.zyn.bean.core.collaborator.Country ;
import ma.zs.zyn.bean.core.collaborator.City ;
import ma.zs.zyn.bean.core.inscription.InscriptionCollaborator ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class PaimentCollaboratorDaoTest {

@Autowired
    private PaimentCollaboratorDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }


    @Test
    void shouldFindById(){
        Long id = 1L;
        PaimentCollaborator entity = new PaimentCollaborator();
        entity.setId(id);
        underTest.save(entity);
        PaimentCollaborator loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        PaimentCollaborator entity = new PaimentCollaborator();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        PaimentCollaborator loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<PaimentCollaborator> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<PaimentCollaborator> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        PaimentCollaborator given = constructSample(1);
        PaimentCollaborator saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private PaimentCollaborator constructSample(int i) {
		PaimentCollaborator given = new PaimentCollaborator();
        given.setCardHolder("cardHolder-"+i);
        given.setCardNumber("cardNumber-"+i);
        given.setExpirationDate("expirationDate-"+i);
        given.setCvc("cvc-"+i);
        given.setCountry(new Country(1L));
        given.setPostal("postal-"+i);
        given.setCity(new City(1L));
        given.setDescription("description-"+i);
        given.setAmountToPaid(BigDecimal.TEN);
        given.setStartDate(LocalDateTime.now());
        given.setEndDate(LocalDateTime.now());
        given.setConsumedEntity(BigDecimal.TEN);
        given.setConsumedProjet(BigDecimal.TEN);
        given.setConsumedAttribut(BigDecimal.TEN);
        given.setConsumedTokenInput(BigDecimal.TEN);
        given.setConsumedTokenOutput(BigDecimal.TEN);
        given.setTotal(BigDecimal.TEN);
        given.setBasic(BigDecimal.TEN);
        given.setDiscount(BigDecimal.TEN);
        given.setRemaining(BigDecimal.TEN);
        given.setPriceCloud(BigDecimal.TEN);
        given.setPaiementDate(LocalDateTime.now());
        given.setCollaborator(new Collaborator(1L));
        given.setPackaging(new Packaging(1L));
        given.setPaimentCollaboratorState(new PaimentCollaboratorState(1L));
        given.setPaimentCollaboratorType(new PaimentCollaboratorType(1L));
        given.setInscriptionCollaborator(new InscriptionCollaborator(1L));
        given.setCoupon(new Coupon(1L));
        given.setDeployAndTestOnLine(false);
        given.setOffreCloudProvider(new OffreCloudProvider(1L));
        return given;
    }

}

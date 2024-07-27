package ma.zs.zyn.unit.dao.facade.core.inscription;

import ma.zs.zyn.bean.core.inscription.InscriptionCollaborator;
import ma.zs.zyn.dao.facade.core.inscription.InscriptionCollaboratorDao;

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
import ma.zs.zyn.bean.core.packaging.PackagingPlan ;
import ma.zs.zyn.bean.core.inscription.InscriptionCollaboratorState ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class InscriptionCollaboratorDaoTest {

@Autowired
    private InscriptionCollaboratorDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }


    @Test
    void shouldFindById(){
        Long id = 1L;
        InscriptionCollaborator entity = new InscriptionCollaborator();
        entity.setId(id);
        underTest.save(entity);
        InscriptionCollaborator loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        InscriptionCollaborator entity = new InscriptionCollaborator();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        InscriptionCollaborator loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<InscriptionCollaborator> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<InscriptionCollaborator> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        InscriptionCollaborator given = constructSample(1);
        InscriptionCollaborator saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private InscriptionCollaborator constructSample(int i) {
		InscriptionCollaborator given = new InscriptionCollaborator();
        given.setDescription("description-"+i);
        given.setStartDate(LocalDateTime.now());
        given.setEndDate(LocalDateTime.now());
        given.setConsumedEntity(BigDecimal.TEN);
        given.setConsumedProjet(BigDecimal.TEN);
        given.setConsumedAttribut(BigDecimal.TEN);
        given.setConsumedTokenInput(BigDecimal.TEN);
        given.setConsumedTokenOutput(BigDecimal.TEN);
        given.setCollaborator(new Collaborator(1L));
        given.setPackagingPlan(new PackagingPlan(1L));
        given.setInscriptionCollaboratorState(new InscriptionCollaboratorState(1L));
        return given;
    }

}

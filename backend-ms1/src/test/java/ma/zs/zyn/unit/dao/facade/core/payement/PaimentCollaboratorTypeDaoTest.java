package ma.zs.zyn.unit.dao.facade.core.payement;

import ma.zs.zyn.bean.core.payement.PaimentCollaboratorType;
import ma.zs.zyn.dao.facade.core.payement.PaimentCollaboratorTypeDao;

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


import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class PaimentCollaboratorTypeDaoTest {

@Autowired
    private PaimentCollaboratorTypeDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }

    @Test
    void shouldFindByCode(){
        String code = "code-1";
        PaimentCollaboratorType entity = new PaimentCollaboratorType();
        entity.setCode(code);
        underTest.save(entity);
        PaimentCollaboratorType loaded = underTest.findByCode(code);
        assertThat(loaded.getCode()).isEqualTo(code);
    }

    @Test
    void shouldDeleteByCode() {
        String code = "code-12345678";
        int result = underTest.deleteByCode(code);

        PaimentCollaboratorType loaded = underTest.findByCode(code);
        assertThat(loaded).isNull();
        assertThat(result).isEqualTo(0);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        PaimentCollaboratorType entity = new PaimentCollaboratorType();
        entity.setId(id);
        underTest.save(entity);
        PaimentCollaboratorType loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        PaimentCollaboratorType entity = new PaimentCollaboratorType();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        PaimentCollaboratorType loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<PaimentCollaboratorType> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<PaimentCollaboratorType> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        PaimentCollaboratorType given = constructSample(1);
        PaimentCollaboratorType saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private PaimentCollaboratorType constructSample(int i) {
		PaimentCollaboratorType given = new PaimentCollaboratorType();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}

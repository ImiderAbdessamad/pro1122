package ma.zs.zyn.unit.dao.facade.core.packaging;

import ma.zs.zyn.bean.core.packaging.PackagingPlan;
import ma.zs.zyn.dao.facade.core.packaging.PackagingPlanDao;

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

import ma.zs.zyn.bean.core.packaging.Packaging ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class PackagingPlanDaoTest {

@Autowired
    private PackagingPlanDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }

    @Test
    void shouldFindByCode(){
        String code = "code-1";
        PackagingPlan entity = new PackagingPlan();
        entity.setCode(code);
        underTest.save(entity);
        PackagingPlan loaded = underTest.findByCode(code);
        assertThat(loaded.getCode()).isEqualTo(code);
    }

    @Test
    void shouldDeleteByCode() {
        String code = "code-12345678";
        int result = underTest.deleteByCode(code);

        PackagingPlan loaded = underTest.findByCode(code);
        assertThat(loaded).isNull();
        assertThat(result).isEqualTo(0);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        PackagingPlan entity = new PackagingPlan();
        entity.setId(id);
        underTest.save(entity);
        PackagingPlan loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        PackagingPlan entity = new PackagingPlan();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        PackagingPlan loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<PackagingPlan> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<PackagingPlan> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        PackagingPlan given = constructSample(1);
        PackagingPlan saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private PackagingPlan constructSample(int i) {
		PackagingPlan given = new PackagingPlan();
        given.setName("name-"+i);
        given.setCode("code-"+i);
        given.setPackaging(new Packaging(1L));
        given.setNumberOfMonth(i);
        given.setPrice(BigDecimal.TEN);
        given.setDescription("description-"+i);
        given.setMaxEntity(BigDecimal.TEN);
        given.setMaxProjet(BigDecimal.TEN);
        given.setMaxAttribut(BigDecimal.TEN);
        given.setMaxTokenInput(BigDecimal.TEN);
        given.setMaxTokenOutput(BigDecimal.TEN);
        return given;
    }

}

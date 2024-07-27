package ma.zs.zyn.unit.dao.facade.core.cloud;

import ma.zs.zyn.bean.core.cloud.OffreCloudProvider;
import ma.zs.zyn.dao.facade.core.cloud.OffreCloudProviderDao;

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

import ma.zs.zyn.bean.core.cloud.CloudProvider ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class OffreCloudProviderDaoTest {

@Autowired
    private OffreCloudProviderDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }

    @Test
    void shouldFindByCode(){
        String code = "code-1";
        OffreCloudProvider entity = new OffreCloudProvider();
        entity.setCode(code);
        underTest.save(entity);
        OffreCloudProvider loaded = underTest.findByCode(code);
        assertThat(loaded.getCode()).isEqualTo(code);
    }

    @Test
    void shouldDeleteByCode() {
        String code = "code-12345678";
        int result = underTest.deleteByCode(code);

        OffreCloudProvider loaded = underTest.findByCode(code);
        assertThat(loaded).isNull();
        assertThat(result).isEqualTo(0);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        OffreCloudProvider entity = new OffreCloudProvider();
        entity.setId(id);
        underTest.save(entity);
        OffreCloudProvider loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        OffreCloudProvider entity = new OffreCloudProvider();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        OffreCloudProvider loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<OffreCloudProvider> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<OffreCloudProvider> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        OffreCloudProvider given = constructSample(1);
        OffreCloudProvider saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private OffreCloudProvider constructSample(int i) {
		OffreCloudProvider given = new OffreCloudProvider();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        given.setDescription("description-"+i);
        given.setCloudProvider(new CloudProvider(1L));
        given.setPrice(BigDecimal.TEN);
        return given;
    }

}

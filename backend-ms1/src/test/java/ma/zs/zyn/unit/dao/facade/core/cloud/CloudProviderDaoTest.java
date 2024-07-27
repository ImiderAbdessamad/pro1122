package ma.zs.zyn.unit.dao.facade.core.cloud;

import ma.zs.zyn.bean.core.cloud.CloudProvider;
import ma.zs.zyn.dao.facade.core.cloud.CloudProviderDao;

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
public class CloudProviderDaoTest {

@Autowired
    private CloudProviderDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }

    @Test
    void shouldFindByCode(){
        String code = "code-1";
        CloudProvider entity = new CloudProvider();
        entity.setCode(code);
        underTest.save(entity);
        CloudProvider loaded = underTest.findByCode(code);
        assertThat(loaded.getCode()).isEqualTo(code);
    }

    @Test
    void shouldDeleteByCode() {
        String code = "code-12345678";
        int result = underTest.deleteByCode(code);

        CloudProvider loaded = underTest.findByCode(code);
        assertThat(loaded).isNull();
        assertThat(result).isEqualTo(0);
    }

    @Test
    void shouldFindById(){
        Long id = 1L;
        CloudProvider entity = new CloudProvider();
        entity.setId(id);
        underTest.save(entity);
        CloudProvider loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        CloudProvider entity = new CloudProvider();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        CloudProvider loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<CloudProvider> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<CloudProvider> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        CloudProvider given = constructSample(1);
        CloudProvider saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private CloudProvider constructSample(int i) {
		CloudProvider given = new CloudProvider();
        given.setCode("code-"+i);
        given.setLibelle("libelle-"+i);
        return given;
    }

}

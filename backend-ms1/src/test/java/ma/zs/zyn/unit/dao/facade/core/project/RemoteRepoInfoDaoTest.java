package ma.zs.zyn.unit.dao.facade.core.project;

import ma.zs.zyn.bean.core.project.RemoteRepoInfo;
import ma.zs.zyn.dao.facade.core.project.RemoteRepoInfoDao;

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
import ma.zs.zyn.bean.core.project.RemoteRepoType ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class RemoteRepoInfoDaoTest {

@Autowired
    private RemoteRepoInfoDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }


    @Test
    void shouldFindById(){
        Long id = 1L;
        RemoteRepoInfo entity = new RemoteRepoInfo();
        entity.setId(id);
        underTest.save(entity);
        RemoteRepoInfo loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        RemoteRepoInfo entity = new RemoteRepoInfo();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        RemoteRepoInfo loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<RemoteRepoInfo> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<RemoteRepoInfo> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        RemoteRepoInfo given = constructSample(1);
        RemoteRepoInfo saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private RemoteRepoInfo constructSample(int i) {
		RemoteRepoInfo given = new RemoteRepoInfo();
        given.setTitle("title-"+i);
        given.setUsername("username-"+i);
        given.setToken("token-"+i);
        given.setName("name-"+i);
        given.setRemoteRepoType(new RemoteRepoType(1L));
        given.setCollaborator(new Collaborator(1L));
        return given;
    }

}

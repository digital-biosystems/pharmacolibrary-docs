<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;Hippocastani semen&quot;}]"></div>

# Hippocastani semen

- **generic name:** Hippocastani semen
- **ATC codes:** `C05CX03`
- **DrugBank:** [DB13195](https://go.drugbank.com/drugs/DB13195) · **PubChem:** not captured
- **groups:** investigational

## About

**Description.** Horse chestnut is a flowering plant commonly referred to as *Aesculus hippocastanum*. Unprocessed horse chestnut seeds contain a toxin called esculin (also spelled aesculin) that increases the risk of bleeding due to anticoagulant actions. These seeds are processed to remove the toxic component, resulting in purified horse chestnut seed extract (HCSE) [A27200]. The active component of this pure extract is escin, or aescin, that promotes blood circulation through the veins and reduces swelling and inflammation of the legs. Its therapeutic potential in the treatment of chronic venous insufficiency is being studied.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 02:52 | 3:56:58 | 0/0/0 | 0/2/0 | 0/0/0 | 561,045/24,002 | ollama / qwen3.8:27b-mtp-q8_0 | 57 | 26/31 | 50/7 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Koele_2025](drugs/drug_hippocastani_semen/pd_Koele_2025_TTP.md) | Koele SE et al., Population pharmacokinetics and exposur…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf076](https://doi.org/10.1093/jac/dkaf076) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Koele_2025](drugs/drug_hippocastani_semen/pd_Koele_2025_cfu.md) | Koele SE et al., Population pharmacokinetics and exposur…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf076](https://doi.org/10.1093/jac/dkaf076) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | [Minja_2025](drugs/drug_hippocastani_semen/pd_Minja_2025_TTP.md) | Minja LT et al., Delpazolid in combination with bedaquil…, The Lancet. Infectious dise… (2025) | [10.1016/S1473-3099(25)00289-0](https://doi.org/10.1016/S1473-3099(25)00289-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Minja_2025](drugs/drug_hippocastani_semen/pd_Minja_2025_unknown.md) | Minja LT et al., Delpazolid in combination with bedaquil…, The Lancet. Infectious dise… (2025) | [10.1016/S1473-3099(25)00289-0](https://doi.org/10.1016/S1473-3099(25)00289-0) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20186 matched, 351 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_122 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Akula_2026.pdf` | Akula SJ et al., Development and Validation of the Bioan…, Biomedical chromatography :… (2026) | pd | 5 | [10.1002/bmc.70459](https://doi.org/10.1002/bmc.70459) | [42010968](https://www.ncbi.nlm.nih.gov/pubmed/42010968) | metadata signals extractable PD data (PK/PD) |
| `Anderson_1992.pdf` | Anderson GM et al., Platelet dense granule release reaction…, Analytical biochemistry (1992) | pd | 5 | [10.1016/s0003-2697(05)80011-9](https://doi.org/10.1016/s0003-2697(05)80011-9) | [1456443](https://www.ncbi.nlm.nih.gov/pubmed/1456443) | metadata signals extractable PD data (EC50) |
| `Bae_2025.pdf` | Bae JS et al., Serum and Tissue Kinetics of Oxolinic A…, Journal of fish diseases (2025) | pd | 5 | [10.1111/jfd.14116](https://doi.org/10.1111/jfd.14116) | [40135728](https://www.ncbi.nlm.nih.gov/pubmed/40135728) | metadata signals extractable PD data (PK/PD) |
| `Bardhi_2025.pdf` | Bardhi A et al., A Laboratory Protocol for Routine Thera…, Antibiotics (Basel, Switzer… (2025) | pd | 5 | [10.3390/antibiotics14040390](https://doi.org/10.3390/antibiotics14040390) | [40298550](https://www.ncbi.nlm.nih.gov/pubmed/40298550) | metadata signals extractable PD data (PK/PD) |
| `Behrens_2026.pdf` | Behrens E et al., Prospective study of pharmacokinetics o…, Annals of intensive care (2026) | pd | 5 | [10.1016/j.aicoj.2026.100082](https://doi.org/10.1016/j.aicoj.2026.100082) | [42212005](https://www.ncbi.nlm.nih.gov/pubmed/42212005) | metadata signals extractable PD data (PK/PD) |
| `Bernstein_2008.pdf` | Bernstein G, Delivery of insulin to the buccal mucos…, Expert opinion on drug deli… (2008) | pd | 5 | [10.1517/17425247.5.9.1047](https://doi.org/10.1517/17425247.5.9.1047) | [18754753](https://www.ncbi.nlm.nih.gov/pubmed/18754753) | metadata signals extractable PD data (PK-PD) |
| `Castel-Branco_2005.pdf` | Castel-Branco MM et al., Lamotrigine pharmacokinetic/pharmacodyn…, Fundamental & clinical phar… (2005) | pd | 5 | [10.1111/j.1472-8206.2005.00380.x](https://doi.org/10.1111/j.1472-8206.2005.00380.x) | [16313279](https://www.ncbi.nlm.nih.gov/pubmed/16313279) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Chi_2025.pdf` | Chi H et al., Development of a validated and sensitiv…, Journal of chromatography.… (2025) | pd | 5 | [10.1016/j.jchromb.2025.124770](https://doi.org/10.1016/j.jchromb.2025.124770) | [40902417](https://www.ncbi.nlm.nih.gov/pubmed/40902417) | metadata signals extractable PD data (exposure-response) |
| `Eryavuz_2026.pdf` | Eryavuz Onmaz D et al., LC-MS/MS-Based Monitoring of Pregabalin…, Biomedical chromatography :… (2026) | pd | 5 | [10.1002/bmc.70539](https://doi.org/10.1002/bmc.70539) | [42394231](https://www.ncbi.nlm.nih.gov/pubmed/42394231) | metadata signals extractable PD data (Exposure-Response) |
| `Esmaeili_2022.pdf` | Esmaeili T et al., Rivaroxaban population pharmacokinetic…, Journal of clinical pharmac… (2022) | pd | 5 | [10.1111/jcpt.13673](https://doi.org/10.1111/jcpt.13673) | [35504629](https://www.ncbi.nlm.nih.gov/pubmed/35504629) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Feng_2025.pdf` | Feng C et al., Population pharmacokinetics and pharmac…, European journal of clinica… (2025) | pd | 5 | [10.1007/s00228-025-03910-x](https://doi.org/10.1007/s00228-025-03910-x) | [40884551](https://www.ncbi.nlm.nih.gov/pubmed/40884551) | metadata signals extractable PD data (PK/PD) |
| `He_2024.pdf` | He J et al., Determination of vancomycin and meropen…, Journal of mass spectrometr… (2024) | pd | 5 | [10.1002/jms.5041](https://doi.org/10.1002/jms.5041) | [38751321](https://www.ncbi.nlm.nih.gov/pubmed/38751321) | metadata signals extractable PD data (PK/PD) |
| `Huang_2022.pdf` | Huang A et al., PK-PD Modeling and Optimal Dosing Regim…, Antibiotics (Basel, Switzer… (2022) | pd | 5 | [10.3390/antibiotics11020283](https://doi.org/10.3390/antibiotics11020283) | [35203885](https://www.ncbi.nlm.nih.gov/pubmed/35203885) | metadata signals extractable PD data (PK-PD) |
| `Lantz_2026.pdf` | Lantz AM et al., Prevotella bivia Influences Antiretrovi…, Clinical and translational… (2026) | pd | 5 | [10.1111/cts.70597](https://doi.org/10.1111/cts.70597) | [42148717](https://www.ncbi.nlm.nih.gov/pubmed/42148717) | metadata signals extractable PD data (PK/PD) |
| `Li_2025.pdf` | Li X et al., Rapid quantification and PK-PD modeling…, Frontiers in veterinary sci… (2025) | pd | 5 | [10.3389/fvets.2025.1543086](https://doi.org/10.3389/fvets.2025.1543086) | [40104546](https://www.ncbi.nlm.nih.gov/pubmed/40104546) | metadata signals extractable PD data (PK-PD) |
| `Love_2015.pdf` | Love EJ et al., Pharmacokinetic-pharmacodynamic modelli…, Veterinary anaesthesia and… (2015) | pd | 5 | [10.1111/vaa.12165](https://doi.org/10.1111/vaa.12165) | [24735059](https://www.ncbi.nlm.nih.gov/pubmed/24735059) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Martínez_2025.pdf` | Martínez J et al., Pharmacokinetics of Doxycycline in Alpa…, Antibiotics (Basel, Switzer… (2025) | pd | 5 | [10.3390/antibiotics14030247](https://doi.org/10.3390/antibiotics14030247) | [40149058](https://www.ncbi.nlm.nih.gov/pubmed/40149058) | metadata signals extractable PD data (PK/PD) |
| `Minamijima_2024.pdf` | Minamijima Y et al., Evaluation of plasma and urine pharmaco…, Journal of veterinary pharm… (2024) | pd | 5 | [10.1111/jvp.13407](https://doi.org/10.1111/jvp.13407) | [37753811](https://www.ncbi.nlm.nih.gov/pubmed/37753811) | metadata signals extractable PD data (PK/PD) |
| `Morales_2025.pdf` | Morales Castro D et al., Propofol and Fentanyl Pharmacokinetics…, Annals of the American Thor… (2025) | pd | 5 | [10.1513/AnnalsATS.202407-795OC](https://doi.org/10.1513/AnnalsATS.202407-795OC) | [39383576](https://www.ncbi.nlm.nih.gov/pubmed/39383576) | metadata signals extractable PD data (PK/PD) |
| `Pizarro_2026.pdf` | Pizarro NU et al., Effect of flunixin meglumine on the pha…, The Veterinary record (2026) | pd | 5 | [10.1002/vetr.70473](https://doi.org/10.1002/vetr.70473) | [41834571](https://www.ncbi.nlm.nih.gov/pubmed/41834571) | metadata signals extractable PD data (PK/PD) |
| `Scott_2022.pdf` | Scott SC et al., Validation of a rapid liquid chromatogr…, Journal of pharmaceutical a… (2022) | pd | 5 | [10.1016/j.jpba.2021.114436](https://doi.org/10.1016/j.jpba.2021.114436) | [34735991](https://www.ncbi.nlm.nih.gov/pubmed/34735991) | metadata signals extractable PD data (exposure-response) |
| `Shi_1995.pdf` | Shi J et al., Kinetics and dynamics of sematilide, Therapeutic drug monitoring (1995) | pd | 5 | [10.1097/00007691-199510000-00001](https://doi.org/10.1097/00007691-199510000-00001) | [8585104](https://www.ncbi.nlm.nih.gov/pubmed/8585104) | metadata signals extractable PD data (Emax) |
| `Sitthiangkool_2026.pdf` | Sitthiangkool P et al., Pharmacokinetic Characteristics of Flor…, Animals : an open access jo… (2026) | pd | 5 | [10.3390/ani16040631](https://doi.org/10.3390/ani16040631) | [41751091](https://www.ncbi.nlm.nih.gov/pubmed/41751091) | metadata signals extractable PD data (PK/PD) |
| `Trozzi_2026.pdf` | Trozzi I et al., Accurate and Sensitive UHPLC-Tandem Mas…, Pharmaceutics (2026) | pd | 5 | [10.3390/pharmaceutics18030377](https://doi.org/10.3390/pharmaceutics18030377) | [41900863](https://www.ncbi.nlm.nih.gov/pubmed/41900863) | metadata signals extractable PD data (PK/PD) |
| `Zeng_2023.pdf` | Zeng Q et al., An integrated strategy to evaluate acti…, Journal of food and drug an… (2023) | pd | 5 | [10.38212/2224-6614.3477](https://doi.org/10.38212/2224-6614.3477) | [38526820](https://www.ncbi.nlm.nih.gov/pubmed/38526820) | metadata signals extractable PD data (sigmoid) |
| `Zhu_2023.pdf` | Zhu Y et al., Pharmacokinetic-pharmacodynamic (PK/PD)…, Journal of ethnopharmacology (2023) | pd | 5 | [10.1016/j.jep.2023.116589](https://doi.org/10.1016/j.jep.2023.116589) | [37142149](https://www.ncbi.nlm.nih.gov/pubmed/37142149) | metadata signals extractable PD data (PK/PD) |
| `Chhatwal_1992.pdf` | Chhatwal I et al., Isolation and characterization of draco…, Toxicon : official journal… (1992) | pd | 4 | [10.1016/0041-0101(92)90504-x](https://doi.org/10.1016/0041-0101(92)90504-x) | [1595081](https://www.ncbi.nlm.nih.gov/pubmed/1595081) | metadata signals extractable PD data (EC50) |
| `Fagoo_1985.pdf` | Fagoo M et al., Interaction of cardiodigin, endogenous…, Biochemical and biophysical… (1985) | pd | 4 | [10.1016/0006-291x(85)90187-1](https://doi.org/10.1016/0006-291x(85)90187-1) | [2990458](https://www.ncbi.nlm.nih.gov/pubmed/2990458) | metadata signals extractable PD data (EC50) |
| `Farias_2009.pdf` | Farias DF et al., Insecticidal action of sodium anacardat…, Journal of the American Mos… (2009) | pd | 4 | [10.2987/08-5851.1](https://doi.org/10.2987/08-5851.1) | [19852234](https://www.ncbi.nlm.nih.gov/pubmed/19852234) | metadata signals extractable PD data (EC50) |
| `González-Garza_1989.pdf` | González-Garza MT et al., [Reliability of the PEHPS culture mediu…, Archivos de investigacion m… (1989) | pd | 4 | not captured | [2548449](https://www.ncbi.nlm.nih.gov/pubmed/2548449) | metadata signals extractable PD data (IC50) |
| `Gorelik_2020.pdf` | Gorelik VS et al., Stimulated Raman scattering of light in…, Spectrochimica acta. Part A… (2020) | pd | 4 | [10.1016/j.saa.2020.118418](https://doi.org/10.1016/j.saa.2020.118418) | [32380431](https://www.ncbi.nlm.nih.gov/pubmed/32380431) | metadata signals extractable PD data (Emax) |
| `Gu_2024.pdf` | Gu D et al., Optimization of liquid fermentation con…, Preparative biochemistry &… (2024) | pd | 4 | [10.1080/10826068.2023.2297703](https://doi.org/10.1080/10826068.2023.2297703) | [38147976](https://www.ncbi.nlm.nih.gov/pubmed/38147976) | metadata signals extractable PD data (EC50) |
| `Hostetler_1986.pdf` | Hostetler KY et al., Purification of lysosomal phospholipase…, Biochemistry (1986) | pd | 4 | [10.1021/bi00369a017](https://doi.org/10.1021/bi00369a017) | [3790533](https://www.ncbi.nlm.nih.gov/pubmed/3790533) | metadata signals extractable PD data (IC50) |
| `Jonker_2008.pdf` | Jonker N et al., Screening of protein-ligand interaction…, Journal of chromatography. A (2008) | pd | 4 | [10.1016/j.chroma.2008.07.089](https://doi.org/10.1016/j.chroma.2008.07.089) | [18715568](https://www.ncbi.nlm.nih.gov/pubmed/18715568) | metadata signals extractable PD data (EC50) |
| `Le_2001.pdf` | Le Guével R et al., Streamlined beta-galactosidase assay fo…, BioTechniques (2001) | pd | 4 | [10.2144/01305st05](https://doi.org/10.2144/01305st05) | [11355334](https://www.ncbi.nlm.nih.gov/pubmed/11355334) | metadata signals extractable PD data (EC50) |
| `Lei_2010.pdf` | Lei S et al., Role of pseudopolymorphism on concentra…, Chemical communications (Ca… (2010) | pd | 4 | [10.1039/c0cc03445b](https://doi.org/10.1039/c0cc03445b) | [21060921](https://www.ncbi.nlm.nih.gov/pubmed/21060921) | metadata signals extractable PD data (concentrationeffect) |
| `Li_2022.pdf` | Li X et al., Cordycicadins A-D, Antifeedant Polyketi…, Organic letters (2022) | pd | 4 | [10.1021/acs.orglett.2c03432](https://doi.org/10.1021/acs.orglett.2c03432) | [36394522](https://www.ncbi.nlm.nih.gov/pubmed/36394522) | metadata signals extractable PD data (EC50) |
| `Liard_1995.pdf` | Liard F et al., Determination of the HIV protease inhib…, Journal of pharmaceutical a… (1995) | pd | 4 | [10.1016/0731-7085(95)01625-2](https://doi.org/10.1016/0731-7085(95)01625-2) | [8833977](https://www.ncbi.nlm.nih.gov/pubmed/8833977) | metadata signals extractable PD data (IC50) |
| `Liu_2023.pdf` | Liu Y et al., Antifungal Activity of Cadinane-Type Se…, Chemistry & biodiversity (2023) | pd | 4 | [10.1002/cbdv.202300879](https://doi.org/10.1002/cbdv.202300879) | [37691010](https://www.ncbi.nlm.nih.gov/pubmed/37691010) | metadata signals extractable PD data (EC50) |
| `Phelouzat_1993.pdf` | Phelouzat MA et al., Characterization of sinefungin-resistan…, Parasitology research (1993) | pd | 4 | [10.1007/BF00932511](https://doi.org/10.1007/BF00932511) | [8295906](https://www.ncbi.nlm.nih.gov/pubmed/8295906) | metadata signals extractable PD data (IC50) |
| `Schepp_1994.pdf` | Schepp W et al., Exendin-4 and exendin-(9-39)NH2: agonis…, European journal of pharmac… (1994) | pd | 4 | [10.1016/0922-4106(94)90085-x](https://doi.org/10.1016/0922-4106(94)90085-x) | [7851494](https://www.ncbi.nlm.nih.gov/pubmed/7851494) | metadata signals extractable PD data (EC50) |
| `Sierosławska_2010.pdf` | Sierosławska A et al., Toxicity of cyanobacterial bloom in the…, Environmental toxicology an… (2010) | pd | 4 | [10.1002/etc.86](https://doi.org/10.1002/etc.86) | [20821478](https://www.ncbi.nlm.nih.gov/pubmed/20821478) | metadata signals extractable PD data (EC50) |
| `Tang_2024.pdf` | Tang S et al., Immobilization of Coprinus comatus with…, Preparative biochemistry &… (2024) | pd | 4 | [10.1080/10826068.2024.2345838](https://doi.org/10.1080/10826068.2024.2345838) | [38648492](https://www.ncbi.nlm.nih.gov/pubmed/38648492) | metadata signals extractable PD data (EC50) |
| `Trikha_1994.pdf` | Trikha M et al., Purification and characterization of fi…, Toxicon : official journal… (1994) | pd | 4 | [10.1016/0041-0101(94)90310-7](https://doi.org/10.1016/0041-0101(94)90310-7) | [7725320](https://www.ncbi.nlm.nih.gov/pubmed/7725320) | metadata signals extractable PD data (EC50) |
| `Xu_2018.pdf` | Xu H et al., Triterpenoids with antioxidant activiti…, Journal of Asian natural pr… (2018) | pd | 4 | [10.1080/10286020.2017.1321636](https://doi.org/10.1080/10286020.2017.1321636) | [28463577](https://www.ncbi.nlm.nih.gov/pubmed/28463577) | metadata signals extractable PD data (EC50) |
| `Achour_2022.pdf` | Achour B et al., Liquid Biopsy for Patient Characterizat…, Clinical pharmacology and t… (2022) | pgx | 8 | [10.1002/cpt.2576](https://doi.org/10.1002/cpt.2576) | [35262906](https://www.ncbi.nlm.nih.gov/pubmed/35262906) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Bagli_1995.pdf` | Bagli M et al., Bioequivalence and absolute bioavailabi…, International journal of cl… (1995) | pgx | 8 | not captured | [8963481](https://www.ncbi.nlm.nih.gov/pubmed/8963481) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Cabrera_2009.pdf` | Cabrera SE et al., Influence of the cytochrome P450 2B6 ge…, Antimicrobial agents and ch… (2009) | pgx | 8 | [10.1128/AAC.01537-08](https://doi.org/10.1128/AAC.01537-08) | [19433561](https://www.ncbi.nlm.nih.gov/pubmed/19433561) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Cai_2021.pdf` | Cai Y et al., Evaluation of Recombinant CYP3A4 Varian…, Chemical research in toxico… (2021) | pgx | 8 | [10.1021/acs.chemrestox.0c00361](https://doi.org/10.1021/acs.chemrestox.0c00361) | [33393779](https://www.ncbi.nlm.nih.gov/pubmed/33393779) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Chen_2006.pdf` | Chen ZY et al., Pharmacokinetic and pharmacodynamic pop…, European journal of drug me… (2006) | pgx | 8 | [10.1007/BF03190639](https://doi.org/10.1007/BF03190639) | [16715780](https://www.ncbi.nlm.nih.gov/pubmed/16715780) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Chen_2021.pdf` | Chen J et al., Pharmacokinetics of Eltrombopag in Heal…, European journal of drug me… (2021) | pgx | 8 | [10.1007/s13318-021-00682-4](https://doi.org/10.1007/s13318-021-00682-4) | [33779967](https://www.ncbi.nlm.nih.gov/pubmed/33779967) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Cheng_2024.pdf` | Cheng F et al., Influence of genetic polymorphisms on i…, International immunopharmac… (2024) | pgx | 8 | [10.1016/j.intimp.2024.112090](https://doi.org/10.1016/j.intimp.2024.112090) | [38640718](https://www.ncbi.nlm.nih.gov/pubmed/38640718) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Chiwambutsa_2023.pdf` | Chiwambutsa SM et al., Effects of Genetic Polymorphisms of Dru…, Clinical pharmacology and t… (2023) | pgx | 8 | [10.1002/cpt.2904](https://doi.org/10.1002/cpt.2904) | [37042388](https://www.ncbi.nlm.nih.gov/pubmed/37042388) | metadata signals extractable PGX data (CYP2D6*17, PK/PD-context) |
| `Chokephaibulkit_2011.pdf` | Chokephaibulkit K et al., Pharmacokinetics and safety of a new pa…, Antiviral therapy (2011) | pgx | 8 | [10.3851/IMP1931](https://doi.org/10.3851/IMP1931) | [22155910](https://www.ncbi.nlm.nih.gov/pubmed/22155910) | metadata signals extractable PGX data (CYP2B, PK/PD-context) |
| `Dahl_1994.pdf` | Dahl ML et al., Stereoselective disposition of mianseri…, Clinical pharmacology and t… (1994) | pgx | 8 | [10.1038/clpt.1994.121](https://doi.org/10.1038/clpt.1994.121) | [8062494](https://www.ncbi.nlm.nih.gov/pubmed/8062494) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Djordjevic_2025.pdf` | Djordjevic N et al., ABCB1 Polymorphism Is Associated with H…, Pediatric reports (2025) | pgx | 8 | [10.3390/pediatric17010010](https://doi.org/10.3390/pediatric17010010) | [39846525](https://www.ncbi.nlm.nih.gov/pubmed/39846525) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Fang_2024.pdf` | Fang Y et al., Association Study of Esomeprazole Pharm…, Clinical pharmacology in dr… (2024) | pgx | 8 | [10.1002/cpdd.1334](https://doi.org/10.1002/cpdd.1334) | [37772804](https://www.ncbi.nlm.nih.gov/pubmed/37772804) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Guo_2020.pdf` | Guo L et al., Influence of CYP2D6*5 and *10 polymorph…, Journal of clinical pharmac… (2020) | pgx | 8 | [10.1111/jcpt.13155](https://doi.org/10.1111/jcpt.13155) | [32379356](https://www.ncbi.nlm.nih.gov/pubmed/32379356) | metadata signals extractable PGX data (CYP2D6*5, PK/PD-context) |
| `Hu_2026.pdf` | Hu J et al., Effects of CYP3A4 variants and drug-dru…, Biochemical pharmacology (2026) | pgx | 8 | [10.1016/j.bcp.2026.117730](https://doi.org/10.1016/j.bcp.2026.117730) | [41571200](https://www.ncbi.nlm.nih.gov/pubmed/41571200) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Jin_2012.pdf` | Jin SJ et al., The pharmacokinetics of letrozole: asso…, International journal of cl… (2012) | pgx | 8 | [10.5414/CP201709](https://doi.org/10.5414/CP201709) | [22735458](https://www.ncbi.nlm.nih.gov/pubmed/22735458) | metadata signals extractable PGX data (CYP2A6, PK/PD-context) |
| `Kagawa_2021.pdf` | Kagawa Y et al., Impact of CYP2D6, CYP3A5, and ABCB1 Pol…, Therapeutic drug monitoring (2021) | pgx | 8 | [10.1097/FTD.0000000000000823](https://doi.org/10.1097/FTD.0000000000000823) | [33065613](https://www.ncbi.nlm.nih.gov/pubmed/33065613) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kehinde_2025.pdf` | Kehinde O et al., Cytochrome P450 2D6 *17 and *29 Allele…, Clinical pharmacology and t… (2025) | pgx | 8 | [10.1002/cpt.70012](https://doi.org/10.1002/cpt.70012) | [40704440](https://www.ncbi.nlm.nih.gov/pubmed/40704440) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kinoshita_2025.pdf` | Kinoshita S et al., Influence of pharmacokinetics-related g…, PCN reports : psychiatry an… (2025) | pgx | 8 | [10.1002/pcn5.70164](https://doi.org/10.1002/pcn5.70164) | [40740505](https://www.ncbi.nlm.nih.gov/pubmed/40740505) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Kirbs_2019.pdf` | Kirbs C et al., High voriconazole target-site exposure…, European journal of pharmac… (2019) | pgx | 8 | [10.1016/j.ejps.2019.02.001](https://doi.org/10.1016/j.ejps.2019.02.001) | [30731238](https://www.ncbi.nlm.nih.gov/pubmed/30731238) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Koh_2019.pdf` | Koh A et al., Quantitative Modeling Analysis Demonstr…, Journal of clinical pharmac… (2019) | pgx | 8 | [10.1002/jcph.1344](https://doi.org/10.1002/jcph.1344) | [30452773](https://www.ncbi.nlm.nih.gov/pubmed/30452773) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Kong_2024.pdf` | Kong Q et al., Influence of TPMT and NUDT15 Genetic Po…, Genetic testing and molecul… (2024) | pgx | 8 | [10.1089/gtmb.2023.0605](https://doi.org/10.1089/gtmb.2023.0605) | [39084859](https://www.ncbi.nlm.nih.gov/pubmed/39084859) | metadata signals extractable PGX data (TPMT, PK/PD-context) |
| `Li_2019.pdf` | Li Q et al., Developmental Pharmacogenetics of SLCO2…, Drug design, development an… (2019) | pgx | 8 | [10.2147/DDDT.S226913](https://doi.org/10.2147/DDDT.S226913) | [31920289](https://www.ncbi.nlm.nih.gov/pubmed/31920289) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Lin_2021.pdf` | Lin R et al., Population pharmacokinetics of azathiop…, Basic & clinical pharmacolo… (2021) | pgx | 8 | [10.1111/bcpt.13530](https://doi.org/10.1111/bcpt.13530) | [33150655](https://www.ncbi.nlm.nih.gov/pubmed/33150655) | metadata signals extractable PGX data (TPMT, PK/PD-context) |
| `Litalien_2005.pdf` | Litalien C et al., Pharmacokinetics of proton pump inhibit…, Clinical pharmacokinetics (2005) | pgx | 8 | [10.2165/00003088-200544050-00001](https://doi.org/10.2165/00003088-200544050-00001) | [15871633](https://www.ncbi.nlm.nih.gov/pubmed/15871633) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Ma_2018.pdf` | Ma Y et al., Population pharmacokinetics of theophyl…, International journal of cl… (2018) | pgx | 8 | [10.1007/s11096-018-0636-6](https://doi.org/10.1007/s11096-018-0636-6) | [29777329](https://www.ncbi.nlm.nih.gov/pubmed/29777329) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Marquet_2021.pdf` | Marquet P et al., Clinical Pharmacokinetics and Bayesian…, Clinical pharmacokinetics (2021) | pgx | 8 | [10.1007/s40262-020-00959-y](https://doi.org/10.1007/s40262-020-00959-y) | [33230714](https://www.ncbi.nlm.nih.gov/pubmed/33230714) | metadata signals extractable PGX data (CYP3A5*3, PK/PD-context) |
| `Miljković_2022.pdf` | Miljković MN et al., Influence of Gender, Body Mass Index, a…, Frontiers in pharmacology (2022) | pgx | 8 | [10.3389/fphar.2022.796336](https://doi.org/10.3389/fphar.2022.796336) | [35784683](https://www.ncbi.nlm.nih.gov/pubmed/35784683) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Moltó_2013.pdf` | Moltó J et al., Simultaneous pharmacogenetics-based pop…, Clinical pharmacokinetics (2013) | pgx | 8 | [10.1007/s40262-013-0057-6](https://doi.org/10.1007/s40262-013-0057-6) | [23494984](https://www.ncbi.nlm.nih.gov/pubmed/23494984) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Mouly_2005.pdf` | Mouly SJ et al., Variation in oral clearance of saquinav…, Clinical pharmacology and t… (2005) | pgx | 8 | [10.1016/j.clpt.2005.08.014](https://doi.org/10.1016/j.clpt.2005.08.014) | [16338276](https://www.ncbi.nlm.nih.gov/pubmed/16338276) | metadata signals extractable PGX data (CYP3A5*1, PK/PD-context) |
| `Mugusi_2024.pdf` | Mugusi S et al., CYP2B6 and ABCB1 genotypes predict meth…, British journal of clinical… (2024) | pgx | 8 | [10.1111/bcp.16173](https://doi.org/10.1111/bcp.16173) | [38993001](https://www.ncbi.nlm.nih.gov/pubmed/38993001) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Mukonzo_2009.pdf` | Mukonzo JK et al., A novel polymorphism in ABCB1 gene, CYP…, British journal of clinical… (2009) | pgx | 8 | [10.1111/j.1365-2125.2009.03516.x](https://doi.org/10.1111/j.1365-2125.2009.03516.x) | [19916993](https://www.ncbi.nlm.nih.gov/pubmed/19916993) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Musuamba_2009.pdf` | Musuamba FT et al., Time of drug administration, CYP3A5 and…, Therapeutic drug monitoring (2009) | pgx | 8 | [10.1097/FTD.0b013e3181bf8623](https://doi.org/10.1097/FTD.0b013e3181bf8623) | [19855314](https://www.ncbi.nlm.nih.gov/pubmed/19855314) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Nikanjam_2022.pdf` | Nikanjam M et al., Impact of CYP2B6 genotype, tuberculosis…, AIDS (London, England) (2022) | pgx | 8 | [10.1097/QAD.0000000000003141](https://doi.org/10.1097/QAD.0000000000003141) | [34873089](https://www.ncbi.nlm.nih.gov/pubmed/34873089) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Okda_2024.pdf` | Okda SM et al., Impact of CYP2D6*2A, CYP2D6*4 and CYP3A…, British journal of clinical… (2024) | pgx | 8 | [10.1111/bcp.16134](https://doi.org/10.1111/bcp.16134) | [38886107](https://www.ncbi.nlm.nih.gov/pubmed/38886107) | metadata signals extractable PGX data (CYP2D6*2A, PK/PD-context) |
| `Ortega-Vázquez_2021.pdf` | Ortega-Vázquez A et al., Alcohol intake potentiates clozapine ad…, Drug development research (2021) | pgx | 8 | [10.1002/ddr.21774](https://doi.org/10.1002/ddr.21774) | [33336447](https://www.ncbi.nlm.nih.gov/pubmed/33336447) | metadata signals extractable PGX data (CYP1A2*1C, PK/PD-context) |
| `Qian_2024.pdf` | Qian J et al., Study on genotype and phenotype of nove…, The pharmacogenomics journal (2024) | pgx | 8 | [10.1038/s41397-024-00332-3](https://doi.org/10.1038/s41397-024-00332-3) | [38637522](https://www.ncbi.nlm.nih.gov/pubmed/38637522) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Razaq_2026.pdf` | Razaq A et al., Impact of ABCB1 gene polymorphism on cl…, Pharmacogenomics (2026) | pgx | 8 | [10.1080/14622416.2025.2534325](https://doi.org/10.1080/14622416.2025.2534325) | [40689604](https://www.ncbi.nlm.nih.gov/pubmed/40689604) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Saleh_2024.pdf` | Saleh Faisal M et al., Distribution pattern of UGT1A6 and UGT2…, Gene (2024) | pgx | 8 | [10.1016/j.gene.2023.147886](https://doi.org/10.1016/j.gene.2023.147886) | [37820941](https://www.ncbi.nlm.nih.gov/pubmed/37820941) | metadata signals extractable PGX data (UGT1A6, PK/PD-context) |
| `Sindrup_1993.pdf` | Sindrup SH et al., Pharmacokinetics of citalopram in relat…, Therapeutic drug monitoring (1993) | pgx | 8 | [10.1097/00007691-199302000-00002](https://doi.org/10.1097/00007691-199302000-00002) | [8451774](https://www.ncbi.nlm.nih.gov/pubmed/8451774) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Sundell_2020.pdf` | Sundell J et al., Population Pharmacokinetics and Pharmac…, Antimicrobial agents and ch… (2020) | pgx | 8 | [10.1128/AAC.01583-19](https://doi.org/10.1128/AAC.01583-19) | [31712201](https://www.ncbi.nlm.nih.gov/pubmed/31712201) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Sundell_2022.pdf` | Sundell J et al., Effects of Enzyme Induction and Polymor…, Antimicrobial agents and ch… (2022) | pgx | 8 | [10.1128/aac.02277-21](https://doi.org/10.1128/aac.02277-21) | [36069614](https://www.ncbi.nlm.nih.gov/pubmed/36069614) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Sánchez_2011.pdf` | Sánchez A et al., Population pharmacokinetic/pharmacogene…, Antimicrobial agents and ch… (2011) | pgx | 8 | [10.1128/AAC.00194-11](https://doi.org/10.1128/AAC.00194-11) | [21896912](https://www.ncbi.nlm.nih.gov/pubmed/21896912) | metadata signals extractable PGX data (CYP2B6*6, PK/PD-context) |
| `Thomas_2026.pdf` | Thomas L et al., Influence of CYP2D6, CYP2C19, and CYP2C…, Pharmaceuticals (Basel, Swi… (2026) | pgx | 8 | [10.3390/ph19020209](https://doi.org/10.3390/ph19020209) | [41754751](https://www.ncbi.nlm.nih.gov/pubmed/41754751) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Tsuchiya_2025.pdf` | Tsuchiya K et al., High plasma concentration of tenofovir…, Journal of infection and ch… (2025) | pgx | 8 | [10.1016/j.jiac.2024.10.009](https://doi.org/10.1016/j.jiac.2024.10.009) | [39426598](https://www.ncbi.nlm.nih.gov/pubmed/39426598) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Wang_2014.pdf` | Wang HF et al., Steady-state pharmacokinetics of siroli…, Clinical pharmacology in dr… (2014) | pgx | 8 | [10.1002/cpdd.96](https://doi.org/10.1002/cpdd.96) | [27128614](https://www.ncbi.nlm.nih.gov/pubmed/27128614) | metadata signals extractable PGX data (CYP3A5*3, PK/PD-context) |
| `Wang_2025.pdf` | Wang P et al., In vitro assessment of the impact of 30…, PeerJ (2025) | pgx | 8 | [10.7717/peerj.20027](https://doi.org/10.7717/peerj.20027) | [41048387](https://www.ncbi.nlm.nih.gov/pubmed/41048387) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Wu_2025.pdf` | Wu YP et al., Pharmacogenetics of steady-state metabo…, Drug metabolism and disposi… (2025) | pgx | 8 | [10.1016/j.dmd.2025.100156](https://doi.org/10.1016/j.dmd.2025.100156) | [41027046](https://www.ncbi.nlm.nih.gov/pubmed/41027046) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Xia_2026.pdf` | Xia H et al., Effects of CYP2C9 genetic polymorphism…, Biochemical pharmacology (2026) | pgx | 8 | [10.1016/j.bcp.2025.117558](https://doi.org/10.1016/j.bcp.2025.117558) | [41308926](https://www.ncbi.nlm.nih.gov/pubmed/41308926) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Xu_2024.pdf` | Xu X et al., Pharmacokinetics of nirmatrelvir/ritona…, European journal of clinica… (2024) | pgx | 8 | [10.1007/s00228-024-03691-9](https://doi.org/10.1007/s00228-024-03691-9) | [38691139](https://www.ncbi.nlm.nih.gov/pubmed/38691139) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Zhang_2021.pdf` | Zhang X et al., Influence of CYP2D6 gene polymorphisms…, Pharmacogenomics (2021) | pgx | 8 | [10.2217/pgs-2020-0134](https://doi.org/10.2217/pgs-2020-0134) | [33586456](https://www.ncbi.nlm.nih.gov/pubmed/33586456) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Zhao_2023.pdf` | Zhao T et al., Association of CYP2C19, CYP3A4 and ABCC…, Pharmacogenomics (2023) | pgx | 8 | [10.2217/pgs-2022-0159](https://doi.org/10.2217/pgs-2022-0159) | [36718992](https://www.ncbi.nlm.nih.gov/pubmed/36718992) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Zhao_2024.pdf` | Zhao T et al., Impact of UGT1A4 and UGT2B7 polymorphis…, Pharmacogenetics and genomi… (2024) | pgx | 8 | [10.1097/FPC.0000000000000543](https://doi.org/10.1097/FPC.0000000000000543) | [39171428](https://www.ncbi.nlm.nih.gov/pubmed/39171428) | metadata signals extractable PGX data (UGT1A4, PK/PD-context) |
| `Zyryanov_2022.pdf` | Zyryanov SK et al., Gene Polymorphism of Biotransformation…, Biomedicines (2022) | pgx | 8 | [10.3390/biomedicines10051050](https://doi.org/10.3390/biomedicines10051050) | [35625789](https://www.ncbi.nlm.nih.gov/pubmed/35625789) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `de_2026.pdf` | de Denus S et al., CYP2D6 Metabolizer Status and Mortality…, Clinical and translational… (2026) | pgx | 8 | [10.1111/cts.70714](https://doi.org/10.1111/cts.70714) | [42678095](https://www.ncbi.nlm.nih.gov/pubmed/42678095) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `van_2024.pdf` | van der Heijden LT et al., Is Higher Docetaxel Clearance in Prosta…, Journal of clinical pharmac… (2024) | pgx | 8 | [10.1002/jcph.2362](https://doi.org/10.1002/jcph.2362) | [37789682](https://www.ncbi.nlm.nih.gov/pubmed/37789682) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Bi_2025.pdf` | Bi G et al., Assessment of the in vitro cytochrome P…, Drug metabolism and disposi… (2025) | pgx | 7 | [10.1016/j.dmd.2025.100106](https://doi.org/10.1016/j.dmd.2025.100106) | [40614320](https://www.ncbi.nlm.nih.gov/pubmed/40614320) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Chaphekar_2026.pdf` | Chaphekar N et al., Selective and Time-Dependent Alteration…, European journal of drug me… (2026) | pgx | 7 | [10.1007/s13318-026-01031-z](https://doi.org/10.1007/s13318-026-01031-z) | [42663925](https://www.ncbi.nlm.nih.gov/pubmed/42663925) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Ge_2024.pdf` | Ge M et al., Investigation of the drug-drug interact…, Journal of ethnopharmacology (2024) | pgx | 7 | [10.1016/j.jep.2024.118212](https://doi.org/10.1016/j.jep.2024.118212) | [38636577](https://www.ncbi.nlm.nih.gov/pubmed/38636577) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Grangeon_2021.pdf` | Grangeon A et al., Determination of CYP450 Expression Leve…, International journal of mo… (2021) | pgx | 7 | [10.3390/ijms222312791](https://doi.org/10.3390/ijms222312791) | [34884595](https://www.ncbi.nlm.nih.gov/pubmed/34884595) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Joisten_2026.pdf` | Joisten CS et al., Clinical impact of potential drug-drug…, Antimicrobial agents and ch… (2026) | pgx | 7 | [10.1128/aac.01951-25](https://doi.org/10.1128/aac.01951-25) | [42118097](https://www.ncbi.nlm.nih.gov/pubmed/42118097) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Lang_1994.pdf` | Lang NP et al., Rapid metabolic phenotypes for acetyltr…, Cancer epidemiology, biomar… (1994) | pgx | 7 | not captured | [7881341](https://www.ncbi.nlm.nih.gov/pubmed/7881341) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Li_2024.pdf` | Li Q et al., [Pharmacokinetic differences and relate…, Zhongguo Zhong yao za zhi =… (2024) | pgx | 7 | [10.19540/j.cnki.cjcmm.20240616.201](https://doi.org/10.19540/j.cnki.cjcmm.20240616.201) | [39701685](https://www.ncbi.nlm.nih.gov/pubmed/39701685) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Pawar_2026.pdf` | Pawar SD et al., Cytochrome P450 2D6 (CYP2D6) Inhibition…, ACS pharmacology & translat… (2026) | pgx | 7 | [10.1021/acsptsci.5c00682](https://doi.org/10.1021/acsptsci.5c00682) | [41852638](https://www.ncbi.nlm.nih.gov/pubmed/41852638) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Radeva-Llieva_2022.pdf` | Radeva-Llieva M et al., Influence of methylxanthines isolated f…, Daru : journal of Faculty o… (2022) | pgx | 7 | [10.1007/s40199-022-00433-z](https://doi.org/10.1007/s40199-022-00433-z) | [35146639](https://www.ncbi.nlm.nih.gov/pubmed/35146639) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Raichura_2025.pdf` | Raichura Z et al., Evaluation of reversible cytochrome P45…, Drug metabolism and disposi… (2025) | pgx | 7 | [10.1016/j.dmd.2024.100024](https://doi.org/10.1016/j.dmd.2024.100024) | [40023576](https://www.ncbi.nlm.nih.gov/pubmed/40023576) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Shang_2018.pdf` | Shang DW et al., Effects of food and grapefruit juice on…, European journal of clinica… (2018) | pgx | 7 | [10.1007/s00228-017-2340-1](https://doi.org/10.1007/s00228-017-2340-1) | [28975417](https://www.ncbi.nlm.nih.gov/pubmed/28975417) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spigset_1995.pdf` | Spigset O et al., Effect of cigarette smoking on fluvoxam…, Clinical pharmacology and t… (1995) | pgx | 7 | [10.1016/0009-9236(95)90052-7](https://doi.org/10.1016/0009-9236(95)90052-7) | [7586931](https://www.ncbi.nlm.nih.gov/pubmed/7586931) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Wang_2021.pdf` | Wang Y et al., ABCB1 and ABCG2, but not CYP3A4 limit o…, Pharmacological research (2021) | pgx | 7 | [10.1016/j.phrs.2021.105850](https://doi.org/10.1016/j.phrs.2021.105850) | [34450308](https://www.ncbi.nlm.nih.gov/pubmed/34450308) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `van_1999.pdf` | van Agtmael MA et al., Grapefruit juice increases the bioavail…, European journal of clinica… (1999) | pgx | 7 | [10.1007/s002280050648](https://doi.org/10.1007/s002280050648) | [10456492](https://www.ncbi.nlm.nih.gov/pubmed/10456492) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Bennett_2026.pdf` | Bennett MH et al., Impact of CYP2D6 Genotype and Inhibitor…, Clinical and translational… (2026) | pgx | 5 | [10.1111/cts.70525](https://doi.org/10.1111/cts.70525) | [41845570](https://www.ncbi.nlm.nih.gov/pubmed/41845570) | metadata signals extractable PGX data (CYP2D6) |
| `Dhuya_2020.pdf` | Dhuya M et al., Cytochrome P450 2D6 polymorphism in eas…, Indian journal of pharmacol… (2020) | pgx | 5 | [10.4103/ijp.IJP_530_17](https://doi.org/10.4103/ijp.IJP_530_17) | [32874001](https://www.ncbi.nlm.nih.gov/pubmed/32874001) | metadata signals extractable PGX data (CYP2D6) |
| `Drevin_2025.pdf` | Drevin G et al., Interest and limits of using pharmacoge…, Forensic science internatio… (2025) | pgx | 5 | [10.1016/j.fsigen.2024.103219](https://doi.org/10.1016/j.fsigen.2024.103219) | [39742700](https://www.ncbi.nlm.nih.gov/pubmed/39742700) | metadata signals extractable PGX data (COMT) |
| `Luo_2025.pdf` | Luo S et al., Impact of combined UGT2B17 and GSTA1 ge…, Drug metabolism and disposi… (2025) | pgx | 5 | [10.1016/j.dmd.2025.100148](https://doi.org/10.1016/j.dmd.2025.100148) | [40972495](https://www.ncbi.nlm.nih.gov/pubmed/40972495) | metadata signals extractable PGX data (UGT2B17) |
| `Marinac_1995.pdf` | Marinac JS et al., Dextromethorphan polymorphic hepatic ox…, Therapeutic drug monitoring (1995) | pgx | 5 | [10.1097/00007691-199504000-00003](https://doi.org/10.1097/00007691-199504000-00003) | [7624898](https://www.ncbi.nlm.nih.gov/pubmed/7624898) | metadata signals extractable PGX data (CYP2D6) |
| `Stocco_2015.pdf` | Stocco G et al., Thiopurine metabolites variations durin…, World journal of gastroente… (2015) | pgx | 5 | [10.3748/wjg.v21.i12.3571](https://doi.org/10.3748/wjg.v21.i12.3571) | [25834322](https://www.ncbi.nlm.nih.gov/pubmed/25834322) | metadata signals extractable PGX data (NAT2) |
| `Xie_1995.pdf` | Xie HG et al., High-performance liquid chromatographic…, Journal of chromatography.… (1995) | pgx | 5 | [10.1016/0378-4347(95)00065-q](https://doi.org/10.1016/0378-4347(95)00065-q) | [7550968](https://www.ncbi.nlm.nih.gov/pubmed/7550968) | metadata signals extractable PGX data (CYP2C19) |
| `Ye_2024.pdf` | Ye Z et al., CYP3A4 and CYP2C19 genetic polymorphism…, Biomedicine & pharmacothera… (2024) | pgx | 5 | [10.1016/j.biopha.2024.116421](https://doi.org/10.1016/j.biopha.2024.116421) | [38719708](https://www.ncbi.nlm.nih.gov/pubmed/38719708) | metadata signals extractable PGX data (CYP3A4) |

<sub>queue written 2026-09-29T01:53:18.963535+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | AICHINGER_1964 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| PD | Abdoun_1995 | not_relevant | 0 | 0 | The paper studies insect neuropeptides and does not mention Hippocastani semen or report any pharmacodynamic parameters for it. |
| PGx | Abolfathi_1993 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of mexiletine, not hippocastani_semen. |
| PGx | Achour_2022 | not_relevant | 0 | 0 | The paper discusses liquid biopsy markers for CYP/P-gp in cardiovascular disease and does not mention hippocastani_semen or its pharmacokinetics. |
| popPK | Agergaard_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not hippocastani_semen. |
| PGx | Akowuah_2025 | not_relevant | 0 | 0 | The paper studies the effect of a plant extract on metformin pharmacokinetics, not a pharmacogenomic effect on hippocastani_semen. |
| PD | Akula_2026 | not_relevant | 0 | 0 | The paper focuses on the development and validation of a bioanalytical method and reports only pharmacokinetic (PK) parameters (Cmax, AUC, half-life) for Branebrutinib and Metformin, with no pharmacodynamic (PD) or exposure-response data. |
| PGx | Al-Qurain_2021 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic model for fentanyl, not hippocastani_semen, and does not report pharmacogenomic effects. |
| PD | Al_2025 | not_relevant | 0 | 0 | The paper reports a PopPK model for naloxone but explicitly states that no statistically significant correlation was found between exposures and responses, and it does not report any numeric PD parameters. |
| popPK | Albitar_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for clozapine and norclozapine, not hippocastani_semen. |
| PGx | Albitar_2024 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for Clozapine, not hippocastani_semen. |
| popPK | Aly_2009 | irrelevant | 0 | 0 | The paper describes the isolation and cytotoxicity of natural products from a fungus, with no pharmacokinetic data for hippocastani_semen. |
| popPK | Anderson_1992 | irrelevant | 0 | 0 | The paper describes a method for measuring platelet serotonin release and does not involve the drug hippocastani_semen or report any pharmacokinetic parameters. |
| PGx | Aruldhas_2021 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on methadone, not hippocastani_semen. |
| popPK | Assmus_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for DNDI-6148, not hippocastani_semen. |
| PD | Bae_2025 | not_relevant | 0 | 0 | The paper reports the pharmacokinetics of Oxolinic Acid in fish, not the pharmacodynamics of Hippocastani semen. |
| PGx | Bagli_1995 | not_relevant | 0 | 0 | The paper studies levomepromazine, not hippocastani_semen. |
| PD | Bardhi_2025 | not_relevant | 0 | 0 | The paper describes a therapeutic drug monitoring protocol for beta-lactams in horses and dogs and does not mention Hippocastani semen or report any pharmacodynamic or exposure-response data. |
| PD | Behrens_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of isavuconazole, not Hippocastani semen, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Bellapart_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nimodipine, not hippocastani_semen. |
| PGx | Bennett_2026 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for risperidone, not hippocastani_semen. |
| PD | Bernstein_2008 | not_relevant | 0 | 0 | The paper discusses insulin delivery and does not mention Hippocastani semen or provide any PD parameters. |
| popPK | Bertin_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for levosimendan and its metabolites, not for hippocastani_semen. |
| popPK | Bhavaraju_1993 | irrelevant | 0 | 0 | The paper describes microbial growth and sulfur oxidation kinetics, not the pharmacokinetics of hippocastani_semen. |
| PGx | Bi_2025 | not_relevant | 0 | 0 | The paper describes a method for measuring CYP450 activity in liver organoids and does not involve the drug hippocastani_semen or specific pharmacogenomic effects on its PK/PD parameters. |
| popPK | Bignamini_1979 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of protacine, not hippocastani_semen. |
| popPK | Boglione-Kerrien_2026 | irrelevant | 0 | 0 | The study focuses on voriconazole pharmacokinetics and pharmacodynamics, not hippocastani_semen. |
| PGx | Bohanec_2009 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of leflunomide, not hippocastani_semen. |
| PGx | Bond_1990 | not_relevant | 0 | 0 | The paper studies the effect of ethanol on gene expression in mice and does not involve the drug hippocastani_semen. |
| PGx | Boniforti_1979 | not_relevant | 0 | 0 | The paper describes a method for identifying anaerobic bacteria using gas-liquid chromatography and contains no information regarding pharmacogenomics or the drug hippocastani_semen. |
| PGx | Burke_1994 | not_relevant | 0 | 0 | The paper studies alkoxyresorufin O-dealkylation as a probe for CYP450 isozymes in liver microsomes and does not involve the drug hippocastani_semen. |
| PGx | Cabrera_2009 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for efavirenz, not hippocastani_semen. |
| PD | Cafaro_2024 | not_relevant | 0 | 0 | The paper is a review of LC-MS/MS methods for therapeutic drug monitoring of glycopeptide antibiotics and does not report any pharmacodynamic data or parameters for Hippocastani semen. |
| PGx | Cai_2021 | not_relevant | 0 | 0 | The paper studies oxycodone metabolism, not hippocastani_semen. |
| popPK | Calderin_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pyrazinamide and isoniazid, not hippocastani_semen. |
| popPK | Castel-Branco_2005 | irrelevant | 0 | 0 | no_text gate: only 61 chars of text extracted (&lt; 400) |
| PD | Castel-Branco_2005 | not_relevant | 0 | 0 | The paper focuses on Lamotrigine, not Hippocastani semen. |
| PGx | Cerón_2025 | not_relevant | 0 | 0 | The paper studies pharmacogenomics of R-CHOP chemotherapy in DLBCL, not the drug hippocastani_semen. |
| PGx | Chan_2021 | not_relevant | 0 | 0 | The paper studies bisoprolol, not hippocastani_semen. |
| PGx | Chaphekar_2026 | not_relevant | 0 | 0 | The paper studies the effect of phytocannabinoids on CYP enzymes, not the effect of a gene variant on the PK/PD of hippocastani_semen. |
| PGx | Chen_1991 | not_relevant | 0 | 0 | The paper studies codeine, not hippocastani_semen. |
| PGx | Chen_2006 | not_relevant | 0 | 0 | The paper studies rabeprazole, not hippocastani_semen. |
| PGx | Chen_2021 | not_relevant | 0 | 0 | The paper studies eltrombopag, not hippocastani_semen. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for noscapine, not hippocastani_semen. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for remimazolam, not hippocastani_semen. |
| PGx | Cheng_2024 | not_relevant | 0 | 0 | The paper studies imatinib, not hippocastani_semen. |
| popPK | Chhatwal_1992 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Chhatwal_1992 | not_relevant | 0 | 0 | The paper focuses on the isolation and characterization of dracotoxin from fish venom and does not contain any pharmacodynamic or exposure-response data for Hippocastani semen. |
| PD | Chi_2025 | not_relevant | 0 | 0 | The paper describes a UHPLC-MS/MS method for quantifying crizotinib, alectinib, and lorlatinib in plasma and does not contain any pharmacodynamic or exposure-response data for Hippocastani semen. |
| PGx | Chiwambutsa_2023 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on the metabolism of tamoxifen, not hippocastani_semen. |
| PGx | Chokephaibulkit_2011 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for zidovudine, lamivudine, and nevirapine, not for hippocastani_semen. |
| popPK | Chotsiri_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for primaquine and its metabolites, not for hippocastani_semen. |
| popPK | Chupradit_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lopinavir/ritonavir, not hippocastani_semen. |
| PGx | Dahl_1994 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of mianserin, not hippocastani_semen. |
| PD | De_2023 | not_relevant | 0 | 0 | The paper focuses on PK target attainment (concentration vs. breakpoint) for antibiotics and does not report any pharmacodynamic (concentration-effect) relationship or numeric PD parameters for Hippocastani semen. |
| PGx | Dhuya_2020 | not_relevant | 0 | 0 | The paper studies CYP2D6 polymorphism using dextromethorphan as a probe drug, not hippocastani_semen. |
| popPK | Djordjevic_2025 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PGx | Djordjevic_2025 | not_relevant | 0 | 0 | The paper discusses carbamazepine, not hippocastani_semen. |
| popPK | Dova_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of marbofloxacin, not hippocastani_semen. |
| PD | Dova_2007 | not_relevant | 0 | 0 | The paper studies marbofloxacin, not Hippocastani semen, and reports only PK parameters without a quantitative PD model. |
| PGx | Dragović_1994 | not_relevant | 0 | 0 | The paper investigates the expression of neprilysin in hepatocellular carcinomas and does not involve the drug hippocastani_semen or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Drevin_2025 | not_relevant | 0 | 0 | The paper discusses pharmacogenetics of MDMA, not hippocastani_semen. |
| PD | Du_2026 | not_relevant | 2 | 0 | The paper focuses on PK modeling (PBPK) and protein binding factors for ertapenem, not Hippocastani semen, and does not report specific numeric PD parameters (Emax, EC50) or a concentration-effect curve, only using %fT&gt;MIC as a target metric. |
| popPK | Duan_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of linezolid, not hippocastani_semen. |
| popPK | Díaz-Peña_2023 | irrelevant | 0 | 0 | The paper studies tarantula venom peptides and their mechanism of action on calcium channels, not the pharmacokinetics of hippocastani_semen. |
| PD | Díaz-Peña_2023 | not_relevant | 0 | 0 | The paper studies tarantula venom peptides, not Hippocastani semen, and does not report numeric PD parameters for the target drug. |
| PGx | Edeki_1995 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for timolol, not hippocastani_semen. |
| popPK | Enger_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the anticancer drug SOAz, not hippocastani_semen. |
| PD | Eryavuz_2026 | not_relevant | 0 | 0 | The paper focuses on Pregabalin and Gabapentin, not Hippocastani semen. |
| popPK | Esmaeili_2022 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Esmaeili_2022 | not_relevant | 0 | 0 | The paper focuses on Rivaroxaban, not Hippocastani semen. |
| PGx | Evgenev_1996 | not_relevant | 0 | 0 | The paper discusses acetylation phenotype determination using isoniazid, not hippocastani_semen. |
| PGx | Eysselein_1990 | not_relevant | 0 | 0 | The paper studies endogenous cholecystokinin release and does not involve the drug hippocastani_semen or any pharmacogenomic analysis. |
| popPK | Fagoo_1985 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Fagoo_1985 | not_relevant | 0 | 0 | The paper discusses the interaction of cardiodigin with antibodies and does not report any pharmacodynamic or exposure-response relationship for Hippocastani semen. |
| PGx | Fang_2024 | not_relevant | 0 | 0 | The paper studies esomeprazole, not hippocastani_semen. |
| popPK | Farias_2009 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Farias_2009 | not_relevant | 0 | 0 | The paper studies sodium anacardate from cashew nut shell liquid, not Hippocastani semen, and does not report PD parameters for the target drug. |
| PD | Feng_2025 | not_relevant | 0 | 0 | The paper focuses on meropenem, not Hippocastani semen. |
| PGx | Fisher_1988 | not_relevant | 0 | 0 | The paper discusses the chromosomal location of the SP-C gene and an RFLP, but does not report any pharmacogenomic effects on PK/PD parameters for hippocastani_semen. |
| popPK | Fiuza_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study on antiparasitic activity of plant extracts and does not involve hippocastani_semen or pharmacokinetic parameters. |
| PD | Fiuza_2026 | not_relevant | 0 | 0 | The paper studies Chromolaena hookeriana and Campuloclinium macrocephalum, not Hippocastani semen, and reports in vitro EC50 values for antiparasitic activity rather than a pharmacodynamic model for the specified drug. |
| popPK | Fonseca_2022 | irrelevant | 0 | 0 | The paper describes the production of Copper-61 radiopharmaceuticals and does not involve the drug hippocastani_semen or report any pharmacokinetic parameters. |
| PD | Fonseca_2022 | not_relevant | 0 | 0 | The paper describes the production of Copper-61 radiopharmaceuticals and does not contain any pharmacodynamic or exposure-response data for Hippocastani semen. |
| popPK | Frenkel_1995 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for propofol and alfentanil, not for hippocastani_semen. |
| PGx | Frischer_1987 | not_relevant | 0 | 0 | The paper studies primaquine metabolism, not hippocastani_semen. |
| popPK | Gandara_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for sertraline, not hippocastani_semen. |
| PGx | Ge_2024 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between Aconitum carmichaelii and Pinellia ternata, not pharmacogenomic effects on hippocastani_semen. |
| PD | Ghade_2024 | not_relevant | 0 | 0 | The paper discusses the biosimilarity of insulin aspart (BGL-ASP) and mentions PK/PD parameters in the context of clinical trial design, but it does not report any specific numeric PD parameters, exposure-response relationships, or dose-effect curves for Hippocastani semen or any other drug. |
| PD | González-Garza_1989 | not_relevant | 0 | 0 | The paper reports IC50 values for emetine, metronidazole, and diiodohydroxyquinoline, but does not contain any data or analysis for Hippocastani semen. |
| popPK | Gorelik_2020 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Gorelik_2020 | not_relevant | 0 | 0 | The paper discusses stimulated Raman scattering in diamond microparticle suspensions and contains no pharmacological, PK, or PD data for Hippocastani semen. |
| PGx | Grangeon_2021 | not_relevant | 0 | 0 | The paper characterizes CYP450 expression in the small intestine but does not report pharmacogenomic effects on the PK/PD of hippocastani_semen. |
| popPK | Grippa_2000 | irrelevant | 0 | 0 | The paper describes in vitro antioxidant assays for ascorbic acid, glutathione, and melatonin, and does not involve hippocastani_semen or pharmacokinetic parameters. |
| PD | Grippa_2000 | not_relevant | 0 | 0 | The paper describes in vitro antioxidant assays for reference compounds (ascorbic acid, glutathione, melatonin) and does not mention Hippocastani semen or report any pharmacodynamic parameters for it. |
| popPK | Gu_1992 | irrelevant | 0 | 0 | The paper studies the pharmacological effects of somatostatins on gastric smooth muscle cells and does not involve the drug hippocastani_semen or any pharmacokinetic parameters. |
| popPK | Gu_2024 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Gu_2024 | not_relevant | 0 | 0 | The paper focuses on fermentation optimization for Coprinus comatus and does not involve Hippocastani semen or any pharmacodynamic modeling. |
| PGx | Guan_2018 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of diltiazem, not hippocastani_semen. |
| PGx | Guo_2020 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for nebivolol, not hippocastani_semen. |
| popPK | Hanafin_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of polymyxin B, not hippocastani_semen. |
| PGx | Hand_1992 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of a monoclonal antibody (B72.3), not the drug hippocastani_semen. |
| popPK | Hardee_1985 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for flunixin meglumine, not hippocastani_semen. |
| PD | He_2024 | not_relevant | 0 | 0 | The paper describes a UPLC-MS/MS method for quantifying vancomycin and meropenem, not a pharmacodynamic or exposure-response analysis for Hippocastani semen. |
| popPK | Hermann_1988 | irrelevant | 0 | 0 | The study focuses on ciclosporin, not hippocastani_semen, and involves in-vitro skin penetration rather than population pharmacokinetics. |
| popPK | Hodge_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sugammadex and rocuronium, not hippocastani_semen. |
| popPK | Hongler_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amikacin, not hippocastani_semen. |
| PD | Hostetler_1986 | not_relevant | 0 | 0 | The paper focuses on the purification of an enzyme and identification of inhibitors in a lysosomal fraction, containing no pharmacokinetic or pharmacodynamic modeling of Hippocastani semen. |
| popPK | Howe_1992 | irrelevant | 0 | 0 | The paper describes the construction of a phosphate-doped gel phantom for NMR spectroscopy and does not involve the drug hippocastani_semen or any pharmacokinetic parameters. |
| PGx | Hu_2026 | not_relevant | 0 | 0 | The paper investigates fexinidazole, not hippocastani_semen. |
| PGx | Hua_2025 | not_relevant | 0 | 0 | The paper investigates herb-drug interactions (acacetin affecting diazepam PK) and does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Huang_2019 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of Telmisartan, not hippocastani_semen. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | no_text gate: only 70 chars of text extracted (&lt; 400) |
| PD | Huang_2022 | not_relevant | 0 | 0 | The paper title refers to Acetylkitasamycin, not Hippocastani semen, and the provided text does not contain any information regarding the target drug. |
| PGx | Ibrahim_2024 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics for metformin and glimepiride, not hippocastani_semen. |
| PD | Inamdar_2026 | not_relevant | 1 | 0 | The paper is a review of bioanalytical platforms and TDM technologies for antibiotics and does not report any specific pharmacodynamic data or numeric PD parameters for Hippocastani semen. |
| PGx | Isse_2025 | not_relevant | 0 | 0 | The paper studies the metabolism of arachidonic acid by P450 enzymes, not the pharmacokinetics or pharmacodynamics of the drug hippocastani_semen. |
| PGx | Jaisupa_2026 | not_relevant | 0 | 0 | The paper investigates pharmacokinetic drug-drug interactions of cannabidiol (CBD) with antiseizure medications, not the pharmacogenomics of hippocastani_semen. |
| popPK | Janssen_2015 | irrelevant | 0 | 0 | The paper investigates ivermectin resistance in C. elegans and does not involve the drug hippocastani_semen or report any pharmacokinetic parameters. |
| popPK | Jensen_2023 | irrelevant | 0 | 0 | The paper focuses on a mass spectrometry method for progestins and does not involve hippocastani_semen. |
| PD | Jensen_2023 | not_relevant | 0 | 0 | The paper describes a bioanalytical method for monitoring progestin compliance and does not report any pharmacodynamic or exposure-response data for Hippocastani semen. |
| PGx | Jia_2021 | not_relevant | 0 | 0 | The paper studies voriconazole, not hippocastani_semen. |
| PGx | Jiao_1990 | not_relevant | 0 | 0 | The paper studies genetic control of lipoprotein sizes in mice and does not involve the drug hippocastani_semen. |
| PGx | Jin_2012 | not_relevant | 0 | 0 | The paper studies letrozole, not hippocastani_semen. |
| popPK | Jin_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dorzagliatin and PI3K inhibitors, not hippocastani_semen. |
| PD | Jin_2025 | not_relevant | 0 | 0 | The paper studies Dorzagliatin and PI3K inhibitors, not Hippocastani semen. |
| PGx | Joisten_2026 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between midostaurin and posaconazole, not the pharmacogenomic effects of hippocastani_semen. |
| popPK | Jonker_2008 | irrelevant | 0 | 0 | The paper describes a protein-ligand screening methodology using norethindrone and other ligands, and does not involve hippocastani_semen or pharmacokinetic parameters. |
| PD | Jonker_2008 | not_relevant | 0 | 0 | The paper describes a method for screening protein-ligand interactions and mentions the capability to measure EC50 curves, but it does not report any specific PD or exposure-response data for Hippocastani semen. |
| popPK | Kagan_2023 | irrelevant | 0 | 0 | The paper is a review of DNA methyltransferase inhibitors (azacitidine/decitabine) and does not mention hippocastani_semen or provide any pharmacokinetic parameters for it. |
| PD | Kagan_2023 | not_relevant | 1 | 0 | The paper is a review discussing DNMT inhibitors (azacitidine/decitabine) and does not contain data or numeric PD parameters for Hippocastani semen. |
| PGx | Kagawa_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of donepezil, not hippocastani_semen. |
| PGx | Kehinde_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of risperidone, not hippocastani_semen. |
| popPK | Keipert_1988 | irrelevant | 0 | 0 | The paper describes the physicochemical properties of a hemoglobin solution and does not involve the drug hippocastani_semen. |
| PD | Keipert_1988 | not_relevant | 0 | 0 | The paper describes the physicochemical properties and storage stability of a hemoglobin solution, not a pharmacodynamic or exposure-response relationship for Hippocastani semen. |
| popPK | Kengo_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tuberculosis drugs (clofazimine, isoniazid, etc.) and does not involve hippocastani_semen. |
| PGx | Kim_2022 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for atorvastatin, not hippocastani_semen. |
| PGx | Kinoshita_2025 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on clozapine, not hippocastani_semen. |
| PGx | Kirbs_2019 | not_relevant | 0 | 0 | The paper investigates voriconazole, not hippocastani_semen. |
| PGx | Kodali_1990 | not_relevant | 0 | 0 | The paper describes the physical properties and polymorphism of synthetic diacylglycerols and does not involve pharmacogenomics or the drug hippocastani_semen. |
| popPK | Koele_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the drug BTZ-043, not hippocastani_semen. |
| PGx | Koh_2019 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for amitriptyline, not hippocastani_semen. |
| PGx | Kolesar_2022 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics in the context of EGFR TKIs for lung cancer and does not mention the drug 'hippocastani_semen'. |
| PGx | Koller_2020 | not_relevant | 0 | 0 | The paper studies aripiprazole and olanzapine, not hippocastani_semen. |
| PGx | Kong_2024 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for mercaptopurine, not hippocastani_semen. |
| PGx | Koyama_1993 | not_relevant | 0 | 0 | The paper concerns the pharmacokinetics of imipramine, not hippocastani_semen. |
| PGx | Kronbach_1987 | not_relevant | 0 | 0 | The paper describes HPLC assays for the metabolism of bufuralol, debrisoquine, and dextromethorphan, and does not mention hippocastani_semen. |
| PGx | Lang_1994 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of caffeine metabolism (CYP1A2/NAT2) in relation to colorectal cancer risk, not the pharmacokinetics or pharmacodynamics of hippocastani_semen. |
| PD | Lantz_2026 | not_relevant | 0 | 0 | The paper focuses on the effect of Prevotella bivia on antiretroviral pharmacokinetics and viral replication, not on the pharmacodynamics of Hippocastani semen. |
| popPK | Le_2001 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PD | Le_2001 | not_relevant | 0 | 0 | The paper describes a beta-galactosidase assay for yeast response to estrogens and does not mention Hippocastani semen or report any pharmacodynamic parameters for it. |
| popPK | Lee_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ramosetron, not hippocastani_semen. |
| popPK | Lehnert_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amiodarone, not hippocastani_semen. |
| PD | Lei_2010 | not_relevant | 0 | 0 | The paper discusses physical chemistry (adsorption at liquid/solid interfaces) and does not involve the drug Hippocastani semen or pharmacodynamics. |
| PD | Lejbman_2025 | not_relevant | 0 | 0 | The paper studies beta-lactam antibiotics (cefotaxime, piperacillin/tazobactam, meropenem) and does not mention Hippocastani semen or report any pharmacodynamic parameters for it. |
| popPK | Levêque_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vinorelbine, not hippocastani_semen. |
| PGx | Lewis_2007 | not_relevant | 0 | 0 | The paper studies docetaxel, not hippocastani_semen. |
| PGx | Li_2019 | not_relevant | 0 | 0 | The paper studies montelukast, not hippocastani_semen. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The paper studies the metabolism of orbitazine, not hippocastani_semen, and does not report pharmacogenomic effects. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The paper studies the antiviral mechanism of ethacridine against SARS-CoV-2 and does not involve the drug hippocastani_semen or any pharmacokinetic parameters. |
| PD | Li_2021 | not_relevant | 0 | 0 | The paper reports pharmacological data for ethacridine, not Hippocastani semen. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper describes the isolation and biological activity of polyketides from a fungus, not the pharmacokinetics of hippocastani_semen. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of ginkgo flavone aglycone, not hippocastani_semen. |
| PD | Li_2025 | not_relevant | 0 | 0 | The paper focuses on rocuronium bromide, not Hippocastani semen. |
| PD | Li_2025_2 | not_relevant | 0 | 0 | The paper describes an in vitro stability assay for antibody therapeutics and does not report any pharmacodynamic or exposure-response data for Hippocastani semen. |
| PGx | Li_2026_2 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for tacrolimus, not hippocastani_semen. |
| popPK | Liard_1995 | irrelevant | 0 | 0 | The paper studies the HIV protease inhibitor BILA 2185 BS, not hippocastani_semen. |
| PD | Liard_1995 | not_relevant | 1 | 1 | The paper is an analytical method validation for BILA 2185 BS and only mentions in vitro IC50/EC50 values without providing an exposure-response or dose-response analysis for Hippocastani semen. |
| popPK | Lim_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 7,8-dihydroxyflavone (7,8-DHF), not hippocastani_semen. |
| PGx | Lin_2021 | not_relevant | 0 | 0 | The paper reports pharmacogenomics for azathioprine, not hippocastani_semen. |
| popPK | Lin_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carfilzomib, not hippocastani_semen. |
| popPK | Ling_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for voriconazole, not hippocastani_semen. |
| PGx | Ling_2024 | not_relevant | 0 | 0 | The paper studies voriconazole, not hippocastani_semen. |
| popPK | Ling_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ropivacaine, not hippocastani_semen. |
| popPK | Linnehan_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cefpodoxime, not hippocastani_semen. |
| PGx | Litalien_2005 | not_relevant | 0 | 0 | The paper discusses proton pump inhibitors, not hippocastani_semen. |
| PGx | Liu_1989 | not_relevant | 0 | 0 | The paper describes an analytical method for glucuronide conjugates and mentions validation for pharmacogenetics, but it does not report specific pharmacogenomic effects on PK/PD parameters for hippocastani_semen. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Liu_2023 | not_relevant | 0 | 0 | The paper studies sesquiterpenes from Eupatorium adenophorum, not Hippocastani semen, and reports antifungal activity without the specific drug or PD parameters requested. |
| popPK | Lou_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for eravacycline, not hippocastani_semen. |
| popPK | Love_2015 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Love_2015 | not_relevant | 0 | 0 | The paper focuses on buprenorphine in horses, not Hippocastani semen. |
| PGx | Luo_2025 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for exemestane, not hippocastani_semen. |
| PGx | Luu_1995 | not_relevant | 0 | 0 | The paper studies ethanol metabolism, not the pharmacokinetics or pharmacodynamics of hippocastani_semen. |
| PGx | Ma_2018 | not_relevant | 0 | 0 | The paper reports pharmacogenomics for theophylline, not hippocastani_semen. |
| PGx | Maeda_2023 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of abemaciclib, not hippocastani_semen. |
| popPK | Manchandani_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for Polymyxin B, not hippocastani_semen. |
| popPK | Maranchick_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pyrazinamide and ethambutol, not hippocastani_semen. |
| PGx | Marinac_1995 | not_relevant | 0 | 0 | The study investigates dextromethorphan, not hippocastani_semen. |
| PGx | Marquet_2021 | not_relevant | 0 | 0 | The paper studies tacrolimus, not hippocastani_semen. |
| popPK | Martín-Cerezuela_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of isavuconazole, not hippocastani_semen. |
| PD | Martínez_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of Doxycycline in alpacas and does not mention Hippocastani semen or report any pharmacodynamic or exposure-response relationships. |
| popPK | McManamey_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pimobendan, not hippocastani_semen. |
| PGx | Meakin_2023 | not_relevant | 0 | 0 | The paper characterizes CYP enzyme activity in sheep pregnancy models and does not involve the drug hippocastani_semen or any pharmacogenomic analysis. |
| popPK | Meyer_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ethaverine, not hippocastani_semen. |
| PGx | Miljković_2022 | not_relevant | 0 | 0 | The paper studies itraconazole, not hippocastani_semen, and explicitly states that analyzed genotypes could not be related to pharmacokinetic differences. |
| PD | Minamijima_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of tranexamic acid in horses and does not report any pharmacodynamic or exposure-response relationship for Hippocastani semen. |
| PGx | Moltó_2013 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on the pharmacokinetics of darunavir and ritonavir, not hippocastani_semen. |
| popPK | Morales_2025 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Morales_2025 | not_relevant | 0 | 0 | The paper focuses on Propofol and Fentanyl, not Hippocastani semen. |
| popPK | Morath_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for apixaban, not hippocastani_semen. |
| popPK | Morse_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lysergic acid diethylamide (LSD), not hippocastani_semen. |
| PGx | Morse_2025 | not_relevant | 0 | 0 | The paper studies LSD, not hippocastani_semen. |
| PGx | Mouly_2005 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of saquinavir, not hippocastani_semen. |
| PGx | Mugusi_2024 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for methadone, not hippocastani_semen. |
| PGx | Mukonzo_2009 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on efavirenz, not hippocastani_semen. |
| PGx | Musuamba_2009 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of tacrolimus, not hippocastani_semen. |
| PGx | Nafchi_2025 | not_relevant | 0 | 0 | The paper is a general review of cancer pharmacogenetics and does not mention the drug 'hippocastani_semen' or specific pharmacokinetic/pharmacodynamic parameters for it. |
| popPK | Nakai_2025 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for tranexamic acid, not hippocastani_semen. |
| popPK | Nel_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ceftriaxone, not hippocastani_semen. |
| PGx | Nikanjam_2022 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for efavirenz, not hippocastani_semen. |
| popPK | Nikolic_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tamsulosin, not hippocastani_semen. |
| PGx | Nio_2022 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for gefitinib, not hippocastani_semen. |
| popPK | Nyangwa_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for pretomanid, not hippocastani_semen. |
| PD | Nyangwa_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of pretomanid, not Hippocastani semen, and does not report a PD model or numeric PD parameters for the queried substance. |
| PGx | Okda_2024 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of Bisoprolol, not hippocastani_semen. |
| popPK | Olesen_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pregabalin, not hippocastani_semen. |
| PGx | Ortega-Vázquez_2021 | not_relevant | 0 | 0 | The paper studies clozapine, not hippocastani_semen. |
| popPK | Pai_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dalbavancin, not hippocastani_semen. |
| PD | Panigati_1992 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the full text, abstract, or data required to determine if numeric PD parameters are reported. |
| popPK | Parvin_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ropivacaine, not hippocastani_semen. |
| PGx | Patel_2019 | not_relevant | 0 | 0 | The paper studies a drug-herb interaction (rooibos extract) in rats, not a pharmacogenomic effect of a gene variant on a PK/PD parameter. |
| PGx | Pawar_2026 | not_relevant | 0 | 0 | The paper studies drug-herb interactions (CYP2D6 inhibition by bergamottin/diosmetin) affecting amoxapine, not the pharmacogenomics of hippocastani_semen. |
| popPK | Peña-Lorenzo_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of isavuconazole, not hippocastani_semen. |
| PD | Phelouzat_1993 | not_relevant | 0 | 0 | The paper characterizes sinefungin-resistant Leishmania donovani and does not involve the drug Hippocastani semen or report any pharmacodynamic parameters. |
| PGx | Pilkington_1992 | not_relevant | 0 | 0 | The paper reviews the pharmacology of acitretin and does not mention hippocastani_semen or any pharmacogenomic effects. |
| PGx | Qian_2024 | not_relevant | 0 | 0 | The study investigates metoprolol, not hippocastani_semen. |
| popPK | Qin_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of linezolid, not hippocastani_semen. |
| popPK | Racké_1990 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on opioid receptors and dopamine release in rat pituitary glands, unrelated to the pharmacokinetics of hippocastani_semen. |
| PD | Racké_1990 | not_relevant | 0 | 0 | The paper studies opioid receptor antagonists on dopamine release in rat pituitary glands and does not mention Hippocastani semen. |
| PGx | Radeva-Llieva_2022 | not_relevant | 0 | 0 | The paper studies drug-herb interactions involving sildenafil, not the pharmacogenomics of hippocastani_semen. |
| PGx | Raichura_2025 | not_relevant | 0 | 0 | The paper evaluates P450 inhibition by Withania somnifera (ashwagandha), not hippocastani_semen, and does not report pharmacogenomic effects. |
| popPK | Rao_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vancomycin, not hippocastani_semen. |
| PD | Rao_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of imipenem and its exposure-response relationship (PK/PD indices like fAUC/MIC) for bacterial clearance, not on the drug 'Hippocastani semen'. |
| PGx | Rasmussen_1994 | not_relevant | 0 | 0 | The paper describes an analytical method for theophylline metabolites and does not involve hippocastani_semen or report pharmacogenomic effects. |
| PGx | Razaq_2026 | not_relevant | 0 | 0 | The paper investigates clopidogrel, not hippocastani_semen. |
| popPK | Rehani_1979 | irrelevant | 0 | 0 | The paper describes a radiometric measurement device and does not contain any pharmacokinetic data for hippocastani_semen. |
| PGx | Robbins_1995 | not_relevant | 0 | 0 | The paper studies the antiviral drug PMEA, not hippocastani_semen. |
| PGx | Roberts_1995 | not_relevant | 0 | 0 | The study investigates the effects of ethanol withdrawal on CYP450 enzymes in rats and does not involve the drug hippocastani_semen or any pharmacogenomic analysis of its PK/PD parameters. |
| popPK | Rodrigues_2024 | irrelevant | 0 | 0 | The paper studies the antiviral and antifungal activity of a plant extract (Byrsonima coccolobifolia) and does not involve the drug hippocastani_semen or any pharmacokinetic parameters. |
| PGx | Rohr_2024 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (ritonavir with FXa inhibitors) and CYP enzyme activity, but does not report pharmacogenomic effects (gene variants) on the PK/PD of hippocastani_semen. |
| popPK | Rolsma_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cefepime, not hippocastani_semen. |
| popPK | Rosseel_1984 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ciramadol, not hippocastani_semen. |
| PGx | Ryu_2024 | not_relevant | 0 | 0 | The paper investigates the effect of Perillyl Alcohol on CYP enzymes, not the pharmacogenomics of hippocastani_semen. |
| PD | Sadaka_2025 | not_relevant | 2 | 1 | The paper reports PK data (concentrations vs. renal function) and clinical outcomes, but does not model or report a quantitative exposure-response or dose-response relationship (e.g., Emax, EC50, or effect vs. concentration curve) for the drug. |
| popPK | Sadan_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nicardipine, not hippocastani_semen. |
| PGx | Saleh_2024 | not_relevant | 0 | 0 | The paper studies valproic acid and carbamazepine, not hippocastani_semen. |
| popPK | Sam_2010 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for mycophenolic acid (MPA), not hippocastani_semen. |
| popPK | Schepp_1994 | irrelevant | 0 | 0 | The paper studies exendin-4 and GLP-1 receptor pharmacology in rat parietal cells and does not involve hippocastani_semen or pharmacokinetic parameters. |
| PD | Scott_2022 | not_relevant | 0 | 0 | The paper describes the validation of an LC-MS/MS method for vistusertib and does not contain any pharmacodynamic or exposure-response data. |
| PGx | Shang_2018 | not_relevant | 0 | 0 | The paper investigates food and grapefruit juice interactions with blonanserin, not the pharmacogenomics of hippocastani_semen. |
| popPK | Shi_1995 | irrelevant | 0 | 0 | no_text gate: only 35 chars of text extracted (&lt; 400) |
| PD | Shi_1995 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric PD parameters, curves, or analysis results. |
| PGx | Shibata_2023 | not_relevant | 0 | 0 | The paper studies capecitabine, not hippocastani_semen. |
| PGx | Shilbayeh_2024 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on risperidone, not hippocastani_semen. |
| popPK | Sierosławska_2010 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| PD | Sierosławska_2010 | not_relevant | 0 | 0 | The paper discusses cyanobacterial toxicity in a reservoir and does not mention Hippocastani semen or report any pharmacodynamic or exposure-response data. |
| PGx | Sindrup_1993 | not_relevant | 0 | 0 | The paper studies citalopram, not hippocastani_semen. |
| PD | Sitthiangkool_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of Florfenicol in crocodiles and does not mention Hippocastani semen or report any pharmacodynamic or exposure-response relationships. |
| popPK | Solana-Altabella_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for quizartinib, not hippocastani_semen. |
| PGx | Someya_1990 | not_relevant | 0 | 0 | The paper studies haloperidol, not hippocastani_semen. |
| PGx | Song_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of sorafenib, not hippocastani_semen. |
| PGx | Spigset_1995 | not_relevant | 0 | 0 | The paper studies fluvoxamine, not hippocastani_semen. |
| PGx | Stocco_2015 | not_relevant | 0 | 0 | The paper investigates thiopurines and aminosalicylates, not hippocastani_semen. |
| PGx | Sugiarto_2022 | not_relevant | 0 | 0 | The paper studies artemether-lumefantrine, not hippocastani_semen. |
| PGx | Sugiyama_2010 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on gemcitabine, not hippocastani_semen. |
| PGx | Sun_2023 | not_relevant | 0 | 0 | The paper studies the drug Lekethromycin in dogs, not the drug hippocastani_semen, and reports in vitro CYP inhibition rather than pharmacogenomic effects. |
| PGx | Sun_2025 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for imatinib, not hippocastani_semen. |
| popPK | Sun_2025_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of piperacillin, not hippocastani_semen. |
| PGx | Sundell_2020 | not_relevant | 0 | 0 | The paper reports pharmacogenomics for ethambutol, not hippocastani_semen. |
| PGx | Sundell_2022 | not_relevant | 0 | 0 | The paper studies the pharmacogenetics of Isoniazid and Rifampin, not hippocastani_semen. |
| PGx | Szabó_2024 | not_relevant | 0 | 0 | The paper studies cariprazine, not hippocastani_semen. |
| PGx | Szkutnik-Fiedler_2024 | not_relevant | 0 | 0 | The paper studies a drug-drug interaction between olaparib and regorafenib in rats, not a pharmacogenomic effect on hippocastani_semen. |
| PGx | Sánchez-Bayona_2025 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenomics in solid tumors and does not mention hippocastani_semen or specific PK/PD effects for this drug. |
| PGx | Sánchez_2011 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for efavirenz, not hippocastani_semen. |
| popPK | Tang_2024 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PD | Tang_2024 | not_relevant | 0 | 0 | The paper focuses on the immobilization of Coprinus comatus and antioxidant activity, containing no pharmacodynamic or exposure-response data for Hippocastani semen. |
| popPK | Thomas_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of isoniazid, not hippocastani_semen. |
| PGx | Thomas_2026 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for isoniazid, not hippocastani_semen. |
| PGx | Thomas_2026_2 | not_relevant | 0 | 0 | The paper studies venlafaxine, not hippocastani_semen. |
| PGx | Thomford_2025 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on dolutegravir and artemether-lumefantrine, not hippocastani_semen. |
| popPK | Tognolini_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lidocaine, not hippocastani_semen. |
| popPK | Trikha_1994 | irrelevant | 0 | 0 | The paper describes the purification and characterization of snake venom enzymes (fibrolase) and contains no pharmacokinetic data for hippocastani_semen. |
| PD | Trikha_1994 | not_relevant | 0 | 0 | The paper reports enzymatic activity (EC50) for snake venom fibrolase isoforms, not a pharmacodynamic or exposure-response relationship for Hippocastani semen. |
| PD | Trozzi_2026 | not_relevant | 0 | 0 | The paper describes a UHPLC-MS/MS method for therapeutic drug monitoring of Aztreonam/Avibactam and does not contain any pharmacodynamic or exposure-response analysis for Hippocastani semen. |
| PGx | Tsuchiya_2025 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for tenofovir alafenamide, not hippocastani_semen. |
| PD | Töugu_1995 | not_relevant | 0 | 0 | The paper studies the kinetics of peptide synthesis by chymotrypsin in frozen solutions, not the pharmacodynamics of Hippocastani semen. |
| PGx | Udomsawaengsup_2025 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of lansoprazole, not hippocastani_semen. |
| popPK | Upton_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cycloserine (terizidone) and clofazimine, not hippocastani_semen. |
| popPK | Vandecasteele-Thienpont_1980 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bromhexine, not hippocastani_semen. |
| PD | Vignal_2025 | not_relevant | 0 | 0 | The paper describes a bioanalytical method for drug quantification and does not report any pharmacodynamic or exposure-response data for Hippocastani semen or any other drug. |
| PGx | Wada_2023 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of sparsentan, not hippocastani_semen. |
| PGx | Wang_2014 | not_relevant | 0 | 0 | The paper studies sirolimus, not hippocastani_semen. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of pralsetinib, not hippocastani_semen. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of tulathromycin, not hippocastani_semen. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The paper studies citalopram metabolism, not hippocastani_semen. |
| PGx | Wang_2025_2 | not_relevant | 0 | 0 | The paper studies dabrafenib, not hippocastani_semen. |
| PD | Wang_2025_3 | not_relevant | 0 | 0 | The paper describes the development and validation of an LC-MS/MS method for quantifying omadacycline in plasma and does not report any pharmacodynamic (PD) or exposure-response analysis, nor does it provide numeric PD parameters. |
| PGx | Watanabe_2023 | not_relevant | 0 | 0 | The paper discusses asparaginase, not hippocastani_semen. |
| PGx | Waterborg_1993 | not_relevant | 0 | 0 | The paper studies histone synthesis in alfalfa and does not involve pharmacogenomics or the drug hippocastani_semen. |
| PGx | Wei_2022 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of mycophenolate mofetil, not hippocastani_semen. |
| PGx | Wolf_1993 | not_relevant | 0 | 0 | The paper investigates the mechanism of tamoxifen resistance in breast cancer and does not involve the drug hippocastani_semen or any pharmacogenomic analysis. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for daptomycin, not hippocastani_semen. |
| PGx | Wu_2025 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for voriconazole, not hippocastani_semen. |
| PGx | Wurtz_1985 | not_relevant | 0 | 0 | The paper studies glucocorticoid action on chromatin and MMTV RNA in mouse cells, not the pharmacokinetics or pharmacodynamics of hippocastani_semen. |
| PGx | Xia_2026 | not_relevant | 0 | 0 | The paper investigates trimethoprim, not hippocastani_semen. |
| PGx | Xie_1995 | not_relevant | 0 | 0 | The paper describes an analytical method for mephenytoin metabolism and does not involve the drug hippocastani_semen. |
| popPK | Xu_2018 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | Xu_2018 | not_relevant | 0 | 0 | The paper focuses on the isolation and antioxidant activity of triterpenoids from Myricaria squamosa, not on the pharmacodynamics or exposure-response of Hippocastani semen. |
| PGx | Xu_2023 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of aripiprazole, not hippocastani_semen. |
| PGx | Xu_2024 | not_relevant | 0 | 0 | The paper studies nirmatrelvir/ritonavir, not hippocastani_semen. |
| PGx | Xue_2017 | not_relevant | 0 | 0 | The paper studies warfarin, not hippocastani_semen. |
| PGx | Xue_2025 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for tamoxifen, not hippocastani_semen. |
| PGx | Yang_2023 | not_relevant | 0 | 0 | The paper reports pharmacogenomics for apatinib, not hippocastani_semen. |
| PGx | Yang_2023_2 | not_relevant | 0 | 0 | The paper studies oxcarbazepine, not hippocastani_semen. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of polymyxin B, not hippocastani_semen. |
| popPK | Yata_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sildenafil, not hippocastani_semen. |
| PGx | Ye_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of fluvoxamine, not hippocastani_semen. |
| PGx | Ye_2024 | not_relevant | 0 | 0 | The paper studies tofacitinib, not hippocastani_semen. |
| PGx | Yong_2022 | not_relevant | 0 | 0 | The paper studies Strobilanthes crispus, not hippocastani_semen, and reports in vitro CYP inhibition without any pharmacogenomic analysis. |
| popPK | Yoo_2016 | irrelevant | 0 | 0 | The paper investigates the cytotoxicity of ionic liquids and does not involve the drug hippocastani_semen or any pharmacokinetic parameters. |
| PD | Yoo_2016 | not_relevant | 0 | 0 | The paper studies ionic liquids, not Hippocastani semen, and focuses on molecular mechanisms of membrane disruption rather than pharmacodynamic modeling of the specified drug. |
| popPK | Zamri_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for polymyxin B, not hippocastani_semen. |
| PD | Zeng_2023 | not_relevant | 0 | 0 | The paper focuses on Astragali Radix-Carthami Flos, not Hippocastani semen, and does not report PD parameters for the specified drug. |
| PGx | Zhan_2023 | not_relevant | 0 | 0 | The paper investigates the inhibitory mechanism of vortioxetine on CYP450 enzymes in vitro and does not report any pharmacogenomic effects (gene variants) on PK/PD parameters for hippocastani_semen. |
| popPK | Zhang_2011 | irrelevant | 0 | 0 | The paper studies flavonoids from Lupinus texensis for antioxidant activity and does not involve hippocastani_semen or pharmacokinetic parameters. |
| PGx | Zhang_2018 | not_relevant | 0 | 0 | The paper studies sunitinib, not hippocastani_semen. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper studies aripiprazole, not hippocastani_semen. |
| PGx | Zhang_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of fluoxetine (CYP2D6 variants), not hippocastani_semen. |
| PGx | Zhang_2024_2 | not_relevant | 0 | 0 | The paper studies the effect of high altitude environment on warfarin PK/PD, not a pharmacogenomic effect on hippocastani_semen. |
| popPK | Zhang_2024_3 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for nirmatrelvir, not hippocastani_semen. |
| PD | Zhang_2026 | not_relevant | 2 | 0 | The paper reports qualitative changes in seizure scores and PK parameters under high altitude but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect relationship. |
| PD | Zhang_2026_2 | not_relevant | 0 | 0 | The paper describes the development and validation of a bioanalytical method for quantifying MMAE and mentions its application to PK studies, but it does not report any pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| PGx | Zhang_2026_3 | not_relevant | 0 | 0 | The paper studies neratinib, not hippocastani_semen. |
| PGx | Zhao_2023 | not_relevant | 0 | 0 | The paper studies voriconazole, not hippocastani_semen. |
| PGx | Zhao_2024 | not_relevant | 0 | 0 | The paper studies lacosamide, not hippocastani_semen. |
| PGx | Zhao_2024_2 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for lamotrigine, not hippocastani_semen. |
| PGx | Zhao_2024_3 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (metoprolol and Ginkgo) and does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The paper is a plant virology study on Cucumber Mosaic Virus and does not involve the drug hippocastani_semen or any pharmacokinetic parameters. |
| PD | Zhao_2026 | not_relevant | 0 | 0 | The paper studies plant virology and a small-molecule LLPS modulator (D3) against Cucumber Mosaic Virus, not the pharmacodynamics of Hippocastani semen. |
| PD | Zhu_2023 | not_relevant | 0 | 0 | The paper studies Perilla Folium, not Hippocastani semen. |
| PGx | Zyryanov_2022 | not_relevant | 0 | 0 | The paper studies ciprofloxacin, not hippocastani_semen. |
| popPK | Zyryanov_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for meropenem, not hippocastani_semen. |
| popPK | de_2013 | irrelevant | 0 | 0 | The paper studies mycotoxins and their cytotoxic effects on soybean cells, not the pharmacokinetics of hippocastani_semen. |
| PGx | de_2026 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomic effect of CYP2D6 on metoprolol, not hippocastani_semen. |
| PGx | van_1999 | not_relevant | 0 | 0 | The paper studies the effect of grapefruit juice on artemether, not a gene variant on hippocastani_semen. |
| PGx | van_2024 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of docetaxel and midazolam, not hippocastani_semen. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

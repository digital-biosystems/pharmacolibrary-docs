<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J07B&quot;,&quot;href&quot;:&quot;atc/J07B.md&quot;},{&quot;label&quot;:&quot;COVID-19 mRNA vaccine&quot;}]"></div>

# COVID-19 mRNA vaccine

- **generic name:** COVID-19 mRNA vaccine
- **ATC codes:** `J07BX03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Several such vaccines are authorised in the European Union, though one candidate was withdrawn from rolling review.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q106350062](https://www.wikidata.org/wiki/Q106350062) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:32 | 5:19 | 0/0/0 | 2/2/0 | 0/0/0 | 176,933/1,928 | einfracz / qwen3.8-27b | 19 | 2/7 | 19/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jiang_2025_2_VE](drugs/drug_covid_19_mrna_vaccine/pd_Jiang_2025_2_VE.md) | vaccine effectiveness ← covid_19_mrna_vaccine · model not identified | — | Jiang J et al., Estimation of trajectory of COVID-19 va…, Vaccine (2025) | [10.1016/j.vaccine.2025.127067](https://doi.org/10.1016/j.vaccine.2025.127067) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pascolo_2021_neutralizing_antibodies](drugs/drug_covid_19_mrna_vaccine/pd_Pascolo_2021_neutralizing_antibodies.md) | neutralizing antibodies ← mRNA · stimulation effect | — | Pascolo S, Synthetic Messenger RNA-Based Vaccines:…, Viruses (2021) | [10.3390/v13020270](https://doi.org/10.3390/v13020270) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Chen_2022_Tumor_volume](drugs/drug_covid_19_mrna_vaccine/pd_Chen_2022_Tumor_volume.md) | Tumor volume ← covid_19_mrna_vaccine · model not identified | — | Chen J et al., Lipid nanoparticle-mediated lymph node-…, Proceedings of the National… (2022) | [10.1073/pnas.2207841119](https://doi.org/10.1073/pnas.2207841119) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Morgan_2022_myocarditis](drugs/drug_covid_19_mrna_vaccine/pd_Morgan_2022_myocarditis.md) | myocarditis · model not identified | — | Morgan MC et al., COVID-19 vaccine-associated myocarditis, World journal of cardiology (2022) | [10.4330/wjc.v14.i7.382](https://doi.org/10.4330/wjc.v14.i7.382) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 324 matched, 27 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Torres_2022.pdf` | Torres I et al., SARS-CoV-2 Omicron BA.1 variant breakth…, Journal of medical virology (2022) | pd | 4 | [10.1002/jmv.27867](https://doi.org/10.1002/jmv.27867) | [35585782](https://www.ncbi.nlm.nih.gov/pubmed/35585782) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T15:30:38.884158+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Collier_2022 | not_relevant | 0 | 0 | The study examines the effect of immunosuppressive therapy (phenotypic/clinical status) on vaccine immunogenicity, not a genetic variant or genotype on PK/PD parameters. |
| PGx | Delmonte_2024 | not_relevant | 2 | 5 | The study investigates the association between HLA alleles and T-cell receptor repertoire/anti-IFN antibodies in the context of infection or vaccine response, but it does not report specific pharmacokinetic (PK) or quantitative pharmacodynamic (PD) parameters for the vaccine as a function of genotype. |
| PGx | Jiang_2025_2 | not_relevant | 0 | 0 | The paper discusses time-varying vaccine effectiveness using a PK/PD model but does not report any pharmacogenomic (genetic) effects on PK or PD parameters. |
| popPK | Kasamatsu_2025 | irrelevant | 0 | 0 | The study measures immunogenicity (antibody titers) rather than pharmacokinetic parameters (e.g., clearance, volume of distribution). |
| popPK | Khalid-Salako_2025 | irrelevant | 0 | 0 | The paper is a general review of nanocarriers for drug delivery and does not report quantitative pharmacokinetic parameters for the COVID-19 mRNA vaccine. |
| PGx | Kingstad-Bakke_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of CD8+ T cell immunity and tissue distribution following vaccination, not pharmacogenomic variations affecting PK/PD parameters. |
| PGx | Kumar_2025 | not_relevant | 0 | 0 | The paper analyzes general immune responses (antibody titers and durability) in a small cohort but does not investigate the effect of specific gene variants or genotypes on these pharmacodynamic parameters. |
| popPK | Parrot_2026 | irrelevant | 0 | 0 | The paper is a review of nanoparticle pharmacokinetic modeling frameworks and does not report original quantitative PK parameters for the mRNA vaccine; it only mentions the vaccine as an example of LNP delivery success. |
| popPK | Sarkar_2023 | irrelevant | 0 | 0 | The paper is a review of nanoparticulate formulations for chemotherapeutic agents (specifically paclitaxel and doxorubicin) and does not discuss or report pharmacokinetic parameters for the covid_19_mrna_vaccine. |
| popPK | Sasikala_2026 | irrelevant | 0 | 0 | The paper is a review of transdermal delivery technologies and does not report pharmacokinetic parameters for a specific drug subject like covid_19_mrna_vaccine. |
| popPK | Su_2025 | irrelevant | 0 | 0 | The paper is a review on nanotechnology and immunotherapy for osteosarcoma and does not contain pharmacokinetic data for an mRNA vaccine. |
| popPK | Takahama_2026 | irrelevant | 0 | 0 | The study investigates the immunogenicity (antibody and T-cell responses) of the vaccine, not its pharmacokinetic disposition parameters. |
| popPK | Teli_2022 | irrelevant | 0 | 0 | The paper describes in silico fragment-based drug design for SARS-CoV-2 main protease inhibitors and does not contain any pharmacokinetic data for an mRNA vaccine. |
| PGx | Wayment-Steele_2021 | not_relevant | 0 | 0 | The paper discusses mRNA structural design and computational models for hydrolysis stability, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

# lasmiditan

- **generic name:** lasmiditan
- **ATC codes:** `N02CC08`
- **DrugBank:** [DB11732](https://go.drugbank.com/drugs/DB11732)
- **groups:** approved, investigational

## About

**Description.** Lasmiditan is an oral medication used in the termination of migraine headaches that was first approved for use in the United States in October 2019.[L9338,L9356] It was also approved by the European Commission on August 17, 2022.[L43997]

Traditionally, the triptan class of anti-migraine medications (e.g. [sumatriptan]) have seen preferential use in the acute treatment of migraines due to their relatively favourable efficacy and safety. Their use is not devoid of concerns, however, and their vasoconstrictive activity can lead to blood pressure lability and other cardiovascular side effects - for this reason, these medications are less suitable for use in patients with pre-existing cardiovascular disorders.[A187316] Triptans abort migraines via action at several serotonin receptors, including 5-HT<sub>1D</sub> and 5-HT<sub>1B</sub> receptors, and activity at the 5-HT<sub>1B</sub> receptor has been specifically implicated in their vasoconstrictive activity.[A187316,A187322]

Lasmiditan, in contrast, is a highly selective agonist of 5-HT<sub>1F</sub> receptors, carrying virtually no affinity for other receptors which appear to be largely responsible for the adverse effect profile of its predecessors - in other words, lasmiditan’s selectivity allows for the successful termination of migraines without causing vasoconstriction.[A187322,A187319] Selectivity for  5-HT<sub>1F</sub>, a lack of vasoconstrictive activity, and the ability to terminate migraines through neuronal inhibition has resulted in the creation of a new class of anti-migraine medications in which lasmiditan is the first and only member: the neurally-acting anti-migraine medications (NAAMAs).[A187322,A187307]

**Indication.** Lasmiditan is indicated for the acute treatment of migraine with or without aura in adults.[L9338,L43992]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-29 20:41 | 7:55 | 0/0/0 | 0/0/0 | 0/0/0 | 60,710/6,935 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 0/5 | 7/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> | [Tsai_2021](drugs/drug_lasmiditan/Lasmiditan_Tsai2021_iiva_see.md) | Tsai M et al., Pharmacokinetics, Safety, and Tolerabil…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00966-z](https://doi.org/10.1007/s40262-020-00966-z) |
| <span class="pk-badge pk-badge--neutral">not_reviewed</span> | [Tsai_2021](drugs/drug_lasmiditan/Lasmiditan_Tsai2021_iiva_see_pediatric_patients_with_migrain.md) | Tsai M et al., Pharmacokinetics, Safety, and Tolerabil…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00966-z](https://doi.org/10.1007/s40262-020-00966-z) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Tsai_2021](drugs/drug_lasmiditan/Lasmiditan_Tsai2021_population_mean_see.md) | Tsai M et al., Pharmacokinetics, Safety, and Tolerabil…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00966-z](https://doi.org/10.1007/s40262-020-00966-z) |
| <span class="pk-badge pk-badge--neutral">not_reviewed</span> | [Tsai_2021](drugs/drug_lasmiditan/Lasmiditan_Tsai2021_population_mean_see_pediatric_patients_w.md) | Tsai M et al., Pharmacokinetics, Safety, and Tolerabil…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00966-z](https://doi.org/10.1007/s40262-020-00966-z) |

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jabir_2025.pdf` | Jabir SA et al., Preparation, In-vitro, Ex-vivo, and Pha…, Pharmaceutical nanotechnolo… (2025) | popPK | 8 | [10.2174/0122117385285009231222072303](https://doi.org/10.2174/0122117385285009231222072303) | [38173066](https://pubmed.ncbi.nlm.nih.gov/38173066) | The study reports quantitative PK parameters (Cmax, Tmax, AUC) for lasmiditan in rabbits, but lacks compartmental model parameters (CL, V, ka) and specific half-life values. |

<sub>queue written 2026-08-29T20:38:28.483243+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ferrari_2010 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for migraine treatment and does not report any pharmacokinetic parameters or disposition data for lasmiditan. |
| popPK | Färkkilä_2012 | irrelevant | 0 | 0 | The paper is a Phase 2 efficacy and safety study for migraine treatment and does not report any pharmacokinetic parameters or disposition data for lasmiditan. |
| popPK | Giner-Soriano_2025 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for migraine preventive treatments (propranolol, amitriptyline, flunarizine, topiramate) and does not report pharmacokinetic parameters for lasmiditan. |
| popPK | Hasan_2022 | irrelevant | 0 | 0 | The paper is a network meta-analysis of paresthesia risk (safety/adverse events) and does not report any pharmacokinetic parameters for lasmiditan. |
| popPK | Hougaard_2015 | irrelevant | 0 | 0 | The paper is a review of dose-response curves for efficacy and tolerability, not a pharmacokinetic study reporting quantitative disposition parameters for lasmiditan. |
| popPK | Popp_2022 | irrelevant | 0 | 0 | The paper is a systematic review of ivermectin for COVID-19 and does not contain any pharmacokinetic data for lasmiditan. |
| popPK | Sakai_2021 | irrelevant | 0 | 0 | The paper is a Phase 2 efficacy and safety study for migraine treatment and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for lasmiditan. |
| popPK | Tfelt-Hansen_2019 | irrelevant | 0 | 0 | The paper is a review of therapeutic efficacy and delay of effect, not a pharmacokinetic study, and it does not report quantitative PK parameters (CL, V, ka, etc.) for lasmiditan. |
| popPK | Tfelt-Hansen_2021 | irrelevant | 0 | 0 | The paper is a review of pharmacological strategies for migraine and does not report original quantitative pharmacokinetic parameters for lasmiditan. |
| popPK | Wilbraham_2020 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (Cmax, AUC, t1/2) for lasmiditan, but lacks compartmental model parameters (CL, V, Q, ka) and is primarily an abuse potential study. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_lasmiditan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>

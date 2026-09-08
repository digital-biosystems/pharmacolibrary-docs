# argatroban

- **generic name:** argatroban
- **ATC codes:** `B01AE03`
- **DrugBank:** [DB00278](https://go.drugbank.com/drugs/DB00278)
- **groups:** approved, investigational

## About

**Description.** Argatroban is a direct, selective thrombin inhibitor. The American College of Cardiologists (ACC) recommend using bivalirudin or argatroban in patients who have had, or at risk for, heparin induced thrombocytopenia (HIT) and are undergoing percutaneous coronary intervention. Argatroban is a non-heparin anticoagulant shown to both normalize platelet count in patients with HIT and prevent the formation of thrombi. Parental anticoagulants must be stopped and a baseline activated partial thromboplastin time must be obtained prior to administering argatroban.

**Indication.** Argatroban is indicated for prevention and treatment of thrombosis caused by heparin-induced thrombocytopenia (HIT). It is also indicated for use in patients with, or at risk for, HIT who are undergoing percutaneous coronary intervention.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 16:32 | 2:15 | 2/0/0 | 2/1/0 | 0/0/0 | 52,587/4,630 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 2/1 | 1/4 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Akimoto_2011](drugs/drug_argatroban/Argatroban_Akimoto2011_reference.md) | Akimoto K et al., Anticoagulation with argatroban for ele…, Journal of clinical pharmac… (2011) | [10.1177/0091270010372627](https://doi.org/10.1177/0091270010372627) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cox_2004](drugs/drug_argatroban/Argatroban_Cox2004_reference.md) | Cox DS et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2004) | [10.1177/0091270004267651](https://doi.org/10.1177/0091270004267651) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Akimoto_2011](drugs/drug_argatroban/pd_Akimoto_2011_activated_clotting_time.md) | Akimoto K et al., Anticoagulation with argatroban for ele…, Journal of clinical pharmac… (2011) | [10.1177/0091270010372627](https://doi.org/10.1177/0091270010372627) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Akimoto_2011](drugs/drug_argatroban/pd_Akimoto_2011_activated_partial_thromboplastin_time.md) | Akimoto K et al., Anticoagulation with argatroban for ele…, Journal of clinical pharmac… (2011) | [10.1177/0091270010372627](https://doi.org/10.1177/0091270010372627) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Akimoto_2011](drugs/drug_argatroban/pd_Akimoto_2011_ecarin_time.md) | Akimoto K et al., Anticoagulation with argatroban for ele…, Journal of clinical pharmac… (2011) | [10.1177/0091270010372627](https://doi.org/10.1177/0091270010372627) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Akimoto_2011](drugs/drug_argatroban/pd_Akimoto_2011_endogenous_thrombin_potential.md) | Akimoto K et al., Anticoagulation with argatroban for ele…, Journal of clinical pharmac… (2011) | [10.1177/0091270010372627](https://doi.org/10.1177/0091270010372627) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Akimoto_2011](drugs/drug_argatroban/pd_Akimoto_2011_prothrombinase_induced_clotting_time.md) | Akimoto K et al., Anticoagulation with argatroban for ele…, Journal of clinical pharmac… (2011) | [10.1177/0091270010372627](https://doi.org/10.1177/0091270010372627) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chang_2016](drugs/drug_argatroban/pd_Chang_2016_unknown.md) | Chang JB et al., A novel, rapid method to compare the th…, Scientific reports (2016) | [10.1038/srep29387](https://doi.org/10.1038/srep29387) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cox_2004](drugs/drug_argatroban/pd_Cox_2004_ACT.md) | Cox DS et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2004) | [10.1177/0091270004267651](https://doi.org/10.1177/0091270004267651) |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ahmad_2000.pdf` | Ahmad S et al., Pharmacokinetics of argatroban in prima…, International angiology : a… (2000) | popPK | 8 | not captured | [10905795](https://pubmed.ncbi.nlm.nih.gov/10905795) | The study reports PK parameters for argatroban in primates, but specific numeric values for clearance or volume are absent, with only qualitative descriptions and a half-life range provided. |
| `Tran_1999.pdf` | Tran JQ et al., Assessment of the potential pharmacokin…, Journal of clinical pharmac… (1999) | pgx | 7 | not captured | [10234600](https://www.ncbi.nlm.nih.gov/pubmed/10234600) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-06T16:30:34.913593+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2000 | relevant | 8 | 2 | The study reports PK parameters for argatroban in primates, but specific numeric values for clearance or volume are absent, with only qualitative descriptions and a half-life range provided. |
| popPK | Chang_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay measuring Hill coefficients and IC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Nowak_2009 | not_relevant | 0 | 0 | The text is a general overview of direct thrombin inhibitors and does not report any pharmacogenomic effects on argatroban's PK or PD parameters. |
| PGx | Scaglione_2013 | not_relevant | 0 | 0 | The paper is a general review of new oral anticoagulants and does not report any pharmacogenomic effects on argatroban. |
| popPK | Sivaraja_2020 | irrelevant | 0 | 0 | The study focuses on the efficacy and mechanism of a new drug (VE-1902), using argatroban only as a comparator in in-vitro assays without reporting any pharmacokinetic parameters for argatroban. |
| PD | Sivaraja_2020 | not_relevant | 1 | 1 | The paper focuses on VE-1902 and only provides a single comparative EC50 value for argatroban in a thrombin generation assay, lacking a full dose-response curve or PK/PD model for argatroban. |
| PGx | Tran_1999 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (erythromycin) rather than a pharmacogenomic effect (gene variant/genotype) on argatroban PK/PD. |
| popPK | Winn_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasomotor effects and does not report pharmacokinetic parameters. |
| PGx | Wu_2024 | not_relevant | 0 | 0 | The paper focuses on clopidogrel resistance and CYP2C19 genotypes; argatroban is only mentioned as a concomitant medication with a higher usage rate in the resistance group, with no pharmacogenomic analysis of argatroban PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_argatroban`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>

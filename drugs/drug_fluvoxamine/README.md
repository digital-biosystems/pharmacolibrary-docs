# fluvoxamine

- **generic name:** fluvoxamine
- **ATC codes:** `N06AB08`
- **DrugBank:** [DB00176](https://go.drugbank.com/drugs/DB00176)
- **groups:** approved, investigational

## About

**Description.** Fluvoxamine is an antidepressant which functions pharmacologically as a selective serotonin reuptake inhibitor. Though it is in the same class as other SSRI drugs, it is most often used to treat obsessive-compulsive disorder.
Fluvoxamine has been in use in clinical practice since 1983 and has a clinical trial database comprised of approximately 35,000 patients. It was launched in the US in December 1994 and in Japan in June 1999. As of the end of 1995, more than 10 million patients worldwide have been treated with fluvoxamine.

**Indication.** Indicated predominantly for the management of depression and for Obsessive Compulsive Disorder (OCD) [FDA Label]. Has also been used in the management of bulimia nervosa [A250].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 26 | 0/0 | 14/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 47 matched, 47 returned
- **screened:** 0  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Geldof_2007.pdf` | Geldof M et al., Pharmacokinetic-pharmacodynamic modelin…, European journal of pharmac… (2007) | popPK | 10 | [10.1016/j.ejps.2007.07.004](https://doi.org/10.1016/j.ejps.2007.07.004) | [17825539](https://pubmed.ncbi.nlm.nih.gov/17825539) | The paper describes a population three-compartment PK model for fluvoxamine in rats and explicitly lists all numeric parameter estimates (CL, V1, V2, Q2, V3, Q3) in the main text. |
| `Strauss_1999.pdf` | Strauss WL et al., Characterization of human brain pharmac…, Biological psychiatry (1999) | popPK | 10 | [10.1016/s0006-3223(98)00324-2](https://doi.org/10.1016/s0006-3223(98)00324-2) | [10349045](https://pubmed.ncbi.nlm.nih.gov/10349045) | The paper directly reports quantitative two-compartment pharmacokinetic parameters for fluvoxamine in humans, with all numeric values clearly stated in the main text. |

<sub>queue written 2026-07-18T04:37:21.001689+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baumann_1996 | irrelevant | not captured | not captured | no extractable full text |
| popPK | Chen_2024 | irrelevant | 0 | 0 | Fluvoxamine is only a co-administered covariate affecting quetiapine clearance, and no population PK parameters for fluvoxamine itself are reported. |
| popPK | Chen_2025 | irrelevant | 1 | 0 | The study models quetiapine pharmacokinetics, with fluvoxamine only serving as a covariate for drug-drug interaction analysis, so no fluvoxamine disposition parameters are reported. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | The paper exclusively reports pharmacokinetic parameters for fluoxetine, with fluvoxamine only mentioned as a related compound without any quantitative PK data. |
| popPK | Geldof_2008 | irrelevant | 7 | 1 | The numeric population PK disposition parameters are not provided, as the study focuses on PD modeling and references prior publications for the actual PK values. |
| popPK | Geldof_2008_3 | relevant | 9 | 4 | The paper presents a population PK model for fluvoxamine in rats, but the main results table is truncated and only brain distribution rate constants are explicitly reported in the abstract. |
| popPK | Gex-Fabry_2001 | irrelevant | 0 | 0 | Fluvoxamine is only discussed as a co-administered inhibitor in drug-drug interaction studies, with no population pharmacokinetic parameters reported for it. |
| popPK | Gheldiu_2017 | irrelevant | 0 | 0 | Fluvoxamine is used only as a co-administered inhibitor to study nebivolol pharmacokinetics, and no original quantitative PK parameters for fluvoxamine itself are reported. |
| popPK | Iga_2017 | irrelevant | 2 | 0 | Fluvoxamine is studied only as a DDI perpetrator, and no quantitative disposition parameters for fluvoxamine itself are reported in the provided text or tables. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | The study models the population pharmacokinetics of clozapine, with fluvoxamine only serving as a co-administered covariate that reduces clozapine clearance, so no fluvoxamine PK parameters are reported. |
| popPK | Rafizadeh_2024 | irrelevant | 0 | 0 | Fluvoxamine is only studied as a concomitant inhibitor affecting clozapine metabolism, and no population-PK parameters for fluvoxamine are reported. |
| popPK | Wojciechowski_2022 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for abrocitinib, with fluvoxamine only mentioned as a co-administered drug affecting abrocitinib's clearance, so no fluvoxamine PK values are provided. |
| popPK | Yan_2026 | irrelevant | 0 | 0 | Fluvoxamine is only a concomitant medication covariate affecting mirtazapine clearance, not the subject drug, so no fluvoxamine PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_fluvoxamine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>

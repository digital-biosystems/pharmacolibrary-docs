# aprepitant

- **generic name:** aprepitant
- **ATC codes:** `A04AD12`
- **DrugBank:** [DB00673](https://go.drugbank.com/drugs/DB00673)
- **groups:** approved, investigational

## About

**Description.** Aprepitant, an antiemetic, is a substance P/neurokinin 1 (NK1) receptor antagonist which, in combination with other antiemetic agents, is indicated for the prevention of acute and delayed nausea and vomiting associated with initial and repeat courses of highly emetogenic cancer chemotherapy. Aprepitant is a selective high-affinity antagonist of human substance P/neurokinin 1 (NK1) receptors. Aprepitant has little or no affinity for serotonin (5-HT3), dopamine, and corticosteroid receptors, the targets of existing therapies for chemotherapy-induced nausea and vomiting (CI NV).

**Indication.** For the prevention of nausea and vomiting associated with highly emetogenic cancer chemotherapy, including high-dose cisplatin (in combination with other antiemetic agents).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 02:12 | 1:25 | 1/1/0 | 0/0/0 | 0/0/0 | 25,359/1,679 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Nijstad_2023](drugs/drug_aprepitant/Aprepitant_Nijstad2023_reference.md) | Nijstad AL et al., A simple extemporaneous oral suspension…, Journal of oncology pharmac… (2023) | [10.1177/10781552221089243](https://doi.org/10.1177/10781552221089243) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Nakade_2008](drugs/drug_aprepitant/Aprepitant_Nakade2008_reference.md) | Nakade S et al., Population pharmacokinetics of aprepita…, Cancer chemotherapy and pha… (2008) | [10.1007/s00280-008-0713-y](https://doi.org/10.1007/s00280-008-0713-y) |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chain_2020.pdf` | Chain A et al., Modeling and Simulation Analysis of Apr…, The journal of pediatric ph… (2020) | popPK | 10 | [10.5863/1551-6776-25.6.528](https://doi.org/10.5863/1551-6776-25.6.528) | [32839657](https://pubmed.ncbi.nlm.nih.gov/32839657) | The paper describes a population PK model for aprepitant, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Nakade_2008.pdf` | Nakade S et al., Population pharmacokinetics of aprepita…, Cancer chemotherapy and pha… (2008) | popPK | 10 | [10.1007/s00280-008-0713-y](https://doi.org/10.1007/s00280-008-0713-y) | [18317761](https://pubmed.ncbi.nlm.nih.gov/18317761) | The paper reports a population PK model for aprepitant with explicit numeric values for CL/F, Vd/F, Ka, and lag time in the text. |
| `Shono_2010.pdf` | Shono Y et al., Forecasting in vivo oral absorption and…, European journal of pharmac… (2010) | popPK | 8 | [10.1016/j.ejpb.2010.05.009](https://doi.org/10.1016/j.ejpb.2010.05.009) | [20576487](https://pubmed.ncbi.nlm.nih.gov/20576487) | The paper describes a PBPK study for aprepitant that estimates disposition parameters, but the specific numeric values for CL, V, or ka are not present in the provided evidence text. |

<sub>queue written 2026-09-11T02:11:38.490974+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chain_2020 | relevant | 10 | 0 | The paper describes a population PK model for aprepitant, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Imbs_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pazopanib and cisplatin, with aprepitant mentioned only as a co-administered antiemetic agent potentially causing interaction, not as the subject drug. |
| popPK | Nijstad_2022 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of dexamethasone (the subject drug) to assess a drug-drug interaction, with aprepitant serving only as a covariate or co-administered agent rather than the primary subject of PK parameter estimation. |
| popPK | Shadle_2012 | irrelevant | 2 | 0 | The study is a bioequivalence assessment reporting AUC ratios and P-values, but it does not provide quantitative disposition parameters (CL, V, ka, t1/2) or a compartmental/population-PK model for aprepitant. |
| popPK | Shono_2010 | relevant | 8 | 0 | The paper describes a PBPK study for aprepitant that estimates disposition parameters, but the specific numeric values for CL, V, or ka are not present in the provided evidence text. |
| popPK | Valentin_2023 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of ifosfamide and its metabolites, with aprepitant serving only as a co-administered agent to test for drug-drug interactions, and no PK parameters for aprepitant are reported. |
| popPK | de_2005 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of cyclophosphamide and thiotepa, with aprepitant serving only as a co-administered inhibitor rather than the subject drug for PK parameter estimation. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_aprepitant`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>

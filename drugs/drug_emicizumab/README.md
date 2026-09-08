# emicizumab

- **generic name:** emicizumab
- **ATC codes:** `B02BX06`
- **DrugBank:** [DB13923](https://go.drugbank.com/drugs/DB13923)
- **groups:** approved, investigational

## About

**Description.** Emicizumab is a humanized recombinant monoclonal antibody that mimics the function of the coagulation Factor VIII and it has the capacity to bind simultaneously to activated Factor IX and Factor X. The ability of Emicizumab to bind to all these three different factors allows it to overcome immunogenicity and unstable hemostatic efficacy produced by previous Factor VII agents. Emicizumab was originated as an improved form of hBS23 and it was approved on November 16, 2017.[A31279, L1016] It was created by Chugai Pharmaceuticals Co. Ltd. and co-developed with Roche and Genentech.[L1015]

**Indication.** The main function of Emicizumab is the prevention of bleeding episodes. Thus, Emicizumab is approved for the routine prophylaxis to prevent or reduce the frequency of bleeding episodes of adult and pediatric patients with hemophilia A with or without Factor VIII inhibitors.[L4657]

Hemophilia A is a deficiency of coagulation Factor VIII which causes a serious bleeding disorder. The standard treatment is done with the administration of recombinant or serum-deriver Factor VIII which induces the formation of anti-factor VIII alloantibodies (Factor VIII inhibitors) and renders the standard treatment ineffective.[A31286]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 10:32 | 5:31 | 0/0/0 | 0/0/0 | 0/0/0 | 65,553/9,301 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> | [Retout_2020](drugs/drug_emicizumab/Emicizumab_Retout2020_1_5_mg_kg_qw.md) | Retout S et al., Population Pharmacokinetic Analysis and…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Retout_2020](drugs/drug_emicizumab/Emicizumab_Retout2020_3_mg_kg_q2w.md) | Retout S et al., Population Pharmacokinetic Analysis and…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Retout_2020](drugs/drug_emicizumab/Emicizumab_Retout2020_6_mg_kg_q4w.md) | Retout S et al., Population Pharmacokinetic Analysis and…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Retout_2020](drugs/drug_emicizumab/Emicizumab_Retout2020_estimate.md) | Retout S et al., Population Pharmacokinetic Analysis and…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Retout_2020](drugs/drug_emicizumab/Emicizumab_Retout2020_shrinkage.md) | Retout S et al., Population Pharmacokinetic Analysis and…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Retout_2020](drugs/drug_emicizumab/Emicizumab_Retout2020_unit.md) | Retout S et al., Population Pharmacokinetic Analysis and…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z) |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 6  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yoneyama_2018.pdf` | Yoneyama K et al., A Pharmacometric Approach to Substitute…, Clinical pharmacokinetics (2018) | popPK | 9 | [10.1007/s40262-017-0616-3](https://doi.org/10.1007/s40262-017-0616-3) | [29214439](https://pubmed.ncbi.nlm.nih.gov/29214439) | The paper describes a population PK study for emicizumab, but the specific quantitative disposition parameters (CL, V, etc.) are not present in the provided evidence, which only reports efficacy thresholds and dosing regimens. |
| `Yoneyama_2022.pdf` | Yoneyama K et al., A Model-Based Framework to Inform the D…, Journal of clinical pharmac… (2022) | popPK | 9 | [10.1002/jcph.1968](https://doi.org/10.1002/jcph.1968) | [34545950](https://pubmed.ncbi.nlm.nih.gov/34545950) | The paper describes a population PK model for emicizumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-09-06T10:27:41.831915+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Donners_2021 | irrelevant | 2 | 0 | The paper is a systematic review that summarizes findings from other studies rather than reporting original quantitative PK parameters (CL, V, etc.) for emicizumab. |
| popPK | Jonsson_2021 | irrelevant | 2 | 0 | The study is an exposure-response analysis that uses a previously developed PK model rather than reporting new quantitative PK parameters (CL, V, etc.) for emicizumab. |
| popPK | Schmitt_2021 | irrelevant | 2 | 0 | The paper describes a PK/PD study but only reports qualitative findings (e.g., trough concentrations ≥ 50 µg/mL) and references population PK models without providing specific quantitative disposition parameters (CL, V, ka) in the text. |
| popPK | Yoneyama_2018 | relevant | 9 | 2 | The paper describes a population PK study for emicizumab, but the specific quantitative disposition parameters (CL, V, etc.) are not present in the provided evidence, which only reports efficacy thresholds and dosing regimens. |
| popPK | Yoneyama_2022 | relevant | 9 | 0 | The paper describes a population PK model for emicizumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Yu_2021 | irrelevant | 2 | 0 | The paper is a simulation study using a previously published model and does not report original quantitative PK parameter values (CL, V, etc.) for emicizumab in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_emicizumab`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>

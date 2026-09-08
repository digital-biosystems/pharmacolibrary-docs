# concizumab

- **generic name:** concizumab
- **ATC codes:** `B02BX10`
- **DrugBank:** [DB12820](https://go.drugbank.com/drugs/DB12820)
- **groups:** approved, investigational

## About

**Description.** Concizumab is a humanized IgG4 monoclonal antibody targeting the Kunitz-2 domain of tissue factor pathway inhibitor (TFPI), a key regulator of the coagulation cascade.[A264883,A264878] In patients with hemophilia A or B - characterized by deficiencies in clotting factors VIII or IX, respectively - the traditional treatment involves replacement of the missing clotting factor.[L52043] One disadvantage of this approach is the possible development of antibodies (inhibitors) towards the administered replacement factor, rendering them less effective and increasing the likelihood of hemorrhagic episodes.[L52043] 

By inhibiting TFPI, concizumab enhances the production of factor Xa via the extrinsic clotting pathway.[L51998,A264878] This novel mechanism of action is effective even in the presence of inhibitors towards factors VIII or IX, as it essentially skips the intrinsic pathway in which factors VIII and IX participate. Concizumab therefore provides an important treatment option for patients who have developed inhibitors to standard clotting factor replacement therapy.[L52043]

Concizumab-mtci (Alhemo) was approved by the FDA in December 2024 for use in patients with hemophilia A or B with inhibitors.[L51998,L52043] In July 2025, its indication was expanded to include all patients with hemophilia A or B, regardless of the presence of inhibitors.[L53653]

**Indication.** Concizumab is indicated for routine prophylaxis to prevent or reduce the frequency of bleeding episodes in patients ≥12 years of age who have hemophilia A or B with or without inhibitors.[L53653,L54196] In the EU, its indication in patients without inhibitors is specifically for those with severe hemophilia A or moderate/severe hemophilia B.[L54196]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 10:19 | 2:04 | 0/1/0 | 1/0/0 | 0/0/0 | 28,037/1,008 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Agersø_2014](drugs/drug_concizumab/Concizumab_Agers2014_reference.md) | Agersø H et al., Pharmacokinetics of an anti-TFPI monocl…, European journal of pharmac… (2014) | [10.1016/j.ejps.2014.02.009](https://doi.org/10.1016/j.ejps.2014.02.009) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Eichler_2019](drugs/drug_concizumab/pd_Eichler_2019_free_TFPI.md) | Eichler H et al., Concizumab restores thrombin generation…, Haemophilia : the official… (2019) | [10.1111/hae.13627](https://doi.org/10.1111/hae.13627) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Eichler_2019](drugs/drug_concizumab/pd_Eichler_2019_peak_TG.md) | Eichler H et al., Concizumab restores thrombin generation…, Haemophilia : the official… (2019) | [10.1111/hae.13627](https://doi.org/10.1111/hae.13627) |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Agersø_2014.pdf` | Agersø H et al., Pharmacokinetics of an anti-TFPI monocl…, European journal of pharmac… (2014) | popPK | 10 | [10.1016/j.ejps.2014.02.009](https://doi.org/10.1016/j.ejps.2014.02.009) | [24568891](https://pubmed.ncbi.nlm.nih.gov/24568891) | The paper reports quantitative PK parameters (clearance, Km, saturation clearance, bioavailability) for concizumab in Cynomolgus monkeys, with values explicitly stated in the text. |
| `Yuan_2019.pdf` | Yuan D et al., A systems pharmacokinetic/pharmacodynam…, European journal of pharmac… (2019) | popPK | 9 | [10.1016/j.ejps.2019.105032](https://doi.org/10.1016/j.ejps.2019.105032) | [31394258](https://pubmed.ncbi.nlm.nih.gov/31394258) | The paper describes a systems PK/PD model for concizumab, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-09-06T10:19:14.857962+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Eichler_2019 | relevant | 8 | 2 | The paper describes a compartmental PK model for concizumab but explicitly states that the detailed description and parameter values are in a separate manuscript, providing only qualitative comparisons and PD parameters (EC50) in the text. |
| popPK | Miyazawa_2025 | irrelevant | 2 | 0 | The paper is a mechanistic mathematical modeling study of coagulation that uses a fixed concizumab concentration (4 nM) as an input parameter, rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for the drug. |
| PGx | Shima_2016 | not_relevant | 0 | 0 | The paper is a general review of therapies for hemophilia inhibitors and mentions concizumab only as a novel therapeutic concept without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Yuan_2019 | relevant | 9 | 0 | The paper describes a systems PK/PD model for concizumab, but the specific numeric parameter values are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_concizumab`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>

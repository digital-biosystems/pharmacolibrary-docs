<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glisoxepide&quot;}]"></div>

# glisoxepide

- **generic name:** glisoxepide
- **ATC codes:** `A10BB11`
- **DrugBank:** [DB01289](https://go.drugbank.com/drugs/DB01289)
- **groups:** investigational

## About

**Description.** Glisoxepide is one of the sulphonamide-derived oral antidiabetic drugs. It inhibits the uptake of bile acids into isolated rat hepatocytes. However it inhibits taurocholate uptake only in the absence of sodium ions. Glisoxepide uptake could be further inhibited by blockers of the hepatocellular monocarboxylate transporter, by the loop diuretic bumetanide, by 4,4'-diisothiocyano-2,2'-stilbenedisulfonate (DIDS) and by sulphate.  These results are consistent with the transport of glisoxepide via the transport system for the unconjugated bile acid cholate. [A31819,A31820]

**Indication.** For the treatment of diabetes mellitus type 2.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-14 20:37 | 2:17 | 0/0/0 | 1/0/0 | 0/0/0 | 31,645/1,076 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Haupt_1971_2](drugs/drug_glisoxepide/pd_Haupt_1971_2_blood_glucose.md) | Haupt (1971) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Haupt_1971_2](drugs/drug_glisoxepide/pd_Haupt_1971_2_free_fatty_acids.md) | Haupt (1971) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Haupt_1971_2](drugs/drug_glisoxepide/pd_Haupt_1971_2_serum_insulin.md) | Haupt (1971) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glisoxepide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: INS (regulator), KCNJ10 (blocker), KCNJ8 (inhibitor).</sub>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chandra_2021.pdf` | Chandra A et al., Identification of potential inhibitors…, Journal of biomolecular str… (2021) | pd | 4 | [10.1080/07391102.2020.1775127](https://doi.org/10.1080/07391102.2020.1775127) | [32462970](https://www.ncbi.nlm.nih.gov/pubmed/32462970) | metadata signals extractable PD data (IC50) |
| `Fückel_1992.pdf` | Fückel D et al., Interaction of sulfonylureas with the t…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0014-2999(92)90628-h](https://doi.org/10.1016/0014-2999(92)90628-h) | [1618280](https://www.ncbi.nlm.nih.gov/pubmed/1618280) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-14T20:36:38.691421+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chandra_2021 | irrelevant | 0 | 0 | The paper is a drug repurposing study for SARS-CoV-2 and does not contain pharmacokinetic data for glisoxepide. |
| PD | Chandra_2021 | not_relevant | 0 | 0 | The paper focuses on in silico drug repurposing for SARS-CoV-2 EndoU and does not contain any pharmacodynamic or exposure-response data for glisoxepide. |
| popPK | Fückel_1992 | irrelevant | 0 | 0 | The paper title indicates a study on bile acid transport interactions, not a pharmacokinetic study of glisoxepide, and no PK parameters are present in the evidence. |
| PD | Fückel_1992 | not_relevant | 0 | 0 | The paper focuses on the interaction of sulfonylureas with bile acid transport in hepatocytes and does not report pharmacodynamic or exposure-response data for glisoxepide. |
| popPK | Haupt_1971 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of insulin secretion and blood glucose levels, not a pharmacokinetic study reporting disposition parameters like clearance or volume for glisoxepide. |
| popPK | Haupt_1971_2 | irrelevant | 1 | 0 | The study is pharmacodynamic (dose-response and insulin secretion) rather than pharmacokinetic, and does not report quantitative disposition parameters like clearance or volume for glisoxepide. |
| popPK | Irsigler_1979 | irrelevant | 1 | 0 | The study is a clinical efficacy trial comparing sulfonylureas and explicitly states there was insufficient evidence for pharmacokinetic differential diagnosis, reporting no quantitative PK parameters. |
| PD | Irsigler_1979 | not_relevant | 1 | 0 | The study reports qualitative clinical outcomes and states there were no differences between sulfonylureas, but it does not provide numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50) for glisoxepide. |
| popPK | Schäfer_1979 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for diabetes treatment and does not report any pharmacokinetic parameters for glisoxepide. |
| PD | Schäfer_1979 | not_relevant | 1 | 0 | The text describes a large clinical trial reporting mean daily doses and qualitative metabolic improvements, but it does not provide any concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_glisoxepide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>

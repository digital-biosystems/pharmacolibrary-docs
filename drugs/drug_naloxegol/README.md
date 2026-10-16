<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;naloxegol&quot;}]"></div>

# naloxegol

- **generic name:** naloxegol
- **ATC codes:** `A06AH03`
- **DrugBank:** [DB09049](https://go.drugbank.com/drugs/DB09049) · **PubChem:** [CID 56959087](https://pubchem.ncbi.nlm.nih.gov/compound/56959087)
- **molar mass:** 651.794 g/mol (C34H53NO11) — DrugBank
- **groups:** approved, investigational

## About

Naloxegol is an opioid antagonist used to treat constipation caused by opioid medicines. It is authorised in the European Union as a drug for constipation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15708351](https://www.wikidata.org/wiki/Q15708351) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-16 08:27 | 0:29 | 0/3/0 | 0/0/2 | 0/0/0 | 23,637/2,571 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Al-Huniti_2016_reference](drugs/drug_naloxegol/Naloxegol_AlHuniti2016_reference.md) | — | 1-compartment (no model) | 0 | Al-Huniti N et al., Population pharmacokinetics of naloxego…, British journal of clinical… (2016) | [10.1111/bcp.12756](https://doi.org/10.1111/bcp.12756) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Leppert_2016_kodiac_04](drugs/drug_naloxegol/Naloxegol_Leppert2016_kodiac_04.md) | — | 1-compartment (no model) | 0 | Leppert W et al., The role of naloxegol in the management…, Therapeutic advances in gas… (2016) | [10.1177/1756283X16648869](https://doi.org/10.1177/1756283X16648869) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Leppert_2016_kodiac_05](drugs/drug_naloxegol/Naloxegol_Leppert2016_kodiac_05.md) | — | 1-compartment (no model) | 0 | Leppert W et al., The role of naloxegol in the management…, Therapeutic advances in gas… (2016) | [10.1177/1756283X16648869](https://doi.org/10.1177/1756283X16648869) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Al-Huniti_2016_2_DED](drugs/drug_naloxegol/pd_Al_Huniti_2016_2_DED.md) | diary entry discontinuation ← naloxegol · time-to-event model | — | Al-Huniti N et al., Population Exposure-Response Modeling o…, CPT: pharmacometrics & syst… (2016) | [10.1002/psp4.12099](https://doi.org/10.1002/psp4.12099) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> | [Al-Huniti_2016_2_SBM](drugs/drug_naloxegol/pd_Al_Huniti_2016_2_SBM.md) | daily spontaneous bowel movements ← naloxegol · categorical (graded) response model | — | Al-Huniti N et al., Population Exposure-Response Modeling o…, CPT: pharmacometrics & syst… (2016) | [10.1002/psp4.12099](https://doi.org/10.1002/psp4.12099) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Al-Huniti_2017_time_to_study_discontinuation](drugs/drug_naloxegol/pd_Al_Huniti_2017_time_to_study_discontinuation.md) | time to study discontinuation ← naloxegol · time-to-event model | — | Al-Huniti N et al., Population Exposure-Response Modeling S…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12229](https://doi.org/10.1002/psp4.12229) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Al-Huniti_2017_weekly_probability_of_response](drugs/drug_naloxegol/pd_Al_Huniti_2017_weekly_probability_of_response.md) | weekly probability of response ← naloxegol · categorical (graded) response model | — | Al-Huniti N et al., Population Exposure-Response Modeling S…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12229](https://doi.org/10.1002/psp4.12229) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=naloxegol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2D6` inhibitor, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: OPRM1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 6  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al-Huniti_2016.pdf` | Al-Huniti N et al., Population pharmacokinetics of naloxego…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.12756](https://doi.org/10.1111/bcp.12756) | [26317320](https://pubmed.ncbi.nlm.nih.gov/26317320) | The paper reports a population PK model for naloxegol with explicit numeric estimates for CL/F, Vc/F, and absorption rates in the provided evidence. |
| `Hruska_2024.pdf` | Hruska MW et al., Population Pharmacokinetics of Naloxego…, Clinical pharmacology in dr… (2024) | popPK | 9 | [10.1002/cpdd.1457](https://doi.org/10.1002/cpdd.1457) | [39110083](https://pubmed.ncbi.nlm.nih.gov/39110083) | The paper describes a population PK model for naloxegol with specific findings (2-compartment, Weibull absorption), but the numeric parameter values are not present in the provided abstract text. |
| `Yu_2016.pdf` | Yu J et al., Key Findings from Preclinical and Clini…, Drug metabolism and disposi… (2016) | pgx | 8 | [10.1124/dmd.115.066720](https://doi.org/10.1124/dmd.115.066720) | [26424199](https://www.ncbi.nlm.nih.gov/pubmed/26424199) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Yu_2018.pdf` | Yu J et al., Risk of Clinically Relevant Pharmacokin…, Drug metabolism and disposi… (2018) | pgx | 7 | [10.1124/dmd.117.078691](https://doi.org/10.1124/dmd.117.078691) | [29572333](https://www.ncbi.nlm.nih.gov/pubmed/29572333) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-16T08:27:06.296685+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Al-Huniti_2016 | not_relevant | 2 | 0 | The study evaluates the impact of demographic and clinical factors (specifically CYP3A4/P-gp inhibitors and inducers) on naloxegol PK, but it does not report pharmacogenomic effects (e.g., genetic variants of CYP3A4 or ABCB1) on PK parameters. |
| popPK | Al-Huniti_2017 | irrelevant | 0 | 0 | The paper describes a population exposure-response (pharmacodynamic) model for efficacy and dropout, not a pharmacokinetic model with quantitative disposition parameters (CL, V, etc.). |
| PGx | Bui_2016 | not_relevant | 0 | 0 | The study evaluates the effect of drug-drug interactions (CYP3A modulators) on pharmacokinetics, not pharmacogenomic variants. |
| PGx | Coluzzi_2022 | not_relevant | 1 | 1 | The paper is a qualitative review mentioning that naloxegol is a P-gp substrate, but it does not report specific quantitative data on how ABCB1 genotypes alter naloxegol's PK or PD parameters. |
| PGx | Gudin_2020 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions and general pharmacokinetic principles of PAMORAs but does not report pharmacogenomic effects (gene variants) on naloxegol. |
| popPK | Hruska_2024 | relevant | 9 | 1 | The paper describes a population PK model for naloxegol with specific findings (2-compartment, Weibull absorption), but the numeric parameter values are not present in the provided abstract text. |
| popPK | Lawson_2016 | irrelevant | 0 | 0 | This is a pharmacoeconomic analysis of health state utility (EQ-5D scores) in a clinical trial, reporting no pharmacokinetic parameters (CL, V, t1/2) for naloxegol. |
| PGx | Yu_2016 | not_relevant | 0 | 0 | The paper is a broad review of FDA approvals in 2014 and mentions naloxegol only as an example of a CYP3A-sensitive substrate in the context of drug-drug interactions, without reporting any specific pharmacogenomic effect. |
| PGx | Yu_2018 | not_relevant | 0 | 0 | The paper analyzes drug-drug interactions and identifies naloxegol as a CYP3A substrate, but it does not report pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Zhou_2016 | not_relevant | 0 | 0 | The paper focuses on Drug-Drug Interactions (DDI) mediated by CYP3A modulators, not on Pharmacogenomic (gene variant) effects. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-16 08:26 UTC</sub>

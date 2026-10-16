<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;dalteparin&quot;}]"></div>

# dalteparin

- **generic name:** dalteparin
- **ATC codes:** `B01AB04`
- **DrugBank:** [DB06779](https://go.drugbank.com/drugs/DB06779) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Dalteparin is a low molecular weight heparin anticoagulant used to treat and prevent blood clots, including in myocardial infarction, unstable angina, pulmonary embolism, thrombophlebitis, and after surgery. It is an approved medicine and is widely used as an antithrombotic agent.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1851701](https://www.wikidata.org/wiki/Q1851701) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:50 | 2:57 | 0/1/2 | 0/0/0 | 0/0/0 | 131,227/12,735 | einfracz / qwen3.8-27b | 6 | 3/3 | 3/3 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8), gpt-oss:120b (not confirmed, agreement 0.9). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Damle_2021_reference](drugs/drug_dalteparin/Dalteparin_Damle2021_reference.md) | held back | 1-compartment, oral | 3 | Damle B et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1716](https://doi.org/10.1002/jcph.1716) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.556), gpt-oss:120b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Schoemaker_1996_reference](drugs/drug_dalteparin/Dalteparin_Schoemaker1996_reference.md) | — | 1-compartment (no model) | 1 | Schoemaker RC et al., Estimating impossible curves using NONM…, British journal of clinical… (1996) | [10.1046/j.1365-2125.1996.04231.x](https://doi.org/10.1046/j.1365-2125.1996.04231.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75), gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [van_2022_reference](drugs/drug_dalteparin/Dalteparin_van2022_reference.md) | — | general linear (no model) | 0 | van der Heijden CDCC et al., Effects of dalteparin on anti-Xa activi…, British journal of clinical… (2022) | [10.1111/bcp.15208](https://doi.org/10.1111/bcp.15208) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dalteparin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: HPSE (substrate), SELP (inhibitor), SERPINC1 (potentiator), VEGFA (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 7  ·  **relevant:** 5
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abe_2013.pdf` | Abe S et al., Low-molecular-weight heparin pharmacoki…, International journal of cl… (2013) | popPK | 10 | [10.5414/CP201858](https://doi.org/10.5414/CP201858) | [23587152](https://pubmed.ncbi.nlm.nih.gov/23587152) | The paper describes a population PK model for dalteparin with specific covariates and qualitative results, but the specific numeric parameter estimates (CL, V, Q, ka) are not present in the provided abstract text. |
| `Yu_2018.pdf` | Yu L et al., Pharmacodynamic properties and bioequiv…, Xenobiotica; the fate of fo… (2018) | popPK | 7 | [10.1080/00498254.2017.1316021](https://doi.org/10.1080/00498254.2017.1316021) | [28375032](https://pubmed.ncbi.nlm.nih.gov/28375032) | The study reports quantitative pharmacokinetic parameters (half-life) for the metabolites of dalteparin, which is accepted as a model of the parent drug's disposition in cases where the parent is unmeasurable, although it is primarily a pharmacodynamic/bioequivalence study. |
| `Risselada_2013.pdf` | Risselada AJ et al., [Pulmonary embolism due to interaction…, Nederlands tijdschrift voor… (2013) | pgx | 7 | not captured | [24382036](https://www.ncbi.nlm.nih.gov/pubmed/24382036) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-14T22:47:20.212164+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abe_2013 | relevant | 10 | 2 | The paper describes a population PK model for dalteparin with specific covariates and qualitative results, but the specific numeric parameter estimates (CL, V, Q, ka) are not present in the provided abstract text. |
| popPK | Bergqvist_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of melagatran/ximelagatran, with dalteparin serving only as a comparator for efficacy and safety, not as the subject of PK analysis. |
| PGx | Mälarstig_2006 | not_relevant | 0 | 0 | The study investigates the prognostic value of sCD40L levels and its genetic regulation, noting that dalteparin efficacy varies by sCD40L level, but it does not measure or report changes in pharmacokinetic or pharmacodynamic parameters of dalteparin itself (e.g., anti-Xa levels). |
| PGx | Mälarstig_2008 | not_relevant | 0 | 0 | The paper investigates IL-10 polymorphisms and their effect on plasma IL-10 levels and cardiovascular outcomes in ACS patients, not the pharmacokinetics or pharmacodynamics of dalteparin. |
| popPK | Nylander_2003 | irrelevant | 0 | 0 | The study is an in-vitro investigation of platelet activation mechanisms, not a pharmacokinetic study, and reports no disposition parameters. |
| PGx | Risselada_2013 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction involving rivaroxaban and carbamazepine, with no mention of pharmacogenomic variants affecting dalteparin's PK/PD. |
| PGx | Verso_2021 | not_relevant | 0 | 0 | The paper examines the interaction of anticancer drugs with dalteparin, focusing on clinical outcomes, not genetic variants or pharmacogenomics. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:47 UTC</sub>

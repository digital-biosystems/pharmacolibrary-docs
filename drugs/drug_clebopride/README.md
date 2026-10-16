<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03F&quot;,&quot;href&quot;:&quot;atc/A03F.md&quot;},{&quot;label&quot;:&quot;clebopride&quot;}]"></div>

# clebopride

- **generic name:** clebopride
- **ATC codes:** `A03FA06`
- **DrugBank:** [DB13511](https://go.drugbank.com/drugs/DB13511) · **PubChem:** not captured
- **molar mass:** 373.88 g/mol (C20H24ClN3O2) — DrugBank
- **groups:** investigational

## About

Clebopride is an antiemetic and gastrointestinal propulsive drug, developed for functional gastrointestinal disorders and nausea. It is not an approved medicine in major markets and is considered investigational, having been used only in a few countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5131021](https://www.wikidata.org/wiki/Q5131021) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:48 | 0:17 | 0/0/0 | 0/0/0 | 0/0/0 | 8,363/331 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/2 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=clebopride).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DRD2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tan_2010.pdf` | Tan Z et al., Development and validation of a LC-MS/M…, Journal of chromatography.… (2010) | popPK | 10 | [10.1016/j.jchromb.2010.06.006](https://doi.org/10.1016/j.jchromb.2010.06.006) | [20598654](https://pubmed.ncbi.nlm.nih.gov/20598654) | The paper describes a PK study of clebopride in humans, but the provided evidence contains only analytical method validation details and no quantitative PK parameter values (CL, V, t1/2, etc.). |
| `Horton_1988.pdf` | Horton RW et al., The interaction of substituted benzamid…, British journal of pharmaco… (1988) | pd | 4 | [10.1111/j.1476-5381.1988.tb11643.x](https://doi.org/10.1111/j.1476-5381.1988.tb11643.x) | [2850059](https://www.ncbi.nlm.nih.gov/pubmed/2850059) | metadata signals extractable PD data (IC50) |
| `Schuurkes_1985.pdf` | Schuurkes JA et al., A comparative study on the effects of d…, Japanese journal of pharmac… (1985) | pd | 4 | [10.1254/jjp.39.123](https://doi.org/10.1254/jjp.39.123) | [4087563](https://www.ncbi.nlm.nih.gov/pubmed/4087563) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T13:47:54.471863+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Horton_1988 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Horton_1988 | not_relevant | 0 | 0 | The paper discusses in vitro binding of substituted benzamides to benzodiazepine sites and does not report any pharmacodynamic or exposure-response data for clebopride. |
| popPK | Kim_2007 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological safety assessment (hERG/Purkinje fiber) and does not report pharmacokinetic disposition parameters for clebopride. |
| popPK | Moore_1990 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice where clebopride is used as a D-2 antagonist, not a PK study of clebopride. |
| PD | Moore_1990 | not_relevant | 1 | 0 | The paper focuses on the pharmacology of apomorphine and NPA; clebopride is only mentioned as a D-2 antagonist used to reverse hypothermia, with no dose-response curve or numeric PD parameters reported for clebopride itself. |
| popPK | Mortensen_1992 | irrelevant | 0 | 0 | The paper is an in-vitro antibacterial susceptibility study, not a pharmacokinetic study, and reports no PK parameters for clebopride. |
| PD | Mortensen_1992 | not_relevant | 1 | 1 | The paper reports in vitro antibacterial susceptibility (MIC/IC50) of bacteria to neuroleptics, which is a pharmacological activity assay, not a pharmacodynamic (exposure-response) relationship for the drug's clinical effect in a biological system. |
| popPK | Niznik_1985 | irrelevant | 0 | 0 | The paper is a mechanistic study on photoaffinity labeling of dopamine receptors, not a pharmacokinetic study, and reports no disposition parameters for clebopride. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | The paper is a review of excipients in pediatric formulations and does not contain any pharmacokinetic data for clebopride. |
| PD | Rouaz_2021 | not_relevant | 0 | 0 | The paper is a review of excipients in paediatric formulations and does not contain any pharmacodynamic or exposure-response data for clebopride. |
| popPK | Schuurkes_1985 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| popPK | Segura_1981 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| popPK | Tack_2012 | irrelevant | 1 | 0 | This is a systematic review of cardiovascular safety that summarizes pharmacokinetics nonsystematically without providing specific quantitative disposition parameters for clebopride. |
| PD | Tack_2012 | not_relevant | 2 | 1 | The paper is a systematic review focused on cardiovascular safety and provides only qualitative summaries or general tables of pharmacodynamics without reporting specific numeric PD parameters (e.g., Emax, EC50) or exposure-response curves for clebopride. |
| popPK | Tan_2010 | relevant | 10 | 0 | The paper describes a PK study of clebopride in humans, but the provided evidence contains only analytical method validation details and no quantitative PK parameter values (CL, V, t1/2, etc.). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A14A&quot;,&quot;href&quot;:&quot;atc/A14A.md&quot;},{&quot;label&quot;:&quot;oxymetholone&quot;}]"></div>

# oxymetholone

- **generic name:** oxymetholone
- **ATC codes:** `A14AA05`
- **DrugBank:** [DB06412](https://go.drugbank.com/drugs/DB06412) · **PubChem:** [CID 5281034](https://pubchem.ncbi.nlm.nih.gov/compound/5281034)
- **molar mass:** 332.484 g/mol (C21H32O3) — DrugBank
- **groups:** approved, illicit

## About

Oxymetholone is an androgenic anabolic steroid used to treat anemia. It is an approved medicine, though it is also used illicitly, and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420864](https://www.wikidata.org/wiki/Q420864) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=oxymetholone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor, `MAOA` inducer | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` inhibitor, `CYP3A5` inhibitor, `CYP3A7` inhibitor, `MAOA` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `CYP3A5` inhibitor, `MAOA` inducer | DrugBank actor |
| — | liver | `SRD5A1` activator/substrate | DrugBank actor |
| — | prostate gland | `AR` activator/target, `SRD5A1` activator/substrate | DrugBank actor |
| — | skin | `SRD5A1` activator/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CYP3A43 (inhibitor), SHBG (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:22 | 0:30 | 0/0/0 | 0/0/0 | 0/0/0 | 26,035/128 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huml_2020.pdf` | Huml L et al., Stanazolol derived ELISA as a sensitive…, Steroids (2020) | pd | 4 | [10.1016/j.steroids.2019.108550](https://doi.org/10.1016/j.steroids.2019.108550) | [31812623](https://www.ncbi.nlm.nih.gov/pubmed/31812623) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-05T10:22:01.275626+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Azen_1977 | irrelevant | 0 | 0 | The paper is a clinical case report on hematologic response to oxymetholone therapy and does not report any pharmacokinetic parameters. |
| PD | Azen_1977 | not_relevant | 3 | 1 | The text describes a qualitative correlation between oxymetholone dosage and blood counts in three patients but does not provide specific numeric dose-response parameters, concentration-effect curves, or quantitative PD model fits. |
| popPK | Boris_1972 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Boris_1972 | not_relevant | 0 | 0 | The paper studies the anti-ovulatory effects of androgenic steroids in rats and does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for oxymetholone. |
| popPK | Brenner_1975 | irrelevant | 0 | 0 | no_text gate: only 70 chars of text extracted (&lt; 400) |
| PD | Brenner_1975 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess a pharmacodynamic relationship. |
| popPK | Cervantes_2000 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy of danazol for anemia in myelofibrosis and does not report any pharmacokinetic parameters for oxymetholone. |
| PD | Cervantes_2000 | not_relevant | 0 | 0 | The paper reports clinical response rates for danazol in myelofibrosis and mentions oxymetholone only as background context, providing no pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for oxymetholone. |
| popPK | Fürstenberger_2012 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on enzyme inhibition (11b-HSD2) and does not report pharmacokinetic disposition parameters for oxymetholone. |
| popPK | Hast_1976 | irrelevant | 0 | 0 | The paper is a clinical study on the efficacy of oxymetholone in treating anaemia and does not report any pharmacokinetic parameters. |
| PD | Hast_1976 | not_relevant | 0 | 0 | The paper reports clinical outcomes (remission and survival rates) for a fixed high-dose regimen but does not provide concentration-effect data, dose-response curves, or numeric PD parameters. |
| popPK | Huml_2020 | irrelevant | 0 | 0 | The paper describes an ELISA assay for detecting anabolic steroids and reports cross-reactivity percentages, not pharmacokinetic parameters for oxymetholone. |
| PD | Huml_2020 | not_relevant | 0 | 0 | The paper describes the development of an ELISA assay for detecting anabolic steroids; the reported IC50 values refer to the analytical sensitivity of the immunoassay, not to a pharmacodynamic exposure-response relationship for oxymetholone. |
| popPK | Khan_2012 | irrelevant | 0 | 0 | The paper is a study on the microbial transformation and in-vitro biological activity of oxymetholone metabolites, containing no pharmacokinetic data. |
| popPK | Pavlatos_2001 | irrelevant | 2 | 0 | This is a review article that summarizes pharmacokinetics but does not provide original quantitative disposition parameters or specific numeric values in the evidence. |
| popPK | Tomoda_1999 | irrelevant | 0 | 0 | The study focuses on the hemodynamic effects of oxymetholone on left ventricular dimensions in heart failure, not on pharmacokinetic parameters. |
| PD | Tomoda_1999 | not_relevant | 2 | 1 | The text provides only a qualitative summary of the study's conclusion regarding the effect of oxymetholone on left ventricular dimensions, without reporting any numeric PD parameters, dose-response curves, or exposure-response data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>

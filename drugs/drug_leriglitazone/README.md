<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;leriglitazone&quot;}]"></div>

# leriglitazone

- **generic name:** leriglitazone
- **ATC codes:** `A16AX23`
- **DrugBank:** [DB15021](https://go.drugbank.com/drugs/DB15021) · **PubChem:** none
- **molar mass:** 372.438 g/mol (C19H20N2O4S) — DrugBank
- **groups:** investigational

## About

Leriglitazone was investigated as a treatment for adrenoleukodystrophy. It remains investigational; a marketing application in the European Union was refused, so it is not authorised there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27156475](https://www.wikidata.org/wiki/Q27156475) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=leriglitazone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PPARG (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:43 | 0:13 | 0/0/0 | 0/0/0 | 0/0/0 | 36,752/1,055 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Albassam_2015.pdf` | Albassam AA et al., Inhibitory effect of six herbal extract…, Xenobiotica; the fate of fo… (2015) | pd | 4 | [10.3109/00498254.2014.989935](https://doi.org/10.3109/00498254.2014.989935) | [25430798](https://www.ncbi.nlm.nih.gov/pubmed/25430798) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07 17:43 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albassam_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2C8 inhibition by herbal extracts and does not report pharmacokinetic parameters for leriglitazone. |
| PD | Albassam_2015 | not_relevant | 0 | 0 | The paper reports in vitro CYP2C8 inhibition by herbal extracts, not a pharmacodynamic or exposure-response relationship for leriglitazone. |
| popPK | Albassam_2019 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PD | Albassam_2019 | not_relevant | 0 | 0 | The paper focuses on the effect of pterostilbene on in vitro drug metabolizing enzyme activity and does not report any pharmacodynamic or exposure-response data for leriglitazone. |
| PGx | Albassam_2019 | not_relevant | 0 | 0 | The paper studies the effect of pterostilbene on enzyme activity and does not report pharmacogenomic effects on leriglitazone pharmacokinetics or pharmacodynamics. |
| popPK | Almeida_2011 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and bioequivalence of pioglitazone, not leriglitazone. |
| PGx | Cavestro_2026 | not_relevant | 0 | 0 | The paper evaluates the therapeutic efficacy of leriglitazone in a mouse model of COPAN, but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Chinnalalaiah_2017 | irrelevant | 0 | 0 | The study reports an analytical method for pioglitazone and its metabolite, not for leriglitazone. |
| popPK | Li_2012 | irrelevant | 0 | 0 | The study analyzes metoprolol in beagle dogs, not leriglitazone. |
| popPK | Patel_2011 | irrelevant | 0 | 0 | The study focuses on saxagliptin, metformin, glyburide, and pioglitazone, but does not involve leriglitazone. |
| PD | Patel_2011 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic interactions of saxagliptin with other drugs and does not report any pharmacodynamic or exposure-response data for leriglitazone. |
| popPK | Rodríguez-Pascau_2021 | irrelevant | 0 | 0 | The paper focuses on the neuroprotective and anti-inflammatory mechanisms of leriglitazone in disease models and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | Traver_2024 | not_relevant | 2 | 2 | The paper focuses on clinical PK and PBPK modeling in healthy adults and children, but does not report pharmacogenomic effects (gene variant/genotype impact) on PK parameters. |
| popPK | Vaidyanathan_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of aliskiren, metformin, pioglitazone, and fenofibrate; leriglitazone is not mentioned or studied. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bleriglitazone%5D&body=Drug%3A%20leriglitazone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_leriglitazone/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>

<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;pipemidic acid&quot;}]"></div>

# pipemidic acid

- **generic name:** pipemidic acid
- **ATC codes:** `J01MB04`
- **DrugBank:** [DB13823](https://go.drugbank.com/drugs/DB13823) · **PubChem:** none
- **molar mass:** 303.3165 g/mol (C14H17N5O3) — DrugBank
- **groups:** investigational

## About

Pipemidic acid is a quinolone antibiotic that has been used as a urinary anti-infective to treat bacterial infections of the urinary tract. It is not an approved medicine in major markets today and is considered investigational, having largely fallen out of clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q754986](https://www.wikidata.org/wiki/Q754986) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pipemidic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:54 | 1:35 | 0/0/0 | 0/0/0 | 0/0/0 | 38,700/1,242 | einfracz / qwen3.8-27b | 2 | 0/0 | 1/1 | 0 |

## Coverage

- **PubMed hits:** 22 matched, 17 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Anadón_1990.pdf` | Anadón A et al., Pharmacokinetics of pipemidic acid in c…, American journal of veterin… (1990) | popPK | 10 |  | [2240801](https://pubmed.ncbi.nlm.nih.gov/2240801) | The abstract provides complete numeric values for pharmacokinetic parameters (CL, V, t1/2) for pipemidic acid in chickens. |
| `Klinge_1984.pdf` | Klinge E et al., Single- and multiple-dose pharmacokinet…, Antimicrobial agents and ch… (1984) | popPK | 10 | [10.1128/AAC.26.1.69](https://doi.org/10.1128/AAC.26.1.69) | [6476816](https://pubmed.ncbi.nlm.nih.gov/6476816) | The abstract explicitly reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for pipemidic acid in humans. |
| `Backhaus_2000.pdf` | Backhaus T et al., The single substance and mixture toxici…, Aquatic toxicology (Amsterd… (2000) | pd | 4 | [10.1016/s0166-445x(99)00069-7](https://doi.org/10.1016/s0166-445x(99)00069-7) | [10814806](https://www.ncbi.nlm.nih.gov/pubmed/10814806) | metadata signals extractable PD data (EC50) |
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 |  | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |
| `Valero_1991.pdf` | Valero F et al., Selective in-vitro inhibition of hepati…, The Journal of pharmacy and… (1991) | pd | 4 | [10.1111/j.2042-7158.1991.tb05440.x](https://doi.org/10.1111/j.2042-7158.1991.tb05440.x) | [1676053](https://www.ncbi.nlm.nih.gov/pubmed/1676053) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07 11:53 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Backhaus_2000 | irrelevant | 0 | 0 | The study is an in-vitro ecotoxicity assessment using bacteria (Vibrio fischeri) and reports toxicity metrics (EC50), not pharmacokinetic parameters for pipemidic acid. |
| popPK | Smith_2019 | irrelevant | 0 | 0 | The paper is a computational/in-vitro study on intravesical delivery mechanics and does not report pharmacokinetic parameters for pipemidic acid. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of GABA-antagonistic effects on receptor binding, not a pharmacokinetic study. |
| popPK | Uehlinger_1996 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of fleroxacin, not pipemidic acid. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between theophylline and pipemidic acid (affecting theophylline clearance), not a pharmacogenomic effect on pipemidic acid. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpipemidic_acid%5D&body=Drug%3A%20pipemidic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pipemidic_acid/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>

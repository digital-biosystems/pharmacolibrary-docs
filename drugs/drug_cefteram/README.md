<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefteram&quot;}]"></div>

# cefteram

- **generic name:** cefteram
- **ATC codes:** `J01DD18`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Cefteram is a third-generation cephalosporin antibiotic used to treat bacterial infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5057298](https://www.wikidata.org/wiki/Q5057298) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:41 | 1:26 | 0/0/0 | 0/0/0 | 0/0/0 | 21,346/811 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nakamura_1989.pdf` | Nakamura H et al., [Pharmacokinetic studies on oral antibi…, The Japanese journal of ant… (1989) | popPK | 9 |  | [2810759](https://pubmed.ncbi.nlm.nih.gov/2810759) | The study reports a compartmental PK model and standard parameters (Tmax, Cmax, T1/2) for cefteram, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| `Wagatsuma_1989.pdf` | Wagatsuma Y et al., [Clinical evaluation of cefteram pivoxi…, The Japanese journal of ant… (1989) | popPK | 6 |  | [2810737](https://pubmed.ncbi.nlm.nih.gov/2810737) | The paper reports individual PK parameters (Cmax, Tmax, T1/2, urinary recovery) for cefteram in humans, but lacks population-level quantitative disposition parameters (CL, V, Q) typically required for modeling. |
| `Minamitani_1989.pdf` | Minamitani M et al., [A clinical study on cefteram pivoxil i…, The Japanese journal of ant… (1989) | popPK | 5 |  | [2810756](https://pubmed.ncbi.nlm.nih.gov/2810756) | The study reports PK parameters (Cmax, Tmax, urinary excretion) for cefteram, but lacks formal disposition parameters like CL, V, or ka required for a PK model. |
| `Mikamo_2005.pdf` | Mikamo H et al., [Two cases of Bartholin's gland abscess…, The Japanese journal of ant… (2005) | pd | 5 |  | [16276738](https://www.ncbi.nlm.nih.gov/pubmed/16276738) | metadata signals extractable PD data (PK/PD) |
| `Nakamura_2004.pdf` | Nakamura T et al., [Antibacterial activity of oral cephems…, The Japanese journal of ant… (2004) | pd | 5 |  | [15747584](https://www.ncbi.nlm.nih.gov/pubmed/15747584) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-07 10:40 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Matsumoto_2001 | irrelevant | 3 | 0 | The study focuses on AS-924 using cefteram-pivoxil only as a control/comparator, and no numeric PK parameters for cefteram are provided in the text. |
| popPK | Minamitani_1989 | relevant | 5 | 3 | The study reports PK parameters (Cmax, Tmax, urinary excretion) for cefteram, but lacks formal disposition parameters like CL, V, or ka required for a PK model. |
| popPK | Motohiro_1994 | irrelevant | 0 | 0 | The study investigates cefditoren pivoxil as the subject drug, while cefteram is only mentioned as a comparator in MIC sensitivity tests. |
| popPK | Nakamura_1989 | relevant | 9 | 4 | The study reports a compartmental PK model and standard parameters (Tmax, Cmax, T1/2) for cefteram, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| popPK | Totsuka_2001 | irrelevant | 2 | 0 | The study focuses on AS-924 as the subject, using cefteram-pivoxil only as a control comparator without providing specific quantitative disposition parameters (CL, V, etc.) for cefteram. |
| popPK | Zou_2008 | irrelevant | 2 | 1 | The study is a bioequivalence assessment reporting only Cmax and AUC ratios, lacking the compartmental or non-compartmental clearance and volume parameters required for PK modeling. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefteram%5D&body=Drug%3A%20cefteram%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefteram/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>

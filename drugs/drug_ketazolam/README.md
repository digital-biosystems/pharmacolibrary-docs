<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;ketazolam&quot;}]"></div>

# ketazolam

- **generic name:** ketazolam
- **ATC codes:** `N05BA10`
- **DrugBank:** [DB01587](https://go.drugbank.com/drugs/DB01587) · **PubChem:** [CID 33746](https://pubchem.ncbi.nlm.nih.gov/compound/33746)
- **molar mass:** 368.814 g/mol (C20H17ClN2O3) — DrugBank
- **groups:** approved, withdrawn

## About

Ketazolam is a benzodiazepine derivative used to treat anxiety and act as a sedative. It is given orally in capsule form. The drug has been withdrawn from the market.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2397253](https://www.wikidata.org/wiki/Q2397253), [Wikipedia](https://en.wikipedia.org/wiki/Ketazolam?oldid=1374656332) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 23:23 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 3,811/137 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Blaschke_1986.pdf` | Blaschke G et al., [Racemation of the benzodiazepines cama…, Arzneimittel-Forschung (1986) | pd | 4 |  | [2874815](https://www.ncbi.nlm.nih.gov/pubmed/2874815) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-23 23:23 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blaschke_1986 | irrelevant | 0 | 0 | The study focuses on in-vitro receptor binding and enantiomer resolution, not pharmacokinetic parameters. |
| PGx | Blaschke_1986 | not_relevant | 0 | 0 | The paper studies stereoselective receptor binding of ketazolam enantiomers, not the effect of a gene variant/genotype on its PK/PD parameters. |
| popPK | Dinis-Oliveira_2017 | irrelevant | 1 | 0 | The paper is a review focused on oxazepam metabolism, mentioning ketazolam only as a precursor drug without providing original quantitative pharmacokinetic parameters for ketazolam itself. |
| PGx | Dinis-Oliveira_2017 | not_relevant | 0 | 0 | The paper reviews the metabolic profile of oxazepam and mentions ketazolam only as a precursor, without reporting any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Fabre_1976 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for anxiety that reports therapeutic dosing but contains no quantitative pharmacokinetic parameters such as clearance, volume, or half-life for ketazolam. |
| PGx | Fabre_1976 | not_relevant | 0 | 0 | The paper reports a standard clinical efficacy study of ketazolam and contains no information regarding genetic variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Fabre_1981 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study for anxiety, reporting dose and side effects but no pharmacokinetic parameters (CL, V, t1/2). |
| PGx | Fabre_1981 | not_relevant | 0 | 0 | The study compares therapeutic efficacy and safety of ketazolam and diazepam but contains no pharmacogenomic analysis or gene variant data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bketazolam%5D&body=Drug%3A%20ketazolam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ketazolam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>

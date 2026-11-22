<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;vorasidenib&quot;}]"></div>

# vorasidenib

- **generic name:** vorasidenib
- **ATC codes:** `L01XM04`
- **DrugBank:** [DB17097](https://go.drugbank.com/drugs/DB17097) · **PubChem:** none
- **molar mass:** 414.74 g/mol (C14H13ClF6N6) — DrugBank
- **groups:** approved, investigational

## About

Vorasidenib is an anticancer medication that inhibits mutant isocitrate dehydrogenase enzymes to treat specific types of brain tumors. It is administered orally in tablet form. The drug is authorised in the European Union for these conditions.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q122240747](https://www.wikidata.org/wiki/Q122240747), [Wikipedia](https://en.wikipedia.org/wiki/Vorasidenib?oldid=1329510354) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

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
| 2026-10-06 21:58 | 2:33 | 0/0/0 | 0/0/0 | 0/0/0 | 11,493/206 | einfracz / qwen3.8-27b | 3 | 3/0 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DiNardo_2023.pdf` | DiNardo CD et al., Safety, efficacy, and PK/PD of voraside…, American journal of hematol… (2023) | pd | 5 | [10.1002/ajh.27005](https://doi.org/10.1002/ajh.27005) | [37354069](https://www.ncbi.nlm.nih.gov/pubmed/37354069) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-06 21:58 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | DiNardo_2023 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PGx | Jiang_2026 | not_relevant | 2 | 0 | The paper is a review of glioma mitochondrial metabolism and only mentions vorasidenib as a clinical example of genotype-directed therapy, without reporting specific pharmacokinetic or pharmacodynamic data affected by genetic variants. |
| PGx | Prakash_2026 | not_relevant | 0 | 0 | The paper is a computational drug repurposing study that mentions vorasidenib only as a reference drug for comparison; it does not report any pharmacogenomic effects on the PK or PD parameters of vorasidenib. |
| PGx | Yu_2026 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDIs) involving CYP enzymes, not pharmacogenomic effects (gene variants affecting PK/PD). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvorasidenib%5D&body=Drug%3A%20vorasidenib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vorasidenib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>

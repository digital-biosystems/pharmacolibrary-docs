<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;tiomolibdic acid&quot;}]"></div>

# tiomolibdic acid

- **generic name:** tiomolibdic acid
- **ATC codes:** `A16AX22`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Tiomolibdic acid is a molybdenum-based compound that binds copper, studied as a treatment for Wilson's disease, a disorder of copper accumulation. It is not an established marketed medicine; it has been investigated in clinical studies rather than being widely used.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-05 12:04 | 0:26 | 0/0/0 | 0/0/0 | 0/0/0 | 7,715/859 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Botha_1995.pdf` | Botha CJ et al., Pharmacokinetics of ammonium tetrathiom…, Journal of the South Africa… (1995) | popPK | 10 |  | [7629788](https://pubmed.ncbi.nlm.nih.gov/7629788) | The study reports quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance) for ammonium tetrathiomolybdate (a form of thiomolybdate) in sheep. |
| `Chan_2015.pdf` | Chan CM et al., Pharmacologic evaluation of ammonium te…, American journal of veterin… (2015) | popPK | 10 | [10.2460/ajvr.76.5.445](https://doi.org/10.2460/ajvr.76.5.445) | [25909377](https://pubmed.ncbi.nlm.nih.gov/25909377) | The study reports quantitative non-compartmental pharmacokinetic parameters (half-life, AUC, elimination rate constant) for ammonium tetrathiomolybdate (a form of thiomolybdate) in dogs. |

<sub>queue written 2026-10-05 12:04 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cater_2011 | irrelevant | 0 | 0 | The study investigates the mechanism of action of clioquinol on prostate cancer cells and does not report pharmacokinetic parameters for tiomolibdic acid. |
| popPK | Guo_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of copper's role in inflammation using tetrathiomolybdate as a chelator, not a pharmacokinetic study of tiomolibdic acid. |
| popPK | Lewis_2026 | irrelevant | 0 | 0 | The study focuses on the PET imaging of a copper tracer ([64Cu]CuCl2) and the effect of tetrathiomolybdate on its distribution, rather than reporting quantitative pharmacokinetic parameters (CL, V, etc.) for tetrathiomolybdate itself. |
| popPK | Plitz_2019 | irrelevant | 2 | 0 | The study investigates WTX101 (bis-choline tetrathiomolybdate), which is a distinct chemical entity from tiomolibdic acid, and reports mass balance percentages rather than specific PK parameters for tiomolibdic acid. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btiomolibdic_acid%5D&body=Drug%3A%20tiomolibdic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tiomolibdic_acid/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>

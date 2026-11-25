<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;temsirolimus&quot;}]"></div>

# temsirolimus

- **generic name:** temsirolimus
- **ATC codes:** `L01EG01`, `L01XE09`
- **DrugBank:** [DB06287](https://go.drugbank.com/drugs/DB06287) · **PubChem:** [CID 23724530](https://pubchem.ncbi.nlm.nih.gov/compound/23724530)
- **molar mass:** 1030.2871 g/mol (C56H87NO16) — DrugBank
- **groups:** approved, investigational

## About

Temsirolimus is an antineoplastic agent that inhibits mTOR kinase and treats renal cell carcinoma and mantle cell lymphoma. It is administered intravenously as a solution. It is authorised in the European Union for renal cell carcinoma and mantle cell lymphoma.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7699074](https://www.wikidata.org/wiki/Q7699074), [Wikipedia](https://en.wikipedia.org/wiki/Temsirolimus?oldid=1383463565) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cardillo_2013_cell_growth](drugs/drug_temsirolimus/pd_Cardillo_2013_cell_growth.md) | cell growth ← temsirolimus · inhibition effect | — | Cardillo TM et al., Targeting both IGF-1R and mTOR synergis…, BMC cancer (2013) | [10.1186/1471-2407-13-170](https://doi.org/10.1186/1471-2407-13-170) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:15 | 0:03 | 0/0/0 | 1/0/0 | 0/0/0 | 3,720/183 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cardillo_2013 | irrelevant | 0 | 0 | This is an in-vitro growth-inhibition study and reports no temsirolimus pharmacokinetic parameters. |
| popPK | Mbatchi_2017 | relevant | 9 | 0 | The study reports pharmacokinetic parameters (half-life, exposure) for temsirolimus, but the specific numeric values are not present in the provided abstract text. |
| popPK | Mizuno_2017 | irrelevant | 10 | 0 | The paper is a population PK study of temsirolimus in humans, but no numeric parameter values are provided in the text evidence. |
| PGx | Mizuno_2017 | not_relevant | 0 | 0 | The paper reports a population PK model for temsirolimus in children using clinical covariates (body weight, dose) but does not investigate gene variants or pharmacogenomic factors. |
| popPK | Niyomdecha_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of niclosamide's antiviral activity against RSV, using temsirolimus only as a comparator agent to define a pathway, with no pharmacokinetic data for temsirolimus. |
| PGx | Niyomdecha_2021 | not_relevant | 0 | 0 | The paper studies the antiviral mechanism of niclosamide against RSV using temsirolimus as a chemical control; it does not report pharmacogenomic effects on the PK or PD of temsirolimus. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btemsirolimus%5D&body=Drug%3A%20temsirolimus%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_temsirolimus/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>

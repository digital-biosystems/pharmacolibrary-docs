<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;rasagiline&quot;}]"></div>

# rasagiline

- **generic name:** rasagiline
- **ATC codes:** `N04BD02`
- **DrugBank:** [DB01367](https://go.drugbank.com/drugs/DB01367) · **PubChem:** [CID 3052776](https://pubchem.ncbi.nlm.nih.gov/compound/3052776)
- **molar mass:** 171.2383 g/mol (C12H13N) — DrugBank
- **groups:** approved, investigational

## About

Rasagiline is a selective monoamine oxidase B inhibitor used to treat Parkinson's disease. It is taken orally in tablet form and is well absorbed. It is authorised in the European Union and used as monotherapy or adjunct therapy.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q420685](https://www.wikidata.org/wiki/Q420685), [Wikipedia](https://en.wikipedia.org/wiki/Rasagiline?oldid=1383525507) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

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
| 2026-11-24 03:54 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 3,591/154 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ravi_2013.pdf` | Ravi PR et al., LC method for determination of rasagili…, Journal of chromatographic… (2013) | popPK | 9 | [10.1093/chromsci/bms096](https://doi.org/10.1093/chromsci/bms096) | [22689899](https://pubmed.ncbi.nlm.nih.gov/22689899) | The paper describes a pharmacokinetic study in rabbits and discusses parameter determination, but the specific numeric values for CL, V, etc., are not present in the provided abstract/evidence. |

<sub>queue written 2026-11-24 03:54 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fan_2024 | irrelevant | 0 | 0 | This is an in-vitro screening study identifying new MAO-B inhibitors; rasagiline is used only as a positive control, and no pharmacokinetic parameters for rasagiline are reported. |
| PGx | Fan_2024 | not_relevant | 0 | 0 | The paper focuses on the discovery of novel MAO-B inhibitors and does not investigate the pharmacogenomics of rasagiline. |
| popPK | Glezer_2003 | irrelevant | 0 | 0 | The study is a pharmacological investigation of sympathomimetic effects in rat vas deferens, not a pharmacokinetic study of rasagiline. |
| PGx | Glezer_2003 | not_relevant | 0 | 0 | The paper compares sympathomimetic effects of selegiline/rasagiline metabolites in rat vas deferens and does not report any pharmacogenomic (genotype/variant) effects on PK or PD parameters. |
| popPK | Masellis_2016 | irrelevant | 0 | 0 | The paper is a pharmacogenetic study examining genetic associations with clinical symptom response (UPDRS scores) to rasagiline, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | Masellis_2016 | not_relevant | 0 | 0 |  |
| popPK | Müller_2014 | irrelevant | 1 | 0 | The paper is a narrative review without original quantitative PK parameter values. |
| PGx | Müller_2014 | not_relevant | 0 | 0 | The text is a review discussing the clinical use and pharmacology of rasagiline but does not report any pharmacogenomic studies linking gene variants to its PK or PD parameters. |
| popPK | Ravi_2013 | relevant | 9 | 2 | The paper describes a pharmacokinetic study in rabbits and discusses parameter determination, but the specific numeric values for CL, V, etc., are not present in the provided abstract/evidence. |
| PGx | Ravi_2013 | not_relevant | 0 | 0 | The paper reports a standard pharmacokinetic study in rabbits using a new analytical method and contains no data on gene variants or genotypes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brasagiline%5D&body=Drug%3A%20rasagiline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rasagiline/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>

<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A14A&quot;,&quot;href&quot;:&quot;atc/A14A.md&quot;},{&quot;label&quot;:&quot;metenolone&quot;}]"></div>

# metenolone

- **generic name:** metenolone
- **ATC codes:** `A14AA04`
- **DrugBank:** [DB13710](https://go.drugbank.com/drugs/DB13710) · **PubChem:** not captured
- **molar mass:** 302.451 g/mol (C20H30O2) — DrugBank
- **groups:** investigational

## About

Metenolone is an anabolic steroid that has been used to promote muscle growth and counter wasting conditions. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q905078](https://www.wikidata.org/wiki/Q905078) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:04 | 0:14 | 0/0/0 | 0/0/0 | 0/0/0 | 5,000/213 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abdul_2024.pdf` | Abdul Karim A et al., Biotransformation of metenolone acetate…, Steroids (2024) | pd | 4 | [10.1016/j.steroids.2023.109345](https://doi.org/10.1016/j.steroids.2023.109345) | [37984606](https://www.ncbi.nlm.nih.gov/pubmed/37984606) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-05T10:04:55.772504+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdul_2024 | irrelevant | 0 | 0 | The study focuses on microbial biotransformation and in-vitro aromatase inhibition, not pharmacokinetic disposition parameters. |
| PD | Abdul_2024 | not_relevant | 0 | 0 | The paper reports in vitro aromatase inhibition IC50 values for metabolites, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) relationship for the drug metenolone itself. |
| popPK | Anes_2024 | irrelevant | 0 | 0 | The paper is a review of immunology regarding tuberculosis and HIV, containing no pharmacokinetic data for metenolone. |
| popPK | Garbrecht_1981 | irrelevant | 0 | 0 | The study focuses on lipid metabolism side effects (hyperlipoproteinaemia) and does not report any pharmacokinetic parameters for methenolone. |
| PD | Garbrecht_1981 | not_relevant | 1 | 0 | The paper reports a qualitative observation of hyperlipoproteinaemia and explicitly states there was no relationship between cholesterol levels and dosage, providing no numeric PD parameters or concentration-effect data. |
| popPK | Hraiech_2017 | irrelevant | 0 | 0 | The paper is a study on Staphylococcus aureus pneumonia in mice and does not involve metenolone or pharmacokinetic parameters. |
| popPK | Hussain_2016 | irrelevant | 0 | 0 | The study focuses on fungal biotransformation and immunomodulatory activity of methenolone enanthate, not pharmacokinetic disposition parameters. |
| popPK | Shen_2009 | irrelevant | 0 | 0 | The study focuses on hair analysis for doping control and explicitly states that metenolone does not deposit in hair, providing no pharmacokinetic parameters. |
| PD | Shen_2009 | not_relevant | 0 | 0 | The paper reports that methenolone does not deposit in hair and focuses on the time-course of concentration in hair for other steroids, providing no pharmacodynamic (effect) data or exposure-response relationship for metenolone. |
| popPK | Siddiqui_2020 | irrelevant | 0 | 0 | The paper is a study on fungal biocatalysis and structural transformation of metenolone acetate, reporting no pharmacokinetic parameters. |
| PD | Siddiqui_2020 | not_relevant | 2 | 2 | The paper reports single-point IC50 values for specific metabolites in cell assays, but does not provide a concentration-effect curve, Emax, or a PK/PD model for metenolone itself. |
| popPK | Torre_2017 | irrelevant | 0 | 0 | The paper is a study on planarian innate immunity and has no relation to metenolone pharmacokinetics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>

<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;tofisopam&quot;}]"></div>

# tofisopam

- **generic name:** tofisopam
- **ATC codes:** `N05BA23`
- **DrugBank:** [DB08811](https://go.drugbank.com/drugs/DB08811) · **PubChem:** [CID 5502](https://pubchem.ncbi.nlm.nih.gov/compound/5502)
- **molar mass:** 382.4528 g/mol (C22H26N2O4) — DrugBank
- **groups:** investigational

## About

Tofisopam is a benzodiazepine derivative indicated for the treatment of anxiety. It is currently classified as an investigational drug.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q945537](https://www.wikidata.org/wiki/Q945537), [Wikipedia](https://en.wikipedia.org/wiki/Tofisopam?oldid=1383446253) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tóth_2005_CYP3A4_enzyme_activity](drugs/drug_tofisopam/pd_T_th_2005_CYP3A4_enzyme_activity.md) | CYP3A4 enzyme activity ← tofisopam · inhibition effect | — | Tóth M et al., [Effect of tofisopam on CYP3A4 enzyme a…, Acta pharmaceutica Hungarica (2005) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:56 | 0:01 | 0/0/0 | 0/1/0 | 0/0/0 | 210/63 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Drabant_2006.pdf` | Drabant S et al., Effect of tofisopam on the single-oral-…, European journal of clinica… (2006) | pgx | 7 | [10.1007/s00228-006-0160-9](https://doi.org/10.1007/s00228-006-0160-9) | [16791582](https://www.ncbi.nlm.nih.gov/pubmed/16791582) | metadata signals extractable PGX data (cyp3a4, PK/PD-context) |
| `Tóth_2008.pdf` | Tóth M et al., Tofisopam inhibits the pharmacokinetics…, European journal of clinica… (2008) | pgx | 7 | [10.1007/s00228-007-0397-y](https://doi.org/10.1007/s00228-007-0397-y) | [17989974](https://www.ncbi.nlm.nih.gov/pubmed/17989974) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-24 05:56 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cameron_2007 | irrelevant | 1 | 0 | The study focuses on metabolic identification and enzyme characterization (CYP2C9/CYP3A4) rather than quantitative pharmacokinetic parameters like clearance or volume. |
| PGx | Cameron_2007 | not_relevant | 0 | 0 | The paper investigates enantioselective metabolism and enzyme involvement (CYP2C9/CYP3A4) but does not report pharmacogenomic effects of specific gene variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Drabant_2006 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PGx | Drabant_2006 | not_relevant | 0 | 0 | The paper investigates the effect of tofisopam on the pharmacokinetics of alprazolam, not the effect of gene variants on tofisopam. |
| popPK | Niwa_2005 | irrelevant | 0 | 0 | The study is an in-vitro metabolic mechanism study (CYP identification) and does not report in vivo pharmacokinetic disposition parameters like clearance, volume, or half-life for tofisopam. |
| PGx | Niwa_2005 | not_relevant | 0 | 0 | The paper describes in vitro metabolism of tofisopam by recombinant CYPs but does not report the effect of specific genetic variants or genotypes on PK/PD parameters. |
| popPK | Turan_2022 | irrelevant | 0 | 0 | The study investigates behavioral antidepressant-like effects and molecular docking mechanisms in mice, containing no pharmacokinetic parameter values for tofisopam. |
| PGx | Turan_2022 | not_relevant | 0 | 0 | The study investigates the pharmacological mechanism of tofisopam's antidepressant effect but contains no data on gene variants/genotypes or pharmacogenomic parameters. |
| popPK | Tóth_2005 | irrelevant | 1 | 0 | The study reports in vitro CYP3A4 inhibition (IC50) rather than pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| PGx | Tóth_2005 | not_relevant | 0 | 0 | The paper investigates the effect of tofisopam on CYP3A4 enzyme activity (drug-drug interaction potential) and does not report how genetic variants affect the PK/PD of tofisopam. |
| popPK | Tóth_2008 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PGx | Tóth_2008 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (tofisopam affecting midazolam), not pharmacogenomic effects (gene variants) on tofisopam's PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btofisopam%5D&body=Drug%3A%20tofisopam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tofisopam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>

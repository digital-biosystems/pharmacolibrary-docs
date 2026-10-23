<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;cediranib maleate&quot;}]"></div>

# cediranib maleate

- **generic name:** cediranib maleate
- **ATC codes:** `L01XE32`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Cediranib is an anticancer agent, a protein kinase inhibitor studied for treating cancer. It does not appear to have marketing authorisation and remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5057052](https://www.wikidata.org/wiki/Q5057052) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 22:26 | 0:52 | 0/0/0 | 0/0/0 | 0/0/0 | 10,475/1,012 | openai / gpt-6-luna | 3 | 1/2 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gu_2014.pdf` | Gu R et al., The multikinase inhibitor axitinib is a…, Biochemical pharmacology (2014) | pgx | 7 | [10.1016/j.bcp.2014.01.016](https://doi.org/10.1016/j.bcp.2014.01.016) | [24462920](https://www.ncbi.nlm.nih.gov/pubmed/24462920) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-07T22:25:46.880598+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Adamu_2024 | not_relevant | 0 | 0 | The review reports BRCA-status associations with progression-free survival for combination therapies, not a pharmacogenomic effect on a cediranib pharmacokinetic or pharmacodynamic parameter. |
| PGx | Gu_2014 | not_relevant | 0 | 0 | The study examines axitinib-mediated CYP inhibition, not a genetic effect on cediranib_maleate PK or PD. |
| PGx | Hu_2024 | not_relevant | 0 | 0 | The paper evaluates ctDNA dynamics and clinical outcomes, not a gene variant, genotype, or phenotype effect on cediranib pharmacokinetics or pharmacodynamics. |
| PGx | Lassen_2013 | not_relevant | 0 | 0 | The paper reports drug–drug interaction effects of ketoconazole and rifampicin on cediranib exposure, not effects of genetic variants or phenotypes. |
| PGx | Lee_2015 | not_relevant | 0 | 0 | XRCC1 polymorphisms were assessed only for association with PFS, with no significant association; no genotype-related cediranib pharmacokinetic or pharmacodynamic parameter is reported. |
| PGx | Lheureux_2020 | not_relevant | 0 | 0 | Reports genomic resistance mechanisms associated with treatment outcomes, but not their effects on a cediranib pharmacokinetic or pharmacodynamic parameter. |
| PGx | Tao_2009 | not_relevant | 0 | 0 | The study examines cediranib inhibition of ABCB1/ABCC1-mediated resistance to other drugs, not a gene-related effect on cediranib’s PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>

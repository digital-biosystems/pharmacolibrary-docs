<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03A&quot;,&quot;href&quot;:&quot;atc/H03A.md&quot;},{&quot;label&quot;:&quot;liothyronine sodium&quot;}]"></div>

# liothyronine sodium

- **generic name:** liothyronine sodium
- **ATC codes:** `H03AA02`
- **DrugBank:** [DB00279](https://go.drugbank.com/drugs/DB00279) · **PubChem:** [CID 5920](https://pubchem.ncbi.nlm.nih.gov/compound/5920)
- **molar mass:** 650.9735 g/mol (C15H12I3NO4) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Liothyronine sodium, a synthetic thyroid hormone, is used to treat hypothyroidism and other thyroid-related conditions such as goiter, myxedema, and thyroid carcinoma. It is an approved medicine, also approved for veterinary use, and is used less widely than levothyroxine, mainly where a faster-acting thyroid hormone is needed.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q327362](https://www.wikidata.org/wiki/Q327362) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=liothyronine_sodium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inducer, `SLCO1A2` substrate | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inducer, `SLCO1A2` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inducer | DrugBank actor |
| distribution | testis | `ABCB1` inducer | DrugBank actor |
| metabolism | liver | `SLC10A1` substrate, `SLCO1B1` substrate, `SLCO1B3` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inducer, `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: PCNA (target), SERPINA7 (substrate), SLC16A10 (inhibitor), SLC7A5 (unknown), SLCO1C1 (inhibitor), SLCO1C1 (substrate), SLCO4A1 (inhibitor), SLCO4A1 (substrate), SLCO4C1 (substrate), THRA (target), THRB (target), TTR (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:01 | 0:48 | 0/0/0 | 0/0/0 | 0/0/0 | 22,696/821 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Taylor_1997.pdf` | Taylor AH et al., Beneficial effects of a novel thyromime…, Molecular pharmacology (1997) | pd | 5 | [10.1124/mol.52.3.542](https://doi.org/10.1124/mol.52.3.542) | [9281617](https://www.ncbi.nlm.nih.gov/pubmed/9281617) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07 10:00 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Almohammadi_2025 | not_relevant | 2 | 0 | The paper reports the efficacy of liothyronine in treating a genetic thyroid disorder (SECISBP2 deficiency) but does not analyze how this genetic variant alters the pharmacokinetics (PK) or pharmacodynamics (PD) of the drug (e.g., clearance, half-life, receptor sensitivity), which is required for a pharmacogenomic effect. |
| PGx | Dumitrescu_2006 | not_relevant | 0 | 0 | The paper studies MCT8 knockout mice and endogenous thyroid hormone regulation, not the pharmacogenomics of liothyronine sodium. |
| PGx | Haberkorn_2001 | not_relevant | 0 | 0 | The study investigates the effects of dietary vitamin A and L-T3 on UGT enzyme expression in rats, which is not a pharmacogenomic effect on a PK/PD parameter for liothyronine_sodium. |
| PGx | Haberkorn_2003 | not_relevant | 0 | 0 | The paper studies the effect of thyroid status and retinoic acid on UGT expression in rat hepatocytes, not the effect of gene variants on liothyronine pharmacokinetics or pharmacodynamics. |
| popPK | Simonetti_2026 | irrelevant | 0 | 0 | The study evaluates cystic fibrosis treatment outcomes (sweat chloride) and does not report pharmacokinetic parameters for liothyronine sodium. |
| PGx | Simonetti_2026 | not_relevant | 0 | 0 | The study evaluates the pharmacodynamics of elexacaftor/tezacaftor/ivacaftor in cystic fibrosis, not the pharmacokinetics or pharmacodynamics of liothyronine sodium. |
| popPK | Taylor_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of the thyromimetic CGS 23425 and lipid metabolism, using L-T3 (liothyronine) only as a reference compound without reporting its pharmacokinetic parameters. |
| popPK | Wooliscroft_2020 | irrelevant | 0 | 0 | The study focuses on safety and visual outcomes in multiple sclerosis and does not report any pharmacokinetic parameters for liothyronine sodium. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | The study is an in vivo toxicity/genetic assay in frogs to screen for thyroid hormone disruptors, not a pharmacokinetic study for liothyronine sodium. |
| popPK | Zhou-Li_1991 | irrelevant | 0 | 0 | The study is an in vitro cell proliferation experiment investigating the biological effects of L-triiodothyronine, not its pharmacokinetics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bliothyronine_sodium%5D&body=Drug%3A%20liothyronine_sodium%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_liothyronine_sodium/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>

<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02A&quot;,&quot;href&quot;:&quot;atc/L02A.md&quot;},{&quot;label&quot;:&quot;leuprorelin&quot;}]"></div>

# leuprorelin

- **generic name:** leuprorelin
- **ATC codes:** `L02AE02`, `L02AE51`
- **DrugBank:** [DB00007](https://go.drugbank.com/drugs/DB00007) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Leuprorelin is a hormone analogue used to treat hormone-related conditions such as prostate cancer, breast cancer, endometriosis, precocious puberty, and infertility. It is widely used, appears on the WHO essential medicines list, and is authorised in the European Union mainly for prostate cancer.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q907160](https://www.wikidata.org/wiki/Q907160) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Snelder_2019_T](drugs/drug_leuprorelin/pd_Snelder_2019_T.md) | testosterone ← leuprorelin · inhibition effect | — | Snelder N et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2019) | [10.1111/bcp.13891](https://doi.org/10.1111/bcp.13891) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=leuprorelin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GNRH1 (activator), GNRHR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:07 | 0:17 | 0/0/0 | 1/0/0 | 0/0/0 | 19,600/732 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kogame_2020.pdf` | Kogame A et al., Pharmacokinetic and pharmacodynamic mod…, Biopharmaceutics & drug dis… (2020) | popPK | 5 | [10.1002/bdd.2245](https://doi.org/10.1002/bdd.2245) | [32562504](https://pubmed.ncbi.nlm.nih.gov/32562504) | The study is a PK/PD modeling study in rats that includes leuprorelin acetate (TAP-144) as a comparator drug and states that PK/PD models were developed for it, implying quantitative parameters (like CL, V) were estimated, but the specific numeric values for leuprorelin are not present in the provided text (likely in figures or supplementary material). |
| `Snelder_2019.pdf` | Snelder N et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2019) | popPK | 5 | [10.1111/bcp.13891](https://doi.org/10.1111/bcp.13891) | [30731514](https://pubmed.ncbi.nlm.nih.gov/30731514) | The study models the pharmacodynamic relationship between testosterone and PSA, not the pharmacokinetic disposition parameters (CL, V) of leuprorelin itself, and no numeric values are present. |

<sub>queue written 2026-10-06T22:07:24.360701+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kogame_2020 | relevant | 5 | 0 | The study is a PK/PD modeling study in rats that includes leuprorelin acetate (TAP-144) as a comparator drug and states that PK/PD models were developed for it, implying quantitative parameters (like CL, V) were estimated, but the specific numeric values for leuprorelin are not present in the provided text (likely in figures or supplementary material). |
| popPK | Ohashi_2018 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating quality of life and treatment duration, reporting no pharmacokinetic parameters for leuprorelin. |
| popPK | Snelder_2019 | irrelevant | 5 | 0 | The study models the pharmacodynamic relationship between testosterone and PSA, not the pharmacokinetic disposition parameters (CL, V) of leuprorelin itself, and no numeric values are present. |
| popPK | Zou_2020 | irrelevant | 0 | 0 | The paper models PSA (biomarker) disease progression kinetics, not the pharmacokinetics (disposition) of the drug leuprorelin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>

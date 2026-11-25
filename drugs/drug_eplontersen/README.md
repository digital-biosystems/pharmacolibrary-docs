<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;eplontersen&quot;}]"></div>

# eplontersen

- **generic name:** eplontersen
- **ATC codes:** `N07XX21`
- **DrugBank:** [DB16199](https://go.drugbank.com/drugs/DB16199) · **PubChem:** none
- **groups:** approved, investigational

## About

Eplontersen is an antisense oligonucleotide used to treat transthyretin-mediated amyloidosis. It is given as a subcutaneous injection.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q123663227](https://www.wikidata.org/wiki/Q123663227), [Wikipedia](https://en.wikipedia.org/wiki/Eplontersen?oldid=1363320001) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Diep_2022_reference](drugs/drug_eplontersen/Eplontersen_Diep2022_reference.md) | — | 1-compartment (no model) | 2 | Diep JK et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2022) | [10.1111/bcp.15468](https://doi.org/10.1111/bcp.15468) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Diep_2022_TTR](drugs/drug_eplontersen/pd_Diep_2022_TTR.md) | Serum TTR ← eplontersen · indirect response — drug inhibits the production of Serum TTR | — | Diep JK et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2022) | [10.1111/bcp.15468](https://doi.org/10.1111/bcp.15468) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:56 | 0:52 | 1/0/0 | 1/0/0 | 0/0/0 | 18,604/5,561 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Diep_2022.pdf` | Diep JK et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2022) | popPK | 10 | [10.1111/bcp.15468](https://doi.org/10.1111/bcp.15468) | [35869634](https://pubmed.ncbi.nlm.nih.gov/35869634) | The paper describes a population PK model for eplontersen in healthy volunteers and provides key quantitative parameters such as terminal half-life (25.5 days), covariate relationships (lean body mass on clearance), and absorption differences. |

<sub>queue written 2026-11-23 22:55 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Coelho_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting pharmacodynamic effects (serum transthyretin reduction) and clinical outcomes, containing no pharmacokinetic parameters (CL, V, ka) for eplontersen. |
| PGx | Coelho_2023 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (TTR reduction, neuropathy scores) for a general patient population but does not analyze how specific gene variants influence the pharmacokinetic or pharmacodynamic parameters of eplontersen. |
| PGx | Diep_2022 | not_relevant | 0 | 0 | The paper reports non-genetic covariates (weight, injection site) affecting PK/PD parameters, but does not evaluate the impact of gene variants or genotypes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beplontersen%5D&body=Drug%3A%20eplontersen%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_eplontersen/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 22:55 UTC</sub>

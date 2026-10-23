<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;moxetumomab pasudotox&quot;}]"></div>

# moxetumomab pasudotox

- **generic name:** moxetumomab pasudotox
- **ATC codes:** `L01FB02`
- **DrugBank:** [DB12688](https://go.drugbank.com/drugs/DB12688) · **PubChem:** none
- **groups:** approved, investigational

## About

Moxetumomab pasudotox is an anticancer monoclonal antibody drug that was used to treat hairy cell leukemia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q14605217](https://www.wikidata.org/wiki/Q14605217) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Kuruvilla_2020_reference](drugs/drug_moxetumomab_pasudotox/MoxetumomabPasudotox_Kuruvilla2020_reference.md) | — | 1-compartment (no model) | 0 | Kuruvilla D et al., Population pharmacokinetics, efficacy,…, British journal of clinical… (2020) | [10.1111/bcp.14250](https://doi.org/10.1111/bcp.14250) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=moxetumomab_pasudotox).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CD22 (binder), EEF2 (inactivator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:22 | 2:34 | 0/1/0 | 0/0/0 | 0/0/0 | 17,321/2,157 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kuruvilla_2020.pdf` | Kuruvilla D et al., Population pharmacokinetics, efficacy,…, British journal of clinical… (2020) | popPK | 10 | [10.1111/bcp.14250](https://doi.org/10.1111/bcp.14250) | [32077130](https://pubmed.ncbi.nlm.nih.gov/32077130) | The paper reports a population PK model for moxetumomab pasudotox with specific numeric clearance values (CL1 and CL2) provided in the abstract. |
| `Wang_2013.pdf` | Wang B et al., Pharmacokinetic and pharmacodynamic com…, Journal of pharmaceutical s… (2013) | popPK | 9 | [10.1002/jps.23343](https://doi.org/10.1002/jps.23343) | [23090886](https://pubmed.ncbi.nlm.nih.gov/23090886) | The paper describes a population PK/PD study of moxetumomab pasudotox in cynomolgus monkeys, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-07 17:21 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Liu_2016 | not_relevant | 0 | 0 | The paper reports on the enhancement of drug activity by a protein kinase inhibitor (H89) in cell lines, not on the effect of a patient's gene variant or genotype on the drug's PK or PD parameters. |
| PGx | Müller_2018 | not_relevant | 0 | 0 | The paper investigates the structural domains of the drug (Pseudomonas exotoxin) and their impact on efficacy, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Wang_2013 | relevant | 9 | 2 | The paper describes a population PK/PD study of moxetumomab pasudotox in cynomolgus monkeys, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Wei_2018 | not_relevant | 0 | 0 | The paper describes protein engineering to improve pharmacokinetics (half-life) and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmoxetumomab_pasudotox%5D&body=Drug%3A%20moxetumomab_pasudotox%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_moxetumomab_pasudotox/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 17:21 UTC</sub>

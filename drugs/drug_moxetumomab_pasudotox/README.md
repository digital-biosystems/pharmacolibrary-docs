<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;moxetumomab pasudotox&quot;}]"></div>

# moxetumomab pasudotox

- **generic name:** moxetumomab pasudotox
- **ATC codes:** `L01FB02`
- **DrugBank:** [DB12688](https://go.drugbank.com/drugs/DB12688) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Moxetumomab pasudotox is an anticancer monoclonal antibody drug that was used to treat hairy cell leukemia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q14605217](https://www.wikidata.org/wiki/Q14605217) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:44 | 0:10 | 0/1/0 | 0/0/0 | 0/0/0 | 12,298/638 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4), gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kuruvilla_2020_reference](drugs/drug_moxetumomab_pasudotox/MoxetumomabPasudotox_Kuruvilla2020_reference.md) | — | 1-compartment (no model) | 0 | Kuruvilla D et al., Population pharmacokinetics, efficacy,…, British journal of clinical… (2020) | [10.1111/bcp.14250](https://doi.org/10.1111/bcp.14250) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=moxetumomab_pasudotox).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CD22 (binder), EEF2 (inactivator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kuruvilla_2020.pdf` | Kuruvilla D et al., Population pharmacokinetics, efficacy,…, British journal of clinical… (2020) | popPK | 10 | [10.1111/bcp.14250](https://doi.org/10.1111/bcp.14250) | [32077130](https://pubmed.ncbi.nlm.nih.gov/32077130) | The study reports quantitative population PK parameters for moxetumomab pasudotox, including specific clearance values (CL1 and CL2) in the abstract. |
| `Wang_2013.pdf` | Wang B et al., Pharmacokinetic and pharmacodynamic com…, Journal of pharmaceutical s… (2013) | popPK | 8 | [10.1002/jps.23343](https://doi.org/10.1002/jps.23343) | [23090886](https://pubmed.ncbi.nlm.nih.gov/23090886) | The study reports population PK/PD modeling of moxetumomab pasudotox in monkeys, but specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract text. |

<sub>queue written 2026-10-15T03:44:05.110591+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Liu_2016 | not_relevant | 0 | 0 | The paper investigates pharmacodynamic enhancement by a kinase inhibitor (H89) on drug activity, not the effect of a patient's gene variant on the drug's PK or PD parameters. |
| PGx | Müller_2018 | not_relevant | 0 | 0 | The study investigates how different domains of the drug's exotoxin component affect efficacy in xenograft models, not how patient genetic variants (pharmacogenomics) affect the drug's PK or PD. |
| popPK | Wang_2013 | relevant | 8 | 1 | The study reports population PK/PD modeling of moxetumomab pasudotox in monkeys, but specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract text. |
| PGx | Wei_2018 | not_relevant | 0 | 0 | The paper evaluates protein engineering variants (albumin-binding domains) to extend half-life in mice, not the effect of human genetic variants on moxetumomab pasudotox pharmacokinetics or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:44 UTC</sub>

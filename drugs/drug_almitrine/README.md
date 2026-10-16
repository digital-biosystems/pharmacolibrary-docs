<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;almitrine&quot;}]"></div>

# almitrine

- **generic name:** almitrine
- **ATC codes:** `R07AB07`
- **DrugBank:** [DB01430](https://go.drugbank.com/drugs/DB01430) · **PubChem:** [CID 33887](https://pubchem.ncbi.nlm.nih.gov/compound/33887)
- **molar mass:** 477.5522 g/mol (C26H29F2N7) — DrugBank
- **groups:** approved

## About

Almitrine is a respiratory stimulant drug used for breathing problems. It has been approved for use, but it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4733858](https://www.wikidata.org/wiki/Q4733858) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:40 | 1:12 | 0/1/0 | 0/0/0 | 0/0/0 | 149,374/10,953 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.6). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Winkelmann_1992_reference](drugs/drug_almitrine/Almitrine_Winkelmann1992_reference.md) | — | 1-compartment (no model) | 0 | Winkelmann BR et al., Acute and chronic effects of low dose a…, The European journal of med… (1992) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=almitrine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ATP1A1 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Winkelmann_1992.pdf` | Winkelmann BR et al., Acute and chronic effects of low dose a…, The European journal of med… (1992) | popPK | 8 | not captured | [1341206](https://pubmed.ncbi.nlm.nih.gov/1341206) | The study reports a specific quantitative PK parameter (terminal half-life of 32 +/- 29 days) and mentions a 3-compartment model, although other parameters like clearance and volume are not explicitly provided. |

<sub>queue written 2026-10-07T17:39:54.267061+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Clerbaux_1985 | irrelevant | 0 | 0 | The study measures hemoglobin oxygen affinity and DPG levels, not quantitative pharmacokinetic parameters (CL, Vd, t1/2) of almitrine. |
| popPK | Dos_2023 | irrelevant | 0 | 0 | The study evaluates the in vivo efficacy of almitrine against Toxoplasma gondii in mice and in silico ADMET predictions, but does not report quantitative pharmacokinetic parameters (CL, V, ka) for almitrine. |
| popPK | Olievier_1987 | irrelevant | 1 | 0 | This is a pharmacodynamic study of ventilatory response in cats, not a pharmacokinetic study reporting disposition parameters for almitrine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:39 UTC</sub>

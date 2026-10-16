<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;desonide&quot;}]"></div>

# desonide

- **generic name:** desonide
- **ATC codes:** `D07AB08`, `D07BB02`, `S01BA11`
- **DrugBank:** [DB01260](https://go.drugbank.com/drugs/DB01260) · **PubChem:** [CID 5311066](https://pubchem.ncbi.nlm.nih.gov/compound/5311066)
- **molar mass:** 416.5073 g/mol (C24H32O6) — DrugBank
- **groups:** approved, investigational

## About

Desonide is a moderately potent topical corticosteroid used to treat inflammatory skin conditions such as atopic dermatitis, psoriasis, seborrhoeic dermatitis, contact dermatitis, and other eczematous skin diseases. It is an approved medicine, available in dermatological preparations and also as an ophthalmic anti-inflammatory agent.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q904011](https://www.wikidata.org/wiki/Q904011) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:08 | 0:17 | 0/0/0 | 0/1/0 | 0/0/0 | 15,937/506 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Gupta_2007_none](drugs/drug_desonide/pd_Gupta_2007_none.md) | none ← desonide · model not identified | — | Gupta VD, Chemical stability of desonide in ear d…, International journal of ph… (2007) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=desonide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ESRRA (modulator), ESRRB (modulator), ESRRG (modulator), NR3C1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gupta_2007 | irrelevant | 0 | 0 | The study focuses on chemical stability and assay method validation for desonide ear drops, reporting no pharmacokinetic or disposition parameters. |
| popPK | Lucky_1997 | irrelevant | 0 | 0 | The study evaluates the safety of desonide via HPA axis suppression (cortisol levels) rather than reporting pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Rosa_2014 | irrelevant | 0 | 0 | The study investigates the photostability and chemical degradation of desonide in a formulation, not its pharmacokinetics or disposition parameters. |
| popPK | Rosa_2022 | irrelevant | 1 | 0 | The paper focuses on in-vitro permeation and animal model anti-inflammatory effects without reporting population pharmacokinetic parameters like CL, V, or ka. |
| popPK | Woodford_1977 | irrelevant | 0 | 0 | The study assesses topical bioavailability and vasoconstriction activity, not pharmacokinetic disposition parameters (CL, V, etc.) for desonide. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | no_text gate: only 27 chars of text extracted (&lt; 400) |
| popPK | unknown_2026 | irrelevant | 0 | 0 | no_text gate: only 27 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

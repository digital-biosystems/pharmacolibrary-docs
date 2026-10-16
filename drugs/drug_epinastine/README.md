<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;epinastine&quot;}]"></div>

# epinastine

- **generic name:** epinastine
- **ATC codes:** `R06AX24`, `S01GX10`
- **DrugBank:** [DB00751](https://go.drugbank.com/drugs/DB00751) · **PubChem:** [CID 3241](https://pubchem.ncbi.nlm.nih.gov/compound/3241)
- **molar mass:** 249.3104 g/mol (C16H15N3) — DrugBank
- **groups:** approved

## About

Epinastine is an antihistamine used to treat allergic conditions, including allergic rhinitis and allergic eye disease. It is an approved medicine, available both as an oral antihistamine and as an eye drop for antiallergic use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q632405](https://www.wikidata.org/wiki/Q632405) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:30 | 4:12 | 0/3/0 | 0/0/0 | 0/0/0 | 65,674/21,345 | openai / gpt-6-luna | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Jang_2025_reference](drugs/drug_epinastine/Epinastine_Jang2025_reference.md) | — | — (no model) | 0 | Jang JH et al., Population modeling of pharmacokinetic…, Naunyn-Schmiedeberg's archi… (2025) | [10.1007/s00210-025-04299-1](https://doi.org/10.1007/s00210-025-04299-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.429). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Sarashina_2005_estimated_value](drugs/drug_epinastine/Epinastine_Sarashina2005_estimated_value.md) | — | — (no model) | 0 | Sarashina A et al., Population pharmacokinetics of epinasti…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.2250](https://doi.org/10.1111/j.1365-2125.2005.2250) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Sarashina_2005_hypothesized_value](drugs/drug_epinastine/Epinastine_Sarashina2005_hypothesized_value.md) | — | — (no model) | 0 | Sarashina A et al., Population pharmacokinetics of epinasti…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.2250](https://doi.org/10.1111/j.1365-2125.2005.2250) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=epinastine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA1A (binder), ADRA2A (binder), HRH1 (target), HRH2 (target), HTR2A (target), HTR7 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jang_2025.pdf` | Jang JH et al., Population modeling of pharmacokinetic…, Naunyn-Schmiedeberg's archi… (2025) | popPK | 10 | [10.1007/s00210-025-04299-1](https://doi.org/10.1007/s00210-025-04299-1) | [40439884](https://pubmed.ncbi.nlm.nih.gov/40439884) | The human population-PK model reports numeric clearance changes by CYP2D6 phenotype, but not absolute clearance values. |

<sub>queue written 2026-10-07T23:26:46.869780+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ohtani_1997 | irrelevant | 2 | 0 | Rat PK/PD study reports plasma concentrations but no quantitative disposition parameters for epinastine. |
| popPK | Wu_2017 | irrelevant | 0 | 0 | Epinastine is only a receptor antagonist, and no epinastine pharmacokinetic parameter values are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 23:27 UTC</sub>

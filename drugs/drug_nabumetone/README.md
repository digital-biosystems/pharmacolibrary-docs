<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;nabumetone&quot;}]"></div>

# nabumetone

- **generic name:** nabumetone
- **ATC codes:** `M01AX01`
- **DrugBank:** [DB00461](https://go.drugbank.com/drugs/DB00461) · **PubChem:** [CID 4409](https://pubchem.ncbi.nlm.nih.gov/compound/4409)
- **molar mass:** 228.2863 g/mol (C15H16O2) — DrugBank
- **groups:** approved

## About

Nabumetone is a non-steroidal anti-inflammatory drug used to treat pain and inflammation in conditions such as osteoarthritis and rheumatoid arthritis. It is an approved medicine that remains in use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425207](https://www.wikidata.org/wiki/Q425207) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 6-methoxy-2-naphythylacetic acid | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:06 | 0:06 | 0/1/0 | 0/0/0 | 0/0/0 | 10,534/991 | einfracz / qwen3.8-27b | 9 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.143). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Brier_1995_reference](drugs/drug_nabumetone/Nabumetone_Brier1995_reference.md) | — | 1-compartment (no model) | 0 | Brier ME et al., Population pharmacokinetics of the acti…, Clinical pharmacology and t… (1995) | [10.1016/0009-9236(95)90224-4](https://doi.org/10.1016/0009-9236(95)90224-4) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nabumetone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C9` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: AKR1C1 (substrate), AKR1C2 (substrate), AKR1C4 (substrate), HSD11B1 (substrate), MPO (inhibitor), PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brier_1995.pdf` | Brier ME et al., Population pharmacokinetics of the acti…, Clinical pharmacology and t… (1995) | popPK | 10 | [10.1016/0009-9236(95)90224-4](https://doi.org/10.1016/0009-9236(95)90224-4) | [7781261](https://pubmed.ncbi.nlm.nih.gov/7781261) | The study reports quantitative population PK parameters (CL, V, half-life) for the active metabolite of nabumetone in humans, with specific numeric ranges and point estimates provided in the abstract. |
| `Soma_1996.pdf` | Soma LR et al., Disposition and excretion of 6-methoxy-…, American journal of veterin… (1996) | popPK | 10 | not captured | [8712517](https://pubmed.ncbi.nlm.nih.gov/8712517) | The study reports quantitative PK parameters (CL, Vd, half-lives) for the active metabolite of nabumetone in horses. |
| `McMahon_1987.pdf` | McMahon FG et al., Nabumetone kinetics in the young and el…, The American journal of med… (1987) | popPK | 9 | [10.1016/0002-9343(87)90603-6](https://doi.org/10.1016/0002-9343(87)90603-6) | [3688002](https://pubmed.ncbi.nlm.nih.gov/3688002) | Study reports single-compartment PK parameters (Cmax, AUC, t1/2, ke) for nabumetone in humans, but does not explicitly state Clearance (CL) or Volume (V) values required for the specific parameter list, though they are derivable. |

<sub>queue written 2026-10-07T01:06:47.695795+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adegoke_2007 | irrelevant | 0 | 0 | The paper describes a colorimetric analytical method for determining nabumetone in tablets, not a pharmacokinetic study. |
| popPK | McMahon_1987 | relevant | 9 | 4 | Study reports single-compartment PK parameters (Cmax, AUC, t1/2, ke) for nabumetone in humans, but does not explicitly state Clearance (CL) or Volume (V) values required for the specific parameter list, though they are derivable. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:06 UTC</sub>

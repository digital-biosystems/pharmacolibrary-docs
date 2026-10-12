<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;bopindolol&quot;}]"></div>

# bopindolol

- **generic name:** bopindolol
- **ATC codes:** `C07AA17`, `C07CA17`
- **DrugBank:** [DB08807](https://go.drugbank.com/drugs/DB08807) · **PubChem:** [CID 44112](https://pubchem.ncbi.nlm.nih.gov/compound/44112)
- **molar mass:** 380.48 g/mol (C23H28N2O3) — DrugBank
- **groups:** experimental

## About

Bopindolol is a non-selective beta blocker that was used for cardiovascular conditions such as high blood pressure. It is considered experimental and does not appear to be an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q834660](https://www.wikidata.org/wiki/Q834660) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bopindolol | parent | 380.48 | C23H28N2O3 | DrugBank | [44112](https://pubchem.ncbi.nlm.nih.gov/compound/44112) | Aellig_1986 |
| hydrolysed bopindolol | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:24 | 0:42 | 0/1/0 | 0/0/0 | 0/0/0 | 2,501/273 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.429), gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Aellig_1986_reference](drugs/drug_bopindolol/Bopindolol_Aellig1986_reference.md) | — | 1-compartment (no model) | 2 | Aellig WH et al., Relationship between plasma concentrati…, British journal of clinical… (1986) | [10.1111/j.1365-2125.1986.tb02821.x](https://doi.org/10.1111/j.1365-2125.1986.tb02821.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bopindolol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (partial agonist), ADRB1 (target), ADRB2 (partial agonist), ADRB2 (target), ADRB3 (modulator), HTR1A (unknown), HTR1B (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Platzer_1984.pdf` | Platzer R et al., Simultaneous modeling of bopindolol kin…, Clinical pharmacology and t… (1984) | popPK | 9 | [10.1038/clpt.1984.130](https://doi.org/10.1038/clpt.1984.130) | [6329585](https://pubmed.ncbi.nlm.nih.gov/6329585) | The study reports a compartmental PK model and half-life for bopindolol, but specific numeric values for clearance or volume are not explicitly listed in the provided text. |
| `Grevel_1986.pdf` | Grevel J, Pharmacodynamic models of various beta…, Journal of cardiovascular p… (1986) | pd | 5 | not captured | [2439812](https://www.ncbi.nlm.nih.gov/pubmed/2439812) | metadata signals extractable PD data (Pharmacodynamicmodel) |

<sub>queue written 2026-10-07T00:24:38.996842+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aellig_1986 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| PGx | Dayer_1985 | not_relevant | 5 | 2 | The paper reports that the genetic polymorphism was only significant for metoprolol and implies no significant effect for bopindolol, failing to report a specific pharmacogenomic effect for the target drug. |
| popPK | Grevel_1986 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Platzer_1984 | relevant | 9 | 2 | The study reports a compartmental PK model and half-life for bopindolol, but specific numeric values for clearance or volume are not explicitly listed in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:24 UTC</sub>

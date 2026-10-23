<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01L&quot;,&quot;href&quot;:&quot;atc/S01L.md&quot;},{&quot;label&quot;:&quot;abicipar pegol&quot;}]"></div>

# abicipar pegol

- **generic name:** abicipar pegol
- **ATC codes:** `S01LA07`
- **DrugBank:** [DB12258](https://go.drugbank.com/drugs/DB12258) · **PubChem:** none
- **groups:** investigational

## About

Abicipar pegol is an investigational eye medicine developed for macular degeneration. Its marketing application in the European Union was withdrawn, so it is not authorised for use there.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| V | V | — | L | 40495 Human | patients with diabetic macular edema and neovascular age-related macular degeneration | human + animal | <span class="pk-badge pk-badge--orange">Needs review</span> | [Luu_2020_estimate_human](drugs/drug_abicipar_pegol/AbiciparPegol_Luu2020_estimate_human.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q306, Q357, Q61, Q334 — no SI value…</sub> | [Luu_2020_estimate_human](drugs/drug_abicipar_pegol/AbiciparPegol_Luu2020_estimate_human.md) | — | 1-compartment (no model) | 4 | Luu KT et al., A Mechanistic and Translational Pharmac…, The Journal of pharmacology… (2020) | [10.1124/jpet.119.263178](https://doi.org/10.1124/jpet.119.263178) |
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [↳ estimate_rabbit](drugs/drug_abicipar_pegol/AbiciparPegol_Luu2020_estimate_rabbit.md) | — | 1-compartment (no model) | 3 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Luu_2020_VEGF](drugs/drug_abicipar_pegol/pd_Luu_2020_VEGF.md) | VEGF ← abicipar · target-mediated drug disposition | — | Luu KT et al., A Mechanistic and Translational Pharmac…, The Journal of pharmacology… (2020) | [10.1124/jpet.119.263178](https://doi.org/10.1124/jpet.119.263178) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:16 | 1:58 | 1/1/0 | 0/1/0 | 0/0/0 | 82,654/3,265 | einfracz / qwen3.8-27b | 1 | 1/0 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | unknown_2020 | irrelevant | 0 | 0 | no_text gate: only 153 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Babicipar_pegol%5D&body=Drug%3A%20abicipar_pegol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_abicipar_pegol/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 21:14 UTC</sub>

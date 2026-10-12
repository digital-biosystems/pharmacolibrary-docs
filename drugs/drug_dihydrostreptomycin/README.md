<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01A&quot;,&quot;href&quot;:&quot;atc/S01A.md&quot;},{&quot;label&quot;:&quot;dihydrostreptomycin&quot;}]"></div>

# dihydrostreptomycin

- **generic name:** dihydrostreptomycin
- **ATC codes:** `S01AA15`
- **DrugBank:** [DB11512](https://go.drugbank.com/drugs/DB11512) · **PubChem:** not captured
- **molar mass:** 583.596 g/mol (C21H41N7O12) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Dihydrostreptomycin is an antibiotic related to streptomycin that was used to treat bacterial infections, including in eye preparations. It has been withdrawn from human use, largely because of toxicity to hearing, but remains approved for veterinary purposes.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3707637](https://www.wikidata.org/wiki/Q3707637) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:27 | 0:14 | 0/0/0 | 1/0/0 | 0/0/0 | 15,792/679 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Peterson_2018_FM_1_43_uptake](drugs/drug_dihydrostreptomycin/pd_Peterson_2018_FM_1_43_uptake.md) | percent fluorescence reduction ← dihydrostreptomycin · inhibition effect | — | Peterson HP et al., Teaching Dose-response Relationships Th…, Journal of undergraduate ne… (2018) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kimitsuki_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dihydrostreptomycin's effect on cochlear hair cell channels and does not report pharmacokinetic disposition parameters. |
| popPK | Kimitsuki_1994 | irrelevant | 0 | 0 | The study investigates the mechanism of ototoxicity (channel blocking) in chick hair cells in vitro and does not report any pharmacokinetic disposition parameters (clearance, volume, half-life). |
| popPK | Peterson_2018 | irrelevant | 0 | 0 | This is an in vitro/educational study on mechanotransduction channel block in zebrafish, not a pharmacokinetic study. |
| popPK | Ricci_2002 | irrelevant | 0 | 0 | Dihydrostreptomycin is used solely as an in-vitro channel blocker (pharmacological tool) in turtle auditory hair cells, with no pharmacokinetic disposition parameters reported. |
| popPK | Soback_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mecillinam, and dihydrostreptomycin is only included for MIC comparisons. |
| popPK | Ziv_1985 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of apramycin, using dihydrostreptomycin only as an in-vitro comparator for MIC testing. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

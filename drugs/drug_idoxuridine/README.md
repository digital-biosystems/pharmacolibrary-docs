<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;idoxuridine&quot;}]"></div>

# idoxuridine

- **generic name:** idoxuridine
- **ATC codes:** `D06BB01`, `J05AB02`, `S01AD01`
- **DrugBank:** [DB00249](https://go.drugbank.com/drugs/DB00249) · **PubChem:** [CID 5905](https://pubchem.ncbi.nlm.nih.gov/compound/5905)
- **molar mass:** 354.0985 g/mol (C9H11IN2O5) — DrugBank
- **groups:** approved, withdrawn

## About

Idoxuridine is an antiviral nucleoside analogue that was used to treat herpes simplex virus keratitis, an eye infection. It has been withdrawn from use, having been superseded by newer antiviral eye treatments.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409765](https://www.wikidata.org/wiki/Q409765) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:15 | 0:15 | 0/0/0 | 0/1/0 | 0/0/0 | 11,807/538 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Prichard_2006_antiviral_activity](drugs/drug_idoxuridine/pd_Prichard_2006_antiviral_activity.md) | antiviral activity ← idoxuridine · inhibition effect | — | Prichard MN et al., Distinct thymidine kinases encoded by c…, Antiviral research (2006) | [10.1016/j.antiviral.2006.01.013](https://doi.org/10.1016/j.antiviral.2006.01.013) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=idoxuridine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DNA (other), TK1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carangio_2002 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro antiviral activity of bicyclic nucleoside analogues against VZV and does not involve the pharmacokinetics of idoxuridine. |
| popPK | Hosoya_1998 | irrelevant | 0 | 0 | The study investigates nucleoside transport mechanisms in rabbit conjunctiva using uridine, not the systemic pharmacokinetics of idoxuridine. |
| popPK | Kinsella_2000 | irrelevant | 0 | 0 | The study reports pharmacokinetics for the prodrug IPdR (5-iodo-2-deoxypyrimidinone-2'-deoxyribose), not for idoxuridine (IUdR) itself, although IUdR is mentioned as the active metabolite. |
| popPK | Prichard_2006 | irrelevant | 0 | 0 | The paper is a mechanistic/virology study investigating thymidine kinase activity in viruses, not a pharmacokinetic study, and reports no quantitative PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

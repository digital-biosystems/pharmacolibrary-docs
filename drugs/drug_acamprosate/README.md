<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;acamprosate&quot;}]"></div>

# acamprosate

- **generic name:** acamprosate
- **ATC codes:** `N07BB03`
- **DrugBank:** [DB00659](https://go.drugbank.com/drugs/DB00659) · **PubChem:** [CID 71158](https://pubchem.ncbi.nlm.nih.gov/compound/71158)
- **molar mass:** 181.21 g/mol (C5H11NO4S) — DrugBank
- **groups:** approved, investigational

## About

Acamprosate is a drug used to help maintain abstinence in people with alcohol dependence. It is an approved medicine and is used in the treatment of alcohol dependence.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q337668](https://www.wikidata.org/wiki/Q337668) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:39 | 0:09 | 0/0/0 | 0/1/0 | 0/0/0 | 12,150/1,264 | ollama / glm-5.3-flash | 1 | 1/0 | 0/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Naassila_1998_14C_spermidine_binding](drugs/drug_acamprosate/pd_Naassila_1998_14C_spermidine_binding.md) | Displacement of [14C]spermidine binding by acamprosate ← acamprosate · direct sigmoid Emax (Hill) effect | — | Naassila M et al., Mechanism of action of acamprosate. Par…, Alcoholism, clinical and ex… (1998) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Naassila_1998_3H_acamprosate_binding](drugs/drug_acamprosate/pd_Naassila_1998_3H_acamprosate_binding.md) | [3H]acamprosate specific binding to rat brain membranes ← acamprosate · model not identified | — | Naassila M et al., Mechanism of action of acamprosate. Par…, Alcoholism, clinical and ex… (1998) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Naassila_1998_3H_dizocilpine_binding](drugs/drug_acamprosate/pd_Naassila_1998_3H_dizocilpine_binding.md) | [3H]dizocilpine binding modulation by acamprosate ← acamprosate · model not identified | — | Naassila M et al., Mechanism of action of acamprosate. Par…, Alcoholism, clinical and ex… (1998) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=acamprosate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GABBR1 (inhibitor), GRIN1 (target), GRM5 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2012 | irrelevant | 0 | 0 | Statistical trajectory analysis of drinking outcomes in acamprosate/naltrexone trials; no pharmacokinetic parameters reported. |
| popPK | Naassila_1998 | irrelevant | 0 | 0 | In-vitro receptor binding study in rat brain membranes; no pharmacokinetic disposition parameters (CL, V, t½) for acamprosate are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

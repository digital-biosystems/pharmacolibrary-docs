<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;zotepine&quot;}]"></div>

# zotepine

- **generic name:** zotepine
- **ATC codes:** `N05AX11`
- **DrugBank:** [DB09225](https://go.drugbank.com/drugs/DB09225) · **PubChem:** [CID 5736](https://pubchem.ncbi.nlm.nih.gov/compound/5736)
- **molar mass:** 331.86 g/mol (C18H18ClNOS) — DrugBank
- **groups:** approved, withdrawn

## About

Zotepine is an antipsychotic that was used to treat schizophrenia. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q226905](https://www.wikidata.org/wiki/Q226905) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:33 | 0:22 | 0/0/0 | 1/0/0 | 0/0/0 | 19,857/649 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Zhuang_2025_Kv](drugs/drug_zotepine/pd_Zhuang_2025_Kv.md) | Kv current inhibition ← zotepine · direct sigmoid Emax (Hill) effect | — | Zhuang W et al., Blockade of Voltage-Gated K, Journal of applied toxicolo… (2025) | [10.1002/jat.4740](https://doi.org/10.1002/jat.4740) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=zotepine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP1A2` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | brain | `SLC6A4` target | DrugBank actor |
| — | platelet | `SLC6A4` target | DrugBank actor |

<sub>Actors without a tissue in the table: DRD1 (target), DRD2 (target), HTR2A (inhibitor), HTR2A (target), HTR6 (target), HTR7 (target), SLC6A2 (target).</sub>

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
| popPK | Davis_2003 | irrelevant | 0 | 0 | This is an efficacy meta-analysis of antipsychotics with no pharmacokinetic parameters for zotepine. |
| popPK | Furukawa_2026 | irrelevant | 0 | 0 | This is a dose-response efficacy meta-analysis of antipsychotics; zotepine had no usable data and no PK parameters (CL, V, ka, half-life) are reported anywhere. |
| popPK | Leucht_2015 | irrelevant | 0 | 0 | Dose-equivalence study reporting only equivalent doses, no PK disposition parameters for zotepine. |
| popPK | Siafis_2023 | irrelevant | 0 | 0 | This is a dose-response meta-analysis of EPS risk, not a PK study; zotepine is only one of many antipsychotics and no PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | A dose-response meta-analysis of akathisia risk, not a PK study; no zotepine disposition parameters (zotepine data even absent). |
| popPK | Zhuang_2025 | irrelevant | 0 | 0 | In-vitro electrophysiology study of Kv channel blockade by zotepine in rabbit coronary artery cells; no PK disposition parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

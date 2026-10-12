<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09I&quot;,&quot;href&quot;:&quot;atc/V09I.md&quot;},{&quot;label&quot;:&quot;fluciclovine (18F)&quot;}]"></div>

# fluciclovine (18F)

- **generic name:** fluciclovine (18F)
- **ATC codes:** `V09IX12`
- **DrugBank:** [DB13146](https://go.drugbank.com/drugs/DB13146) · **PubChem:** [CID 450601](https://pubchem.ncbi.nlm.nih.gov/compound/450601)
- **molar mass:** 132.125 g/mol (C5H8FNO2) — DrugBank
- **groups:** approved, investigational

## About

Fluciclovine (18F) is a radioactive imaging agent used to detect tumours, mainly in prostate cancer imaging. It is authorised in the European Union and used in radionuclide imaging.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25313613](https://www.wikidata.org/wiki/Q25313613) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:49 | 0:19 | 0/0/0 | 0/0/0 | 0/0/0 | 11,285/194 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sörensen_2013.pdf` | Sörensen J et al., Regional distribution and kinetics of […, European journal of nuclear… (2013) | popPK | 8 | [10.1007/s00259-012-2291-9](https://doi.org/10.1007/s00259-012-2291-9) | [23208700](https://pubmed.ncbi.nlm.nih.gov/23208700) | The study reports compartmental modeling parameters (K1, VT) for fluciclovine_18f in humans, but the specific numeric values are not present in the provided text. |

<sub>queue written 2026-10-07T15:49:54.487984+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Michaud_2020 | relevant | 4 | 5 | The study reports quantitative tissue kinetic parameters (k1, k2, Vb, distribution volume) for 18F-Fluciclovine in human brain tumors and normal brain, but these are local tissue transport rates rather than systemic population PK parameters (CL, Vss). |
| popPK | Sörensen_2013 | relevant | 8 | 2 | The study reports compartmental modeling parameters (K1, VT) for fluciclovine_18f in humans, but the specific numeric values are not present in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

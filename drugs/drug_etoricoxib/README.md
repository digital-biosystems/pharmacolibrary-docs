<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;etoricoxib&quot;}]"></div>

# etoricoxib

- **generic name:** etoricoxib
- **ATC codes:** `M01AH05`
- **DrugBank:** [DB01628](https://go.drugbank.com/drugs/DB01628) · **PubChem:** [CID 123619](https://pubchem.ncbi.nlm.nih.gov/compound/123619)
- **molar mass:** 358.842 g/mol (C18H15ClN2O2S) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Etoricoxib is a selective COX-2 inhibitor, a non-steroidal anti-inflammatory drug used for pain and inflammatory conditions such as arthritis. It is approved and marketed in many countries, though it has been withdrawn in some markets and is not authorised in the United States.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q631202](https://www.wikidata.org/wiki/Q631202) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:48 | 0:06 | 0/0/0 | 0/0/0 | 0/0/0 | 16,288/535 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=etoricoxib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` inhibitor, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hakim_2026.pdf` | Hakim Masood S et al., Pharmacokinetic evaluation of etoricoxi…, Pakistan journal of pharmac… (2026) | popPK | 8 | [10.36721/PJPS.2026.39.5.REG.15284.1](https://doi.org/10.36721/PJPS.2026.39.5.REG.15284.1) | [41879397](https://pubmed.ncbi.nlm.nih.gov/41879397) | The study reports PK data for etoricoxib in humans but provides only AUC and Cmax (bioequivalence metrics) in the abstract, lacking specific clearance, volume, or half-life values required for PK parameter extraction. |
| `Balap_2016.pdf` | Balap A et al., Pharmacokinetic and pharmacodynamic her…, Journal of ethnopharmacology (2016) | popPK | 7 | [10.1016/j.jep.2015.11.011](https://doi.org/10.1016/j.jep.2015.11.011) | [26593212](https://pubmed.ncbi.nlm.nih.gov/26593212) | The study is a PK interaction study in rats reporting etoricoxib parameters (CL, Vd, t1/2, etc.), but the specific numeric values are described in the abstract without being present in the provided evidence text. |

<sub>queue written 2026-10-07T00:48:28.743924+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Balap_2016 | relevant | 7 | 0 | The study is a PK interaction study in rats reporting etoricoxib parameters (CL, Vd, t1/2, etc.), but the specific numeric values are described in the abstract without being present in the provided evidence text. |
| popPK | Hakim_2026 | relevant | 8 | 2 | The study reports PK data for etoricoxib in humans but provides only AUC and Cmax (bioequivalence metrics) in the abstract, lacking specific clearance, volume, or half-life values required for PK parameter extraction. |
| popPK | Ouellet_2001 | irrelevant | 0 | 0 | The study investigates in vitro enzyme kinetics and platelet inhibition (pharmacodynamics), not pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

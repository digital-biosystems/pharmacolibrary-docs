<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;metamfetamine&quot;}]"></div>

# metamfetamine

- **generic name:** metamfetamine
- **ATC codes:** `N06BA03`
- **DrugBank:** [DB01577](https://go.drugbank.com/drugs/DB01577) · **PubChem:** [CID 10836](https://pubchem.ncbi.nlm.nih.gov/compound/10836)
- **molar mass:** 149.2328 g/mol (C10H15N) — DrugBank
- **groups:** approved, illicit, investigational, withdrawn

## About

Metamfetamine is a central nervous system stimulant used for attention deficit hyperactivity disorder, narcolepsy, and obesity. It is an approved psychostimulant but is also used illicitly, so its medical use is limited and tightly controlled.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q191924](https://www.wikidata.org/wiki/Q191924) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:52 | 0:07 | 0/0/0 | 0/0/0 | 0/0/0 | 14,113/158 | ollama / glm-5.3-flash | 1 | 0/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=metamfetamine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | kidney | `SLC22A5` inhibitor | DrugBank actor |
| absorption | placenta | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A5` inhibitor | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate, `MAOA` inhibitor, `MAOB` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `MAOA` inhibitor | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` negative modulator | DrugBank actor |
| — | platelet | `SLC6A4` negative modulator | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1B (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), DRD2 (target), SLC18A1 (inhibitor), SLC18A2 (inhibitor), SLC6A2 (negative modulator), SLC6A3 (negative modulator), TAAR1 (target).</sub>

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

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cook_1992.pdf` | Cook CE et al., Pharmacokinetics of oral methamphetamin…, Drug metabolism and disposi… (1992) | popPK | 7 | not captured | [1362938](https://pubmed.ncbi.nlm.nih.gov/1362938) | Human PK study with one-compartment model and half-life reported, but full parameter values (CL, V, ka) likely in tables/figures not provided. |

<sub>queue written 2026-10-07T00:52:46.889464+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cook_1992 | relevant | 7 | 4 | Human PK study with one-compartment model and half-life reported, but full parameter values (CL, V, ka) likely in tables/figures not provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

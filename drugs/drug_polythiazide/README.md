<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;polythiazide&quot;}]"></div>

# polythiazide

- **generic name:** polythiazide
- **ATC codes:** `C03AA05`, `C03AB05`
- **DrugBank:** [DB01324](https://go.drugbank.com/drugs/DB01324) · **PubChem:** [CID 4870](https://pubchem.ncbi.nlm.nih.gov/compound/4870)
- **molar mass:** 439.882 g/mol (C11H13ClF3N3O4S3) — DrugBank
- **groups:** approved

## About

Polythiazide is a thiazide diuretic used to treat high blood pressure, congestive heart failure, nephrotic syndrome, and anasarka (fluid retention). It is an approved drug, though it appears to be little used today and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7227099](https://www.wikidata.org/wiki/Q7227099) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:02 | 0:51 | 0/0/0 | 0/0/0 | 0/0/0 | 8,389/352 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 0/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Monroy_1999.pdf` | Monroy A et al., [Lack of effect of cicletanine and its…, Archives des maladies du co… (1999) | pd | 4 | not captured | [10486654](https://www.ncbi.nlm.nih.gov/pubmed/10486654) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T17:02:16.007547+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any pharmacokinetic parameters for polythiazide. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for polythiazide. |
| popPK | Eriksson_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of thiazide effects on sodium transport in amphibian bladders, not a pharmacokinetic study reporting disposition parameters for polythiazide. |
| PD | Eriksson_1987 | not_relevant | 2 | 1 | The paper reports only qualitative observations that polythiazide reduced short-circuit current at high concentrations (&gt;0.1 mM) and that dose-response curves were difficult to obtain, providing no numeric PD parameters or extractable concentration-effect curve. |
| popPK | Gordon_1981 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for hypertension treatment and does not report any pharmacokinetic parameters for polythiazide. |
| PD | Gordon_1981 | not_relevant | 1 | 0 | The paper reports only aggregate clinical efficacy (average BP reduction) and dosage titration outcomes, without providing any concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Maher_1975 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of prazosin where polythiazide is used only as a co-administered agent, with no pharmacokinetic parameters reported. |
| PD | Maher_1975 | not_relevant | 1 | 0 | The text provides only qualitative clinical observations of blood pressure reduction at fixed doses without any concentration-effect data, dose-response curves, or numeric PD parameters. |
| popPK | Monroy_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay using polythiazide only as a reference inhibitor, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Moskalyk_1975 | irrelevant | 0 | 0 | The paper describes an analytical method for quantifying polythiazide in tablets, not a pharmacokinetic study. |
| PD | Moskalyk_1975 | not_relevant | 0 | 0 | The paper describes an HPLC analytical method for quantifying polythiazide in tablets and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Oh_1975 | irrelevant | 0 | 0 | no_text gate: only 392 chars of text extracted (&lt; 400) |
| PD | Oh_1975 | not_relevant | 1 | 0 | The text provides only a qualitative observation that increasing prazosin dosage above 15 mg/day did not improve blood pressure control, without reporting any numeric PD parameters, concentration-effect data, or formal dose-response modeling for polythiazide. |
| popPK | Paul_1976 | irrelevant | 0 | 0 | The study focuses on the antihypertensive efficacy of prazosin, with polythiazide mentioned only as a co-administered agent without any pharmacokinetic data. |
| PD | Paul_1976 | not_relevant | 0 | 0 | The text describes a clinical trial of prazosin with only a qualitative mention of polythiazide as an add-on therapy, providing no concentration-effect data, dose-response curves, or numeric PD parameters for polythiazide. |
| popPK | Stribrná_1975 | irrelevant | 0 | 0 | The study investigates the renal excretion fraction of urea (a physiological/pharmacodynamic endpoint) rather than the pharmacokinetic disposition parameters (CL, V, t1/2) of polythiazide itself. |
| popPK | Weber_1982 | irrelevant | 0 | 0 | The study focuses on the clinical efficacy of trimazosin, with polythiazide used only as a co-administered agent for blood pressure control, and no pharmacokinetic parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

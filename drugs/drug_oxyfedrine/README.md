<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;oxyfedrine&quot;}]"></div>

# oxyfedrine

- **generic name:** oxyfedrine
- **ATC codes:** `C01DX03`
- **DrugBank:** [DB13398](https://go.drugbank.com/drugs/DB13398) · **PubChem:** not captured
- **molar mass:** 313.397 g/mol (C19H23NO3) — DrugBank
- **groups:** experimental

## About

Oxyfedrine is a cardiotonic and vasodilator drug, a beta-adrenergic agonist that was used in cardiac diseases such as coronary insufficiency. It is currently considered experimental and does not appear to be an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7115929](https://www.wikidata.org/wiki/Q7115929) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 11:11 | 1:15 | 0/0/0 | 0/0/0 | 0/0/0 | 44,176/1,797 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wetzelsberger_1995.pdf` | Wetzelsberger N et al., Relative bioavailability of DL-oxyfedri…, Methods and findings in exp… (1995) | popPK | 8 | not captured | [8531509](https://pubmed.ncbi.nlm.nih.gov/8531509) | The study reports relative bioavailability percentages (AUC and Cmax ratios) for oxyfedrine and its metabolite, but lacks absolute quantitative disposition parameters like clearance (CL), volume (V), or half-life (t1/2). |
| `Brandt_1975.pdf` | Brandt W, [Stability of oxyfedrine in pharmacolog…, Arzneimittel-Forschung (1975) | pd | 4 | not captured | [1174320](https://www.ncbi.nlm.nih.gov/pubmed/1174320) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-10-06T11:10:36.006915+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bonelli_1977 | irrelevant | 0 | 0 | The study focuses on the bioavailability of beta-acetyldigoxine, with oxyfedrine serving only as a co-administered component in a combination product, not as the subject of PK parameter estimation. |
| popPK | Brandt_1975 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | Brandt_1975 | not_relevant | 0 | 0 | The paper focuses on the chemical stability of oxyfedrine in vitro, not on pharmacodynamic or exposure-response relationships. |
| popPK | Dings_2026 | irrelevant | 0 | 0 | The study models the pharmacodynamics of cafedrine/theodrenaline and ephedrine, not oxyfedrine, and explicitly states that no pharmacokinetic samples were obtained. |
| popPK | Flasch_1975 | irrelevant | 0 | 0 | The study focuses on the bioavailability of beta-acetyldigoxin and digoxin, with oxyfedrine appearing only as an excipient or co-formulated component in a tablet, not as the subject drug for PK analysis. |
| popPK | Kirsten_1998 | irrelevant | 0 | 0 | The paper is a review of vasodilators that mentions oxyfedrine only mechanistically without reporting any quantitative pharmacokinetic parameters. |
| popPK | Parratt_1974 | irrelevant | 0 | 0 | The study reports haemodynamic and pharmacodynamic effects (blood pressure, cardiac output, receptor blockade) in cats, but contains no pharmacokinetic parameters (CL, V, t1/2) for oxyfedrine. |
| popPK | Polster_1973 | irrelevant | 0 | 0 | The study is a pharmacological/toxicological investigation of cardiac function in animals and does not report any pharmacokinetic parameters for oxyfedrine. |
| PD | Polster_1973 | not_relevant | 2 | 1 | The paper reports qualitative changes in cardiac function (heart weight, intracellular potentials) after chronic dosing but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| popPK | Sternitzke_1984 | irrelevant | 0 | 0 | The study investigates the mechanism of action (hemodynamics and receptor activity) of oxyfedrine and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Wetzelsberger_1995 | relevant | 8 | 2 | The study reports relative bioavailability percentages (AUC and Cmax ratios) for oxyfedrine and its metabolite, but lacks absolute quantitative disposition parameters like clearance (CL), volume (V), or half-life (t1/2). |
| PD | Wetzelsberger_1995 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (AUC, Cmax) and relative bioavailability, but contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters for oxyfedrine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

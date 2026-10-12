<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;sodium monofluorophosphate&quot;}]"></div>

# sodium monofluorophosphate

- **generic name:** sodium monofluorophosphate
- **ATC codes:** `A01AA02`, `A12CD02`
- **DrugBank:** [DB09484](https://go.drugbank.com/drugs/DB09484) · **PubChem:** not captured
- **molar mass:** 143.949 g/mol (FNa2O3P) — DrugBank
- **groups:** approved, investigational

## About

Sodium monofluorophosphate is a fluoride compound used to prevent tooth decay and as a fluoride supplement. It is an approved drug, widely used in stomatological (dental) products such as toothpastes.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3498849](https://www.wikidata.org/wiki/Q3498849) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 03:35 | 0:37 | 0/1/0 | 0/0/0 | 0/0/0 | 23,472/721 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Setnikar_1990_reference](drugs/drug_sodium_monofluorophosphate/SodiumMonofluorophosphate_Setnikar1990_reference.md) | — | 1-compartment (no model) | 3 | Setnikar I et al., Relative bioavailability of fluoride fr…, Arzneimittel-Forschung (1990) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Setnikar_1990.pdf` | Setnikar I et al., Relative bioavailability of fluoride fr…, Arzneimittel-Forschung (1990) | popPK | 9 | not captured | [2346544](https://pubmed.ncbi.nlm.nih.gov/2346544) | The study reports quantitative pharmacokinetic parameters (Cmax, tmax, half-lives, AUC-based bioavailability) for fluoride from sodium monofluorophosphate in humans, with values explicitly listed in the text. |
| `Vattikonda_1994.pdf` | Vattikonda CS et al., A biopharmaceutic approach in designing…, Biopharmaceutics & drug dis… (1994) | popPK | 9 | [10.1002/bdd.2510150806](https://doi.org/10.1002/bdd.2510150806) | [7888599](https://pubmed.ncbi.nlm.nih.gov/7888599) | The study reports a two-compartment model for fluoride (the active moiety of sodium monofluorophosphate) in dogs, but specific numeric parameter values (CL, V, etc.) are not present in the provided text. |

<sub>queue written 2026-10-04T03:34:37.811438+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | He_2024 | irrelevant | 0 | 0 | The study is a clinical trial analyzing gingival bleeding outcomes (efficacy) where sodium monofluorophosphate is used only as a negative control, not a pharmacokinetic study. |
| PD | Kamotsay_2002 | not_relevant | 2 | 1 | The study reports qualitative growth inhibition and lack of bactericidal effect at various concentrations, but does not provide numeric PD parameters (e.g., IC50, Emax) or a fitted dose-response curve. |
| PD | Murray_1996 | not_relevant | 1 | 0 | The text is a consensus statement/review summarizing clinical outcomes and toxicity profiles without providing specific numeric pharmacodynamic parameters or exposure-response curves. |
| PD | Sebert_1995 | not_relevant | 2 | 1 | The paper reports a clinical efficacy study comparing two fixed doses (treatment vs placebo) but does not provide concentration-effect data, PK parameters, or a dose-response curve with numeric PD parameters like Emax or EC50. |
| PD | Stösser_1995 | not_relevant | 2 | 1 | The study reports qualitative dose-response trends (caries scores at 5, 10, 15 ppm) but explicitly states there was no remarkable influence of dosage, and no numeric PD parameters (Emax, EC50, etc.) are provided or derivable. |
| popPK | Vattikonda_1994 | relevant | 9 | 2 | The study reports a two-compartment model for fluoride (the active moiety of sodium monofluorophosphate) in dogs, but specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| PD | Vattikonda_1994 | not_relevant | 0 | 0 | The paper focuses on PK and formulation design (bioavailability, release profiles) and does not report any pharmacodynamic or exposure-response data for sodium monofluorophosphate. |
| PD | Vattikonda_1994_2 | not_relevant | 0 | 0 | The paper focuses on PK (bioavailability, absorption sites) and formulation design, reporting no concentration-effect or dose-response data or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 03:34 UTC</sub>

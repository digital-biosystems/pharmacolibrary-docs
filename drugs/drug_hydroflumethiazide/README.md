<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;hydroflumethiazide&quot;}]"></div>

# hydroflumethiazide

- **generic name:** hydroflumethiazide
- **ATC codes:** `C03AA02`, `C03AB02`
- **DrugBank:** [DB00774](https://go.drugbank.com/drugs/DB00774) · **PubChem:** [CID 3647](https://pubchem.ncbi.nlm.nih.gov/compound/3647)
- **molar mass:** 331.292 g/mol (C8H8F3N3O4S2) — DrugBank
- **groups:** approved, withdrawn

## About

Hydroflumethiazide is a thiazide diuretic that was used to treat high blood pressure, congestive heart failure, nephrotic syndrome and other fluid-retention conditions. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3791957](https://www.wikidata.org/wiki/Q3791957) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| hydroflumethiazide | parent | 331.292 | C8H8F3N3O4S2 | DrugBank | [3647](https://pubchem.ncbi.nlm.nih.gov/compound/3647) | Brørs_1979, Yakatan_1977 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:00 | 3:24 | 0/2/0 | 0/0/0 | 0/0/0 | 37,062/8,614 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed 1/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Brørs_1979_reference](drugs/drug_hydroflumethiazide/Hydroflumethiazide_Brrs1979_reference.md) | — | 1-compartment (no model) | 1 | Brørs O et al., Distribution of elimination of hydroflu…, European journal of clinica… (1979) | [10.1007/BF00563119](https://doi.org/10.1007/BF00563119) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667), gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Yakatan_1977_reference](drugs/drug_hydroflumethiazide/Hydroflumethiazide_Yakatan1977_reference.md) | — | 1-compartment (no model) | 3 | Yakatan GJ et al., Pharmacokinetics of orally administered…, Journal of clinical pharmac… (1977) | [10.1002/j.1552-4604.1977.tb04584.x](https://doi.org/10.1002/j.1552-4604.1977.tb04584.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=hydroflumethiazide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ATP1A1 (inducer), CA1 (inhibitor), CA12 (inhibitor), CA2 (inhibitor), CA4 (inhibitor), CA7 (inhibitor), CA9 (inhibitor), KCNMA1 (inducer), SLC12A1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yakatan_1977.pdf` | Yakatan GJ et al., Pharmacokinetics of orally administered…, Journal of clinical pharmac… (1977) | popPK | 10 | [10.1002/j.1552-4604.1977.tb04584.x](https://doi.org/10.1002/j.1552-4604.1977.tb04584.x) | [833338](https://pubmed.ncbi.nlm.nih.gov/833338) | The paper reports quantitative pharmacokinetic parameters (ka, kel, t1/2, AUC, renal clearance) for hydroflumethiazide in humans with all numeric values present in the text. |
| `Brørs_1979.pdf` | Brørs O et al., Distribution of elimination of hydroflu…, European journal of clinica… (1979) | popPK | 9 | [10.1007/BF00563119](https://doi.org/10.1007/BF00563119) | [499309](https://pubmed.ncbi.nlm.nih.gov/499309) | The study reports quantitative pharmacokinetic parameters (half-lives, clearance trends) for hydroflumethiazide in humans, though specific numeric values for clearance and volume are not explicitly listed in the provided text. |

<sub>queue written 2026-10-06T16:57:20.911814+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Corrigan_1976 | not_relevant | 0 | 0 | The paper focuses on dissolution and bioavailability (PK) of hydrochlorothiazide/hydroflumethiazide formulations, with no pharmacodynamic or exposure-response analysis. |
| PD | Elkowitz_1979 | not_relevant | 1 | 0 | The paper is a retrospective clinical review reporting mean blood pressure reductions for a fixed-dose combination, but it does not provide concentration-effect data, dose-response curves, or specific PD parameters (Emax, EC50) for hydroflumethiazide. |
| PD | Finnerty_1979 | not_relevant | 1 | 0 | The paper reports clinical efficacy outcomes (percentage of patients achieving BP targets) for fixed-dose combination regimens but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| popPK | Kristensen_1975 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methotrexate, with hydroflumethiazide serving only as a co-administered diuretic without reported PK parameters. |
| popPK | Liu_1997 | irrelevant | 2 | 0 | The paper is a methodological study using hydroflumethiazide data as a test case, but no specific numeric PK parameter values are provided in the evidence. |
| PD | Maharaj_1993 | not_relevant | 0 | 0 | The paper is a clinical efficacy trial comparing two drug combinations, reporting only mean blood pressure changes and response rates without any pharmacokinetic data, concentration-effect analysis, or PD modeling. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 16:57 UTC</sub>

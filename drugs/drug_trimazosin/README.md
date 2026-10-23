<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02C&quot;,&quot;href&quot;:&quot;atc/C02C.md&quot;},{&quot;label&quot;:&quot;trimazosin&quot;}]"></div>

# trimazosin

- **generic name:** trimazosin
- **ATC codes:** `C02CA03`
- **DrugBank:** [DB09206](https://go.drugbank.com/drugs/DB09206) · **PubChem:** [CID 37264](https://pubchem.ncbi.nlm.nih.gov/compound/37264)
- **molar mass:** 435.481 g/mol (C20H29N5O6) — DrugBank
- **groups:** experimental

## About

Trimazosin is an alpha-1 adrenergic blocker developed as an antihypertensive vasodilator for treating high blood pressure. It appears to be only experimental and is not an established, widely marketed medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1324057](https://www.wikidata.org/wiki/Q1324057) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trimazosin | parent | 435.481 | C20H29N5O6 | DrugBank | [37264](https://pubchem.ncbi.nlm.nih.gov/compound/37264) | Meredith_1985, Reid_1983 |
| CP 23445 (1-hydroxy trimazosin) | metabolite | 451.48 | C20H29N5O7 | PubChem | [139356](https://pubchem.ncbi.nlm.nih.gov/compound/139356) | Meredith_1985, Reid_1983 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 19.62 | L/h | 327 ml/min | normotensive volunteers | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Meredith_1985_reference](drugs/drug_trimazosin/Trimazosin_Meredith1985_reference.md) |
| t½ | t1/2z | 2 | h | 2.0 h | normotensive volunteers | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Meredith_1985_reference](drugs/drug_trimazosin/Trimazosin_Meredith1985_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Meredith_1985_reference](drugs/drug_trimazosin/Trimazosin_Meredith1985_reference.md) | — | parent + metabolite (no model) | 2 | Meredith PA et al., Application of pharmacokinetic-pharmaco…, Journal of cardiovascular p… (1985) | [10.1097/00005344-198505000-00019](https://doi.org/10.1097/00005344-198505000-00019) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Reid_1983_reference](drugs/drug_trimazosin/Trimazosin_Reid1983_reference.md) | — | parent + metabolite (no model) | 3 | Reid JL et al., Pharmacokinetics and pharmacodynamics o…, American heart journal (1983) | [10.1016/0002-8703(83)90179-5](https://doi.org/10.1016/0002-8703(83)90179-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Meredith_1985_hypotensive_effects](drugs/drug_trimazosin/pd_Meredith_1985_hypotensive_effects.md) | hypotensive effects ← trimazosin and 1-hydroxy trimazosin · delayed effect through an effect compartment | — | Meredith PA et al., Application of pharmacokinetic-pharmaco…, Journal of cardiovascular p… (1985) | [10.1097/00005344-198505000-00019](https://doi.org/10.1097/00005344-198505000-00019) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:12 | 3:36 | 0/1/1 | 0/1/0 | 0/0/0 | 34,112/11,621 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Reid_1983.pdf` | Reid JL et al., Pharmacokinetics and pharmacodynamics o…, American heart journal (1983) | popPK | 10 | [10.1016/0002-8703(83)90179-5](https://doi.org/10.1016/0002-8703(83)90179-5) | [6637788](https://pubmed.ncbi.nlm.nih.gov/6637788) | The study reports quantitative PK parameters (half-life, bioavailability) for trimazosin in humans, with specific values provided in the abstract. |
| `Meredith_1985.pdf` | Meredith PA et al., Application of pharmacokinetic-pharmaco…, Journal of cardiovascular p… (1985) | popPK | 9 | [10.1097/00005344-198505000-00019](https://doi.org/10.1097/00005344-198505000-00019) | [2410686](https://pubmed.ncbi.nlm.nih.gov/2410686) | The study reports quantitative pharmacokinetic parameters (clearance and half-life) for trimazosin in humans. |
| `Meredith_1983.pdf` | Meredith PA et al., Pharmacokinetic and pharmacodynamic mod…, Journal of pharmacokinetics… (1983) | pd | 5 | [10.1007/BF01058953](https://doi.org/10.1007/BF01058953) | [6668546](https://www.ncbi.nlm.nih.gov/pubmed/6668546) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-06T14:09:25.281463+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Meredith_1983 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| popPK | Veng-Pedersen_1988 | irrelevant | 2 | 0 | The paper is a methodological/theoretical study on the Response Mapping Operator (RMO) approach, using trimazosin only as a demonstration example without reporting specific quantitative PK parameter values in the provided evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 14:09 UTC</sub>

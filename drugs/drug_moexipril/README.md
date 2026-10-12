<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;moexipril&quot;}]"></div>

# moexipril

- **generic name:** moexipril
- **ATC codes:** `C09AA13`, `C09BA13`
- **DrugBank:** [DB00691](https://go.drugbank.com/drugs/DB00691) · **PubChem:** [CID 91270](https://pubchem.ncbi.nlm.nih.gov/compound/91270)
- **molar mass:** 498.5681 g/mol (C27H34N2O7) — DrugBank
- **groups:** approved, investigational

## About

Moexipril is an ACE inhibitor used to treat high blood pressure and congestive heart failure. It is an approved medicine, available alone or combined with a diuretic, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2291605](https://www.wikidata.org/wiki/Q2291605) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:54 | 0:50 | 0/0/0 | 1/0/0 | 0/0/0 | 22,527/1,229 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 2/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Cawello_2002_ACE_inhibition](drugs/drug_moexipril/pd_Cawello_2002_ACE_inhibition.md) | ACE inhibition ← moexiprilat · direct sigmoid Emax (Hill) effect | — | Cawello W et al., Moexipril shows a long duration of acti…, International journal of cl… (2002) | [10.5414/cpp40009](https://doi.org/10.5414/cpp40009) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=moexipril).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC15A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cawello_2002.pdf` | Cawello W et al., Moexipril shows a long duration of acti…, International journal of cl… (2002) | popPK | 9 | [10.5414/cpp40009](https://doi.org/10.5414/cpp40009) | [11837383](https://pubmed.ncbi.nlm.nih.gov/11837383) | The study reports quantitative PK parameters (t1/2, Cmax, AUC ratios, tmax) for moexiprilat (active metabolite) in humans, though specific clearance or volume values are not explicitly listed in the text. |

<sub>queue written 2026-10-07T06:54:28.109383+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report quantitative pharmacokinetic parameters for moexipril. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | Narrative review of cardiovascular pharmacotherapy with no moexipril-specific PD or exposure-response data or parameters. |
| popPK | Drayer_1995 | irrelevant | 0 | 0 | The paper is a clinical efficacy study evaluating antihypertensive effects and does not report pharmacokinetic parameters. |
| popPK | Edling_1995 | irrelevant | 1 | 0 | This is a pharmacodynamic characterization of moexipril with no PK disposition parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | The paper is a review of drugs causing acute kidney injury and does not report pharmacokinetic parameters for moexipril. |
| PD | Fernández-Llaneza_2025 | not_relevant | 0 | 0 | This is a drug-safety knowledge aggregation study (AKI risk signals via RORs/ADE frequencies), with no concentration-effect or dose-response PD analysis or parameters for moexipril. |
| popPK | Ferry_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of quinapril and its metabolite, not moexipril. |
| popPK | Fiscon_2021 | irrelevant | 0 | 0 | The paper is an in-silico drug repurposing study for COVID-19 and does not contain any pharmacokinetic data for moexipril. |
| PD | Fiscon_2021 | not_relevant | 0 | 0 | Computational network-based drug repurposing study; no pharmacodynamic or exposure/dose-response data for moexipril or any drug. |
| popPK | Friehe_1997 | irrelevant | 1 | 0 | This is a pharmacodynamic/toxicology study with no PK disposition parameters (CL, V, ka, half-life, or PK model) reported for moexipril. |
| popPK | Song_2002 | irrelevant | 2 | 0 | This is a review article that discusses moexipril qualitatively but does not provide specific quantitative pharmacokinetic parameter values (CL, V, ka, etc.) in the text. |
| PD | Song_2002 | not_relevant | 2 | 1 | A narrative review of ACE inhibitors; only qualitative statements (e.g., flat dose-response curves for ACE inhibitors) with no numeric PD parameters for moexipril. |
| popPK | Van_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of warfarin (the subject drug) in the presence of moexipril (the co-administered agent), not the pharmacokinetics of moexipril itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09C&quot;,&quot;href&quot;:&quot;atc/V09C.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) succimer&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Technetium99mtcSuccimer_Storgaard2026v2_reference&quot;,&quot;label&quot;:&quot;Storgaard_2026_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# technetium (99mTc) succimer

- **generic name:** technetium (99mTc) succimer
- **ATC codes:** `V09CA02`
- **DrugBank:** [DB09436](https://go.drugbank.com/drugs/DB09436) · **PubChem:** not captured
- **groups:** approved

## About

Technetium (99mTc) succimer is a diagnostic radiopharmaceutical used for imaging of the kidneys. It is an approved diagnostic agent, classified under technetium compounds for the renal system.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| technetium-99m DMSA (technetium_99mtc_succimer) (technetium_99mtc_succimer) | metabolite | 477.415 | C8H12O9S4Tc+3 | PubChem | [134694302](https://pubchem.ncbi.nlm.nih.gov/compound/134694302) | Plyku_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:22 | 11:59 | 0/2/1 | 0/0/0 | 0/0/0 | 347,124/50,230 | openai / gpt-6-luna | 13 | 2/11 | 12/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Storgaard_2026_2_reference](drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Storgaard IK et al., Population pharmacokinetic modelling re…, British journal of clinical… (2026) | [10.1002/bcp.70284](https://doi.org/10.1002/bcp.70284) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.0). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Gracia_2025_reference](drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Gracia2025_reference.md) | — | 1-compartment (no model) | 2 | Gracia M et al., A population pharmacokinetic approach t…, Pediatric nephrology (Berli… (2025) | [10.1007/s00467-025-06828-9](https://doi.org/10.1007/s00467-025-06828-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Plyku_2021_reference](drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Plyku2021_reference.md) | — | 1-compartment (no model) | 0 | Plyku D et al., Renal 99mTc-DMSA pharmacokinetics in pe…, EJNMMI physics (2021) | [10.1186/s40658-021-00401-7](https://doi.org/10.1186/s40658-021-00401-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=technetium_99mtc_succimer).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SLC20A1 (substrate), SLC20A2 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 70 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bakirtas_2009 | irrelevant | 0 | 0 | Human renal imaging reports uptake values but no quantitative pharmacokinetic disposition parameters. |
| popPK | Chan_2016 | irrelevant | 1 | 0 | 99mTc-DMSA is used only as a renal imaging agent, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Chaves_2010 | irrelevant | 1 | 0 | 99mTc-succimer is used only for diagnostic scintigraphy, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Cui_2025 | irrelevant | 0 | 0 | This evaluates a diagnostic device and reports no pharmacokinetic parameters for technetium-99m succimer. |
| popPK | Finogenova_2026 | irrelevant | 0 | 0 | This review reports no pharmacokinetic parameters for technetium-99m succimer; the numeric values concern other radionuclides. |
| popPK | Funeh_2025 | irrelevant | 0 | 0 | This studies technetium-99m-labeled antibody fragments in mice, not technetium-99m succimer, and reports no quantitative PK disposition parameters. |
| popPK | Gracia_2025 | irrelevant | 0 | 0 | The paper reports quantitative PK parameters for 99mTc-DTPA, not technetium-99m succimer. |
| popPK | Hooper_2025 | irrelevant | 0 | 0 | The study models iohexol and iopamidol, while technetium-99m agents are only mentioned as other filtration markers. |
| popPK | Jouret_2010 | irrelevant | 1 | 1 | The study uses technetium-99m DMSA for imaging but reports no quantitative disposition parameters for it. |
| popPK | Kaikousidis_2023 | irrelevant | 0 | 0 | The paper models Tc99m-tetrofosmin, not succimer; parameter estimates are not readable here and some data are referenced in supplementary tables. |
| popPK | Lee_2009 | irrelevant | 1 | 0 | Human renal uptake was assessed, but no quantitative pharmacokinetic disposition parameters or numeric values are reported. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | no_text gate: extracted text is mostly non-alphabetic (garbled or binary) |
| popPK | Rajic_2007 | irrelevant | 1 | 0 | Technetium-99m DMSA is used for diagnostic renal fixation, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Rajić_2002 | irrelevant | 2 | 0 | Human biodistribution is reported as activity changes, but no quantitative pharmacokinetic parameters are provided. |
| popPK | Samad_2007 | irrelevant | 0 | 0 | Technetium-99m DMSA is used for postoperative renal imaging, with no pharmacokinetic parameters reported. |
| popPK | Spiliotopoulou_2024 | irrelevant | 0 | 0 | DMSA is only a reference comparator; no quantitative disposition parameters for technetium-99m succimer are reported. |
| popPK | Storgaard_2026 | irrelevant | 0 | 0 | The study models gentamicin, while 99mTc-DTPA is only used to measure GFR; no succimer PK values are reported. |
| popPK | Storgaard_2026_2 | irrelevant | 0 | 0 | The study models THC and THC-OH in patients; technetium-99m-DTPA is only a renal-function tracer. |
| popPK | Sun_2025 | irrelevant | 0 | 0 | This is a review of gold nanoclusters and reports no pharmacokinetic parameters for technetium_99mtc_succimer. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:14 UTC</sub>

<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;alectinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alectinib_Mohmaed2026_fasted_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Mohmaed_2026_fasted_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/Alectinib_Mohmaed2026_fasted_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alectinib_Mohmaed2026_fed_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Mohmaed_2026_fed_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# alectinib

- **generic name:** alectinib
- **ATC codes:** `L01ED03`
- **DrugBank:** [DB11363](https://go.drugbank.com/drugs/DB11363) · **PubChem:** [CID 49806720](https://pubchem.ncbi.nlm.nih.gov/compound/49806720)
- **molar mass:** 482.6166 g/mol (C30H34N4O2) — DrugBank
- **groups:** approved, investigational

## About

Alectinib is an ALK inhibitor used to treat non-small-cell lung cancer. It is an approved medicine, authorised in the European Union for this indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21099132](https://www.wikidata.org/wiki/Q21099132) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alectinib | parent | 482.617 | C30H34N4O2 | DrugBank | [49806720](https://pubchem.ncbi.nlm.nih.gov/compound/49806720) | Mohmaed_2026, van_2025 |
| M4 | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:30 | 16:34 | 0/6/2 | 1/0/3 | 0/0/0 | 298,030/71,473 | openai / gpt-6-luna | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.333). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: T1_cmax</sub><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Mohmaed_2026_fasted_geometric_mean_cv](drugs/drug_alectinib/Alectinib_Mohmaed2026_fasted_geometric_mean_cv.md) | ▶ model + simulator | 1-compartment, oral | 4 | Mohmaed Ali MI et al., Reducing the Burden of Interaction Stud…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70141](https://doi.org/10.1002/cpt.70141) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.333). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: T1_cmax</sub><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Mohmaed_2026_fed_geometric_mean_cv](drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv.md) | ▶ model + simulator | 1-compartment, oral | 4 | Mohmaed Ali MI et al., Reducing the Burden of Interaction Stud…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70141](https://doi.org/10.1002/cpt.70141) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hsu_2021_reference](drugs/drug_alectinib/Alectinib_Hsu2021_reference.md) | — | parent + metabolite (no model) | 0 | Hsu JC et al., Pharmacometric analyses of alectinib to…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12702](https://doi.org/10.1002/psp4.12702) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Mohmaed_2026_estimate](drugs/drug_alectinib/Alectinib_Mohmaed2026_estimate.md) | — | 1-compartment (no model) | 5 (+1 cov.) | Mohmaed Ali MI et al., Reducing the Burden of Interaction Stud…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70141](https://doi.org/10.1002/cpt.70141) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.4). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [van_2025_1_3_5_years_190_mg_bid](drugs/drug_alectinib/Alectinib_van2025_1_3_5_years_190_mg_bid.md) | — | parent + metabolite (no model) | 1 | van Donge T et al., Middle-Out Physiologically Based Pharma…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70020](https://doi.org/10.1002/psp4.70020) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.4). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [van_2025_3_5_5_8_years_230_mg_bid](drugs/drug_alectinib/Alectinib_van2025_3_5_5_8_years_230_mg_bid.md) | — | parent + metabolite (no model) | 1 | van Donge T et al., Middle-Out Physiologically Based Pharma…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70020](https://doi.org/10.1002/psp4.70020) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.4). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [van_2025_5_8_7_8_years_270_mg_bid](drugs/drug_alectinib/Alectinib_van2025_5_8_7_8_years_270_mg_bid.md) | — | parent + metabolite (no model) | 1 | van Donge T et al., Middle-Out Physiologically Based Pharma…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70020](https://doi.org/10.1002/psp4.70020) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [van_2025_value](drugs/drug_alectinib/Alectinib_van2025_value.md) | — | parent + metabolite (no model) | 5 | van Donge T et al., Middle-Out Physiologically Based Pharma…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70020](https://doi.org/10.1002/psp4.70020) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wanika_2024_TumorCellViability](drugs/drug_alectinib/pd_Wanika_2024_TumorCellViability.md) | TumorCellViability ← alectinib · indirect response — drug inhibits the production of TumorCellViability | — | Wanika L et al., In vitro PK/PD modeling of tyrosine kin…, Clinical and translational… (2024) | [10.1111/cts.13714](https://doi.org/10.1111/cts.13714) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Groenland_2021_PFS](drugs/drug_alectinib/pd_Groenland_2021_PFS.md) | Progression-free survival ← alectinib · time-to-event model | — | Groenland SL et al., Exposure-Response Analyses of Anaplasti…, Clinical pharmacology and t… (2021) | [10.1002/cpt.1989](https://doi.org/10.1002/cpt.1989) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> | [Lin_2024_PFS](drugs/drug_alectinib/pd_Lin_2024_PFS.md) | progression-free survival ← alectinib · time-to-event model | — | Lin L et al., A joint model of longitudinal pharmacok…, Cancer chemotherapy and pha… (2024) | [10.1007/s00280-024-04698-w](https://doi.org/10.1007/s00280-024-04698-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Lin_2024_PFS_2](drugs/drug_alectinib/pd_Lin_2024_PFS_2.md) | progression-free survival ← alectinib · time-to-event model | — | Lin L et al., A joint model of longitudinal pharmacok…, Cancer chemotherapy and pha… (2024) | [10.1007/s00280-024-04698-w](https://doi.org/10.1007/s00280-024-04698-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Lin_2024_PFS_3](drugs/drug_alectinib/pd_Lin_2024_PFS_3.md) | progression-free survival ← alectinib · time-to-event model | — | Lin L et al., A joint model of longitudinal pharmacok…, Cancer chemotherapy and pha… (2024) | [10.1007/s00280-024-04698-w](https://doi.org/10.1007/s00280-024-04698-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Lin_2024_PFS_4](drugs/drug_alectinib/pd_Lin_2024_PFS_4.md) | progression-free survival ← alectinib · time-to-event model | — | Lin L et al., A joint model of longitudinal pharmacok…, Cancer chemotherapy and pha… (2024) | [10.1007/s00280-024-04698-w](https://doi.org/10.1007/s00280-024-04698-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Lin_2024_PFS_5](drugs/drug_alectinib/pd_Lin_2024_PFS_5.md) | progression-free survival ← alectinib · time-to-event model | — | Lin L et al., A joint model of longitudinal pharmacok…, Cancer chemotherapy and pha… (2024) | [10.1007/s00280-024-04698-w](https://doi.org/10.1007/s00280-024-04698-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Morcos_2018_Grade_3_AEs](drugs/drug_alectinib/pd_Morcos_2018_Grade_3_AEs.md) | Grade ≥ 3 adverse events ← alectinib + M4 · categorical (graded) response model | — | Morcos PN et al., Exposure-response analysis of alectinib…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-018-3597-5](https://doi.org/10.1007/s00280-018-3597-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Morcos_2018_OS](drugs/drug_alectinib/pd_Morcos_2018_OS.md) | Overall survival ← alectinib + M4 · time-to-event model | — | Morcos PN et al., Exposure-response analysis of alectinib…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-018-3597-5](https://doi.org/10.1007/s00280-018-3597-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Morcos_2018_SAEs](drugs/drug_alectinib/pd_Morcos_2018_SAEs.md) | Serious adverse events ← alectinib + M4 · categorical (graded) response model | — | Morcos PN et al., Exposure-response analysis of alectinib…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-018-3597-5](https://doi.org/10.1007/s00280-018-3597-5) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=alectinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ALK (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 8  ·  extracted 0  ·  needs_review 2  ·  rejected 6  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2021 | irrelevant | 0 | 0 | The reported population-PK parameters are for lorlatinib; alectinib is only mentioned as prior therapy. |
| popPK | Groenland_2021 | irrelevant | 2 | 1 | This human exposure–response study reports alectinib concentrations but no quantitative disposition parameters or PK model. |
| popPK | Gupta_2021 | irrelevant | 0 | 0 | This is a human brigatinib PK study; alectinib is only mentioned as a comparator, with no alectinib parameter values. |
| popPK | Lin_2024 | irrelevant | 1 | 2 | This human exposure–response study reports no alectinib disposition estimates; the 32 h half-life is cited for concentration extrapolation. |
| popPK | Morcos_2018 | irrelevant | 2 | 0 | This human exposure–response analysis reports no numeric alectinib disposition parameters; referenced figures and supplementary material are not provided. |
| popPK | Wanika_2024 | irrelevant | 2 | 2 | This is an in-vitro cell-line model, and only a limited alectinib parameter value is readable; the full estimates are in Table 2, which is not provided. |
| popPK | van_2023 | relevant | 9 | 2 | Alectinib population-PK model simulations are reported, but the model’s parameter estimates are only said to be in Data S1, which is not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:15 UTC</sub>

<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;alectinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alectinib_Mohmaed2026_fasted_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Mohmaed_2026_fasted_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/Alectinib_Mohmaed2026_fasted_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alectinib_Mohmaed2026_fed_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Mohmaed_2026_fed_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# alectinib

- **generic name:** alectinib
- **ATC codes:** `L01ED03`
- **DrugBank:** [DB11363](https://go.drugbank.com/drugs/DB11363) · **PubChem:** [CID 49806720](https://pubchem.ncbi.nlm.nih.gov/compound/49806720)
- **molar mass:** 482.6166 g/mol (C30H34N4O2) — DrugBank
- **groups:** approved, investigational

## About

Alectinib is an ALK inhibitor used to treat non-small-cell lung cancer. It is an approved medicine, authorised in the European Union for this indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21099132](https://www.wikidata.org/wiki/Q21099132) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alectinib | parent | 482.617 | C30H34N4O2 | DrugBank | [49806720](https://pubchem.ncbi.nlm.nih.gov/compound/49806720) | Mohmaed_2026, van_2025 |
| M4 | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:30 | 16:34 | 2/6/0 | 1/0/3 | 0/0/0 | 298,030/71,473 | openai / gpt-6-luna | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Mohmaed_2026_fasted_geometric_mean_cv](drugs/drug_alectinib/Alectinib_Mohmaed2026_fasted_geometric_mean_cv.md) | ▶ model + simulator | 1-compartment, oral | 4 | Mohmaed Ali MI et al., Reducing the Burden of Interaction Stud…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70141](https://doi.org/10.1002/cpt.70141) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mohmaed_2026_fed_geometric_mean_cv](drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv.md) | ▶ model + simulator | 1-compartment, oral | 4 | Mohmaed Ali MI et al., Reducing the Burden of Interaction Stud…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70141](https://doi.org/10.1002/cpt.70141) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hsu_2021_reference](drugs/drug_alectinib/Alectinib_Hsu2021_reference.md) | — | parent + metabolite (no model) | 0 | Hsu JC et al., Pharmacometric analyses of alectinib to…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12702](https://doi.org/10.1002/psp4.12702) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Mohmaed_2026_estimate](drugs/drug_alectinib/Alectinib_Mohmaed2026_estimate.md) | — | 1-compartment (no model) | 5 (+1 cov.) | Mohmaed Ali MI et al., Reducing the Burden of Interaction Stud…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70141](https://doi.org/10.1002/cpt.70141) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [van_2025_1_3_5_years_190_mg_bid](drugs/drug_alectinib/Alectinib_van2025_1_3_5_years_190_mg_bid.md) | — | parent + metabolite (no model) | 1 | van Donge T et al., Middle-Out Physiologically Based Pharma…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70020](https://doi.org/10.1002/psp4.70020) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [van_2025_3_5_5_8_years_230_mg_bid](drugs/drug_alectinib/Alectinib_van2025_3_5_5_8_years_230_mg_bid.md) | — | parent + metabolite (no model) | 1 | van Donge T et al., Middle-Out Physiologically Based Pharma…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70020](https://doi.org/10.1002/psp4.70020) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [van_2025_5_8_7_8_years_270_mg_bid](drugs/drug_alectinib/Alectinib_van2025_5_8_7_8_years_270_mg_bid.md) | — | parent + metabolite (no model) | 1 | van Donge T et al., Middle-Out Physiologically Based Pharma…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70020](https://doi.org/10.1002/psp4.70020) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [van_2025_value](drugs/drug_alectinib/Alectinib_van2025_value.md) | — | parent + metabolite (no model) | 5 | van Donge T et al., Middle-Out Physiologically Based Pharma…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70020](https://doi.org/10.1002/psp4.70020) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wanika_2024_TumorCellViability](drugs/drug_alectinib/pd_Wanika_2024_TumorCellViability.md) | TumorCellViability ← alectinib · indirect response — drug inhibits the production of TumorCellViability | — | Wanika L et al., In vitro PK/PD modeling of tyrosine kin…, Clinical and translational… (2024) | [10.1111/cts.13714](https://doi.org/10.1111/cts.13714) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Groenland_2021_PFS](drugs/drug_alectinib/pd_Groenland_2021_PFS.md) | Progression-free survival ← alectinib · time-to-event model | — | Groenland SL et al., Exposure-Response Analyses of Anaplasti…, Clinical pharmacology and t… (2021) | [10.1002/cpt.1989](https://doi.org/10.1002/cpt.1989) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lin_2024_PFS](drugs/drug_alectinib/pd_Lin_2024_PFS.md) | progression-free survival ← alectinib · time-to-event model | — | Lin L et al., A joint model of longitudinal pharmacok…, Cancer chemotherapy and pha… (2024) | [10.1007/s00280-024-04698-w](https://doi.org/10.1007/s00280-024-04698-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lin_2024_PFS_2](drugs/drug_alectinib/pd_Lin_2024_PFS_2.md) | progression-free survival ← alectinib · time-to-event model | — | Lin L et al., A joint model of longitudinal pharmacok…, Cancer chemotherapy and pha… (2024) | [10.1007/s00280-024-04698-w](https://doi.org/10.1007/s00280-024-04698-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lin_2024_PFS_3](drugs/drug_alectinib/pd_Lin_2024_PFS_3.md) | progression-free survival ← alectinib · time-to-event model | — | Lin L et al., A joint model of longitudinal pharmacok…, Cancer chemotherapy and pha… (2024) | [10.1007/s00280-024-04698-w](https://doi.org/10.1007/s00280-024-04698-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lin_2024_PFS_4](drugs/drug_alectinib/pd_Lin_2024_PFS_4.md) | progression-free survival ← alectinib · time-to-event model | — | Lin L et al., A joint model of longitudinal pharmacok…, Cancer chemotherapy and pha… (2024) | [10.1007/s00280-024-04698-w](https://doi.org/10.1007/s00280-024-04698-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lin_2024_PFS_5](drugs/drug_alectinib/pd_Lin_2024_PFS_5.md) | progression-free survival ← alectinib · time-to-event model | — | Lin L et al., A joint model of longitudinal pharmacok…, Cancer chemotherapy and pha… (2024) | [10.1007/s00280-024-04698-w](https://doi.org/10.1007/s00280-024-04698-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2018_Grade_3_AEs](drugs/drug_alectinib/pd_Morcos_2018_Grade_3_AEs.md) | Grade ≥ 3 adverse events ← alectinib + M4 · categorical (graded) response model | — | Morcos PN et al., Exposure-response analysis of alectinib…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-018-3597-5](https://doi.org/10.1007/s00280-018-3597-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2018_OS](drugs/drug_alectinib/pd_Morcos_2018_OS.md) | Overall survival ← alectinib + M4 · time-to-event model | — | Morcos PN et al., Exposure-response analysis of alectinib…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-018-3597-5](https://doi.org/10.1007/s00280-018-3597-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2018_SAEs](drugs/drug_alectinib/pd_Morcos_2018_SAEs.md) | Serious adverse events ← alectinib + M4 · categorical (graded) response model | — | Morcos PN et al., Exposure-response analysis of alectinib…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-018-3597-5](https://doi.org/10.1007/s00280-018-3597-5) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=alectinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALK (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 8  ·  extracted 2  ·  needs_review 0  ·  rejected 6  ·  stale 0
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

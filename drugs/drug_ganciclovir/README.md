<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ganciclovir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ganciclovir_Li2020v2_final_model&quot;,&quot;label&quot;:&quot;Li_2020_2_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ganciclovir/Ganciclovir_Li2020v2_final_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ganciclovir_Li2020v2_model_i_the_3_4_allometric_model&quot;,&quot;label&quot;:&quot;Li_2020_2_model_i_the_3_4_allometric_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_i_the_3_4_allometric_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent&quot;,&quot;label&quot;:&quot;Li_2020_2_model_ii_the_simplest_wt_based_exponent_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ganciclovir_Li2020v2_model_iii_the_simplest_bsa_based_expone&quot;,&quot;label&quot;:&quot;Li_2020_2_model_iii_the_simplest_bsa_based_exponent_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_iii_the_simplest_bsa_based_expone.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ganciclovir_Li2020v2_model_iv_the_maturation_model&quot;,&quot;label&quot;:&quot;Li_2020_2_model_iv_the_maturation_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_iv_the_maturation_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ganciclovir

- **generic name:** ganciclovir
- **ATC codes:** `J05AB06`, `S01AD09`
- **DrugBank:** [DB01004](https://go.drugbank.com/drugs/DB01004) · **PubChem:** [CID 3454](https://pubchem.ncbi.nlm.nih.gov/compound/3454)
- **molar mass:** 255.2306 g/mol (C9H13N5O4) — DrugBank
- **groups:** approved, investigational

## About

Ganciclovir is an antiviral drug used to treat cytomegalovirus infections, especially cytomegalovirus retinitis in people with HIV, and also eye infections such as herpes simplex virus keratitis. It is an approved medicine used in hospital settings for serious infections, and it carries a boxed warning because it can be toxic.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417640](https://www.wikidata.org/wiki/Q417640) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ganciclovir | parent | 255.231 | C9H13N5O4 | DrugBank | [3454](https://pubchem.ncbi.nlm.nih.gov/compound/3454) | Dvořáčková_2026, Itohara_2025, Li_2020_2, Märtson_2022, Sudarsono_2026 |
| valganciclovir | metabolite | 354.367 | C14H22N6O5 | PubChem | [135413535](https://pubchem.ncbi.nlm.nih.gov/compound/135413535) | Itohara_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:53 | 12:05 | 5/4/4 | 2/0/1 | 0/0/0 | 337,516/56,383 | openai / gpt-6-luna | 8 | 2/6 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2020_2_final_model](drugs/drug_ganciclovir/Ganciclovir_Li2020v2_final_model.md) | ▶ model + simulator | 1-compartment, IV | 3 | Li S et al., Population Pharmacokinetics and Dose Op…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.614164](https://doi.org/10.3389/fphar.2020.614164) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2020_2_model_i_the_3_4_allometric_model](drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_i_the_3_4_allometric_model.md) | ▶ model + simulator | 1-compartment, IV | 3 | Li S et al., Population Pharmacokinetics and Dose Op…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.614164](https://doi.org/10.3389/fphar.2020.614164) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2020_2_model_ii_the_simplest_wt_based_exponent_model](drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_ii_the_simplest_wt_based_exponent.md) | ▶ model + simulator | 1-compartment, IV | 3 | Li S et al., Population Pharmacokinetics and Dose Op…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.614164](https://doi.org/10.3389/fphar.2020.614164) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2020_2_model_iii_the_simplest_bsa_based_exponent_model](drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_iii_the_simplest_bsa_based_expone.md) | ▶ model + simulator | 1-compartment, IV | 3 | Li S et al., Population Pharmacokinetics and Dose Op…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.614164](https://doi.org/10.3389/fphar.2020.614164) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2020_2_model_iv_the_maturation_model](drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_iv_the_maturation_model.md) | ▶ model + simulator | 1-compartment, IV | 2 | Li S et al., Population Pharmacokinetics and Dose Op…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.614164](https://doi.org/10.3389/fphar.2020.614164) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q307, Q373 — no SI value to build f…</sub><br><sub>route_to: `human_review`</sub> | [Li_2020_2_model_v_the_wt_dependent_exponent_model](drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_v_the_wt_dependent_exponent_model.md) | — | 1-compartment (no model) | 4 | Li S et al., Population Pharmacokinetics and Dose Op…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.614164](https://doi.org/10.3389/fphar.2020.614164) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q307, Q373 — no SI value to build f…</sub><br><sub>route_to: `human_review`</sub> | [Li_2020_2_model_vi_the_age_dependent_exponent_model](drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_vi_the_age_dependent_exponent_mod.md) | — | 1-compartment (no model) | 4 | Li S et al., Population Pharmacokinetics and Dose Op…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.614164](https://doi.org/10.3389/fphar.2020.614164) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q307, Q373 — no SI value to build f…</sub><br><sub>route_to: `human_review`</sub> | [Li_2020_2_model_vii_the_bsa_dependent_exponent_model](drugs/drug_ganciclovir/Ganciclovir_Li2020v2_model_vii_the_bsa_dependent_exponent_mo.md) | — | 1-compartment (no model) | 4 | Li S et al., Population Pharmacokinetics and Dose Op…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.614164](https://doi.org/10.3389/fphar.2020.614164) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Märtson_2022_reference](drugs/drug_ganciclovir/Ganciclovir_Mrtson2022_reference.md) | — | 1-compartment (no model) | 0 | Märtson AG et al., Therapeutic Drug Monitoring of Ganciclo…, Therapeutic drug monitoring (2022) | [10.1097/FTD.0000000000000925](https://doi.org/10.1097/FTD.0000000000000925) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Dvořáčková_2026_reference](drugs/drug_ganciclovir/Ganciclovir_Dvokov2026_reference.md) | — | 2-compartment (no model) | 7 (+1 cov.) | Dvořáčková E et al., Population Pharmacokinetics and Dose Op…, Medical principles and prac… (2026) | [10.1159/000548942](https://doi.org/10.1159/000548942) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Itohara_2025_reference](drugs/drug_ganciclovir/Ganciclovir_Itohara2025_reference.md) | — | 1-compartment (no model) | 4 | Itohara K et al., Pharmacokinetic and Pharmacodynamic Ass…, Therapeutic drug monitoring (2025) | [10.1097/FTD.0000000000001257](https://doi.org/10.1097/FTD.0000000000001257) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Krens_2020_reference](drugs/drug_ganciclovir/Ganciclovir_Krens2020_reference.md) | — | 1-compartment (no model) | 0 | Krens SD et al., Population Pharmacokinetics of Ganciclo…, Therapeutic drug monitoring (2020) | [10.1097/FTD.0000000000000689](https://doi.org/10.1097/FTD.0000000000000689) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Sudarsono_2026_reference](drugs/drug_ganciclovir/Ganciclovir_Sudarsono2026_reference.md) | — | 1-compartment (no model) | 4 | Sudarsono LM et al., A novel hollow-fiber infection model (H…, Antimicrobial agents and ch… (2026) | [10.1128/aac.00381-26](https://doi.org/10.1128/aac.00381-26) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chou_2024_growth_readout](drugs/drug_ganciclovir/pd_Chou_2024_growth_readout.md) | growth readout ← ganciclovir · inhibition effect | — | Chou S et al., Ganciclovir and maribavir cross-resista…, Antiviral research (2024) | [10.1016/j.antiviral.2023.105792](https://doi.org/10.1016/j.antiviral.2023.105792) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Guo_2022_pp28_luciferase](drugs/drug_ganciclovir/pd_Guo_2022_pp28_luciferase.md) | percent inhibition of pp28-luciferase CMV ← ganciclovir · direct sigmoid Emax (Hill) effect | — | Guo X et al., The Synthesis and Anti-Cytomegalovirus…, Viruses (2022) | [10.3390/v14020234](https://doi.org/10.3390/v14020234) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Koloskoff_2025_CMV](drugs/drug_ganciclovir/pd_Koloskoff_2025_CMV.md) | CMV viral load ← ganciclovir · indirect response — drug stimulates the loss of CMV viral load | model (no simulator) | Koloskoff K et al., Pharmacokinetic/Pharmacodynamic Modelli…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01526-z](https://doi.org/10.1007/s40262-025-01526-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ganciclovir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `SLC22A1` inhibitor/substrate, `SLC22A7` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor, `SLC22A8` inhibitor, `SLC47A1` substrate, `SLC47A2` substrate | DrugBank actor |
| excretion | liver | `SLC47A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (incorporation into and destabilization).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 148 matched, 20 returned
- **screened:** 6  ·  **relevant:** 5
- **records:** 13  ·  extracted 5  ·  needs_review 4  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Facchin_2019.pdf` | Facchin A et al., Population pharmacokinetics of ganciclo…, Antimicrobial agents and ch… (2019) | popPK | 10 | [10.1128/AAC.01192-19](https://doi.org/10.1128/AAC.01192-19) | [31527022](https://pubmed.ncbi.nlm.nih.gov/31527022) | The human population-PK model reports numeric clearance and volume covariate effects, but not their absolute parameter estimates. |
| `Krens_2020.pdf` | Krens SD et al., Population Pharmacokinetics of Ganciclo…, Therapeutic drug monitoring (2020) | popPK | 10 | [10.1097/FTD.0000000000000689](https://doi.org/10.1097/FTD.0000000000000689) | [31425489](https://pubmed.ncbi.nlm.nih.gov/31425489) | The study reports numeric population-PK clearance and volume estimates for ganciclovir in ICU patients. |
| `Selby_2023.pdf` | Selby PR et al., Population Pharmacokinetics of Ganciclo…, Antimicrobial agents and ch… (2023) | popPK | 10 | [10.1128/aac.01550-22](https://doi.org/10.1128/aac.01550-22) | [36815858](https://pubmed.ncbi.nlm.nih.gov/36815858) | The study models human ganciclovir pharmacokinetics, but no numeric disposition parameter values are provided. |

<sub>queue written 2026-10-07T17:42:05.732281+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Babaev_2022 | irrelevant | 0 | 0 | Ganciclovir is mentioned only as a potency comparator, with no pharmacokinetic parameters reported. |
| popPK | Carter_2025 | irrelevant | 0 | 0 | This is an in-vitro antiviral resistance study and reports no ganciclovir pharmacokinetic parameters. |
| popPK | Chemaly_2019 | irrelevant | 0 | 0 | This systematic review summarizes in-vitro antiviral activity, not ganciclovir disposition parameters. |
| popPK | Chou_2024 | irrelevant | 0 | 0 | This is an in-vitro viral susceptibility study reporting EC50 changes, not ganciclovir disposition parameters. |
| popPK | Codde_2025 | irrelevant | 0 | 0 | This is a review and provides no original quantitative ganciclovir disposition parameters. |
| popPK | Facchin_2019 | relevant | 10 | 4 | The human population-PK model reports numeric clearance and volume covariate effects, but not their absolute parameter estimates. |
| popPK | Guo_2022 | irrelevant | 0 | 0 | Ganciclovir is only mentioned as an in-vitro activity comparator, with no pharmacokinetic parameters reported. |
| popPK | Koloskoff_2025 | irrelevant | 2 | 1 | This pediatric PK/PD study reports AUC and pharmacodynamic values, but no numeric ganciclovir disposition parameters; the PK model estimates are from a prior study. |
| popPK | Lynch_2025 | irrelevant | 0 | 0 | This review does not report ganciclovir pharmacokinetic parameters or numeric values. |
| popPK | Märtson_2022 | irrelevant | 2 | 9 | This is a narrative review, not an original PK study, though readable population-model parameters appear in the included table. |
| popPK | Sauer_2020 | irrelevant | 1 | 8 | The paper reports an intracellular GCV-triphosphate half-life in infected cells, but no quantitative disposition model for ganciclovir in human or animal subjects. |
| popPK | Selby_2023 | relevant | 10 | 0 | The study models human ganciclovir pharmacokinetics, but no numeric disposition parameter values are provided. |
| popPK | Stockmann_2015 | irrelevant | 1 | 1 | This is a review and provides no original quantitative ganciclovir disposition parameters. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | This in-vitro antiviral study reports no ganciclovir disposition parameters or numeric PK values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:42 UTC</sub>

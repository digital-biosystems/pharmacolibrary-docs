<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02D&quot;,&quot;href&quot;:&quot;atc/P02D.md&quot;},{&quot;label&quot;:&quot;niclosamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Niclosamide_Zhang2019_reference&quot;,&quot;label&quot;:&quot;Zhang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niclosamide/Niclosamide_Zhang2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# niclosamide

- **generic name:** niclosamide
- **ATC codes:** `P02DA01`
- **DrugBank:** [DB06803](https://go.drugbank.com/drugs/DB06803) · **PubChem:** [CID 4477](https://pubchem.ncbi.nlm.nih.gov/compound/4477)
- **molar mass:** 327.12 g/mol (C13H8Cl2N2O4) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Niclosamide is an anticestodal drug used to treat tapeworm infections (parasitic helminthiasis). It is an approved human and veterinary medicine, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418523](https://www.wikidata.org/wiki/Q418523) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| niclosamide | parent | 327.12 | C13H8Cl2N2O4 | DrugBank | [4477](https://pubchem.ncbi.nlm.nih.gov/compound/4477) | Kim_2024, Weiss_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:59 | 8:03 | 1/5/0 | 4/0/0 | 0/0/0 | 419,766/27,763 | ollama / glm-5.3-flash | 7 | 0/7 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span> | [Zhang_2019_reference](drugs/drug_niclosamide/Niclosamide_Zhang2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Zhang J et al., Determination and pharmacokinetics stud…, BMC veterinary research (2019) | [10.1186/s12917-019-1963-0](https://doi.org/10.1186/s12917-019-1963-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Kim_2024_reference](drugs/drug_niclosamide/Niclosamide_Kim2024_reference.md) | — | 2-compartment (no model) | 6 | Kim T et al., Predicting lung exposure of intramuscul…, Clinical and translational… (2024) | [10.1111/cts.13833](https://doi.org/10.1111/cts.13833) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Weiss_2023_0_167_nen_nebulized](drugs/drug_niclosamide/Niclosamide_Weiss2023_0_167_nen_nebulized.md) | — | 1-compartment (no model) | 8 | Weiss A et al., Single-dose pharmacokinetics and lung f…, Pharmaceutical research (2023) | [10.1007/s11095-023-03559-0](https://doi.org/10.1007/s11095-023-03559-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Weiss_2023_0_5_nen_nebulized](drugs/drug_niclosamide/Niclosamide_Weiss2023_0_5_nen_nebulized.md) | — | 1-compartment (no model) | 4 | Weiss A et al., Single-dose pharmacokinetics and lung f…, Pharmaceutical research (2023) | [10.1007/s11095-023-03559-0](https://doi.org/10.1007/s11095-023-03559-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Weiss_2023_1_nen_nebulized](drugs/drug_niclosamide/Niclosamide_Weiss2023_1_nen_nebulized.md) | — | 1-compartment (no model) | 4 | Weiss A et al., Single-dose pharmacokinetics and lung f…, Pharmaceutical research (2023) | [10.1007/s11095-023-03559-0](https://doi.org/10.1007/s11095-023-03559-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Weiss_2023_oral_niclosamide](drugs/drug_niclosamide/Niclosamide_Weiss2023_oral_niclosamide.md) | — | 1-compartment (no model) | 4 | Weiss A et al., Single-dose pharmacokinetics and lung f…, Pharmaceutical research (2023) | [10.1007/s11095-023-03559-0](https://doi.org/10.1007/s11095-023-03559-0) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Borowiec_2022_RCR](drugs/drug_niclosamide/pd_Borowiec_2022_RCR.md) | Respiratory control ratio (State 3/State 4 respiration) ← niclosamide · direct Emax (saturable) effect | — | Borowiec BG et al., Niclosamide Is a Much More Potent Toxic…, Environmental science & tec… (2022) | [10.1021/acs.est.1c07117](https://doi.org/10.1021/acs.est.1c07117) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Li_2023_EC50](drugs/drug_niclosamide/pd_Li_2023_EC50.md) | SARS-CoV-2 viral replication inhibition (NP protein expression) ← niclosamide · inhibition effect | — | Li R et al., Synthesis, cytotoxicity, and pharmacoki…, European journal of medicin… (2023) | [10.1016/j.ejmech.2023.115320](https://doi.org/10.1016/j.ejmech.2023.115320) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sennoune_2023_macropinocytosis](drugs/drug_niclosamide/pd_Sennoune_2023_macropinocytosis.md) | basal macropinocytosis (TMR-dextran uptake) ← niclosamide · direct Emax (saturable) effect | — | Sennoune SR et al., Potent Inhibition of Macropinocytosis b…, Cancers (2023) | [10.3390/cancers15030759](https://doi.org/10.3390/cancers15030759) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sennoune_2023_macropinocytosis_2](drugs/drug_niclosamide/pd_Sennoune_2023_macropinocytosis_2.md) | SLC38A5-coupled macropinocytosis (TMR-dextran uptake) ← niclosamide · direct Emax (saturable) effect | — | Sennoune SR et al., Potent Inhibition of Macropinocytosis b…, Cancers (2023) | [10.3390/cancers15030759](https://doi.org/10.3390/cancers15030759) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sennoune_2023_serine_uptake](drugs/drug_niclosamide/pd_Sennoune_2023_serine_uptake.md) | SLC38A5-mediated serine uptake ← niclosamide · direct Emax (saturable) effect | — | Sennoune SR et al., Potent Inhibition of Macropinocytosis b…, Cancers (2023) | [10.3390/cancers15030759](https://doi.org/10.3390/cancers15030759) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sennoune_2023_serine_uptake_2](drugs/drug_niclosamide/pd_Sennoune_2023_serine_uptake_2.md) | SLC38A5-mediated serine uptake (MB231, no preincubation) ← niclosamide · direct Emax (saturable) effect | — | Sennoune SR et al., Potent Inhibition of Macropinocytosis b…, Cancers (2023) | [10.3390/cancers15030759](https://doi.org/10.3390/cancers15030759) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2020_CPE_FIPV](drugs/drug_niclosamide/pd_Yang_2020_CPE_FIPV.md) | Cytopathic effect of FIPV in Fcwf-4 cells (inhibition by niclosamide) ← niclosamide · inhibition effect | — | Yang CW et al., Repurposing old drugs as antiviral agen…, Biomedical journal (2020) | [10.1016/j.bj.2020.05.003](https://doi.org/10.1016/j.bj.2020.05.003) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2020_IFA_HCoV_OC43](drugs/drug_niclosamide/pd_Yang_2020_IFA_HCoV_OC43.md) | HCoV-OC43 nucleocapsid protein expression in HCT-8 cells (inhibition by niclosamide, IFA) ← niclosamide · inhibition effect | — | Yang CW et al., Repurposing old drugs as antiviral agen…, Biomedical journal (2020) | [10.1016/j.bj.2020.05.003](https://doi.org/10.1016/j.bj.2020.05.003) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=niclosamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C9` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 6  ·  extracted 1  ·  needs_review 0  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Borowiec_2022 | irrelevant | 0 | 0 | In-vitro mitochondrial toxicity study (EC50 of uncoupling), no PK disposition parameters for niclosamide. |
| popPK | Engin_2021 | irrelevant | 0 | 0 | This is a pharmacodynamic study of niclosamide's vascular effects in diabetic rats with no PK parameters (CL, V, ka, half-life, or model) reported. |
| popPK | Gutreuter_2007 | irrelevant | 0 | 0 | Toxicity bioassay modeling of lethal concentrations, not pharmacokinetic disposition parameters; niclosamide is only a co-toxicant. |
| popPK | Li_2023 | irrelevant | 4 | 4 | Niclosamide is the reference/comparator; PK values (Cmax, AUC, F, t1/2) are reported mainly for analogs/prodrugs, with niclosamide's own values only partially given and tables not fully readable. |
| popPK | Niyomdecha_2021 | irrelevant | 0 | 0 | In vitro antiviral mechanism study with no PK parameters for niclosamide. |
| popPK | Oliveira-Filho_2000 | irrelevant | 0 | 0 | This is an aquatic toxicity (LC50) study, not a pharmacokinetic study; no disposition parameters for niclosamide are reported. |
| popPK | Samrat_2022 | irrelevant | 0 | 0 | This is an in-vitro antiviral/enzyme inhibition study of niclosamide derivatives against SARS-CoV-2 3CLpro; no PK disposition parameters (CL, V, ka, half-life, population PK) for niclosamide are reported. |
| popPK | Sennoune_2023 | irrelevant | 0 | 0 | In-vitro mechanistic cancer cell study of niclosamide's effects on macropinocytosis and transporters; no PK disposition parameters reported. |
| popPK | Su_2025 | irrelevant | 0 | 0 | In-vitro formulation/antiviral study with no PK disposition parameters for niclosamide. |
| popPK | Wen_2007 | irrelevant | 0 | 0 | Niclosamide is only a reference control in an in-vitro antiviral assay; no PK parameters reported. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | In-vitro antiviral screening study reporting only EC50/CC50 values for niclosamide, with no pharmacokinetic disposition parameters. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The PK parameters reported are for oxyclozanide in cattle; niclosamide is only used as an internal standard, so no niclosamide disposition parameters exist. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:52 UTC</sub>

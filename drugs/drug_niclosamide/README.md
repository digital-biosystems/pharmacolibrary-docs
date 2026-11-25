<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02D&quot;,&quot;href&quot;:&quot;atc/P02D.md&quot;},{&quot;label&quot;:&quot;niclosamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Niclosamide_Zhang2019_reference&quot;,&quot;label&quot;:&quot;Zhang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niclosamide/Niclosamide_Zhang2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# niclosamide

- **generic name:** niclosamide
- **ATC codes:** `P02DA01`
- **DrugBank:** [DB06803](https://go.drugbank.com/drugs/DB06803) · **PubChem:** [CID 4477](https://pubchem.ncbi.nlm.nih.gov/compound/4477)
- **molar mass:** 327.12 g/mol (C13H8Cl2N2O4) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Niclosamide is an anthelmintic that targets parasitic worm infections in the intestines. The medication is provided as chewable tablets for swallowing, though it is poorly absorbed through the gastrointestinal tract. It serves as a global health essential but lacks a commercial license for people in the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q418523](https://www.wikidata.org/wiki/Q418523), [Wikipedia](https://en.wikipedia.org/wiki/Niclosamide?oldid=1383801772) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| niclosamide | parent | 327.12 | C13H8Cl2N2O4 | DrugBank | [4477](https://pubchem.ncbi.nlm.nih.gov/compound/4477) | Kim_2024, Weiss_2023 |

## Start here

> **Zhang_2019_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_niclosamide/Niclosamide_Zhang2019_reference.md?tab=Simulation) · [record](drugs/drug_niclosamide/Niclosamide_Zhang2019_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="cattle" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Zhang_2019_reference](drugs/drug_niclosamide/Niclosamide_Zhang2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Zhang J et al., Determination and pharmacokinetics stud…, BMC veterinary research (2019) | [10.1186/s12917-019-1963-0](https://doi.org/10.1186/s12917-019-1963-0) |
| <span class="pk-rf" hidden data-species="other animal" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Kim_2024_reference](drugs/drug_niclosamide/Niclosamide_Kim2024_reference.md) | — | 3-compartment (no model) | 8 | Kim T et al., Predicting lung exposure of intramuscul…, Clinical and translational… (2024) | [10.1111/cts.13833](https://doi.org/10.1111/cts.13833) |
| <span class="pk-rf" hidden data-species="sheep" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Weiss_2023_0_167_nen_nebulized](drugs/drug_niclosamide/Niclosamide_Weiss2023_0_167_nen_nebulized.md) | — | 1-compartment (no model) | 8 | Weiss A et al., Single-dose pharmacokinetics and lung f…, Pharmaceutical research (2023) | [10.1007/s11095-023-03559-0](https://doi.org/10.1007/s11095-023-03559-0) |
| <span class="pk-rf" hidden data-species="sheep" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ 0_5_nen_nebulized](drugs/drug_niclosamide/Niclosamide_Weiss2023_0_5_nen_nebulized.md) | — | 1-compartment (no model) | 4 |  |  |
| <span class="pk-rf" hidden data-species="sheep" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ 1_nen_nebulized](drugs/drug_niclosamide/Niclosamide_Weiss2023_1_nen_nebulized.md) | — | 1-compartment (no model) | 4 |  |  |
| <span class="pk-rf" hidden data-species="sheep" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ oral_niclosamide](drugs/drug_niclosamide/Niclosamide_Weiss2023_oral_niclosamide.md) | — | 1-compartment (no model) | 4 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sennoune_2023_macropinocytosis](drugs/drug_niclosamide/pd_Sennoune_2023_macropinocytosis.md) | basal macropinocytosis (TMR-dextran uptake) ← niclosamide · direct Emax (saturable) effect | — | Sennoune SR et al., Potent Inhibition of Macropinocytosis b…, Cancers (2023) | [10.3390/cancers15030759](https://doi.org/10.3390/cancers15030759) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sennoune_2023_macropinocytosis_2](drugs/drug_niclosamide/pd_Sennoune_2023_macropinocytosis_2.md) | SLC38A5-coupled macropinocytosis (TMR-dextran uptake) ← niclosamide · direct Emax (saturable) effect | — | Sennoune SR et al., Potent Inhibition of Macropinocytosis b…, Cancers (2023) | [10.3390/cancers15030759](https://doi.org/10.3390/cancers15030759) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sennoune_2023_serine_uptake](drugs/drug_niclosamide/pd_Sennoune_2023_serine_uptake.md) | SLC38A5-mediated serine uptake ← niclosamide · direct Emax (saturable) effect | — | Sennoune SR et al., Potent Inhibition of Macropinocytosis b…, Cancers (2023) | [10.3390/cancers15030759](https://doi.org/10.3390/cancers15030759) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sennoune_2023_serine_uptake_2](drugs/drug_niclosamide/pd_Sennoune_2023_serine_uptake_2.md) | SLC38A5-mediated serine uptake (MB231, no preincubation) ← niclosamide · direct Emax (saturable) effect | — | Sennoune SR et al., Potent Inhibition of Macropinocytosis b…, Cancers (2023) | [10.3390/cancers15030759](https://doi.org/10.3390/cancers15030759) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:38 | 0:05 | 1/5/0 | 4/0/0 | 0/0/0 | 3,679/164 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 6  ·  extracted 0  ·  needs review 1  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Borowiec_2022 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of mitochondrial toxicity and does not report pharmacokinetic parameters for niclosamide. |
| PGx | Borowiec_2022 | not_relevant | 0 | 0 | The paper investigates the mechanism of mitochondrial toxicity in sea lampreys and does not report pharmacogenomic effects on PK or PD parameters in humans. |
| popPK | Engin_2021 | irrelevant | 0 | 0 | The study focuses on vascular endothelial function and signaling mechanisms in rats, not on pharmacokinetic parameters. |
| PGx | Engin_2021 | not_relevant | 0 | 0 | The study reports niclosamide's effect on a PD endpoint (endothelium-dependent relaxation) in diabetic rats, but does not examine the influence of any specific gene variant or genotype on this response. |
| popPK | Gutreuter_2007 | irrelevant | 0 | 0 | The paper is a methodological study on toxicological modeling (LC50/EC50) and does not report pharmacokinetic parameters (CL, V, t1/2, etc.) for niclosamide. |
| PGx | Gutreuter_2007 | not_relevant | 0 | 0 | The paper focuses on statistical modeling methods for estimating toxicological endpoints (LC50/EC50) in an environmental species (sea lamprey) and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Kim_2024 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetic modeling of niclosamide in hamsters but does not mention any genetic variants, genotypes, or pharmacogenomic factors. |
| popPK | Li_2023 | relevant | 7 | 4 | The study reports pharmacokinetic parameters (Cmax, AUC, t1/2, F) for niclosamide as a comparator in mice, but specific numeric values for niclosamide are fragmented or contained in tables (Table 3, 4, 5) not fully rendered as a structured list in the evidence, though some values are mentioned in the text. |
| PGx | Li_2023 | not_relevant | 0 | 0 | The paper reports pharmacokinetic studies of niclosamide analogs in mice and microsomes, but contains no information on genetic variants or pharmacogenomic effects. |
| popPK | Niyomdecha_2021 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of antiviral activity, not a pharmacokinetic study, and contains no PK parameter values. |
| PGx | Niyomdecha_2021 | not_relevant | 0 | 0 | The study investigates the mechanism of action of niclosamide against RSV and does not report any pharmacogenomic effects or genetic variations influencing its pharmacokinetics or pharmacodynamics. |
| popPK | Oliveira-Filho_2000 | irrelevant | 0 | 0 | The paper is an acute toxicity study in aquatic organisms reporting LC50 values, not a pharmacokinetic study with disposition parameters for niclosamide. |
| PGx | Oliveira-Filho_2000 | not_relevant | 0 | 0 | The paper describes the toxicological effects of niclosamide on various aquatic species, not pharmacogenomic influences on human PK/PD parameters. |
| popPK | Samrat_2022 | irrelevant | 0 | 0 | The paper describes in vitro enzyme kinetics and molecular docking of niclosamide derivatives as antiviral inhibitors, containing no in vivo pharmacokinetic disposition parameters for niclosamide. |
| PGx | Samrat_2022 | not_relevant | 0 | 0 | The paper reports the pharmacodynamics of niclosamide derivatives against SARS-CoV-2 but does not report any gene variants or pharmacogenomic effects on PK or PD parameters. |
| popPK | Sennoune_2023 | irrelevant | 0 | 0 | In-vitro mechanistic cancer cell study of niclosamide's effects on macropinocytosis and transporters; no PK disposition parameters reported. |
| popPK | Su_2025 | irrelevant | 0 | 0 | The study is an in-vitro formulation and antiviral efficacy study, not a pharmacokinetic study, and reports no disposition parameters for niclosamide. |
| PGx | Su_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation and in vitro activity of inhalable dry powders of ivermectin and niclosamide, with no mention of pharmacogenomics or gene variants affecting PK/PD. |
| popPK | Wen_2007 | irrelevant | 0 | 0 | Niclosamide is used only as a reference control in an in-vitro antiviral assay, with no pharmacokinetic parameters reported. |
| PGx | Wen_2007 | not_relevant | 0 | 0 | The study evaluates antiviral activity of plant compounds using niclosamide only as a reference control; it contains no pharmacogenomic analysis or data on how genetic variants affect niclosamide PK/PD. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | The study is an in-vitro virology screening report determining EC50 values for niclosamide against coronaviruses, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Yang_2020 | not_relevant | 0 | 0 | The paper describes in vitro antiviral screening of drugs including niclosamide against coronaviruses and reports no pharmacogenomic analysis or data on gene variants affecting pharmacokinetics or pharmacodynamics. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The PK parameters reported are for oxyclozanide in cattle; niclosamide is only used as an internal standard, so no niclosamide disposition parameters exist. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bniclosamide%5D&body=Drug%3A%20niclosamide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_niclosamide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 14:54 UTC</sub>

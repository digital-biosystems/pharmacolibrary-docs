<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;formoterol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Formoterol_Back2020_reference&quot;,&quot;label&quot;:&quot;Back_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_formoterol/Formoterol_Back2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# formoterol

- **generic name:** formoterol
- **ATC codes:** `R03AC13`, `R03AK07`, `R03AK08`, `R03AK09`, `R03AK11`, `R03AL05`, `R03AL07`, `R03AL10`, `R03CC15`
- **DrugBank:** [DB00983](https://go.drugbank.com/drugs/DB00983) · **PubChem:** [CID 3410](https://pubchem.ncbi.nlm.nih.gov/compound/3410)
- **molar mass:** 344.4049 g/mol (C19H24N2O4) — DrugBank
- **groups:** approved, investigational

## About

Formoterol is a long-acting beta-2 agonist used as a bronchodilator for asthma and chronic obstructive pulmonary disease. It is given by inhalation, with oral and sublingual routes also available, and it is well absorbed when taken by mouth. The drug is widely used and available as a generic medication, often in combination with corticosteroids.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q637247](https://www.wikidata.org/wiki/Q637247), [Wikipedia](https://en.wikipedia.org/wiki/Formoterol?oldid=1329254941) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| formoterol | parent | 344.405 | C19H24N2O4 | DrugBank | [3410](https://pubchem.ncbi.nlm.nih.gov/compound/3410) | van_1998 |

## Start here

> **Back_2020_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_formoterol/Formoterol_Back2020_reference.md?tab=Simulation) · [record](drugs/drug_formoterol/Formoterol_Back2020_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): F</sub> | [Back_2020_reference](drugs/drug_formoterol/Formoterol_Back2020_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Back HM et al., Exposure-Response and Clinical Outcome…, Pharmaceutics (2020) | [10.3390/pharmaceutics12040336](https://doi.org/10.3390/pharmaceutics12040336) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [van_1998_reference](drugs/drug_formoterol/Formoterol_van1998_reference.md) | — | 1-compartment (no model) | 3 | van den Berg BT et al., Pharmacokinetics and effects of formote…, European journal of clinica… (1998) | [10.1007/s002280050494](https://doi.org/10.1007/s002280050494) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Back_2020_ACT](drugs/drug_formoterol/pd_Back_2020_ACT.md) | Asthma control test score ← formoterol · disease-progression model | — | Back HM et al., Exposure-Response and Clinical Outcome…, Pharmaceutics (2020) | [10.3390/pharmaceutics12040336](https://doi.org/10.3390/pharmaceutics12040336) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Kume_2018_MCh_10_M_glycopyrronium_inhibition](drugs/drug_formoterol/pd_Kume_2018_MCh_10_M_glycopyrronium_inhibition.md) | Percent inhibition of methacholine (10 μM)-induced contraction in the presence of glycopyrronium (1 nM) ← formoterol · direct sigmoid Emax (Hill) effect | — | Kume H et al., Involvement of Allosteric Effect and K, International journal of mo… (2018) | [10.3390/ijms19071999](https://doi.org/10.3390/ijms19071999) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Kume_2018_MCh_10_M_inhibition](drugs/drug_formoterol/pd_Kume_2018_MCh_10_M_inhibition.md) | Percent inhibition of methacholine (10 μM)-induced contraction ← formoterol · direct sigmoid Emax (Hill) effect | — | Kume H et al., Involvement of Allosteric Effect and K, International journal of mo… (2018) | [10.3390/ijms19071999](https://doi.org/10.3390/ijms19071999) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Kume_2018_MCh_1_M_inhibition](drugs/drug_formoterol/pd_Kume_2018_MCh_1_M_inhibition.md) | Percent inhibition of methacholine (1 μM)-induced contraction ← formoterol · direct sigmoid Emax (Hill) effect | — | Kume H et al., Involvement of Allosteric Effect and K, International journal of mo… (2018) | [10.3390/ijms19071999](https://doi.org/10.3390/ijms19071999) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [van_1998_peripheral_eosinophil_count](drugs/drug_formoterol/pd_van_1998_peripheral_eosinophil_count.md) | peripheral eosinophil count ← formoterol · direct sigmoid Emax (Hill) effect | — | van den Berg BT et al., Pharmacokinetics and effects of formote…, European journal of clinica… (1998) | [10.1007/s002280050494](https://doi.org/10.1007/s002280050494) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [van_1998_plasma_potassium](drugs/drug_formoterol/pd_van_1998_plasma_potassium.md) | plasma potassium ← formoterol · direct sigmoid Emax (Hill) effect | — | van den Berg BT et al., Pharmacokinetics and effects of formote…, European journal of clinica… (1998) | [10.1007/s002280050494](https://doi.org/10.1007/s002280050494) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [van_1999_plasma_eosinophil_concentration](drugs/drug_formoterol/pd_van_1999_plasma_eosinophil_concentration.md) | plasma eosinophil concentration ← formoterol · direct sigmoid Emax (Hill) effect | — | van den Berg BT et al., Pharmacokinetic/pharmacodynamic modelli…, Pulmonary pharmacology & th… (1999) | [10.1006/pupt.1999.0199](https://doi.org/10.1006/pupt.1999.0199) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [van_1999_plasma_potassium_concentration](drugs/drug_formoterol/pd_van_1999_plasma_potassium_concentration.md) | plasma potassium concentration ← formoterol · direct sigmoid Emax (Hill) effect | — | van den Berg BT et al., Pharmacokinetic/pharmacodynamic modelli…, Pulmonary pharmacology & th… (1999) | [10.1006/pupt.1999.0199](https://doi.org/10.1006/pupt.1999.0199) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Back_2020_FEV1](drugs/drug_formoterol/pd_Back_2020_FEV1.md) | Forced expiratory volume (FEV1) ← formoterol · indirect response — drug stimulates the production of Forced expiratory volume (FEV1) | model (no simulator) | Back HM et al., Exposure-Response and Clinical Outcome…, Pharmaceutics (2020) | [10.3390/pharmaceutics12040336](https://doi.org/10.3390/pharmaceutics12040336) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Gong_2022_FEV1](drugs/drug_formoterol/pd_Gong_2022_FEV1.md) | change from baseline in trough FEV1 ← formoterol/aclidinium and formoterol/glycopyrronium fixed-dose combinations · direct Emax (saturable) effect | — | Gong Y et al., Quantitative analysis of efficacy and s…, Therapeutic advances in res… (2022) | [10.1177/17534666211066068](https://doi.org/10.1177/17534666211066068) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:54 | 0:33 | 1/1/0 | 9/1/0 | 0/0/0 | 6,287/2,643 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 55 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cazzola_2015 | irrelevant | 0 | 0 | This is a pharmacodynamic study focusing on bronchodilatory synergy (FEV1) and ex vivo potency (EC50), not a pharmacokinetic study reporting disposition parameters. |
| PGx | Cazzola_2015 | not_relevant | 0 | 0 | The paper investigates the synergistic pharmacodynamic interaction between aclidinium and formoterol in COPD patients but contains no data on gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Donnelly_2010 | irrelevant | 0 | 0 | The study investigates the in-vitro mechanism of action (cytokine release inhibition) of formoterol and does not report any pharmacokinetic disposition parameters (e.g., clearance, volume of distribution) for the drug. |
| PGx | Donnelly_2010 | not_relevant | 0 | 0 | The study investigates in vitro immunomodulatory effects of formoterol and salmeterol on macrophages and contains no analysis of genetic variants, genotypes, or pharmacogenomic differences. |
| popPK | Gong_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic (Emax/efficacy-loss) MBMA of FEV1 for LABA/LAMA combinations, not a PK study; no formoterol disposition parameters (CL, V, ka, half-life) are reported. |
| popPK | Herbert_2019 | irrelevant | 0 | 0 | The study is an in vitro mechanistic assessment of pharmacodynamic effects on airway contraction in rat lung slices, containing no pharmacokinetic parameters or population PK model for formoterol. |
| PGx | Herbert_2019 | not_relevant | 0 | 0 | The paper reports experimental pharmacodynamics of formoterol in organophosphate poisoning using rat lung slices but does not investigate gene variants or pharmacogenomic effects. |
| popPK | Huang_2020 | irrelevant | 4 | 0 | The study reports non-compartmental analysis (NCA) summary statistics (AUC, Cmax) and geometric mean ratios rather than quantitative compartmental PK parameters (CL, V, Q, ka) or a population PK model for formoterol. |
| PGx | Huang_2020 | not_relevant | 0 | 0 | The study assesses ethnic differences rather than specific pharmacogenomic (gene variant/genotype) effects on formoterol pharmacokinetics. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy and safety of bronchodilator therapies in COPD patients, not a pharmacokinetic study; formoterol is only a comparator drug and no PK parameters (CL, V, t1/2) are reported. |
| PGx | Jiang_2025 | not_relevant | 0 | 0 | The paper reports clinical outcomes of drug treatment in COPD but does not investigate the impact of any gene variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kume_2018 | irrelevant | 0 | 0 | In vitro pharmacodynamics study of bronchodilator synergism in guinea pig trachealis; formoterol is only a test agonist with EC50 values, no PK disposition parameters. |
| popPK | Mehta_2018 | irrelevant | 0 | 0 | Formoterol appears only as the co-administered comparator (budesonide/formoterol arm); the population PK models and parameters (CL/F, Q/F, KA) are for fluticasone furoate, umeclidinium, and vilanterol, not formoterol. |
| popPK | Mhanna_2007 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assessment of airway relaxation and contraction mechanics, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Mhanna_2007 | not_relevant | 0 | 0 | The study compares two chemical enantiomers of formoterol in an ex vivo rat model, which is a pharmacological comparison, not a pharmacogenomic analysis of gene variants affecting PK/PD. |
| popPK | Miller_2016 | relevant | 4 | 3 | Formoterol is a subject compound with uptake/elimination rate constants and BCF modelled in Gammarus pulex, but the numeric k1/k2/BCF values for formoterol are in Table 1/Fig. 1 which are not included in the evidence; also this is environmental bioconcentration toxicokinetics rather than classical disposition PK. |
| popPK | Naline_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of bronchial relaxation and does not report any pharmacokinetic parameters. |
| PGx | Naline_1994 | not_relevant | 0 | 0 | The study investigates pharmacodynamic properties of formoterol in isolated human bronchi but does not report any pharmacogenomic effects (gene variants or genotypes). |
| popPK | Soulele_2018 | relevant | 9 | 2 | The paper reports a population PK model for formoterol, but specific numeric parameter values are not present in the provided text. |
| PGx | Soulele_2018 | not_relevant | 0 | 0 | The study investigates population PK of inhaled budesonide and formoterol and standard physiological covariates (e.g., lung anatomy, weight), but does not report any genetic variant or pharmacogenomic effect on PK/PD parameters. |
| popPK | Wallman_2022 | irrelevant | 3 | 0 | The study focuses on PK/CV integration for safety pharmacology in dogs; while formoterol PK data are combined with CV effects, the text provided does not contain the specific quantitative PK parameters (CL, V, ka) for formoterol. |
| PGx | Wallman_2022 | not_relevant | 0 | 0 | The paper describes PK/PD modeling in dogs using five reference compounds, including formoterol, but does not report any gene variant or genotype effects (pharmacogenomics). |
| PGx | van_1998 | not_relevant | 0 | 0 | The paper reports a standard pharmacokinetic and pharmacodynamic study in healthy subjects but does not investigate or report any gene variants, genotypes, or pharmacogenomic effects on the PK/PD parameters of formoterol. |
| popPK | van_1999 | irrelevant | 2 | 0 | The study reports PK/PD modeling and pharmacodynamic parameters (Emax, EC50) but does not provide quantitative disposition parameters (CL, V, ka, half-life) for formoterol. |
| PGx | van_1999 | not_relevant | 0 | 0 | The study reports PK/PD modeling in healthy subjects but does not investigate the influence of any gene variant or genotype. |
| popPK | van_2024 | irrelevant | 0 | 0 | This is a drug-disease Poisson model of reliever (SABA) use in asthma, not a PK study; formoterol appears only as part of a maintenance combination therapy with no PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bformoterol%5D&body=Drug%3A%20formoterol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_formoterol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 22:52 UTC</sub>

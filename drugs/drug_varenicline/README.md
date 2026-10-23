<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;varenicline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Varenicline_Fediuk2021_reference&quot;,&quot;label&quot;:&quot;Fediuk_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_varenicline/Varenicline_Fediuk2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Varenicline_Glatard2019_reference&quot;,&quot;label&quot;:&quot;Glatard_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_varenicline/Varenicline_Glatard2019_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# varenicline

- **generic name:** varenicline
- **ATC codes:** `N07BA03`, `S01XA28`
- **DrugBank:** [DB01273](https://go.drugbank.com/drugs/DB01273) · **PubChem:** [CID 5310966](https://pubchem.ncbi.nlm.nih.gov/compound/5310966)
- **molar mass:** 211.268 g/mol (C13H13N3) — DrugBank
- **groups:** approved, investigational

## About

Varenicline is a medicine used to help people stop smoking (tobacco use cessation). It is an approved drug and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411330](https://www.wikidata.org/wiki/Q411330) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| varenicline | parent | 211.268 | C13H13N3 | DrugBank | [5310966](https://pubchem.ncbi.nlm.nih.gov/compound/5310966) | Faessel_2009, Fediuk_2021, Glatard_2019, Ravva_2009 |

## Start here

> **Fediuk_2021_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> adolescent smokers, n = 49. [Run it in the simulator](drugs/drug_varenicline/Varenicline_Fediuk2021_reference.md?tab=Simulation) · [record](drugs/drug_varenicline/Varenicline_Fediuk2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 12.5 | L/h | 12.5 L/h | adolescent smokers | 49 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Fediuk_2021_reference](drugs/drug_varenicline/Varenicline_Fediuk2021_reference.md) |
| V | V/F | 231 | L | 231 L | adolescent smokers | 49 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Fediuk_2021_reference](drugs/drug_varenicline/Varenicline_Fediuk2021_reference.md) |
| ka | kabs | 0.86 | 1/h | 0.860 h−1 | adolescent smokers | 49 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Fediuk_2021_reference](drugs/drug_varenicline/Varenicline_Fediuk2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Fediuk_2021_reference](drugs/drug_varenicline/Varenicline_Fediuk2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Fediuk DJ et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12645](https://doi.org/10.1002/psp4.12645) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Faessel_2009_reference](drugs/drug_varenicline/Varenicline_Faessel2009_reference.md) | — | 1-compartment (no model) | 4 | Faessel H et al., Pharmacokinetics, safety, and tolerabil…, Clinical therapeutics (2009) | [10.1016/j.clinthera.2009.01.003](https://doi.org/10.1016/j.clinthera.2009.01.003) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: biomarker_kinetics_as_drug_pk</sub> | [Glatard_2019_reference](drugs/drug_varenicline/Varenicline_Glatard2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Glatard A et al., Influence of body weight and UGT2B7 pol…, European journal of clinica… (2019) | [10.1007/s00228-019-02662-9](https://doi.org/10.1007/s00228-019-02662-9) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Ravva_2009_reference](drugs/drug_varenicline/Varenicline_Ravva2009_reference.md) | — | 1-compartment (no model) | 6 | Ravva P et al., Population pharmacokinetic analysis of…, British journal of clinical… (2009) | [10.1111/j.1365-2125.2009.03520.x](https://doi.org/10.1111/j.1365-2125.2009.03520.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hone_2017_3_4_nAChR_activation](drugs/drug_varenicline/pd_Hone_2017_3_4_nAChR_activation.md) | Activation of native α3β4* nAChRs in human adrenal chromaffin cells ← varenicline · direct Emax (saturable) effect | — | Hone AJ et al., Therapeutic concentrations of varenicli…, Journal of neurochemistry (2017) | [10.1111/jnc.13883](https://doi.org/10.1111/jnc.13883) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Indurthi_2021_CRC](drugs/drug_varenicline/pd_Indurthi_2021_CRC.md) | single-channel / whole-cell nicotinic receptor response (concentration-response curve) ← varenicline · direct sigmoid Emax (Hill) effect | — | Indurthi DC et al., Agonist efficiency from concentration-r…, Biophysical journal (2021) | [10.1016/j.bpj.2021.02.034](https://doi.org/10.1016/j.bpj.2021.02.034) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_NS2B_NS3_activity](drugs/drug_varenicline/pd_Lin_2023_NS2B_NS3_activity.md) | DENV-2 NS2B-NS3 protease enzymatic activity (FRET assay) ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_infectivity](drugs/drug_varenicline/pd_Lin_2023_infectivity.md) | DENV-2 infectivity in Vero cells (NS4B-positive/DAPI ratio) ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_infectivity_2](drugs/drug_varenicline/pd_Lin_2023_infectivity_2.md) | DENV-2 infectivity in A549 cells ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_infectivity_3](drugs/drug_varenicline/pd_Lin_2023_infectivity_3.md) | DENV-1 infectivity in Vero cells ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_infectivity_4](drugs/drug_varenicline/pd_Lin_2023_infectivity_4.md) | DENV-2 infectivity, post-entry stage (time-of-addition) ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_infectivity_5](drugs/drug_varenicline/pd_Lin_2023_infectivity_5.md) | DENV-2 infectivity, entry stage (time-of-addition) ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_infectivity_6](drugs/drug_varenicline/pd_Lin_2023_infectivity_6.md) | DENV-2 infectivity, pretreatment mode ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_infectivity_7](drugs/drug_varenicline/pd_Lin_2023_infectivity_7.md) | DENV-2 infectivity, attachment mode ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_virus_yield](drugs/drug_varenicline/pd_Lin_2023_virus_yield.md) | DENV-2 virus yield in Vero cells ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_virus_yield_2](drugs/drug_varenicline/pd_Lin_2023_virus_yield_2.md) | DENV-2 virus yield in A549 cells ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_virus_yield_3](drugs/drug_varenicline/pd_Lin_2023_virus_yield_3.md) | DENV-1 virus yield in Vero cells ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lummis_2011_5_HT3_receptor_activation_membrane_potential_sensitive_dye_HEK293_cells](drugs/drug_varenicline/pd_Lummis_2011_5_HT3_receptor_activation_membrane_potential_sen.md) | 5-HT3 receptor activation (membrane potential-sensitive dye, HEK293 cells) ← varenicline · stimulation effect | — | Lummis SC et al., Varenicline is a potent agonist of the…, The Journal of pharmacology… (2011) | [10.1124/jpet.111.185306](https://doi.org/10.1124/jpet.111.185306) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lummis_2011_Displacement_of_3_H_granisetron_binding](drugs/drug_varenicline/pd_Lummis_2011_Displacement_of_3_H_granisetron_binding.md) | Displacement of [(3)H]granisetron binding ← varenicline · inhibition effect | — | Lummis SC et al., Varenicline is a potent agonist of the…, The Journal of pharmacology… (2011) | [10.1124/jpet.111.185306](https://doi.org/10.1124/jpet.111.185306) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ravva_2010_end_of_treatment_abstinence_smoking_cessation](drugs/drug_varenicline/pd_Ravva_2010_end_of_treatment_abstinence_smoking_cessation.md) | end-of-treatment abstinence (smoking cessation) ← varenicline · direct linear effect | — | Ravva P et al., Quantitative assessment of exposure-res…, Clinical pharmacology and t… (2010) | [10.1038/clpt.2009.282](https://doi.org/10.1038/clpt.2009.282) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ravva_2010_nausea](drugs/drug_varenicline/pd_Ravva_2010_nausea.md) | nausea ← varenicline · direct linear effect | — | Ravva P et al., Quantitative assessment of exposure-res…, Clinical pharmacology and t… (2010) | [10.1038/clpt.2009.282](https://doi.org/10.1038/clpt.2009.282) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ravva_2015_craving](drugs/drug_varenicline/pd_Ravva_2015_craving.md) | craving score (Smoking Urges Scale) ← varenicline · direct linear effect | — | Ravva P et al., Pharmacokinetic-pharmacodynamic modelin…, Nicotine & tobacco research… (2015) | [10.1093/ntr/ntu154](https://doi.org/10.1093/ntr/ntu154) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Fediuk_2021_CAR9_12](drugs/drug_varenicline/pd_Fediuk_2021_CAR9_12.md) | continuous abstinence rate weeks 9-12 ← varenicline · categorical (graded) response model | — | Fediuk DJ et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12645](https://doi.org/10.1002/psp4.12645) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Fediuk_2021_nausea_or_vomiting_incidence](drugs/drug_varenicline/pd_Fediuk_2021_nausea_or_vomiting_incidence.md) | nausea or vomiting incidence ← varenicline · categorical (graded) response model | — | Fediuk DJ et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12645](https://doi.org/10.1002/psp4.12645) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Glatard_2019_CO](drugs/drug_varenicline/pd_Glatard_2019_CO.md) | expired carbon monoxide ← varenicline · indirect response — drug stimulates the production of expired carbon monoxide | — | Glatard A et al., Influence of body weight and UGT2B7 pol…, European journal of clinica… (2019) | [10.1007/s00228-019-02662-9](https://doi.org/10.1007/s00228-019-02662-9) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lummis_2011_Rmax](drugs/drug_varenicline/pd_Lummis_2011_Rmax.md) | 5-HT3 receptor activation (human, Xenopus oocytes) ← varenicline · direct Emax (saturable) effect | model (no simulator) | Lummis SC et al., Varenicline is a potent agonist of the…, The Journal of pharmacology… (2011) | [10.1124/jpet.111.185306](https://doi.org/10.1124/jpet.111.185306) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lummis_2011_Rmax_2](drugs/drug_varenicline/pd_Lummis_2011_Rmax_2.md) | 5-HT3 receptor activation (mouse, Xenopus oocytes) ← varenicline · direct Emax (saturable) effect | model (no simulator) | Lummis SC et al., Varenicline is a potent agonist of the…, The Journal of pharmacology… (2011) | [10.1124/jpet.111.185306](https://doi.org/10.1124/jpet.111.185306) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=varenicline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | `SLC22A2` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA3 (partial agonist), CHRNA4 (partial agonist), CHRNA6 (partial agonist), CHRNA7 (target), CHRNB2 (partial agonist).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:53 | 5:01 | 1/3/0 | 8/0/0 | 0/0/0 | 266,758/17,964 | ollama / glm-5.3-flash | 6 | 3/3 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 23 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Faessel_2009.pdf` | Faessel H et al., Pharmacokinetics, safety, and tolerabil…, Clinical therapeutics (2009) | popPK | 10 | [10.1016/j.clinthera.2009.01.003](https://doi.org/10.1016/j.clinthera.2009.01.003) | [19243716](https://pubmed.ncbi.nlm.nih.gov/19243716) | Population PK (nonlinear mixed-effects) of varenicline in adolescents with CL/F (10.4 L/h) and V/F reported directly in the abstract; V/F numeric value itself not given. |
| `Ravva_2015.pdf` | Ravva P et al., Pharmacokinetic-pharmacodynamic modelin…, Nicotine & tobacco research… (2015) | popPK | 7 | [10.1093/ntr/ntu154](https://doi.org/10.1093/ntr/ntu154) | [25145377](https://pubmed.ncbi.nlm.nih.gov/25145377) | Human population PK-PD study with a 2-compartment varenicline model, but no numeric PK parameter values (CL, V, ka) appear in the evidence, likely in figures/supplement. |

<sub>queue written 2026-10-07 03:49 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Foa_2017 | irrelevant | 0 | 0 | Clinical trial of varenicline efficacy for smoking cessation in PTSD; no PK parameters reported. |
| popPK | Gowin_2016 | irrelevant | 0 | 0 | This is an fMRI/pharmacodynamic study of varenicline's neural effects with no PK parameters or numeric disposition values reported. |
| popPK | Green_2024 | irrelevant | 0 | 0 | Varenicline is used as a nicotinic receptor probe/treatment for alkaloid toxicity; no PK parameters for varenicline are reported. |
| popPK | Hone_2017 | irrelevant | 0 | 0 | In-vitro electrophysiology study of varenicline effects on chromaffin cells; no PK disposition parameters reported. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study of l-THP on nAChRs; varenicline is only mentioned as a comparator with no PK parameters. |
| popPK | Indurthi_2021 | irrelevant | 0 | 0 | This is a receptor pharmacodynamics/biophysics study of agonist efficiency, not a PK study; no disposition parameters for varenicline are reported. |
| popPK | Johnstone_2022 | irrelevant | 0 | 0 | Clinical pharmacodynamic study of craving/withdrawal with no PK parameters reported. |
| popPK | Lin_2023 | irrelevant | 0 | 0 | This is an in-vitro antiviral study of varenicline against dengue virus; no PK disposition parameters (CL, V, ka, half-life, or PK model) are reported. |
| popPK | Lummis_2011 | irrelevant | 0 | 0 | In vitro receptor pharmacology study (EC50/IC50 at 5-HT3 receptors), no PK disposition parameters for varenicline. |
| popPK | Oswald_2026 | irrelevant | 0 | 0 | This is a weight-change study in smokers using varenicline as therapy; no PK parameters for varenicline are reported. |
| popPK | Ponzoni_2014 | irrelevant | 0 | 0 | Behavioral/pharmacology study in zebrafish with no PK parameters for varenicline, which is only a comparator drug. |
| popPK | Ravva_2010 | irrelevant | 3 | 2 | This is an exposure-response (efficacy/tolerability) analysis using AUC exposure metrics, not a PK disposition study reporting CL, V, or compartmental parameters for varenicline; no numeric PK parameter values are present. |
| popPK | Ravva_2015 | relevant | 7 | 3 | Human population PK-PD study with a 2-compartment varenicline model, but no numeric PK parameter values (CL, V, ka) appear in the evidence, likely in figures/supplement. |
| popPK | Zammit_2023 | irrelevant | 0 | 0 | This is a PET kinetic modeling study of radioligands (2-FA, Nifene) in mice; varenicline is only mentioned as a chemical comparator, with no PK parameters for varenicline itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvarenicline%5D&body=Drug%3A%20varenicline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_varenicline/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 03:49 UTC</sub>

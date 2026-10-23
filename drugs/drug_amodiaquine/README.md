<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;amodiaquine&quot;}]"></div>

# amodiaquine

- **generic name:** amodiaquine
- **ATC codes:** `P01BA06`, `P01BF03`
- **DrugBank:** [DB00613](https://go.drugbank.com/drugs/DB00613) · **PubChem:** [CID 2165](https://pubchem.ncbi.nlm.nih.gov/compound/2165)
- **molar mass:** 355.861 g/mol (C20H22ClN3O) — DrugBank
- **groups:** approved, investigational

## About

Amodiaquine is an antimalarial medicine used to treat malaria. It is on the WHO list of essential medicines and is also available in combination with artemisinin derivatives; it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q239569](https://www.wikidata.org/wiki/Q239569) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| amodiaquine | parent | 355.861 | C20H22ClN3O | DrugBank | [2165](https://pubchem.ncbi.nlm.nih.gov/compound/2165) | Ali_2018, Ding_2020, Ding_2024, Stepniewska_2009 |
| desethylamodiaquine | metabolite | 327.812 | C18H18ClN3O | PubChem | [122068](https://pubchem.ncbi.nlm.nih.gov/compound/122068) | Ali_2018, Ding_2020, Ding_2024, Stepniewska_2009 |
| dihydroartemisinin | metabolite | 284.9 | — | the paper | — | Stepniewska_2009 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| V | V1 | 1.35e+04 | L | 13500 liters | pediatric and adult patients with uncomplicated malaria |  | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ali_2018_typical_valuea](drugs/drug_amodiaquine/Amodiaquine_Ali2018_typical_valuea.md) |
| ka | kabs | 0.589 | 1/h | 0.589 1/h | pediatric and adult patients with uncomplicated malaria |  | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ali_2018_typical_valuea](drugs/drug_amodiaquine/Amodiaquine_Ali2018_typical_valuea.md) |
| ka | kabs | 0.589 | 1/h | 0.589 1/h | pregnant women with uncomplicated Plasmodium falciparum malaria | 771 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ding_2024_nonmem_estimates_rse_a](drugs/drug_amodiaquine/Amodiaquine_Ding2024_nonmem_estimates_rse_a.md) |
| ka | kabs | 2.85 | 1/h | 2.85 1/h | African children under 5 years receiving seasonal malaria chemoprevention | 136 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ding_2020_reference](drugs/drug_amodiaquine/Amodiaquine_Ding2020_reference.md) |
| F | Fab | 1 |  | 1 | pediatric and adult patients with uncomplicated malaria |  | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ali_2018_typical_valuea](drugs/drug_amodiaquine/Amodiaquine_Ali2018_typical_valuea.md) |
| F | Fab | 1 |  | 100 | pregnant women with uncomplicated Plasmodium falciparum malaria | 771 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ding_2024_nonmem_estimates_rse_a](drugs/drug_amodiaquine/Amodiaquine_Ding2024_nonmem_estimates_rse_a.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Ali_2018_bsv_or_bova_b](drugs/drug_amodiaquine/Amodiaquine_Ali2018_bsv_or_bova_b.md) | — | parent + metabolite (no model) | 1 | Ali AM et al., Population Pharmacokinetics of the Anti…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.02193-17](https://doi.org/10.1128/AAC.02193-17) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>caveat: a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per…</sub> | [↳ typical_valuea](drugs/drug_amodiaquine/Amodiaquine_Ali2018_typical_valuea.md) | model (no simulator) | 1-compartment, oral | 15 (+2 cov.) |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub> | [Ding_2024_nonmem_population_estimates_rse_a](drugs/drug_amodiaquine/Amodiaquine_Ding2024_nonmem_population_estimates_rse_a.md) | held back | 1-compartment, oral | 9 | Ding J et al., Population pharmacokinetics of amodiaqu…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>caveat: a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per…</sub> | [↳ nonmem_estimates_rse_a](drugs/drug_amodiaquine/Amodiaquine_Ding2024_nonmem_estimates_rse_a.md) | model (no simulator) | 1-compartment, oral | 10 (+1 cov.) |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ding_2020_reference](drugs/drug_amodiaquine/Amodiaquine_Ding2020_reference.md) | model (no simulator) | 1-compartment, oral | 12 | Ding J et al., Adherence and Population Pharmacokineti…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1707](https://doi.org/10.1002/cpt.1707) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Stepniewska_2009_reference](drugs/drug_amodiaquine/Amodiaquine_Stepniewska2009_reference.md) | — | general linear (no model) | 8 (+2 cov.) | Stepniewska K et al., Population pharmacokinetics of artesuna…, Malaria journal (2009) | [10.1186/1475-2875-8-200](https://doi.org/10.1186/1475-2875-8-200) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Boonyasuppayakorn_2014_CC50](drugs/drug_amodiaquine/pd_Boonyasuppayakorn_2014_CC50.md) | Cell viability (cytotoxicity, CC50) ← amodiaquine · direct Emax (saturable) effect | — | Boonyasuppayakorn S et al., Amodiaquine, an antimalarial drug, inhi…, Antiviral research (2014) | [10.1016/j.antiviral.2014.03.014](https://doi.org/10.1016/j.antiviral.2014.03.014) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Boonyasuppayakorn_2014_DENV2_replicon](drugs/drug_amodiaquine/pd_Boonyasuppayakorn_2014_DENV2_replicon.md) | DENV2 replicon replication (Rluc activity, % inhibition) ← amodiaquine · direct Emax (saturable) effect | — | Boonyasuppayakorn S et al., Amodiaquine, an antimalarial drug, inhi…, Antiviral research (2014) | [10.1016/j.antiviral.2014.03.014](https://doi.org/10.1016/j.antiviral.2014.03.014) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Boonyasuppayakorn_2014_DENV4_replicon](drugs/drug_amodiaquine/pd_Boonyasuppayakorn_2014_DENV4_replicon.md) | DENV4 replicon replication (Rluc activity, % inhibition) ← amodiaquine · direct Emax (saturable) effect | — | Boonyasuppayakorn S et al., Amodiaquine, an antimalarial drug, inhi…, Antiviral research (2014) | [10.1016/j.antiviral.2014.03.014](https://doi.org/10.1016/j.antiviral.2014.03.014) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Boonyasuppayakorn_2014_PFU_ml](drugs/drug_amodiaquine/pd_Boonyasuppayakorn_2014_PFU_ml.md) | DENV2 infectivity (virus titer by plaque assay) ← amodiaquine · direct Emax (saturable) effect | — | Boonyasuppayakorn S et al., Amodiaquine, an antimalarial drug, inhi…, Antiviral research (2014) | [10.1016/j.antiviral.2014.03.014](https://doi.org/10.1016/j.antiviral.2014.03.014) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Boonyasuppayakorn_2014_WNV_replicon](drugs/drug_amodiaquine/pd_Boonyasuppayakorn_2014_WNV_replicon.md) | WNV replicon replication (Rluc activity, % inhibition) ← amodiaquine · direct Emax (saturable) effect | — | Boonyasuppayakorn S et al., Amodiaquine, an antimalarial drug, inhi…, Antiviral research (2014) | [10.1016/j.antiviral.2014.03.014](https://doi.org/10.1016/j.antiviral.2014.03.014) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Gendrot_2020_SARS_CoV_2_replication_viral_RNA_by_RT_PCR](drugs/drug_amodiaquine/pd_Gendrot_2020_SARS_CoV_2_replication_viral_RNA_by_RT_PCR.md) | SARS-CoV-2 replication (viral RNA by RT-PCR) ← desethylamodiaquine · direct sigmoid Emax (Hill) effect | — | Gendrot M et al., Antimalarial drugs inhibit the replicat…, Travel medicine and infecti… (2020) | [10.1016/j.tmaid.2020.101873](https://doi.org/10.1016/j.tmaid.2020.101873) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gerstner_2003_inhibition_of_schizont_maturation](drugs/drug_amodiaquine/pd_Gerstner_2003_inhibition_of_schizont_maturation.md) | inhibition of schizont maturation ← amodiaquine · direct log-linear effect | — | Gerstner U et al., Comparison of the in-vitro activity of…, Wiener klinische Wochenschr… (2003) | — |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bocci_2020_CPE](drugs/drug_amodiaquine/pd_Bocci_2020_CPE.md) | SARS-CoV-2 cytopathic effect (Vero E6 cell viability, dose–response) ← amodiaquine · direct sigmoid Emax (Hill) effect | model (no simulator) | Bocci G et al., Virtual and, ACS pharmacology & translat… (2020) | [10.1021/acsptsci.0c00131](https://doi.org/10.1021/acsptsci.0c00131) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tarning_2012_recurrent_malaria_infections](drugs/drug_amodiaquine/pd_Tarning_2012_recurrent_malaria_infections.md) | recurrent malaria infections ← desethylamodiaquine · time-to-event model | — | Tarning J et al., Population pharmacokinetic and pharmaco…, Antimicrobial agents and ch… (2012) | [10.1128/AAC.01242-12](https://doi.org/10.1128/AAC.01242-12) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:51 | 10:47 | 0/1/5 | 3/0/2 | 0/0/0 | 536,917/36,503 | ollama / glm-5.3-flash | 13 | 0/13 | 13/0 | 0 |

## Coverage

- **PubMed hits:** 52 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tarning_2012.pdf` | Tarning J et al., Population pharmacokinetic and pharmaco…, Antimicrobial agents and ch… (2012) | popPK | 10 | [10.1128/AAC.01242-12](https://doi.org/10.1128/AAC.01242-12) | [22926572](https://pubmed.ncbi.nlm.nih.gov/22926572) | Population PK model of amodiaquine and desethylamodiaquine in pregnant women, but numeric parameter values are not present in the provided evidence (likely in tables/figures not included). |

<sub>queue written 2026-10-07T05:41:27.709533+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abla_2024 | relevant | 4 | 3 | PBPK modeling of amodiaquine and its metabolite DEAQ with predicted concentration values present, but the actual PK parameters (CL, V, ka) live in a previously published compound file (ref 29) not included here. |
| popPK | Baba_2023 | irrelevant | 0 | 0 | In-vitro antiviral study of amodiaquine derivatives; PK mentioned only qualitatively (poor bioavailability in mice) with no numeric disposition parameters. |
| popPK | Bocci_2020 | irrelevant | 2 | 1 | This is an in vitro/virtual screening COVID-19 drug-repositioning study; amodiaquine PK values (half-life ~20 h, clearance) appear only as brief literature citations, not a PK study of amodiaquine itself. |
| popPK | Boonyasuppayakorn_2014 | irrelevant | 0 | 0 | This is an in-vitro antiviral (dengue) efficacy study of amodiaquine with EC50/CC50 values, not a PK study reporting disposition parameters. |
| popPK | Chan_2023 | relevant | 8 | 2 | A population PK model of amodiaquine and desethylamodiaquine was developed in NONMEM, but the numeric parameter estimates are in Table S1/supplementary material not provided in the evidence. |
| popPK | Ding_2026 | relevant | 9 | 2 | A population PK model of amodiaquine and its metabolite desethylamodiaquine was developed in malaria patients, but the numeric amodiaquine parameter estimates (CL, V, ka) are not present in the provided evidence — they appear to live in tables/supplementary material not included. |
| popPK | Gendrot_2020 | irrelevant | 2 | 3 | In vitro SARS-CoV-2 study; only literature-derived Cmax and t1/2 for desethylamodiaquine (metabolite) are cited, no PK model or disposition parameters for amodiaquine itself. |
| popPK | Gerstner_2003 | irrelevant | 0 | 0 | In-vitro susceptibility study of Plasmodium falciparum isolates; no PK disposition parameters for amodiaquine are reported. |
| popPK | Han_2018 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study with no pharmacokinetic parameters for amodiaquine. |
| popPK | Kawuma_2021 | irrelevant | 2 | 0 | Amodiaquine is only a co-administered interaction probe; the PK model and all numeric parameters are for dolutegravir, not amodiaquine. |
| popPK | Kazakova_2024 | irrelevant | 0 | 0 | Amodiaquine is only a positive control in an in-vitro antiviral assay; no PK parameters reported. |
| popPK | Lamsfus_2024 | irrelevant | 0 | 0 | The paper models HRP2 antigen clearance, not amodiaquine PK; amodiaquine is only the co-administered treatment and no amodiaquine disposition parameters are reported. |
| popPK | Persoons_2021 | irrelevant | 0 | 0 | In-vitro antiviral study of quinoline analogues including amodiaquine; no PK parameters (CL, V, half-life, or PK model) for amodiaquine are reported. |
| popPK | Tarning_2012 | relevant | 10 | 3 | Population PK model of amodiaquine and desethylamodiaquine in pregnant women, but numeric parameter values are not present in the provided evidence (likely in tables/figures not included). |
| popPK | de_2018 | irrelevant | 0 | 0 | This is a population PK study of sulfadoxine and pyrimethamine; amodiaquine is only mentioned as a co-administered drug in SMC, with no amodiaquine PK parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 05:41 UTC</sub>

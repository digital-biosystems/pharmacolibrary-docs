<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;amodiaquine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amodiaquine_Ding2020_reference&quot;,&quot;label&quot;:&quot;Ding_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amodiaquine/Amodiaquine_Ding2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Bocci_2020_CPE&quot;,&quot;label&quot;:&quot;Bocci_2020 \u00b7 CPE&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_amodiaquine/pd_Bocci_2020_CPE.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# amodiaquine

- **generic name:** amodiaquine
- **ATC codes:** `P01BA06`, `P01BF03`
- **DrugBank:** [DB00613](https://go.drugbank.com/drugs/DB00613) · **PubChem:** [CID 2165](https://pubchem.ncbi.nlm.nih.gov/compound/2165)
- **molar mass:** 355.861 g/mol (C20H22ClN3O) — DrugBank
- **groups:** approved, investigational

## About

Amodiaquine is an antimalarial drug used to treat malaria. It is given as oral tablets. The medication is widely available in Africa.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q239569](https://www.wikidata.org/wiki/Q239569), [Wikipedia](https://en.wikipedia.org/wiki/Amodiaquine?oldid=1336589070) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| amodiaquine | parent | 355.861 | C20H22ClN3O | DrugBank | [2165](https://pubchem.ncbi.nlm.nih.gov/compound/2165) | Ali_2018, Ding_2020, Ding_2024, Stepniewska_2009 |
| desethylamodiaquine | metabolite | 327.812 | C18H18ClN3O | PubChem | [122068](https://pubchem.ncbi.nlm.nih.gov/compound/122068) | Ali_2018, Ding_2020, Ding_2024, Stepniewska_2009 |
| dihydroartemisinin | metabolite | 284.9 | — | the paper | — | Stepniewska_2009 |

## Start here

> **Ding_2020_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> African children under 5 years receiving seasonal malaria chemoprevention, n = 136. [Run it in the simulator](drugs/drug_amodiaquine/Amodiaquine_Ding2020_reference.md?tab=Simulation) · [record](drugs/drug_amodiaquine/Amodiaquine_Ding2020_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Ali_2018_bsv_or_bova_b](drugs/drug_amodiaquine/Amodiaquine_Ali2018_bsv_or_bova_b.md) | — | parent + metabolite (no model) | 1 | Ali AM et al., Population Pharmacokinetics of the Anti…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.02193-17](https://doi.org/10.1128/AAC.02193-17) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q81 — no SI value to build from</sub> | [↳ typical_valuea](drugs/drug_amodiaquine/Amodiaquine_Ali2018_typical_valuea.md) | — | parent + metabolite (no model) | 15 (+2 cov.) |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q81 — no SI value to build from</sub> | [Ding_2024_nonmem_estimates_rse_a](drugs/drug_amodiaquine/Amodiaquine_Ding2024_nonmem_estimates_rse_a.md) | — | parent + metabolite (no model) | 10 (+1 cov.) | Ding J et al., Population pharmacokinetics of amodiaqu…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q81 — no SI value to build from</sub> | [↳ nonmem_population_estimates_rse_a](drugs/drug_amodiaquine/Amodiaquine_Ding2024_nonmem_population_estimates_rse_a.md) | — | parent + metabolite (no model) | 9 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ding_2020_reference](drugs/drug_amodiaquine/Amodiaquine_Ding2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 12 | Ding J et al., Adherence and Population Pharmacokineti…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1707](https://doi.org/10.1002/cpt.1707) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Stepniewska_2009_reference](drugs/drug_amodiaquine/Amodiaquine_Stepniewska2009_reference.md) | — | general linear (no model) | 8 (+2 cov.) | Stepniewska K et al., Population pharmacokinetics of artesuna…, Malaria journal (2009) | [10.1186/1475-2875-8-200](https://doi.org/10.1186/1475-2875-8-200) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Gendrot_2020_SARS_CoV_2_replication_viral_RNA_by_RT_PCR](drugs/drug_amodiaquine/pd_Gendrot_2020_SARS_CoV_2_replication_viral_RNA_by_RT_PCR.md) | SARS-CoV-2 replication (viral RNA by RT-PCR) ← desethylamodiaquine · direct sigmoid Emax (Hill) effect | — | Gendrot M et al., Antimalarial drugs inhibit the replicat…, Travel medicine and infecti… (2020) | [10.1016/j.tmaid.2020.101873](https://doi.org/10.1016/j.tmaid.2020.101873) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Persoons_2021_CC50](drugs/drug_amodiaquine/pd_Persoons_2021_CC50.md) | cytotoxicity ← amodiaquine · inhibition effect | — | Persoons L et al., Broad spectrum anti-coronavirus activit…, Antiviral research (2021) | [10.1016/j.antiviral.2021.105127](https://doi.org/10.1016/j.antiviral.2021.105127) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Persoons_2021_EC50](drugs/drug_amodiaquine/pd_Persoons_2021_EC50.md) | antiviral activity ← amodiaquine · inhibition effect | — | Persoons L et al., Broad spectrum anti-coronavirus activit…, Antiviral research (2021) | [10.1016/j.antiviral.2021.105127](https://doi.org/10.1016/j.antiviral.2021.105127) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bocci_2020_CPE](drugs/drug_amodiaquine/pd_Bocci_2020_CPE.md) | SARS-CoV-2 cytopathic effect (Vero E6 cell viability, dose–response) ← amodiaquine · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Bocci G et al., Virtual and, ACS pharmacology & translat… (2020) | [10.1021/acsptsci.0c00131](https://doi.org/10.1021/acsptsci.0c00131) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 17:57 | 0:04 | 5/1/0 | 4/0/0 | 0/0/0 | 3,815/159 | einfracz / qwen3.8-27b | 13 | 0/13 | 13/0 | 0 |

## Coverage

- **PubMed hits:** 52 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 0  ·  needs review 4  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tarning_2012.pdf` | Tarning J et al., Population pharmacokinetic and pharmaco…, Antimicrobial agents and ch… (2012) | popPK | 10 | [10.1128/AAC.01242-12](https://doi.org/10.1128/AAC.01242-12) | [22926572](https://pubmed.ncbi.nlm.nih.gov/22926572) | The study reports a population PK model for amodiaquine, but the extracted evidence contains only abstract text without the specific numeric parameter values (CL, V, etc.). |

<sub>queue written 2026-11-23 17:57 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abla_2024 | relevant | 4 | 3 | PBPK modeling of amodiaquine and its metabolite DEAQ with predicted concentration values present, but the actual PK parameters (CL, V, ka) live in a previously published compound file (ref 29) not included here. |
| popPK | Baba_2023 | irrelevant | 0 | 0 | The study is an in-vitro antiviral screening of amodiaquine derivatives against SFTSV and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for amodiaquine. |
| PGx | Baba_2023 | not_relevant | 0 | 0 | The paper investigates the antiviral activity and pharmacokinetics of amodiaquine derivatives against SFTSV but does not report any pharmacogenomic effects or genotype-dependent PK/PD parameters. |
| popPK | Bocci_2020 | irrelevant | 2 | 1 | This is an in vitro/virtual screening COVID-19 drug-repositioning study; amodiaquine PK values (half-life ~20 h, clearance) appear only as brief literature citations, not a PK study of amodiaquine itself. |
| popPK | Boonyasuppayakorn_2014 | irrelevant | 0 | 0 | The study focuses on the antiviral mechanism and efficacy (EC50) of amodiaquine against dengue virus in vitro, not on its pharmacokinetic disposition parameters (CL, V, t1/2). |
| PGx | Boonyasuppayakorn_2014 | not_relevant | 0 | 0 | The paper investigates the antiviral efficacy of amodiaquine against dengue virus in cell lines and does not report any pharmacogenomic effects or human PK/PD parameters. |
| popPK | Chan_2023 | relevant | 8 | 2 | A population PK model of amodiaquine and desethylamodiaquine was developed in NONMEM, but the numeric parameter estimates are in Table S1/supplementary material not provided in the evidence. |
| popPK | Ding_2026 | relevant | 9 | 2 | A population PK model of amodiaquine and its metabolite desethylamodiaquine was developed in malaria patients, but the numeric amodiaquine parameter estimates (CL, V, ka) are not present in the provided evidence — they appear to live in tables/supplementary material not included. |
| popPK | Gendrot_2020 | irrelevant | 2 | 3 | In vitro SARS-CoV-2 study; only literature-derived Cmax and t1/2 for desethylamodiaquine (metabolite) are cited, no PK model or disposition parameters for amodiaquine itself. |
| popPK | Gerstner_2003 | irrelevant | 0 | 0 | The study reports in-vitro antimalarial activity (EC50/EC90) rather than pharmacokinetic disposition parameters. |
| PGx | Gerstner_2003 | not_relevant | 0 | 0 | The study evaluates the in-vitro antimalarial activity of amodiaquine and its metabolite against parasite isolates, focusing on parasite resistance profiles rather than how host genetic variants affect drug pharmacokinetics or pharmacodynamics. |
| popPK | Han_2018 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study of amodiaquine against Zika virus with no pharmacokinetic data. |
| PGx | Han_2018 | not_relevant | 0 | 0 | The paper describes the antiviral activity of amodiaquine against Zika virus in cell culture, containing no information on pharmacogenomics, gene variants, or PK/PD parameters. |
| popPK | Kawuma_2021 | irrelevant | 1 | 0 | The study investigates the population pharmacokinetics of dolutegravir, with amodiaquine acting only as a co-administered drug, and no PK parameters for amodiaquine itself are reported. |
| PGx | Kawuma_2021 | not_relevant | 0 | 0 | The study investigates drug-drug interactions of dolutegravir and does not report any pharmacogenomic effects based on gene variants or genotypes. |
| popPK | Kazakova_2024 | irrelevant | 0 | 0 | The paper is a virology study using amodiaquine only as a positive control for antiviral activity (IC50/EC50), not a pharmacokinetic study. |
| PGx | Kazakova_2024 | not_relevant | 0 | 0 | The paper studies new triterpenoids as antivirals and uses amodiaquine only as a positive control for antiviral activity; it does not report any pharmacogenomic effects on amodiaquine PK/PD parameters. |
| popPK | Lamsfus_2024 | irrelevant | 0 | 0 | The paper models HRP2 antigen clearance, not amodiaquine PK; amodiaquine is only the co-administered treatment and no amodiaquine disposition parameters are reported. |
| popPK | Persoons_2021 | irrelevant | 0 | 0 | The study reports in vitro antiviral activity (EC50/CC50) against coronaviruses, not pharmacokinetic disposition parameters for amodiaquine. |
| PGx | Persoons_2021 | not_relevant | 0 | 0 | The paper reports in vitro anti-coronavirus activity of quinolines, not pharmacogenomic effects on amodiaquine's PK/PD. |
| popPK | Tarning_2012 | relevant | 10 | 0 | The study reports a population PK model for amodiaquine, but the extracted evidence contains only abstract text without the specific numeric parameter values (CL, V, etc.). |
| PGx | Tarning_2012 | not_relevant | 0 | 0 | The study investigates the impact of pregnancy and physiological factors (weight, age) on PK/PD, but does not analyze any gene variants or genotypes. |
| popPK | de_2018 | irrelevant | 0 | 0 | This is a population PK study of sulfadoxine and pyrimethamine; amodiaquine is only mentioned as a co-administered drug in SMC, with no amodiaquine PK parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamodiaquine%5D&body=Drug%3A%20amodiaquine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amodiaquine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 05:41 UTC</sub>

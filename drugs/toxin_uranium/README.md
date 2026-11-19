<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Uranium&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Uranium_Morris1990_reference&quot;,&quot;label&quot;:&quot;Morris_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_uranium/Uranium_Morris1990_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# Uranium

- **generic name:** Uranium
- **T3DB:** [T3D3992](http://www.t3db.ca/toxins/T3D3992) · **PubChem:** [CID 60101674](https://pubchem.ncbi.nlm.nih.gov/compound/60101674)

## About

Uranium is a silvery-white metallic chemical element in the actinide series of the periodic table, with symbol U and atomic number 92. A uranium atom has 92 protons and 92 electrons, of which 6 are valence electrons. Uranium is weakly radioactive because all its isotopes are unstable (with half-lives of the 6 naturally known isotopes, U-233 - U-238, varying between 69 years and 4л_ billion years). …

- **Category:** Industrial/Workplace Toxin, Pollutant, Airborne Pollutant, Food Toxin, Natural Toxin
- **Carcinogenicity:** IARC group 1, carcinogenic to humans.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3992">T3DB T3D3992</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| uranium | parent | 29991.6 | U126 | PubChem | [60101674](https://pubchem.ncbi.nlm.nih.gov/compound/60101674) | Alonzo_2024, Morris_1990, Scheibener_2021 |

## Start here

> **Morris_1990_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> male Fischer-344 rats, n = 46. [Run it in the simulator](drugs/toxin_uranium/Uranium_Morris1990_reference.md?tab=Simulation) · [record](drugs/toxin_uranium/Uranium_Morris1990_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Morris_1990_reference](drugs/toxin_uranium/Uranium_Morris1990_reference.md) | ▶ model + simulator | retention, 1 pool | 2 | Morris KJ et al., Long-term clearance of inhaled UO2 part…, Health physics (1990) | [10.1097/00004032-199004000-00010](https://doi.org/10.1097/00004032-199004000-00010) |
| <span class="pk-rf" hidden data-species="other animal" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Alonzo_2024_reference](drugs/toxin_uranium/Uranium_Alonzo2024_reference.md) | — | 1-compartment (no model) | 3 (+1 cov.) | Alonzo F et al., A toxicokinetic-toxicodynamic model wit…, The Science of the total en… (2024) | [10.1016/j.scitotenv.2023.169845](https://doi.org/10.1016/j.scitotenv.2023.169845) |
| <span class="pk-rf" hidden data-species="other animal" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Scheibener_2021_reference](drugs/toxin_uranium/Uranium_Scheibener2021_reference.md) | — | 1-compartment (no model) | 2 | Scheibener S et al., Uranium accumulation and toxicokinetics…, Aquatic toxicology (Amsterd… (2021) | [10.1016/j.aquatox.2021.105836](https://doi.org/10.1016/j.aquatox.2021.105836) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 16:30 | 35:52 | 1/2/0 | 0/0/0 | 0/0/0 | 995,794/81,349 | ollama / glm-5.3-flash | 26 | 7/15 | 25/1 | 0 |

## Coverage

- **PubMed hits:** 355 matched, 136 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morris_1990.pdf` | Morris KJ et al., Long-term clearance of inhaled UO2 part…, Health physics (1990) | popPK | 10 | [10.1097/00004032-199004000-00010](https://doi.org/10.1097/00004032-199004000-00010) | [2323929](https://pubmed.ncbi.nlm.nih.gov/2323929) | Directly reports numeric clearance rate constant (2.8×10⁻³ d⁻¹) and lung clearance half-time (247 d) for inhaled UO2 in rats, with body burden distribution data, all present in the evidence. |
| `Scheibener_2021.pdf` | Scheibener S et al., Uranium accumulation and toxicokinetics…, Aquatic toxicology (Amsterd… (2021) | popPK | 10 | [10.1016/j.aquatox.2021.105836](https://doi.org/10.1016/j.aquatox.2021.105836) | [33932687](https://pubmed.ncbi.nlm.nih.gov/33932687) | Quantitative uptake, depuration rate constants and BCFs for uranium measured in Daphnia magna are given directly in the abstract/evidence. |
| `Margerit_2016.pdf` | Margerit A et al., Dynamic energy-based modeling of uraniu…, Chemosphere (2016) | popPK | 8 | [10.1016/j.chemosphere.2015.12.029](https://doi.org/10.1016/j.chemosphere.2015.12.029) | [26741545](https://pubmed.ncbi.nlm.nih.gov/26741545) | DEBtox model with toxicokinetic parameters for uranium in C. elegans, but the abstract shows no numeric values; parameter estimates likely in tables/figures not included here. |
| `Cooley_2000_2.pdf` | Cooley HM et al., Accumulation and distribution of dietar…, Aquatic toxicology (Amsterd… (2000) | popPK | 6 | [10.1016/s0166-445x(99)00058-2](https://doi.org/10.1016/s0166-445x(99)00058-2) | [10794832](https://pubmed.ncbi.nlm.nih.gov/10794832) | Uranium accumulation/distribution over dose and time in fish tissues is uranium's own disposition, but the numeric values (tissue burdens, rate/accumulation kinetics) appear not to be included in the evidence, only dose and day descriptions. |
| `Zhu_2022.pdf` | Zhu Y et al., Accurate biodetection of trace uranium…, Biosensors & bioelectronics (2022) | popPK | 6 | [10.1016/j.bios.2022.114489](https://doi.org/10.1016/j.bios.2022.114489) | [35961129](https://pubmed.ncbi.nlm.nih.gov/35961129) | Rat oral uranyl model with toxicokinetic time course ( Tmax 30 min, detectable to 48 h) fits the topic, but full numeric concentration–time values appear to reside in figures not provided. |
| `Lang_1994.pdf` | Lang S et al., Distribution and short-term effects of…, Environmental research (1994) | popPK | 5 | [10.1006/enrs.1994.1025](https://doi.org/10.1006/enrs.1994.1025) | [8162878](https://pubmed.ncbi.nlm.nih.gov/8162878) | Rat study with quantitative retention/clearance and whole-body burden time course of UO2 particles given in the abstract (21% GI clearance, 83% lung retention at 3 months), though fission-product kinetics may partly be the focus. |
| `Teien_2025.pdf` | Teien HC et al., Uptake and toxicity of waterborne urani…, The Science of the total en… (2025) | popPK | 5 | [10.1016/j.scitotenv.2025.180733](https://doi.org/10.1016/j.scitotenv.2025.180733) | [41151174](https://pubmed.ncbi.nlm.nih.gov/41151174) | Reports uranium uptake/accumulation time course (continuous uptake in eggs over 90 days) and tissue concentration data in Atlantic salmon, but the numeric values are mostly LC50s and concentration correlations with curves/parameters likely in figures rather than the shown evidence. |

<sub>queue written 2026-11-14 16:19 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alkufi_2024 | irrelevant | 0 | 0 | This is a radiological exposure measurement study of gamma radioactivity in cement samples, with no toxicokinetic parameters for uranium. |
| popPK | Anderson_2021 | irrelevant | 0 | 0 | Epidemiological dose-response mortality study with no kinetic parameters (no half-life, rate constants, clearance, or partition data) for uranium. |
| popPK | Anderson_2022 | irrelevant | 0 | 0 | This is an environmental biomonitoring study of U concentrations in lichens near a former uranium mine; it contains no kinetic parameters (half-lives, rate constants, partition coefficients, PBPK models) for uranium in humans or animals. |
| popPK | Archer_1976 | irrelevant | 0 | 0 | An epidemiological mortality study of uranium miners with no toxicokinetic parameters or numeric kinetic values. |
| popPK | Archer_1981 | irrelevant | 0 | 0 | Epidemiological mortality/exposure-response study of uranium miners with no kinetic parameters. |
| popPK | Assunta_2008 | irrelevant | 0 | 2 | Environmental biomonitoring study measuring uranium concentrations in mussels; no kinetic parameters (half-life, rates, absorption, etc.), just exposure concentrations and dose estimates. |
| popPK | Au_2001 | irrelevant | 0 | 0 | No kinetic parameters for uranium; only mention of exposed populations in a DNA repair/susceptibility context with no numeric values. |
| popPK | Bakhmutsky_2011 | irrelevant | 0 | 0 | Epidemiological genotoxicity study with urine uranium concentrations only as exposure grouping; no kinetic parameters reported. |
| popPK | Barbosa_2023 | irrelevant | 0 | 3 | This is a human biomonitoring exposure study reporting urinary concentration percentiles only, with no kinetic parameters (half-life, clearance, rates, or model) for uranium. |
| popPK | Berhane_2008 | irrelevant | 1 | 1 | Epidemiological modeling of lung cancer latency in uranium miners with no kinetic parameters (no half-lives, rate constants, or retention values); any parameter values live in the model description, not provided numerically. |
| popPK | Blanchard_1971 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| popPK | Bocca_2010 | irrelevant | 1 | 1 | This is a human biomonitoring/exposure study reporting serum concentration reference values for uranium, with no kinetic parameters (no half-life, clearance, rate constants, or disposition model); numeric RV values exist in tables but concentration data alone is not toxicokinetic. |
| popPK | Bolognesi_2016 | irrelevant | 1 | 2 | This is a biomonitoring/genotoxicity study measuring uranium concentrations in urine/serum, with no kinetic parameter (half-life, rate constant, clearance, etc.); numeric uranium values are only alluded to, not tabulated in the evidence. |
| popPK | Byrnes_2023_2 | irrelevant | 2 | 2 | Imaging/biodistribution-toxicity study in Daphnia magna with no quantitative rate constants, half-lives, clearances or partition coefficients for uranium; the whole-body burden numbers live in supplementary Figure S3 not provided. |
| popPK | Catán_2017 | irrelevant | 0 | 2 | Concentrations of uranium and other elements measured in penguin feathers (bioindicator/exposure study) with no toxicokinetic parameters; uranium data are qualitative (below 0.1 mg/kg). |
| popPK | Chambers_2010 | irrelevant | 0 | 0 | This is an exposure/dosimetry overview of thoron decay products; uranium appears only as the decay-series source, with no kinetic parameters for uranium and no numeric values present. |
| popPK | Cirtiu_2022 | irrelevant | 1 | 3 | This is a human biomonitoring/exposure survey reporting urinary uranium concentrations only, with no kinetic parameter (half-life, clearance, rate constant, partition coefficient) and no kinetic model. |
| popPK | Cooley_2000 | irrelevant | 2 | 1 | Toxicology/outcome study of dietary uranium in fish; kinetic parameters (tissue accumulation data) reside in the companion paper, not here, and no numeric kinetic values are present. |
| popPK | Cooley_2000_2 | relevant | 6 | 3 | Uranium accumulation/distribution over dose and time in fish tissues is uranium's own disposition, but the numeric values (tissue burdens, rate/accumulation kinetics) appear not to be included in the evidence, only dose and day descriptions. |
| popPK | DeBono_2026 | irrelevant | 0 | 0 | Epidemiological silica-lung cancer study with no uranium kinetic parameters; uranium appears only as a co-exposure adjustment. |
| popPK | De_2022 | irrelevant | 0 | 0 | Epidemiological cohort study of soldiers with biomonitoring and SMR/SHR outcomes; no kinetic parameters for uranium are reported anywhere. |
| popPK | Dereumeaux_2016 | irrelevant | 0 | 0 | A human biomonitoring exposure study with no kinetic parameters; uranium was not even quantified, only noted as excluded. |
| popPK | Dorsey_2009 | irrelevant | 1 | 1 | This is a human biomonitoring/surveillance study reporting urine uranium concentrations only; no kinetic parameter (half-life, rate constant, clearance, compartment model) is measured — the only kinetic mention is a cited ATSDR clearance statement with no own parameter values. |
| popPK | Dumit_2025 | irrelevant | 1 | 3 | The biokinetic model and parameters concern plutonium (and Pu-DTPA), with uranium only mentioned as part of the accident mixture and registry name; no uranium kinetic parameters are reported. |
| popPK | Duong_2021 | irrelevant | 1 | 1 | Soil-to-plant transfer factors are an environmental/biomonitoring measure, not toxicokinetic parameters of uranium disposition in animals or humans. |
| popPK | Dupree_1995 | irrelevant | 0 | 3 | This is an epidemiological mortality case-control study with cumulative lung dose estimates but no toxicokinetic parameters (half-life, clearance, absorption or retention constants) for uranium. |
| popPK | Edmands_2001 | irrelevant | 1 | 5 | This is a plant uptake/biomonitoring environmental study; uranium concentration patterns in tree rings are reported, but no animal/human kinetic parameters (half-life, clearance, absorption coefficients) are given. |
| popPK | Eidemüller_2012 | irrelevant | 2 | 1 | This is an epidemiological lung-cancer mortality study with carcinogenesis (TSCE) risk models; numeric parameter values reside in Table 1 (not shown) and it reports no uranium toxicokinetic parameters (no half-life, clearance, or disposition of uranium itself). |
| popPK | FISH_1959 | irrelevant | 0 | 0 | no_text gate: only 70 chars of text extracted (&lt; 400) |
| popPK | Faa_2018 | irrelevant | 1 | 0 | A qualitative narrative review of DU health effects; no numeric kinetic parameters of uranium appear in the evidence, and any values would repeat other published work. |
| popPK | Fallahian_2012 | irrelevant | 1 | 1 | This is an epidemiological study of plutonium workers with no kinetic parameters for uranium; uranium appears only as employment context at uranium mining/milling sites, and no numeric toxicokinetic data are present. |
| popPK | Feng_2023 | irrelevant | 0 | 0 | Environmental microbiology study of uranium tailings soil with no kinetic parameters of uranium in any organism. |
| popPK | Geier_2012 | irrelevant | 0 | 0 | This is an ASD severity correlation study using hair metal concentrations (mostly mercury); uranium appears only as one of many measured hair analytes with no kinetic parameters and its numeric values are only in Table 2, not provided. |
| popPK | Gilliland_2000 | irrelevant | 0 | 0 | This is an epidemiological lung cancer risk study of radon exposure in uranium miners with no toxicokinetic parameters for uranium itself. |
| popPK | Hoffmann_2018 | irrelevant | 0 | 0 | An epidemiological exposure-measurement-error simulation based on a uranium miner cohort; no toxicokinetic parameters of uranium (radon is also the actual exposure here), no numeric kinetic values present. |
| popPK | Holm_2005 | irrelevant | 0 | 0 | Subject substance is selenium; uranium appears only as co-occurrence context, with no kinetic parameters. |
| popPK | Hoover_2020 | irrelevant | 2 | 4 | Exposure/epidemiological study reporting urine concentration levels only, with no kinetic parameters (half-life, clearance, rate constants), and numeric median values partly referenced but not given as a kinetic parameter set. |
| popPK | Hornung_1987 | irrelevant | 0 | 0 | Epidemiological risk assessment of lung cancer in uranium miners with no kinetic parameters of uranium. |
| popPK | Hornung_1995 | irrelevant | 0 | 0 | This is an epidemiological exposure-response (lung cancer risk) study of radon progeny in uranium miners, not uranium toxicokinetics; no kinetic parameters (half-life, clearance, rates) for the substance uranium are reported. |
| popPK | Hornung_1998 | irrelevant | 0 | 0 | Epidemiological lung cancer risk study in uranium miners with no toxicokinetic parameters for uranium; exposure is to radon decay products, not uranium kinetics. |
| popPK | Igarashi_1985 | irrelevant | 2 | 6 | The paper reports static uranium tissue concentrations and a total body burden estimate, but no kinetic parameter such as a half-life, rate constant, or time-course retention. |
| popPK | Karpas_1998 | irrelevant | 1 | 1 | Exposure biomonitoring of uranium in urine with creatinine normalization correlations; no half-lives, rate constants, or disposition model parameters. |
| popPK | Karpas_2001 | irrelevant | 1 | 2 | An exposure-bioassay commentary proposing hair analysis for internal dosimetry; no kinetic parameters of uranium and no numeric values reported. |
| popPK | Kelly-Reif_2022 | irrelevant | 0 | 0 | Epidemiological mortality study of uranium miners with risk associations (SMR, ERR) but no kinetic parameters. |
| popPK | Kelly-Reif_2023 | irrelevant | 0 | 0 | This is an epidemiological dose-response study of radon progeny and lung cancer in uranium miners; uranium is only the employer context (the actual subject is radon) and no toxicokinetic parameter of any kind is reported. |
| popPK | Kreuzer_2008 | irrelevant | 0 | 0 | Epidemiological cohort study of radon exposure and cancer risk; uranium appears only as exposure setting, no toxicokinetic parameters. |
| popPK | Kreuzer_2015 | irrelevant | 0 | 0 | Epidemiological mortality study with exposure-response risks from radon and gamma, no kinetic parameters for uranium itself. |
| popPK | Lang_1994 | relevant | 5 | 4 | Rat study with quantitative retention/clearance and whole-body burden time course of UO2 particles given in the abstract (21% GI clearance, 83% lung retention at 3 months), though fission-product kinetics may partly be the focus. |
| popPK | Langholz_2010 | irrelevant | 0 | 0 | This is a statistical-methods and epidemiological dose-response (ERR/100 WLM for radon and lung cancer) paper in uranium miners; no toxicokinetic parameters of uranium (half-life, clearance, partition coefficients, etc.) are reported. |
| popPK | Lewis_2017 | irrelevant | 0 | 0 | This is a review of mining exposure and health disparities in Native American communities with no quantitative toxicokinetic parameters for uranium. |
| popPK | Margerit_2016 | relevant | 8 | 3 | DEBtox model with toxicokinetic parameters for uranium in C. elegans, but the abstract shows no numeric values; parameter estimates likely in tables/figures not included here. |
| popPK | Martinez-Morata_2023 | irrelevant | 1 | 0 | A narrative review of biomarkers with no numeric toxicokinetic parameters for uranium reported in the evidence. |
| popPK | McDiarmid_2004 | irrelevant | 1 | 3 | This is a human biomonitoring/surveillance study reporting urinary uranium concentrations, not kinetic parameters such as half-life, clearance, rate constants, or a disposition model; values (e.g., 0.05 µg U/g creatinine cut point) appear only as exposure-stratification figures. |
| popPK | McDiarmid_2019 | irrelevant | 2 | 1 | Observational study reporting uranium concentrations across body fluids with no kinetic parameter (half-life, clearance, rate constant, model), only concentration correlations. |
| popPK | Medgyesi_2025 | irrelevant | 0 | 0 | Epidemiologic CKD outcome study with trihalomethanes as the exposure; uranium appears only as a co-exposure component in a water mixture with no kinetic parameters. |
| popPK | Meir_2020 | irrelevant | 1 | 0 | This is a biosensor/analytical detection paper with no kinetic parameters (no half-life, rate constants, clearance, or disposition model) for uranium. |
| popPK | Morais_2022 | irrelevant | 1 | 1 | This is an environmental monitoring and toxicity study measuring uranium concentrations in groundwater with bioassays in molluscs, with no kinetic parameters (half-life, rate constants, partitioning, clearance) for uranium. |
| popPK | Máté_2013 | irrelevant | 0 | 0 | Plant biomonitoring of Po-210/Pb-210 at a uranium mine site with no toxicokinetic parameters for uranium in animals or humans. |
| popPK | Nadar_2021 | irrelevant | 0 | 0 | This is a radiation detection/photon counting study on lung monitoring of uranium; no toxicokinetic parameters (half-life, clearance, retention kinetics) are reported. |
| popPK | Ortiz-Robles_2026 | irrelevant | 1 | 5 | This is a biomonitoring/exposure study measuring hair metal concentrations; no kinetic parameters (half-life, rate constants, clearance, model) are reported—only exposure concentrations and correlations. |
| popPK | Parman_2005 | irrelevant | 0 | 0 | This is a geochemistry paper on helium solubility in olivine; uranium appears only as an isotopic/comparative reference, with no uranium kinetic parameters. |
| popPK | Patnaik_2014 | irrelevant | 1 | 5 | The reported body burdens and doses belong to 226Ra, not uranium itself, and no kinetic parameters (half-life, rate constants, clearance) for uranium are given. |
| popPK | Ponikarova_1989 | irrelevant | 0 | 4 | Population radiation-dose survey measuring uranium concentrations in teeth/bone samples; no kinetic parameters (half-lives, rate constants, clearances, models) are reported, only exposure/dose estimates. |
| popPK | Ratelle_2018 | irrelevant | 0 | 0 | This is a human biomonitoring exposure study reporting contaminant concentrations (uranium only mentioned relative to guidance values), with no kinetic parameters such as half-lives, rate constants, or clearance. |
| popPK | Richardson_2019 | irrelevant | 0 | 0 | Statistical methods paper using uranium-miner lung cancer data only as an illustration; no kinetic parameters for uranium. |
| popPK | Richardson_2026 | irrelevant | 0 | 0 | Epidemiological review of cancer dose-response in uranium workers with no kinetic parameters and no species-level toxicokinetic data. |
| popPK | Rogel_2002 | irrelevant | 0 | 0 | Epidemiological radon lung-cancer risk study of uranium miners with no toxicokinetic parameters and no uranium-kinetic data; radon is the exposure of interest. |
| popPK | Roscoe_1995 | irrelevant | 0 | 0 | Epidemiological mortality study of radon progeny exposure with no kinetic parameters for uranium. |
| popPK | Rossnerova_2017 | irrelevant | 0 | 0 | Biomonitoring/epidemiology review of exposure and biomarkers with no kinetic parameters for uranium. |
| popPK | Rääf_2023 | irrelevant | 2 | 0 | Epidemiological study using bedrock uranium as a radon proxy; no kinetic parameters for uranium, and no numeric toxicokinetic values are present. |
| popPK | Salbu_2019 | irrelevant | 1 | 0 | A review/discussion paper on multiple-stressor radioecology that only mentions uranium qualitatively, with no numeric toxicokinetic parameters. |
| popPK | Salcedo-Bellido_2021 | irrelevant | 0 | 0 | A review of toenail metal concentrations as exposure biomarkers; uranium appears only as epidemiological exposure levels with no kinetic parameters of any kind. |
| popPK | Samet_1990 | irrelevant | 0 | 0 | This is a review of radon lung cancer risk; uranium appears only as a miner cohort descriptor, with no uranium kinetic parameters. |
| PGx | Schneider_2009 | not_relevant | 0 | 0 | Reports CYP1A1/CYP1B1 genotype associations with disease risk only, not PK/PD parameters of uranium. |
| popPK | Schröder_2026 | irrelevant | 2 | 5 | This is an epidemiological study of silica exposure-related lung function decline in uranium miners; uranium is only the cohort setting, silica is the substance, and there are no absorption/elimination/retention or compartment-model kinetic parameters for uranium (thresholds are exposure–response, not toxicokinetic). |
| popPK | Simon_2018 | relevant | 3 | 4 | Reports uranium accumulation time course in zebrafish tissues during exposure/depuration, but numeric values appear to live in figures/tables not provided in the abstract. |
| popPK | Skalny_2021 | irrelevant | 0 | 0 | Narrative review of military metal exposure with no numeric toxicokinetic parameters for uranium. |
| popPK | Smith_2013 | irrelevant | 1 | 0 | A qualitative narrative on chelation therapy for metals including uranium, with no numeric kinetic parameters for uranium; no values in figures or supplementary material either. |
| popPK | Sogl_2012 | irrelevant | 0 | 0 | Epidemiological cohort study of silica–lung cancer in uranium miners; no uranium toxicokinetic parameters, uranium appears only as cohort context. |
| popPK | Spaur_2024 | irrelevant | 0 | 0 | This is an exposure/epidemiological biomarker study reporting urine uranium concentrations and associations, with no kinetic parameters (half-life, clearance, rate constants, partition coefficients, etc.); the quantitative values present are exposure concentrations, not toxicokinetic parameters. |
| popPK | Srám_1993 | irrelevant | 0 | 0 | Biomonitoring/cytogenetic study of uranium miners with no kinetic parameters for uranium; uranium appears only as occupational context. |
| popPK | Swanson_1983 | irrelevant | 2 | 5 | Uranium is a co-exposure in an environmental monitoring/bioaccumulation study; measured concentrations and bioconcentration factors present but no kinetic parameters (half-life, rate constants) for uranium disposition. |
| popPK | Swanson_1985 | irrelevant | 2 | 3 | Environmental exposure/food-chain transfer study with transfer coefficients and dose estimates, not internal toxicokinetic parameters (half-life, clearance, PBPK) of uranium in organisms. |
| popPK | Teien_2025 | relevant | 5 | 4 | Reports uranium uptake/accumulation time course (continuous uptake in eggs over 90 days) and tissue concentration data in Atlantic salmon, but the numeric values are mostly LC50s and concentration correlations with curves/parameters likely in figures rather than the shown evidence. |
| popPK | Tirmarche_1993 | irrelevant | 0 | 0 | This is an epidemiological cohort mortality study of radon exposure in uranium miners; uranium appears only as a workplace context, with SMR/risk coefficients but no uranium toxicokinetic parameters. |
| popPK | Tomasek_2012 | irrelevant | 0 | 0 | Epidemiological radon exposure-response study of uranium miners with no kinetic parameters for uranium itself. |
| popPK | Ulsh_2008 | irrelevant | 1 | 1 | This is an occupational dose reconstruction for thorium; uranium appears only as a site co-contaminant with no kinetic parameters reported. |
| popPK | Verma_2022 | irrelevant | 0 | 0 | This is a review of graphene adsorbents for uranium removal from water; partition coefficients refer to adsorbent-water systems, not uranium toxicokinetics in any organism. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | Exposure/variability study of urinary metal levels with no kinetic parameters (no half-life, rate constant, clearance, or model), only ICCs and classification metrics. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | This is a materials-chemistry adsorption study (uranium capture from water), with no in vivo toxicokinetic parameters of uranium; the "kinetics" are pseudo-second-order adsorption fitting, not biological disposition. |
| popPK | Yamasaki_2004 | irrelevant | 0 | 0 | Uranium appears only as a background "Uranium series" natural radioactivity measurement; no uranium kinetic parameter is reported. |
| popPK | Yiin_2017 | irrelevant | 0 | 0 | An epidemiological mortality/dose-response study with no kinetic parameters of uranium measured or modeled. |
| popPK | Zaballa_2016 | irrelevant | 0 | 0 | This is an epidemiological lung cancer modeling study of radon exposure in a human cohort; uranium only as co-exposure context, with no uranium toxicokinetic parameters of any kind. |
| popPK | Zaire_1997 | irrelevant | 2 | 3 | This is a human epidemiological/biomarker outcome study reporting only a sixfold difference in urinary uranium excretion (no half-life, rate constant, clearance, or kinetic model), and no detailed numeric values are given beyond this ratio. |
| popPK | Zhu_2022 | relevant | 6 | 4 | Rat oral uranyl model with toxicokinetic time course ( Tmax 30 min, detectable to 48 h) fits the topic, but full numeric concentration–time values appear to reside in figures not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Buranium%5D&body=Drug%3A%20uranium%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_uranium/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-14 16:19 UTC</sub>

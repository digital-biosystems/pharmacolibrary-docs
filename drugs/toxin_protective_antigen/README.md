<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Protective antigen&quot;}]"></div>

# Protective antigen

- **generic name:** Protective antigen
- **T3DB:** [T3D2593](http://www.t3db.ca/toxins/T3D2593) · **PubChem:** none

## About

Protective antigen (PA) is a component of the anthrax (Bacillus anthracis) toxins, which allows the translocation of EF and LF into the cytosol. The anthrax toxins consist of three distinct proteins: the protective antigen (PA; 83 kDA), the edema factor (EF; 89 kDA) and the lethal factor (LF; 90 kDa). Individually, none of the three is toxic; PA combined with LF is the lethal toxin (LeTx) and PA combined with EF is the edema toxin (EdTx).

- **Category:** Protein, Bacterial Toxin, Natural Toxin
- **Route of exposure:** ingestion, inhalation, dermal
- **Sources and uses:** Protective antigen (PA) is a component of the anthrax (Bacillus anthracis) toxins.
- **Mechanism of toxicity:** After binding to a host cell surface receptor, PA is cleaved by membrane endoproteases of the furin family. Cleaved PA molecules assemble into heptamers, which then associate with EF and LF. …
- **Health effects:** Protective antigen (PA) is a component of the anthrax (Bacillus anthracis) toxins. Anthrax is an acute diease that may manifest as a pulmonary, gastrointestinal, or cutaneous infection. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2593">T3DB T3D2593</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 643772-15-0</small></p>

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.">Not simulated</span> <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **UGT1A1** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Zhu_2019_2](drugs/toxin_protective_antigen/pgx_Zhu_2019_2_UGT1A1_safety.md) | Zhu Q et al., Pharmacokinetic and Pharmacogenetic Fac…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00209](https://doi.org/10.3389/fphar.2019.00209) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C19** | `Q56` · tmax | metabolism | [Zhu_2019_2](drugs/toxin_protective_antigen/pgx_Zhu_2019_2_CYP2C19_Q56.md) | Zhu Q et al., Pharmacokinetic and Pharmacogenetic Fac…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00209](https://doi.org/10.3389/fphar.2019.00209) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP3A5** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Zhu_2019_2](drugs/toxin_protective_antigen/pgx_Zhu_2019_2_CYP3A5_Q100.md) | Zhu Q et al., Pharmacokinetic and Pharmacogenetic Fac…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00209](https://doi.org/10.3389/fphar.2019.00209) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **SLCO1B1** | `Q32` · Cmax | transport | [Zhu_2019_2](drugs/toxin_protective_antigen/pgx_Zhu_2019_2_SLCO1B1_Q32.md) | Zhu Q et al., Pharmacokinetic and Pharmacogenetic Fac…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00209](https://doi.org/10.3389/fphar.2019.00209) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **UGT2B7** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Zhu_2019_2](drugs/toxin_protective_antigen/pgx_Zhu_2019_2_UGT2B7_Q100.md) | Zhu Q et al., Pharmacokinetic and Pharmacogenetic Fac…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00209](https://doi.org/10.3389/fphar.2019.00209) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=protective_antigen).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` metabolism, `UGT2B7` metabolism | PGx paper |
| metabolism | liver | `CYP2C19` metabolism, `CYP3A5` metabolism, `SLCO1B1` transport, `UGT1A1` safety_allele, `UGT2B7` metabolism | PGx paper |
| metabolism | small intestine | `CYP3A5` metabolism, `UGT1A1` safety_allele, `UGT2B7` metabolism | PGx paper |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 15:53 | 2:00:26 | 0/0/0 | 0/0/0 | 1/0/4 | 2,573,215/70,299 | ollama / glm-5.3-flash | 124 | 11/97 | 124/0 | 0 |

## Coverage

- **PubMed hits:** 1752 matched, 322 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_12 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Beliveau_2024.pdf` | Beliveau M et al., Animal-to-Human Dose Translation of ANT…, Clinical pharmacology and t… (2024) | pd | 5 | [10.1002/cpt.3097](https://doi.org/10.1002/cpt.3097) | [38082506](https://www.ncbi.nlm.nih.gov/pubmed/38082506) | metadata signals extractable PD data (exposure-response) |
| `Chen_2026.pdf` | Chen YQ et al., [Association between physical activity…, Zhonghua yu fang yi xue za… (2026) | pd | 5 | [10.3760/cma.j.cn112150-20250804-00755](https://doi.org/10.3760/cma.j.cn112150-20250804-00755) | [41856627](https://www.ncbi.nlm.nih.gov/pubmed/41856627) | metadata signals extractable PD data (exposure-response) |
| `Cole-Hunter_2016.pdf` | Cole-Hunter T et al., Impact of traffic-related air pollution…, Journal of exposure science… (2016) | pd | 5 | [10.1038/jes.2015.66](https://doi.org/10.1038/jes.2015.66) | [26486990](https://www.ncbi.nlm.nih.gov/pubmed/26486990) | metadata signals extractable PD data (exposure-response) |
| `Du_2024.pdf` | Du S et al., Policy implications for synergistic man…, The Science of the total en… (2024) | pd | 5 | [10.1016/j.scitotenv.2024.170210](https://doi.org/10.1016/j.scitotenv.2024.170210) | [38246366](https://www.ncbi.nlm.nih.gov/pubmed/38246366) | metadata signals extractable PD data (exposure-response) |
| `Kondo_2020.pdf` | Kondo MC et al., Health impact assessment of Philadelphi…, The Lancet. Planetary health (2020) | pd | 5 | [10.1016/S2542-5196(20)30058-9](https://doi.org/10.1016/S2542-5196(20)30058-9) | [32353295](https://www.ncbi.nlm.nih.gov/pubmed/32353295) | metadata signals extractable PD data (exposure-response) |
| `Li_2024.pdf` | Li S et al., Association between green space and mul…, Environment international (2024) | pd | 5 | [10.1016/j.envint.2024.108796](https://doi.org/10.1016/j.envint.2024.108796) | [38838489](https://www.ncbi.nlm.nih.gov/pubmed/38838489) | metadata signals extractable PD data (exposure-response) |
| `Ma_2026.pdf` | Ma Z et al., A mixture analysis of urinary microplas…, Environment international (2026) | pd | 5 | [10.1016/j.envint.2025.109928](https://doi.org/10.1016/j.envint.2025.109928) | [41389555](https://www.ncbi.nlm.nih.gov/pubmed/41389555) | metadata signals extractable PD data (exposure-response) |
| `MacKenzie_1999.pdf` | MacKenzie FM et al., The post-exposure response of Enterobac…, The Journal of antimicrobia… (1999) | pd | 5 | [10.1093/jac/43.1.71](https://doi.org/10.1093/jac/43.1.71) | [10381103](https://www.ncbi.nlm.nih.gov/pubmed/10381103) | metadata signals extractable PD data (exposureresponse) |
| `Sou_2020.pdf` | Sou T et al., Model-Informed Drug Development in Pulm…, Molecular pharmaceutics (2020) | pd | 5 | [10.1021/acs.molpharmaceut.9b00968](https://doi.org/10.1021/acs.molpharmaceut.9b00968) | [31951139](https://www.ncbi.nlm.nih.gov/pubmed/31951139) | metadata signals extractable PD data (PharmacodynamicModel) |
| `van_1998.pdf` | van Tongeren MJ et al., Retrospective exposure assessment for a…, Occupational and environmen… (1998) | pd | 5 | [10.1136/oem.55.10.692](https://doi.org/10.1136/oem.55.10.692) | [9930091](https://www.ncbi.nlm.nih.gov/pubmed/9930091) | metadata signals extractable PD data (exposure-response) |
| `Zhu_2019.pdf` | Zhu Q et al., Pharmacokinetic and Pharmacogenetic Fac…, Frontiers in pharmacology (2019) | pgx | 8 | [10.3389/fphar.2019.00209](https://doi.org/10.3389/fphar.2019.00209) | [30936830](https://www.ncbi.nlm.nih.gov/pubmed/30936830) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Jassal_2026.pdf` | Jassal B et al., HLA variation analysis and autoantigen…, Rheumatology (Oxford, Engla… (2026) | pgx | 5 | [10.1093/rheumatology/keag049](https://doi.org/10.1093/rheumatology/keag049) | [41761579](https://www.ncbi.nlm.nih.gov/pubmed/41761579) | metadata signals extractable PGX data (HLA-C*07) |

<sub>queue written 2026-11-11 15:40 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelwahab_2026 | irrelevant | 0 | 0 | The paper is a PK/PD exposure-QTc modeling study of TB drugs (bedaquiline, pretomanid, clofazimine); protective antigen is not mentioned at all. |
| PGx | Adams_1993 | not_relevant | 0 | 0 | Focuses on drug-induced autoimmunity markers, not PK/PD effects of variants on procainamide exposure or response parameters. |
| PGx | Alade_2024 | not_relevant | 0 | 0 | Paper is a genetic association study of rare variants in orofacial cleft genes; no drug, PK/PD parameter, or pharmacogenomic effect is reported. |
| PGx | Alade_2024_2 | not_relevant | 0 | 0 | Rare variant genetics of orofacial clefts; no drug exposure or PK/PD parameter for protective_antigen reported. |
| PGx | Almujri_2025 | not_relevant | 0 | 0 | The paper evaluates metE as a TB vaccine antigen; no gene variant/genotype effect on any PK or PD parameter of a drug is reported. |
| popPK | Anand_2021 | irrelevant | 0 | 0 | The paper is about MOF adsorbents for benzene vapor; no kinetic parameters for protective antigen, which does not appear at all. |
| popPK | Anand_2022 | irrelevant | 0 | 0 | The paper concerns benzene adsorption onto MOF-199 adsorbent material; protective_antigen does not appear at all, and no toxicokinetic parameters for it are reported. |
| popPK | Anokye_2013 | irrelevant | 0 | 0 | Epidemiological survey of physical activity behavior with no protective antigen or toxicokinetic parameters whatsoever. |
| popPK | Armenis_2012 | irrelevant | 0 | 0 | Orthopedic study on knee alignment and ankle sprains with no kinetic parameters for protective antigen. |
| popPK | Attwa_2024 | irrelevant | 0 | 0 | The kinetic parameters (t1/2, Clint) belong to CEP-37440, not protective antigen; protective antigen does not appear in the paper at all. |
| popPK | Ayyadurai_2010 | irrelevant | 0 | 0 | This is an analytical sensor paper for trimellitic anhydride; protective antigen appears nowhere and no toxicokinetic parameters of it are reported. |
| popPK | Azizova_2014 | irrelevant | 0 | 0 | This is an epidemiological dose-response study of plutonium-exposed workers with no toxicokinetic parameters for protective antigen, which does not appear at all. |
| PGx | Baca_2018 | not_relevant | 0 | 0 | This is a genetic association study of preeclampsia risk with vitamin D metabolism gene variants; no drug (protective antigen) or PK/PD parameter is studied. |
| popPK | Baek_2024 | irrelevant | 0 | 0 | The paper reports PK parameters for LNP-mRNA therapeutics (mRNA-3927/3705/3210), not for the substance protective_antinegen; protective antigen does not appear, and key numbers reside in supplementary tables not provided. |
| popPK | Barker_1998 | irrelevant | 0 | 0 | Epidemiological cohort study of sensitisation risk factors with no kinetic parameters for phthalic anhydride or any substance. |
| PGx | Bayes_2016 | not_relevant | 0 | 0 | Paper describes a murine P. aeruginosa infection model; no gene variant effects on PK/PD of any drug are reported. |
| popPK | Baylor_1979 | irrelevant | 0 | 0 | This is a biophysics study of phototransduction in toad retinal rods with no toxicokinetic parameters for protective antigen (which does not appear at all). |
| popPK | Beliveau_2024 | irrelevant | 2 | 2 | The kinetic parameters reported are for AIGIV (anti-PA antibodies), not for protective antigen itself, which appears only as the antigenic target; no numeric PK parameter values for protective antigen are present. |
| popPK | Berthet_2011 | irrelevant | 0 | 0 | The substance of interest is phthalic acid as a folpet metabolite, not protective antigen; no kinetic parameters for protective antigen are reported. |
| popPK | Bilal_2026 | irrelevant | 0 | 0 | "PA" here denotes physical activity and "BG" blood glucose in a T1DM prediction study — protective antigen is not the subject substance and no kinetic parameters for it appear. |
| popPK | Biskup_2023 | irrelevant | 0 | 0 | The paper is about physical activity measurement (IPAQ vs accelerometer) in breast cancer survivors; "protective_antigen" is not mentioned and no toxicokinetic parameters are present. |
| popPK | Braun_2026 | irrelevant | 0 | 0 | The paper is a biomaterials study on lactate-gated hydrogel crosslinking in vitro; no kinetic parameters for protective antigen appear anywhere. |
| popPK | Brennan_2023 | irrelevant | 0 | 0 | Paper studies adipose tissue and muscle mitochondrial energetics in older adults; no protective antigen toxicokinetic parameters of any kind. |
| popPK | Brennan_2024 | irrelevant | 0 | 0 | This is a human observational study of adipose tissue and muscle mitochondrial function with no toxicokinetic parameters for protective antigen; the substance "protective antigen" appears only as an unrelated term (ActivPal accelerometer). |
| popPK | Bretagne_2016 | irrelevant | 0 | 0 | This is an epidemiological colonoscopy screening study with no toxicokinetic parameters for protective antigen; the substance does not appear at all. |
| popPK | Brough_2015 | irrelevant | 0 | 0 | This is an epidemiological exposure-response study of peanut antigen in household dust and allergen sensitization, with no toxicokinetic parameters for protective antigen; relevant numbers are only dust antigen levels and odds ratios. |
| popPK | Bruning-Barry_2022 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters (Cmax, Tmax, t1/2, AUC) for pretomanid (PA-824), not for protective antigen; protective antigen never appears as the subject substance. |
| popPK | Buchmueller_2022 | irrelevant | 0 | 0 | The paper reports kinetic parameters (transport/degradation percentages) for pyrrolizidine alkaloids, not for the substance protective antigen; protective antigen does not appear at all. |
| PGx | Buchmueller_2022_2 | not_relevant | 0 | 0 | Study examines structure-dependent genotoxicity of pyrrolizidine alkaloids, with no gene variant effects on PK/PD parameters of a drug. |
| PGx | Bumpus_2020 | not_relevant | 0 | 0 | Paper describes a PLD activity imaging method; no gene variant effects on PK/PD parameters of protective antigen. |
| popPK | Castronovo_1982 | irrelevant | 0 | 0 | The radiopharmaceutical I-125 phi PA is a different substance from protective antigen (anthrax toxin); no kinetic parameters for protective antigen are reported. |
| popPK | Cavazzotto_2020 | irrelevant | 0 | 0 | This is an epidemiological study of social-ecological correlates of physical activity in Brazilian adults; protective_antigen does not appear at all, and there are no toxicokinetic parameters anywhere. |
| PGx | Chebotar_2024 | not_relevant | 2 | 3 | The paper links mutations (phoQ, pmrB, lasR) to colistin MIC changes, not to a pharmacokinetic/pharmacodynamic parameter of protective_antigen. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The substance of this paper is senecionine (a pyrrolizidine alkaloid), not protective antigen; protective antigen appears nowhere in the evidence. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters (clearance etc.) for senecionine N-oxide, not protective antigen, which never appears as the subject substance. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper concerns baloxavir derivative antivirals (ATV2301), not the substance protective antigen; kinetic values belong to a different substance. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper is about polyelectrolyte complex nanoparticles; "PA" here denotes a polyanion, not the protective antigen toxin, and no toxicokinetic parameters for the substance are present. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | Epidemiological study of physical activity and NAFLD with no kinetic parameters for protective antigen; the substance is not mentioned at all. |
| popPK | Cho_2025 | irrelevant | 0 | 0 | The paper is an mHealth statistics study on missing data handling in behavioral data with no protective antigen toxicokinetic parameters of any kind; no relevant numeric values appear. |
| popPK | Chowrasia_2022 | irrelevant | 0 | 0 | The paper concerns curcumin-analogue anticancer compounds; no toxicokinetic parameters for protective antigen appear anywhere. |
| PGx | Clark_2024 | not_relevant | 0 | 0 | Paper studies CFAP418 gene effects on retinal lipid homeostasis; no drug protective_antigen or PK/PD parameter is involved. |
| popPK | Coetzee_1994 | irrelevant | 0 | 0 | The paper studies Na-Ca exchange current in guinea pig cardiac myocytes under oxidant stress; no toxicokinetic parameters of any substance named protective_antigen are reported. |
| popPK | Cole-Hunter_2016 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PGx | Collen_1995 | not_relevant | 0 | 0 | Review of new thrombolytic agents with no pharmacogenomic effects on PK/PD parameters reported. |
| popPK | Conti_2003 | irrelevant | 0 | 0 | This is a neuroscience paper on hippocampal synaptic transmission with no toxicokinetic parameters for protective antigen. |
| popPK | Corson_1994 | irrelevant | 0 | 0 | The paper studies a retinal analogue in salamander photoreceptors and contains no toxicokinetic parameters for protective antigen. |
| popPK | Cote_2016 | irrelevant | 0 | 0 | This is a risk assessment methodology summary (NexGen) with no kinetic parameters for protective antigen; no numeric values present. |
| popPK | Dahlstrand_2020 | irrelevant | 0 | 0 | This is a photoacoustic imaging study of basal cell carcinoma in humans; it contains no toxicokinetic parameters for protective antigen of any kind. |
| popPK | De_2024 | irrelevant | 0 | 0 | "PA" here denotes paclitaxel, not protective antigen; the paper is a study protocol for paclitaxel PK-PD in breast cancer patients with no protective antigen data. |
| popPK | Deng_2023 | irrelevant | 0 | 0 | The paper reports microplastic-air partition coefficients for PFASs, not any toxicokinetic parameters of protective_antegen; protective_antigen is absent entirely. |
| popPK | Doong_2000 | irrelevant | 0 | 0 | The paper measures SPME distribution coefficients of PAHs in a two-phase analytical system; "protective antigen" is not the subject substance and no toxicokinetic parameters for it appear. |
| popPK | Drugova_2007 | irrelevant | 0 | 0 | This is an epidemiological biomarker study of radiation-exposed Mayak workers ("PA" = Production Association, not protective antigen); it contains no toxicokinetic parameter for the substance. |
| popPK | Du_2024 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| popPK | Dubreil_2024 | irrelevant | 0 | 0 | This is an in vitro metabolomics/BMD study of pyrrolizidine alkaloids (lasiocarpine, retrorsine, heliotrine) in HepaRG cells, with no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for protective antigen; protective antigen does not appear at all. |
| popPK | Dvorakova_2024 | irrelevant | 0 | 0 | This is an analytical chemistry method paper for plastic additives in soil with no toxicokinetic parameters for protective antigen at all. |
| popPK | Dzik_2026 | irrelevant | 0 | 0 | This is an in silico ODE model of hesperidin in ovarian cancer tumour microenvironment; protective antigen (anthrax) does not appear, so no protective-antigen toxicokinetic parameters exist here. |
| popPK | Else_2024 | irrelevant | 0 | 0 | The paper reports PK of tenofovir/emtricitabine/lamivudine/dolutegravir in humans; protective antigen is not the subject substance and no parameters for it appear. |
| popPK | Enge_2021 | irrelevant | 1 | 2 | The paper studies pyrrolizidine alkaloids (retrorsine, senecionine, etc.) in HepaRG cells; protective antigen is not the subject substance, and any kinetic data would be in figures not provided. |
| popPK | Enge_2022 | irrelevant | 0 | 0 | The paper studies pyrrolizidine alkaloids (retrorsine, senecionine) in HepaRG cells, not the subject substance protective antigen; no kinetic parameters for protective antigen appear. |
| popPK | Fan_2025 | irrelevant | 0 | 0 | The paper concerns emissions of chemicals of emerging concern from water-based paints; protective antigen does not appear at all and no toxicokinetic parameters for it are reported. |
| PGx | Fang_2022 | not_relevant | 0 | 0 | Review of glycolipid metabolism biomarkers; no relation between gene variants and PK/PD parameters of a drug. |
| popPK | Filimon_2013 | irrelevant | 0 | 0 | Environmental biomonitoring of sediment trace elements and microbial enzyme activities with no kinetic parameters for protective antigen. |
| popPK | Fiol_2011 | irrelevant | 0 | 0 | The paper studies the GRAIL E3 ubiquitin ligase in tilapia osmoregulation; "PA" refers to a protease-associated domain, not the protective antigen substance, and no toxicokinetic parameters for protective antigen appear. |
| popPK | Fireman_2014 | irrelevant | 0 | 0 | This is a human beryllium exposure/epidemiological biomonitoring study with no toxicokinetic parameters for protective antigen; protective antigen does not appear at all. |
| PGx | Galkin_2024 | not_relevant | 1 | 0 | Paper reports platelet aggregation associations with antiplatelet therapy, not any pharmacogenomic effect on PK/PD of protective_antigen. |
| popPK | Gao_2020 | irrelevant | 0 | 0 | The paper concerns pyrrolizidine alkaloid cytotoxicity in rat hepatocytes; protective antigen is not the subject and no kinetic parameters for it appear. |
| PGx | Gensini_1998 | not_relevant | 0 | 0 | Review of CAD risk factors; no pharmacogenomic effects on PK/PD parameters of protective antigen. |
| popPK | Giráldez_2022 | irrelevant | 0 | 0 | The paper reports plant-air partition coefficients for PAHs in conifer needles, not any toxicokinetic parameters for the subject substance. |
| popPK | Goh_2024 | irrelevant | 0 | 0 | The paper models tuberculosis drugs (bedaquiline, pretomanid, moxifloxacin, pyrazinamide); protective antigen never appears as a subject and no kinetic parameters for it are present. |
| PGx | Gong_2023 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on PK/PD parameters; only enzyme (MPO, CYP3A4) and inflammation effects on MCT toxicity. |
| popPK | Gram_1995 | irrelevant | 0 | 0 | Paper reports plasma t-PA/PAI-1 biomarker concentrations in DVT patients, with no kinetic parameter for protective antigen. |
| PGx | Griesel_2024 | not_relevant | 0 | 5 | The paper concerns dolutegravir/efavirenz PK, not protective antigen; genotype effects relate to efavirenz metabolism and dolutegravir induction, not protective antigen PK/PD. |
| PGx | Gu_2023 | not_relevant | 0 | 0 |  |
| PGx | Guo_2017 | not_relevant | 3 | 1 | Gene variants studied as risk factors for migraine attack susceptibility after peptide infusion, not for PK/PD parameters of a drug; no fitted pharmacogenomic effect reported. |
| popPK | Guo_2019 | irrelevant | 0 | 0 | Paper is about an MXene pressure sensor with no toxicokinetic data for protective antigen and no kinetic parameters of any kind. |
| popPK | Gurbanov_2022 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Hanscom_2026 | irrelevant | 0 | 0 | This is a clinical efficacy/exposure-outcome study of cabotegravir, not protective antigen; no kinetic parameter for protective antigen is reported. |
| popPK | Hashimoto_1993 | irrelevant | 0 | 0 | The paper concerns the PACAP (pituitary adenylate cyclase-activating polypeptide) receptor, not the protective antigen substance, and contains no kinetic parameters for it. |
| popPK | He_2015 | irrelevant | 0 | 0 | The paper concerns oral insulin delivery via vitamin B12-coated solid lipid nanoparticles; protective antigen does not appear at all, and the kinetics (LogP, PA) belong to other substances. |
| popPK | Hediger_1987 | irrelevant | 0 | 0 | The paper is about age at menarche with no toxicokinetic parameters for protective antigen. |
| PGx | Hessel-Pras_2025 | not_relevant | 1 | 1 | Study examines CYP3A4-dependent cytotoxicity and cell cycle effects of lasiocarpine in vitro, not a pharmacogenomic effect on PK/PD parameters of a drug protective_antigen. |
| popPK | Hoegh_2016 | irrelevant | 0 | 0 | This is an epidemiological cohort study of physical activity and mental health in Danish adolescents with no toxicokinetic parameters for protective antigen or any substance. |
| popPK | Hoppe_1980 | irrelevant | 0 | 0 | Paper is about taste discrimination thresholds for sweeteners (saccharose), with no toxicokinetic parameters for protective antigen; it appears to be a taste psychology methods paper with no relevant substance data. |
| PGx | Hoshi_2022 | not_relevant | 0 | 0 | The paper concerns physical activity, bioactive lipids, and CVD events, with no pharmacogenomic effect on PK/PD parameters of protective antigen (a drug). |
| PGx | Hosseini_2016 | not_relevant | 0 | 0 | Plant drought/K study, no drug, no pharmacogenomic PK/PD effect on protective antigen. |
| popPK | Hou_2024 | irrelevant | 0 | 0 | The paper reports transdermal permeation kinetics of guanfacine ion pairs, not protective antigen, which appears nowhere in the study. |
| PGx | Hsu_2023 | not_relevant | 0 | 0 | Paper is about Ag2S nanoparticle theranostics; no gene variant or pharmacogenomic effect on protective antigen PK/PD reported. |
| PGx | Huang_2025 | not_relevant | 0 | 0 | Study of provider behavior/PGx CDS utilization; no gene-variant effects on PK/PD parameters of protective antigen. |
| popPK | Iesce_2026 | irrelevant | 0 | 0 | This is a computational drug-discovery study on efflux pump inhibitors in Pseudomonas aeruginosa; no toxicokinetic parameters for protective antigen (or any disposition/half-life/partition data) are present. |
| popPK | Inoyama_2018 | irrelevant | 1 | 5 | The kinetic data concern novel pyrimidine antituberculars with PA-824 only as a comparator, not the subject substance protective antigen. |
| popPK | Iqbal_2026 | irrelevant | 0 | 0 | This is an exercise/insulin/diet study in children with type 1 diabetes; "PA" here means physical activity, and there are no toxicokinetic parameters for protective antigen. |
| popPK | Isla_2024 | irrelevant | 0 | 0 | All kinetic parameters (CL/F, V1/F, KA, TLAG) belong to fosfomycin; protective_antigen is not mentioned as a study substance. |
| popPK | Jafarova_2023 | irrelevant | 0 | 0 | This is an environmental biomonitoring study of microplastic deposition on tree leaves with no toxicokinetic parameters for protective antigen (which does not appear at all). |
| PGx | Jassal_2026 | not_relevant | 0 | 0 | The paper reports HLA genetic associations with disease subgroups in inflammatory myopathy, not pharmacogenomic effects on PK/PD parameters of a drug. |
| popPK | Jayasundara_2021 | irrelevant | 0 | 0 | This is an analytical chemistry paper on ionization efficiency in cVSSI-MS; protective antigen is absent and no toxicokinetic parameters are reported. |
| popPK | Jeeawoody_2020 | irrelevant | 0 | 0 | An analytical gel electrophoresis methods paper with no toxicokinetic parameters for protective antigen; "partition coefficient" refers to antibody diffusion into gels, not tissue distribution. |
| popPK | Jeong_2019 | irrelevant | 1 | 1 | "PA" in this paper is procainamide (with metabolite NAPA), not Bacillus anthracis protective antigen, so all kinetic parameters (CL 20.3 mL/min/kg, Kp,ss, PBPK model) belong to a different substance; the numeric values are present but for the wrong compound. |
| popPK | Jiang_2017 | irrelevant | 0 | 0 | The paper's "PA" is parishin (a Gastrodia extract compound), not protective antigen, and no protective antigen kinetic parameters are present. |
| popPK | Kaneva_2024 | irrelevant | 0 | 0 | This is an epidemiological survey of physical activity in Russia with no toxicokinetic parameters for protective antigen or any substance. |
| PGx | Kasthurinaidu_2015 | not_relevant | 1 | 0 | Population phylogenetic study of GST M1/T1 null allele frequencies with no drug, no PK/PD parameters, and no pharmacogenomic effect on protective antigen. |
| PGx | Kauppila_2025 | not_relevant | 0 | 0 | Paper is about 3D bioprinted limbal niche models for corneal regeneration; no drug, gene variant, or PK/PD pharmacogenomic data present. |
| popPK | Kawuma_2022 | irrelevant | 0 | 0 | The paper reports population PK parameters for dolutegravir, not for protective antigen; protective antigen is not studied at all. |
| PGx | Keragala_2020 | not_relevant | 0 | 0 | No genetic variant/genotype/phenotype effects on PK/PD of t-PA/TNK-tPA are reported; only complement inhibitors in an in vitro BBB model. |
| popPK | Kim_2021 | irrelevant | 0 | 0 | The paper concerns benzene adsorption on activated carbon; protective antigen is not mentioned and there are no toxicokinetic parameters for it. |
| popPK | Kinvig_2023 | irrelevant | 1 | 8 | The substance is cabotegravir, not protective antigen; all kinetic parameters (AUC, Cmax, CL/F, KNP, KSKIN) belong to cabotegravir. |
| popPK | Knaak_2012 | irrelevant | 0 | 0 | The paper is entirely about pyrethroid insecticides; protective_antigen never appears as the subject substance and no kinetic parameters for it are present. |
| PGx | Knaak_2012 | not_relevant | 0 | 0 | Paper reviews pyrethroid insecticide QSAR/PBPK-PD model parameters with no gene variant/genotype effects on PK or PD. |
| PGx | Knudsen_2021 | not_relevant | 1 | 5 | Study examines monoclonal antibody neutralization of Plasmodium PfCyRPA across parasite strains; strain-dependent potency was independent of PfCyRPA polymorphism, and no gene variant changes a PK/PD parameter of any drug. |
| popPK | Koloskoff_2023 | irrelevant | 0 | 0 | The paper reports kinetic parameters for tobramycin, not protective antigen; protective antigen does not appear as the subject substance. |
| popPK | Kondo_2020 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| popPK | Kong_2022 | irrelevant | 0 | 0 | The paper studies ACOX1 and palmitate effects in fish macrophages; no toxicokinetic parameters of any kind for protective antigen are present. |
| PGx | Koss_2024 | not_relevant | 0 | 0 |  |
| popPK | Krzyzanski_2021 | irrelevant | 0 | 0 | The paper reports population pharmacokinetics of dexamethasone and betamethasone in humans; protective antigen does not appear at all. |
| popPK | Krzyzanski_2021_2 | irrelevant | 0 | 0 | The subject substance protective antigen is not studied; the paper reports PK/PD parameters for dexamethasone and betamethasone in humans, so no parameters exist for the target substance. |
| popPK | Kuchimanchi_2026 | irrelevant | 0 | 0 | Kinetic parameters (AUC, Cmax, Cmin) belong to dostarlimab, not protective antigen; exposure-response clinical study with no protective antigen data. |
| PGx | Larsen_1989 | not_relevant | 2 | 5 | Reports engineered protein variants (glycosylation/domain deletions) changing t-PA clearance, not a host gene variant/genotype effect on a pharmacogenomic PK/PD parameter. |
| PGx | Larsen_1991 | not_relevant | 0 | 0 | Effects are from protein engineering (variants of the drug itself), not gene/genotype/phenotype variants affecting PK/PD. |
| popPK | Lehmann_2023 | irrelevant | 0 | 0 | The paper's subject substance is retrorsine (a pyrrolizidine alkaloid, "PA"); "protective antigen" never appears as the substance studied, so no quantitative kinetic parameters for it are reported. |
| popPK | Lehmann_2024 | irrelevant | 1 | 0 | The paper's kinetic parameters (clearances, ka, Vmax/Km, partition coefficients, AUC) all belong to retrorsine/rifampicin, not protective antigen; protective antigen does not appear as the subject substance. |
| PGx | Lehmann_2024 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype is studied; effects on retrorsine kinetics are due to CYP3A4 induction/inhibition by rifampicin, not pharmacogenomics. |
| popPK | Leys_2023 | irrelevant | 0 | 0 | The paper is a review on perinatal asphyxia/hypothermia pharmacokinetics of various drugs; protective antigen never appears as a subject substance. |
| popPK | Leys_2026 | irrelevant | 0 | 0 | The paper reports a PBPK model for midazolam and its metabolites, not for protective antigen; no kinetic parameters of the subject substance appear in the evidence. |
| PGx | Leys_2026 | not_relevant | 0 | 0 | PBPK modeling study of midazolam with no pharmacogenomic (gene variant) effects reported; protective_antigen not involved. |
| popPK | Li_2020 | irrelevant | 0 | 0 | This is a human biomonitoring/exposure study measuring serum pesticide concentrations, with protective_antigen not mentioned as a subject substance — no kinetic parameters for it exist in the evidence. |
| popPK | Li_2024 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper concerns physical activity dose-response effects on executive function in children; protective antigen does not appear and no toxicokinetic parameters are present. |
| popPK | Libin_2024 | irrelevant | 0 | 0 | No toxicokinetic parameters for any substance; only in-silico ADMET/docking of phytochemicals against viral proteins, with no numeric kinetic values for the substance. |
| popPK | Lim_2007 | irrelevant | 0 | 8 | The kinetic parameters (t1/2, clearance, Vd, AUC) all belong to phthalic acid, a phthalate metabolite, not to protective antigen. |
| popPK | Liu_1994 | irrelevant | 0 | 0 | The paper reports kinetic/potency parameters for n-alkane anesthetics in rats, not for protective antigen, which does not appear as a study substance. |
| popPK | Liu_2017 | irrelevant | 0 | 7 | "PA" here means prednisolone acetate, not anthrax protective antigen, so despite readable TK values (AUC, Cmax, Tmax) the substance is a different one. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper reports toluene adsorption on activated carbon with no toxicokinetic parameters for protective antigen, which does not appear at all. |
| popPK | Liu_2024_2 | irrelevant | 0 | 0 | The paper studies VOC adsorption on activated carbon, with no kinetic parameters for protective antigen. |
| popPK | Loef_2017 | irrelevant | 0 | 0 | This is an epidemiological study of shift work and physical activity in humans; protective_antigen and any toxicokinetic parameters are entirely absent. |
| popPK | Lusardi_2026 | irrelevant | 0 | 0 | The paper studies IPU 3l in HUVECs, not protective antigen, and contains no kinetic parameters for protective antigen of any kind. |
| popPK | Lyons_2022 | irrelevant | 0 | 0 | The paper is a PKPD efficacy model for TB drugs (bedaquiline, pretomanid, pyrazinamide); protective antigen is not the subject and no kinetic parameters for it appear. |
| popPK | Ma_2022 | irrelevant | 0 | 0 | The paper concerns retrorsine (a pyrrolizidine alkaloid), not protective antigen; protective antigen does not appear as the subject substance in any kinetic parameter. |
| PGx | Ma_2022 | not_relevant | 0 | 0 | Fasting effects on retrorsine toxicokinetics, not a gene variant affecting PK/PD of protective antigen. |
| popPK | Ma_2026 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| popPK | MacKenzie_1999 | irrelevant | 0 | 0 | no_text gate: only 62 chars of text extracted (&lt; 400) |
| PGx | Martins_2019 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on protective antigen PK or PD parameters is reported; the study examines pomolic acid effects in docetaxel-resistant prostate cancer cells, unrelated to protective antigen. |
| PGx | Martín-Rivada_2022 | not_relevant | 0 | 0 | Newborn screening epidemiology for inborn errors of metabolism; no drug PK/PD pharmacogenomic effects reported. |
| popPK | Marzinke_2024 | irrelevant | 0 | 0 | The paper's subject substance is cabotegravir, not protective antigen; protective antigen does not appear at all. |
| popPK | Matcha_2022 | irrelevant | 0 | 0 | "PA" here means perinatal asphyxia, not protective antigen; the kinetic parameters (CL, Vd, half-life) belong to gentamicin and other antimicrobials, so protective_antigen is not the subject substance. |
| popPK | Matson_2012 | irrelevant | 0 | 0 | This is a drug-delivery materials study of dye release from peptide nanofibers; "antigen" plays no role, and the substance is a different chemical (Prodan dye), with no toxicokinetic parameters for the subject substance. |
| popPK | Meng_2022 | irrelevant | 0 | 0 | This is a wearable pressure-sensor engineering paper with no toxicokinetic parameters for protective antigen or any substance. |
| popPK | Mi_2007 | irrelevant | 0 | 0 | The paper reports partition coefficients of arsenic into membrane active layers, not any toxicokinetic parameter for protective antigen, which does not appear at all. |
| popPK | Minami_2018 | irrelevant | 0 | 0 | This is an epidemiological study of physical activity and erectile dysfunction in diabetic patients with no toxicokinetic parameters for protective antigen of any kind. |
| popPK | Na_2019 | irrelevant | 0 | 0 | The paper concerns adsorptive removal of formaldehyde by materials; protective antigen is not the subject and no toxicokinetic parameters for it exist here (partition coefficients are for formaldehyde on sorbents, not biological). |
| popPK | Nabdi_2023 | irrelevant | 0 | 0 | Epidemiological depression study with no toxicokinetic parameters for protective antigen; substance is never discussed. |
| popPK | Nabi_2024 | irrelevant | 0 | 0 | The paper models plastic-water partitioning and fish LC50 for diverse organic chemicals; "protective antigen" is not the subject and no such kinetic parameters appear (values are partly in supplementary tables). |
| popPK | Nagendra_2015 | irrelevant | 0 | 0 | Paper reports only an LD50 for recombinant lethal toxin in mice, not any toxicokinetic parameter (half-life, clearance, rate constants, etc.) for protective antigen. |
| popPK | Nagy_2017 | irrelevant | 2 | 2 | The toxicokinetic parameters (half-life, CL, Vss, AUC, population PK model) belong to obiltoxaximab, the anti-PA antibody; PA appears only as the binding target/analyte with no kinetic parameters of PA itself, and detailed values live in supplementary tables/figures not provided. |
| PGx | Nakamura_2018 | not_relevant | 0 | 0 | Paper is a bacterial genotyping/outbreak study with no host pharmacogenomic effects on PK/PD parameters. |
| PGx | Namasivayam_2021 | not_relevant | 0 | 0 | Paper describes computational discovery of ABC transporter inhibitors; no gene variants/genotypes linked to PA pharmacokinetic or pharmacodynamic parameters. |
| popPK | Nandikolla_2023 | irrelevant | 0 | 0 | Paper reports MIC values and ADMET predictions for phenanthridine derivatives against M. tuberculosis; no toxicokinetic parameters for "protective antigen" substance. |
| PGx | Nazir_2025 | not_relevant | 0 | 0 | Protein engineering study of a bacterial lysophospholipase; no pharmacogenomic effect on protective antigen PK/PD parameters. |
| PGx | Noguchi_2026 | not_relevant | 0 | 0 | The paper studies PNPLA3-I148M effects on hepatocyte lipid toxicity, with no drug (protective antigen) PK/PD parameter examined. |
| popPK | Nussmeier_1989 | irrelevant | 0 | 0 | The substance is isoflurane, not protective antigen; protective antigen does not appear at all. |
| PGx | Papić_2018 | not_relevant | 0 | 0 | Study of PEG-IFN/RBV in elderly HCV patients reports no gene variant/genotype effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Parry_2008 | irrelevant | 0 | 0 | The paper concerns the drug siramesine binding to phospholipids; protective antigen is not a subject or mentioned substance, so no toxicokinetic parameters for it exist here. |
| popPK | Paulusma_2025 | irrelevant | 0 | 0 | Materials-science paper on gas adsorption in COFs; no toxicokinetic parameters for protective antigen or any biological system. |
| popPK | Pemberton_2025 | irrelevant | 0 | 0 | The paper studies glucose responses to physical activity in type 1 diabetes; protective antigen is never mentioned and no toxicokinetic parameters for it exist anywhere in the text. |
| popPK | Pereira_2024 | irrelevant | 0 | 0 | This is an antimicrobial peptide SAR study with no toxicokinetic parameters for a substance named protective antigen; "PA" here means peptide amphiphile, not Bacillus anthracis protective antigen. |
| popPK | Peters_2001 | irrelevant | 0 | 0 | Paper concerns thiabendazole resistance in Fusarium on potatoes; no kinetic parameters for protective_antigen of any kind. |
| PGx | Pisapia_2023 | not_relevant | 0 | 0 | Paper describes an in vitro kidney MPS model; no gene variant/genotype effects on protective_antigen PK/PD are reported. |
| PGx | Qiu_2023 | not_relevant | 0 | 0 | The paper studies immune responses to Ad5-nCoV vaccination in persistent asymptomatic SARS-CoV-2 infection; no gene variants/genotypes/pharmacogenomic effects on PK/PD parameters of the antigen are reported. |
| popPK | Qu_2017 | irrelevant | 0 | 0 | The paper's subject substance is atrazine, not protective antigen; all kinetic parameters (half-lives, partition coefficients) pertain to atrazine in lake sediments and macrophytes. |
| popPK | Qureshi_2026 | irrelevant | 0 | 0 | The paper studies thymol, sodium azide and sodium lauryl sulfate against microbes; protective_antigen does not appear as a subject substance and no toxicokinetic parameters for it are reported. |
| popPK | Rechthand_1987 | irrelevant | 0 | 0 | The paper reports permeability coefficients for nonelectrolytes (urea, sucrose, mannitol, L-glucose) at the blood-nerve barrier in rats, not any kinetic parameters for protective antigen. |
| popPK | Rehse_2018 | irrelevant | 0 | 0 | The subject substance is bisphenol A, not protective antigen; only a BPA–polyamide partition coefficient is reported, and protective antigen is absent from the paper. |
| popPK | Rian_2020 | irrelevant | 0 | 0 | Biomonitoring concentration study of phthalate metabolites in porpoise liver; no kinetic parameters for protective antigen, which does not appear at all. |
| popPK | Rodriguez-Mireles_2024 | irrelevant | 0 | 0 | The paper is a socioeconomic epidemiological study of diet and physical activity in children with no kinetic parameters for protective antigen. |
| popPK | Rubinson_2017 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PGx | Rybalko_1987 | not_relevant | 0 | 0 | Paper concerns pantothenic acid/CoA in alcoholic delirium, not protective antigen pharmacogenomics or PK/PD effects. |
| PGx | Saheli_2018 | not_relevant | 0 | 0 | No gene variant/genotype or protective antigen drug is involved; this is a liver ECM hydrogel organoid study. |
| PGx | Sakrani_2021 | not_relevant | 0 | 0 | Paper reports a PCCA mutation causing propionic acidemia; no pharmacogenomic effect on PK/PD parameters of any drug including protective antigen is described. |
| popPK | Saulicz_2026 | irrelevant | 0 | 0 | This is an epidemiological systematic review of physical activity and cardiovascular outcomes with no toxicokinetic parameters for protective antigen present. |
| popPK | Savitskii_2023 | irrelevant | 0 | 0 | The kinetic parameters (Cmax, AUC, tissue concentrations) belong to Fluorothiazinon, not to protective_antisol; "PA" here is Pseudomonas aeruginosa, not the subject substance. |
| popPK | Schmidt_2015 | irrelevant | 0 | 0 | "PA" in this paper is α-pinene-derived pinanic acid, a metabolite of monoterpenes — not anthrax protective antigen — and the paper reports only exposure/biomonitoring concentrations, not kinetic parameters for protective antigen. |
| popPK | Schrenk_2020 | irrelevant | 0 | 0 | This is a review of pyrrolizidine alkaloids; no substance named protective antigen appears as the subject, and no numeric kinetic values are present in the evidence. |
| popPK | Schrenk_2022 | irrelevant | 0 | 0 | A workshop report on pyrrolizidine alkaloids generally, with no quantitative kinetic parameters for protective antigen and no numeric values present. |
| PGx | Shah_2019 | not_relevant | 0 | 0 | Paper reviews SNPs in pituitary adenoma tumorigenesis; no drug PK/PD pharmacogenomic effects for protective_antigen are reported. |
| PGx | Sharma_2025 | not_relevant | 1 | 0 | Review on big data analytics in cardiovascular care; no gene variant effect on protective antigen PK/PD reported. |
| PGx | Simmons_2021 | not_relevant | 0 | 0 | The paper studies host genetic (PRKAG2) associations with resistance to Mtb infection and macrophage FFA effects on Mtb growth; it contains no drug and no pharmacokinetic/pharmacodynamic parameters for protective_antigen. |
| PGx | Smith_2025 | not_relevant | 0 | 0 | Paper studies evolution of plant PA biosynthesis enzymes (HSS/DHS) in Apocynaceae, with no drug PK/PD pharmacogenomic effects. |
| PGx | Smits_2016 | not_relevant | 0 | 0 | Paper examines BDNF genotype effects on smoking cessation efficacy, not on any pharmacokinetic or pharmacodynamic parameter of protective antigen. |
| popPK | Smits_2020 | irrelevant | 0 | 0 | The paper concerns perinatal asphyxia (also abbreviated "PA"), with PK data on drugs like gentamicin and midazolam; protective antigen never appears as the subject substance. |
| popPK | Sokolnikov_2015 | irrelevant | 0 | 0 | This is an epidemiological dose-response mortality study in which plutonium appears only as a co-exposure/comparator with no toxicokinetic parameters reported. |
| popPK | Sotnik_2014 | irrelevant | 0 | 0 | The paper is an epidemiological cytogenetic study of plutonium-239-exposed workers; protective antigen is absent and no kinetic parameters exist. |
| popPK | Sou_2019 | irrelevant | 0 | 0 | The paper reports PK of quorum sensing inhibitor drug candidates in a Pseudomonas lung infection model; protective antigen is not the subject substance and no parameters for it appear. |
| popPK | Sou_2020 | irrelevant | 0 | 0 | "PA" in this paper refers to Pseudomonas aeruginosa, not protective antigen; all kinetic parameters concern tobramycin in a rat lung infection model, with none for protective antigen. |
| popPK | Sreekumar_2022 | irrelevant | 0 | 0 | The paper concerns chitosan polymers and chitin deacetylases; protective antigen is not the subject and no kinetic parameters for it appear anywhere. |
| PGx | Stang_1992 | not_relevant | 0 | 0 | No genetic variant/genotype studied; glycosylation variants of t-PA, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Stefan_2022 | irrelevant | 0 | 0 | A cheminformatics dataset of ABC transporter inhibitor IC50 values; no toxicokinetic parameters for protective antigen appear anywhere, and the substance is not even mentioned. |
| popPK | Stroe_2024 | irrelevant | 0 | 0 | The paper concerns perinatal asphyxia (PA) and drugs (midazolam, fentanyl, phenobarbital, topiramate) in minipigs; "PA" is not the substance protective antigen, so no kinetics for it. |
| popPK | Sui_2026 | irrelevant | 0 | 0 | The paper studies GPR119 anti-inflammatory signaling in zebrafish liver; protective antigen does not appear as the substance, and no toxicokinetic parameters for it are present. |
| popPK | Sun_2022 | irrelevant | 0 | 0 | The substance is not protective antigen (PA here denotes polyamide microplastic); the paper reports microbial degradation half-lives of halogenated PAHs, not toxicokinetics of protective antigen in any species. |
| popPK | Sun_2024 | irrelevant | 0 | 0 | This is a materials chemistry study on adsorption of formaldehyde by MOFs, with no toxicokinetic parameters for protective antigen. |
| popPK | Sârbu_2008 | irrelevant | 0 | 3 | QSAR modeling of bile acid partition coefficients; protective antigen does not appear as a subject substance and no toxicokinetic parameters for it are present. |
| popPK | Tabatabai_2024 | irrelevant | 0 | 0 | "PA" here means probit analysis, a statistical method, not the substance protective antigen; the paper is a machine-learning classification study on liver cirrhosis with no toxicokinetic data. |
| PGx | Tainsky_1991 | not_relevant | 0 | 0 | Paper studies N-ras effects on retinoic acid-induced differentiation in PA-1 cells, with no pharmacogenomic effect on a PK/PD parameter. |
| popPK | Tandjaoui_2016 | irrelevant | 0 | 0 | The paper concerns enzymatic removal of 2-chlorophenol by Brassica rapa peroxidase in silicone oil; protective antigen is not mentioned and no kinetic parameters for it exist (partition coefficients belong to 2-CP, not the subject substance). |
| popPK | Taylor_1988 | irrelevant | 0 | 0 | This is a biochemical characterization of a Schistosoma glutathione transferase antigen, with no toxicokinetic parameters (no half-life, clearance, partition coefficients, or disposition data). |
| PGx | Terlizzi_2024 | not_relevant | 0 | 0 | No drug exposure or PK/PD parameters for protective_antigen are studied; only CF disease progression predictors are reported. |
| popPK | Thaye_2020 | irrelevant | 0 | 0 | This paper concerns paclitaxel-induced cytokeratin-18 biomarker release in ovarian cancer cell lines and mouse xenografts; protective antigen does not appear as a study substance and no kinetic parameters for it are reported. |
| PGx | Thomas_2007 | not_relevant | 0 | 0 | Immunology paper on influenza CD8+ T-cell epitopes; no drug, gene variant, or PK/PD parameter for protective_antigen. |
| popPK | Thá_2026 | irrelevant | 0 | 0 | The kinetic parameters (lung clearance, t1/2, retention) belong to polystyrene and polyamide-6 nanoplastic particles, not to protective antigen, which does not appear in the paper at all. |
| popPK | To_2024 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for pyrrolizidine alkaloids (retrorsine, monocrotaline, clivorine) in rats, not for protective_antigen, which does not appear as a subject substance. |
| popPK | Tokarskaya_2002 | irrelevant | 0 | 0 | This is an epidemiological case-control study of plutonium and radiation lung cancer risk with no toxicokinetic parameters for protective antigen. |
| popPK | Tong_1996 | irrelevant | 0 | 0 | The paper reports partition and diffusion coefficients of unrelated proteins/polymers in polyacrylamide gels; no toxicokinetic parameters for protective antigen. |
| popPK | Tonheim_2008 | irrelevant | 1 | 2 | This is a review of DNA vaccine persistence/distribution in fish; "protective antigen" is only a generic term in the vaccine construct, no numeric TK parameters for protective antigen itself are present. |
| popPK | Topp_1977 | irrelevant | 0 | 0 | The paper concerns SV40 tumor antigen in mouse teratocarcinoma cell lines, with no toxicokinetic parameters for protective antigen; "protective antigen" does not appear at all. |
| popPK | Truchet_2022 | irrelevant | 0 | 0 | This is an environmental monitoring study of microplastics in crabs with no kinetic parameters, and no mention of protective_antigen. |
| popPK | Ulvik_2014 | irrelevant | 0 | 0 | Study of vitamin B-6 catabolism ratios in humans; protective antigen plays no role and no toxicokinetic parameters for it are present. |
| popPK | Vellingiri_2016 | irrelevant | 0 | 0 | The paper concerns adsorption of sulfur gases on zeolite (an environmental/remediation material), not toxicokinetics of protective antigen; no protective antigen kinetic parameters are present. |
| PGx | Verstraete_1995 | not_relevant | 0 | 0 | Paper discusses thrombolytic agent development; no mention of protective antigen or pharmacogenomic effects on PK/PD parameters. |
| popPK | Vikrant_2020 | irrelevant | 0 | 0 | The paper concerns MOF adsorption of aldehydes; protective antigen does not appear at all, so no toxicokinetic parameters for it exist. |
| popPK | Waite_1997 | irrelevant | 0 | 0 | This is a cell biology study on phosphatidic acid-activated protein kinase; no toxicokinetic parameters for protective antigen are present. |
| popPK | Wang_1989 | irrelevant | 0 | 0 | The paper's kinetic data (uptake, partition coefficient) concern ganodermic acid S in human platelets, not protective antigen. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The substance studied is PA-824 (a tuberculosis drug), not the anthrax protective antigen; no kinetic parameters for protective antigen appear. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper concerns carbon dot probes and bisphenol A cellular imaging with no protective_antigen or toxicokinetic parameters of any kind. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | Propionate is an endogenous metabolite in propionic acidemia, not the drug protective antigen; no pharmacogenomic effect on a PK/PD parameter of a drug is reported. |
| popPK | Wang_2024_2 | irrelevant | 0 | 0 | The paper concerns catalytic oxidation of hydrogen sulfide by an air purifier; it contains no toxicokinetic data for protective antigen and the cited kinetic/partition parameters describe H2S adsorption on the catalyst, not a biological disposition. |
| popPK | Wang_2025_2 | irrelevant | 0 | 0 | The paper concerns xanthine oxidase inhibition by phenolic acids (ferulic, p-coumaric, gallic, protocatechuic); protective_antigen (Bacillus anthracis toxin) never appears, so no toxicokinetic parameters for the subject substance exist. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | This is a network meta-analysis of physical activity effects on executive function in children; no kinetic parameters for protective antigen of any kind appear. |
| popPK | White_1996 | irrelevant | 0 | 0 | "protective_antigen is not studied at all; the paper reports sorption partition coefficients for genotoxins in industrial effluents, an unrelated substance and topic." |
| popPK | Wicht_2022 | irrelevant | 0 | 0 | This is a placebo analgesia EEG study in humans with sham morphine; no toxicokinetic parameter of protective antigen is reported. |
| popPK | Widjaja_2022 | irrelevant | 1 | 1 | "PA" here denotes pyrrolizidine alkaloids (lasiocarpine, riddelliine, monocrotaline), not the substance protective antigen; it appears never as the subject substance. |
| popPK | Widjaja_2023 | irrelevant | 0 | 0 | The kinetic parameters (Vmax, Km, kcat, AUC, PBK model) all belong to senecionine/senecionine N-oxide, not to protective antigen, which appears nowhere in the paper. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | Human PM2.5 exposure-outcome panel study with no kinetic parameters for protective antigen (not the subject substance); no toxicokinetic values present. |
| popPK | Xie_2015 | irrelevant | 0 | 0 | The paper concerns diacylglycerol kinases and lipid signaling ("PA" = phosphatidic acid), entirely unrelated to the protective antigen toxin, with no kinetic parameters. |
| popPK | Xie_2023 | irrelevant | 0 | 0 | This is an exposure/risk assessment of phthalate metabolites in dolphins and fish, with no kinetic parameters for protective antigen. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | "PA" here is physical activity in a human epidemiological CVD study; no toxicokinetic parameters for the substance protective antigen appear anywhere. |
| popPK | Xu_2009 | irrelevant | 0 | 0 | Environmental air-partitioning study of PCDD/Fs, not a toxicokinetic study of protective antigen; no parameters for the subject substance. |
| popPK | Xue_2010 | irrelevant | 0 | 0 | This is a human exposure/commuting pattern modeling paper with no toxicokinetic parameters for protective antigen or any substance. |
| popPK | Yang_2017 | irrelevant | 0 | 0 | This paper concerns pyrrolizidine alkaloids and their N-oxides; protective antigen does not appear as the subject substance and no kinetic parameters for it are present. |
| popPK | Yang_2018 | irrelevant | 0 | 0 | The paper contains toxicokinetic parameters (AUC, CLint) for retrorsine, not for protective antigen, which does not appear as the subject substance. |
| PGx | Yang_2019 | not_relevant | 2 | 2 | The paper describes microbial/CYP-mediated metabolism of pyrrolizidine alkaloid N-oxides but reports no gene variant/genotype effects on PK/PD parameters ("protective antigen" is not the compound). |
| popPK | Yang_2020 | irrelevant | 0 | 0 | The paper reports absorption/permeability parameters for pyrrolizidine alkaloids, not for protective antigen, which does not appear as the subject substance. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | This is a GRB10 polymorphism study on CHD risk/lipids in T2DM with no drug or PK/PD parameter for protective_antigen. |
| popPK | Yang_2021_2 | irrelevant | 0 | 0 | The paper studies ATG4 gene expression in grass carp cells exposed to palmitic acid, with no kinetic parameters for protective antigen of any kind. |
| PGx | Yang_2025 | not_relevant | 0 | 0 | The paper studies flavonoid biosynthesis in muscadine grape development; no drug, no pharmacokinetic or pharmacodynamic parameters. |
| PGx | Yang_2025_2 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (CYP3A4 inhibitors) affecting GP1707D07 PK, but no gene variant/genotype/phenotype effects are studied. |
| PGx | Yuba_1995 | not_relevant | 0 | 0 | Paper concerns plant chemotype genetics in Perilla, not pharmacogenomic effects on drug PK/PD parameters. |
| popPK | Zaric_2018 | irrelevant | 0 | 0 | "PA" is a sampling location (Pančevo), not anthrax protective antigen; this is an environmental metal bioindication study with no toxicokinetic parameters. |
| popPK | Zarów_2008 | irrelevant | 0 | 0 | Human epidemiological study of menarche recall with no kinetic parameters for protective antigen. |
| PGx | Zeng_2019 | not_relevant | 0 | 0 | No gene variant/genotype effect on protective antigen PK/PD; paper concerns CYP3A/PXR in NAFLD. |
| PGx | Zeymer_1994 | not_relevant | 0 | 0 | Review of engineered thrombolytic agents; no gene variant/genotype effects on PK/PD of protective antigen reported. |
| popPK | Zhang_2018 | irrelevant | 0 | 0 | "PA" in this paper is palmitic acid conjugated to cytarabine (PA-Ara), not the substance protective antigen; all kinetic parameters (bioavailability 61.77%, t1/2, AUC) belong to cytarabine/Ara-C in rats, not to protective antigen. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | Study concerns patchouli alcohol's PXR-mediated anti-inflammatory effects; no gene variant/genotype effect on PK/PD parameters of protective antigen. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | Paper reports ALPL variants causing hypophosphatasia; "PA" labels patients, not protective antigen, and no drug PK/PD pharmacogenomic effects are studied. |
| popPK | Zhang_2021_2 | irrelevant | 0 | 0 | Epidemiological association study with no toxicokinetic parameters for protective antigen; protective antigen does not appear at all. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper is about tactile electronic skin sensors with no toxicokinetic parameters of protective antigen. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | Epidemiological time-series study of meteorological factors and Bell's palsy; substance protective_antigen never appears and no kinetic parameter is reported. |
| PGx | Zhao_2018 | not_relevant | 0 | 0 | Paper is about hAEC hepatic differentiation on biomaterial hydrogels; no gene variant effect on PK/PD of protective antigen. |
| popPK | Zhao_2022 | irrelevant | 0 | 0 | This is a wearable magnetoelastic sensor paper with no toxicokinetic parameters for protective antigen; no numeric kinetic data of any kind appear. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper is a social survey study on physical exercise and subjective wellbeing with no toxicokinetic parameters for protective antigen. |
| popPK | Zheng_2021 | irrelevant | 0 | 0 | The paper studies pyrrolizidine alkaloids in HepaRG cells with in silico ADMET predictions; protective antigen is not the subject and no kinetic parameters (half-life, clearance, partition coefficients, etc.) for it appear anywhere. |
| PGx | Zhu_2019 | not_relevant | 0 | 0 | Review of dietary proanthocyanidins in grains; no gene variant effects on drug PK/PD parameters. |
| PGx | Zhu_2024 | not_relevant | 0 | 0 | Study of FIB-4 index predicting rt-PA thrombolysis outcomes; no gene variant/genotype and no PK/PD parameter of alteplase reported. |
| PGx | Zhu_2026 | not_relevant | 4 | 3 | The paper discusses viral I38T mutation affecting antiviral activity (PD) qualitatively in docking/CPE assays, but no fitted pharmacogenomic effect on a PK/PD parameter of a drug is reported. |
| popPK | Zhu_2026_2 | irrelevant | 0 | 0 | The paper concerns radon exposure and lung cancer risk, with no toxicokinetic parameters for protective antigen of any kind. |
| PGx | Zorić_2023 | not_relevant | 2 | 5 | This is a viral molecular-characterisation study (influenza amino acid markers of virulence/antiviral susceptibility in swIAVs), not a pharmacogenomic analysis of how a host or pathogen gene variant alters PK/PD parameters of protective antigen; no fitted effect sizes or PK/PD parameters are reported. |
| popPK | Zwahlen_2008 | irrelevant | 0 | 0 | Radiotherapy secondary-cancer risk modeling with no toxicokinetic parameters for protective antigen. |
| popPK | Zwart_1982 | irrelevant | 0 | 0 | No substance-specific toxicokinetic parameters; a general model of respiratory gas exchange with no numeric values for protective antigen. |
| popPK | Zwart_1983 | irrelevant | 1 | 1 | Lung inert-gas exchange simulation for generic tracer gases, not protective_antigen; no kinetic parameters of the substance. |
| popPK | Zwart_1986 | irrelevant | 0 | 0 | The subject substances are inert tracer gases, not protective antigen; no parameters for protective antigen appear. |
| popPK | unknown_2012 | irrelevant | 0 | 0 | An epidemiological outcome study of Mayak workers with no kinetic parameters for protective antigen (PA here is plutonium-americium production site, not a substance TOXkinetics subject). |
| PGx | unknown_2023 | not_relevant | 0 | 0 | Consensus statement on cystic fibrosis diagnosis/treatment; no drug named 'protective_antigen' and no gene variant effects on PK/PD parameters. |
| popPK | van_1995 | irrelevant | 0 | 0 | Occupational exposure epidemiology study with air concentration measurements and no kinetic parameters for any substance. |
| popPK | van_1998 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | van_2000 | irrelevant | 0 | 0 | This is a skin sensitization LLNA dose-response study of contact allergens (phthalic anhydride abbreviated "PA" is not protective antigen); no toxicokinetic parameters for protective antigen are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprotective_antigen%5D&body=Drug%3A%20protective_antigen%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_protective_antigen/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>

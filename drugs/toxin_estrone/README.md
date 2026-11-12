<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Estrone&quot;}]"></div>

# Estrone

- **generic name:** Estrone
- **T3DB:** [T3D4746](http://www.t3db.ca/toxins/T3D4746) · **DrugBank:** [DB00655](https://go.drugbank.com/drugs/DB00655) · **PubChem:** [CID 5870](https://pubchem.ncbi.nlm.nih.gov/compound/5870)
- **groups:** approved

## About

Estrone, one of the major mammalian estrogens, is an aromatized C18 steroid with a 3-hydroxyl group and a 17-ketone. It is produced in vivo from androstenedione or from testosterone via estradiol. It is produced primarily in the ovaries, placenta, and in peripheral tissues (especially adipose tissue) through conversion of adrostenedione. …

- **Category:** Drug, Food Toxin, Natural Toxin, Animal Toxin
- **Route of exposure:** 43%
- **Sources and uses:** For management of perimenopausal and postmenopausal symptoms.
- **Mechanism of toxicity:** Estrogens enter the cells of responsive tissues (e.g. female organs, breasts, hypothalamus, pituitary) where they interact with estrogen receptors. Hormone-bound estrogen receptors dimerize, translocate to the nucleus of cells and bind to estrogen response elements (ERE) of genes. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4746">T3DB T3D4746</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 53-16-7 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:17263">ChEBI 17263</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="other animal" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Pi_2017_reference](drugs/toxin_estrone/Estrone_Pi2017_reference.md) | — | 1-compartment (no model) | 0 | Pi N et al., Bioaccumulation of pharmaceutically act…, The Science of the total en… (2017) | [10.1016/j.scitotenv.2017.05.137](https://doi.org/10.1016/j.scitotenv.2017.05.137) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **SLCO1B1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Moyer_2018](drugs/toxin_estrone/pgx_Moyer_2018_SLCO1B1_Q100.md) | Moyer AM et al., SLCO1B1 genetic variation and hormone t…, Menopause (New York, N.Y.) (2018) | [10.1097/GME.0000000000001109](https://doi.org/10.1097/GME.0000000000001109) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | **OATP1B3** | `Q349` · kuptake | transport | [Yang_2025](drugs/toxin_estrone/pgx_Yang_2025_OATP1B3_Q349.md) | Yang Z et al., Association Study of OATP1B3 Polymorphi…, ACS omega (2025) | [10.1021/acsomega.5c05726](https://doi.org/10.1021/acsomega.5c05726) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=estrone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inducer/substrate, `ABCG2` inhibitor, `SLCO1A2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inducer/substrate, `ABCG2` inhibitor, `SLCO1A2` inhibitor | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inducer/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` substrate, `CYP2C9` substrate, `CYP2E1` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor/transport, `SLCO2B1` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate, `CYP1B1` substrate | DrugBank actor |
| metabolism | skin | `CYP1B1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` inducer/substrate, `SLC22A8` substrate | DrugBank actor |
| excretion | liver | `ABCB1` inducer/substrate, `ABCG2` inhibitor | DrugBank actor |
| — | adipose tissue | `CYP19A1` unknown | DrugBank actor |
| — | ovary | `CYP19A1` unknown | DrugBank actor |
| — | prostate gland | `AR` unknown | DrugBank actor |
| — | testis | `CYP19A1` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (target), ESR2 (unknown), OATP1B3 (transport), SHBG (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 00:10 | 37:22 | 0/1/0 | 0/0/0 | 0/0/2 | 491,250/22,043 | einfracz / qwen3.8-27b | 29 | 4/22 | 29/0 | 0 |

## Coverage

- **PubMed hits:** 556 matched, 215 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Törn_2003.pdf` | Törn S et al., Production, purification, and functiona…, Biochemical and biophysical… (2003) | popPK | 10 | [10.1016/s0006-291x(03)00694-6](https://doi.org/10.1016/s0006-291x(03)00694-6) | [12732193](https://pubmed.ncbi.nlm.nih.gov/12732193) | The paper reports kinetic parameters (Vmax, Km) for the metabolism of estrone to estradiol, but the specific numeric values are likely in tables or figures not included in the provided abstract text. |
| `Wang_2019.pdf` | Wang X et al., Amino-terminal region of human organic…, Toxicology and applied phar… (2019) | popPK | 10 | [10.1016/j.taap.2019.114642](https://doi.org/10.1016/j.taap.2019.114642) | [31254566](https://pubmed.ncbi.nlm.nih.gov/31254566) | The paper reports in vitro kinetic parameters (Km and Vmax) for the substrate estrone-3-sulfate regarding human OATP1B1, but the specific numeric values are not included in the provided evidence. |
| `Esteve_2001.pdf` | Esteve M et al., Intestinal handling of an oral oleoyl-e…, Life sciences (2001) | popPK | 9 | [10.1016/s0024-3205(01)01160-2](https://doi.org/10.1016/s0024-3205(01)01160-2) | [11487089](https://pubmed.ncbi.nlm.nih.gov/11487089) | The paper describes the kinetic handling (absorption and tissue distribution) of an estrone derivative (oleoyl-estrone) in rats, reporting qualitative and semi-quantitative patterns (e.g., one-third dose recovered in tissues) rather than specific rate constants or half-lives in the provided text. |
| `Pi_2017.pdf` | Pi N et al., Bioaccumulation of pharmaceutically act…, The Science of the total en… (2017) | popPK | 9 | [10.1016/j.scitotenv.2017.05.137](https://doi.org/10.1016/j.scitotenv.2017.05.137) | [28578239](https://pubmed.ncbi.nlm.nih.gov/28578239) | The paper reports quantitative bioconcentration factors (BCFs) for estrone (E1) in aquatic macrophytes, with specific numeric ranges (2-150 L/kg) provided in the abstract. |
| `Nokelainen_1998.pdf` | Nokelainen P et al., Expression cloning of a novel estrogeni…, Molecular endocrinology (Ba… (1998) | popPK | 8 | [10.1210/mend.12.7.0134](https://doi.org/10.1210/mend.12.7.0134) | [9658408](https://pubmed.ncbi.nlm.nih.gov/9658408) | The paper reports in vitro kinetic parameters (Vmax/Km) for the metabolism of estrone to estradiol by a specific enzyme. |
| `Verheugen_1984.pdf` | Verheugen C et al., Differential permeability of uterine an…, The Journal of clinical end… (1984) | popPK | 8 | [10.1210/jcem-59-6-1128](https://doi.org/10.1210/jcem-59-6-1128) | [6092408](https://pubmed.ncbi.nlm.nih.gov/6092408) | The study reports relative permeability/influx kinetics of estrone in rat uterine and liver vascular beds, but specific numeric values are not explicitly listed in the text provided. |
| `Balasubramonian_2024.pdf` | Balasubramonian B et al., Steroid sulfatase in mouse liver and te…, Steroids (2024) | popPK | 5 | [10.1016/j.steroids.2024.109483](https://doi.org/10.1016/j.steroids.2024.109483) | [39053631](https://pubmed.ncbi.nlm.nih.gov/39053631) | The paper reports a Km value for estrone sulfate (E1S), a direct conjugate of the subject estrone, in mouse liver and testis, constituting quantitative metabolic kinetic data. |
| `Brandau_1985.pdf` | Brandau W et al., Synthesis and pharmacokinetics of 131I…, The International journal o… (1985) | popPK | 5 | [10.1016/0020-708x(85)90278-9](https://doi.org/10.1016/0020-708x(85)90278-9) | [3926658](https://pubmed.ncbi.nlm.nih.gov/3926658) | While the paper mentions tissue distribution and clearance in rats, no specific quantitative kinetic parameters (half-lives, rate constants, volumes) are provided in the text. |

<sub>queue written 2026-11-10 00:01 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2018 | irrelevant | 0 | 0 | The paper describes the adsorption/sorption of estrone onto functionalized biochar in a chemical system, not toxicokinetic parameters (absorption, distribution, metabolism, or excretion) in biological organisms. |
| popPK | Akinola_1996 | irrelevant | 3 | 0 | The paper characterizes 17HSD enzymes that metabolize estrone (as a substrate in vitro) but does not report pharmacokinetic parameters (half-life, clearance, Vd) for the substance itself in a whole organism. |
| popPK | Al-Majdoub_2025 | irrelevant | 0 | 0 | Estrone 3-sulfate is mentioned only as a transport substrate for BCRP activity assays, not as the subject of toxicokinetic parameter estimation. |
| popPK | Ali_1993 | irrelevant | 0 | 0 | The paper investigates synthetic fluorinated derivatives of iodovinylestradiols for receptor binding and imaging, not the toxicokinetic parameters of estrone itself. |
| PGx | Alshabi_2023 | not_relevant | 0 | 0 | The study examines the effect of hormonal concentrations on CYP enzyme activity in hepatocytes, not the effect of genetic variants on the PK/PD of estrone. |
| popPK | Arukwe_2013 | irrelevant | 0 | 0 | The paper reports changes in estrone concentration as an endpoint of PFOS/PFOA exposure in salmon, but does not report any kinetic parameters (half-life, clearance, partition coefficients) for estrone itself. |
| popPK | Benzi_2024 | irrelevant | 0 | 0 | Estrone is used solely as a pregnancy-related hormone in a cocktail to study the induction of hepatic transporters, not as the subject substance for toxicokinetic parameter extraction. |
| popPK | Berthod_2006 | irrelevant | 0 | 0 | The paper is a chromatographic method study where estrone is used only as a test solute for band broadening, with no toxicokinetic parameters reported. |
| popPK | Brandau_1985 | irrelevant | 5 | 0 | While the paper mentions tissue distribution and clearance in rats, no specific quantitative kinetic parameters (half-lives, rate constants, volumes) are provided in the text. |
| popPK | Burckhardt_2011 | irrelevant | 0 | 0 | The paper is a review of organic anion transporters and mentions estrone sulfate only as a substrate example without providing any quantitative kinetic parameters (half-life, clearance, etc.) for estrone. |
| PGx | Burckhardt_2011 | not_relevant | 0 | 0 | The text is a review of OAT transporters and mentions estrone sulfate, but does not report a specific pharmacogenomic effect (gene variant) on the PK/PD of estrone. |
| popPK | Cai_2025 | irrelevant | 0 | 0 | The paper is an epidemiological association study measuring neonatal estrone concentrations in meconium, reporting no quantitative toxicokinetic parameters (e.g., half-life, clearance) for estrone. |
| popPK | Card_2012 | irrelevant | 0 | 0 | The paper reports soil sorption coefficients (environmental fate) rather than toxicokinetic parameters (disposition in biological systems). |
| popPK | Casey_1994 | irrelevant | 0 | 0 | The paper reports the chromosomal localization and mRNA expression levels of 17β-HSD type 2 in human tissues, but provides no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for estrone. |
| popPK | Casimirri_1991 | irrelevant | 0 | 0 | The paper reports circulating concentrations of estrone in obese men but provides no kinetic parameters (half-life, clearance, partition coefficients, etc.). |
| PGx | Cavalieri_2014 | not_relevant | 2 | 5 | The paper discusses the formation of estrogen-DNA adducts as a mechanism for cancer initiation and mentions SNP associations with cancer risk, but it does not report how specific gene variants alter the pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic parameters of estrone itself. |
| popPK | Chapy_2015 | irrelevant | 0 | 0 | Estrone-3-sulfate is used as a substrate for transporter characterization (RAF calculation) rather than being the subject of toxicokinetic parameter estimation; the PBPK model is for irbesartan. |
| PGx | Cheng_2026 | not_relevant | 2 | 5 | The study investigates gene-environment interactions on Type 2 Diabetes risk and does not report a pharmacogenomic effect on the PK or PD parameters of estrone. |
| popPK | Clark_2007 | irrelevant | 0 | 0 | The paper is an exposure/outcome study measuring E1G excretion levels to assess associations with RF exposure, not a kinetic study deriving parameters like half-life or clearance for estrone. |
| PGx | DeGorter_2012 | not_relevant | 0 | 0 | The study investigates the structural determinants of substrate specificity for cholecystokinin-8 (CCK-8) in OATP transporters, not the pharmacogenomics of estrone. |
| PGx | Drabison_2024 | not_relevant | 1 | 0 | The paper investigates the transport of tyrosine kinase inhibitors (specifically pazopanib) by OATP1B1; estrone (as estrone-3-sulfate) is only mentioned as a reference substrate for the assay, not as the drug under investigation. |
| PGx | Dudas_2022 | not_relevant | 0 | 0 | The paper describes molecular dynamics simulations of the ABCG2 transporter mechanism with estrone 3-sulfate, not a clinical study reporting pharmacogenomic effects on PK/PD parameters. |
| PGx | El_2019 | not_relevant | 0 | 0 | The paper describes an epigenetic mechanism (microRNA) regulating transporter expression, not a pharmacogenomic effect (DNA variant/genotype) on estrone PK/PD. |
| popPK | El_2024 | irrelevant | 0 | 0 | The paper is an exposure study on a mixture of 8 chemicals where estrone was measured as a hormonal endpoint (below quantification limit) rather than the subject substance, and no kinetic parameters for estrone are reported. |
| popPK | Endo_2016 | irrelevant | 1 | 0 | The paper describes enzyme characterization (DHRS11) in vitro with estrone as a substrate but provides no kinetic parameters (such as Km or Vmax) or in vivo toxicokinetic data. |
| popPK | Enginar_2008 | irrelevant | 2 | 0 | The paper studies radiolabeled estrone derivatives as imaging agents, not the kinetic parameters of estrone itself, and no specific quantitative numeric values are provided in the text. |
| popPK | Esteve_2001 | relevant | 9 | 2 | The paper describes the kinetic handling (absorption and tissue distribution) of an estrone derivative (oleoyl-estrone) in rats, reporting qualitative and semi-quantitative patterns (e.g., one-third dose recovered in tissues) rather than specific rate constants or half-lives in the provided text. |
| popPK | Farkas_2017 | irrelevant | 0 | 0 | The paper reports no quantitative kinetic parameters for estrone; estrone is only mentioned qualitatively as a steroid hormone whose plasma levels dropped below quantification limits due to co-exposure effects. |
| PGx | Farouk_2025 | not_relevant | 0 | 0 | The paper investigates the relationship between chromatographic retention and in-silico/in-vitro activity of glucocorticoids, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of estrone. |
| PGx | Fashe_2025 | not_relevant | 0 | 0 | The study examines how estrone (as a physiological hormone) induces CYP3A4 activity during pregnancy, rather than investigating how a genetic variant affects the pharmacokinetics or pharmacodynamics of estrone as a drug. |
| PGx | Fineman_1975 | not_relevant | 0 | 0 | The paper studies fish reproductive performance and genotype-hormone interactions, not pharmacokinetic/pharmacodynamic parameters in humans for the drug estrone. |
| popPK | Fleck_2018 | irrelevant | 0 | 0 | The paper reports steady-state serum concentrations and correlation coefficients for biomonitoring, but does not report quantitative toxicokinetic parameters such as half-life, clearance, or rate constants for estrone. |
| popPK | Gong_2012 | irrelevant | 0 | 0 | The paper is an environmental exposure study measuring concentrations and partitioning in water, reporting no toxicokinetic parameters (half-life, clearance, etc.) for estrone in biological systems. |
| popPK | Hamid_2013 | irrelevant | 0 | 0 | The paper studies the fate of hormones in anaerobic sludge digestion and does not report toxicokinetic parameters for estrone in biological organisms. |
| PGx | He_2022 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of natural compounds from a traditional Chinese medicine on UGT enzymes, not the impact of human genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Hetemäki_2025 | irrelevant | 0 | 0 | The paper is a review discussing the biological role of estrogen biosynthesis in adipose tissue and contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for estrone. |
| popPK | Houtman_2007 | irrelevant | 0 | 0 | The paper is an exposure study identifying environmental contaminants in fish, reporting no kinetic parameters for estrone. |
| PGx | Huo_2019 | not_relevant | 0 | 0 | The paper focuses on imipenem and cilastatin PK/PD interactions, not estrone, and does not report pharmacogenomic effects. |
| popPK | Husen_2001 | irrelevant | 2 | 0 | The paper focuses on the enzymatic expression (Northern Blot) and qualitative activity of 17HSD in marmoset endometrium, reporting no quantitative kinetic parameters (e.g., Vmax, Km, half-life, clearance) for estrone. |
| PGx | Häkkinen_2023 | not_relevant | 3 | 8 | The study examines the effect of SLCO1B1 variants on the uptake of estrone sulfate, which is a conjugate/precursor, rather than measuring the pharmacokinetic parameters (e.g., AUC, Cmax, clearance) of estrone itself in a clinical population. |
| popPK | Janneh_2008 | irrelevant | 0 | 0 | Estrone is not the subject substance; estrone-3-sulphate is used as a reagent/substrate to study OATP transporters in relation to saquinavir and lopinavir uptake. |
| popPK | Janneh_2009 | irrelevant | 0 | 0 | The paper focuses on the intracellular accumulation of the antiretroviral drugs efavirenz and nevirapine, using estrone-3-sulphate only as an inhibitor/reagent for SLCO transporters, and does not report kinetic parameters for estrone itself. |
| PGx | Jellinck_1993 | not_relevant | 0 | 0 | The study focuses on rat liver microsomes and does not investigate the effect of gene variants or human genotypes on the pharmacokinetics or pharmacodynamics of estrone. |
| PGx | Kallionpää_2015 | not_relevant | 1 | 1 | The paper characterizes the substrate specificity of UGT enzymes for estrone and 16α-hydroxyestrone using recombinant enzymes and microsomes, but does not report on a genetic variant or phenotype altering a PK/PD parameter in an individual. |
| popPK | Karmaus_2025 | irrelevant | 0 | 0 | The paper reviews high-throughput in vitro screening data for chlorotriazine herbicides (e.g., atrazine) and mentions estrone only as a detected assay endpoint (increase in levels) or a biological mediator, without reporting any quantitative toxicokinetic parameters (half-life, clearance, etc.) for estrone itself. |
| PGx | Katoh_2005 | not_relevant | 0 | 0 | The paper reports on the expression of human phase II enzymes in a chimeric mouse model but does not report a specific genetic variant (genotype) effect on pharmacokinetic parameters in humans. |
| popPK | Kaufmann_1995 | irrelevant | 0 | 0 | The paper describes the tissue distribution and enzyme kinetics (Vmax/Km) of 17 beta-estradiol dehydrogenase in pigs, not the toxicokinetic parameters of estrone itself. |
| popPK | Kerhoas_2024 | irrelevant | 0 | 0 | The paper investigates the inhibition of human drug transporters by fungicides (SDHIs), using estrone-3 sulfate only as a probe substrate to measure transporter activity rather than as the subject of a toxicokinetic study. |
| popPK | Killinger_1990 | irrelevant | 2 | 8 | The paper reports in vitro conversion rates of androstenedione to estrone in human adipose stromal cells, which is a metabolic conversion efficiency rather than a quantitative toxicokinetic parameter (e.g., half-life, clearance, partition coefficient) for estrone disposition. |
| popPK | Kim_2014 | irrelevant | 1 | 0 | The paper reports urinary concentrations of estrone in relation to BPA exposure (an epidemiological/outcome study) but does not report quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| PGx | Kita_2021 | not_relevant | 0 | 0 | The study reports synthetic compounds' inhibition of the ABCG2 transporter and mentions estrone-3-sulfate only as a reference ligand in docking studies, but it does not report pharmacogenomic effects on estrone's pharmacokinetics or pharmacodynamics. |
| PGx | Kitawaki_2002 | not_relevant | 2 | 0 | The paper discusses genetic polymorphisms (e.g., in CYP19, ER-alpha) associated with endometriosis risk and altered local estrogen metabolism, but does not report a pharmacogenomic effect on a specific PK or PD parameter of estrone as a drug. |
| popPK | Kuiper_1997 | irrelevant | 0 | 0 | The paper reports ligand binding constants (Kd) for estrogen receptors, which are pharmacodynamic/affinity parameters, not toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for estrone. |
| popPK | Kullak-Ublick_2001 | irrelevant | 2 | 0 | The paper reports in vitro transporter characterization of estrone-3-sulfate (a metabolite) without providing specific quantitative kinetic parameters (e.g., Km or Vmax) for estrone itself in the extracted evidence. |
| popPK | Lai_2002 | irrelevant | 2 | 1 | The paper reports bioaccumulation factors rather than the requested kinetic parameters (e.g., half-life, clearance, rate constants), and the specific numeric values are not present in the provided text. |
| PGx | Lakhani_2003 | not_relevant | 2 | 0 | The text is a review introduction discussing general concepts and potential clinical ramifications but does not report specific quantitative pharmacogenomic data or fitted effect sizes. |
| PGx | Le_2020 | not_relevant | 0 | 0 | The study investigates the effect of the cytokine IL-22 on drug metabolism enzymes/transporters, not the effect of a gene variant/genotype on estrone pharmacokinetics or pharmacodynamics. |
| PGx | Le_2024 | not_relevant | 0 | 0 | The study focuses on in vitro species-specific BCRP transport kinetics (comparing human, bovine, etc.) and does not investigate pharmacogenomic effects of human genetic variants on estrone PK/PD. |
| popPK | Lei_2009 | irrelevant | 0 | 0 | The paper reports environmental concentrations and sediment-water partitioning properties of estrogens, not toxicokinetic parameters (half-life, clearance, tissue kinetics) for estrone in a biological subject. |
| popPK | Leszczynski_1989 | irrelevant | 2 | 1 | The paper reports binding/partition coefficients for estrone with lipoproteins in human plasma, which is a disposition parameter, but no specific numeric values are present in the provided text. |
| popPK | Lima_2013 | irrelevant | 0 | 0 | The paper focuses on gene expression and cloning in a snail, mentioning estrone only as a general in vitro substrate example without providing any quantitative kinetic parameters for estrone. |
| popPK | Liu_2005 | irrelevant | 0 | 0 | The paper reports environmental colloid-water partition coefficients (Kcoc) for estrone, which is a physical-chemical property, not a biological toxicokinetic parameter (e.g., half-life, clearance, or tissue partition coefficient in an organism). |
| popPK | Liu_2013 | irrelevant | 1 | 0 | The study reports kinetic parameters (Km, Vmax) for estrone-3-sulfate, a metabolite, rather than estrone itself. |
| popPK | Liu_2014 | irrelevant | 0 | 0 | The paper is a biomonitoring method validation study that reports urinary concentrations/exposure levels, but does not report any quantitative toxicokinetic parameters (such as half-life, clearance, or rate constants) for estrone. |
| popPK | Luderer_2017 | irrelevant | 0 | 0 | The study is an epidemiological investigation of PAH exposure associations, and estrone appears only as a reproductive endpoint biomarker (E13G) without any toxicokinetic parameters (e.g., clearance, half-life, Vd) being reported. |
| PGx | Malagnino_2018 | not_relevant | 0 | 0 | The paper describes the function of a transporter on estradiol and DHEA sulfate, but does not investigate estrone or any pharmacogenomic effect on its pharmacokinetics or pharmacodynamics. |
| PGx | Mannermaa_1994 | not_relevant | 0 | 0 | The paper describes genetic polymorphisms in the EDH17B2 gene but does not report any changes in pharmacokinetic or pharmacodynamic parameters of estrone associated with these variants. |
| popPK | Marlatt_2020 | irrelevant | 0 | 0 | The paper is an epidemiological cohort study reporting associations between body composition, race, and menopausal hormonal changes (including estrone sulfate), but it contains no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients for estrone. |
| popPK | Martel_1992 | irrelevant | 2 | 0 | The paper reports enzyme activity levels (interconversion rates) for 17 beta-HSD, which are metabolic enzyme characteristics rather than the systemic toxicokinetic parameters (half-life, clearance, partition coefficients) of estrone itself, and no numeric values are present in the text. |
| popPK | Martel_1994 | irrelevant | 0 | 0 | The paper reports enzyme activities (metabolic capacity) in rhesus monkeys but contains no quantitative toxicokinetic parameters (half-life, clearance, etc.) for estrone. |
| PGx | Maximov_2014 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of tamoxifen and its metabolite endoxifen, not estrone; estrone is only used as a baseline inducer of cell growth. |
| popPK | Miki_2002 | irrelevant | 0 | 0 | The study characterizes the tissue distribution and expression of the enzymes steroid sulfatase and estrogen sulfotransferase, rather than reporting quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for estrone itself. |
| PGx | Mo_2009 | not_relevant | 5 | 0 | The paper mentions estrone as a substrate of CYP2B6 but does not report a specific pharmacokinetic or pharmacodynamic effect size for estrone based on a CYP2B6 gene variant. |
| popPK | Mueller_2015 | irrelevant | 0 | 0 | The paper is a review on steroid sulfation/desulfation pathways and does not report quantitative toxicokinetic parameters (half-life, clearance, etc.) for estrone itself. |
| PGx | Niwa_2015 | not_relevant | 1 | 0 | The paper reviews general metabolic activities of CYP enzymes on estrone but does not report pharmacogenomic effects of specific gene variants on PK or PD parameters. |
| PGx | Noguchi_2009 | not_relevant | 0 | 0 | The paper mentions estrone as a BCRP inhibitor to modulate chemotherapy resistance but does not report how a gene variant affects the PK/PD parameters of estrone itself. |
| popPK | Ohno_2008 | irrelevant | 1 | 1 | The paper describes the enzymatic activity of an enzyme on estrone in vitro (conversion rates) rather than quantitative toxicokinetic parameters (half-life, clearance, distribution) for estrone as a subject substance in a biological system. |
| popPK | Ohtsuki_2004 | irrelevant | 2 | 0 | The paper focuses on the molecular characterization of the Roct transporter in mouse and Xenopus, using estrone sulfate as a substrate for uptake studies rather than reporting in vivo toxicokinetic parameters (half-life, clearance, etc.) for estrone. |
| PGx | Orozco_2023 | not_relevant | 0 | 0 | The paper studies bile acid sulfate conjugates as substrates for OATP transporters and their pharmacogenomics; estrone is only mentioned as a non-specific tool compound/inhibitor, not as the drug of interest for PK/PD analysis. |
| PGx | Ostlund_2023 | not_relevant | 0 | 0 | The study investigates novel EGFR inhibitors in liver cancer cells and does not report pharmacogenomic effects on the PK or PD of estrone. |
| popPK | Pahwa_2017 | irrelevant | 0 | 0 | The paper focuses on the drug-drug interaction potential of rifampicin and dasatinib on OATP transporters, with estrone-3-sulfate serving only as a probe substrate for transporter characterization rather than the subject of toxicokinetic parameter estimation. |
| popPK | Paliwal_2010 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for doxorubicin (a drug) delivered via an estrone-anchored liposome, not for estrone itself as the subject substance. |
| PGx | Pavlič_2021 | not_relevant | 0 | 0 | The paper investigates the expression of transporter genes in cancer cell lines and tissues to understand local estrogen formation, but does not report a pharmacogenomic effect (gene variant/genotype) on the PK or PD of estrone in humans. |
| PGx | Pavlič_2022 | not_relevant | 0 | 0 | The study investigates endogenous estrogen biosynthesis in cancer cell lines, not the pharmacogenomic effect of a variant on the PK/PD of the drug estrone. |
| popPK | Peng_2023 | irrelevant | 0 | 0 | The paper is an epidemiological study analyzing associations between pollutant exposure and hormone levels (concentrations) without reporting any quantitative toxicokinetic parameters for estrone. |
| popPK | Porucznik_2014 | irrelevant | 0 | 0 | The paper is a validation study of an ovulation determination method and does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for estrone. |
| PGx | Qusa_2024 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions of sunscreen ingredients using estrone-3-sulfate as a substrate, but does not report any genetic variants or pharmacogenomic effects. |
| popPK | Ra_2008 | irrelevant | 0 | 0 | The paper investigates sorption and toxicity reduction of estrone by suspended particles, but reports no toxicokinetic parameters (half-life, clearance, etc.) for estrone itself. |
| popPK | Reutman_2002 | irrelevant | 0 | 0 | The study is an epidemiological assessment of endocrine effects (LH, hormone levels) due to hydrocarbon exposure and does not report quantitative toxicokinetic parameters (half-life, clearance, etc.) for estrone. |
| popPK | Rijks_1998 | relevant | 2 | 2 | The paper reports tissue distribution and retention ratios (e.g., target tissue-to-muscle) for the radiolabeled derivative E-[123I]NIVE in rats, which constitutes toxicokinetic data for the estrone derivative, though specific numeric values for half-life or partition coefficients are not explicitly listed in the text provided. |
| popPK | Sasaki_2018 | irrelevant | 0 | 0 | The paper studies ABCA8 transporter function regarding cholesterol and taurocholate efflux, and while estrone sulfate is tested as a substrate showing no significant efflux, no quantitative kinetic parameters (Vmax, Km, rates, etc.) for estrone or its metabolites are reported. |
| PGx | Schäfer_2019 | not_relevant | 0 | 0 | The paper focuses on drug-transport interactions involving hyperforin and estrone 3-sulfate, not pharmacogenomic effects of a gene variant on estrone PK/PD. |
| popPK | Scribner_1997 | irrelevant | 0 | 0 | The study investigates the tissue distribution and metabolism of fluorodoisynolic acids, not estrone, which is only used as the precursor chemical for synthesis. |
| popPK | Sharma_2025 | irrelevant | 0 | 0 | The paper studies the regulatory effects of estrone on hepatic transporter expression in cell lines, not the toxicokinetic parameters (clearance, half-life, etc.) of estrone itself. |
| PGx | Sinokki_2025 | not_relevant | 1 | 5 | The study measures cellular uptake of estrone sulfate (a substrate) in vitro, not the in vivo pharmacokinetic parameters of estrone. |
| PGx | Sjöstedt_2017 | not_relevant | 4 | 6 | The study reports in vitro transport activity for estrone sulfate (not estrone) across ABCG2 variants but does not report pharmacokinetic or pharmacodynamic parameters in humans or animal models. |
| PGx | Sjöstedt_2019 | not_relevant | 0 | 0 | The paper studies endogenous transport in insect cells using estrone sulfate and estradiol-17β-glucuronide as substrates, but does not report on human pharmacogenomics, specific gene variants affecting estrone, or clinical PK/PD parameters. |
| popPK | Song_1995 | irrelevant | 0 | 0 | The paper focuses on the molecular cloning and tissue expression of an enzyme that metabolizes estrone, rather than reporting kinetic parameters for estrone's disposition (such as clearance or half-life) in the subjects. |
| popPK | Steiner_2014 | irrelevant | 1 | 8 | The paper reports a Km value for estrone-3-sulfate (a metabolite/related compound) for a specific transporter (rtOatp1d1) in an in vitro setting, but this is a specific transport kinetic parameter, not a systemic toxicokinetic parameter (half-life, clearance, partition coefficient) for the subject substance estrone itself, and the primary focus is on microcystin-LR. |
| popPK | Steiner_2016 | irrelevant | 0 | 0 | The study focuses on the transport kinetics of microcystins (MC) in zebrafish, using estrone-3-sulfate only as a positive control/substrate for the transporter, not as the subject substance for kinetic parameter extraction. |
| PGx | Sugimoto_2005 | not_relevant | 1 | 2 | The paper discusses BCRP polymorphisms affecting the transport and sensitivity of anticancer drugs (substrates of BCRP), while describing estrone only as a modulator of BCRP function; it does not report pharmacogenomic effects on the PK or PD parameters of estrone itself. |
| popPK | Suzuki_2021 | irrelevant | 0 | 0 | The paper is an in vitro enzymology study on retinol dehydrogenases using estrone as a substrate, but reports no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for estrone disposition. |
| popPK | Suzuki_2025 | irrelevant | 0 | 0 | The paper investigates enzyme function and expression in Japanese eel, providing no quantitative toxicokinetic parameters (e.g., half-life, clearance) for estrone. |
| popPK | Tamai_2000 | irrelevant | 0 | 0 | The paper characterizes transporter expression and qualitative substrate activity for estrone-3-sulfate but does not report quantitative kinetic parameters (e.g., Km, Vmax, clearance) for the parent substance estrone. |
| popPK | Tan_2018 | irrelevant | 0 | 0 | The paper is an environmental exposure study reporting water and sediment concentrations and partitioning coefficients for environmental fate, not toxicokinetic parameters (half-life, clearance, etc.) in biological subjects. |
| popPK | Tan_2021 | irrelevant | 0 | 0 | The paper reports in vitro inhibition of OAT3 by antiarrhythmic agents (amiodarone, dronedarone) and their metabolites; estrone is not mentioned or studied. |
| popPK | Tanii_2011 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for letrozole, using estrone only as a pharmacodynamic marker to assess efficacy, not as the subject of kinetic analysis. |
| PGx | Tennent_1993 | not_relevant | 0 | 0 | The paper studies genetic susceptibility to tumor formation and steroid metabolism in mice, not a pharmacokinetic or pharmacodynamic effect of a gene variant on estrone as a therapeutic agent. |
| PGx | Tin_2024 | not_relevant | 0 | 0 | The paper investigates alcohol intake and ADH1B variants' effects on endogenous hormones, not the pharmacogenetics of estrone as an administered drug. |
| popPK | Tremblay_1989 | irrelevant | 0 | 0 | The paper focuses on the genetic regulation and mRNA expression of the enzyme 17KSR, not on quantitative toxicokinetic parameters (half-life, clearance, partition coefficients) for estrone itself. |
| popPK | Törn_2003 | relevant | 10 | 1 | The paper reports kinetic parameters (Vmax, Km) for the metabolism of estrone to estradiol, but the specific numeric values are likely in tables or figures not included in the provided abstract text. |
| PGx | Uno_2017 | not_relevant | 0 | 0 | The paper is an in vitro study characterizing the metabolic activity of CYP2C9 variants on various substrates (including estrone metabolism) but does not report a pharmacogenomic effect on a pharmacokinetic or pharmacodynamic parameter of estrone as a drug (e.g., AUC, Cmax) in a clinical or population PK model. |
| popPK | Valle_2005 | irrelevant | 2 | 5 | The primary substance is exemestane, and estrone appears only as estrone sulfate (E1S) in the pharmacodynamic component; the kinetic parameters reported are for the drug, not estrone itself. |
| popPK | VanBrocklin_1994 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro binding characterization of 18F-labeled 7-alpha-methylestradiol analogs, using estrone trifluoromethanesulfonates only as chemical precursors, and does not report quantitative toxicokinetic parameters for estrone itself. |
| popPK | Verheugen_1984 | relevant | 8 | 2 | The study reports relative permeability/influx kinetics of estrone in rat uterine and liver vascular beds, but specific numeric values are not explicitly listed in the text provided. |
| popPK | Vihko_2001 | irrelevant | 0 | 0 | The paper describes the structure and function of 17beta-hydroxysteroid dehydrogenase enzymes involved in estrone metabolism but does not provide quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants) for estrone in any species. |
| popPK | Vitku_2026 | irrelevant | 0 | 0 | The paper reports static concentrations of estrone in tissues and plasma for epidemiological analysis of prostate cancer risk, but provides no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for estrone. |
| popPK | Wang_2019 | relevant | 10 | 0 | The paper reports in vitro kinetic parameters (Km and Vmax) for the substrate estrone-3-sulfate regarding human OATP1B1, but the specific numeric values are not included in the provided evidence. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The study measures enzymatic inhibition of 17β-HSD1 by disinfectants (IC50), not the toxicokinetic parameters (half-life, clearance, partition coefficients) of estrone itself. |
| popPK | Yan_2012 | irrelevant | 0 | 0 | The paper is an environmental exposure and biomarker risk assessment in fish, reporting water concentrations and biological endpoints (vitellogenin, DNA damage) but no quantitative toxicokinetic parameters (e.g., clearance, half-life, partition coefficients) for estrone. |
| popPK | Yang_1994 | irrelevant | 0 | 0 | The paper reports that PBLG-estrone did not interfere with estrogen receptor affinity in an in vitro assay, but contains no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for estrone. |
| PGx | Zhang_2010 | not_relevant | 1 | 0 | The paper investigates the effect of toremifene on BCRP gene expression and drug efflux in breast cancer cells, and while estrone is used as a control to reverse an effect, the study does not report pharmacogenomic effects on the PK or PD parameters of estrone itself. |
| popPK | Zhou_2005 | irrelevant | 0 | 0 | The paper reports in vitro enzyme kinetic parameters (Vmax/Km) for the conversion of estrone to estradiol, which are not the specific disposition parameters (half-life, clearance, partition coefficients) required for toxicokinetic extraction in this context. |
| PGx | le_2025 | not_relevant | 0 | 0 | The study investigates phytochemical inhibition of BCRP transport activity, not the effect of human gene variants on the pharmacokinetics or pharmacodynamics of estrone. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bestrone%5D&body=Drug%3A%20estrone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_estrone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-10 00:02 UTC</sub>

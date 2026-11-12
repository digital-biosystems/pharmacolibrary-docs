<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Beta-Alanine&quot;}]"></div>

# Beta-Alanine

- **generic name:** Beta-Alanine
- **T3DB:** [T3D4346](http://www.t3db.ca/toxins/T3D4346) · **DrugBank:** [DB03107](https://go.drugbank.com/drugs/DB03107) · **PubChem:** [CID 239](https://pubchem.ncbi.nlm.nih.gov/compound/239)
- **groups:** investigational

## About

Beta-alanine is the only naturally occurring beta-amino acid - the amino group is at the &#946;-position from the carboxylate group. It is formed in vivo by the degradation of dihydrouracil and carnosine. It is a component of the naturally occurring peptides carnosine and anserine and also of pantothenic acid (Vitamin B-5) which itself is a component of coenzyme A. …

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.
- **Health effects:** Chronically high levels of beta-alanine are associated with at least 2 inborn errors of metabolism including: GABA-Transaminase Deficiency and Methylmalonate Semialdehyde Dehydrogenase Deficiency.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4346">T3DB T3D4346</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 107-95-9 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:16958">ChEBI 16958</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [de_2021_reference](drugs/toxin_beta_alanine/BetaAlanine_de2021_reference.md) | — | 1-compartment (no model) | 0 | de Salazar L et al., Increased Bioavailability of β-Alanine…, Pharmaceutics (2021) | [10.3390/pharmaceutics13091517](https://doi.org/10.3390/pharmaceutics13091517) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Millingen_2008_dose_response_curves_for_the_GABAA_receptor](drugs/toxin_beta_alanine/pd_Millingen_2008_dose_response_curves_for_the_GABAA_receptor.md) | dose-response curves for the GABAA receptor biomarker turnover ← beta-alanine | — | Millingen M et al., Ligand-specific temperature-dependent s…, Analytical chemistry (2008) | [10.1021/ac702148p](https://doi.org/10.1021/ac702148p) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Rezende_2020_MCarn](drugs/toxin_beta_alanine/pd_Rezende_2020_MCarn.md) | muscle carnosine content ← beta-alanine · direct Emax (saturable) effect | — | Rezende NS et al., The Muscle Carnosine Response to Beta-A…, Frontiers in physiology (2020) | [10.3389/fphys.2020.00913](https://doi.org/10.3389/fphys.2020.00913) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.">Not simulated</span> <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **DPYD** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Jacobs_2019](drugs/toxin_beta_alanine/pgx_Jacobs_2019_DPYD_safety.md) | Jacobs BAW et al., Pharmacokinetics of Capecitabine and Fo…, CPT: pharmacometrics & syst… (2019) | [10.1002/psp4.12474](https://doi.org/10.1002/psp4.12474) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=beta_alanine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `DPYD` safety_allele | PGx paper |
| metabolism | liver | `DPYD` safety_allele | PGx paper |

<sub>Actors without a tissue in the table: SLC16A10 (substrate), SLC6A11 (blocker).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 22:34 | 42:10 | 0/1/0 | 2/0/0 | 1/0/0 | 784,498/38,866 | einfracz / qwen3.8-27b | 46 | 5/24 | 46/0 | 0 |

## Coverage

- **PubMed hits:** 240 matched, 213 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fukuda_1979.pdf` | Fukuda S et al., Evidence that dog kidney is an endogeno…, The American journal of phy… (1979) | popPK | 9 | [10.1152/ajpendo.1979.237.1.E1](https://doi.org/10.1152/ajpendo.1979.237.1.E1) | [464048](https://pubmed.ncbi.nlm.nih.gov/464048) | The paper reports quantitative metabolic net production or utilization (Qmet) rates for beta-alanine in dogs, but the specific numeric values are not included in the provided evidence text. |
| `Kuwata_2000.pdf` | Kuwata K et al., [Comparison of pharmacokinetics of 5-FU…, Gan to kagaku ryoho. Cancer… (2000) | popPK | 9 |  | [10897216](https://pubmed.ncbi.nlm.nih.gov/10897216) | The paper reports pharmacokinetic parameters (Cmax, AUC) for alpha-fluoro-beta-alanine (FBAL), which is the specific fluoro-substituted analog and primary toxic metabolite of the target substance 5-FU (where beta-alanine is the core structure), in rats. |
| `Liu_1993.pdf` | Liu QR et al., Molecular characterization of four phar…, The Journal of biological c… (1993) | popPK | 7 |  | [8420981](https://pubmed.ncbi.nlm.nih.gov/8420981) | The paper reports specific Km values for the transport of beta-alanine by GAT3 and GAT4 transporters in Xenopus oocytes, which constitutes quantitative kinetic parameters (Vmax/Km for metabolising/transporting enzymes) for the substance. |

<sub>queue written 2026-11-09 22:21 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdelhakim_2022 | not_relevant | 0 | 0 | The paper is about plant physiology and does not involve pharmacogenomics or PK/PD of drugs. |
| popPK | Ackaert_2010 | irrelevant | 0 | 0 | The paper investigates a prodrug of 5-OH-DPAT (beta-alanine-5-OH-DPAT) rather than beta-alanine itself, and does not report kinetic parameters for beta-alanine. |
| popPK | Adjei_2002 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of fluorouracil (5-FU), and beta-alanine is mentioned only as a metabolic byproduct (alpha-fluoro-beta-alanine) used to measure DPD activity, not as the subject of toxicokinetic parameter extraction. |
| popPK | Antunes_2007 | irrelevant | 0 | 0 | The paper uses beta-alanine solely as a chemical spacer in a peptide conjugate and does not report toxicokinetic parameters for beta-alanine as a subject substance. |
| popPK | Azzolini_2017 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of pterostilbene (using beta-alanine as a structural component of a prodrug), not the kinetic parameters of beta-alanine itself as the subject substance. |
| popPK | Baines_1990 | irrelevant | 0 | 0 | The study is a functional perfusion experiment examining cytoprotection mechanisms and does not report quantitative kinetic parameters (such as clearance, half-life, or partition coefficients) for beta-alanine. |
| popPK | Benyajati_1986 | irrelevant | 2 | 0 | The study describes qualitative renal handling (secretion vs absorption) of beta-alanine in snakes but provides no quantitative kinetic parameters like rate constants, clearances, or half-lives. |
| popPK | Berggren_1999 | irrelevant | 0 | 0 | The paper studies protein partitioning in aqueous two-phase systems, where beta-alanine is used only as a reagent to modulate salt effects, not as a subject of toxicokinetic analysis. |
| popPK | Blech_2008 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of dabigatran, a direct thrombin inhibitor, not the amino acid beta-alanine; beta-alanine is merely part of the chemical name of dabigatran. |
| popPK | Blednov_2017 | irrelevant | 0 | 0 | The paper studies ethanol effects on GABAA receptors using beta-alanine as a partial agonist tool compound, not as the subject of toxicokinetic analysis. |
| popPK | Carter_2021 | irrelevant | 0 | 0 | The paper is an exposure association study investigating manganese toxicity, where beta-alanine is identified as a differentially abundant metabolite (biomarker) rather than the subject substance for toxicokinetic parameter estimation. |
| popPK | Chang_2001 | irrelevant | 0 | 0 | The paper measures pharmacokinetics for capecitabine and its metabolites, including alpha-fluoro-beta-alanine, but not beta-alanine itself, which is a different substance. |
| popPK | Chesney_1976 | irrelevant | 2 | 5 | The paper focuses on taurine kinetics and mentions beta-alanine only as an inhibitor of taurine transport, without reporting quantitative kinetic parameters for beta-alanine itself. |
| popPK | Chu_2007 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for alpha-fluoro-beta-alanine (a metabolite of capecitabine) and lapatinib, not the subject substance beta-alanine. |
| PGx | Chuah_2011 | not_relevant | 0 | 0 | The paper studies S-1 (a fluoropyrimidine), not beta-alanine, and discusses fluoro-beta-alanine only as a minor metabolite of S-1, not as the therapeutic agent of interest for beta-alanine pharmacogenomics. |
| popPK | Chung_1996 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of taurine, using beta-alanine only as a competitive inhibitor to characterize the transporter, not as the subject substance. |
| PGx | Costa_2023 | not_relevant | 0 | 0 | The paper analyzes metabolomic profiles in grapevines infected with a fungus and does not report pharmacokinetic or pharmacodynamic parameters of beta-alanine as a drug. |
| popPK | Coustère_1991 | irrelevant | 0 | 0 | The paper reports kinetic parameters for 5-fluorouracil and its metabolites, not beta-alanine. |
| popPK | Czeskis_2017 | irrelevant | 0 | 0 | The paper describes the synthesis of a radiolabeled glucagon receptor antagonist using beta-alanine as a chemical fragment, rather than reporting toxicokinetic parameters for beta-alanine itself. |
| popPK | Damhof_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for capecitabine and its metabolite 5-fluorouracil (and its metabolite fluoro-β-alanine), not for beta-alanine itself. |
| PGx | Damhof_2026 | not_relevant | 0 | 0 | The paper discusses capecitabine and its metabolite fluoro-beta-alanine in the context of DPYD genetics, but does not report pharmacogenomic effects on the PK/PD of the specific drug beta-alanine. |
| popPK | Davis_1993 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of 5-fluorouracil (5-FU), and beta-alanine is mentioned only as a metabolite (fluoro-beta-alanine) of the subject substance, not as the subject substance itself. |
| popPK | Deekonda_2016 | irrelevant | 0 | 0 | The paper focuses on the synthesis and opioid receptor binding affinity of hybrid ligands where beta-alanine serves only as a chemical linker or structural component, not as a subject for toxicokinetic evaluation. |
| popPK | Dhersin_2018 | irrelevant | 0 | 0 | The paper measures the metabolite of 5-Fluorouracil (alpha-fluoro-beta-alanine), not beta-alanine, and reports exposure concentrations rather than kinetic parameters. |
| PGx | Duan_2024 | not_relevant | 0 | 0 | The paper studies the toxicity of microcystins on shrimp, mentioning beta-alanine only as part of metabolic profiling, not as a drug subject to pharmacogenomics. |
| PGx | Ebner_2010 | not_relevant | 1 | 2 | The paper describes in vitro metabolism and enzymatic activity of dabigatran, but does not report how genetic variants or phenotypes alter pharmacokinetic or pharmacodynamic parameters in vivo. |
| popPK | Fleck_1992 | relevant | 4 | 0 | The paper reports qualitative changes in fractional excretion and plasma concentrations of beta-alanine in rats, but the specific numeric parameter values (e.g., exact rates or coefficients) are not provided in the extracted evidence. |
| popPK | Foth_1990_2 | irrelevant | 0 | 0 | The paper studies the kinetics of 5-fluoro-2'-deoxyuridine (FUDR) and its metabolite alpha-fluoro-beta-alanine, not the substance beta-alanine itself. |
| popPK | Fujisawa_1992 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the antibiotics panipenem and betamipron (N-benzoyl-beta-alanine), not for beta-alanine itself. |
| popPK | Fukasawa_2009 | irrelevant | 0 | 0 | Beta-alanine is only a structural component of the pyrrole-imidazole polyamides, not the subject substance being studied for its own toxicokinetic parameters. |
| popPK | Fukuda_1979 | relevant | 9 | 2 | The paper reports quantitative metabolic net production or utilization (Qmet) rates for beta-alanine in dogs, but the specific numeric values are not included in the provided evidence text. |
| PGx | Gao_2020 | not_relevant | 0 | 0 | The paper studies insect genetics and metabolism, not human pharmacogenomics or drug pharmacokinetics. |
| popPK | Gieschke_2002 | irrelevant | 1 | 2 | The subject substance is capecitabine and its metabolites; alpha-fluoro-beta-alanine (a fluorinated derivative) is a catabolite, not beta-alanine itself, and no kinetic parameters for pure beta-alanine are provided. |
| popPK | Gieschke_2003 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for alpha-fluoro-beta-alanine (FBAL), a metabolite of capecitabine, not for the substance beta-alanine itself. |
| popPK | Glaholm_1990 | irrelevant | 0 | 0 | The study measures pharmacokinetics of 5-fluorouracil and its metabolite fluoro-beta-alanine, not beta-alanine itself. |
| popPK | Glenn_2015 | irrelevant | 0 | 0 | The study reports performance outcomes and blood lactate levels but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, or concentration) for beta-alanine itself. |
| PGx | Gong_2023 | not_relevant | 0 | 0 | The paper is a transcriptomic study of oyster larvae responding to salinity stress, containing no pharmacogenomic data or pharmacokinetic parameters for beta-alanine. |
| popPK | Grem_2000 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of fluorouracil (5-FU) and its metabolite fluoro-beta-alanine, not beta-alanine, and beta-alanine is not the subject of any kinetic analysis. |
| popPK | Guimbal_1995 | irrelevant | 0 | 0 | The paper describes the cloning and pharmacological characterization of a GABA transporter isoform in Torpedo, using beta-alanine only as a substrate for characterization, and does not report any quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for beta-alanine in whole animals or humans. |
| popPK | Guo_2003 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of 5-fluorouracil and eniluracil, and beta-alanine appears only as a comparator metabolite of 5-FU (fluoro-beta-alanine) with no quantitative kinetic parameters provided for endogenous beta-alanine. |
| PGx | Gupta_2025 | not_relevant | 0 | 0 | The paper studies a cell-penetrating peptide scaffold (FAT) for drug delivery and does not report pharmacogenomic effects on beta-alanine pharmacokinetics or pharmacodynamics. |
| popPK | Harada_1990 | irrelevant | 0 | 0 | The paper uses beta-alanine solely as a transport inhibitor to induce taurine deficiency, reporting no kinetic parameters for beta-alanine itself. |
| popPK | Heggie_1987 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for 5-fluorouracil and its specific metabolites (e.g., alpha-fluoro-beta-alanine), not for the substance beta-alanine itself. |
| PGx | Hu_2010 | not_relevant | 0 | 0 | The paper investigates the chemical synthesis and antioxidant protective effects of C60 derivatives modified with beta-alanine, not the pharmacokinetics or pharmacodynamics of the drug beta-alanine itself. |
| popPK | Hénin_2009 | irrelevant | 0 | 0 | The paper discusses pharmacokinetics of imatinib and capecitabine, and mentions alpha-fluoro-beta-alanine (a metabolite of capecitabine) only as a comparison for half-life, not beta-alanine itself as the subject substance. |
| popPK | Ikeda_2000 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and efficacy of IFN-beta (a cytokine), not the amino acid beta-alanine. |
| popPK | Ito_2005 | irrelevant | 2 | 2 | The paper models the metabolism of uracil, and beta-alanine is merely a final product (not the subject substance for which parameters are being extracted, nor are specific kinetic parameters for beta-alanine itself reported). |
| popPK | Jacobs_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for capecitabine and its metabolites (including fluoro-beta-alanine), but not for the natural amino acid beta-alanine. |
| popPK | Jala_2023 | irrelevant | 0 | 0 | The paper is an exposure/epidemiological study linking phenol exposure to metabolome changes in humans and does not report any quantitative toxicokinetic parameters for beta-alanine. |
| popPK | Jang_2007 | irrelevant | 0 | 0 | Beta-alanine is a structural component of the radiolabeled peptidomimetic molecules (IA and IAC) and not the subject substance for toxicokinetic analysis. |
| popPK | Jin_2015 | irrelevant | 0 | 0 | The paper reports on the pharmacokinetics and biodistribution of a PET radiotracer (18F-PR_b), and beta-alanine is only used as a chemical linker/spacer in the probe's synthesis, not studied as a subject substance. |
| popPK | Kakee_2001 | irrelevant | 1 | 0 | The paper reports kinetic parameters for GABA, while beta-alanine appears only as a comparator compound in an in vitro inhibition study without any kinetic data for beta-alanine itself. |
| PGx | Keenan_2021 | not_relevant | 0 | 0 | The paper reports genetic regulation of endogenous sleep duration via beta-alanine levels, not a pharmacogenomic effect on the PK or PD of beta-alanine as a drug. |
| popPK | Kim_2007 | irrelevant | 0 | 0 | The paper studies alpha-fluoro-beta-alanine (FBAL), a metabolite of 5-fluorouracil, not beta-alanine itself. |
| popPK | Kissel_1997 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for 5-fluorouracil, and beta-alanine appears only as a catabolic intermediate (alpha-fluoro-beta-alanine) in the metabolic model, not as the subject substance. |
| popPK | Klomp_2003 | irrelevant | 0 | 0 | The paper focuses on the detection of fluorinated drugs (5FU and its metabolite FBAL) and does not report kinetic parameters for beta-alanine itself. |
| PGx | Kubo_2018 | not_relevant | 0 | 0 | The text is a review of nutrient and drug transport across the blood-retinal barrier and does not report a pharmacogenomic effect (gene variant) on a PK/PD parameter of beta-alanine. |
| popPK | Kubo_2022 | irrelevant | 0 | 0 | The paper investigates taurine transport, and beta-alanine is mentioned only as an inhibitor/co-substrate, not as the subject substance with kinetic parameters. |
| popPK | Kubomura_2009 | irrelevant | 2 | 0 | The paper investigates the kinetics of anserine, with beta-alanine identified only as a degradation product lacking reported quantitative kinetic parameters. |
| popPK | Kulakowski_1984 | irrelevant | 0 | 0 | The paper reports that beta-alanine was "totally ineffective" as a hypoglycemic agent, providing no quantitative toxicokinetic parameters (half-life, clearance, etc.). |
| popPK | Kuwata_2000 | relevant | 9 | 3 | The paper reports pharmacokinetic parameters (Cmax, AUC) for alpha-fluoro-beta-alanine (FBAL), which is the specific fluoro-substituted analog and primary toxic metabolite of the target substance 5-FU (where beta-alanine is the core structure), in rats. |
| PGx | Kyriakopoulos_2013 | not_relevant | 0 | 0 | The paper analyzes amino acid transporter gene expression in CHO cell lines for biopharmaceutical production, not the pharmacokinetics or pharmacodynamics of beta-alanine as a drug in humans. |
| PGx | Lakhotia_1990 | not_relevant | 0 | 0 | The paper investigates the effect of gene mutations on the heat shock response (gene expression/DNA puffing) in Drosophila, not the pharmacokinetics or pharmacodynamics of beta-alanine as a therapeutic drug. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper focuses on the enzyme engineering of L-aspartate-alpha-decarboxylase for industrial production of beta-alanine and does not involve human pharmacogenomics or pharmacokinetic/pharmacodynamic parameters. |
| PGx | Lomakin_2010 | not_relevant | 0 | 0 | The paper investigates the mechanical properties of beetle elytra and mentions beta-alanine only in the context of insect cuticle tanning and melanin metabolism, not as a pharmacogenomic effect on a drug's PK or PD parameters. |
| PGx | Lu_2023 | not_relevant | 0 | 0 | The study focuses on the metabolic engineering of yeast for beta-caryophyllene production, not human pharmacogenomics of beta-alanine. |
| popPK | Lundgren_2007 | irrelevant | 0 | 0 | The paper describes the crystallography of beta-alanine synthase, a structural biology study that does not report any quantitative toxicokinetic parameters for beta-alanine as a substance. |
| popPK | Mangera_2001 | irrelevant | 0 | 0 | Beta-alanine appears solely as a chemical linker in the radiopharmaceutical molecule, not as the subject substance for kinetic analysis. |
| PGx | Maurer_2018 | not_relevant | 0 | 0 | The paper describes the structural biology and allosteric regulation of the enzyme beta-ureidopropionase, focusing on its role in pyrimidine catabolism, rather than reporting a human pharmacogenomic association (genotype) affecting the PK or PD of beta-alanine as a drug. |
| PGx | Mehta_2001 | not_relevant | 0 | 0 | The paper studies the antioxidant properties and toxicity attenuation of taurine and its analogs (including beta-alanine) in cell cultures, containing no data on pharmacogenomics, pharmacokinetics, or pharmacodynamics of beta-alanine in a clinical or genetic context. |
| popPK | Mishra_2008 | irrelevant | 0 | 0 | The paper evaluates prodrugs of ketorolac (an NSAID) synthesized with beta-alanine; beta-alanine is used solely as a chemical reagent for synthesis, not as the subject substance for toxicokinetic parameter extraction. |
| popPK | Molenaar-Kuijsten_2021 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of capecitabine and its metabolite alpha-fluoro-beta-alanine (FBAL), which is distinct from beta-alanine; no kinetic parameters for beta-alanine are reported. |
| popPK | Müller_2017 | irrelevant | 0 | 0 | The paper studies radiolabeled plasma protein-binding ligands where beta-alanine is used only as a chemical linker moiety, not as the subject substance for toxicokinetic parameter extraction. |
| popPK | Nakajima_2007 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of 3-iodo-alpha-methyl-L-tyrosine (IMT), and beta-alanine derivatives are only used as in vitro competitive inhibitors for mechanistic studies, not as the subject of kinetic parameter estimation. |
| popPK | Nakano_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of capecitabine and oxaliplatin, where beta-alanine appears only as a minor metabolite (alpha-fluoro-beta-alanine) and is not the subject of toxicokinetic parameterization. |
| PGx | Nakano_2026 | not_relevant | 3 | 5 | The paper focuses on the pharmacogenomics (DPYD) and pharmacokinetics of capecitabine/oxaliplatin; alpha-fluoro-beta-alanine is a metabolite, and no specific genotype-PK effect for beta-alanine itself is reported. |
| popPK | Ndaw_2023 | irrelevant | 0 | 0 | The paper is an occupational exposure study measuring urinary biomarker concentrations, not toxicokinetic parameters, for antineoplastic drugs (including the 5-FU metabolite alpha-fluoro-beta-alanine). |
| PGx | Nguyen_2019 | not_relevant | 0 | 0 | The paper investigates metabolite profiles in wheat plants, not human pharmacokinetics or pharmacodynamics. |
| popPK | Nilsen_1984 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of radioactive fibrinogen and des-AABB fibrin, where beta-alanine is only mentioned as the reagent used to precipitate the fibrinogen, not as the subject substance. |
| popPK | Nishikawa_2017 | irrelevant | 0 | 0 | The paper reports concentrations of 5-fluorouracil metabolites (alpha-fluoro-beta-alanine and fluoro mono acetate), not the substance beta-alanine. |
| popPK | Ochoa_2000 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for 5-fluorouracil and eniluracil; beta-alanine is not the subject substance and only its metabolite alpha-fluoro-beta-alanine is mentioned as an excretion product of 5-FU. |
| popPK | Ohsako_1995 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software output, with no scientific content, kinetic parameters, or mention of beta-alanine. |
| PGx | Omura_2003 | not_relevant | 0 | 0 | The paper discusses DPD variants affecting 5-fluorouracil (5-FU) metabolism, not beta-alanine. |
| PGx | Ostapowicz_2012 | not_relevant | 0 | 0 | The paper reviews DPD gene variants affecting 5-fluorouracil metabolism, not beta-alanine. |
| popPK | Ozaki_2020 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of 5-fluorouracil and its metabolite alpha-fluoro-beta-alanine (FBAL), not the substance beta-alanine, and reports no kinetic parameters for beta-alanine. |
| popPK | Pasut_2008 | irrelevant | 0 | 0 | The paper describes a PEGylation reagent where beta-alanine is part of the linker chemistry for protein conjugation, not beta-alanine itself as the subject substance with toxicokinetic parameters. |
| popPK | Peters_2003 | irrelevant | 1 | 0 | The paper studies the pharmacokinetics of S-1 (containing ftorafur), and beta-alanine appears only as a fluoro-beta-alanine metabolite excretion note, not as the subject substance for kinetic parameter extraction. |
| popPK | Port_1994 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 5-fluorouracil (FU) and its metabolites (FUPA/FBAL), not for beta-alanine itself. |
| popPK | Poupeau_2016 | irrelevant | 0 | 0 | The paper is a review of occupational exposure studies on antineoplastic drugs, and beta-alanine is only mentioned as a metabolite of 5-FU, not as the subject substance with its own kinetic parameters. |
| PGx | Qian_2020 | not_relevant | 0 | 0 | The paper describes the engineering of an enzyme (PanD) for the industrial production of beta-alanine and does not involve human pharmacogenomics, drug metabolism, or clinical pharmacodynamics. |
| PGx | Qu_2025 | not_relevant | 0 | 0 | The paper reports biomarkers for postpartum hemorrhage and does not involve the pharmacokinetics or pharmacodynamics of beta-alanine as a therapeutic agent. |
| popPK | Reigner_1998 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of capecitabine and its metabolite alpha-fluoro-beta-alanine (FBAL), not the target substance beta-alanine. |
| popPK | Reigner_1999 | irrelevant | 0 | 0 | Beta-alanine (specifically as the metabolite alpha-fluoro-beta-alanine) appears solely as a secondary metabolite of capecitabine, with the study focusing on the pharmacokinetics of capecitabine and no quantitative kinetic parameters reported for beta-alanine itself. |
| popPK | Reigner_2003 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for capecitabine and its metabolites, where alpha-fluoro-beta-alanine (FBAL) is a distinct fluorinated metabolite, not the subject substance beta-alanine. |
| popPK | Rengelshausen_2002 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of 5-fluorouracil and its catabolite alpha-fluoro-beta-alanine (FBAL), not the subject substance beta-alanine. |
| popPK | Riché_2004 | irrelevant | 0 | 0 | Beta-alanine is used as a component to synthesize liposome membranes, not studied as the subject substance for its own toxicokinetic parameters. |
| PGx | Rushing_2023 | not_relevant | 0 | 0 | The paper investigates antifolate drug resistance in cancer cell lines and mentions beta-alanine metabolism only as a differentiating metabolic pathway, not as a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of beta-alanine itself. |
| popPK | Salvador_2023 | irrelevant | 0 | 0 | The paper studies urinary excretion ratios of purines and pyrimidines (specifically carbamyl-β-alanine) relative to creatinine in CKD patients, not the toxicokinetic parameters (half-life, clearance, etc.) of the substance beta-alanine itself. |
| popPK | Schalhorn_1992 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of fluorouracil and folinic acid; beta-alanine is only mentioned as a specific fluorinated metabolite (alpha-fluoro-beta-alanine) of fluorouracil, not as the subject substance itself. |
| popPK | Schlemmer_1999 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of 5-fluorouracil (5-FU), and beta-alanine appears only as part of the name of a catabolite (alpha-fluoro-beta-alanine), not as the subject substance with its own kinetic parameters. |
| PGx | Schmidt_2005 | not_relevant | 1 | 0 | The paper reports elevated beta-alanine levels due to vigabatrin treatment, not the pharmacokinetics/pharmacodynamics of beta-alanine itself as a drug, nor does it report genetic variants affecting beta-alanine parameters. |
| popPK | Sharma_2012 | irrelevant | 0 | 0 | The paper focuses on the computational design of inhibitors for the enzyme L-aspartate α-decarboxylase (ADC), where beta-alanine is a product of the reaction, not a subject substance for which toxicokinetic parameters (half-life, clearance, etc.) are measured or modeled. |
| popPK | Shi_2009 | irrelevant | 1 | 0 | The paper reports pharmacokinetics for 5-fluorocytosine (5-FC) and its active metabolite 5-fluorouracil (5-FU), whereas beta-alanine is only mentioned as a non-toxic byproduct of 5-FU metabolism and has no kinetic parameters measured or reported. |
| popPK | Shin_2007 | irrelevant | 0 | 0 | Beta-alanine appears only as a chemical moiety in a complex conjugate; no kinetic parameters for beta-alanine itself are reported. |
| popPK | Shin_2010 | irrelevant | 0 | 0 | Beta-alanine is a chemical component of the radiotracer conjugate (IAC) and is not the subject of toxicokinetic study; the paper focuses on the imaging properties of the 99mTc-labeled complex. |
| popPK | Spoelstra_1991 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of 5-fluorouracil, with beta-alanine appearing only as a minor catabolite (2-fluoro-beta-alanine) rather than the subject substance. |
| PGx | Stautemas_2020 | not_relevant | 3 | 3 | The paper reports a change in urinary excretion (103% higher) based on genotype, but this is a raw data point rather than a fitted pharmacokinetic parameter (like clearance or Vd), and it does not report a change in the primary PD parameter (muscle dipeptides). |
| PGx | Tan_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of 5-FU resistance via α-fluoro-β-alanine, not the pharmacogenomics of β-alanine itself. |
| PGx | Tilley_2007 | not_relevant | 0 | 0 | The paper investigates the efficacy of a peptide-PMO conjugate in E. coli infection and mentions beta-alanine only as a chemical component of the conjugate, without analyzing human pharmacogenomics or the PK/PD of beta-alanine as a drug. |
| popPK | Timmers_2016 | irrelevant | 0 | 0 | The paper reports the AUC of FBAL (fluoro-beta-alanine), a metabolite of the drug capecitabine, which is a distinct chemical entity from the endogenous substance beta-alanine. |
| popPK | Tokunaga_1997 | irrelevant | 0 | 0 | The provided evidence contains only metadata about the GROBID extraction software and lacks any scientific content, text, or kinetic parameters for beta-alanine. |
| popPK | Tomi_2007 | irrelevant | 0 | 0 | The paper focuses on taurine transport, and beta-alanine is mentioned only as a competitive inhibitor (analytical reagent/comparator), with no kinetic parameters reported for beta-alanine itself. |
| popPK | Twelves_1999 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of capecitabine; beta-alanine appears only as a specific metabolite (alpha-fluoro-beta-alanine) in the context of a different drug, not as the subject substance. |
| PGx | Ursini_2019 | not_relevant | 0 | 0 | The paper focuses on occupational exposure to antineoplastics and DNA repair gene polymorphisms, not the pharmacokinetics of beta-alanine or its modulation by genetic variants. |
| popPK | Verscheure_2026 | irrelevant | 0 | 0 | The paper validates an analytical method for quantifying alpha-fluoro-beta-alanine (a metabolite of cyclophosphamide) in urine, but reports no kinetic parameters for beta-alanine itself, which is not even the subject of the study. |
| popPK | Walters_2019 | irrelevant | 3 | 2 | Beta-alanine is a measured endogenous metabolite whose concentration increases due to Vigabatrin administration, but the paper does not report intrinsic pharmacokinetic parameters (half-life, clearance, etc.) for beta-alanine itself. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper investigates the heritability of fasting plasma glucose and GWAS hits, mentioning beta-alanine metabolism only as a nominally enriched biological pathway, without reporting pharmacokinetic or pharmacodynamic effects of beta-alanine modulated by genetics. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | Beta-alanine is mentioned only as a metabolic pathway in a metabolomics study of nephropathy, with no quantitative kinetic parameters (half-life, clearance, etc.) reported. |
| PGx | Wu_2016 | not_relevant | 0 | 0 | The paper focuses on plant (Arabidopsis thaliana) primary metabolism and gene-metabolite associations, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of beta-alanine as a drug. |
| PGx | Wu_2026 | not_relevant | 0 | 0 | The study focuses on valproic acid, not beta-alanine, and does not report pharmacogenomic effects on the PK/PD of beta-alanine. |
| popPK | Xu_2017 | irrelevant | 0 | 0 | Beta-alanine is only mentioned as a chemical linker component in a GnRH peptide study, and no kinetic parameters are reported for it as a subject substance. |
| popPK | Yamada_2003 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for 5-fluorouracil and its metabolite F-beta-alanine (FBAL), not beta-alanine; the two substances are chemically distinct and FBAL is not a metabolite of beta-alanine. |
| PGx | Yang_2026 | not_relevant | 0 | 0 | The paper focuses on the adaptive evolution of a yeast strain for molasses fermentation, not on human pharmacogenomics. |
| popPK | Yu_2021 | irrelevant | 0 | 0 | Beta-alanine is mentioned only as a metabolite regulated by the herbal extract, not as the subject substance for which kinetic parameters are reported. |
| PGx | Yu_2026 | not_relevant | 0 | 0 | The paper analyzes causal associations between plasma metabolites (including N-Acetyl-β-alanine) and sciatica using Mendelian Randomization, but it does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of beta-alanine as a drug. |
| popPK | Zhang_1991 | irrelevant | 2 | 0 | The study focuses on the kinetic disposition of 2-fluoro-beta-alanine (FBAL) bile acid conjugates, not the native beta-alanine substance, and the evidence text contains no quantitative numeric values. |
| popPK | Zhang_1992 | irrelevant | 1 | 1 | The study reports kinetic parameters for 2-fluoro-beta-alanine, not beta-alanine. |
| popPK | Zhang_1993 | irrelevant | 0 | 0 | The paper models the kinetics of 2-fluoro-beta-alanine, a metabolite of 5-fluorouracil, rather than the substance beta-alanine itself. |
| PGx | Zhao_2025 | not_relevant | 0 | 0 | The study investigates the association between DPYD genotypes and colorectal cancer survival prognosis, not the pharmacokinetics or pharmacodynamics of beta-alanine as a drug. |
| popPK | Zhou_2021 | irrelevant | 0 | 0 | The paper is an in vitro metabolomics study where beta-alanine is identified as a differentially abundant metabolite in response to drug exposure, but no quantitative toxicokinetic parameters (half-life, clearance, etc.) are reported for it. |
| PGx | Zong_2024 | not_relevant | 0 | 0 | The paper describes a biological mechanism involving AARS1 and beta-alanine in cancer, not a pharmacogenomic study of beta-alanine's PK/PD parameters based on human genetic variants. |
| PGx | de_2016 | not_relevant | 0 | 1 | The paper investigates the effect of a gene variant on a pharmacodynamic parameter (glucose levels) of atenolol, using β-alanine as a metabolite biomarker, rather than examining how the variant changes the PK/PD parameters of β-alanine itself. |
| popPK | van_1993 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of 5-fluoro-2'-deoxyuridine (FUdR) and its metabolite alpha-fluoro-beta-alanine, not beta-alanine itself; beta-alanine is only mentioned as a structural analog in the title/abstract. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbeta_alanine%5D&body=Drug%3A%20beta_alanine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_beta_alanine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-09 22:21 UTC</sub>

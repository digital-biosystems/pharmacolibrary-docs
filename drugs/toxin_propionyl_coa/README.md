<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Propionyl-CoA&quot;}]"></div>

# Propionyl-CoA

- **generic name:** Propionyl-CoA
- **T3DB:** [T3D4447](http://www.t3db.ca/toxins/T3D4447) · **DrugBank:** [DB02912](https://go.drugbank.com/drugs/DB02912) · **PubChem:** [CID 439164](https://pubchem.ncbi.nlm.nih.gov/compound/439164)
- **groups:** experimental

## About

Propionyl-CoA is an intermediate in the metabolism of propanoate. Propionic aciduria is caused by an autosomal recessive disorder of propionyl coenzyme A (CoA) carboxylase deficiency (EC 6.4.1.3). In propionic aciduria, propionyl CoA accumulates within the mitochondria in massive quantities; free carnitine is then esterified, creating propionyl carnitine, which is then excreted in the urine. …

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.
- **Mechanism of toxicity:** In propionic aciduria, propionyl CoA accumulates within the mitochondria in massive quantities; free carnitine is then esterified, creating propionyl carnitine, which is then excreted in the urine. Because the supply of carnitine in the diet and from synthesis is limited, such patients readily develop carnitine deficiency as a result of the increased loss of acylcarnitine derivatives.
- **Health effects:** Propionic acidemia presents in the early neonatal period with progressive encephalopathy. Death can occur quickly, due to secondary hyperammonemia, infection, cardiomyopathy, or basal ganglial stroke. (Wikipedia)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4447">T3DB T3D4447</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 317-66-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:15539">ChEBI 15539</a></small></p>

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">other organism</span> | **glct-3** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Na_2020](drugs/toxin_propionyl_coa/pgx_Na_2020_glct_3_Q100.md) | Na H et al., Natural variation in a glucuronosyltran…, PLoS genetics (2020) | [10.1371/journal.pgen.1008984](https://doi.org/10.1371/journal.pgen.1008984) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=propionyl_coa).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GLCT-3 (metabolism).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 09:15 | 17:06 | 0/0/0 | 0/0/0 | 0/0/1 | 196,427/11,785 | ollama / glm-5.3-flash | 14 | 0/13 | 14/0 | 0 |

## Coverage

- **PubMed hits:** 43 matched, 47 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yoshimura_2017.pdf` | Yoshimura Y et al., Molecular cloning of rat acss3 and char…, Journal of biochemistry (2017) | popPK | 8 | [10.1093/jb/mvw067](https://doi.org/10.1093/jb/mvw067) | [28003429](https://pubmed.ncbi.nlm.nih.gov/28003429) | Reports a numeric Km (0.19 mM propionate) for the propionyl-CoA-synthesizing enzyme ACSS3, an enzyme kinetic parameter directly tied to propionyl-CoA formation, with values in the abstract. |
| `Ramer_1989.pdf` | Ramer SE et al., Kinetic characterization of the [3'-32P…, Biochemistry (1989) | popPK | 6 | [10.1021/bi00437a025](https://doi.org/10.1021/bi00437a025) | [2569891](https://pubmed.ncbi.nlm.nih.gov/2569891) | Reports Km (~5 mM) for propionyl-CoA as a substrate in enzyme exchange kinetics, though main values are for acetyl-CoA and the data are enzyme kinetics, not whole-body toxicokinetics. |

<sub>queue written 2026-11-11 09:12 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adeva-Andany_2017 | irrelevant | 1 | 0 | Propionyl-CoA appears only qualitatively as a metabolic intermediate in a review of branched-chain amino acid metabolism, with no kinetic parameters or numeric values. |
| PGx | AlGhamdi_2018 | not_relevant | 1 | 2 | Propionyl-CoA is an endogenous metabolite, not a drug; no PK/PD effect of genotype on any drug parameter is reported. |
| popPK | Armstrong_2021 | irrelevant | 2 | 1 | Only qualitative dose-dependent reductions of propionyl-CoA in patient-derived hepatocytes; no numeric kinetic parameters (Vmax, Km, half-life, clearance) are present in the evidence. |
| popPK | Aspatwar_2023 | irrelevant | 0 | 0 | Propionyl-CoA appears only as an enzyme substrate name (propionyl-CoA carboxylase); no kinetic, disposition or model parameters for propionyl-CoA itself are reported in this review. |
| popPK | Attarwala_2023 | irrelevant | 2 | 3 | The kinetic parameters (clearances, half-life, Imax model) describe the therapeutic mRNA-3927 and PCC protein/biomarkers, not propionyl-CoA itself, which appears only as an enzymatic substrate; numeric values are present but for the wrong substance. |
| popPK | Babunovic_2022 | irrelevant | 0 | 0 | Propionyl-CoA appears only as an internal bacterial metabolite in a macrophage/TB mechanistic study; no toxicokinetic parameters for propionyl-CoA are reported. |
| popPK | Ballard_1970 | irrelevant | 1 | 1 | Propionyl-CoA appears only as a comparator (propionyl-CoA carboxylase antibody test), with no kinetic parameters for propionyl-CoA disposition. |
| PGx | Bloomgarden_2018 | not_relevant | 0 | 0 | Paper discusses BCAA metabolism and genetic associations with insulin resistance, not pharmacogenomic effects on PK/PD parameters of any drug. |
| popPK | Bogusiewicz_2012 | irrelevant | 0 | 0 | No toxicokinetic parameters for propionyl-CoA — only biomonitoring acylcarnitine ratios, and PCC is an enzyme substrate context, not a kinetic parameter. |
| PGx | Campeau_1999 | not_relevant | 0 | 0 | Paper describes gene mutations affecting enzyme biotinylation/function in propionic acidemia, not drug pharmacokinetic or pharmacodynamic parameters. |
| PGx | Chapman_2018 | not_relevant | 0 | 0 | Propionyl-CoA is an endogenous metabolite, not a drug; paper reports enzyme-deficiency metabolic effects, no pharmacogenomic PK/PD effect. |
| popPK | Cheung_1975 | irrelevant | 1 | 2 | Mechanistic enzyme stereochemistry study with in vitro isotope-effect numbers, not whole-organism toxicokinetic parameters for propionyl-CoA. |
| PGx | Cicalini_2021 | not_relevant | 3 | 5 | Reports BTD genotype association with endogenous metabolite (acylcarnitine C3/C5OH) levels, not a pharmacogenomic effect on a PK/PD parameter of a drug. |
| PGx | Desviat_2004 | not_relevant | 3 | 3 | Propionyl-CoA is an endogenous metabolite, not a drug; the paper describes mutation effects on enzyme activity, not pharmacogenomic effects on PK/PD drug parameters. |
| popPK | Duerre_2025 | irrelevant | 0 | 0 | Propionyl-CoA appears only as an endogenous metabolite measured by metabolomics in a heme biosynthesis study; no kinetic parameters (half-life, clearance, Vmax/Km, partition coefficients, disposition model) are reported and no numeric toxicokinetic values are present. |
| popPK | Dunn_2004 | irrelevant | 3 | 8 | Km (0.064 mM) and Vmax for a bacterial (Rhizobium etli) propionyl-CoA carboxylase are present and readable, but the enzyme kinetics are from an in vitro microorganism, not a toxicokinetic study of propionyl-CoA disposition in humans or animals. |
| popPK | Gould_2006 | irrelevant | 2 | 1 | Enzymology of bacterial (M. tuberculosis) ICL1 with propionyl-CoA as a substrate; no quantitative toxicokinetic parameters and no numeric values visible in the evidence. |
| PGx | Hicks_2018 | not_relevant | 1 | 4 | Propionyl-CoA is an endogenous metabolite, not a drug; the prpR variants alter antibiotic (isoniazid/ofloxacin) killing kinetics (MDK90), not PK/PD of propionyl-CoA itself. |
| PGx | Huang_2017 | not_relevant | 2 | 3 | Propionyl-CoA is an endogenous metabolite, not a drug; no pharmacogenomic effect on a PK/PD parameter of a therapeutic agent is reported. |
| PGx | Ibrahim_2020 | not_relevant | 2 | 3 | No gene-variant effect on a PK/PD parameter of any drug is reported; propionyl-CoA is an endogenous metabolite and the study only reports structural/pathogenicity predictions of a PCCA variant. |
| popPK | Köse_2026 | irrelevant | 2 | 1 | Clinical outcome/metabolomics study in humans with no quantitative kinetic parameter (no half-life, clearance, rate constant) for propionyl-CoA itself, and no numeric kinetic values present. |
| PGx | Laera_2020 | not_relevant | 2 | 5 | CRAT variants affect enzymatic kinetics toward propionyl-CoA in a disease context, not a pharmacogenomic effect on PK/PD of a drug. |
| PGx | Lamhonwah_1990 | not_relevant | 0 | 0 | Propionyl-CoA is an endogenous metabolite, not a drug; paper reports PCCB mutations affecting enzyme deficiency, not a pharmacogenomic effect on PK/PD parameters. |
| PGx | Li_2022 | not_relevant | 2 | 3 | PCCB variants affect endogenous propionyl-CoA metabolism (enzyme deficiency), not a pharmacokinetic or pharmacodynamic parameter of an administered drug. |
| PGx | Menzella_2003 | not_relevant | 0 | 0 | Paper describes E. coli recombinant protein production using lactose induction; propionyl-CoA carboxylase is an enzyme produced, with no pharmacogenomic effect on PK/PD parameters. |
| PGx | Revsin_1977 | not_relevant | 0 | 0 | This is a metabolic/enzyme activity study of endogenous propionyl-CoA metabolism, not a pharmacokinetic/pharmacodynamic drug study with gene variants; no drug or pharmacogenomic effect is reported. |
| PGx | Sakrani_2021 | not_relevant | 1 | 1 | Case report of a PCCA variant causing propionic acidemia; no pharmacogenomic effect on a PK/PD parameter of a drug is described. |
| PGx | Strittmatter_2014 | not_relevant | 1 | 1 | Propionyl-CoA is an endogenous metabolite, not a drug; CLYBL variants are linked to B12 levels, not PK/PD parameters of a pharmacologic compound. |
| PGx | Tahara_1990 | not_relevant | 0 | 0 | Reports PCC gene mutations affecting enzyme deficiency (endogenous metabolism), not a pharmacogenomic effect on a PK/PD parameter of a drug. |
| PGx | Tahara_1990_2 | not_relevant | 0 | 0 | Paper describes PCC gene mutations causing propionic acidemia, not a pharmacogenomic effect on drug PK/PD parameters. |
| PGx | Tahara_1993 | not_relevant | 0 | 0 | Reports PCCB gene mutations causing enzyme deficiency (disease variants), not pharmacogenomic effects on PK/PD parameters of a drug. |
| PGx | Tajima_2021 | not_relevant | 3 | 2 | Paper reports genotype effects on enzyme activity and clinical phenotype in propionic acidemia, which is endogenous metabolism, not a drug; no PK/PD parameters of propionyl_coa as a drug. |
| popPK | Takenaka_2014 | irrelevant | 1 | 3 | The paper is an in vitro enzyme characterization of a bacterial N-acetyltransferase; propionyl-CoA appears only as an acyl donor in a relative-activity ratio, not as a substance with toxicokinetic parameters. |
| PGx | Ugarte_1999 | not_relevant | 1 | 1 | Review of PCCA/PCCB mutations affecting propionyl-CoA carboxylase enzyme deficiency, not a drug PK/PD pharmacogenomic effect. |
| PGx | Vela-Amieva_2026 | not_relevant | 0 | 0 | Propionyl-CoA is an endogenous metabolite, not a drug; paper describes genotype-phenotype of PA without pharmacogenomic PK/PD effects. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | Case report of PCCA gene mutations causing propionic acidemia metabolite changes; no drug PK/PD parameter is linked to a genotype. |
| popPK | Wang_2024 | irrelevant | 3 | 2 | A mechanistic isotope-tracing study of propionyl-CoA metabolism with no standard toxicokinetic parameters (half-life, clearance, Vmax/Km) and no numeric values in the provided evidence. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | No drug or pharmacogenomic effect on a PK/PD parameter of propionyl-CoA; it is an endogenous metabolism study in propionic acidemia. |
| PGx | Zayed_2015 | not_relevant | 1 | 2 | Endogenous metabolite/enzyme deficiency in a genetic disease review, not a pharmacogenomic effect on PK/PD of a drug. |
| PGx | ZeZhao_2026 | not_relevant | 5 | 2 | Review on HLCS deficiency with genotype-biotin response discussion, but drug is propionyl-CoA metabolism context without fitted pharmacogenomic PK/PD effect sizes; no quantitative drug parameter changes reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpropionyl_coa%5D&body=Drug%3A%20propionyl_coa%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_propionyl_coa/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>

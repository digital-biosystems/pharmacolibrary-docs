<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Methyltestosterone&quot;}]"></div>

# Methyltestosterone

- **generic name:** Methyltestosterone
- **T3DB:** [T3D4748](http://www.t3db.ca/toxins/T3D4748) · **DrugBank:** [DB06710](https://go.drugbank.com/drugs/DB06710) · **PubChem:** [CID 6010](https://pubchem.ncbi.nlm.nih.gov/compound/6010)
- **groups:** approved, investigational

## About

A synthetic anabolic steroid used for treating men with testosterone deficiency or similar androgen replacement therapies. Also, has antineoplastic properties and so has been used secondarily in women with advanced breast cancer. Methyltestosterone is a schedule III drug in the US.

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** the methyl group aids to increase oral bioavailability.
- **Sources and uses:** Methyltestosterone is an anabolic steroid hormone used to treat men with a testosterone deficiency. It is also used in women to treat breast cancer, breast pain, swelling due to pregnancy, and with the addition of estrogen it can treat symptoms of menopause.
- **Mechanism of toxicity:** The effects of testosterone in humans and other vertebrates occur by way of two main mechanisms: by activation of the androgen receptor (directly or as DHT), and by conversion to estradiol and activation of certain estrogen receptors. Free testosterone (T) is transported into the cytoplasm of target tissue cells, where it can bind to the androgen receptor, or can be reduced to 5&alpha;-dihydrotestosterone (DHT) by the cytoplasmic enzyme 5&alpha;-reductase. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4748">T3DB T3D4748</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 58-18-4 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:27436">ChEBI 27436</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methyltestosterone | parent | 302.458 | C20H30O2 | PubChem | [6010](https://pubchem.ncbi.nlm.nih.gov/compound/6010) | Vick_2001 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="other animal" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Vick_2001_reference](drugs/toxin_methyltestosterone/Methyltestosterone_Vick2001_reference.md) | — | 1-compartment (no model) | 12 | Vick AM et al., Methyltestosterone pharmacokinetics and…, Aquatic toxicology (Amsterd… (2001) | [10.1016/s0166-445x(00)00146-6](https://doi.org/10.1016/s0166-445x(00)00146-6) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=methyltestosterone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLCO1A2` inducer/inhibitor | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| distribution | blood-brain barrier | `SLCO1A2` inducer/inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A8` inducer | DrugBank actor |
| — | adipose tissue | `CYP19A1` inducer/substrate | DrugBank actor |
| — | ovary | `CYP19A1` inducer/substrate | DrugBank actor |
| — | prostate gland | `AR` target | DrugBank actor |
| — | testis | `CYP19A1` inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (partial agonist), SHBG (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 08:25 | 7:40 | 0/1/0 | 0/0/0 | 0/0/0 | 198,352/9,893 | einfracz / qwen3.8-flash-next | 5 | 1/1 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 66 matched, 66 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vick_2001.pdf` | Vick AM et al., Methyltestosterone pharmacokinetics and…, Aquatic toxicology (Amsterd… (2001) | popPK | 10 | [10.1016/s0166-445x(00)00146-6](https://doi.org/10.1016/s0166-445x(00)00146-6) | [11239680](https://pubmed.ncbi.nlm.nih.gov/11239680) | The paper reports detailed quantitative pharmacokinetic parameters for methyltestosterone in rainbow trout, all explicitly provided in the abstract. |
| `Dimitrijevic_2023.pdf` | Dimitrijevic D et al., Rapid equilibrium dialysis, ultrafiltra…, Biochemical and biophysical… (2023) | popPK | 8 | [10.1016/j.bbrc.2023.02.021](https://doi.org/10.1016/j.bbrc.2023.02.021) | [36812744](https://pubmed.ncbi.nlm.nih.gov/36812744) | The paper reports the unbound fraction in plasma (fu) for α-Methyltestosterone, which is a toxicokinetic partition coefficient relevant for PBTK modeling. |
| `De_2004.pdf` | De Kanter R et al., Prediction of whole-body metabolic clea…, Xenobiotica; the fate of fo… (2004) | popPK | 6 | [10.1080/004982502000196758](https://doi.org/10.1080/004982502000196758) | [15204696](https://pubmed.ncbi.nlm.nih.gov/15204696) | The paper reports in vitro metabolic clearance data for methyltestosterone using rat tissue slices, but the specific numerical values are not included in the provided abstract text. |

<sub>queue written 2026-11-15 08:23 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bain_2015 | irrelevant | 0 | 0 | The paper reports receptor binding potency (pharmacodynamics) in vitro, not quantitative toxicokinetic parameters like half-life or clearance. |
| popPK | De_2004 | relevant | 6 | 3 | The paper reports in vitro metabolic clearance data for methyltestosterone using rat tissue slices, but the specific numerical values are not included in the provided abstract text. |
| popPK | Fabian_2019 | relevant | 7 | 2 | The paper reports a PBTK model for methyltestosterone in rats, but the specific numeric kinetic parameters for the substance (clearance, partition coefficients, etc.) are contained in Table 5 and Table 4, which are not fully provided in the text evidence. |
| popPK | Higuchi_1979 | irrelevant | 0 | 0 | The paper describes analytical methods for solubility determination and does not report any toxicokinetic parameters. |
| popPK | Hild_2010 | irrelevant | 2 | 0 | The paper reports liver toxicity markers and dose-response data for methyltestosterone but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, Vd, or plasma concentrations) for the substance. |
| popPK | Li_2013 | irrelevant | 1 | 0 | The paper reports on gene expression changes (molecular endpoints) in fish exposed to methyltestosterone but contains no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | MARKS_1961 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PGx | Malt_1983 | not_relevant | 0 | 0 | The paper discusses abnormal sex-steroid milieu in hepatocellular carcinoma, not pharmacogenomic effects on methyltestosterone PK/PD parameters. |
| popPK | Mamta_2014 | irrelevant | 0 | 0 | The study investigates gene expression (Tyrosine hydroxylase) and catecholamine levels, not toxicokinetic parameters such as half-life, clearance, or partition coefficients for methyltestosterone. |
| popPK | Martyniuk_2012 | irrelevant | 0 | 0 | The paper is a review of omics (transcriptomics/proteomics) studies regarding androgen signaling pathways and contains no quantitative toxicokinetic parameters. |
| popPK | Müller_1991 | irrelevant | 0 | 0 | The paper focuses on cyclodextrin complexation chemistry and drug release mechanisms, with methyltestosterone used primarily to study phase solubility and complex stability rather than to determine quantitative in vivo toxicokinetic parameters for the drug itself. |
| popPK | Ndandala_2024 | irrelevant | 0 | 0 | The paper focuses on gene expression (mRNA levels) of IGF family genes in response to methyltestosterone treatment, not toxicokinetic parameters such as metabolism rates, half-life, or partition coefficients of methyltestosterone. |
| popPK | Ni_2019 | irrelevant | 0 | 0 | The paper investigates gene expression mechanisms in fish and does not report any toxicokinetic parameters for methyltestosterone. |
| popPK | Raghuveer_2009 | irrelevant | 0 | 0 | The paper focuses on gene expression (dmrt1) and histology following methyltestosterone treatment but does not measure or report any quantitative toxicokinetic parameters (e.g., half-life, clearance, absorption rates) for methyltestosterone. |
| popPK | Raghuveer_2011 | irrelevant | 0 | 0 | The paper investigates brain sex differentiation and neurotransmitter levels in catfish; methyltestosterone is only mentioned as a treatment for sex manipulation, with no toxicokinetic parameters reported. |
| popPK | Rajakumar_2014 | irrelevant | 0 | 0 | The paper focuses on sox3 gene expression in catfish, with methyltestosterone used only as an external exposure agent in a developmental/toxicological study, containing no kinetic parameters. |
| popPK | Rajakumar_2014_2 | irrelevant | 0 | 0 | The paper measures gene expression changes following exposure, reporting no quantitative toxicokinetic parameters for methyltestosterone. |
| PGx | Rendic_1999 | not_relevant | 1 | 1 | The paper describes in vitro metabolism by recombinant CYP enzymes, not pharmacogenomic effects of gene variants on PK/PD parameters in patients. |
| popPK | Shinohara_1990 | irrelevant | 4 | 0 | The text describes the methodology used to study methyltestosterone but provides no quantitative kinetic parameters or numeric values in the evidence. |
| popPK | Simon_1999 | irrelevant | 0 | 0 | The paper is a clinical outcome study regarding symptom relief and hormonal levels, containing no toxicokinetic parameters (such as half-lives, clearance, or volume of distribution) for methyltestosterone. |
| popPK | Tang_2025 | irrelevant | 2 | 0 | The paper reports effects of methyltestosterone exposure on gene expression and hormone levels in mussels, but no toxicokinetic parameters (rates, volumes, partition coefficients) for methyltestosterone are reported. |
| popPK | Tennant_1981 | irrelevant | 0 | 0 | The paper reports on histological and enzymatic markers of liver injury rather than quantitative toxicokinetic parameters for methyltestosterone. |
| PGx | Wang_2002 | not_relevant | 0 | 0 | The study focuses on flutamide metabolism in rats; methyltestosterone is used only as an analytical internal standard, not as the drug under investigation. |
| popPK | Wylie_2018 | irrelevant | 0 | 0 | The paper reports on endocrine effects and gene expression in fish, containing no quantitative toxicokinetic parameters (e.g., half-lives, clearance, or partition coefficients) for methyltestosterone. |
| popPK | Xu_1998 | irrelevant | 0 | 0 | Methyltestosterone is used only as an internal standard for the HPLC assay of flutamide, not as the subject of the kinetic study. |
| popPK | Zhai_2021 | irrelevant | 0 | 0 | The paper investigates gene expression in fish reproduction; methyltestosterone is only mentioned as a treatment agent with no quantitative toxicokinetic parameters reported. |
| popPK | Zheng_2014 | irrelevant | 0 | 0 | The paper reports gene expression changes in fish exposed to methyltestosterone but does not measure or report any toxicokinetic parameters such as concentration-time profiles, half-lives, or clearance rates. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethyltestosterone%5D&body=Drug%3A%20methyltestosterone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methyltestosterone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 08:23 UTC</sub>

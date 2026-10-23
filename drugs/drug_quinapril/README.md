<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;quinapril&quot;}]"></div>

# quinapril

- **generic name:** quinapril
- **ATC codes:** `C09AA06`, `C09BA06`
- **DrugBank:** [DB00881](https://go.drugbank.com/drugs/DB00881) · **PubChem:** [CID 54892](https://pubchem.ncbi.nlm.nih.gov/compound/54892)
- **molar mass:** 438.5161 g/mol (C25H30N2O5) — DrugBank
- **groups:** approved, investigational

## About

Quinapril is an ACE inhibitor used to treat high blood pressure and congestive heart failure. It is an approved medicine, available alone or combined with a diuretic, and is used fairly widely for these cardiovascular conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q596022](https://www.wikidata.org/wiki/Q596022) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Begg_1990_ACE_inhibition](drugs/drug_quinapril/pd_Begg_1990_ACE_inhibition.md) | ACE inhibition ← quinaprilat · direct sigmoid Emax (Hill) effect | — | Begg EJ et al., The pharmacokinetics and pharmacodynami…, British journal of clinical… (1990) | [10.1111/j.1365-2125.1990.tb03767.x](https://doi.org/10.1111/j.1365-2125.1990.tb03767.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ACE** | `Q320` · Emax | target | [Pérez-Castrillón_2003](drugs/drug_quinapril/pgx_P_rez_Castrill_n_2003_ACE_Q320.md) | Pérez-Castrillón JL et al., Effect of quinapril, quinapril-hydrochl…, American journal of hyperte… (2003) | [10.1016/s0895-7061(03)00845-8](https://doi.org/10.1016/s0895-7061(03)00845-8) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CES1** | `Q27` · CL/F | formation | [Tarkiainen_2015](drugs/drug_quinapril/pgx_Tarkiainen_2015_CES1_Q27.md) | Tarkiainen EK et al., Effect of carboxylesterase 1 c.428G &gt; A…, British journal of clinical… (2015) | [10.1111/bcp.12667](https://doi.org/10.1111/bcp.12667) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=quinapril).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CES1` formation/substrate | DrugBank actor |
| excretion | kidney | `SLC15A2` substrate, `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor), ACE (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:15 | 2:13 | 0/0/0 | 1/0/0 | 0/0/2 | 53,318/2,408 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 8/6 | 0/7 | 0 |

## Coverage

- **PubMed hits:** 51 matched, 48 returned
- **screened:** 8  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chu_2007.pdf` | Chu XY et al., Transport of the dipeptidyl peptidase-4…, The Journal of pharmacology… (2007) | pd | 4 | [10.1124/jpet.106.116517](https://doi.org/10.1124/jpet.106.116517) | [17314201](https://www.ncbi.nlm.nih.gov/pubmed/17314201) | metadata signals extractable PD data (IC50) |
| `Lin_1999.pdf` | Lin CJ et al., Competitive inhibition of glycylsarcosi…, Pharmaceutical research (1999) | pd | 4 | [10.1023/a:1018847818766](https://doi.org/10.1023/a:1018847818766) | [10350000](https://www.ncbi.nlm.nih.gov/pubmed/10350000) | metadata signals extractable PD data (IC50) |
| `Müns_1993.pdf` | Müns G et al., Regulation of angiotensin I-converting…, Journal of cellular biochem… (1993) | pd | 4 | [10.1002/jcb.240530413](https://doi.org/10.1002/jcb.240530413) | [8300752](https://www.ncbi.nlm.nih.gov/pubmed/8300752) | metadata signals extractable PD data (IC50) |
| `Reid_1991.pdf` | Reid JL et al., The contribution of ambulatory blood pr…, Journal of hypertension. Su… (1991) | pd | 4 |  | [1795202](https://www.ncbi.nlm.nih.gov/pubmed/1795202) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-10-07 07:14 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Afonso_2013 | irrelevant | 2 | 0 | This is a pharmacodynamic (ACE inhibition) study in horses; no PK disposition parameters (CL, V, ka, half-life) for quinapril are reported, only PD metrics like Imax and AUC of inhibition. |
| popPK | Becker_2021 | irrelevant | 0 | 0 | A case report/review on ACE inhibitor angioedema with no PK parameters or numeric disposition values for quinapril. |
| PD | Becker_2021 | not_relevant | 1 | 0 | Case report with only qualitative discussion of ACE-inhibitor PD; no numeric PD parameters or concentration/dose-effect data. |
| popPK | Begg_1989 | irrelevant | 3 | 0 | A narrative review/discussion of ACE inhibitor PK in renal impairment with no numeric quinapril parameter values present. |
| PD | Begg_1989 | not_relevant | 2 | 0 | Narrative review of ACE inhibitor PK/PD in renal impairment; only qualitative statements about prolonged ACE inhibition, no numeric PD parameters or effect-concentration data. |
| popPK | Begg_1990 | relevant | 7 | 3 | PK study of quinapril/quinaprilat in renal impairment, but the evidence gives only summary statements (clearance–CLCr relationships, half-life trends) without actual numeric parameter values, which are not provided. |
| popPK | Breslin_1996 | relevant | 6 | 3 | PK study of quinapril/quinaprilat in humans, but evidence gives only summary values (bioavailability ~50%, AUC comparisons) without CL/V/t½ or model parameters, which may be in figures/tables not provided. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report quantitative pharmacokinetic parameters for quinapril. |
| PD | Cabré_2026 | not_relevant | 1 | 0 | Narrative review of cardiovascular pharmacotherapy with no quinapril-specific PD or exposure-response data or numeric parameters. |
| popPK | Canter_1994 | irrelevant | 0 | 0 | This is a clinical efficacy/dose-response trial with no pharmacokinetic parameters for quinapril reported. |
| popPK | Chu_2007 | irrelevant | 0 | 0 | This is an in-vitro transporter study of sitagliptin; quinapril appears only as an OAT3 inhibitor (IC50), with no PK disposition parameters for quinapril. |
| PD | Chu_2007 | not_relevant | 0 | 0 | In vitro transporter study; quinapril appears only as an OAT3 inhibitor IC50, no in vivo PD/exposure-response relationship. |
| popPK | Elliott_1992 | relevant | 5 | 4 | Original PK study of quinapril in humans, but only a terminal half-life (26±7 h) is reported; no CL, V, or model parameters, and AUC/Cmax values are not given numerically. |
| PD | Elliott_1992 | not_relevant | 0 | 0 |  |
| popPK | Endlich_1995 | irrelevant | 0 | 0 | The study investigates the vascular effects of PTH and PTHRP in rat kidneys, using quinapril only as an ACE inhibitor to modulate the experimental conditions, not as the subject of pharmacokinetic analysis. |
| PD | Endlich_1995 | not_relevant | 1 | 1 | Quinapril is used only as a fixed-dose ACE-inhibition intervention; the concentration-response relationships (EC50, Emax) reported are for PTH/PTHRP, not for quinapril, so no quinapril exposure-response PD parameters are extractable. |
| popPK | Fernandez_1992 | irrelevant | 2 | 0 | This is a pharmacodynamic (orthostatic blood pressure) study; quinapril concentrations were sampled but no numeric PK parameters (CL, V, ka, half-life, model) appear in the evidence. |
| PD | Fernandez_1992 | not_relevant | 3 | 2 | Reports qualitative orthostatic BP/HR responses to quinapril doses with plasma concentrations sampled, but no numeric PD parameters (Emax, EC50, slope) or effect-vs-concentration relationship are stated or derivable. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | The paper is a review of drug-induced acute kidney injury potential and does not report pharmacokinetic parameters for quinapril. |
| PD | Fernández-Llaneza_2025 | not_relevant | 0 | 0 | This is a knowledge-aggregation/safety-signal study on drug-induced AKI (RORs, ADE frequencies); no quinapril concentration-effect or dose-response PD data or parameters are reported. |
| popPK | Fiscon_2021 | irrelevant | 0 | 0 | The paper is an in-silico drug repurposing study for COVID-19 and does not report any pharmacokinetic parameters for quinapril. |
| PD | Fiscon_2021 | not_relevant | 0 | 0 | Network-based computational drug repurposing study; no quinapril exposure-, dose-, or concentration-effect data or PD parameters are reported. |
| popPK | Frank_1990 | irrelevant | 2 | 0 | This is a clinical overview of efficacy/safety with no quantitative PK parameters for quinapril reported. |
| PD | Frank_1990 | not_relevant | 1 | 0 | Narrative review summarizing trial counts and safety; no numeric PD or dose-response parameters reported. |
| popPK | Frohlich_1990 | irrelevant | 0 | 0 | Pharmacodynamic study of ACE inhibitors in rats with no pharmacokinetic parameters or numeric disposition values for quinapril. |
| PD | Frohlich_1990 | not_relevant | 2 | 0 | Qualitative comparison of ACE inhibitor effects on cardiovascular mass/function in rats; no concentration- or dose-response data or numeric PD parameters reported. |
| popPK | Frohlich_1991 | irrelevant | 0 | 0 | Pharmacodynamic/hemodynamic study in rats with no PK parameters or numeric disposition values for quinapril. |
| PD | Frohlich_1991 | not_relevant | 2 | 1 | Animal dose-comparison study of ACE inhibitors reporting qualitative hemodynamic/structural effects with no concentration-effect data or numeric PD parameters. |
| popPK | González-Correa_2025 | irrelevant | 0 | 0 | The study focuses on the probiotic Limosilactobacillus fermentum and hydrochlorothiazide in rats, with no mention of quinapril or its pharmacokinetics. |
| PD | González-Correa_2025 | not_relevant | 2 | 0 | Animal study of probiotic potentiation of HCTZ antihypertensive effects; no concentration-effect or dose-response PD parameters (Emax, EC50, slope) reported or derivable. |
| PGx | Hallberg_2017 | not_relevant | 0 | 0 | The paper reports genetic associations with ACE inhibitor-induced cough (an adverse event), not pharmacokinetic or pharmacodynamic parameters of quinapril. |
| popPK | Ikemura_2019 | irrelevant | 0 | 0 | In-vitro CYP2J2 inhibition study; quinapril is only one of many tested inhibitors (IC50/Ki for enzyme inhibition), with no PK disposition parameters. |
| PD | Ikemura_2019 | not_relevant | 1 | 2 | In vitro recombinant CYP2J2 enzyme inhibition study (IC50/Ki for quinapril), not an in vivo exposure-response or dose-effect PD relationship. |
| popPK | Jallapally_2015 | irrelevant | 0 | 0 | This is a medicinal chemistry/ACE inhibition potency study; quinapril is only a comparator and no PK parameters are reported. |
| PD | Jallapally_2015 | not_relevant | 2 | 2 | In vitro ACE IC50 values for novel peptidomimetics (quinapril only as comparator), not an in-vivo exposure- or dose-response PD relationship for quinapril. |
| popPK | Johnston_1989 | irrelevant | 1 | 0 | This is an in vitro/ex vivo tissue ACE inhibition study with no PK disposition parameters (CL, V, ka, etc.) or numeric PK values for quinapril. |
| PD | Johnston_1989 | not_relevant | 3 | 1 | Qualitative review of tissue ACE inhibition with rank-order potency and dose-dependent inhibition described, but no numeric PD parameters (Emax, EC50, curves) extractable. |
| popPK | Keuneke_1990 | irrelevant | 1 | 0 | This is a narrative review of tissue RAS effects with no quinapril PK parameters; no numeric values present. |
| PD | Keuneke_1990 | not_relevant | 1 | 0 | Narrative review of tissue RAS mechanisms; no numeric PD or dose/concentration-effect parameters for quinapril are reported or derivable. |
| popPK | Kieback_2009 | irrelevant | 3 | 1 | This is a narrative review of quinaprilat (the active metabolite) with no original quantitative PK parameters (CL, V, ka) reported in the evidence. |
| PD | Kieback_2009 | not_relevant | 2 | 1 | A narrative review summarizing quinaprilat PK/PD qualitatively; no numeric PD parameters (Emax, EC50, effect curves) are reported or derivable from the abstract. |
| popPK | Kim_2000 | irrelevant | 1 | 0 | Quinapril is used only as a co-administered ACE inhibitor in a bradykinin pharmacodynamic study; no PK parameters for quinapril are reported. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The paper is a neuroprotective compound screen in zebrafish and does not involve quinapril or its pharmacokinetics. |
| PD | Kim_2022 | not_relevant | 0 | 0 | This is an in vivo zebrafish screening study for neuroprotective compounds; quinapril is not mentioned and no drug exposure-response or concentration-effect PD relationship with numeric parameters is reported. |
| popPK | Kimura_1998 | irrelevant | 0 | 0 | This is a vascular pharmacodynamics study of adrenoceptor sensitivity with no PK parameters (CL, V, ka, half-life, or PK model) for quinapril reported. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The paper is a survey on natural health product use and coding feasibility, containing no pharmacokinetic data for quinapril. |
| PD | Lee_2026 | not_relevant | 0 | 0 | Survey/coding feasibility study of NHP use; no quinapril concentration- or dose-effect data or PD parameters. |
| popPK | Lin_1999 | irrelevant | 1 | 1 | In-vitro transporter inhibition study; quinapril is only a test inhibitor, no PK disposition parameters reported. |
| PD | Lin_1999 | not_relevant | 3 | 4 | In vitro transporter inhibition IC50/Ki values for quinapril/quinaprilat are reported, but this is a biochemical BBMV uptake study, not an in vivo exposure- or dose-response PD relationship for the drug. |
| popPK | Maeso_1999 | irrelevant | 0 | 0 | This is a vascular pharmacology study using quinapril as a treatment, with no PK parameters reported. |
| PD | Maeso_1999 | not_relevant | 2 | 1 | Preclinical rat study with fixed-dose quinapril; dose-response curves are for acetylcholine in isolated vessels, not a quinapril exposure/dose-effect relationship with extractable PD parameters. |
| popPK | Müns_1993 | irrelevant | 0 | 0 | In-vitro enzyme inhibition study; quinapril is only an ACE inhibitor with an IC50, no PK disposition parameters. |
| popPK | Oosterga_2000 | irrelevant | 0 | 0 | This is a vascular pharmacodynamics study of ACE inhibition with no PK parameters (CL, V, ka, half-life, or PK model) for quinapril reported. |
| popPK | Padoin_1998 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of cephalexin, with quinapril serving only as a co-administered agent to test for interactions, and no quantitative PK parameters for quinapril itself are reported. |
| PD | Padoin_1998 | not_relevant | 0 | 0 | This is a purely pharmacokinetic interaction study (quinapril effects on cephalexin PK parameters); no pharmacodynamic or exposure-response relationship is modeled or reported. |
| popPK | Plosker_1994 | irrelevant | 2 | 1 | This is a narrative review of pharmacology/efficacy with only a half-life mentioned and no quantitative PK parameters (CL, V, ka) or model values reported. |
| PD | Plosker_1994 | not_relevant | 1 | 0 | Narrative review with only qualitative dose-range statements (10–40 mg/day efficacy) and no concentration-effect data or numeric PD parameters. |
| PGx | Pérez-Castrillón_2003 | not_relevant | 2 | 5 | The study examines the effect of ACE polymorphisms on bone mineral density (a clinical outcome/PD endpoint) rather than standard pharmacokinetic parameters or direct pharmacodynamic markers of drug action (like blood pressure or ACE activity). |
| popPK | Qi_2001 | irrelevant | 0 | 0 | This is a mechanistic cardiac physiology study using quinapril as a therapy, with no pharmacokinetic parameters reported. |
| PD | Qi_2001 | not_relevant | 2 | 1 | Animal in-vitro ET-1 dose-response study with qualitative quinapril effects; no quinapril exposure-response relationship or numeric PD parameters (Emax, EC50, etc.) reported or derivable. |
| popPK | Reid_1991 | irrelevant | 1 | 0 | This is a review/abstract on ambulatory blood pressure monitoring; no PK parameters or numeric values for quinapril are reported. |
| PD | Reid_1991 | not_relevant | 2 | 0 | Abstract/review-style mention of using ABPM to assess quinapril dose and concentration-effect relationships, with no numeric PD parameters or effect-vs-concentration data reported. |
| popPK | Schaison_1996 | irrelevant | 1 | 0 | This is a pharmacodynamic dose-response study of ACE inhibition in rats with no PK parameters (CL, V, ka, half-life, or PK model) reported for quinapril. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | The paper is a retrospective analysis of drug interaction prevalence in pharmacy dispensing data and does not report any pharmacokinetic parameters for quinapril. |
| PD | Somogyi-Végh_2019 | not_relevant | 0 | 0 | This is a drug-utilization/DDI prevalence study with no concentration-effect, dose-response, or PK/PD analysis for quinapril; no PD parameters are reported or derivable. |
| popPK | Song_2002 | irrelevant | 2 | 0 | This is a review of other ACE inhibitors; quinapril is only mentioned as an established comparator with no quantitative PK parameters reported. |
| PD | Song_2002 | not_relevant | 2 | 1 | This is a narrative review; quinapril is only mentioned qualitatively (flat dose-response class statement, mortality overview) with no numeric PD parameters or effect-vs-concentration data extractable. |
| popPK | Tarkiainen_2015 | relevant | 6 | 2 | Quinapril is a subject drug in a PK study, but the evidence contains no numeric PK parameter values for quinapril (likely in tables/figures not provided). |
| PD | Tarkiainen_2015 | not_relevant | 0 | 0 | This is a genotype-stratified pharmacokinetic study (CES1 c.428G&gt;A effect on quinapril/enalapril disposition) with no pharmacodynamic endpoint, concentration-effect, or dose-response data reported. |
| PD | Wolter_1993 | not_relevant | 3 | 2 | Small-n PK/PD study showing ACE activity suppression and MAP/Ang II changes after 2.5 mg quinapril, but only qualitative concentration-effect description; no numeric PD parameters (Emax, EC50, slope) or effect-vs-concentration curve are reported or derivable. |
| popPK | Wright_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of colchicine, not quinapril. |
| PD | Wright_2025 | not_relevant | 0 | 0 | This is a population PK model for colchicine (not quinapril) with only a nominal concentration range used as a safety/efficacy proxy; no drug-effect vs exposure relationship or PD parameters are modeled or derivable. |
| popPK | Yilmaz_2026 | irrelevant | 0 | 0 | The study is a clinical trial assessing vascular function (FMD/CFR) and blood pressure, not a pharmacokinetic study reporting disposition parameters for quinapril. |
| popPK | Yuan_2009 | relevant | 4 | 3 | Quinapril/quinaprilat is the subject drug with some PK values (AUC change, urinary excretion change, Km), but no CL/V/compartment parameters and no full PK model values are provided. |
| PD | Yuan_2009 | not_relevant | 2 | 1 | The paper reports a transporter-mediated DDI (Km/IC50 values) and qualitative synergistic blood pressure reduction, but no concentration-effect or dose-response PD relationship for quinapril with extractable PD parameters. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper describes a mass spectrometry resource for drug screening and does not report pharmacokinetic parameters for quinapril. |
| PD | Zhao_2025 | not_relevant | 0 | 0 | Metabolomics-based drug exposure detection resource; no quinapril concentration-effect or dose-response PD analysis or parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquinapril%5D&body=Drug%3A%20quinapril%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quinapril/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>

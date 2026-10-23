<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;trandolapril&quot;}]"></div>

# trandolapril

- **generic name:** trandolapril
- **ATC codes:** `C09AA10`, `C09BB10`
- **DrugBank:** [DB00519](https://go.drugbank.com/drugs/DB00519) · **PubChem:** [CID 5484727](https://pubchem.ncbi.nlm.nih.gov/compound/5484727)
- **molar mass:** 430.5372 g/mol (C24H34N2O5) — DrugBank
- **groups:** approved, investigational

## About

Trandolapril is an ACE inhibitor used to treat high blood pressure and congestive heart failure. It is an approved medicine, available alone and in fixed combinations with calcium channel blockers for cardiovascular use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q929420](https://www.wikidata.org/wiki/Q929420) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trandolapril | parent | 430.537 | C24H34N2O5 | DrugBank | [5484727](https://pubchem.ncbi.nlm.nih.gov/compound/5484727) | Li_2016 |
| trandolaprilat | metabolite | 402.491 | C22H30N2O5 | PubChem | [5464097](https://pubchem.ncbi.nlm.nih.gov/compound/5464097) | Li_2016 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Li_2016_trandolapril](drugs/drug_trandolapril/Trandolapril_Li2016_trandolapril.md) | — | general linear (no model) | 11 | Li X et al., Pharmacokinetics, Pharmacodynamics, and…, European journal of drug me… (2016) | [10.1007/s13318-015-0277-2](https://doi.org/10.1007/s13318-015-0277-2) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ trandolaprilat](drugs/drug_trandolapril/Trandolapril_Li2016_trandolaprilat.md) | — | general linear (no model) | 13 |  |  |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CES1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Wang_2021](drugs/drug_trandolapril/pgx_Wang_2021_CES1_Q100.md) | Wang X et al., Impact of carboxylesterase 1 genetic po…, Clinical and translational… (2021) | [10.1111/cts.12989](https://doi.org/10.1111/cts.12989) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM popPK screen).">in vitro</span> | **CES1** | `Q305` · kfm | formation | [Zhu_2009](drugs/drug_trandolapril/pgx_Zhu_2009_CES1_Q305.md) | Zhu HJ et al., Role of carboxylesterase 1 and impact o…, Biochemical pharmacology (2009) | [10.1016/j.bcp.2008.12.017](https://doi.org/10.1016/j.bcp.2008.12.017) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trandolapril).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| metabolism | liver | `CES1` formation/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC15A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:41 | 3:07 | 0/2/0 | 0/0/0 | 0/0/2 | 96,876/3,754 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 7/15 | 4/14 | 0 |

## Coverage

- **PubMed hits:** 61 matched, 58 returned
- **screened:** 19  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hirayama_1994.pdf` | Hirayama M et al., Pharmacokinetics of RU44403, an active…, Drug metabolism and disposi… (1994) | popPK | 10 | not captured | [7956736](https://pubmed.ncbi.nlm.nih.gov/7956736) | The study reports quantitative pharmacokinetic parameters (half-life, absorption, AUC) for trandolapril's active metabolite RU44403 in rats, with specific numeric values provided in the abstract. |
| `Conen_1993.pdf` | Conen H et al., Pharmacologic profile of trandolapril,…, American heart journal (1993) | pd | 5 | [10.1016/0002-8703(93)90450-n](https://doi.org/10.1016/0002-8703(93)90450-n) | [8480624](https://www.ncbi.nlm.nih.gov/pubmed/8480624) | metadata signals extractable PD data (IC50) |
| `Chevillard_1994.pdf` | Chevillard C et al., Compared properties of trandolapril, en…, Journal of cardiovascular p… (1994) | pd | 4 | not captured | [7527095](https://www.ncbi.nlm.nih.gov/pubmed/7527095) | metadata signals extractable PD data (IC50) |
| `Clark_2000.pdf` | Clark JF et al., The effects of anti-hypertensive therap…, Journal of muscle research… (2000) | pd | 4 | [10.1023/a:1005646614308](https://doi.org/10.1023/a:1005646614308) | [10952173](https://www.ncbi.nlm.nih.gov/pubmed/10952173) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T07:39:24.310163+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Accorsi-Mendonça_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular reactivity and ACE activity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Arner_1994 | relevant | 6 | 4 | PK study of trandolapril with Cmax/AUC/t1/2 reported, but no CL/V or compartmental parameters and half-life values not given numerically in the abstract. |
| popPK | Asmar_1992 | irrelevant | 2 | 0 | This is a pharmacodynamic dose-response study of trandolapril's arterial and antihypertensive effects, with no PK parameters (CL, V, ka, half-life) reported. |
| PGx | Beitelshees_2007 | not_relevant | 0 | 0 | The study investigates the pharmacogenomic effect of KCNMB1 on verapamil SR, not trandolapril. |
| popPK | Bevan_1993 | relevant | 7 | 2 | A PK study of trandolapril/trandolaprilat in humans, but the evidence is only an abstract reporting correlations (r values) without actual disposition parameter values, which presumably reside in the full paper's tables/figures not provided. |
| popPK | Buksa_2000 | irrelevant | 1 | 0 | This is a clinical review of the TRACE trial with no quantitative PK parameters for trandolapril reported. |
| PD | Buksa_2000 | not_relevant | 1 | 0 | Narrative review of TRACE trial outcomes; no concentration- or dose-effect data or numeric PD parameters reported. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report quantitative pharmacokinetic parameters for trandolapril. |
| PD | Cabré_2026 | not_relevant | 1 | 0 | Narrative review of cardiovascular pharmacotherapy with no trandolapril-specific concentration- or dose-effect data or numeric PD parameters. |
| PGx | Chang_2018 | not_relevant | 0 | 0 | The study reports a pharmacogenomic interaction with new-onset diabetes (a clinical outcome), not a pharmacokinetic or pharmacodynamic parameter of trandolapril. |
| popPK | Chevillard_1994 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PD | Chevillard_1994 | not_relevant | 2 | 0 | Only a title is provided; no concentration-effect or dose-response data or numeric PD parameters are reported or derivable. |
| popPK | Clark_2000 | irrelevant | 0 | 0 | The study investigates the structural and metabolic effects of trandolapril on rat aorta, not its pharmacokinetic parameters. |
| PD | Clark_2000 | not_relevant | 2 | 1 | Animal hypertension study comparing treatment effects on vascular properties; no drug concentration-effect or dose-response relationship for trandolapril with extractable PD parameters. |
| popPK | Conen_1993 | irrelevant | 3 | 2 | A narrative pharmacologic profile with only tmax (~6 h) and effective half-life (24 h) but no clearance, volume, or PK model parameters. |
| PD | Conen_1993 | not_relevant | 3 | 1 | Narrative review mentions dose-dependent ACE inhibition and an IC50 concept qualitatively, but no numeric PD parameters or effect-vs-concentration data are reported. |
| popPK | Danielson_1994 | relevant | 7 | 3 | Original PK study of trandolapril/trandolaprilat with renal clearance and correlation data, but the evidence contains only abstract-level statistics (r values, Cmax/AUC relationships) without full numeric disposition parameters like CL or V. |
| popPK | Diaz_2008 | irrelevant | 2 | 0 | This is a narrative review of trandolapril's clinical use with no numeric PK parameter values reported in the evidence. |
| PD | Diaz_2008 | not_relevant | 1 | 0 | Narrative review of trandolapril PK/PD and clinical outcomes with no numeric PD parameters or concentration/dose-effect data reported. |
| PGx | Eadon_2018 | not_relevant | 2 | 1 | The paper is a review of pharmacogenomic studies in hypertension and mentions trandolapril only in the context of the INVEST study, but it does not report specific gene-variant effects on trandolapril's PK or PD parameters. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | The paper is a review of drug-induced acute kidney injury potential and does not report pharmacokinetic parameters for trandolapril. |
| PD | Fernández-Llaneza_2025 | not_relevant | 0 | 0 | Pharmacovigilance knowledge-aggregation study on drug-induced AKI; no trandolapril concentration- or dose-effect data or PD parameters. |
| popPK | Fischer_2021 | irrelevant | 2 | 3 | This is a narrative review of dosing frequency for ACE inhibitors; trandolapril appears only with basic PD/half-life summary values (t½ ~6 h, Tmax ~1 h) in a comparison table, with no CL, V, or population-PK model parameters. |
| PD | Fischer_2021 | not_relevant | 2 | 1 | Narrative review of dosing frequency with only qualitative PD discussion; no numeric PD parameters or effect-vs-concentration data for trandolapril are extractable. |
| popPK | Fischler_1999 | irrelevant | 2 | 1 | This is a review of ACE inhibitors with only scattered descriptive values (bioavailability 11%, half-life ranges) and no quantitative PK parameters (CL, V, ka) for trandolapril. |
| PD | Fischler_1999 | not_relevant | 1 | 0 | Narrative review of ACE inhibitors with only qualitative PK/PD comparisons (half-life groups, bioavailability ranges); no concentration-effect or dose-response relationship or numeric PD parameters for trandolapril. |
| popPK | Fiscon_2021 | irrelevant | 0 | 0 | The paper is an in-silico drug repurposing study for COVID-19 and does not report any pharmacokinetic parameters for trandolapril. |
| PD | Fiscon_2021 | not_relevant | 0 | 0 | Network-based drug repurposing algorithm; trandolapril appears only as a predicted repurposable drug with no PD, exposure-response, or dose-effect data. |
| popPK | Galløe_2006 | irrelevant | 1 | 0 | This is a dose-response efficacy study of trandolapril plus bumetanide in heart failure, with no PK parameters (CL, V, ka, half-life, or population-PK model) reported. |
| PGx | Gong_2015 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomic response to atenolol and resistant hypertension, not the PK/PD parameters of trandolapril. |
| popPK | Hermida_2005 | irrelevant | 0 | 0 | This is a review of chronotherapy effects on blood pressure with no PK parameters or numeric disposition values for trandolapril. |
| PD | Hermida_2005 | not_relevant | 1 | 0 | Narrative review qualitatively mentions chronotherapy effects of trandolapril on circadian BP with no numeric PD parameters or concentration/dose-effect data. |
| popPK | Jouquey_1994 | irrelevant | 1 | 0 | This is a pharmacodynamic dose-response study in rats with no PK parameters (CL, V, ka, half-life, or PK model) reported. |
| PGx | Karnes_2013 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomic effects of KCNJ1 variants on fasting glucose and new onset diabetes during hydrochlorothiazide (HCTZ) treatment, not trandolapril. |
| popPK | Kenna_2005 | irrelevant | 0 | 0 | The paper is a review of adherence modeling methodologies and does not report pharmacokinetic parameters for trandolapril. |
| PD | Kenna_2005 | not_relevant | 1 | 0 | Review of adherence modeling methodology focused on HIV; no trandolapril PD or exposure-response data or parameters reported. |
| PGx | Lambert_2016 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between ibrutinib and verapamil, not a pharmacogenomic effect on trandolapril. |
| PGx | Langaee_2007 | not_relevant | 0 | 0 | The paper investigates the association between CYP3A5 genotypes and blood pressure or response to verapamil, not trandolapril. |
| popPK | Leighton_1996 | irrelevant | 0 | 0 | The study investigates the metabolic effects of trandolapril on insulin sensitivity in rat muscle in vitro, not its pharmacokinetic disposition parameters. |
| popPK | Leonetti_1995 | irrelevant | 2 | 0 | This is a review of ACE inhibitors with no original quantitative PK parameters for trandolapril; only qualitative discussion of half-life and trough-to-peak ratios. |
| PD | Leonetti_1995 | not_relevant | 1 | 0 | Narrative review of ACE inhibitor class PK/PD with no numeric PD parameters or concentration/dose-effect data for trandolapril. |
| PGx | Lewis_2013 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of aspirin and clopidogrel, not trandolapril. |
| popPK | Li_2016 | relevant | 6 | 4 | Trandolapril is the subject drug with some PK values (Cmax, AUC, excretion, R) present, but core disposition parameters (CL, V, t½, ka) are not shown and likely reside in tables/figures not provided. |
| PD | Li_2016 | not_relevant | 3 | 2 | PD is assessed only as descriptive blood pressure/heart rate changes over time after dosing (peak BP reduction at 8 h), with no concentration-effect or dose-effect model and no numeric PD parameters (Emax, EC50, slope, E0) stated or derivable. |
| PGx | Magvanjav_2017 | not_relevant | 0 | 0 | The study investigates genetic variants associated with blood pressure response to thiazide diuretics and beta-blockers, not trandolapril. |
| PGx | McDonough_2013 | not_relevant | 0 | 0 | The paper reports pharmacogenomic associations with cardiovascular outcomes (clinical efficacy/safety) rather than pharmacokinetic or pharmacodynamic parameters of trandolapril. |
| popPK | Meyer_1995 | irrelevant | 2 | 0 | This is a pharmacodynamic interaction study with warfarin; no PK disposition parameters for trandolapril are reported. |
| PD | Meyer_1995 | not_relevant | 3 | 2 | This is a drug-interaction bioequivalence-style comparison of warfarin PD (PT AUC ratios) with vs without trandolapril; no trandolapril exposure-response or dose-effect relationship or PD parameters (Emax/EC50 etc.) are reported or derivable. |
| PGx | Niu_2010 | not_relevant | 0 | 0 | The study reports a pharmacogenetic association with adverse cardiovascular outcomes (clinical endpoints) rather than a specific pharmacokinetic or pharmacodynamic parameter of trandolapril. |
| PGx | Okumura_2001 | not_relevant | 0 | 0 | The study reports no significant association between ACE gene polymorphism and trandolapril pharmacokinetic parameters or cough incidence. |
| popPK | Othman_2007 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for S(-)-carvedilol, not trandolapril. |
| PD | Othman_2007 | not_relevant | 0 | 0 | Paper reports only a population PK model for S-carvedilol; no PD or exposure-response data or parameters are presented. |
| popPK | Poirier_1993 | irrelevant | 1 | 0 | This is an antihypertensive efficacy trial with no pharmacokinetic parameters or numeric disposition values reported. |
| PD | Poirier_1993 | not_relevant | 2 | 1 | Crossover efficacy comparison of two dosing regimens with BP outcomes only; no concentration-effect or dose-response relationship or numeric PD parameters reported. |
| popPK | Scholze_1998 | irrelevant | 1 | 0 | This is an antihypertensive efficacy trial with no PK parameters (CL, V, ka, half-life, or PK model) reported for trandolapril. |
| popPK | Sica_2007 | irrelevant | 1 | 0 | This is a narrative supplement overview about calcium channel blockers with no trandolapril PK parameters or numeric values. |
| PD | Sica_2007 | not_relevant | 1 | 0 | This is only an editorial/overview of a supplement; no PD or exposure-response data for trandolapril with numeric parameters are presented. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | The study is a retrospective analysis of drug interaction prevalence in pharmacy dispensing data and does not report any pharmacokinetic parameters for trandolapril. |
| PD | Somogyi-Végh_2019 | not_relevant | 0 | 0 | Drug utilization/DDI prevalence study with no concentration- or dose-effect data or PD parameters for trandolapril. |
| popPK | Song_2002 | irrelevant | 3 | 0 | This is a narrative review of ACE inhibitors with no numeric PK parameters for trandolapril reported in the evidence. |
| PD | Song_2002 | not_relevant | 2 | 1 | Narrative review mentioning trandolapril's trough-to-peak ratio &gt;50% and flat ACE-inhibitor dose-response qualitatively, with no numeric PD parameters or effect-concentration data extractable. |
| PGx | Vandell_2012 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects of GRK4 polymorphisms on atenolol response and cardiovascular outcomes in the INVEST trial (which used trandolapril), but it does not report any pharmacokinetic or pharmacodynamic parameters specifically for trandolapril. |
| popPK | Wang_2021 | relevant | 6 | 3 | A human single-dose PK study of trandolapril/trandolaprilat is described, but the evidence contains only summary percentages (Cmax, AUC changes); no numeric CL, V, or half-life values are present, and detailed parameters may be in figures/tables not provided. |
| popPK | Widimský_2000 | irrelevant | 1 | 0 | This is a clinical review of verapamil/trandolapril combination efficacy and safety with no pharmacokinetic parameters or numeric disposition values reported. |
| PD | Widimský_2000 | not_relevant | 1 | 0 | Narrative review summary with only qualitative dose-combination efficacy claims; no numeric PD parameters or concentration/dose-effect data for trandolapril are reported or derivable. |
| popPK | Wiseman_1994 | irrelevant | 3 | 1 | This is a narrative review of trandolapril's pharmacokinetics with no numeric PK parameter values present in the evidence. |
| PD | Wiseman_1994 | not_relevant | 2 | 1 | This is a qualitative narrative review of trandolapril's PD/PK properties and clinical efficacy; no numeric PD parameters (Emax, EC50, dose-effect curves) are stated or derivable from the abstract text. |
| popPK | Zannad_1993 | irrelevant | 2 | 1 | This is a narrative review comparing ACE inhibitors; no quantitative PK parameters (CL, V, ka, or model values) for trandolapril are reported, only qualitative statements and trough:peak ratios. |
| PD | Zannad_1993 | not_relevant | 2 | 1 | Narrative review with qualitative ACE-inhibition/duration claims and trough:peak ratios only; no concentration-effect or dose-response PD parameters (Emax, EC50, etc.) stated or derivable. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-09-30 23:53 UTC</sub>

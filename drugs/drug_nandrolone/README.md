<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A14A&quot;,&quot;href&quot;:&quot;atc/A14A.md&quot;},{&quot;label&quot;:&quot;nandrolone&quot;}]"></div>

# nandrolone

- **generic name:** nandrolone
- **ATC codes:** `A14AB01`, `S01XA11`
- **DrugBank:** [DB13169](https://go.drugbank.com/drugs/DB13169) · **PubChem:** [CID 9904](https://pubchem.ncbi.nlm.nih.gov/compound/9904)
- **molar mass:** 274.3978 g/mol (C18H26O2) — DrugBank
- **groups:** investigational

## About

Nandrolone is an anabolic steroid that has been used to treat anemia and breast cancer. It is considered investigational and is not an authorised medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421709](https://www.wikidata.org/wiki/Q421709) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nandrolone | parent | 274.398 | C18H26O2 | DrugBank | [9904](https://pubchem.ncbi.nlm.nih.gov/compound/9904) | Wijnand_1985 |
| nandrolone decanoate | metabolite | 428.657 | C28H44O3 | PubChem | [9677](https://pubchem.ncbi.nlm.nih.gov/compound/9677) | Wijnand_1985 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Wijnand_1985_reference](drugs/drug_nandrolone/Nandrolone_Wijnand1985_reference.md) | — | general linear (no model) | 1 | Wijnand HP et al., Pharmacokinetic parameters of nandrolon…, Acta endocrinologica. Suppl… (1985) | [10.1530/acta.0.109s00019](https://doi.org/10.1530/acta.0.109s00019) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **UGT2B15** | `Q351` · CLm/F | metabolism | [Strahm_2013](drugs/drug_nandrolone/pgx_Strahm_2013_UGT2B15_Q351.md) | Strahm E et al., Implication of Human UGT2B7, 2B15, and…, Frontiers in endocrinology (2013) | [10.3389/fendo.2013.00075](https://doi.org/10.3389/fendo.2013.00075) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **UGT2B7** | `Q351` · CLm/F | metabolism | [Strahm_2013](drugs/drug_nandrolone/pgx_Strahm_2013_UGT2B7_Q351.md) | Strahm E et al., Implication of Human UGT2B7, 2B15, and…, Frontiers in endocrinology (2013) | [10.3389/fendo.2013.00075](https://doi.org/10.3389/fendo.2013.00075) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nandrolone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `UGT2B7` metabolism | PGx paper |
| metabolism | liver | `UGT2B15` metabolism, `UGT2B7` metabolism | PGx paper |
| metabolism | small intestine | `UGT2B7` metabolism | PGx paper |
| — | prostate gland | `AR` target | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:20 | 15:58 | 0/1/0 | 0/0/0 | 0/0/2 | 283,830/20,109 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 1/12 | 11/1 | 0 |

## Coverage

- **PubMed hits:** 144 matched, 76 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_9 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Minto_1997.pdf` | Minto CF et al., Pharmacokinetics and pharmacodynamics o…, The Journal of pharmacology… (1997) | popPK | 10 | not captured | [9103484](https://pubmed.ncbi.nlm.nih.gov/9103484) | The study reports a population PK model for nandrolone in humans, but the specific numeric parameter values are not present in the provided evidence. |
| `Wijnand_1985.pdf` | Wijnand HP et al., Pharmacokinetic parameters of nandrolon…, Acta endocrinologica. Suppl… (1985) | popPK | 10 | [10.1530/acta.0.109s00019](https://doi.org/10.1530/acta.0.109s00019) | [3865478](https://pubmed.ncbi.nlm.nih.gov/3865478) | The abstract explicitly reports quantitative pharmacokinetic parameters including half-life and serum clearance for nandrolone in healthy volunteers. |
| `Kalicharan_2016_2.pdf` | Kalicharan RW et al., Fundamental understanding of drug absor…, European journal of pharmac… (2016) | popPK | 8 | [10.1016/j.ejps.2015.12.011](https://doi.org/10.1016/j.ejps.2015.12.011) | [26690043](https://pubmed.ncbi.nlm.nih.gov/26690043) | The study reports pharmacokinetic parameters (absorption rate constant, lag time) for nandrolone decanoate in humans, but the specific numeric values are not present in the provided evidence text. |
| `Singh_2014.pdf` | Singh GK et al., Pharmacokinetic-pharmacodynamic study o…, The Journal of clinical end… (2014) | popPK | 8 | [10.1210/jc.2014-1243](https://doi.org/10.1210/jc.2014-1243) | [24684468](https://pubmed.ncbi.nlm.nih.gov/24684468) | The study reports peak and nadir concentrations and times for nandrolone but lacks explicit clearance, volume, or half-life parameters required for population PK modeling. |
| `Ray_2005.pdf` | Ray JE et al., Therapeutic drug monitoring of atazanav…, British journal of clinical… (2005) | pd | 5 | [10.1111/j.1365-2125.2005.02413.x](https://doi.org/10.1111/j.1365-2125.2005.02413.x) | [16120068](https://www.ncbi.nlm.nih.gov/pubmed/16120068) | metadata signals extractable PD data (exposure-response) |
| `Liang_1993.pdf` | Liang MT et al., Effects of anabolic steroids and endura…, International journal of sp… (1993) | pd | 4 | [10.1055/s-2007-1021186](https://doi.org/10.1055/s-2007-1021186) | [8407062](https://www.ncbi.nlm.nih.gov/pubmed/8407062) | metadata signals extractable PD data (Emax) |
| `Ponec_1981.pdf` | Ponec M et al., Corticoids and cultured human epidermal…, The Journal of investigativ… (1981) | pd | 4 | [10.1111/1523-1747.ep12525761](https://doi.org/10.1111/1523-1747.ep12525761) | [6165779](https://www.ncbi.nlm.nih.gov/pubmed/6165779) | metadata signals extractable PD data (IC50) |
| `Chowdhury_2017.pdf` | Chowdhury P et al., Analysis of Elevated Levels of Nandrolo…, Drug metabolism letters (2017) | pgx | 7 | [10.2174/1872312811666171114145535](https://doi.org/10.2174/1872312811666171114145535) | [29141576](https://www.ncbi.nlm.nih.gov/pubmed/29141576) | metadata signals extractable PGX data (CYP1, PK/PD-context) |
| `Gårevik_2011.pdf` | Gårevik N et al., Long term perturbation of endocrine par…, The Journal of steroid bioc… (2011) | pgx | 5 | [10.1016/j.jsbmb.2011.08.005](https://doi.org/10.1016/j.jsbmb.2011.08.005) | [21884791](https://www.ncbi.nlm.nih.gov/pubmed/21884791) | metadata signals extractable PGX data (UGT2B17) |

<sub>queue written 2026-10-05T10:13:15.077666+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ayoub_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dimethandrolone undecanoate (DMAU), not nandrolone. |
| PD | Baydoun_2014 | not_relevant | 3 | 5 | The paper reports IC50 values for anti-leishmanial activity, which are dose-response metrics, but it is a pharmacological screening study rather than a pharmacokinetic/pharmacodynamic (PK/PD) analysis of nandrolone's exposure-response relationship in a biological system. |
| popPK | Belkien_1985 | irrelevant | 0 | 0 | The study investigates 19-nortestosterone esters (NP and ND), not nandrolone, and reports no pharmacokinetic parameters for nandrolone. |
| popPK | Cattani_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for estradiol and spironolactone, not nandrolone. |
| PD | Cattani_2023 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of estradiol and spironolactone, not nandrolone, and does not report any pharmacodynamic or exposure-response relationships. |
| PGx | Chowdhury_2017 | not_relevant | 0 | 0 | The study investigates the effect of nandrolone on CYP enzymes, not the effect of a gene variant on nandrolone pharmacokinetics or pharmacodynamics. |
| popPK | Clark_1996 | irrelevant | 0 | 0 | The study focuses on behavioral and endocrine effects of nandrolone decanoate in rats, not on pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Dirikolu_2023 | not_relevant | 1 | 0 | The paper is a review that explicitly states only minimal pharmacodynamic studies have been carried out and does not report any numeric PD parameters or exposure-response relationships. |
| popPK | Ferrer_2025 | irrelevant | 0 | 0 | The paper investigates the antioxidant properties of oolong tea compounds in breast cancer models and contains no data on nandrolone pharmacokinetics. |
| PD | Ferrer_2025 | not_relevant | 0 | 0 | The paper investigates oolong tea bioactive compounds and their effects on breast cancer genes, with no mention of nandrolone or any pharmacodynamic modeling. |
| popPK | Geci_2026 | irrelevant | 0 | 0 | The paper is a review/methodology study on drug-induced liver injury (DILI) prediction using a dataset of 241 drugs, and does not report specific pharmacokinetic parameters for nandrolone. |
| PD | Geci_2026 | not_relevant | 0 | 0 | The paper focuses on drug-induced liver injury (DILI) prediction using BSEP inhibition and does not mention nandrolone or report any pharmacodynamic parameters for it. |
| popPK | Ghorbanizamani_2026 | irrelevant | 0 | 0 | The paper is a review of upconversion nanoparticles in biomedical applications and contains no pharmacokinetic data for nandrolone. |
| PD | Ghorbanizamani_2026 | not_relevant | 0 | 0 | The paper is a review on upconversion nanoparticles in biomedical applications and contains no information regarding nandrolone or any pharmacodynamic modeling. |
| popPK | Guan_2005 | irrelevant | 1 | 0 | The paper describes an analytical method (LC-MS/MS) for detecting nandrolone in equine plasma and reports detection limits, but does not provide quantitative pharmacokinetic parameters (CL, V, t1/2) for nandrolone. |
| PGx | Gårevik_2011 | not_relevant | 2 | 5 | The paper reports an association between UGT2B17 genotype and the detectability of a biomarker (testosterone/nandrolone metabolites) in the context of doping control, but does not report a pharmacogenomic effect on the PK/PD parameters (e.g., clearance, half-life, receptor sensitivity) of nandrolone itself. |
| popPK | Hahn_2025 | irrelevant | 0 | 0 | The study investigates the immunological effects of estrogen in rhesus macaques and does not report pharmacokinetic parameters for nandrolone. |
| PD | Hahn_2025 | not_relevant | 0 | 0 | The paper studies the immunological effects of 17β-estradiol in rhesus macaques and does not report any pharmacodynamic or exposure-response data for nandrolone. |
| popPK | He_2016 | irrelevant | 0 | 0 | The study investigates the binding of norethindrone derivatives to human serum albumin in vitro, not the pharmacokinetics of nandrolone. |
| popPK | Heldring_2024 | irrelevant | 0 | 0 | The paper is a mechanistic modeling study of estradiol signaling and cell cycle progression in MCF7 cells, with no mention of nandrolone or its pharmacokinetics. |
| PD | Heldring_2024 | not_relevant | 0 | 0 | The paper focuses on 17β-estradiol (E2) signaling and cell cycle dynamics in MCF7 cells, not nandrolone. |
| popPK | Herencia-Ropero_2024 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics and efficacy of the PARP inhibitor saruparib in cancer models, not the pharmacokinetics of nandrolone. |
| PD | Herencia-Ropero_2024 | not_relevant | 0 | 0 | The paper reports antitumor efficacy in PDX models for saruparib (AZD5305), not nandrolone, and does not provide exposure-response or dose-response PD parameters. |
| popPK | Hild_2010 | irrelevant | 0 | 0 | The study focuses on liver toxicity markers (BSP clearance, enzymes) in rabbits for various androgens, but does not report pharmacokinetic parameters (CL, V, t1/2) for nandrolone. |
| popPK | Hilpert_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and hepatotoxicity of BAY1128688, not nandrolone. |
| popPK | Hohmann_2010 | irrelevant | 0 | 0 | The study is a clinical trial assessing functional outcomes (muscle strength, bone density) after nandrolone administration, but it does not report any pharmacokinetic parameters (clearance, volume, half-life, etc.). |
| PD | Howe_1997 | not_relevant | 0 | 0 | The paper focuses on the feasibility of using filter paper for sample collection and transport, reporting only on assay accuracy and stability, without providing any pharmacodynamic data, exposure-response relationships, or numeric PD parameters for nandrolone. |
| popPK | Hyndman_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of estradiol-17β in cats, not nandrolone. |
| PD | Hyndman_2020 | not_relevant | 0 | 0 | The paper studies estradiol cypionate in cats, not nandrolone, and reports only PK parameters without a PD model. |
| popPK | Iyer_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone, using nandrolone decanoate only as a suppressant agent, and does not report PK parameters for nandrolone itself. |
| popPK | Joumaa_2002 | irrelevant | 0 | 0 | The study investigates the physiological effects of nandrolone on skeletal muscle contractility (twitch tension, potassium and caffeine contractures) in rats, but does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PD | Joumaa_2002 | not_relevant | 0 | 0 | The text describes general physiological mechanisms of muscle contraction and lists factors affecting anabolic steroid studies, but does not report any specific exposure-response or dose-response data, curves, or numeric PD parameters for nandrolone. |
| popPK | Kalicharan_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of benzyl alcohol (BOH) and its metabolites, with nandrolone decanoate serving only as a co-administered component of the oil depot. |
| popPK | Kalicharan_2016_2 | relevant | 8 | 0 | The study reports pharmacokinetic parameters (absorption rate constant, lag time) for nandrolone decanoate in humans, but the specific numeric values are not present in the provided evidence text. |
| popPK | Kalinine_2014 | irrelevant | 0 | 0 | The study investigates the neurobehavioral and neurochemical effects of nandrolone (aggression, glutamate homeostasis) in mice, not its pharmacokinetic disposition parameters. |
| popPK | Klingelhöfer_2020 | irrelevant | 0 | 0 | The study is an analytical method development for detecting hormonal activity in products, not a pharmacokinetic study, and nandrolone is only used as a reference compound in bioassay validation. |
| PD | Klingelhöfer_2020 | not_relevant | 2 | 1 | The paper describes a bioanalytical method for detecting agonists/antagonists and mentions investigating dose-response curves for nandrolone to optimize sensitivity, but it does not report specific numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect data for nandrolone in the provided text. |
| popPK | Kumar_1990 | irrelevant | 0 | 0 | The study investigates 7 alpha-methyl-19-nortestosterone (7MENT), not nandrolone. |
| popPK | Kumar_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 7 alpha-methyl-19-nortestosterone (MENT), not nandrolone. |
| popPK | Liang_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cardiac contractile function, not a pharmacokinetic study, and reports no disposition parameters for nandrolone. |
| PD | Liang_1993 | not_relevant | 1 | 0 | The study reports qualitative group differences in cardiac function (e.g., lowered Emax in the combined group) but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for nandrolone. |
| popPK | Lima_2020 | irrelevant | 0 | 0 | The study is a toxicological investigation of renal function and oxidative stress in rats, reporting no pharmacokinetic parameters (CL, V, t1/2) for nandrolone. |
| popPK | Long_1996 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment measuring aggression in rats, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Long_1996 | not_relevant | 3 | 2 | The paper reports qualitative dose-response observations (e.g., low vs. high doses) but does not provide numeric concentration-effect data, PK parameters, or a fitted PD model with extractable parameters like Emax or EC50. |
| PD | Long_2000 | not_relevant | 2 | 1 | The paper reports qualitative dose effects (high vs low dose) on seizure kindling but provides no numeric concentration-effect data, PK parameters, or derivable PD parameters (Emax, EC50, etc.). |
| popPK | McGill_2025 | irrelevant | 0 | 0 | The study investigates the effects of 17α-estradiol on APOE4 mice and does not involve nandrolone or its pharmacokinetics. |
| PD | McGill_2025 | not_relevant | 0 | 0 | The paper studies 17α-estradiol, not nandrolone, and reports group-level statistical comparisons rather than a pharmacodynamic exposure-response model. |
| popPK | Minto_1997 | relevant | 10 | 0 | The study reports a population PK model for nandrolone in humans, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Norton_2000 | irrelevant | 0 | 0 | The study investigates cardiac contractile function and hemodynamics in rats, not the pharmacokinetic disposition parameters (CL, V, t1/2) of nandrolone. |
| PD | Norton_2000 | not_relevant | 2 | 1 | The study reports a qualitative attenuation of cardiac contractile response to isoproterenol following nandrolone administration, but it does not provide a concentration-effect or dose-response curve for nandrolone itself, nor does it derive numeric PD parameters (e.g., EC50, Emax) for the drug's effect. |
| popPK | Oluwatuyi_2025 | irrelevant | 0 | 0 | The study is a computational investigation of phyto-compounds as inhibitors of 17β-hydroxysteroid dehydrogenase and does not report pharmacokinetic parameters for nandrolone. |
| PD | Oluwatuyi_2025 | not_relevant | 0 | 0 | The paper is a computational study on phyto-compounds as 17β-HSD inhibitors and does not report any pharmacodynamic or exposure-response data for nandrolone. |
| PGx | Palermo_2016 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (inhibition by other drugs) on nandrolone metabolism, not pharmacogenomic effects of gene variants. |
| popPK | Pastuszak_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of testosterone undecanoate, not nandrolone. |
| PD | Pastuszak_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of testosterone undecanoate and simulates exposure changes for different dosing regimens, but it does not report a pharmacodynamic model or numeric exposure-response/dose-response parameters for nandrolone (or any drug). |
| popPK | Penna_2007 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of nandrolone on cardiac contractility and receptor expression in rats, not its pharmacokinetic disposition parameters. |
| PD | Ponec_1981 | not_relevant | 0 | 0 | The paper reports that nandrolone did not show any affinity for the corticoid binding system and provides no numeric PD parameters or dose-response relationship for nandrolone. |
| popPK | Pozzi_2013 | irrelevant | 0 | 0 | The study is a genotoxicity assessment (comet assay/micronucleus test) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Pozzi_2013 | not_relevant | 3 | 2 | The study reports a qualitative dose-response relationship for genetic damage (comet assay) at two doses but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve. |
| PD | Ray_2005 | not_relevant | 0 | 0 | The paper focuses on therapeutic drug monitoring of atazanavir and does not report any pharmacodynamic or exposure-response data for nandrolone. |
| popPK | Raymond_2025 | irrelevant | 0 | 0 | The paper is a cancer biology study focusing on GRPR and E-cadherin in melanoma, with no mention of nandrolone or its pharmacokinetics. |
| PD | Raymond_2025 | not_relevant | 0 | 0 | The paper focuses on the GRPR signaling pathway in melanoma and does not report any pharmacodynamic or exposure-response data for nandrolone. |
| popPK | Singh_2014 | relevant | 8 | 2 | The study reports peak and nadir concentrations and times for nandrolone but lacks explicit clearance, volume, or half-life parameters required for population PK modeling. |
| popPK | Singh_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of an antibody-drug conjugate (T-vc-MMAE) in mice, not nandrolone. |
| PD | Singh_2019 | not_relevant | 0 | 0 | The paper focuses on the PK-PD modeling of an antibody-drug conjugate (T-vc-MMAE) and does not mention nandrolone. |
| popPK | Soma_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of boldenone and stanozolol in horses, reporting nandrolone only as an endogenous analyte for quantification, not as the subject of a PK model. |
| popPK | Suvisaari_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 7alpha-methyl-19-nortestosterone (MENT), not nandrolone. |
| popPK | Suvisaari_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 7 alpha-methyl-19-nortestosterone (MENT), not nandrolone. |
| popPK | Talath_2026 | irrelevant | 0 | 0 | The paper is a review of natural supplements in breast cancer therapy and does not contain any pharmacokinetic data for nandrolone. |
| PD | Talath_2026 | not_relevant | 0 | 0 | The paper is a review of natural supplements in breast cancer and does not mention nandrolone or report any pharmacodynamic or exposure-response data. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper describes a protein degradation platform (FolTAC-dual) for cancer therapy and does not study the pharmacokinetics of nandrolone. |
| PD | Wang_2025 | not_relevant | 0 | 0 | The paper focuses on FolTAC-dual degraders for EGFR/HER2 and PD-L1/VISTA and does not mention nandrolone or report any pharmacodynamic parameters for it. |
| popPK | Wu_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 11β-MNTDC and its metabolite 11β-MNT, not nandrolone. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper discusses plant biosynthesis of cardenolides and is not a pharmacokinetic study of nandrolone. |
| PD | Xu_2026 | not_relevant | 0 | 0 | The paper focuses on the enzymatic mechanism of cardenolide biosynthesis in plants and does not report any pharmacodynamic or exposure-response data for nandrolone. |
| popPK | Yuen_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 11β-MNTDC, not nandrolone. |
| popPK | Zeng_2026 | irrelevant | 0 | 0 | The paper is a review of Pueraria mirifica and does not report pharmacokinetic parameters for nandrolone. |
| PD | Zeng_2026 | not_relevant | 0 | 0 | The paper is a review of Pueraria mirifica and does not report any pharmacodynamic or exposure-response data for nandrolone. |
| popPK | van_1993 | irrelevant | 2 | 0 | The text is a qualitative review of anabolic steroid pharmacokinetics without any quantitative parameter values for nandrolone. |
| PD | van_1993 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacokinetics and mentions pharmacodynamic patterns only in general terms without providing any numeric PD parameters or exposure-response data. |
| popPK | Łach_2026 | irrelevant | 0 | 0 | The study investigates the neuroprotective mechanisms of PaPE-1 in an in vitro model and does not report pharmacokinetic parameters for nandrolone. |
| PD | Łach_2026 | not_relevant | 0 | 0 | The paper investigates the neuroprotective mechanism of PaPE-1 in an in vitro model and does not contain any data, analysis, or mention of nandrolone. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 10:13 UTC</sub>

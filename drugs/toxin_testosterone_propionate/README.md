<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Testosterone Propionate&quot;}]"></div>

# Testosterone Propionate

- **generic name:** Testosterone Propionate
- **T3DB:** [T3D4754](http://www.t3db.ca/toxins/T3D4754) · **DrugBank:** [DB01420](https://go.drugbank.com/drugs/DB01420) · **PubChem:** [CID 5995](https://pubchem.ncbi.nlm.nih.gov/compound/5995)
- **groups:** approved, investigational, vet_approved, withdrawn

## About

An ester of testosterone with a propionate substitution at the 17-beta position.

- **Category:** Drug, Synthetic Toxin
- **Sources and uses:** Testosterone propionate is an anabolic steroid and a short ester form of testosterone that becomes active in the body. It is often used for muscle mass building.
- **Mechanism of toxicity:** The effects of testosterone in humans and other vertebrates occur by way of two main mechanisms: by activation of the androgen receptor (directly or as DHT), and by conversion to estradiol and activation of certain estrogen receptors. Free testosterone (T) is transported into the cytoplasm of target tissue cells, where it can bind to the androgen receptor, or can be reduced to 5&alpha;-dihydrotestosterone (DHT) by the cytoplasmic enzyme 5&alpha;-reductase. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4754">T3DB T3D4754</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 57-85-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:290629">ChEBI 290629</a></small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=testosterone_propionate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `COMT` inhibitor | DrugBank actor |
| metabolism | kidney | `COMT` inhibitor | DrugBank actor |
| metabolism | liver | `COMT` inhibitor, `CYP3A4` substrate, `UGT1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |
| — | liver | `SRD5A1` substrate | DrugBank actor |
| — | prostate gland | `AR` target, `SRD5A1` substrate | DrugBank actor |
| — | skin | `SRD5A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SHBG (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 01:11 | 12:58 | 0/0/0 | 0/0/0 | 0/0/0 | 340,980/18,963 | ollama / glm-5.3-flash | 8 | 2/6 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 75 matched, 74 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Slater_2001.pdf` | Slater CC et al., Pharmacokinetics of testosterone after…, Fertility and sterility (2001) | popPK | 7 | [10.1016/s0015-0282(01)01827-1](https://doi.org/10.1016/s0015-0282(01)01827-1) | [11438316](https://pubmed.ncbi.nlm.nih.gov/11438316) | Reports quantitative serum testosterone concentration-time profiles (Cmax, Tmax at numeric values) after buccal testosterone propionate administration in ten oophorectomized women. |
| `Katz_1993.pdf` | Katz M et al., Pharmacokinetics of sex steroids in pat…, Journal of clinical patholo… (1993) | popPK | 6 | [10.1136/jcp.46.7.660](https://doi.org/10.1136/jcp.46.7.660) | [8157756](https://pubmed.ncbi.nlm.nih.gov/8157756) | Testosterone propionate is a subject substance with pharmacokinetic profiles (peak times reported), but no numeric concentrations or derived parameters (Cmax, AUC, t½) appear in the provided evidence beyond timing values. |
| `Keating_1983.pdf` | Keating RJ et al., In vivo patterns of circulating testost…, Steroids (1983) | popPK | 6 | [10.1016/s0039-128x(83)90096-x](https://doi.org/10.1016/s0039-128x(83)90096-x) | [6673179](https://pubmed.ncbi.nlm.nih.gov/6673179) | Time course of circulating testosterone propionate-derived T in rats is reported, but no explicit numeric kinetic parameters (half-life, clearance values) appear in the evidence beyond a concentration-time narrative, likely in figures/tables not provided. |
| `Apperloo_2006.pdf` | Apperloo M et al., Vaginal application of testosterone: A…, The journal of sexual medic… (2006) | popPK | 5 | [10.1111/j.1743-6109.2006.00212.x](https://doi.org/10.1111/j.1743-6109.2006.00212.x) | [16681480](https://pubmed.ncbi.nlm.nih.gov/16681480) | Human pharmacokinetic study of vaginally applied testosterone propionate with peak serum levels and time-to-peak (5.5 h; 7.71 nmol/L) reported in the abstract, though limited classical TK parameters (no clearance or half-life derived). |

<sub>queue written 2026-11-13 01:10 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adamopoulos_1977 | irrelevant | 1 | 1 | Testosterone propionate is only administered as a pharmacologic intervention to study uric acid levels; no kinetic parameters of the substance itself are reported, and no numeric TP values appear. |
| popPK | Adkins_1979 | irrelevant | 1 | 1 | This is a developmental dose-response outcome study; only administered doses, no kinetic parameters (half-life, clearance, rates) for testosterone propionate. |
| popPK | Böhmer_1977 | irrelevant | 0 | 0 | This is a dose-response biochemical effect study of TP in rats with no kinetic parameters (half-life, clearance, rate constants, etc.). |
| popPK | Castrogiovanni_2003 | irrelevant | 1 | 2 | Testosterone propionate is used only as a treatment/exposure; the kinetic parameters (AUC, half-life, clearance) belong to leptin as the subject substance, and numeric values are not present in the evidence. |
| popPK | Chowdhury_1979 | irrelevant | 2 | 3 | Dose-response study of testosterone propionate effects on spermatogenesis; intratesticular and plasma testosterone concentrations are reported but no kinetic parameters (half-life, clearance, rate constants) are given. |
| popPK | Dluzen_1986 | irrelevant | 0 | 0 | Testosterone propionate is used only as a hormone treatment condition; no kinetic parameters of testosterone propionate are reported. |
| popPK | Elsaesser_1978 | irrelevant | 3 | 1 | Testosterone propionate is used as a dosing treatment; plasma testosterone levels are reported as statistical statements with no numeric kinetic parameters (values likely in figures/tables not provided). |
| popPK | Fujita_1992 | irrelevant | 0 | 0 | Testosterone propionate is used only as a biological treatment to test androgen dependence of a liver protein, with no kinetic parameters reported. |
| popPK | Furr_1996 | irrelevant | 0 | 0 | Testosterone propionate is used only as a pharmacodynamic challenge agent in rat antiandrogen tests; no kinetic parameters (half-life, clearance, etc.) of testosterone propionate are reported. |
| PGx | Gu_2018 | not_relevant | 2 | 1 | CYP2C19 genotype relates to clopidogrel/aspirin antiplatelet effects (TEG), not testosterone propionate PK/PD parameters; testosterone propionate is given as hemostatic therapy without pharmacogenomic correlation. |
| popPK | Hirayama_1987 | irrelevant | 1 | 1 | Testosterone propionate is only a hormonal treatment modulating methylmercury disposition; no kinetic parameters for TP itself, and any values live in the full text/figures not provided. |
| popPK | Hoffmann_1976 | irrelevant | 1 | 0 | Qualitative discussion of anabolic steroid metabolism with no numeric kinetic parameters for testosterone propionate reported here. |
| popPK | Hosoi_1984 | irrelevant | 1 | 1 | Testosterone propionate is a dosing agent in a pharmacodynamic protein-synthesis study in mice; no kinetic parameters (half-life, clearance, rates) are reported. |
| PGx | Hudson_2001 | not_relevant | 2 | 0 | TP is a hormone treatment modulating CYP expression; no gene variant/genotype effect on testosterone propionate PK/PD parameters is reported. |
| popPK | Hutchison_1975 | irrelevant | 2 | 1 | Only administered doses and qualitative time-course comparisons of hormone suppression; no kinetic parameters (half-life, clearance, rate constants) for testosterone propionate are reported numerically. |
| popPK | Janssen_1976 | irrelevant | 1 | 1 | Testosterone propionate is only a treatment modifier of ACHC disposition; kinetic parameters belong to ACHC, not to testosterone propionate itself. |
| popPK | Jiang_2026 | irrelevant | 0 | 0 | The paper is an exercise meta-analysis on body composition with no testosterone propionate or any kinetic parameters; the name may only appear in the author metadata. |
| popPK | Kaszynski_1983 | irrelevant | 0 | 0 | This is a pharmacodynamic dose-response study in hamsters with no kinetic parameters (half-life, clearance, rates, etc.) for testosterone propionate. |
| popPK | Katz_1993 | relevant | 6 | 4 | Testosterone propionate is a subject substance with pharmacokinetic profiles (peak times reported), but no numeric concentrations or derived parameters (Cmax, AUC, t½) appear in the provided evidence beyond timing values. |
| popPK | Keating_1983 | relevant | 6 | 3 | Time course of circulating testosterone propionate-derived T in rats is reported, but no explicit numeric kinetic parameters (half-life, clearance values) appear in the evidence beyond a concentration-time narrative, likely in figures/tables not provided. |
| popPK | Klint_1984 | irrelevant | 0 | 0 | Behavioral dose-response study with no kinetic parameters (no half-life, clearance, rate constants, or concentrations) for testosterone propionate. |
| PGx | Kojima_2010 | not_relevant | 1 | 4 | Reports testosterone's hormonal down-regulation of CYP1A expression (drug→gene effect), not a gene variant/genotype altering testosterone PK/PD. |
| PGx | Kojima_2013 | not_relevant | 1 | 2 | Textosterone propionate is used as an experimental manipulator of CYP expression, not a drug whose PK/PD is altered by a gene variant. |
| PGx | Kojima_2021 | not_relevant | 0 | 5 | Testosterone propionate is used as an experimental androgen to manipulate CYP mRNA expression; no gene variant/genotype changes a PK or PD parameter of TP itself. |
| popPK | Lamartiniere_1979 | irrelevant | 0 | 0 | TP is a comparator treatment; no kinetic parameters for testosterone propionate are reported. |
| popPK | Lisciotto_1990 | irrelevant | 0 | 0 | Testosterone propionate is only a neonatal dosing/androgenization treatment in a behavioral study; no kinetic parameters reported. |
| popPK | Lu_1998 | irrelevant | 0 | 0 | TP is used only as a pharmacological treatment; no kinetic parameters of testosterone propionate are reported. |
| popPK | Marty_2014 | irrelevant | 3 | 1 | Testosterone propionate is used only as a positive control/comparator in the Hershberger assay; clearance references (14C-testosterone serum clearance, AUC) appear only in figure captions and descriptive text without readable numeric TP kinetic values. |
| popPK | Maurer_1975 | irrelevant | 0 | 0 | Testosterone propionate is only a neonatal treatment agent; the kinetic parameters (radioactivity uptake) measured are for 3H-estradiol, not TP. |
| popPK | Meyers_2009 | irrelevant | 1 | 2 | Testosterone propionate is a hormone replacement treatment in rat binding assays; no toxicokinetic parameters for it are reported, and the Kd values reported belong to ligands, not the substance. |
| popPK | Miele_1988 | irrelevant | 0 | 0 | Testosterone propionate appears only as a behavioral-conditioning comparator with no kinetic parameters. |
| popPK | Moon_2010 | irrelevant | 0 | 0 | Testosterone propionate is used only as a reference control substance in a Hershberger bioassay; no kinetic parameters are reported. |
| popPK | Morel_1994 | irrelevant | 0 | 0 | Testosterone propionate is only a treatment given to rats to alter GnRH immunoreactivity; no kinetic parameters of testosterone propionate are reported. |
| popPK | Mugford_1972 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| popPK | Neri_1989 | irrelevant | 0 | 0 | Testosterone propionate appears only as a co-administered comparator in pharmacodynamic antiandrogen assays; no kinetic parameters for it are reported. |
| popPK | Noguchi_1991 | irrelevant | 0 | 0 | A mechanistic endocrine study of EGFR regulation; TP is the treatment agent with no kinetic half-life, clearance, or disposition parameters measured. |
| popPK | Nomura_1996 | irrelevant | 0 | 0 | Testosterone propionate is only administered as an experimental intervention in a HgCl2 nephrotoxicity study; no kinetic parameters (half-life, clearance, rates, etc.) for it are reported. |
| popPK | Perheentupa_1985 | irrelevant | 0 | 0 | TP is only an experimental treatment with EGF responses as outcomes; no kinetic parameters of TP itself reported. |
| popPK | Raikar_1981 | irrelevant | 0 | 0 | Testosterone propionate is only a treatment to restore prolactin binding in rats; no kinetic parameters of testosterone propionate itself are reported. |
| popPK | Riggs_1971 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| popPK | Sayed_2016 | irrelevant | 0 | 0 | Testosterone propionate is only a dosing agent to induce BPH in rats; no kinetic parameters are reported. |
| popPK | Shinohara_1990 | irrelevant | 4 | 1 | The abstract describes a stable isotope method applied to testosterone propionate pharmacokinetics but no numeric parameter values are provided in the evidence. |
| popPK | Singhal_1968 | irrelevant | 1 | 1 | Testosterone propionate appears only as a dosing agent in enzyme-induction experiments; no toxicokinetic parameters (half-life, clearance, etc.) are reported. |
| popPK | Sisk_1992 | irrelevant | 0 | 0 | This is a behavioral dose-response study in ferrets with no toxicokinetic parameters (no half-life, clearance, or kinetic constants) for testosterone propionate. |
| popPK | Sloan_2013 | irrelevant | 0 | 0 | Endocrine bioassay (Hershberger) with TP as a reference agonist dosing; no kinetic parameters of any kind reported. |
| popPK | Smirnova_1994 | irrelevant | 0 | 0 | Testosterone propionate is only used as a dose treatment (3 mg for 3 days) in a receptor-localization study, with no kinetic parameters reported. |
| popPK | Son_2025 | irrelevant | 0 | 0 | Testosterone propionate is used only as a BPH-inducing agent in a rat efficacy study; no kinetic parameters for TP are reported. |
| popPK | Song_2011 | irrelevant | 0 | 0 | Testosterone propionate appears only as an analytical internal standard; no kinetic parameters for it are reported. |
| popPK | Stern_2008 | irrelevant | 1 | 3 | Testosterone propionate appears only as an inducing treatment (dose given), with no kinetic parameters (half-life, clearance, rate constants) for the substance itself reported or extractable. |
| PGx | Stern_2008 | not_relevant | 0 | 0 | Testosterone propionate is used as an experimental treatment inducing UGT1A1 in rats, not as a drug whose PK/PD is altered by a gene variant or genotype. |
| popPK | Takeuchi_2006 | irrelevant | 1 | 1 | Testosterone propionate is used only as a treatment agent; the kinetic parameters (serum BPA concentrations, glucuronidation ratios, clearance) all pertain to bisphenol A, not TP, and values live in tables/figures not numerically provided. |
| popPK | Tanaka_1995 | irrelevant | 0 | 0 | Testosterone propionate appears only as a treatment agent in a renal-function outcome study with no toxicokinetic parameters. |
| popPK | Taylor_1987 | irrelevant | 0 | 0 | Testosterone propionate is used only as a behavioral/restorative treatment; no kinetic parameters are reported. |
| popPK | Tusubira_2023 | irrelevant | 0 | 0 | TP is used only as an inducer of BPH in rats; no kinetic parameters (half-life, clearance, etc.) for testosterone propionate are reported. |
| popPK | Verma_2026 | irrelevant | 0 | 0 | Testosterone propionate is a treatment/exposure intervention in a fibrosis mechanistic study, with no kinetic parameters (half-life, clearance, etc.) reported. |
| popPK | Wagner_2018 | irrelevant | 0 | 0 | Behavioral dose-response study in rats with no kinetic parameters (no half-life, clearance, concentrations or model); only administered doses are given. |
| popPK | Wang_1996 | irrelevant | 0 | 0 | Testosterone propionate is used as a replacement treatment affecting EPO; no kinetic parameters (half-life, clearance, etc.) of testosterone propionate itself are reported. |
| popPK | Wise_1996 | irrelevant | 3 | 1 | Testosterone propionate is administered as a steroidal feedback treatment and testosterone decline rates are described qualitatively, but no numeric kinetic parameters (half-life, clearance, rate constants) appear in the evidence; quantitative values would live in tables/figures not provided. |
| popPK | Witkamp_1993 | irrelevant | 0 | 0 | Testosterone propionate appears only as a hormonal treatment; the kinetic parameters reported are for sulphadimidine, a different substance, so no testosterone propionate toxicokinetics are measured or extractable. |
| popPK | Wolf_2002 | irrelevant | 2 | 2 | A developmental toxicity dose-response study in rats; only measured testosterone levels (fold-changes, not kinetic parameters like half-life, clearance, or rate constants) are reported. |
| popPK | Yadav_2023 | irrelevant | 0 | 0 | Testosterone propionate is used only as a dosing agent to alter PFOA kinetics; the kinetic parameters reported (PFOA excretion, tissue distribution) belong to PFOA, not testosterone propionate. |
| popPK | Yamada_2004 | irrelevant | 1 | 1 | Testosterone propionate is used only as a standard dosing agent in a Hershberger screening assay; no kinetic parameters (half-life, clearance, AUC, etc.) for TP are reported. |
| popPK | Yamasaki_2003 | irrelevant | 1 | 1 | Testosterone propionate (TP) is only used as a co-administered androgen support in a Hershberger assay dose–response study of MT, VCZ and p,p′-DDE in castrated rats; no kinetic parameters (half-life, clearance, rate constants, etc.) for TP itself are reported, only organ-weight dose–response data. |
| popPK | Yin_2003 | irrelevant | 0 | 0 | Testosterone propionate appears only as a comparator/co-treatment in the pharmacology study; kinetic parameters (clearance, etc.) belong to acetothiolutamide, not to testosterone propionate. |
| popPK | Yu_1989 | irrelevant | 0 | 0 | This is a neuroprotection/efficacy study with dosing regimens but no kinetic parameters (no half-life, clearance, or kinetics) for testosterone propionate. |
| popPK | Zou_2023 | irrelevant | 0 | 0 | A systematic review of eye-based measures, exercise, and cognition; no testosterone propionate or kinetic parameters of any kind. |
| popPK | de_1986 | irrelevant | 0 | 0 | Behavioral dose-response pharmacodynamics in rats, no toxicokinetic parameters (half-life, clearance, etc.) reported. |
| popPK | de_2025 | irrelevant | 0 | 0 | The paper is a systematic review protocol on aerobic exercise for depression and contains no toxicokinetic parameters or mention of testosterone propionate. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btestosterone_propionate%5D&body=Drug%3A%20testosterone_propionate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_testosterone_propionate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>

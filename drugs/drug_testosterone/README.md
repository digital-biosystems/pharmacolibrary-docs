<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03B&quot;,&quot;href&quot;:&quot;atc/G03B.md&quot;},{&quot;label&quot;:&quot;testosterone&quot;}]"></div>

# testosterone

- **generic name:** testosterone
- **ATC codes:** `G03BA03`, `G03EA02`
- **DrugBank:** [DB00624](https://go.drugbank.com/drugs/DB00624) · **PubChem:** [CID 6013](https://pubchem.ncbi.nlm.nih.gov/compound/6013)
- **molar mass:** 288.4244 g/mol (C19H28O2) — DrugBank
- **groups:** approved, investigational

## About

Testosterone is an androgen, the primary male sex hormone, used to treat conditions such as hypogonadism and Klinefelter's syndrome. It is an approved medicine, though some products have been withdrawn in the European Union, and it also has investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1318776](https://www.wikidata.org/wiki/Q1318776) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| testosterone | parent | 288.424 | C19H28O2 | DrugBank | [6013](https://pubchem.ncbi.nlm.nih.gov/compound/6013) | Bi_2018, Pastuszak_2021 |
| testosterone undecanoate | metabolite | 456.711 | C30H48O3 | PubChem | [65157](https://pubchem.ncbi.nlm.nih.gov/compound/65157) | Pastuszak_2021 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | — | L/h | 2.6 kL/day | healthy male subjects | n_subjects | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Bi_2018_bootstrapa](drugs/drug_testosterone/Testosterone_Bi2018_bootstrapa.md) |
| V | V/F | — | L | 14.4 kL | healthy male subjects | n_subjects | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Bi_2018_bootstrapa](drugs/drug_testosterone/Testosterone_Bi2018_bootstrapa.md) |
| ka | kabs | 16.67 | 1/h | 16.67 h−1 | healthy male subjects | n_subjects | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Bi_2018_bootstrapa](drugs/drug_testosterone/Testosterone_Bi2018_bootstrapa.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27, Q76 — no SI value to build from</sub> | [Bi_2018_bootstrapa](drugs/drug_testosterone/Testosterone_Bi2018_bootstrapa.md) | — | 1-compartment (no model) | 3 | Bi Y et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12287](https://doi.org/10.1002/psp4.12287) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub> | [↳ final_model](drugs/drug_testosterone/Testosterone_Bi2018_final_model.md) | — | 2-compartment (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Pastuszak_2021_reference](drugs/drug_testosterone/Testosterone_Pastuszak2021_reference.md) | — | 1-compartment (no model) | 4 (+3 cov.) | Pastuszak AW et al., Population Pharmacokinetic Modeling and…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1939](https://doi.org/10.1002/jcph.1939) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Vogiatzi_2023_reference](drugs/drug_testosterone/Testosterone_Vogiatzi2023_reference.md) | — | 1-compartment (no model) | 0 | Vogiatzi MG et al., Allometric Scaling of Testosterone Enan…, Journal of the Endocrine So… (2023) | [10.1210/jendso/bvad059](https://doi.org/10.1210/jendso/bvad059) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Bi_2018_LH30](drugs/drug_testosterone/pd_Bi_2018_LH30.md) | LH concentration at 30 minutes after the stimulation test ← total testosterone · indirect response — drug inhibits the production of LH concentration at 30 minutes after the stimulation test | — | Bi Y et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12287](https://doi.org/10.1002/psp4.12287) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Bi_2018_sperm_count](drugs/drug_testosterone/pd_Bi_2018_sperm_count.md) | sperm count ← total testosterone average concentration in past 18 weeks · indirect response — drug inhibits the production of sperm count | — | Bi Y et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12287](https://doi.org/10.1002/psp4.12287) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=testosterone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` substrate | DrugBank actor |
| distribution | testis | `ABCG2` substrate | DrugBank actor |
| metabolism | brain | `MAOA` inducer | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate, `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP3A4` inducer/substrate, `CYP3A5` substrate, `CYP3A7` substrate, `MAOA` inducer, `SLC10A1` inhibitor, `SLC22A7` inhibitor, `SLCO1B3` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate, `CYP1B1` substrate | DrugBank actor |
| metabolism | skin | `CYP1B1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` inducer/substrate, `CYP3A5` substrate, `MAOA` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A8` inducer | DrugBank actor |
| excretion | liver | `ABCG2` substrate | DrugBank actor |
| — | adipose tissue | `CYP19A1` substrate | DrugBank actor |
| — | ovary | `CYP19A1` substrate | DrugBank actor |
| — | prostate gland | `AR` target | DrugBank actor |
| — | testis | `CYP19A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CYP11A1 (inhibitor), CYP2A13 (substrate), CYP3A43 (substrate), ESR1 (inhibitor), NR3C2 (target), SHBG (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:32 | 3:58 | 1/3/0 | 0/1/0 | 0/0/0 | 219,027/20,627 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 322 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Davison_2005.pdf` | Davison S et al., Pharmacokinetics and acute safety of in…, Journal of clinical pharmac… (2005) | popPK | 9 | [10.1177/0091270004269840](https://doi.org/10.1177/0091270004269840) | [15647410](https://pubmed.ncbi.nlm.nih.gov/15647410) | The study reports a 2-compartment model and peak plasma concentrations, but specific parameter values (CL, V, ka) are not explicitly listed in the provided text, suggesting they may be in omitted tables or figures. |
| `Turner_2019.pdf` | Turner L et al., Pharmacokinetics and Acceptability of S…, Journal of the Endocrine So… (2019) | popPK | 9 | [10.1210/js.2019-00134](https://doi.org/10.1210/js.2019-00134) | [31384715](https://pubmed.ncbi.nlm.nih.gov/31384715) | The paper reports population PK parameters for testosterone (Tmax, Cmax, MRT) but lacks primary disposition parameters like CL and V values. |
| `Tornøe_2007.pdf` | Tornøe CW et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2007) | popPK | 7 | [10.1111/j.1365-2125.2006.02820.x](https://doi.org/10.1111/j.1365-2125.2006.02820.x) | [17096678](https://pubmed.ncbi.nlm.nih.gov/17096678) | The study is a population PK/PD model for testosterone in the context of GnRH analogues, reporting the half-life (7.69 h) and potency parameters for testosterone secretion, though full disposition parameters like clearance and volume are not explicitly listed in the abstract. |

<sub>queue written 2026-10-07 08:29 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albin_2013 | irrelevant | 1 | 1 | The paper reports serum concentration levels (EC50 for growth velocity) rather than pharmacokinetic parameters like clearance or volume. |
| popPK | Brand_2014 | irrelevant | 0 | 0 | The paper is an observational meta-analysis investigating the association between testosterone levels and metabolic syndrome, and does not report pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Davison_2005 | relevant | 9 | 2 | The study reports a 2-compartment model and peak plasma concentrations, but specific parameter values (CL, V, ka) are not explicitly listed in the provided text, suggesting they may be in omitted tables or figures. |
| popPK | Espeland_2022 | irrelevant | 0 | 0 | The study examines the association between endogenous testosterone levels and cognitive function in a population with T2DM, rather than reporting pharmacokinetic disposition parameters (CL, V, etc.) for administered testosterone. |
| popPK | Harman_2001 | irrelevant | 0 | 0 | This is an epidemiological/longitudinal study measuring steady-state serum levels of testosterone in response to age, not a pharmacokinetic study quantifying disposition parameters (CL, V, ka) or population PK models. |
| popPK | Lee_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for leuprolide (the subject drug), while testosterone is only measured as a pharmacodynamic biomarker/endogenous hormone in response to leuprolide treatment, not as a dosed subject drug. |
| popPK | Lee_2023 | irrelevant | 2 | 2 | The primary subject drug is relugolix, for which full PK parameters are reported; testosterone is the measured pharmacodynamic endpoint (suppression), not the subject drug of a PK study, and its specific disposition parameters (clearance/volume) are derived via a semimechanistic PD model rather than direct PK fitting. |
| popPK | Lucas-Herald_2024 | irrelevant | 0 | 0 | The study is an in-vitro vascular reactivity experiment examining the functional effects of testosterone on isolated arteries, not a pharmacokinetic study measuring disposition parameters (CL, Vd, etc.). |
| popPK | Olsson_1999 | irrelevant | 2 | 0 | The paper focuses on the pharmacodynamics of 5-alpha-reductase inhibitors and the metabolite DHT, without reporting quantitative PK parameters (CL, V, ka) for testosterone itself in the provided evidence. |
| popPK | Paris_2015 | irrelevant | 0 | 0 | The study investigates the molecular receptor binding properties (EC50/IC50) of norgestimate in cell lines, not the pharmacokinetic disposition of testosterone. |
| popPK | Pechstein_2000 | irrelevant | 2 | 0 | The study focuses on the PK of cetrorelix and the PD (suppression) of testosterone, rather than the quantitative PK parameters (CL, V, etc.) of testosterone itself. |
| popPK | Smarr_2017 | irrelevant | 0 | 0 | The study examines the association between urinary paracetamol levels and semen quality parameters; it does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for testosterone. |
| popPK | Snaterse_2023 | irrelevant | 0 | 0 | The study reports in vitro receptor binding affinities (EC50) for androgen receptor mutants, not pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Turner_2019 | relevant | 9 | 4 | The paper reports population PK parameters for testosterone (Tmax, Cmax, MRT) but lacks primary disposition parameters like CL and V values. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btestosterone%5D&body=Drug%3A%20testosterone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_testosterone/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 08:30 UTC</sub>

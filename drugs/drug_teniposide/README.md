<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;teniposide&quot;}]"></div>

# teniposide

- **generic name:** teniposide
- **ATC codes:** `L01CB02`
- **DrugBank:** [DB00444](https://go.drugbank.com/drugs/DB00444) · **PubChem:** [CID 452548](https://pubchem.ncbi.nlm.nih.gov/compound/452548)
- **molar mass:** 656.654 g/mol (C32H32O13S) — DrugBank
- **groups:** approved, investigational

## About

Teniposide is an anticancer drug used to treat acute lymphocytic leukemia and other lymphoblastic leukemias, as well as small cell lung cancer. It is an approved antineoplastic agent, a podophyllotoxin derivative that acts as a topoisomerase II inhibitor, but it is not authorised in the European Union and is used only in limited settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417555](https://www.wikidata.org/wiki/Q417555) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| teniposide | parent | 656.654 | C32H32O13S | DrugBank | [452548](https://pubchem.ncbi.nlm.nih.gov/compound/452548) | Cheng_1999 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 3.92 | L/h | 3.92 L/h | patients with ovarian cancer receiving intraperitoneal chemotherapy | 12 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Cheng_1999_reference](drugs/drug_teniposide/Teniposide_Cheng1999_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub> | [Cheng_1999_reference](drugs/drug_teniposide/Teniposide_Cheng1999_reference.md) | — | 1-compartment (no model) | 4 | Cheng A et al., [A pharmacokinetic study of teniposide…, Hua xi yi ke da xue xue bao… (1999) | — |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Holthuis_1987_reference](drugs/drug_teniposide/Teniposide_Holthuis1987_reference.md) | — | 1-compartment (no model) | 0 | Holthuis JJ et al., Pharmacokinetics of high-dose teniposide, Cancer treatment reports (1987) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Evans_1992_WBC_decrease](drugs/drug_teniposide/pd_Evans_1992_WBC_decrease.md) | percentage decrease in white blood cell count ← unbound teniposide · direct linear effect | — | Evans WE et al., Differences in teniposide disposition a…, The Journal of pharmacology… (1992) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=teniposide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` substrate | DrugBank actor |
| distribution | testis | `ABCG2` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C9` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | `ABCG2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC6 (substrate), TOP2A (inhibitor), TOP2B (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 13:38 | 13:22 | 1/1/0 | 0/1/0 | 0/0/0 | 123,106/19,173 | openai / gpt-6-luna | 10 | 1/7 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 128 matched, 105 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baker_1992.pdf` | Baker DK et al., Increased teniposide clearance with con…, Journal of clinical oncolog… (1992) | popPK | 10 | [10.1200/JCO.1992.10.2.311](https://doi.org/10.1200/JCO.1992.10.2.311) | [1732431](https://pubmed.ncbi.nlm.nih.gov/1732431) | Pediatric patients had numeric teniposide clearance values and a two-compartment model was fitted. |
| `Cheng_1999.pdf` | Cheng A et al., [A pharmacokinetic study of teniposide…, Hua xi yi ke da xue xue bao… (1999) | popPK | 10 |  | [12205938](https://pubmed.ncbi.nlm.nih.gov/12205938) | Human teniposide PK is modeled with reported numeric half-lives and exposure ratios. |
| `Evans_1982.pdf` | Evans WE et al., Pharmacokinetics of Teniposide (VM26) a…, Cancer chemotherapy and pha… (1982) | popPK | 10 | [10.1007/BF00254537](https://doi.org/10.1007/BF00254537) | [7083455](https://pubmed.ncbi.nlm.nih.gov/7083455) | Teniposide clearance is quantitatively reported for children with cancer. |
| `Holthuis_1987.pdf` | Holthuis JJ et al., Pharmacokinetics of high-dose teniposide, Cancer treatment reports (1987) | popPK | 10 |  | [3581097](https://pubmed.ncbi.nlm.nih.gov/3581097) | Human teniposide pharmacokinetics are quantified, including steady-state volume and total-body clearance. |
| `Canal_1989.pdf` | Canal P et al., A pharmacokinetic model for intraperito…, Journal of pharmaceutical s… (1989) | popPK | 9 | [10.1002/jps.2600780509](https://doi.org/10.1002/jps.2600780509) | [2746477](https://pubmed.ncbi.nlm.nih.gov/2746477) | A three-compartment teniposide model is reported, but no numeric parameter values are provided in the evidence. |
| `Blanco_2000.pdf` | Blanco JG et al., Human cytochrome P450 maximal activitie…, Drug metabolism and disposi… (2000) | pgx | 7 |  | [10725303](https://www.ncbi.nlm.nih.gov/pubmed/10725303) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Relling_1990.pdf` | Relling MV et al., Tolbutamide and mephenytoin hydroxylati…, The Journal of pharmacology… (1990) | pgx | 5 |  | [2299601](https://www.ncbi.nlm.nih.gov/pubmed/2299601) | metadata signals extractable PGX data (CYP2C) |

<sub>queue written 2026-10-06 13:33 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bao_2025 | not_relevant | 0 | 0 | Teniposide is only identified as a potential therapeutic drug; the paper does not report a gene variant, genotype, or phenotype effect on a teniposide PK or PD parameter. |
| PGx | Baumhäkel_2001 | not_relevant | 0 | 0 | The study reports teniposide inhibition of CYP3A4 in liver microsomes, not an effect of a gene variant, genotype, or phenotype on a teniposide PK or PD parameter. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | This is an in vitro drug-synergy study and reports no teniposide pharmacokinetic disposition parameters. |
| PGx | Blanco_2000 | not_relevant | 0 | 0 | Reports age-group comparisons of teniposide oxidation, not an effect of a gene variant, genotype, or phenotype. |
| popPK | Canal_1989 | relevant | 9 | 0 | A three-compartment teniposide model is reported, but no numeric parameter values are provided in the evidence. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | This is a COVID-19 data-harmonisation and drug-target study, with no teniposide pharmacokinetic parameters reported. |
| PGx | De_1990 | not_relevant | 1 | 8 | The paper reports reduced teniposide-stimulated topoisomerase II activity in a multidrug-resistant cell-line subline, not an effect of a gene variant, genotype, or pharmacogenomic phenotype on a PK/PD parameter. |
| PD | Estlin_2001 | not_relevant | 1 | 0 | The text is a review or introduction that qualitatively mentions the importance of pharmacokinetics for teniposide but does not report any specific exposure-response data, dose-response curves, or numeric PD parameters. |
| popPK | Freyer_1995 | irrelevant | 1 | 0 | This review mentions teniposide population-PK models but provides no quantitative parameter values. |
| popPK | Freyer_2000 | irrelevant | 0 | 0 | The study reports population-PK values for doxorubicin, etoposide, and ifosfamide, not teniposide. |
| popPK | Gáborová_2024 | irrelevant | 0 | 0 | This is an in vitro diterpene study with no teniposide pharmacokinetic parameters. |
| PD | Hansen_1992 | not_relevant | 1 | 0 | The text is a clinical review summarizing response rates and clinical factors influencing efficacy, but it does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50). |
| PD | He_2012 | not_relevant | 0 | 0 | The paper focuses on formulation development and pharmacokinetics (PK) of a new delivery system, reporting no pharmacodynamic (PD) or exposure-response data. |
| popPK | Jouinot_2018 | irrelevant | 0 | 0 | The study measures etoposide in patients; teniposide is only mentioned as a comparison, with no numeric teniposide parameter values. |
| PGx | Karadeniz_2015 | not_relevant | 0 | 0 | The paper evaluates medicinal-plant cytotoxicity in drug-resistant cell lines and reports no genetic effect on a teniposide PK or PD parameter. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | This zebrafish neuroprotection screen reports no teniposide pharmacokinetic disposition parameters. |
| popPK | Kuenzi_2020 | irrelevant | 0 | 0 | This is an in-vitro drug-response study and reports no teniposide pharmacokinetic parameters. |
| popPK | Lennard_2001 | irrelevant | 0 | 0 | This review provides no quantitative teniposide pharmacokinetic parameters. |
| PGx | Luo_2023 | not_relevant | 0 | 0 | The text identifies teniposide as a potential drug but reports no genotype- or phenotype-associated change in a teniposide PK or PD parameter. |
| PGx | Masson_1997 | not_relevant | 0 | 0 | The paper mentions teniposide in the context of pharmacokinetic individualization but reports no gene-related effect on its PK or PD parameters. |
| PD | McLeod_1993 | not_relevant | 1 | 0 | The text is a qualitative review discussing the concept of PK/PD relationships for epipodophyllotoxins but does not present any specific numeric PD parameters, curves, or data for teniposide. |
| PGx | Pang_2001 | not_relevant | 0 | 0 | The paper describes an assay for etoposide and its metabolite; teniposide is used only as an internal standard, with no pharmacogenomic effect on its PK or PD reported. |
| PGx | Relling_1990 | not_relevant | 0 | 0 | Teniposide is mentioned only as an in vitro inhibitor; no genetic effect on its PK or PD parameters is reported. |
| PGx | Relling_1994 | not_relevant | 0 | 0 | Identifies CYP3A4-mediated teniposide metabolism but does not report a genetic variant, genotype, or phenotype effect on a PK/PD parameter. |
| PGx | Relling_1999 | not_relevant | 0 | 0 | The TPMT genotype effects reported are for mercaptopurine; teniposide is only mentioned as part of treatment, with no teniposide PK or PD parameter analyzed. |
| PD | Rodman_1993 | not_relevant | 2 | 1 | The study focuses on PK variability and dose escalation to maximize exposure without toxicity, but does not report a quantitative concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Rousseau_2000 | irrelevant | 1 | 0 | This is a review that mentions teniposide but provides no numeric teniposide disposition parameters. |
| popPK | Rousseau_2002 | irrelevant | 1 | 0 | This is a review and provides no numeric teniposide pharmacokinetic parameter values. |
| PGx | Saeed_2014 | not_relevant | 0 | 0 | Teniposide is mentioned only as background; the study evaluates honokiol sensitivity and reports no gene-related PK/PD effect for teniposide. |
| popPK | Saha_2022 | irrelevant | 0 | 0 | This is a review of electron crystallography, with no teniposide pharmacokinetic parameters reported. |
| popPK | Sarkar_2023 | irrelevant | 0 | 0 | This is a review and provides no quantitative teniposide disposition parameters. |
| PD | Shah_2018 | not_relevant | 0 | 0 | The paper is a review of breast cancer brain metastases treatments and does not mention teniposide or report any pharmacodynamic or exposure-response data. |
| PD | Sinkule_1984 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (clearance, volume of distribution) and covariate analysis, with no pharmacodynamic or exposure-response data. |
| PD | Solal-Celigny_1993 | not_relevant | 0 | 0 | The provided text contains only metadata and software version information, with no scientific content regarding teniposide or pharmacodynamics. |
| popPK | Sureja_2022 | irrelevant | 0 | 0 | This is an in-silico antiviral study and reports no teniposide pharmacokinetic parameters. |
| PGx | Vasilev_2006 | not_relevant | 0 | 0 | The paper describes in vitro CYP3A4 metabolism of teniposide but reports no genetic variation or genotype/phenotype effect on a PK or PD parameter. |
| popPK | Verheul_2021 | irrelevant | 0 | 0 | Teniposide is tested for glioma-cell sensitivity, with no quantitative disposition parameters reported. |
| PGx | Wang_2005 | not_relevant | 0 | 10 | CYP3A5 transfection did not change teniposide sensitivity (resistance multiple 1.04); no pharmacogenomic effect on a teniposide PK/PD parameter is reported. |
| PD | Zhang_2013 | not_relevant | 0 | 0 | The paper reports pharmacokinetic improvements (AUC, tumor concentration) and cellular uptake mechanisms but does not provide any pharmacodynamic data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Zhou-Pan_1993 | not_relevant | 0 | 0 | The paper studies vinblastine metabolism and mentions teniposide only as an inhibitor; it reports no pharmacogenomic effect on a teniposide PK or PD parameter. |
| PGx | van_2008 | not_relevant | 0 | 0 | The text only lists teniposide as a topic of the review and reports no genotype-associated PK or PD effect. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bteniposide%5D&body=Drug%3A%20teniposide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_teniposide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 13:33 UTC</sub>

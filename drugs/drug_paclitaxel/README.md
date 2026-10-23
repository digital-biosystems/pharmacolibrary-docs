<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;paclitaxel&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paclitaxel_De2026_reference&quot;,&quot;label&quot;:&quot;De_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paclitaxel/Paclitaxel_De2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# paclitaxel

- **generic name:** paclitaxel
- **ATC codes:** `L01CD01`, `L01CD51`
- **DrugBank:** [DB01229](https://go.drugbank.com/drugs/DB01229) · **PubChem:** [CID 36314](https://pubchem.ncbi.nlm.nih.gov/compound/36314)
- **molar mass:** 853.9061 g/mol (C47H51NO14) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Paclitaxel is a taxane chemotherapy drug used to treat several cancers, including breast, ovarian, lung, and pancreatic cancer, melanoma, and Kaposi's sarcoma. It is widely used worldwide, is included on the WHO essential medicines list, and several paclitaxel products are authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423762](https://www.wikidata.org/wiki/Q423762) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| paclitaxel | parent | 853.906 | C47H51NO14 | DrugBank | [36314](https://pubchem.ncbi.nlm.nih.gov/compound/36314) | Ait-Oudhia_2012, Cheng_2021, De_2026, He_2022 |

## Start here

> **De_2026_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> patients with peritoneal metastasis, n = _subjects": 20,. [Run it in the simulator](drugs/drug_paclitaxel/Paclitaxel_De2026_reference.md?tab=Simulation) · [record](drugs/drug_paclitaxel/Paclitaxel_De2026_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 33.7 | L/h | 33.7 L/h | adults with advanced/metastatic solid tumors | No | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [He_2022_reference](drugs/drug_paclitaxel/Paclitaxel_He2022_reference.md) |
| CL | CL/F | 87.3 | L/h | 87.3 L/h | patients with peritoneal metastasis | _subjects": 20, | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [De_2026_reference](drugs/drug_paclitaxel/Paclitaxel_De2026_reference.md) |
| V | V | 2299 | L | 2299 L | patients with peritoneal metastasis | _subjects": 20, | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [De_2026_reference](drugs/drug_paclitaxel/Paclitaxel_De2026_reference.md) |
| ka | kabs | 0.724 | 1/h | 0.724 1/h | adults with advanced/metastatic solid tumors | No | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [He_2022_reference](drugs/drug_paclitaxel/Paclitaxel_He2022_reference.md) |
| F | Fab | 0.119 |  | 0.119 | adults with advanced/metastatic solid tumors | No | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [He_2022_reference](drugs/drug_paclitaxel/Paclitaxel_He2022_reference.md) |
| F | Fab | 0.37 |  | 37.0 % | patients with peritoneal metastasis | _subjects": 20, | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [De_2026_reference](drugs/drug_paclitaxel/Paclitaxel_De2026_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">He_2022 · CL</text><circle cx="374.7" cy="30.0" r="4" fill="#78909c"><title>He_2022 · CL: 33.7 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">De_2026 · CL/F</text><circle cx="519.4" cy="46.0" r="4" fill="#ef6c00"><title>De_2026 · CL/F: 87.3 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [He_2022_reference](drugs/drug_paclitaxel/Paclitaxel_He2022_reference.md) | held back | 1-compartment, oral | 6 (+1 cov.) | He J et al., Population pharmacokinetics for oral pa…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12799](https://doi.org/10.1002/psp4.12799) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [De_2026_reference](drugs/drug_paclitaxel/Paclitaxel_De2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | De Sutter PJ et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2026) | [10.1002/bcp.70529](https://doi.org/10.1002/bcp.70529) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Ait-Oudhia_2012_reference](drugs/drug_paclitaxel/Paclitaxel_AitOudhia2012_reference.md) | — | 1-compartment (no model) | 1 | Ait-Oudhia S et al., Meta-analysis of nanoparticulate paclit…, Pharmaceutical research (2012) | [10.1007/s11095-012-0775-8](https://doi.org/10.1007/s11095-012-0775-8) |
| <span class="pk-rf" hidden data-species="unknown" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Chen_2014_reference](drugs/drug_paclitaxel/Paclitaxel_Chen2014_reference.md) | — | 1-compartment (no model) | 0 | Chen (2014) | — |
| <span class="pk-rf" hidden data-species="mouse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Cheng_2021_reference](drugs/drug_paclitaxel/Paclitaxel_Cheng2021_reference.md) | — | 1-compartment (no model) | 0 | Cheng S et al., Pharmacokinetic-Pharmacodynamic Modelin…, Pharmaceutics (2021) | [10.3390/pharmaceutics13010092](https://doi.org/10.3390/pharmaceutics13010092) |
| <span class="pk-rf" hidden data-species="unknown" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Friberg_2002_reference](drugs/drug_paclitaxel/Paclitaxel_Friberg2002_reference.md) | — | parent + metabolite (no model) | 2 | Friberg LE et al., Model of chemotherapy-induced myelosupp…, Journal of clinical oncolog… (2002) | [10.1200/JCO.2002.02.140](https://doi.org/10.1200/JCO.2002.02.140) |
| <span class="pk-rf" hidden data-species="unknown" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Li_2021_reference](drugs/drug_paclitaxel/Paclitaxel_Li2021_reference.md) | — | 1-compartment (no model) | 0 | Li (2021) | — |
| <span class="pk-rf" hidden data-species="unknown" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Tsushima_2020_reference](drugs/drug_paclitaxel/Paclitaxel_Tsushima2020_reference.md) | — | 1-compartment (no model) | 7 | Tsushima (2020) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Danesi_1999_decrease_in_neutrophil_count](drugs/drug_paclitaxel/pd_Danesi_1999_decrease_in_neutrophil_count.md) | decrease in neutrophil count ← paclitaxel · direct Emax (saturable) effect | — | Danesi R et al., Pharmacokinetic optimisation of treatme…, Clinical pharmacokinetics (1999) | [10.2165/00003088-199937030-00002](https://doi.org/10.2165/00003088-199937030-00002) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Kearns_1995_neutropenia](drugs/drug_paclitaxel/pd_Kearns_1995_neutropenia.md) | neutropenia ← paclitaxel · direct sigmoid Emax (Hill) effect | — | Kearns CM et al., Paclitaxel pharmacokinetics and pharmac…, Seminars in oncology (1995) | — |
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Sun_2025_CIPN8](drugs/drug_paclitaxel/pd_Sun_2025_CIPN8.md) | CIPN8 ← paclitaxel · delayed effect through an effect compartment | model (no simulator) | Sun Y et al., Pharmacokinetic-Pharmacodynamic Model o…, Clinical and translational… (2025) | [10.1111/cts.70404](https://doi.org/10.1111/cts.70404) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Castor_2005_Tumor_size](drugs/drug_paclitaxel/pd_Castor_2005_Tumor_size.md) | Tumor growth biomarker turnover ← paclitaxel | — | Castor TP, Phospholipid nanosomes, Current drug delivery (2005) | [10.2174/156720105774370195](https://doi.org/10.2174/156720105774370195) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=paclitaxel).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCC2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` inducer/substrate, `CYP3A5` substrate, `CYP3A7` substrate, `SLCO1B3` substrate | DrugBank actor |
| metabolism | lung | `CYP1B1` inhibitor | DrugBank actor |
| metabolism | skin | `CYP1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate, `ABCC2` substrate | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate, `ABCB11` inhibitor/substrate, `ABCC2` substrate | DrugBank actor |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC10 (inhibitor), ABCC10 (substrate), BCL2 (inhibitor), NR1I2 (inducer), TUBB1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:24 | 3:47 | 2/6/0 | 4/0/0 | 0/0/0 | 352,184/17,100 | einfracz / qwen3.8-27b | 20 | 4/5 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 257 matched, 20 returned
- **screened:** 18  ·  **relevant:** 4
- **records:** 8  ·  extracted 1  ·  needs_review 1  ·  rejected 6  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ait-Oudhia_2012.pdf` | Ait-Oudhia S et al., Meta-analysis of nanoparticulate paclit…, Pharmaceutical research (2012) | popPK | 10 | [10.1007/s11095-012-0775-8](https://doi.org/10.1007/s11095-012-0775-8) | [22588463](https://pubmed.ncbi.nlm.nih.gov/22588463) | The paper reports a population-PK model for paclitaxel formulations and provides specific numeric values for drug-release rate constants in the abstract, though core disposition parameters (CL, V) are likely in the body or figures not fully detailed in the snippet. |
| `De_2026.pdf` | De Sutter PJ et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2026) | popPK | 10 | [10.1002/bcp.70529](https://doi.org/10.1002/bcp.70529) | [41841238](https://pubmed.ncbi.nlm.nih.gov/41841238) | The study reports quantitative population PK parameters (CL, V, Tlag) for paclitaxel in humans, with values explicitly listed in the abstract results. |
| `Henningsson_2001.pdf` | Henningsson A et al., Mechanism-based pharmacokinetic model f…, Journal of clinical oncolog… (2001) | popPK | 10 | [10.1200/JCO.2001.19.20.4065](https://doi.org/10.1200/JCO.2001.19.20.4065) | [11600609](https://pubmed.ncbi.nlm.nih.gov/11600609) | The paper describes a population pharmacokinetic model for paclitaxel in humans, but the specific numeric parameter values (CL, V, Q) are not present in the provided evidence text. |

<sub>queue written 2026-10-07T18:21:35.677596+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Castor_2005 | irrelevant | 1 | 0 | The paper is a formulation and efficacy study for phospholipid nanosomes, reporting toxicity and efficacy data (EC50) rather than quantitative pharmacokinetic parameters (CL, V, etc.) for paclitaxel. |
| popPK | Clarke_1999 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of docetaxel, not paclitaxel. |
| popPK | Danesi_1999 | irrelevant | 3 | 2 | The paper describes pharmacokinetic interactions with anthracyclines and reports specific numerical values for epirubicinol (an anthracycline metabolite) AUC, but does not provide the specific quantitative disposition parameters (CL, V, t1/2, ka) for paclitaxel itself in the text. |
| popPK | Delahousse_2024 | irrelevant | 2 | 0 | The paper is a systematic review that categorizes paclitaxel as having significant sex differences but does not provide the specific numeric PK parameter values (e.g., CL in L/h) for paclitaxel in the provided text. |
| popPK | Eljack_2022 | irrelevant | 0 | 0 | The paper is a review on nanoparticle design for drug delivery and chemoresistance reversal, containing no original pharmacokinetic parameter values (CL, V, ka) for paclitaxel. |
| popPK | Friberg_2002_2 | irrelevant | 1 | 0 | This is a pharmacodynamic model of chemotherapy-induced myelosuppression, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for paclitaxel. |
| popPK | Henningsson_2001 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for paclitaxel in humans, but the specific numeric parameter values (CL, V, Q) are not present in the provided evidence text. |
| popPK | Kearns_1995 | irrelevant | 2 | 0 | The paper is a narrative review summarizing paclitaxel PK characteristics without presenting original quantitative parameter values or specific model coefficients. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic interaction between paclitaxel and isoflurane (anesthetic sensitivity) in mice, but does not report quantitative pharmacokinetic parameters (e.g., clearance, volume of distribution) for paclitaxel. |
| popPK | Niu_2020 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic mechanistic modeling paper of drug synergy, not a pharmacokinetic study, and reports no PK parameters (CL, V, ka) for paclitaxel. |
| popPK | Stodtmann_2021 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of veliparib, with paclitaxel only mentioned as a co-administered chemotherapy agent, and no PK parameters for paclitaxel are provided. |
| popPK | Sun_2025 | relevant | 9 | 0 | The paper describes a population PK model for paclitaxel and references Table 2 for parameter values, but the actual numeric values for CL, V, and Q are not included in the provided evidence. |
| popPK | Wai_2018 | irrelevant | 0 | 0 | The paper describes the synthesis of a new steroid compound and reports that it is phenotypically similar to paclitaxel, but it contains no pharmacokinetic data for paclitaxel itself. |
| popPK | Zuo_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for the drug apatinib, using paclitaxel only as a co-administered covariate for interaction assessment, not as the subject drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 18:21 UTC</sub>

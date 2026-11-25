<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;acalabrutinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Acalabrutinib_Hefnawy2022_reference&quot;,&quot;label&quot;:&quot;Hefnawy_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acalabrutinib/Acalabrutinib_Hefnawy2022_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Acalabrutinib_Kemal2026_reference&quot;,&quot;label&quot;:&quot;Kemal_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acalabrutinib/Acalabrutinib_Kemal2026_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# acalabrutinib

- **generic name:** acalabrutinib
- **ATC codes:** `L01EL02`
- **DrugBank:** [DB11703](https://go.drugbank.com/drugs/DB11703) · **PubChem:** [CID 71226662](https://pubchem.ncbi.nlm.nih.gov/compound/71226662)
- **molar mass:** 465.517 g/mol (C26H23N7O2) — DrugBank
- **groups:** approved, investigational

## About

Acalabrutinib is a Bruton's tyrosine kinase inhibitor used to treat mantle cell lymphoma and chronic lymphocytic leukemia. It is given orally as tablets or capsules. It is authorised in the United States and the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q23668732](https://www.wikidata.org/wiki/Q23668732), [Wikipedia](https://en.wikipedia.org/wiki/Acalabrutinib?oldid=1360495418) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| acalabrutinib | parent | 465.517 | C26H23N7O2 | DrugBank | [71226662](https://pubchem.ncbi.nlm.nih.gov/compound/71226662) | Edlund_2019, Edlund_2022, Wang_2026 |
| ACP-5862 | metabolite | 481.516 | C26H23N7O3 | PubChem | [135177281](https://pubchem.ncbi.nlm.nih.gov/compound/135177281) | Edlund_2019, Edlund_2022, Wang_2026 |

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">100</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">1000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Edlund_2022 · CL/F</text><circle cx="234.5" cy="30.0" r="4" fill="#ef6c00"><title>Edlund_2022 · CL/F: 134 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Wang_2026 · CL/F ·/kg</text><circle cx="508.1" cy="46.0" r="4" fill="#ef6c00"><title>Wang_2026 · CL/F ·/kg: 810.6 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub> | [Edlund_2019_reference](drugs/drug_acalabrutinib/Acalabrutinib_Edlund2019_reference.md) | held back | 1-compartment, IV | 5 | Edlund H et al., Population Pharmacokinetics of the BTK…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0725-7](https://doi.org/10.1007/s40262-018-0725-7) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q81 — no SI value to build from</sub> | [Edlund_2022_reference](drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference.md) | — | parent + metabolite (no model) | 11 | Edlund H et al., Improved characterization of the pharma…, British journal of clinical… (2022) | [10.1111/bcp.14988](https://doi.org/10.1111/bcp.14988) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Wang_2026_acalabrutinib](drugs/drug_acalabrutinib/Acalabrutinib_Wang2026_acalabrutinib.md) | — | parent + metabolite (no model) | 5 | Wang P et al., Inhibition of acalabrutinib metabolism…, Cell biology and toxicology (2026) | [10.1007/s10565-026-10148-5](https://doi.org/10.1007/s10565-026-10148-5) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [↳ acalabrutinib_finerenone](drugs/drug_acalabrutinib/Acalabrutinib_Wang2026_acalabrutinib_finerenone.md) | — | parent + metabolite (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Hefnawy_2022_reference](drugs/drug_acalabrutinib/Acalabrutinib_Hefnawy2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Hefnawy MM et al., A Rapid and Sensitive Liquid Chromatogr…, Molecules (Basel, Switzerla… (2022) | [10.3390/molecules28010079](https://doi.org/10.3390/molecules28010079) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Kemal_2026_reference](drugs/drug_acalabrutinib/Acalabrutinib_Kemal2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Kemal CC et al., Population Pharmacokinetic Modeling and…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70257](https://doi.org/10.1002/psp4.70257) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Yao_2025_reference](drugs/drug_acalabrutinib/Acalabrutinib_Yao2025_reference.md) | — | parent + metabolite (no model) | 0 | Yao T et al., Assessment of ethnic differences in pha…, British journal of clinical… (2025) | [10.1002/bcp.70018](https://doi.org/10.1002/bcp.70018) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Edlund_2022_2_Gr_2_infection](drugs/drug_acalabrutinib/pd_Edlund_2022_2_Gr_2_infection.md) | grade ≥2 infection ← acalabrutinib · categorical (graded) response model | — | Edlund H et al., Exposure-response analysis of acalabrut…, British journal of clinical… (2022) | [10.1111/bcp.15087](https://doi.org/10.1111/bcp.15087) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yao_2025_AEs](drugs/drug_acalabrutinib/pd_Yao_2025_AEs.md) | incidence of any grade ≥2 adverse events (AEs) ← acalabrutinib · categorical (graded) response model | — | Yao T et al., Assessment of ethnic differences in pha…, British journal of clinical… (2025) | [10.1002/bcp.70018](https://doi.org/10.1002/bcp.70018) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yao_2025_AEs_2](drugs/drug_acalabrutinib/pd_Yao_2025_AEs_2.md) | incidence of any grade ≥3 AEs ← acalabrutinib · categorical (graded) response model | — | Yao T et al., Assessment of ethnic differences in pha…, British journal of clinical… (2025) | [10.1002/bcp.70018](https://doi.org/10.1002/bcp.70018) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 16:59 | 0:04 | 4/3/0 | 3/0/0 | 0/0/0 | 4,019/170 | einfracz / qwen3.8-27b | 29 | 3/19 | 26/3 | 0 |

## Coverage

- **PubMed hits:** 73 matched, 70 returned
- **screened:** 6  ·  **relevant:** 5
- **records:** 7  ·  extracted 0  ·  needs review 4  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xu_2022.pdf` | Xu L et al., Physiologically based pharmacokinetic c…, European journal of clinica… (2022) | popPK | 8 | [10.1007/s00228-022-03338-7](https://doi.org/10.1007/s00228-022-03338-7) | [35680661](https://pubmed.ncbi.nlm.nih.gov/35680661) | The paper describes a PBPK model for acalabrutinib, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-11-23 16:59 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alotaiq_2024 | irrelevant | 0 | 0 | This is a systematic review and provides no quantitative acalabrutinib disposition parameters. |
| popPK | Alsadhan_2020 | irrelevant | 1 | 0 | The paper reports only pharmacodynamic data (BTK occupancy and signaling inhibition), not any quantitative pharmacokinetic disposition parameters (CL, V, ka, half-life) for acalabrutinib. |
| PGx | Alsadhan_2020 | not_relevant | 0 | 1 | The paper describes pharmacodynamic effects of acalabrutinib on BTK occupancy and signaling, but it does not report pharmacogenomic effects (i.e., no analysis of gene variants or genotypes). |
| popPK | Asadi_2022 | irrelevant | 0 | 0 | The paper is an in vitro computational study of the chemical mechanism of acalabrutinib binding to kinases, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Asadi_2022 | not_relevant | 0 | 0 | The paper focuses on the chemical mechanism and selectivity of acalabrutinib binding to kinases (BTK vs ITK) using simulations, with no mention of human gene variants, genotypes, or their impact on PK/PD parameters. |
| popPK | Attwa_2023 | irrelevant | 2 | 10 | This is an in-vitro human liver microsome study, with numeric half-life and intrinsic clearance values reported. |
| popPK | Attwa_2024 | irrelevant | 0 | 0 | The numeric in vitro values are for CEP-37440, not acalabrutinib. |
| popPK | Cadot_2024 | irrelevant | 0 | 0 | This human study models ibrutinib-related cell dynamics and reports no acalabrutinib disposition parameters. |
| popPK | Chen_2018 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study focused on BTK/TEC inhibition and platelet aggregation, not on the quantitative pharmacokinetic parameters of acalabrutinib. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The paper investigates the mechanism of bleeding risk (platelet aggregation) comparing BTK and TEC inhibition, not the effect of a genetic variant on a PK/PD parameter. |
| popPK | Collins_2021 | irrelevant | 0 | 0 | The study focuses on the clinical efficacy and pharmacodynamics of the combination, with no quantitative population-PK parameter values (e.g., CL, V, ka) reported for acalabrutinib in the provided text. |
| PGx | Collins_2021 | not_relevant | 0 | 0 | The study is a phase 1/2 trial assessing drug combination efficacy and PD markers (BTK occupancy) but does not investigate the impact of patient genotypes or variants on pharmacokinetics or pharmacodynamics. |
| popPK | De_2024 | irrelevant | 1 | 0 | The paper is a review/perspective on pirtobrutinib, and acalabrutinib is mentioned only as a comparator drug without any quantitative PK parameters provided for it. |
| PGx | De_2024 | not_relevant | 0 | 0 | The paper focuses on the profile of pirtobrutinib, not acalabrutinib, and does not report pharmacogenomic effects. |
| popPK | Denzinger_2019 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic analysis of Btk inhibitors on platelet aggregation, reporting IC50 values and peak plasma concentrations for context, but it does not report quantitative population pharmacokinetic parameters (e.g., clearance, volume of distribution, ka) for acalabrutinib. |
| PGx | Denzinger_2019 | not_relevant | 0 | 0 | The paper reports general pharmacodynamic effects of Btk inhibitors on platelet function in a non-genomic context; no data on gene variants/genotypes influencing PK/PD is presented. |
| PGx | Edlund_2019 | not_relevant | 0 | 0 | The paper is a population pharmacokinetics study analyzing standard covariates (e.g., age, weight, renal function) and does not report effects of gene variants or genotypes on PK parameters. |
| popPK | Edlund_2022_2 | irrelevant | 3 | 2 | The paper is an exposure-response analysis that cites population PK parameters from another source rather than reporting new quantitative PK model parameters (CL, V) in the text. |
| PGx | Edlund_2022_2 | not_relevant | 0 | 0 | The paper performs an exposure-response analysis linking drug PK to efficacy and safety but does not investigate gene variants, genotypes, or pharmacogenomic factors affecting PK or PD. |
| popPK | Goldmann_2019 | irrelevant | 0 | 0 | The paper reports in vitro pharmacodynamic activity (IC50 for platelet inhibition) and mentions plasma concentrations qualitatively, but does not provide quantitative PK parameters (CL, V, ka, etc.) for acalabrutinib. |
| PGx | Goldmann_2019 | not_relevant | 0 | 0 | The paper reports pharmacodynamic effects of BTK inhibitors on platelet activation in vitro and in vivo, but does not investigate the influence of genetic variants or genotypes on the drug's PK or PD parameters. |
| popPK | Géraud_2024 | irrelevant | 0 | 0 | The paper is a review/scoring system for TDM suitability that mentions acalabrutinib only as a data point for a score, without providing original quantitative PK parameter values (CL, V, etc.). |
| PGx | Géraud_2024 | not_relevant | 0 | 0 | The paper evaluates a score for predicting the clinical usefulness of therapeutic drug monitoring (TDM) for oral targeted therapies and does not report any specific pharmacogenomic effects (gene variants affecting PK/PD) for acalabrutinib. |
| popPK | Han_2021 | irrelevant | 1 | 1 | This is an in-vitro mechanistic study of enzyme variants, not a pharmacokinetic study reporting in-vivo disposition parameters like CL, V, or ka. |
| popPK | Hatashima_2024 | irrelevant | 0 | 0 | This is a narrative review comparing the clinical efficacy and toxicity profiles of BTK inhibitors, not a pharmacokinetic study, and it does not contain quantitative PK parameters for acalabrutinib. |
| PGx | Hatashima_2024 | not_relevant | 0 | 0 | The paper is a clinical review comparing the efficacy and toxicity profiles of BTK inhibitors (zanubrutinib, ibrutinib, acalabrutinib) and does not report any pharmacogenomic studies linking gene variants to PK or PD parameters of acalabrutinib. |
| popPK | He_2025 | irrelevant | 0 | 0 | This drug-repositioning study reports no quantitative pharmacokinetic parameters for acalabrutinib. |
| popPK | Hefnawy_2022 | irrelevant | 0 | 0 | The rat pharmacokinetic parameters are for encorafenib and binimetinib, not acalabrutinib. |
| popPK | Hoang_2025 | irrelevant | 0 | 0 | The study focuses on ibrutinib, a different drug, and acalabrutinib is only mentioned in the conclusion as a related agent; no PK parameters for acalabrutinib are reported. |
| PGx | Hoang_2025 | not_relevant | 0 | 0 | The study focuses on drug-drug interactions for ibrutinib and contains no pharmacogenomic analysis or data for acalabrutinib. |
| popPK | Isoherranen_2025 | irrelevant | 0 | 0 | This is a minireview and reports no quantitative acalabrutinib disposition parameters. |
| popPK | Kemal_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for nemtabrutinib (MK-1026), not acalabrutinib, which is only mentioned as a comparator. |
| PGx | Kemal_2026 | not_relevant | 0 | 0 | The paper reports population PK for nemtabrutinib and explicitly states that intrinsic factors did not have a clinically significant impact on PK, reporting no pharmacogenomic effects. |
| popPK | Khan_2019 | irrelevant | 0 | 0 | The paper is a clinical review discussing efficacy and safety in CLL, containing no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) for acalabrutinib. |
| PGx | Khan_2019 | not_relevant | 0 | 0 | The paper discusses clinical efficacy and safety of acalabrutinib in CLL but does not report any pharmacogenomic effects (gene variants influencing PK/PD). |
| popPK | Klein_2021 | irrelevant | 0 | 0 | The paper is a narrative review on anti-CD20 antibodies and mentions acalabrutinib only as a combination partner without providing any quantitative pharmacokinetic parameters. |
| PGx | Klein_2021 | not_relevant | 0 | 0 | The paper is a review of anti-CD20 antibodies and does not report pharmacogenomic effects on the PK/PD of acalabrutinib. |
| popPK | Kramer_2022 | irrelevant | 0 | 0 | The paper is a review of JAK inhibitors (baricitinib, tofacitinib, ruxolitinib) for COVID-19 and does not contain pharmacokinetic data for acalabrutinib. |
| PGx | Kramer_2022 | not_relevant | 0 | 0 | The paper is a systematic review of JAK inhibitors for COVID-19 and does not mention acalabrutinib or pharmacogenomics. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | Acalabrutinib is mentioned only as background; the paper reports no acalabrutinib pharmacokinetic parameters. |
| popPK | M_2026 | irrelevant | 1 | 0 | The study relies on in-silico PK predictions using GastroPlus and in vitro/in silico models rather than reporting quantitative PK parameters (CL, Vd, etc.) from human or animal disposition data. |
| PGx | M_2026 | not_relevant | 0 | 0 | The paper focuses on formulation engineering (nanocrystals) to improve solubility and bioavailability, with no analysis of genetic variants or pharmacogenomic effects. |
| popPK | McKeown_2024 | irrelevant | 0 | 0 | Acalabrutinib is only mentioned as a treatment example; the paper reports no acalabrutinib pharmacokinetic parameters. |
| popPK | Meng_2022 | irrelevant | 0 | 0 | The paper reports population PK parameters for tirabrutinib, not acalabrutinib, which is only mentioned as a reference compound in the introduction. |
| PGx | Meng_2022 | not_relevant | 0 | 0 | The paper focuses on tirabrutinib, not acalabrutinib, and does not report gene variant effects on pharmacokinetics or pharmacodynamics. |
| popPK | Miao_2021 | irrelevant | 2 | 0 | The paper is a review that discusses acalabrutinib's PK qualitatively but does not provide quantitative disposition parameters (CL, V, etc.) in the provided text. |
| PGx | Miao_2021 | not_relevant | 0 | 0 | The text is a general review of acalabrutinib's PK and clinical efficacy in CLL, but it does not discuss any gene variants, genotypes, or phenotypes affecting PK/PD parameters. |
| PGx | Mingalimov_2026 | not_relevant | 0 | 0 | The paper assigns acalabrutinib by tumor subtype but reports no gene-associated effect on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Patel_2018 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics, proteomics, and combination therapy efficacy, reporting no quantitative pharmacokinetic parameters (CL, V, ka) for acalabrutinib. |
| PGx | Patel_2018 | not_relevant | 0 | 0 | The study reports pharmacodynamic and proteomic effects of acalabrutinib in CLL patients but does not report any association with genetic variants or pharmacogenomic markers. |
| popPK | Pepin_2019 | irrelevant | 5 | 0 | The paper describes a PBPK model for acalabrutinib, but the provided evidence contains no quantitative numeric parameter values (e.g., specific CL, V, ka values or model parameters) to extract. |
| PGx | Pepin_2019 | not_relevant | 0 | 0 | The paper reports pharmacokinetic modeling regarding food effects and drug-drug interactions (PPIs), with no mention of genetic variants or pharmacogenomics. |
| popPK | Pepin_2023 | irrelevant | 0 | 0 | The study focuses on a physiologically based biopharmaceutics (biopharm) model for dissolution specifications, not on reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for acalabrutinib itself. |
| PGx | Pepin_2023 | not_relevant | 0 | 0 | The paper discusses biopharmaceutics and formulation models (dissolution, pH effects) and does not report pharmacogenomic effects on acalabrutinib PK/PD. |
| popPK | Pilla_2021 | relevant | 5 | 0 | The paper uses a PBPK model for acalabrutinib to simulate herb-drug interactions, but no specific PK parameter values (CL, V, etc.) are present in the provided text. |
| PGx | Pilla_2021 | not_relevant | 0 | 0 | The paper focuses on food constituent and herb-drug interactions using PBPK models, and does not report on pharmacogenomic effects of genetic variants on acalabrutinib's PK or PD parameters. |
| PGx | Pilla_2021_2 | not_relevant | 0 | 0 | The paper models CYP3A5 metabolizer effects on vincristine, not a genetic effect on acalabrutinib PK or PD. |
| PGx | Podoll_2023 | not_relevant | 0 | 0 | The paper characterizes CYP3A4-mediated metabolism in vitro but does not report a gene variant, genotype, or phenotype effect on acalabrutinib PK or PD. |
| popPK | Rogers_2025 | irrelevant | 0 | 0 | The paper studies ianalumab and ibrutinib for safety and efficacy in CLL patients, not the pharmacokinetics of acalabrutinib. |
| PGx | Rogers_2025 | not_relevant | 0 | 0 | The paper focuses on the clinical efficacy and safety of a combination therapy (ianalumab and ibrutinib) and does not report on pharmacogenomic effects (gene variants altering drug levels or response). |
| popPK | Serra_2022 | irrelevant | 0 | 0 | Acalabrutinib is only mentioned as a cited COVID-19 treatment, with no acalabrutinib PK parameters reported. |
| popPK | Sharma_2019 | irrelevant | 0 | 0 | The paper describes pharmacophore modeling and virtual screening for BTK inhibitors, reporting only in-vitro pIC50 values for acalabrutinib and other compounds, with no pharmacokinetic parameters. |
| PGx | Sharma_2019 | not_relevant | 0 | 0 | The paper focuses on pharmacophore modeling and virtual screening to identify novel BTK inhibitors and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of acalabrutinib. |
| popPK | Sharma_2022 | relevant | 5 | 4 | The study reports non-compartmental PK parameters (Cmax, AUC, half-life) and apparent clearance (CL/F) for acalabrutinib, but lacks the compartmental parameters (V, Q, ka) typically required for population PK models. |
| PGx | Sharma_2022 | not_relevant | 0 | 0 | The paper reports bioequivalence, food effects, and drug-drug interactions (PPIs) for acalabrutinib formulations in healthy subjects, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Sinha_2024 | not_relevant | 0 | 0 | The paper reports formulation-related changes in acalabrutinib bioavailability, not effects of a gene variant, genotype, or phenotype on a PK or PD parameter. |
| PGx | Sinha_2025 | not_relevant | 0 | 0 | The paper evaluates a nanoparticle formulation’s effect on acalabrutinib bioavailability, not a genetic variant, genotype, or phenotype effect on a PK/PD parameter. |
| popPK | Sun_2020 | irrelevant | 2 | 0 | The paper reports pharmacodynamic parameters (BTK target occupancy) and clinical efficacy, but lacks quantitative population pharmacokinetic parameters (CL, V, ka, etc.) for acalabrutinib. |
| PGx | Sun_2020 | not_relevant | 0 | 0 | The study compares pharmacodynamic effects (target occupancy) between dosing regimens (BID vs QD) and patient populations (CLL vs healthy), but does not report associations with gene variants, genotypes, or genetic phenotypes. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper is an in-vitro study on UGT inhibition potential and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for acalabrutinib. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions via UGT inhibition and does not report any effects of genetic variants on the pharmacokinetics or pharmacodynamics of acalabrutinib. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The study investigates drug-drug interaction (finerenone inhibiting acalabrutinib metabolism) in rats and in vitro systems, not pharmacogenomic effects of gene variants. |
| popPK | Xu_2022 | relevant | 8 | 0 | The paper describes a PBPK model for acalabrutinib, but the specific numeric parameter values are not present in the provided evidence text. |
| PGx | Xu_2022 | not_relevant | 5 | 0 | The study simulates the effect of CYP3A4 variants on acalabrutinib dosing, but no fitted quantitative effect sizes (thetas) for the gene-phenotype association are reported in the text or abstract. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a review of in silico modeling tools for drug disposition across the lifespan and does not contain pharmacokinetic data for acalabrutinib. |
| PGx | Yang_2025 | not_relevant | 0 | 0 | The paper is a review on in silico modeling (PBPK/AI) for drug disposition and does not report specific pharmacogenomic effects on acalabrutinib. |
| PGx | Zhou_2019 | not_relevant | 0 | 0 | The paper describes a PBPK model for drug-drug interactions (DDI) involving CYP3A4 inhibitors/inducers, but does not report pharmacogenomic effects (gene variants) on acalabrutinib pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bacalabrutinib%5D&body=Drug%3A%20acalabrutinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_acalabrutinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 10:22 UTC</sub>

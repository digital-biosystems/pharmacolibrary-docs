<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;mitapivat&quot;}]"></div>

# mitapivat

- **generic name:** mitapivat
- **ATC codes:** `B06AX04`
- **DrugBank:** [DB16236](https://go.drugbank.com/drugs/DB16236) · **PubChem:** none
- **molar mass:** 450.56 g/mol (C24H26N4O3S) — DrugBank
- **groups:** approved, investigational

## About

Mitapivat is a hematological drug used to treat hemolytic anemia, a genetic condition. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q105337735](https://www.wikidata.org/wiki/Q105337735) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **PKLR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Rab_2021](drugs/drug_mitapivat/pgx_Rab_2021_PKLR_Q100.md) | Rab MAE et al., AG-348 (Mitapivat), an allosteric activ…, Haematologica (2021) | [10.3324/haematol.2019.238865](https://doi.org/10.3324/haematol.2019.238865) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mitapivat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` inducer, `CYP2C19` inducer, `CYP2C8` inducer/substrate, `CYP2C9` inducer/substrate, `CYP3A4` inducer/substrate, `UGT1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `UGT1A1` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PKLR (activator), PKLR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 01:26 | 4:06 | 0/0/0 | 0/0/0 | 0/0/1 | 133,085/4,435 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 2/21 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 52 matched, 43 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Angel-Isaza_2026 | irrelevant | 0 | 0 | The study investigates the immunological effects of essential oils in chickens and does not involve mitapivat or pharmacokinetic analysis. |
| PD | Angel-Isaza_2026 | not_relevant | 0 | 0 | The paper studies the effects of essential oils on gene expression and viral load in chickens, not the pharmacodynamics of mitapivat. |
| PGx | Cappellini_2026 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes of mitapivat in thalassaemia patients but does not analyze the impact of specific gene variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Chen_2022 | not_relevant | 0 | 0 | The paper is a commentary on colistin sulfate PK/PD and does not contain any data, analysis, or parameters for mitapivat. |
| popPK | Darko_2021 | irrelevant | 0 | 0 | The paper is a computational study on anti-Ebola compounds and does not involve mitapivat or any pharmacokinetic parameters. |
| PD | Darko_2021 | not_relevant | 0 | 0 | The paper is a computational study on novel anti-Ebola compounds and does not involve mitapivat or report any pharmacodynamic or exposure-response data. |
| popPK | De_2024 | irrelevant | 2 | 0 | The paper is a short perspective/review describing general properties and lacks original quantitative PK parameter values. |
| PD | De_2024 | not_relevant | 2 | 1 | The text is a short perspective/review summarizing general properties and lacks specific numeric PD parameters or detailed exposure-response data. |
| popPK | Flores_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of DNL343, not mitapivat. |
| popPK | Gervasi_2024 | irrelevant | 0 | 0 | The paper is a review of oleuropein and hydroxytyrosol for cancer prevention and does not mention mitapivat or report any pharmacokinetic parameters for it. |
| PD | Gervasi_2024 | not_relevant | 0 | 0 | The paper is a review on oleuropein and hydroxytyrosol for cancer prevention and does not mention mitapivat or report any pharmacodynamic parameters for it. |
| popPK | Gomeni_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of indomethacin, not mitapivat. |
| PD | Gomeni_2020 | not_relevant | 0 | 0 | The paper focuses on indomethacin, not mitapivat. |
| popPK | Gomeni_2020_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of indomethacin, not mitapivat. |
| PD | Gomeni_2020_2 | not_relevant | 0 | 0 | The paper focuses on indomethacin, not mitapivat. |
| popPK | Hayat_2024 | irrelevant | 0 | 0 | The paper focuses on in silico identification of Ebola virus protein inhibitors from natural products and does not involve mitapivat or its pharmacokinetics. |
| PD | Hayat_2024 | not_relevant | 0 | 0 | The paper is an in silico study on Ebola virus inhibitors and does not involve mitapivat or report any pharmacodynamic or exposure-response data. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of a novel compound (SNH-119014) with mitapivat as a comparator, reporting no pharmacokinetic parameters (CL, V, etc.) for mitapivat. |
| PGx | Idowu_2025 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of mitapivat in sickle cell disease but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Iyer_2024 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (Cmax, AUC, tmax) for mitapivat in humans, but lacks compartmental model parameters (CL, V, Q, ka) required for population PK extraction. |
| popPK | Lee_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a cholesterol-conjugated aptamer against HCV, not mitapivat. |
| PD | Lee_2015 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of a cholesterol-conjugated aptamer against HCV NS5B and does not report any pharmacodynamic or exposure-response relationship for mitapivat. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper focuses on the discovery of PKM2 agonists for aortic dissection, using mitapivat only as a comparator drug without reporting any pharmacokinetic parameters for it. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper focuses on the discovery of a new PKM2 agonist (D16) and only qualitatively compares its efficacy to mitapivat in a mouse model without providing any exposure-response or dose-response data for mitapivat. |
| popPK | Lickliter_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of trastuzumab (a biosimilar), not mitapivat. |
| PD | Lickliter_2021 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic (PK) bioequivalence study for a trastuzumab biosimilar and does not contain any pharmacodynamic (PD) or exposure-response analysis for mitapivat or any other drug. |
| popPK | Matte_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of mitapivat's effects on erythropoiesis and iron metabolism in mice, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for the drug itself. |
| popPK | Mc_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of TLD-1 (liposomal doxorubicin), not mitapivat. |
| PD | Mc_2024 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of TLD-1 (liposomal doxorubicin) but explicitly states that exposure-response relationships are to be investigated in the future; no PD parameters or effect data are reported. |
| popPK | Musallam_2026 | irrelevant | 0 | 0 | The paper is a narrative review summarizing clinical efficacy and biological rationale, containing no original quantitative pharmacokinetic parameter values for mitapivat. |
| PD | Musallam_2026 | not_relevant | 2 | 0 | The text is a narrative review summarizing clinical outcomes and biological rationale without providing specific numeric PD parameters, exposure-response curves, or detailed PK/PD modeling data. |
| popPK | Nilsson_2025 | irrelevant | 0 | 0 | The paper describes the development of a fluorescent probe for pyruvate kinase and uses mitapivat only as a positive control in binding assays, reporting no pharmacokinetic parameters. |
| popPK | Pham_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rifapentine, not mitapivat. |
| PD | Pham_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of rifapentine, not mitapivat, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Saavedra-García_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on cancer cell stress resolution and does not involve mitapivat or pharmacokinetic parameters. |
| PD | Saavedra-García_2021 | not_relevant | 0 | 0 | The paper studies the effects of proteasome inhibitors (carfilzomib, bortezomib) and GCN2 inhibitors on myeloma cells, not mitapivat, and does not report any pharmacodynamic parameters for mitapivat. |
| popPK | Silva_2025 | irrelevant | 0 | 0 | The paper is a review of osteoarthritis treatments (glucosamine, chondroitin sulfate, hyaluronic acid) and does not mention mitapivat or report any pharmacokinetic parameters. |
| PD | Silva_2025 | not_relevant | 0 | 0 | The paper is a review of osteoarthritis treatments (glucosamine, chondroitin sulfate, hyaluronic acid) and does not mention mitapivat or report any pharmacodynamic parameters. |
| popPK | Soeung_2025 | irrelevant | 0 | 0 | The paper is a clinical trial and preclinical study on renal medullary carcinoma treatment with immunotherapy, containing no pharmacokinetic data for mitapivat. |
| PD | Soeung_2025 | not_relevant | 0 | 0 | The paper investigates nivolumab and ipilimumab in renal medullary carcinoma and does not contain any data, analysis, or mention of mitapivat. |
| popPK | Su_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tigecycline, not mitapivat. |
| PD | Su_2024 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PPK) of tigecycline, not mitapivat, and does not report any pharmacodynamic (PD) or exposure-response models with numeric PD parameters. |
| PGx | Taher_2025 | not_relevant | 0 | 0 | The paper reports the clinical efficacy and safety of mitapivat in a phase 3 trial but does not analyze how specific gene variants or genotypes affect the drug's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetic drugs for postoperative nausea and vomiting and does not mention mitapivat or report any pharmacokinetic parameters. |
| PD | Weibel_2020 | not_relevant | 0 | 0 | The paper is a network meta-analysis of antiemetics for PONV and does not mention mitapivat or report any pharmacodynamic or exposure-response parameters. |
| popPK | Wills_2023 | irrelevant | 2 | 2 | The paper is a narrative review that mentions basic PK parameters (half-life, bioavailability) but lacks the quantitative compartmental or population-PK model parameters (CL, V, Q, ka) required for extraction. |
| PD | Wills_2023 | not_relevant | 1 | 0 | The text is a narrative review that describes the mechanism of action and clinical trial outcomes but does not report any numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves. |
| popPK | Yu_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vancomycin, not mitapivat. |
| PD | Yu_2023 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PopPK) of vancomycin and does not report any pharmacodynamic (PD) or exposure-response relationship for mitapivat or any other drug. |
| popPK | Yu_2024 | irrelevant | 1 | 0 | The paper is a review of drug interaction mechanisms for 2022 approvals and identifies mitapivat as a CYP3A substrate and inducer, but it does not report quantitative PK parameters (CL, V, etc.) for mitapivat. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a review on neurobiology and endoplasmic reticulum stress, with no mention of mitapivat or pharmacokinetics. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper is a review on environmental adversity, ER stress, and neurogenesis, and does not mention mitapivat or report any pharmacodynamic or exposure-response data. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of talimogene laherparepvec (T-VEC), not mitapivat. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper describes the pharmacology of T-VEC (talimogene laherparepvec), not mitapivat, and does not contain any data or parameters for the requested drug. |
| popPK | Zhao_2023 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | Zhao_2023 | not_relevant | 0 | 0 | The paper discusses polymyxin B pharmacokinetics and therapeutic drug monitoring, not mitapivat, and does not report any pharmacodynamic or exposure-response parameters for the target drug. |
| popPK | unknown_2011 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PD | unknown_2011 | not_relevant | 0 | 0 | The provided text is a header for a conference abstract collection and does not contain any specific data, analysis, or mention of mitapivat or pharmacodynamic parameters. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of mitapivat pharmacodynamics. |
| PGx | van_2025 | not_relevant | 0 | 0 | The paper is a scoping review of metabolomics in sickle cell disease and does not report pharmacogenomic effects on the PK or PD of mitapivat. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmitapivat%5D&body=Drug%3A%20mitapivat%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mitapivat/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>

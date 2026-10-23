<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;cangrelor&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cangrelor_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cangrelor/Cangrelor_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# cangrelor

- **generic name:** cangrelor
- **ATC codes:** `B01AC25`
- **DrugBank:** [DB06441](https://go.drugbank.com/drugs/DB06441) · **PubChem:** [CID 9854012](https://pubchem.ncbi.nlm.nih.gov/compound/9854012)
- **molar mass:** 776.35 g/mol (C17H25Cl2F3N5O12P3S2) — DrugBank
- **groups:** approved, investigational

## About

Cangrelor is a platelet aggregation inhibitor used to prevent blood clots in patients with acute coronary syndrome or undergoing vascular surgical procedures. It is an approved medicine with an authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3655338](https://www.wikidata.org/wiki/Q3655338) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| AR-C69712XX | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Henrich_2021_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_cangrelor/Cangrelor_Henrich2021_reference.md?tab=Simulation) · [record](drugs/drug_cangrelor/Cangrelor_Henrich2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 8.51 | L/h | 8.51 L/h | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Henrich_2021_reference](drugs/drug_cangrelor/Cangrelor_Henrich2021_reference.md) |
| V | V1 | 17 | L | 17.0 L | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Henrich_2021_reference](drugs/drug_cangrelor/Cangrelor_Henrich2021_reference.md) |
| ka | kabs | 5.95 | 1/h | 5.95 1/h | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Henrich_2021_reference](drugs/drug_cangrelor/Cangrelor_Henrich2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): F</sub> | [Henrich_2021_reference](drugs/drug_cangrelor/Cangrelor_Henrich2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Henrich A et al., Pharmacokinetic/pharmacodynamic modelin…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12641](https://doi.org/10.1002/psp4.12641) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Vargas_2021_cohort_1](drugs/drug_cangrelor/Cangrelor_Vargas2021_cohort_1.md) | — | parent + metabolite (no model) | 0 | Vargas D et al., Cangrelor PK/PD analysis in post-operat…, Journal of thrombosis and h… (2021) | [10.1111/jth.15141](https://doi.org/10.1111/jth.15141) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ cohort_2](drugs/drug_cangrelor/Cangrelor_Vargas2021_cohort_2.md) | — | parent + metabolite (no model) | 0 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Gupta_2020_Mpro_activity](drugs/drug_cangrelor/pd_Gupta_2020_Mpro_activity.md) | Mpro activity biomarker turnover ← cangrelor | — | Gupta A et al., Structure-Based Virtual Screening and B…, ACS omega (2020) | [10.1021/acsomega.0c04808](https://doi.org/10.1021/acsomega.0c04808) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Gupta_2020_Mpro_binding](drugs/drug_cangrelor/pd_Gupta_2020_Mpro_binding.md) | Mpro binding biomarker turnover ← cangrelor | — | Gupta A et al., Structure-Based Virtual Screening and B…, ACS omega (2020) | [10.1021/acsomega.0c04808](https://doi.org/10.1021/acsomega.0c04808) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Vargas_2021_LTA](drugs/drug_cangrelor/pd_Vargas_2021_LTA.md) | maximal platelet aggregation ← cangrelor · direct Emax (saturable) effect | model (no simulator) | Vargas D et al., Cangrelor PK/PD analysis in post-operat…, Journal of thrombosis and h… (2021) | [10.1111/jth.15141](https://doi.org/10.1111/jth.15141) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Vargas_2021_MF](drugs/drug_cangrelor/pd_Vargas_2021_MF.md) | thrombus growth ← cangrelor · direct Emax (saturable) effect | model (no simulator) | Vargas D et al., Cangrelor PK/PD analysis in post-operat…, Journal of thrombosis and h… (2021) | [10.1111/jth.15141](https://doi.org/10.1111/jth.15141) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **P2RY12** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Bouman_2010](drugs/drug_cangrelor/pgx_Bouman_2010_P2RY12_Q100.md) | Bouman HJ et al., The influence of variation in the P2Y12…, Thrombosis and haemostasis (2010) | [10.1160/TH09-06-0367](https://doi.org/10.1160/TH09-06-0367) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cangrelor).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: P2RY12 (inhibitor), P2RY12 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 12:37 | 15:49 | 1/2/0 | 2/0/0 | 0/0/1 | 299,712/39,150 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 13/10 | 5/11 | 0 |

## Coverage

- **PubMed hits:** 110 matched, 50 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdennour_2020 | irrelevant | 0 | 0 | The paper is a clinical case series regarding the use of cangrelor for intracranial aneurysms and does not report any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Alexopoulos_2018 | irrelevant | 0 | 0 | The paper is a clinical review discussing the use of cangrelor in PCI and does not report any quantitative pharmacokinetic parameters. |
| PD | Alexopoulos_2018 | not_relevant | 1 | 0 | The text is a narrative review summarizing clinical trial outcomes and guidelines, containing no specific pharmacodynamic models, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Angiolillo_2017 | irrelevant | 0 | 0 | The paper is an expert consensus document on switching antiplatelet therapies and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Angiolillo_2017 | not_relevant | 1 | 0 | The paper is an expert consensus document on switching therapies and does not report specific numeric PD parameters or exposure-response data for cangrelor. |
| popPK | Capranzano_2019 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic studies regarding P2Y12 inhibitor switching and does not report quantitative pharmacokinetic parameters for cangrelor. |
| PD | Capranzano_2019 | not_relevant | 1 | 0 | The text is a review overview of pharmacodynamic studies regarding P2Y12 inhibitor switching and does not present original data, numeric PD parameters, or specific exposure-response curves for cangrelor. |
| popPK | Capranzano_2019_2 | irrelevant | 0 | 0 | The paper is a review of switching strategies between P2Y12 inhibitors and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Capranzano_2019_2 | not_relevant | 1 | 0 | The text is a qualitative review summarizing switching strategies and clinical consequences, without presenting specific numeric PD parameters or concentration-effect curves for cangrelor. |
| popPK | Cattaneo_2012 | irrelevant | 0 | 0 | The paper is a mechanistic hypothesis regarding dyspnea and does not report any quantitative pharmacokinetic parameters for cangrelor. |
| popPK | Chattaraj_2001 | irrelevant | 0 | 0 | The text is a drug development overview that mentions cangrelor's mechanism and trial status but contains no pharmacokinetic parameters or quantitative disposition data. |
| PD | Chattaraj_2001 | not_relevant | 1 | 0 | The text is a drug development overview that mentions an IC50 for a derivative compound but provides no exposure-response or dose-response data for cangrelor itself. |
| PGx | Dash_2015 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet therapies and does not report specific pharmacogenomic effects on the PK or PD parameters of cangrelor. |
| popPK | Droppa_2018 | irrelevant | 1 | 0 | The paper is a review article discussing the clinical role of cangrelor without reporting original quantitative pharmacokinetic parameter values. |
| popPK | Elhorany_2021 | irrelevant | 0 | 0 | The paper is a clinical case series regarding safety and efficacy in stroke patients, not a pharmacokinetic study, and does not report quantitative disposition parameters like clearance or volume. |
| PGx | Fabre_2010 | not_relevant | 0 | 0 | The paper is a review of anti-platelet mechanisms and does not report pharmacogenomic effects on cangrelor PK/PD. |
| popPK | Fahnhorst_2021 | irrelevant | 2 | 0 | The study is a clinical pilot cohort focusing on dosing and platelet function outcomes rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for cangrelor. |
| PGx | Fayaz_2012 | not_relevant | 0 | 0 | The paper is a review of P2Y12 inhibitors and discusses pharmacogenetics for clopidogrel and prasugrel, but it does not report any pharmacogenomic effects on the PK or PD parameters of cangrelor. |
| PGx | Ferri_2013 | not_relevant | 0 | 0 | The paper is a general review of P2Y12 inhibitors and does not report specific pharmacogenomic effects (gene variants) on cangrelor's PK or PD parameters. |
| popPK | Gargiulo_2025 | irrelevant | 0 | 0 | The study focuses exclusively on pharmacodynamic effects (platelet inhibition) and clinical outcomes, reporting no quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Gargiulo_2025 | not_relevant | 3 | 2 | The paper reports descriptive pharmacodynamic outcomes (mean platelet inhibition percentages and rates of high residual platelet reactivity) at specific time points, but it does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) or an effect-vs-concentration curve. |
| popPK | Gargiulo_2026 | irrelevant | 0 | 0 | The study reports pharmacodynamic (platelet reactivity) parameters, not pharmacokinetic disposition parameters (CL, V, etc.) for cangrelor. |
| PD | Gargiulo_2026 | not_relevant | 3 | 2 | The study reports descriptive pharmacodynamic outcomes (platelet inhibition percentages) at fixed time points and compares groups, but it does not model an exposure-response or dose-response relationship, nor does it provide numeric PD parameters like Emax or EC50. |
| popPK | Gasecka_2019 | irrelevant | 1 | 0 | The paper is a narrative review discussing clinical switching strategies and pharmacological properties, containing no original quantitative pharmacokinetic parameter values for cangrelor. |
| PD | Gasecka_2019 | not_relevant | 2 | 1 | The text is a review introduction discussing switching strategies and mentions pharmacodynamics studies generally, but it does not present specific numeric PD parameters or concentration-effect curves for cangrelor. |
| popPK | Gelbenegger_2022 | irrelevant | 0 | 0 | The paper is a review of antiplatelet drugs and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Gelbenegger_2022 | not_relevant | 1 | 0 | The text is a general review of antiplatelet drugs and does not contain specific numeric PD parameters or exposure-response data for cangrelor. |
| popPK | Gelbenegger_2022_2 | irrelevant | 2 | 1 | The study is a pharmacodynamic trial focusing on platelet function assays (MEA, VASP-P) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, Q) for cangrelor, with only a cited half-life mentioned in the supplementary rationale. |
| popPK | Gupta_2020 | irrelevant | 0 | 0 | The paper is a computational and in-vitro study on SARS-CoV-2 main protease inhibition, where cangrelor is used only as a comparator agent for binding affinity (KD/IC50), not for pharmacokinetic parameter estimation. |
| popPK | Henrich_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of selatogrel and its interactions with oral P2Y12 antagonists (clopidogrel, prasugrel, ticagrelor); cangrelor is only mentioned in the introduction as a comparator for drug interaction mechanisms and no PK parameters for cangrelor are reported. |
| popPK | Hochholzer_2017 | irrelevant | 0 | 0 | The study is a clinical trial focused on platelet inhibition and transition strategies, not a pharmacokinetic study reporting quantitative disposition parameters for cangrelor. |
| popPK | Holden_2021 | irrelevant | 1 | 0 | The study focuses on platelet function testing and dose-response for antiplatelet effect, not on quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Kubica_2024 | irrelevant | 2 | 1 | The paper is a clinical review that discusses cangrelor's pharmacokinetics qualitatively (e.g., half-life, volume of distribution) but does not report quantitative disposition parameters like clearance (CL) or specific volume values, nor does it present a population-PK model. |
| PD | Kubica_2024 | not_relevant | 2 | 1 | The paper is a narrative review summarizing clinical trial outcomes and general pharmacological properties (e.g., &gt;90% inhibition, half-life) without presenting specific numeric PD parameters (Emax, EC50) or an exposure-response model. |
| PGx | Laine_2016 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet therapy and does not report specific pharmacogenomic effects on the PK or PD parameters of cangrelor. |
| popPK | Langer_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on VPAC receptor modulation where cangrelor is used only as an inactive comparator to ticagrelor, with no pharmacokinetic parameters reported. |
| popPK | Linfante_2021 | irrelevant | 0 | 0 | The paper is a clinical feasibility and safety study of cangrelor use in neuroendovascular procedures and does not report any quantitative pharmacokinetic parameters. |
| popPK | Liu_2024 | irrelevant | 1 | 0 | The paper is a case report discussing clinical management and guidelines, not a pharmacokinetic study, and only mentions a general half-life range without providing quantitative disposition parameters or model values. |
| popPK | Marnat_2021 | irrelevant | 0 | 0 | The paper is a clinical safety and efficacy study comparing cangrelor to glycoprotein IIb/IIIa inhibitors, reporting no pharmacokinetic parameters. |
| popPK | Masyuk_2018 | irrelevant | 2 | 0 | The study is a pharmacosimulation based on known parameters but does not report original quantitative PK values for cangrelor in the provided evidence. |
| PGx | Michelson_2009 | not_relevant | 0 | 0 | The paper is a review of P2Y12 antagonists; it discusses pharmacogenomics for clopidogrel (CYP2C19) but does not report any pharmacogenomic effects on the PK or PD of cangrelor. |
| popPK | Milnerowicz_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study comparing cangrelor to GPIIb/IIIa inhibitors in stroke, reporting no pharmacokinetic parameters. |
| PD | Milnerowicz_2026 | not_relevant | 0 | 0 | The paper is a retrospective clinical trial comparing clinical outcomes (efficacy/safety) of cangrelor vs GPIIb/IIIa inhibitors, with no pharmacokinetic or pharmacodynamic modeling or numeric PD parameters reported. |
| popPK | Motovska_2024 | irrelevant | 0 | 0 | The paper is a clinical trial rationale and design document for a comparative efficacy study, containing no quantitative pharmacokinetic parameters or disposition data for cangrelor. |
| PD | Motovska_2024 | not_relevant | 0 | 0 | The paper is a trial protocol/rationale describing a future study design and endpoints, containing no actual data, PK/PD analysis, or numeric PD parameters. |
| popPK | Norgard_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet function reporting an IC50 value, not a pharmacokinetic study with disposition parameters. |
| popPK | Oestreich_2009 | irrelevant | 1 | 0 | The text is a qualitative overview of cangrelor's mechanism and clinical status without reporting any quantitative pharmacokinetic parameters. |
| popPK | Ortega-Paz_2024 | irrelevant | 0 | 0 | The paper is a review on switching P2Y12 inhibitors and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Ortega-Paz_2024 | not_relevant | 1 | 0 | The text is a review providing qualitative guidance on switching therapies and does not report specific numeric PD parameters or concentration-effect curves for cangrelor. |
| popPK | Pampuch_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay comparing platelet function tests, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Percha_2015 | irrelevant | 0 | 0 | The paper is a computational text-mining study on drug-gene relationships and contains no pharmacokinetic data for cangrelor. |
| PD | Percha_2015 | not_relevant | 0 | 0 | The paper describes a text mining algorithm for extracting drug-gene relationships from biomedical literature and contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters for cangrelor. |
| PGx | Qureshi_2013 | not_relevant | 0 | 0 | The paper is a review focused on clopidogrel resistance and pharmacogenomics; cangrelor is only mentioned as a keyword for a literature search on new agents, with no specific pharmacogenomic data reported for it. |
| popPK | Rollini_2017 | irrelevant | 0 | 0 | The paper is a review of clinical switching strategies for P2Y12 inhibitors and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Rollini_2017 | not_relevant | 1 | 0 | The text is a review of switching strategies and does not report specific numeric PD parameters or concentration-effect curves for cangrelor. |
| popPK | Rymer_2024 | irrelevant | 0 | 0 | The paper is a clinical registry study focusing on dosing duration and clinical outcomes (MACE/bleeding) rather than pharmacokinetic parameters. |
| PD | Rymer_2024 | not_relevant | 0 | 0 | The paper is an observational registry analyzing clinical outcomes (MACE, bleeding) and infusion duration, reporting no concentration-effect data, PK/PD modeling, or numeric PD parameters. |
| popPK | Schneider_2014 | irrelevant | 0 | 0 | The study reports only pharmacodynamic effects (platelet aggregation) and does not provide any quantitative pharmacokinetic parameters for cangrelor. |
| PD | Schneider_2014 | not_relevant | 3 | 2 | The study reports qualitative pharmacodynamic outcomes (platelet reactivity) during drug transition but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Schneider_2015 | irrelevant | 0 | 0 | The study reports only pharmacodynamic effects (platelet aggregation) and contains no quantitative pharmacokinetic parameters for cangrelor. |
| PD | Schneider_2015 | not_relevant | 3 | 2 | The study reports qualitative pharmacodynamic effects (platelet aggregation) and timing of recovery but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Schneider_2015_2 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (platelet reactivity) and drug interaction timing, reporting no quantitative pharmacokinetic parameters for cangrelor. |
| PD | Schneider_2015_2 | not_relevant | 3 | 2 | The paper reports qualitative comparisons of platelet reactivity recovery times under different dosing schedules but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve for cangrelor. |
| popPK | Seider_2019 | irrelevant | 1 | 0 | This is a clinical case report describing the use of cangrelor for anticoagulation, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Serhan_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of cangrelor on HDL-cholesterol metabolism in mice and does not report quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Shrestha_2022 | irrelevant | 1 | 0 | This is a clinical case series regarding the use of cangrelor as a bridge to surgery, not a pharmacokinetic study, and it does not report quantitative disposition parameters like clearance or volume. |
| popPK | Sible_2017 | irrelevant | 2 | 0 | The paper is a review article discussing cangrelor's mechanism and clinical use, and the provided evidence contains no quantitative pharmacokinetic parameter values. |
| PD | Sible_2017 | not_relevant | 2 | 1 | The text is a general review of cangrelor's mechanism and clinical trials, lacking specific numeric PD parameters or detailed exposure-response data. |
| popPK | Siller-Matula_2010 | irrelevant | 0 | 0 | The paper is a narrative review of antiplatelet drugs and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Siller-Matula_2010 | not_relevant | 2 | 1 | The paper is a review article summarizing the pharmacological profiles of various antiplatelet drugs, including cangrelor, but does not present original data, specific numeric PD parameters, or extractable concentration-effect curves for cangrelor. |
| popPK | Steinhubl_2008 | irrelevant | 0 | 0 | The study reports pharmacodynamic (platelet function) outcomes rather than quantitative pharmacokinetic parameters (CL, V, etc.) for cangrelor. |
| popPK | Storey_2016 | irrelevant | 3 | 4 | The paper is a review that cites PK parameters (clearance, half-life) from other studies rather than reporting original quantitative disposition data or compartmental models. |
| PD | Storey_2016 | not_relevant | 1 | 0 | The text is a narrative review describing the background and clinical evidence for cangrelor, but it does not present original pharmacodynamic modeling or specific numeric PD parameters (e.g., Emax, EC50) in the provided abstract or captions. |
| popPK | Södergren_2016 | irrelevant | 0 | 0 | The study is a mechanistic investigation of platelet lysosomal exocytosis where cangrelor is used only as a functional inhibitor, with no pharmacokinetic parameters reported. |
| popPK | Tamborini_2015 | irrelevant | 1 | 0 | The paper is a narrative review summarizing clinical data and pharmacological characteristics without reporting original quantitative pharmacokinetic parameter values. |
| PD | Tamborini_2015 | not_relevant | 2 | 1 | The text is a qualitative review summary that discusses the pharmacological characteristics and clinical outcomes of cangrelor but does not provide specific numeric PD parameters (e.g., EC50, Emax) or detailed concentration-effect data. |
| popPK | Tunströmer_2023 | irrelevant | 0 | 0 | The study is an ex vivo mechanistic investigation of thrombus remodelling and does not report pharmacokinetic parameters for cangrelor. |
| popPK | Valenti_2022 | irrelevant | 0 | 0 | The paper is a clinical review/consensus document on personalized antiplatelet bridging therapy and does not report any quantitative pharmacokinetic parameters for cangrelor. |
| PD | Valenti_2022 | not_relevant | 1 | 0 | The text is a review/consensus document proposing a clinical algorithm for personalized cangrelor bridging therapy and does not report any specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Van_2019 | irrelevant | 1 | 0 | The paper is a clinical review of perioperative bridging strategies and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PGx | Wallentin_2009 | not_relevant | 0 | 0 | The paper is a systematic review that discusses pharmacogenetics for thienopyridines (like clopidogrel) but does not report any gene variant effects on the PK or PD of cangrelor. |
| PGx | Wichaiyo_2026 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet drugs and does not report specific pharmacogenomic effects on the PK or PD parameters of cangrelor. |
| popPK | Wzorek_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cangrelor binding to human serum albumin (reporting KD and thermodynamic parameters) and does not provide pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| PD | Wzorek_2021 | not_relevant | 2 | 1 | The paper focuses on in vitro protein binding interactions (HSA) and does not report a pharmacodynamic exposure-response or dose-response model with numeric PD parameters like Emax or EC50. |
| popPK | Xiao_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic cardioprotection experiment in rats where cangrelor is used only as a co-administered comparator agent, and no pharmacokinetic parameters for cangrelor are reported. |
| PD | Xiao_2021 | not_relevant | 0 | 0 | The paper investigates the cardioprotective efficacy of nicotinamide riboside in the presence of cangrelor, but does not report any pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationship for cangrelor itself. |
| PGx | Yousuf_2011 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet therapy evolution and does not report specific pharmacogenomic effects on cangrelor PK/PD parameters. |
| popPK | Yun_2022 | irrelevant | 0 | 0 | The study is a clinical safety and efficacy comparison of cangrelor versus eptifibatide for periprocedural bridging and does not report any pharmacokinetic parameters. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for cangrelor. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 12:22 UTC</sub>

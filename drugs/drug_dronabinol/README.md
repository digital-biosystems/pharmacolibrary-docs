<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;dronabinol&quot;}]"></div>

# dronabinol

- **generic name:** dronabinol
- **ATC codes:** `A04AD10`
- **DrugBank:** [DB00470](https://go.drugbank.com/drugs/DB00470) · **PubChem:** [CID 16078](https://pubchem.ncbi.nlm.nih.gov/compound/16078)
- **molar mass:** 314.4617 g/mol (C21H30O2) — DrugBank
- **groups:** approved, illicit, investigational

## About

Dronabinol (tetrahydrocannabinol) is used to treat vomiting and nausea, as well as anorexia including anorexia associated with serious illness. It is an approved medicine, used mainly in the United States, and is also classified as an illicit substance in some places.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q190067](https://www.wikidata.org/wiki/Q190067) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:54 | 0:40 | 0/0/0 | 0/0/0 | 0/0/0 | 15,513/683 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/4 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 32 matched, 30 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schoedel_2018.pdf` | Schoedel KA et al., Abuse potential assessment of cannabidi…, Epilepsy & behavior : E&B (2018) | pd | 5 | [10.1016/j.yebeh.2018.07.027](https://doi.org/10.1016/j.yebeh.2018.07.027) | [30286443](https://www.ncbi.nlm.nih.gov/pubmed/30286443) | metadata signals extractable PD data (Emax) |
| `Patar_2023.pdf` | Patar AK et al., Dronabinol as an answer to flavivirus i…, Journal of biomolecular str… (2023) | pd | 4 | [10.1080/07391102.2022.2160817](https://doi.org/10.1080/07391102.2022.2160817) | [36576139](https://www.ncbi.nlm.nih.gov/pubmed/36576139) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T13:54:29.806005+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amann_2026 | irrelevant | 2 | 0 | The paper is a review of therapeutic drug monitoring reference ranges (concentrations) rather than a study reporting quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for dronabinol. |
| PD | Amann_2026 | not_relevant | 3 | 2 | The paper is a systematic review that summarizes therapeutic reference ranges and qualitative concentration-effect relationships from other studies, but it does not present original data, individual subject analyses, or a fitted PD model with specific numeric parameters (like Emax or EC50) for dronabinol in the text provided. |
| popPK | Badowski_2017 | irrelevant | 2 | 1 | The paper is a narrative review that discusses dronabinol's pharmacokinetics qualitatively and cites ranges for Cmax variability and AUC, but it does not report original quantitative disposition parameters (CL, V, Q, ka) or a compartmental/population-PK model. |
| PD | Badowski_2017 | not_relevant | 2 | 1 | The paper is a narrative review that qualitatively discusses PK/PD variability and efficacy but does not present original data, specific numeric PD parameters (e.g., EC50, Emax), or extractable concentration-effect curves for dronabinol. |
| popPK | Barrett_2026 | irrelevant | 0 | 0 | The study is a psychopharmacological investigation of subjective effects and blinding, reporting no pharmacokinetic parameters such as clearance, volume, or half-life for dronabinol. |
| PD | Barrett_2026 | not_relevant | 2 | 1 | The study is a qualitative pilot comparison of subjective effects at fixed doses (25/50 mg) without PK data or quantitative dose-response modeling. |
| popPK | Brunette_2025 | irrelevant | 1 | 0 | The study is a clinical trial assessing cognitive and psychiatric outcomes, not a pharmacokinetic study, and it does not report quantitative disposition parameters (CL, V, ka, etc.) for dronabinol. |
| PGx | Camilleri_2012 | not_relevant | 5 | 0 | The paper is a review that mentions pharmacogenetic responses to dronabinol based on CNR1 and FAAH variation, but it does not report specific quantitative PK/PD effect sizes or fitted parameters. |
| PGx | Curtis_2025 | not_relevant | 0 | 0 | The study is a feasibility trial for dronabinol in sickle cell disease and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Daoui_2023 | irrelevant | 0 | 0 | The paper is an in-silico virtual screening study using computational predictions (ADME-Tox) rather than an experimental pharmacokinetic study reporting quantitative disposition parameters for dronabinol. |
| PD | Daoui_2023 | not_relevant | 0 | 0 | The paper is a computational study (molecular docking, MD simulations, ADME-Tox prediction) and does not report any experimental pharmacodynamic data, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50) for dronabinol. |
| popPK | De_2023 | irrelevant | 0 | 0 | The study is a pharmacodynamic/clinical trial investigating pain sensitivity and abuse potential, not a pharmacokinetic study reporting quantitative disposition parameters for dronabinol. |
| popPK | Formukong_1989 | irrelevant | 0 | 0 | The study investigates the inhibitory effects of cannabinoids on platelet aggregation (pharmacodynamics) and does not report any pharmacokinetic parameters for dronabinol. |
| popPK | Goodwin_2006 | irrelevant | 2 | 0 | The study reports only plasma concentration data (Cmax, detection times) and correlations, lacking compartmental PK parameters (CL, V, ka) or population model estimates for dronabinol. |
| PD | Goodwin_2006 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (concentrations, detection times, Cmax) and correlations with BMI, but does not report any pharmacodynamic effects or exposure-response/dose-response relationships. |
| popPK | Huestis_2002 | irrelevant | 1 | 0 | The paper is a review of cannabis effects on performance and behavior, and the provided evidence contains no quantitative pharmacokinetic parameter values for dronabinol. |
| PD | Huestis_2002 | not_relevant | 1 | 0 | The text is a review abstract summarizing general effects and PK/PD concepts without providing specific numeric PD parameters or extractable concentration-effect data for dronabinol. |
| popPK | Issa_2014 | irrelevant | 0 | 0 | The study focuses on subjective psychoactive effects (ARCI scores) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Klumpers_2012 | irrelevant | 2 | 2 | The study investigates a novel THC formulation (Namisol) and reports only summary descriptive statistics (t1/2, tmax, Cmax) rather than the specific compartmental or population PK parameters (CL, V, Q, ka) required for extraction. |
| PD | Klumpers_2012 | not_relevant | 3 | 2 | The study reports population PK and summary PD effects (mean changes with CIs) but does not provide an exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve. |
| popPK | Le_2015 | irrelevant | 0 | 0 | The text is an editorial introduction to a special issue and contains no original pharmacokinetic data or quantitative parameters for dronabinol. |
| PD | Le_2015 | not_relevant | 1 | 0 | The text is an editorial introduction to a special issue and contains no specific data, models, or numeric parameters for dronabinol. |
| popPK | McGilveray_2005 | irrelevant | 1 | 0 | The paper is a review that discusses dronabinol only briefly without providing specific quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for it. |
| PD | McGilveray_2005 | not_relevant | 2 | 0 | The text is a pharmacokinetic review that qualitatively mentions a PK/PD relationship (effect proportional to plasma profile) but provides no numeric PD parameters, curves, or specific dose-response data for dronabinol. |
| popPK | Odieka_2025 | irrelevant | 0 | 0 | The paper is a phytochemical and in-vitro antioxidant study of cannabis essential oils, not a pharmacokinetic study, and contains no disposition parameters for dronabinol. |
| PD | Odieka_2025 | not_relevant | 0 | 0 | The paper reports the chemical composition and in vitro antioxidant activity of essential oils, not a pharmacodynamic or exposure-response relationship for the drug dronabinol. |
| popPK | Patar_2023 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PD | Patar_2023 | not_relevant | 0 | 0 | The paper is an in-silico investigation of dronabinol against flaviviruses and does not report any pharmacodynamic or exposure-response data. |
| popPK | Rabinak_2026 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for PTSD treatment that uses dronabinol as an intervention but does not report pharmacokinetic parameters or disposition data. |
| popPK | Schoedel_2012 | irrelevant | 0 | 0 | The study is a behavioral/abuse potential trial where dronabinol is used only as an active comparator, and no pharmacokinetic parameters are reported. |
| popPK | Schoedel_2018 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Schoedel_2018 | not_relevant | 0 | 0 | The paper focuses on cannabidiol (CBD) and does not report pharmacodynamic or exposure-response data for dronabinol. |
| popPK | Wolkowicz_2024 | irrelevant | 0 | 0 | The study investigates attentional bias and pain effects, not pharmacokinetic parameters, and no PK data are reported. |
| popPK | Wong_2012 | irrelevant | 0 | 0 | The study is a pharmacodynamic and pharmacogenetic trial assessing gut transit, with no pharmacokinetic parameters (CL, V, ka, etc.) reported for dronabinol. |
| PD | Wong_2012 | not_relevant | 2 | 1 | The study reports a lack of significant dose-response effect on gut transit and focuses on pharmacogenetics, providing no numeric PD parameters or concentration-effect curves. |
| popPK | de_2014 | irrelevant | 2 | 0 | The paper is a review focusing on mechanistic considerations and clinical efficacy in chronic pain, and the provided evidence contains no quantitative pharmacokinetic parameter values for dronabinol. |
| PD | de_2014 | not_relevant | 2 | 0 | The paper is a review discussing mechanistic considerations and clinical trials but does not present original data or specific numeric PD parameters (e.g., EC50, Emax) for dronabinol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>

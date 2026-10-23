<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;methoxy polyethylene glycol-epoetin beta&quot;}]"></div>

# methoxy polyethylene glycol-epoetin beta

- **generic name:** methoxy polyethylene glycol-epoetin beta
- **ATC codes:** `B03XA03`
- **DrugBank:** [DB09107](https://go.drugbank.com/drugs/DB09107) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Methoxy polyethylene glycol-epoetin beta is a long-acting erythropoietin-type medicine used to treat anemia in people with chronic kidney disease. It is an approved antianemic medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6011913](https://www.wikidata.org/wiki/Q6011913) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-05 21:29 | 1:46 | 0/0/0 | 0/0/0 | 0/0/0 | 67,585/1,447 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 3/10 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 39 matched, 36 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chanu_2020.pdf` | Chanu P et al., Model-based approach for methoxy polyet…, British journal of clinical… (2020) | popPK | 9 | [10.1111/bcp.14186](https://doi.org/10.1111/bcp.14186) | [31770451](https://pubmed.ncbi.nlm.nih.gov/31770451) | The paper describes a population PK/PD model for methoxy polyethylene glycol-epoetin beta, but specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract text. |
| `Mouksassi_2025.pdf` | Mouksassi S et al., Pharmacokinetic and pharmacodynamic mod…, British journal of clinical… (2025) | pd | 5 | [10.1002/bcp.70165](https://doi.org/10.1002/bcp.70165) | [40662229](https://www.ncbi.nlm.nih.gov/pubmed/40662229) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Reynaldo-Fernandez_2026.pdf` | Reynaldo-Fernandez G et al., Forecasting the Biological Effect of PE…, Pharmaceutical research (2026) | pd | 5 | [10.1007/s11095-025-04013-z](https://doi.org/10.1007/s11095-025-04013-z) | [41540295](https://www.ncbi.nlm.nih.gov/pubmed/41540295) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-05T21:29:08.380506+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beard_2009 | irrelevant | 0 | 0 | The paper is a review of CellML metadata standards and contains no pharmacokinetic data for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Beard_2009 | not_relevant | 0 | 0 | The paper discusses CellML metadata standards and tools for biological modeling and contains no pharmacodynamic or exposure-response data for methoxy polyethylene glycol-epoetin beta. |
| popPK | Bohnen_2026 | irrelevant | 0 | 0 | The study investigates tributyrin in Parkinson's disease and does not involve methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Bohnen_2026 | not_relevant | 0 | 0 | The paper studies tributyrin (a butyrate prodrug) in Parkinson's disease, not methoxy polyethylene glycol-epoetin beta, and does not report any exposure-response or dose-response pharmacodynamic parameters for the target drug. |
| popPK | Byun_2021 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of poseltinib (a BTK inhibitor), not methoxy_polyethylene_glycol_epoetin_beta. |
| popPK | Chanu_2020 | relevant | 9 | 2 | The paper describes a population PK/PD model for methoxy polyethylene glycol-epoetin beta, but specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract text. |
| popPK | Choi_2026 | irrelevant | 0 | 0 | The paper is a narrative review of pharmacometrics and real-world data integration in special populations and does not report specific quantitative PK parameters for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Choi_2026 | not_relevant | 2 | 0 | The paper is a narrative review that qualitatively mentions the use of PK/PD models for methoxy polyethylene glycol-epoetin beta to support pediatric dosing, but it does not report or provide access to any specific numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | De_2026 | irrelevant | 0 | 0 | The paper investigates calcium signaling in mouse cochleae under anesthesia and does not involve methoxy_polyethylene_glycol_epoetin_beta or pharmacokinetic parameters. |
| PD | De_2026 | not_relevant | 0 | 0 | The paper investigates the effects of anaesthetic regimes on cochlear calcium signaling in mice and does not involve methoxy polyethylene glycol-epoetin beta or any pharmacodynamic modeling of that drug. |
| popPK | Del_2008 | irrelevant | 0 | 0 | The paper is a review discussing CERA (methoxy_polyethylene_glycol_epoetin_beta) qualitatively without reporting any quantitative pharmacokinetic parameter values. |
| PD | Del_2008 | not_relevant | 1 | 0 | The text is a qualitative review of the drug's mechanism and clinical efficacy without reporting any specific numeric pharmacodynamic parameters, concentration-effect curves, or PK/PD modeling results. |
| popPK | Evans_2026 | irrelevant | 0 | 0 | The paper is a review of cardiac glycosides (NKA inhibitors) and does not mention methoxy_polyethylene_glycol_epoetin_beta or report any pharmacokinetic parameters for it. |
| PD | Evans_2026 | not_relevant | 0 | 0 | The paper is a critical analysis of clinical trials for repurposing Na+-K+-ATPase inhibitors (cardiac glycosides) and does not contain any pharmacokinetic or pharmacodynamic modeling, nor does it report numeric PD parameters for methoxy polyethylene glycol-epoetin beta. |
| PD | Fishbane_2007 | not_relevant | 3 | 2 | The study reports PK parameters and qualitative PD outcomes (reticulocyte response) but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect model. |
| popPK | Fujii_2023 | irrelevant | 0 | 0 | The study is a clinical outcome analysis of erythropoietin resistance index (ERI) and cardiovascular events, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Kafeel_2025 | irrelevant | 0 | 0 | The paper is a review on adiponectin and cancer metabolism, unrelated to the pharmacokinetics of methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Kafeel_2025 | not_relevant | 0 | 0 | The paper is a review on adiponectin and its receptor agonist AdipoRon in cancer metabolism; it does not mention methoxy polyethylene glycol-epoetin beta or report any PD parameters for it. |
| popPK | Locatelli_2020 | irrelevant | 0 | 0 | The paper is a review discussing clinical outcomes and safety of ESAs, containing no pharmacokinetic parameters or quantitative disposition data for methoxy polyethylene glycol-epoetin beta. |
| PD | Locatelli_2020 | not_relevant | 1 | 0 | The text is a narrative review discussing clinical outcomes and safety profiles of ESAs, mentioning methoxy polyethylene glycol-epoetin beta only in the context of a randomized trial with no significant differences, without providing any numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Mesgarpour_2017 | irrelevant | 0 | 0 | The paper is a systematic review of clinical outcomes (harm/mortality) for erythropoiesis-stimulating agents in critically ill patients and does not report pharmacokinetic parameters for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Mesgarpour_2017 | not_relevant | 0 | 0 | The paper is a systematic review of clinical outcomes (mortality, adverse events) and does not report any pharmacokinetic or pharmacodynamic modeling or numeric PD parameters. |
| popPK | Mouksassi_2025 | irrelevant | 0 | 0 | no_text gate: only 162 chars of text extracted (&lt; 400) |
| PD | Mouksassi_2025 | not_relevant | 0 | 0 | The paper focuses on continuous erythropoiesis receptor activator (CERA), not methoxy polyethylene glycol-epoetin beta. |
| popPK | Parrot_2026 | irrelevant | 0 | 0 | The paper is a review on nanoparticle pharmacokinetic modeling and does not report any quantitative PK parameters for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Parrot_2026 | not_relevant | 0 | 0 | The text is a review on nanoparticle pharmacokinetic modeling and does not contain any data, analysis, or parameters for methoxy polyethylene glycol-epoetin beta. |
| popPK | Pérez-Ruixo_2013 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (hemoglobin levels and dosing) for various ESAs, not a pharmacokinetic study reporting disposition parameters for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Pérez-Ruixo_2013 | not_relevant | 0 | 0 | The paper is a meta-analysis comparing mean haemoglobin and dose variability across different erythropoiesis-stimulating agents, not a pharmacodynamic modeling study deriving exposure-response parameters for methoxy polyethylene glycol-epoetin beta. |
| popPK | Reynaldo-Fernandez_2026 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PD | Reynaldo-Fernandez_2026 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or any data to verify the presence of numeric PD parameters or exposure-response relationships. |
| popPK | Reynaldo-Fernández_2018 | irrelevant | 0 | 0 | The study investigates pegylated erythropoietin (EPO) formulations in rabbits, not methoxy_polyethylene_glycol_epoetin_beta. |
| popPK | Reynaldo_2018 | irrelevant | 0 | 0 | The study evaluates novel Cuban PEGylated rHuEPOs and Mircera (methoxy polyethylene glycol epoetin beta) only as a comparator, not as the primary subject drug for which specific PK parameters are being extracted. |
| PD | Reynaldo_2018 | not_relevant | 3 | 2 | The study reports qualitative comparisons of pharmacodynamic effects (reticulocytes, hemoglobin) and PK parameters (half-life) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model. |
| popPK | Rieger_2016 | irrelevant | 0 | 0 | The study is a retrospective clinical evaluation of dose conversion factors during a drug switch, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Rieger_2016 | not_relevant | 1 | 0 | The study is a retrospective analysis of dose conversion factors during a drug switch, explicitly stating that a true dose-response ratio requires a prospective study, and it does not report any numeric PD parameters or concentration-effect relationships. |
| popPK | Sabatini_2026 | irrelevant | 0 | 0 | The paper is an in vitro materials science study on zirconia dental ceramics and contains no pharmacokinetic data for methoxy_polyethylene_glycol_epoetin_beta. |
| popPK | Shinozuka_2023 | irrelevant | 0 | 0 | The paper is a review of serotonergic psychedelics (LSD, psilocybin, DMT) and does not study methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Shinozuka_2023 | not_relevant | 0 | 0 | The paper is a meta-analysis of psychedelic effects (DMT, LSD, psilocybin) and does not mention methoxy polyethylene glycol-epoetin beta or report any PD parameters for it. |
| popPK | Souqiyyeh_2009 | irrelevant | 0 | 0 | The paper is a survey of physician attitudes regarding anemia management in CKD and does not report any pharmacokinetic parameters for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Souqiyyeh_2009 | not_relevant | 0 | 0 | The paper is a survey of physician attitudes and contains no pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |
| popPK | Villa_2010 | irrelevant | 0 | 0 | The paper is a general review of erythropoiesis-stimulating agents and does not report specific quantitative pharmacokinetic parameters for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Villa_2010 | not_relevant | 1 | 0 | The text is a qualitative review discussing the general pharmacodynamics and clinical outcomes of ESAs without providing specific numeric PD parameters or concentration-effect data for methoxy polyethylene glycol-epoetin beta. |
| PGx | Wang_2013 | not_relevant | 0 | 0 | The paper investigates the effect of alcohol and SMS2 genotype on neural proliferation and does not involve the drug methoxy_polyethylene_glycol_epoetin_beta. |
| popPK | Yan_2013 | irrelevant | 0 | 0 | The study focuses on erythropoietin (EPO), darbepoetin, and CERA, not methoxy_polyethylene_glycol_epoetin_beta. |
| popPK | Zhai_2025 | irrelevant | 0 | 0 | The paper studies levodopa-induced dyskinesia in a mouse model of Parkinson's disease and does not involve methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Zhai_2025 | not_relevant | 0 | 0 | The paper investigates the neurophysiological mechanisms of levodopa-induced dyskinesia in a mouse model and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for methoxy polyethylene glycol-epoetin beta. |
| popPK | unknown_2010 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | unknown_2010 | not_relevant | 0 | 0 | The provided text is only a header for a poster session and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2011 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | unknown_2011 | not_relevant | 0 | 0 | The provided text is only the title of a conference abstract collection and contains no specific data, models, or parameters for methoxy polyethylene glycol-epoetin beta. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>

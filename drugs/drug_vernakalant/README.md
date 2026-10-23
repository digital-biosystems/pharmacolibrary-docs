<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;vernakalant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vernakalant_Mao2012_estimate&quot;,&quot;label&quot;:&quot;Mao_2012_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vernakalant/Vernakalant_Mao2012_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# vernakalant

- **generic name:** vernakalant
- **ATC codes:** `C01BG11`
- **DrugBank:** [DB06217](https://go.drugbank.com/drugs/DB06217) · **PubChem:** [CID 9930049](https://pubchem.ncbi.nlm.nih.gov/compound/9930049)
- **molar mass:** 349.471 g/mol (C20H31NO4) — DrugBank
- **groups:** approved

## About

Vernakalant is an antiarrhythmic drug used to treat atrial fibrillation. It is an approved medicine, available in some countries, mainly for hospital use in restoring normal heart rhythm.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q665725](https://www.wikidata.org/wiki/Q665725) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vernakalant | parent | 349.471 | C20H31NO4 | DrugBank | [9930049](https://pubchem.ncbi.nlm.nih.gov/compound/9930049) | Mao_2012 |

## Start here

> **Mao_2012_estimate** — <span class="pk-badge pk-badge--orange">Needs review</span> patients with atrial fibrillation or atrial flutter and healthy volunteers, n = 605. [Run it in the simulator](drugs/drug_vernakalant/Vernakalant_Mao2012_estimate.md?tab=Simulation) · [record](drugs/drug_vernakalant/Vernakalant_Mao2012_estimate.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 14 ‡ | L/h | 0.20 L/h/kg | patients with atrial fibrillation or atrial flutter and healthy volunteers | 605 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Mao_2012_estimate](drugs/drug_vernakalant/Vernakalant_Mao2012_estimate.md) |
| V | V1 | 35.7 ‡ | L | 0.51 L/kg | patients with atrial fibrillation or atrial flutter and healthy volunteers | 605 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Mao_2012_estimate](drugs/drug_vernakalant/Vernakalant_Mao2012_estimate.md) |
| t½ | t1/2z | 3.45 | h | 3.45 h | patients with atrial fibrillation or atrial flutter and healthy volunteers | 605 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Mao_2012_estimate](drugs/drug_vernakalant/Vernakalant_Mao2012_estimate.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>blocking: T1_cmax</sub> | [Mao_2012_estimate](drugs/drug_vernakalant/Vernakalant_Mao2012_estimate.md) | ▶ model + simulator | 2-compartment, IV | 7 | Mao ZL et al., Population pharmacokinetics of vernakal…, Journal of clinical pharmac… (2012) | [10.1177/0091270011408425](https://doi.org/10.1177/0091270011408425) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub> | [↳ parameter_estimate_se](drugs/drug_vernakalant/Vernakalant_Mao2012_parameter_estimate_se.md) | — | 1-compartment (no model) | 1 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Mao_2011_QTcF](drugs/drug_vernakalant/pd_Mao_2011_QTcF.md) | QT interval prolongation corrected for heart rate by Fridericia's formula ← vernakalant · direct sigmoid Emax (Hill) effect | model (no simulator) | Mao Z et al., Population pharmacokinetic-pharmacodyna…, Journal of pharmacokinetics… (2011) | [10.1007/s10928-011-9207-3](https://doi.org/10.1007/s10928-011-9207-3) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Mao_2011_SBP](drugs/drug_vernakalant/pd_Mao_2011_SBP.md) | systolic blood pressure ← vernakalant · direct sigmoid Emax (Hill) effect | model (no simulator) | Mao Z et al., Population pharmacokinetic-pharmacodyna…, Journal of pharmacokinetics… (2011) | [10.1007/s10928-011-9207-3](https://doi.org/10.1007/s10928-011-9207-3) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q22` · CL | metabolism | [Mao_2009](drugs/drug_vernakalant/pgx_Mao_2009_CYP2D6_Q22.md) | Mao ZL et al., Pharmacokinetics of novel atrial-select…, Journal of clinical pharmac… (2009) | [10.1177/0091270008325148](https://doi.org/10.1177/0091270008325148) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q22` · CL | metabolism | [Mao_2012](drugs/drug_vernakalant/pgx_Mao_2012_CYP2D6_Q22.md) | Mao ZL et al., Population pharmacokinetics of vernakal…, Journal of clinical pharmac… (2012) | [10.1177/0091270011408425](https://doi.org/10.1177/0091270011408425) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 00:36 | 16:03 | 0/1/1 | 0/0/1 | 0/0/2 | 144,649/54,731 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 0/2 | 0 |

## Coverage

- **PubMed hits:** 23 matched, 23 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Simó-Vicens_2017.pdf` | Simó-Vicens R et al., Effect of antiarrhythmic drugs on small…, European journal of pharmac… (2017) | pd | 5 | [10.1016/j.ejphar.2017.03.039](https://doi.org/10.1016/j.ejphar.2017.03.039) | [28322838](https://www.ncbi.nlm.nih.gov/pubmed/28322838) | metadata signals extractable PD data (IC50) |
| `Eldstrom_2009.pdf` | Eldstrom J et al., Modeling of high-affinity binding of th…, Journal of molecular graphi… (2009) | pd | 4 | [10.1016/j.jmgm.2009.07.005](https://doi.org/10.1016/j.jmgm.2009.07.005) | [19713139](https://www.ncbi.nlm.nih.gov/pubmed/19713139) | metadata signals extractable PD data (IC50) |
| `Seyler_2014.pdf` | Seyler C et al., Vernakalant activates human cardiac K(2…, Biochemical and biophysical… (2014) | pd | 4 | [10.1016/j.bbrc.2014.07.133](https://doi.org/10.1016/j.bbrc.2014.07.133) | [25108155](https://www.ncbi.nlm.nih.gov/pubmed/25108155) | metadata signals extractable PD data (EC50) |
| `Sutanto_2019.pdf` | Sutanto H et al., Maastricht antiarrhythmic drug evaluato…, Pharmacological research (2019) | pd | 4 | [10.1016/j.phrs.2019.104444](https://doi.org/10.1016/j.phrs.2019.104444) | [31493513](https://www.ncbi.nlm.nih.gov/pubmed/31493513) | metadata signals extractable PD data (IC50) |
| `Wettwer_2013.pdf` | Wettwer E et al., The new antiarrhythmic drug vernakalant…, Cardiovascular research (2013) | pd | 4 | [10.1093/cvr/cvt006](https://doi.org/10.1093/cvr/cvt006) | [23341576](https://www.ncbi.nlm.nih.gov/pubmed/23341576) | metadata signals extractable PD data (IC50) |
| `Mao_2011.pdf` | Mao ZL et al., Disposition and mass balance of [14C]ve…, Drug metabolism letters (2011) | pgx | 8 | [10.2174/187231211795305249](https://doi.org/10.2174/187231211795305249) | [21457140](https://www.ncbi.nlm.nih.gov/pubmed/21457140) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-09T00:31:54.842658+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheng_2010 | irrelevant | 0 | 0 | The paper is a review of antiarrhythmic and anticoagulant agents that discusses vernakalant qualitatively but does not report any quantitative pharmacokinetic parameters. |
| PD | Cheng_2010 | not_relevant | 1 | 0 | The text is a review summary that qualitatively describes vernakalant's mechanism and efficacy but does not provide any numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Eldstrom_2007 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of channel binding and does not report pharmacokinetic parameters. |
| popPK | Eldstrom_2009 | irrelevant | 0 | 0 | The paper focuses on in-vitro binding to Kv1.5 channels and does not report pharmacokinetic disposition parameters for vernakalant. |
| popPK | Mao_2011 | irrelevant | 2 | 0 | The paper reports population PK/PD parameters (EC50, Emax) for pharmacodynamic endpoints (QTcF, SBP) rather than quantitative disposition parameters (CL, V, ka) for vernakalant. |
| PGx | Mao_2011_2 | not_relevant | 0 | 0 | The paper describes the disposition and mass balance of vernakalant in healthy volunteers but does not report any pharmacogenomic effects or gene variant analyses. |
| popPK | Seoane_2015 | irrelevant | 2 | 0 | The paper is a review article analyzing vernakalant's PK/PD, but the provided evidence contains no original quantitative disposition parameters or numeric values. |
| PD | Seoane_2015 | not_relevant | 2 | 1 | The text is a review summary that mentions the aim to analyze PK/PD but does not provide specific numeric PD parameters or exposure-response data in the provided excerpt. |
| popPK | Seyler_2014 | irrelevant | 0 | 0 | no_text gate: only 70 chars of text extracted (&lt; 400) |
| PD | Seyler_2014 | not_relevant | 0 | 0 | The paper describes the molecular mechanism of action (activation of K2P17.1 channels) but does not report pharmacokinetic data, exposure-response relationships, or numeric PD parameters (e.g., EC50, Emax) for vernakalant in a physiological or clinical context. |
| popPK | Simó-Vicens_2017 | irrelevant | 0 | 0 | The paper title indicates a mechanistic study on ion channels, not a pharmacokinetic study reporting quantitative disposition parameters for vernakalant. |
| PD | Simó-Vicens_2017 | not_relevant | 0 | 0 | The paper focuses on the electrophysiological effects of antiarrhythmic drugs on ion channels and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for vernakalant. |
| popPK | Sutanto_2019 | irrelevant | 0 | 0 | The paper describes a computational tool for antiarrhythmic drugs and does not report original quantitative pharmacokinetic parameters for vernakalant. |
| PD | Sutanto_2019 | not_relevant | 0 | 0 | The paper describes a computational tool (MANTA) for evaluating antiarrhythmic drugs but does not report specific pharmacodynamic or exposure-response data for vernakalant. |
| popPK | Tikhonov_2014 | irrelevant | 0 | 0 | The paper describes in silico homology modeling of ligand binding to a potassium channel, not a pharmacokinetic study. |
| PD | Tikhonov_2014 | not_relevant | 0 | 0 | The paper focuses on homology modeling and molecular docking of vernakalant in the Kv1.5 channel, providing no pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Wettwer_2013 | irrelevant | 0 | 0 | The paper is an ex vivo electrophysiology study of human atrial tissue, not a pharmacokinetic study reporting disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-09 00:20 UTC</sub>

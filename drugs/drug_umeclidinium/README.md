<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;umeclidinium&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Umeclidinium_Yang2017_reference&quot;,&quot;label&quot;:&quot;Yang_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_umeclidinium/Umeclidinium_Yang2017_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# umeclidinium

- **generic name:** umeclidinium
- **ATC codes:** `R03AL03`, `R03AL08`, `R03BB07`
- **DrugBank:** [DB09076](https://go.drugbank.com/drugs/DB09076) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Umeclidinium is an inhaled anticholinergic medicine used to treat chronic obstructive pulmonary disease, often in combination with other inhaled drugs. It is authorised in the European Union and widely used as a maintenance inhalation treatment for COPD.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17125410](https://www.wikidata.org/wiki/Q17125410) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| umeclidinium | parent | 428.596 | C29H34NO2+ | PubChem | [11519070](https://pubchem.ncbi.nlm.nih.gov/compound/11519070) | Goyal_2014, Mehta_2018, Mehta_2020, Pene_2016, Yang_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 12:42 | 0:07 | 0/4/6 | 3/1/0 | 0/0/0 | 2,235/297 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 0/14 | 14/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Mehta_2018_historical_model_parameter_estimates](drugs/drug_umeclidinium/Umeclidinium_Mehta2018_historical_model_parameter_estimates.md) | held back | 1-compartment, oral | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Mehta_2018_historical_model_parameter_estimates_rse](drugs/drug_umeclidinium/Umeclidinium_Mehta2018_historical_model_parameter_estimates.md) | held back | 1-compartment, oral | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Mehta_2018_model_parameter_estimates_with_combined_dataset](drugs/drug_umeclidinium/Umeclidinium_Mehta2018_model_parameter_estimates_with_combin.md) | held back | 1-compartment, oral | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Mehta_2018_model_parameter_estimates_with_combined_dataset_rse](drugs/drug_umeclidinium/Umeclidinium_Mehta2018_model_parameter_estimates_with_combin.md) | held back | 1-compartment, oral | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.385). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Mehta_2020_reference](drugs/drug_umeclidinium/Umeclidinium_Mehta2020_reference.md) | — | 1-compartment (no model) | 4 | Mehta R et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00794-w](https://doi.org/10.1007/s40262-019-00794-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Yang_2017_reference](drugs/drug_umeclidinium/Umeclidinium_Yang2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Yang S et al., Population Pharmacokinetics Modeling of…, European journal of drug me… (2017) | [10.1007/s13318-016-0331-8](https://doi.org/10.1007/s13318-016-0331-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.273). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Goyal_2014_reference](drugs/drug_umeclidinium/Umeclidinium_Goyal2014_reference.md) | — | 1-compartment (no model) | 2 | Goyal N et al., Population pharmacokinetics of inhaled…, Clinical pharmacokinetics (2014) | [10.1007/s40262-014-0143-4](https://doi.org/10.1007/s40262-014-0143-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Mehta_2018_combined_model_ln_estimates](drugs/drug_umeclidinium/Umeclidinium_Mehta2018_combined_model_ln_estimates.md) | — | 1-compartment (no model) | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Mehta_2018_historical_model_ln_estimates](drugs/drug_umeclidinium/Umeclidinium_Mehta2018_historical_model_ln_estimates.md) | — | 1-compartment (no model) | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Pene_2016_reference](drugs/drug_umeclidinium/Umeclidinium_Pene2016_reference.md) | — | 2-compartment (no model) | 7 | Pene Dumitrescu T et al., A Novel Method for Studying the Pharmac…, Clinical and translational… (2016) | [10.1111/cts.12406](https://doi.org/10.1111/cts.12406) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span> | [Calzetta_2017_relaxation](drugs/drug_umeclidinium/pd_Calzetta_2017_relaxation.md) | relaxation of isolated bronchi (cholinergic contractile tone at 10Hz EFS) ← umeclidinium · direct sigmoid Emax (Hill) effect | — | Calzetta L et al., Pharmacological characterization of the…, European journal of pharmac… (2017) | [10.1016/j.ejphar.2017.07.026](https://doi.org/10.1016/j.ejphar.2017.07.026) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Donohue_2014_FEV1](drugs/drug_umeclidinium/pd_Donohue_2014_FEV1.md) | trough forced expiratory volume in one second (FEV1) ← umeclidinium · direct Emax (saturable) effect | — | Donohue JF et al., Dose response of umeclidinium administe…, Journal of clinical pharmac… (2014) | [10.1002/jcph.340](https://doi.org/10.1002/jcph.340) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Yang_2015_FEV1](drugs/drug_umeclidinium/pd_Yang_2015_FEV1.md) | change from baseline trough FEV1 (day 15) ← umeclidinium · direct linear effect | — | Yang S et al., Dose-response modelling of umeclidinium…, European journal of clinica… (2015) | [10.1007/s00228-015-1894-z](https://doi.org/10.1007/s00228-015-1894-z) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> | [Gong_2022_trough_FEV1](drugs/drug_umeclidinium/pd_Gong_2022_trough_FEV1.md) | change from baseline in trough FEV1 ← umeclidinium (vilanterol/umeclidinium FDC) · direct Emax (saturable) effect | — | Gong Y et al., Quantitative analysis of efficacy and s…, Therapeutic advances in res… (2022) | [10.1177/17534666211066068](https://doi.org/10.1177/17534666211066068) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=umeclidinium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `SLC22A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A2` substrate | DrugBank actor |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 65 matched, 37 returned
- **screened:** 6  ·  **relevant:** 5
- **records:** 10  ·  extracted 0  ·  needs_review 6  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Goyal_2014.pdf` | Goyal N et al., Population pharmacokinetics of inhaled…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-014-0143-4](https://doi.org/10.1007/s40262-014-0143-4) | [24756395](https://pubmed.ncbi.nlm.nih.gov/24756395) | Population PK model for umeclidinium with numeric CL/F (218 L/h) and V2/F (1,160 L) reported directly in the abstract. |
| `Yang_2017.pdf` | Yang S et al., Population Pharmacokinetics Modeling of…, European journal of drug me… (2017) | popPK | 10 | [10.1007/s13318-016-0331-8](https://doi.org/10.1007/s13318-016-0331-8) | [27026339](https://pubmed.ncbi.nlm.nih.gov/27026339) | Population PK model for umeclidinium with numeric CL/F (257 L/h) and Vc/F (804 L) reported directly in the abstract. |
| `Yang_2021.pdf` | Yang S et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2021) | popPK | 10 | [10.1007/s40262-021-00988-1](https://doi.org/10.1007/s40262-021-00988-1) | [33598874](https://pubmed.ncbi.nlm.nih.gov/33598874) | Population PK model for umeclidinium in humans, but numeric parameter values (CL/V, estimates) are not in the abstract text, likely in tables/supplementary not provided. |
| `Calzetta_2017.pdf` | Calzetta L et al., Pharmacological characterization of the…, European journal of pharmac… (2017) | pd | 4 | [10.1016/j.ejphar.2017.07.026](https://doi.org/10.1016/j.ejphar.2017.07.026) | [28716723](https://www.ncbi.nlm.nih.gov/pubmed/28716723) | metadata signals extractable PD data (Emax) |
| `Cahn_2013.pdf` | Cahn A et al., Safety, tolerability and pharmacokineti…, Clinical drug investigation (2013) | pgx | 8 | [10.1007/s40261-013-0109-6](https://doi.org/10.1007/s40261-013-0109-6) | [23881566](https://www.ncbi.nlm.nih.gov/pubmed/23881566) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Fricke-Galindo_2022.pdf` | Fricke-Galindo I et al., Current pharmacogenomic recommendations…, Expert review of respirator… (2022) | pgx | 8 | [10.1080/17476348.2022.2149496](https://doi.org/10.1080/17476348.2022.2149496) | [36416606](https://www.ncbi.nlm.nih.gov/pubmed/36416606) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-07T15:13:49.629900+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bjermer_2021 | irrelevant | 0 | 0 | This is a COPD efficacy trial (EMAX) reporting lung function and symptom outcomes, with no pharmacokinetic parameters (CL, V, ka, half-life, or PK model) for umeclidinium. |
| popPK | Calzetta_2017 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of bronchorelaxant interaction in human isolated airways; no PK disposition parameters for umeclidinium. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | Clinical equivalence trial of a UMEC/VI generic reporting only FEV1/CAT/safety outcomes, with no PK disposition parameters for umeclidinium (PK/BE study only mentioned as prior work). |
| popPK | Crim_2019 | irrelevant | 0 | 0 | This is a batefenterol dose-finding efficacy study in COPD; umeclidinium is only an active comparator and no PK parameters (CL, V, ka, half-life) are reported anywhere in the evidence. |
| popPK | Donohue_2014 | irrelevant | 1 | 1 | This is a dose-response (PD Emax) analysis of FEV1, not a PK study; no disposition parameters (CL, V, ka) are reported, only an ED50. |
| PGx | Fricke-Galindo_2022 | not_relevant | 0 | 0 | Review of pharmacogenomic biomarkers in respiratory diseases; no specific PK/PD effect of a gene variant on umeclidinium reported. |
| popPK | Gong_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic (FEV1 efficacy) model-based meta-analysis of COPD trials, not a PK study; no disposition parameters (CL, V, ka, half-life) for umeclidinium are reported. |
| PGx | Hosking_2021 | not_relevant | 3 | 2 | Reports genetic associations with exacerbation rate (clinical outcome), not a PK or PD parameter of umeclidinium, and no effect sizes are provided. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | Clinical effectiveness study of UMEC/VI in COPD with no pharmacokinetic parameters (no CL, V, ka, half-life, or PK model) reported. |
| popPK | Kerwin_2020 | irrelevant | 0 | 0 | This is a clinical efficacy/symptom-outcome study of umeclidinium in COPD with no PK parameters (CL, V, ka, half-life, or PK model) reported anywhere. |
| popPK | Maltais_2020 | irrelevant | 0 | 0 | Clinical COPD efficacy trial of umeclidinium with no PK parameters (no CL, V, ka, half-life, or population-PK model) reported. |
| PGx | Mehta_2013 | not_relevant | 0 | 0 | This is a drug–drug interaction study (verapamil on umeclidinium PK); no gene variant/genotype/phenotype effects are reported. |
| popPK | Mehta_2016 | irrelevant | 3 | 2 | This is a concentration-QTc exposure-response analysis, not a PK disposition study; no CL/V/ka or population-PK parameters for umeclidinium are reported. |
| popPK | Vogelmeier_2020 | irrelevant | 0 | 0 | Clinical efficacy trial of umeclidinium/vilanterol in COPD with no PK parameters (no CL, V, ka, half-life, or population-PK model) reported. |
| popPK | Vogelmeier_2021 | irrelevant | 0 | 0 | This is a COPD efficacy (FEV1/symptom) post hoc analysis of umeclidinium; no PK parameters (CL, V, ka, half-life, or population-PK model) for umeclidinium are reported, and no numeric PK values appear. |
| popPK | Vogelmeier_2021_2 | irrelevant | 0 | 0 | This is a clinical outcomes (PRO/CII) post hoc analysis of the EMAX trial with no pharmacokinetic parameters for umeclidinium reported. |
| popPK | Yang_2021 | relevant | 10 | 3 | Population PK model for umeclidinium in humans, but numeric parameter values (CL/V, estimates) are not in the abstract text, likely in tables/supplementary not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:14 UTC</sub>

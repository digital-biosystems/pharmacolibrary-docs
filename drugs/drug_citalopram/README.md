<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;citalopram&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Citalopram_Friberg2006_reference&quot;,&quot;label&quot;:&quot;Friberg_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Friberg2006_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# citalopram

- **generic name:** citalopram
- **ATC codes:** `N06AB04`
- **DrugBank:** [DB00215](https://go.drugbank.com/drugs/DB00215) · **PubChem:** [CID 2771](https://pubchem.ncbi.nlm.nih.gov/compound/2771)
- **molar mass:** 324.3919 g/mol (C20H21FN2O) — DrugBank
- **groups:** approved, investigational

## About

Citalopram is an antidepressant of the selective serotonin reuptake inhibitor class used to treat depression and related mental and mood disorders, as well as anxiety conditions such as generalized anxiety disorder and obsessive-compulsive disorder. It is an approved medicine in widespread clinical use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409672](https://www.wikidata.org/wiki/Q409672) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| citalopram | parent | 324.392 | C20H21FN2O | DrugBank | [2771](https://pubchem.ncbi.nlm.nih.gov/compound/2771) | Friberg_2006 |
| R,S-citalopram and R,S-desmethylcitalopram (S-desmethylcitalopram (SDCIT)) | metabolite | 310.372 | C19H19FN2O | PubChem | [11255350](https://pubchem.ncbi.nlm.nih.gov/compound/11255350) | Akil_2016, Weisskopf_2020 |
| R-desmethylcitalopram (escitalopram (SCIT)) | metabolite | 324.399 | C20H21FN2O | PubChem | [146570](https://pubchem.ncbi.nlm.nih.gov/compound/146570) | Akil_2016, Weisskopf_2020 |
| S-desmethylcitalopram | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:16 | 4:35 | 1/1/3 | 4/0/0 | 0/0/0 | 261,296/21,932 | ollama / glm-5.3-flash | 7 | 4/3 | 6/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.857), gpt-oss:120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Friberg_2006_reference](drugs/drug_citalopram/Citalopram_Friberg2006_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Friberg LE et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2005.02546.x](https://doi.org/10.1111/j.1365-2125.2005.02546.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.062). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q67 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Weisskopf_2020_estimate](drugs/drug_citalopram/Citalopram_Weisskopf2020_estimate.md) | — | parent + metabolite (no model) | 6 | Weisskopf E et al., A population pharmacokinetic model for…, British journal of clinical… (2020) | [10.1111/bcp.14278](https://doi.org/10.1111/bcp.14278) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.077). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q67 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Weisskopf_2020_model_for_scit_sdcit_in_plasma](drugs/drug_citalopram/Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma.md) | — | parent + metabolite (no model) | 5 | Weisskopf E et al., A population pharmacokinetic model for…, British journal of clinical… (2020) | [10.1111/bcp.14278](https://doi.org/10.1111/bcp.14278) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.077). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q67 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Weisskopf_2020_model_for_scit_sdcit_in_plasma_breast_milk](drugs/drug_citalopram/Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma_brea.md) | — | parent + metabolite (no model) | 5 | Weisskopf E et al., A population pharmacokinetic model for…, British journal of clinical… (2020) | [10.1111/bcp.14278](https://doi.org/10.1111/bcp.14278) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.385), gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Akil_2016_reference](drugs/drug_citalopram/Citalopram_Akil2016_reference.md) | — | general linear (no model) | 4 (+2 cov.) | Akil A et al., A population pharmacokinetic model for…, Journal of pharmacokinetics… (2016) | [10.1007/s10928-015-9457-6](https://doi.org/10.1007/s10928-015-9457-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bareggi_2004_Y_BOCS](drugs/drug_citalopram/pd_Bareggi_2004_Y_BOCS.md) | Y-BOCS score (maximum change in Y-BOCS score) ← citalopram · direct sigmoid Emax (Hill) effect | — | Bareggi SR et al., Citalopram concentrations and response…, CNS drugs (2004) | [10.2165/00023210-200418050-00004](https://doi.org/10.2165/00023210-200418050-00004) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Friberg_2006_QTci](drugs/drug_citalopram/pd_Friberg_2006_QTci.md) | Heart-rate corrected QT interval ← citalopram · direct linear effect | model (no simulator) | Friberg LE et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2005.02546.x](https://doi.org/10.1111/j.1365-2125.2005.02546.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Isbister_2006_QT](drugs/drug_citalopram/pd_Isbister_2006_QT.md) | QT prolongation (QT,RR combinations above abnormal threshold) ← citalopram · stimulation effect | — | Isbister GK et al., Application of pharmacokinetic-pharmaco…, Intensive care medicine (2006) | [10.1007/s00134-006-0183-9](https://doi.org/10.1007/s00134-006-0183-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mégarbane_2008_QT](drugs/drug_citalopram/pd_M_garbane_2008_QT.md) | QT interval prolongation ← citalopram · direct sigmoid Emax (Hill) effect | — | Mégarbane B et al., Pharmacokinetic/pharmacodynamic modelin…, Expert opinion on drug meta… (2008) | [10.1517/17425255.4.5.569](https://doi.org/10.1517/17425255.4.5.569) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 75 matched, 20 returned
- **screened:** 5  ·  **relevant:** 3
- **records:** 5  ·  extracted 1  ·  needs_review 3  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wu_2020.pdf` | Wu X et al., Physiologically Based Pharmacokinetic A…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1002/jcph.1541](https://doi.org/10.1002/jcph.1541) | [31750550](https://pubmed.ncbi.nlm.nih.gov/31750550) | A PBPK/population-PK model of citalopram in humans is described, but the actual numeric parameter values (CL, V, etc.) are not present in the evidence, only prediction error ranges. |
| `Friberg_2005.pdf` | Friberg LE et al., The population pharmacokinetics of cita…, Journal of pharmacokinetics… (2005) | popPK | 8 | [10.1007/s10928-005-0022-6](https://doi.org/10.1007/s10928-005-0022-6) | [16307209](https://pubmed.ncbi.nlm.nih.gov/16307209) | Population PK model of citalopram in overdose patients, but abstract gives only effect sizes (72% CL increase, 22% F decrease), not the actual CL/V parameter values, which likely reside in tables/figures not provided. |
| `Yin_2006.pdf` | Yin OQ et al., Phenotype-genotype relationship and cli…, Journal of clinical psychop… (2006) | popPK | 7 | [10.1097/01.jcp.0000227355.54074.14](https://doi.org/10.1097/01.jcp.0000227355.54074.14) | [16855453](https://pubmed.ncbi.nlm.nih.gov/16855453) | Population PK model of citalopram with oral clearance reported as relative percentages (42.9%/33.3% lower in PMs), but absolute CL values and model parameters are not given in the evidence. |
| `Isbister_2006.pdf` | Isbister GK et al., Application of pharmacokinetic-pharmaco…, Intensive care medicine (2006) | popPK | 6 | [10.1007/s00134-006-0183-9](https://doi.org/10.1007/s00134-006-0183-9) | [16791669](https://pubmed.ncbi.nlm.nih.gov/16791669) | PKPD modelling of citalopram overdose, but no numeric PK parameter values appear in the evidence (they reside in the previously developed model not shown here). |

<sub>queue written 2026-10-06T22:12:11.421027+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2019 | irrelevant | 1 | 0 | Citalopram is only the prior failed treatment; the PK/PD modeling concerns venlafaxine, with no citalopram disposition parameters or numeric values reported. |
| popPK | Ahmed_2020 | irrelevant | 0 | 0 | Metabolomics study of acylcarnitines in depression; citalopram is only the treatment, no PK parameters reported. |
| popPK | Anderson_1996 | irrelevant | 0 | 0 | Citalopram is only used as a radioligand in a platelet uptake study; no PK parameters for citalopram are reported. |
| popPK | Balant_1996 | irrelevant | 1 | 0 | A review/discussion of metabolite monitoring in population PK/PD with no numeric citalopram disposition parameters reported. |
| popPK | Bareggi_2004 | irrelevant | 2 | 2 | This is a concentration-effect (PD) study reporting only an EC50, not PK disposition parameters like CL, V, or a population-PK model; no numeric PK parameters are present. |
| popPK | Baumann_1996 | irrelevant | 2 | 0 | This is a review of SSRI pharmacokinetics/pharmacodynamics with no original quantitative disposition parameters for citalopram reported in the evidence. |
| popPK | Blumenthal_2014 | irrelevant | 0 | 0 | This is an EHR weight-gain outcomes study with no PK parameters for citalopram; citalopram is only the reference comparator. |
| popPK | Bosch_2026 | irrelevant | 2 | 1 | TDM serum-concentration and metabolite-ratio comparison by sex/menopause; no clearance, volume, half-life, or population-PK model parameters are reported, only concentration estimates. |
| popPK | Friberg_2005 | relevant | 8 | 3 | Population PK model of citalopram in overdose patients, but abstract gives only effect sizes (72% CL increase, 22% F decrease), not the actual CL/V parameter values, which likely reside in tables/figures not provided. |
| popPK | Gatti_2021 | irrelevant | 2 | 1 | Pharmacovigilance PK/PD correlation study; citalopram's PK values (Cmax, AUC, VD) are only in Supplementary Table 3, not provided in the evidence. |
| popPK | Ho_2016 | irrelevant | 4 | 2 | This is a pharmacodynamic exposure–response study using AUCs from a prior population PK analysis; no PK parameters (CL, V, ka) are reported, and the PK values live in another publication. |
| popPK | Isbister_2006 | relevant | 6 | 2 | PKPD modelling of citalopram overdose, but no numeric PK parameter values appear in the evidence (they reside in the previously developed model not shown here). |
| popPK | Kilpinen_2023 | irrelevant | 0 | 0 | Environmental wastewater monitoring study; citalopram is only a measured micropollutant, no PK parameters reported. |
| popPK | Mégarbane_2008 | irrelevant | 3 | 1 | This is a review of PK/PD modeling in poisonings mentioning citalopram, but no numeric PK parameter values for citalopram are present in the evidence. |
| popPK | Velez_2015 | relevant | 9 | 4 | Population PK model code for citalopram and its metabolite in rats is present, but the actual THETA parameter estimates are not shown (only model structure; values likely in tables/figures not provided). |
| popPK | Wu_2020 | relevant | 10 | 3 | A PBPK/population-PK model of citalopram in humans is described, but the actual numeric parameter values (CL, V, etc.) are not present in the evidence, only prediction error ranges. |
| popPK | Yin_2006 | relevant | 7 | 4 | Population PK model of citalopram with oral clearance reported as relative percentages (42.9%/33.3% lower in PMs), but absolute CL values and model parameters are not given in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:12 UTC</sub>

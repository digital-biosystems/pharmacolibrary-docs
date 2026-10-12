<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;lasmiditan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Tsai_2021_lasmiditan_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lasmiditan/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# lasmiditan

- **generic name:** lasmiditan
- **ATC codes:** `N02CC08`
- **DrugBank:** [DB11732](https://go.drugbank.com/drugs/DB11732) · **PubChem:** [CID 11610526](https://pubchem.ncbi.nlm.nih.gov/compound/11610526)
- **molar mass:** 377.367 g/mol (C19H18F3N3O2) — DrugBank
- **groups:** approved, investigational

## About

Lasmiditan is an antimigraine drug used to treat migraine attacks. It is an approved selective serotonin agonist and has been authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6493750](https://www.wikidata.org/wiki/Q6493750) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lasmiditan | parent | 377.367 | C19H18F3N3O2 | DrugBank | [11610526](https://pubchem.ncbi.nlm.nih.gov/compound/11610526) | Tsai_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:28 | 2:39 | 0/0/2 | 0/0/0 | 0/0/0 | 198,842/14,931 | einfracz / qwen3.8-27b | 7 | 1/7 | 6/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.263). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T1_tmax</sub><br><sub>route_to: `scholar`</sub> | [Tsai_2021_lasmiditan_geometric_mean_cv](drugs/drug_lasmiditan/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv.md) | ▶ model + simulator | 1-compartment, oral | 6 | Tsai M et al., Pharmacokinetics, Safety, and Tolerabil…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00966-z](https://doi.org/10.1007/s40262-020-00966-z) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Tsai_2021_population_mean_see](drugs/drug_lasmiditan/Lasmiditan_Tsai2021_population_mean_see.md) | held back | 1-compartment, oral | 6 (+2 cov.) | Tsai M et al., Pharmacokinetics, Safety, and Tolerabil…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00966-z](https://doi.org/10.1007/s40262-020-00966-z) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 5  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Capi_2017 | not_relevant | 2 | 0 | The text is a review summary that qualitatively mentions pharmacodynamic features but does not provide specific numeric PD parameters, dose-response curves, or model fits. |
| PD | Curto_2020 | not_relevant | 1 | 0 | The text is a review article that qualitatively discusses lasmiditan's pharmacodynamics but does not report any numeric PD parameters, exposure-response curves, or dose-effect data. |
| popPK | Ferrari_2010 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for migraine treatment and does not report any pharmacokinetic parameters or disposition data for lasmiditan. |
| popPK | Färkkilä_2012 | irrelevant | 0 | 0 | The paper is a Phase 2 efficacy and safety study for migraine treatment and does not report any pharmacokinetic parameters or disposition data for lasmiditan. |
| popPK | Giner-Soriano_2025 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for migraine prevention that does not involve lasmiditan or report any pharmacokinetic parameters. |
| PD | Giner-Soriano_2025 | not_relevant | 0 | 0 | The paper is a study protocol for a clinical trial comparing migraine preventatives (propranolol, amitriptyline, flunarizine, topiramate) and does not involve lasmiditan or report any pharmacodynamic or exposure-response data. |
| popPK | Hasan_2022 | irrelevant | 0 | 0 | The paper is a network meta-analysis of paresthesia risk (safety/adverse events) and does not report any pharmacokinetic parameters for lasmiditan. |
| PD | Hasan_2022 | not_relevant | 3 | 2 | The paper is a network meta-analysis reporting relative risks and SUCRA scores for paresthesia; it does not provide a pharmacodynamic model (Emax, EC50, etc.) or a quantitative concentration-effect curve for lasmiditan. |
| popPK | Hougaard_2015 | irrelevant | 0 | 0 | The paper is a review of dose-response curves for efficacy and tolerability, not a pharmacokinetic study reporting quantitative disposition parameters for lasmiditan. |
| PD | Hougaard_2015 | not_relevant | 2 | 1 | The paper is a qualitative review of dose-response curves for antimigraine drugs, including lasmiditan, but does not provide specific numeric PD parameters or extractable concentration-effect data in the provided text. |
| PD | Ishii_2025 | not_relevant | 1 | 0 | The paper reports qualitative behavioral and pathological improvements at fixed doses but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| PD | Ishii_2025_2 | not_relevant | 2 | 0 | The paper reports a PK study and qualitative behavioral/biochemical effects of lasmiditan in mice, but it does not provide a concentration-effect or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) or a PK/PD model fit. |
| popPK | Jabir_2025 | irrelevant | 3 | 6 | The study reports basic PK parameters (Cmax, Tmax, AUC) for lasmiditan in rabbits, but lacks the compartmental model parameters (CL, V, ka) required for high-relevance population PK extraction. |
| PD | Lupi_2019 | not_relevant | 1 | 0 | The text is a review abstract that qualitatively discusses pharmacodynamics and pharmacokinetics of migraine treatments but does not report specific numeric PD parameters or exposure-response relationships for lasmiditan. |
| PD | Martinelli_2021 | not_relevant | 2 | 0 | The text is a narrative review summarizing general pharmacodynamic profiles and clinical efficacy without providing specific numeric PD parameters or exposure-response data. |
| PGx | Nwadiugwu_2025 | not_relevant | 0 | 0 | The paper evaluates Lasmiditan for Alzheimer's disease repurposing using molecular docking and dynamics, showing no pharmacogenomic effects on PK/PD parameters. |
| popPK | Popp_2022 | irrelevant | 0 | 0 | The paper is a Cochrane review on ivermectin for COVID-19 and does not contain any pharmacokinetic data for lasmiditan. |
| PD | Popp_2022 | not_relevant | 0 | 0 | The paper is a systematic review of ivermectin for COVID-19 and does not contain any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for lasmiditan. |
| popPK | Sakai_2021 | irrelevant | 0 | 0 | The paper is a Phase 2 efficacy and safety study for migraine treatment and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for lasmiditan. |
| PD | Szkutnik-Fiedler_2020 | not_relevant | 1 | 0 | The paper is a review of drug-drug interactions and safety; it mentions PK parameters and qualitative efficacy comparisons but does not report or provide numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for lasmiditan. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions involving CYP3A4 and transporters (P-gp/BCRP) but does not report any pharmacogenomic effects (gene variants/polymorphisms) on lasmiditan PK or PD. |
| PD | Tfelt-Hansen_2014 | not_relevant | 1 | 0 | The text is a qualitative review of 5-HT receptor agonists and does not provide specific numeric PD parameters or exposure-response data for lasmiditan. |
| popPK | Tfelt-Hansen_2019 | irrelevant | 1 | 0 | This is a review of therapeutic efficacy and delay of effect, not a pharmacokinetic study, and it does not report any PK parameters (CL, V, etc.) for lasmiditan. |
| PD | Tfelt-Hansen_2019 | not_relevant | 2 | 1 | The paper is a review that qualitatively discusses the delay of effect for lasmiditan (200 mg) by comparing time to maximum effect (Emax) with Tmax, but it does not provide a concentration-effect curve, dose-response model, or numeric PD parameters (like EC50 or slope) for lasmiditan. |
| popPK | Tfelt-Hansen_2021 | irrelevant | 0 | 0 | This is a narrative review of migraine treatments and does not report original quantitative pharmacokinetic parameters for lasmiditan. |
| PD | Tfelt-Hansen_2021 | not_relevant | 1 | 0 | The text is a review of acute migraine drugs (triptans, NSAIDs, gepants) and does not contain specific numeric PD parameters or exposure-response data for lasmiditan. |
| PD | Tsai_2021 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic (PK) modeling and safety/tolerability outcomes; it does not report any pharmacodynamic (PD) or exposure-response analysis with numeric PD parameters. |
| popPK | Wilbraham_2020 | relevant | 4 | 4 | The study reports non-compartmental PK parameters (Cmax, tmax, AUC) for lasmiditan in humans, which provides quantitative disposition data, though it lacks a full compartmental model or explicit clearance/volume estimates. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:26 UTC</sub>

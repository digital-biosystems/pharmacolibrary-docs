<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;lasmiditan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Tsai_2021_lasmiditan_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lasmiditan/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# lasmiditan

- **generic name:** lasmiditan
- **ATC codes:** `N02CC08`
- **DrugBank:** [DB11732](https://go.drugbank.com/drugs/DB11732) · **PubChem:** [CID 11610526](https://pubchem.ncbi.nlm.nih.gov/compound/11610526)
- **molar mass:** 377.367 g/mol (C19H18F3N3O2) — DrugBank
- **groups:** approved, investigational

## About

Lasmiditan is an antimigraine drug used to treat migraine attacks. It is an approved selective serotonin agonist and has been authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6493750](https://www.wikidata.org/wiki/Q6493750) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lasmiditan | parent | 377.367 | C19H18F3N3O2 | DrugBank | [11610526](https://pubchem.ncbi.nlm.nih.gov/compound/11610526) | Tsai_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:28 | 2:39 | 2/0/1 | 0/0/0 | 0/0/0 | 198,842/14,931 | einfracz / qwen3.8-27b | 7 | 1/7 | 6/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.952). The first reading is what the record holds.">cross-check: partial</span> | [Tsai_2021_lasmiditan_geometric_mean_cv](drugs/drug_lasmiditan/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv.md) | ▶ model + simulator | 1-compartment, oral | 6 | Tsai M et al., Pharmacokinetics, Safety, and Tolerabil…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00966-z](https://doi.org/10.1007/s40262-020-00966-z) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.952). The first reading is what the record holds.">cross-check: partial</span> | [Tsai_2021_population_mean_see](drugs/drug_lasmiditan/Lasmiditan_Tsai2021_population_mean_see.md) | held back | 1-compartment, oral | 6 (+2 cov.) | Tsai M et al., Pharmacokinetics, Safety, and Tolerabil…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00966-z](https://doi.org/10.1007/s40262-020-00966-z) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.952). The first reading is what the record holds.">cross-check: partial</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: not captured</sub> | [Tsai_2021_reference](drugs/drug_lasmiditan/Lasmiditan_Tsai2021_reference.md) | — | — (no model) | 0 | Tsai M et al., Pharmacokinetics, Safety, and Tolerabil…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00966-z](https://doi.org/10.1007/s40262-020-00966-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lasmiditan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `SLC22A1` inhibitor | DrugBank actor |
| excretion | kidney | `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HTR1F (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 5  ·  **relevant:** 1
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 1
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

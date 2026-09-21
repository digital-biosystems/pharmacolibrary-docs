<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;lasmiditan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lasmiditan_Tsai2021_reference&quot;,&quot;label&quot;:&quot;Tsai_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lasmiditan/Lasmiditan_Tsai2021_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# lasmiditan

- **generic name:** lasmiditan
- **ATC codes:** `N02CC08`
- **DrugBank:** [DB11732](https://go.drugbank.com/drugs/DB11732)
- **groups:** approved, investigational

## About

**Description.** Lasmiditan is an oral medication used in the termination of migraine headaches that was first approved for use in the United States in October 2019.[L9338,L9356] It was also approved by the European Commission on August 17, 2022.[L43997]

Traditionally, the triptan class of anti-migraine medications (e.g. [sumatriptan]) have seen preferential use in the acute treatment of migraines due to their relatively favourable efficacy and safety. Their use is not devoid of concerns, however, and their vasoconstrictive activity can lead to blood pressure lability and other cardiovascular side effects - for this reason, these medications are less suitable for use in patients with pre-existing cardiovascular disorders.[A187316] Triptans abort migraines via action at several serotonin receptors, including 5-HT<sub>1D</sub> and 5-HT<sub>1B</sub> receptors, and activity at the 5-HT<sub>1B</sub> receptor has been specifically implicated in their vasoconstrictive activity.[A187316,A187322]

Lasmiditan, in contrast, is a highly selective agonist of 5-HT<sub>1F</sub> receptors, carrying virtually no affinity for other receptors which appear to be largely responsible for the adverse effect profile of its predecessors - in other words, lasmiditan’s selectivity allows for the successful termination of migraines without causing vasoconstriction.[A187322,A187319] Selectivity for  5-HT<sub>1F</sub>, a lack of vasoconstrictive activity, and the ability to terminate migraines through neuronal inhibition has resulted in the creation of a new class of anti-migraine medications in which lasmiditan is the first and only member: the neurally-acting anti-migraine medications (NAAMAs).[A187322,A187307]

**Indication.** Lasmiditan is indicated for the acute treatment of migraine with or without aura in adults.[L9338,L43992]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 06:05 | 7:05 | 1/0/0 | 0/0/0 | 0/0/0 | 126,427/8,459 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 2/6 | 7/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Tsai_2021_reference](drugs/drug_lasmiditan/Lasmiditan_Tsai2021_reference.md) | Tsai M et al., Pharmacokinetics, Safety, and Tolerabil…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00966-z](https://doi.org/10.1007/s40262-020-00966-z) |

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jabir_2025.pdf` | Jabir SA et al., Preparation, In-vitro, Ex-vivo, and Pha…, Pharmaceutical nanotechnolo… (2025) | popPK | 8 | [10.2174/0122117385285009231222072303](https://doi.org/10.2174/0122117385285009231222072303) | [38173066](https://pubmed.ncbi.nlm.nih.gov/38173066) | The study reports quantitative PK parameters (Cmax, Tmax, AUC) for lasmiditan in rabbits, but lacks compartmental model parameters (CL, V, ka) and is an animal study. |

<sub>queue written 2026-09-21T05:59:30.095511+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Capi_2017 | not_relevant | 2 | 0 | The text is a review summary that qualitatively mentions pharmacodynamic features but does not provide specific numeric PD parameters, dose-response curves, or model fits. |
| PD | Curto_2020 | not_relevant | 1 | 0 | The text is a review article that qualitatively discusses lasmiditan's pharmacodynamics but does not report any numeric PD parameters, exposure-response curves, or dose-effect data. |
| popPK | Ferrari_2010 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for migraine treatment and does not report any pharmacokinetic parameters or disposition data for lasmiditan. |
| popPK | Färkkilä_2012 | irrelevant | 0 | 0 | The paper is a Phase 2 efficacy and safety study for migraine treatment and does not report any pharmacokinetic parameters or disposition data for lasmiditan. |
| popPK | Giner-Soriano_2025 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for migraine preventive treatments (propranolol, amitriptyline, flunarizine, topiramate) and does not report pharmacokinetic parameters for lasmiditan. |
| PD | Giner-Soriano_2025 | not_relevant | 0 | 0 | The paper is a study protocol for a clinical trial comparing migraine preventatives (propranolol, amitriptyline, flunarizine, topiramate) and does not involve lasmiditan or report any pharmacodynamic or exposure-response data. |
| popPK | Hasan_2022 | irrelevant | 0 | 0 | The paper is a network meta-analysis of paresthesia risk (safety/adverse events) and does not report any pharmacokinetic parameters for lasmiditan. |
| PD | Hasan_2022 | not_relevant | 3 | 2 | The paper is a network meta-analysis reporting relative risks and SUCRA scores for paresthesia; it does not provide a pharmacodynamic model (Emax, EC50, etc.) or a quantitative concentration-effect curve for lasmiditan. |
| popPK | Hougaard_2015 | irrelevant | 0 | 0 | The paper is a review of dose-response curves for efficacy and tolerability, not a pharmacokinetic study reporting quantitative disposition parameters for lasmiditan. |
| PD | Hougaard_2015 | not_relevant | 2 | 1 | The paper is a qualitative review of dose-response curves for antimigraine drugs, including lasmiditan, but does not provide specific numeric PD parameters or extractable concentration-effect data in the provided text. |
| PD | Ishii_2025 | not_relevant | 1 | 0 | The paper reports qualitative behavioral and pathological improvements at fixed doses but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| PD | Ishii_2025_2 | not_relevant | 2 | 0 | The paper reports a PK study and qualitative behavioral/biochemical effects of lasmiditan in mice, but it does not provide a concentration-effect or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) or a PK/PD model fit. |
| PD | Lupi_2019 | not_relevant | 1 | 0 | The text is a review abstract that qualitatively discusses pharmacodynamics and pharmacokinetics of migraine treatments but does not report specific numeric PD parameters or exposure-response relationships for lasmiditan. |
| PD | Martinelli_2021 | not_relevant | 2 | 0 | The text is a narrative review summarizing general pharmacodynamic profiles and clinical efficacy without providing specific numeric PD parameters or exposure-response data. |
| PGx | Nwadiugwu_2025 | not_relevant | 0 | 0 | The paper is an in silico drug repurposing study for Alzheimer's disease and does not report pharmacogenomic effects on lasmiditan's PK or PD parameters. |
| popPK | Popp_2022 | irrelevant | 0 | 0 | The paper is a systematic review of ivermectin for COVID-19 and does not contain any pharmacokinetic data for lasmiditan. |
| PD | Popp_2022 | not_relevant | 0 | 0 | The paper is a systematic review of ivermectin for COVID-19 and does not contain any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for lasmiditan. |
| popPK | Sakai_2021 | irrelevant | 0 | 0 | The paper is a Phase 2 efficacy and safety study for migraine treatment and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for lasmiditan. |
| PD | Szkutnik-Fiedler_2020 | not_relevant | 1 | 0 | The paper is a review of drug-drug interactions and safety; it mentions PK parameters and qualitative efficacy comparisons but does not report or provide numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for lasmiditan. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions and pharmacokinetics but does not report any pharmacogenomic effects (gene variants) on lasmiditan. |
| PD | Tfelt-Hansen_2014 | not_relevant | 1 | 0 | The text is a qualitative review of 5-HT receptor agonists and does not provide specific numeric PD parameters or exposure-response data for lasmiditan. |
| popPK | Tfelt-Hansen_2019 | irrelevant | 0 | 0 | The paper is a review of therapeutic efficacy and delay of effect, not a pharmacokinetic study, and it does not report quantitative PK parameters (CL, V, ka, etc.) for lasmiditan. |
| PD | Tfelt-Hansen_2019 | not_relevant | 2 | 1 | The paper is a review that qualitatively discusses the delay of effect for lasmiditan (200 mg) by comparing time to maximum effect (Emax) with Tmax, but it does not provide a concentration-effect curve, dose-response model, or numeric PD parameters (like EC50 or slope) for lasmiditan. |
| popPK | Tfelt-Hansen_2021 | irrelevant | 0 | 0 | The paper is a review of pharmacological strategies for migraine and does not report original quantitative pharmacokinetic parameters for lasmiditan. |
| PD | Tfelt-Hansen_2021 | not_relevant | 1 | 0 | The text is a review of acute migraine drugs (triptans, NSAIDs, gepants) and does not contain specific numeric PD parameters or exposure-response data for lasmiditan. |
| PD | Tsai_2021 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic (PK) modeling and safety/tolerability outcomes; it does not report any pharmacodynamic (PD) or exposure-response analysis with numeric PD parameters. |
| popPK | Wilbraham_2020 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (Cmax, AUC, t1/2) for lasmiditan, but lacks compartmental model parameters (CL, V, Q, ka) and is primarily an abuse potential study. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_lasmiditan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>

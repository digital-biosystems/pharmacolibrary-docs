<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;rifaximin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rifaximin_Francis2019_reference&quot;,&quot;label&quot;:&quot;Francis_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rifaximin/Rifaximin_Francis2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifaximin_Wang2021_reference&quot;,&quot;label&quot;:&quot;Wang_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rifaximin/Rifaximin_Wang2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# rifaximin

- **generic name:** rifaximin
- **ATC codes:** `A07AA11`, `D06AX11`
- **DrugBank:** [DB01220](https://go.drugbank.com/drugs/DB01220)
- **groups:** approved, investigational

## About

**Description.** Rifaximin is a semisynthetic, rifamycin-based non-systemic antibiotic, meaning that the drug will not pass the gastrointestinal wall into the circulation as is common for other types of orally administered antibiotics. It has multiple indications and is used in treatment of traveller's diarrhea caused by E. coli; reduction in risk of overt hepatic encephalopathy recurrence; as well as diarrhea-predominant irritable bowel syndrome (IBS-D) in adult women and men. It is marketed under the brand name Xifaxan by Salix Pharmaceuticals.

**Indication.** Rifaximin has multiple indications by the FDA: for the treatment of patients (≥12 years of age) with traveller's diarrhea caused by noninvasive strains of Escherichia coli; for the reduction of overt hepatic encephalopathy recurrence in patients ≥18 years of age; and in May 2015 it was approved for irritable bowel syndrome with diarrhea (IBS-D) treatment in adult men and women.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 03:09 | 9:29 | 1/1/0 | 2/0/0 | 0/0/0 | 208,834/15,179 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 3/11 | 14/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Francis_2019_reference](drugs/drug_rifaximin/Rifaximin_Francis2019_reference.md) | Francis J et al., A Population Pharmacokinetic Analysis S…, Antimicrobial agents and ch… (2019) | [10.1128/aac.01964-18](https://doi.org/10.1128/aac.01964-18) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Wang_2021_reference](drugs/drug_rifaximin/Rifaximin_Wang2021_reference.md) | Wang H et al., PK/PD Modeling to Assess Rifaximin Clin…, Frontiers in veterinary sci… (2021) | [10.3389/fvets.2021.651369](https://doi.org/10.3389/fvets.2021.651369) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.63). The first reading is what the record holds.">cross-check: disputed</span> | [Wang_2021](drugs/drug_rifaximin/pd_Wang_2021_log10CFU_gland.md) | Wang H et al., PK/PD Modeling to Assess Rifaximin Clin…, Frontiers in veterinary sci… (2021) | [10.3389/fvets.2021.651369](https://doi.org/10.3389/fvets.2021.651369) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Wang_2023](drugs/drug_rifaximin/pd_Wang_2023_bacterial_colony_count_reduction.md) | Wang H et al., A PK/PD model for the evaluation of cli…, BMC veterinary research (2023) | [10.1186/s12917-022-03564-2](https://doi.org/10.1186/s12917-022-03564-2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rifaximin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` inducer, `CYP2C8` inducer, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…, 96.62% of the administered radioactivity was recovered in feces almost exclusively as th…”</sub> | prose |
| excretion | kidney | <sub>“…xclusively as the unchanged drug and 0.32% was recovered in urine mostly as metabolites wi…”</sub> | prose |

<sub>Actors without a tissue in the table: NR1I2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 69 matched, 51 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rathi_2025.pdf` | Rathi A et al., FDA-approved drugs as PIM-1 kinase inhi…, International journal of bi… (2025) | pd | 4 | [10.1016/j.ijbiomac.2024.139107](https://doi.org/10.1016/j.ijbiomac.2024.139107) | [39722389](https://www.ncbi.nlm.nih.gov/pubmed/39722389) | metadata signals extractable PD data (IC50) |
| `Zhang_2024.pdf` | Zhang Y et al., The hapten rigidity improves antibody p…, Journal of hazardous materi… (2024) | pd | 4 | [10.1016/j.jhazmat.2024.133977](https://doi.org/10.1016/j.jhazmat.2024.133977) | [38492395](https://www.ncbi.nlm.nih.gov/pubmed/38492395) | metadata signals extractable PD data (IC50) |
| `Trapnell_2007.pdf` | Trapnell CB et al., Absence of effect of oral rifaximin on…, The Annals of pharmacothera… (2007) | pgx | 7 | [10.1345/aph.1H395](https://doi.org/10.1345/aph.1H395) | [17284510](https://www.ncbi.nlm.nih.gov/pubmed/17284510) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-22T03:01:09.693509+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Beneš_2016 | not_relevant | 1 | 0 | The text is a qualitative review comparing antibiotics for CDI and explicitly states that no compelling data are available for rifaximin, providing no numeric PD parameters or exposure-response relationships. |
| PGx | Blandizzi_2015 | not_relevant | 0 | 0 | The study investigates the impact of crystal polymorphism (physicochemical form) on pharmacokinetics, not the effect of a gene variant or genotype. |
| PD | Calanni_2014 | not_relevant | 2 | 1 | The paper is a narrative review summarizing pharmacological mechanisms and qualitative effects (e.g., MIC ranges, virulence reduction at sub-MIC levels) but does not report a specific exposure-response or dose-response model with extractable numeric PD parameters (Emax, EC50, etc.) for the drug itself. |
| PD | Cassís-Nosthas_2026 | not_relevant | 0 | 0 | The study evaluates the effect of a synbiotic on gut microbiota counts during rifaximin treatment, but does not report any pharmacodynamic or exposure-response relationship for rifaximin itself. |
| PGx | Chojnacki_2021 | not_relevant | 0 | 0 | The study investigates the effect of rifaximin on serotonin pathway metabolites in SIBO patients but does not report any pharmacogenomic effects (gene variants) on the drug's PK or PD parameters. |
| PD | Cottreau_2010 | not_relevant | 2 | 1 | The text is a general review/update on rifaximin's clinical use and pharmacology, lacking specific numeric PD parameters or exposure-response data. |
| PD | Darkoh_2010 | not_relevant | 3 | 2 | The paper reports qualitative improvements in antimicrobial effect and solubility with bile acids but does not provide numeric PD parameters (e.g., MIC, EC50, Emax) or a quantitative concentration-effect curve for rifaximin. |
| PGx | Di_2021 | not_relevant | 0 | 0 | The paper discusses a probiotic strain's resistance to rifaximin and clinical efficacy, but does not report human pharmacogenomic effects on rifaximin PK or PD parameters. |
| popPK | Evstafeva_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 2-octynohydroxamic acid, with rifaximin mentioned only as a background comparator for hepatic encephalopathy treatment. |
| PD | Evstafeva_2024 | not_relevant | 0 | 0 | The paper focuses on a new urease inhibitor (2-octynohydroxamic acid) and only uses rifaximin as a negative control in animal efficacy studies without reporting any pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for rifaximin. |
| popPK | Francis_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rifapentine, not rifaximin (which is only used as an internal standard). |
| PD | Francis_2019 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis of rifapentine, not rifaximin, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Hani_2026 | irrelevant | 0 | 0 | The paper is an antimicrobial stewardship study comparing Defined Daily Dose (DDD) and Days of Therapy (DOT) metrics, not a pharmacokinetic study, and contains no PK parameters for rifaximin. |
| PD | Hani_2026 | not_relevant | 0 | 0 | The paper is an observational study comparing antibiotic stewardship metrics (DDD vs DOT) and does not report any pharmacokinetic, pharmacodynamic, or exposure-response data for rifaximin or any other drug. |
| popPK | Hodnik_2015 | irrelevant | 0 | 0 | The paper focuses on PXR modulators and uses rifaximin only as a positive control for CYP3A4 induction, reporting no pharmacokinetic parameters for rifaximin. |
| PD | Hodnik_2015 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50/IC50) for diethylstilbestrol derivatives acting on PXR, not for rifaximin; rifaximin is only used as a positive control to induce CYP3A4. |
| PGx | Hodnik_2015 | not_relevant | 0 | 0 | The paper reports the discovery of PXR modulators and their effect on CYP3A4 expression, using rifaximin only as a positive control for induction, not as the subject of a pharmacogenomic study. |
| PGx | Hoffman_2011 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (warfarin-rifaximin) mediated by CYP3A4 induction, not a pharmacogenomic effect based on a specific gene variant or genotype. |
| PGx | Huang_2004 | not_relevant | 0 | 0 | The paper discusses EAEC pathogenesis and mentions rifaximin as a treatment, but does not report any pharmacogenomic effects on rifaximin's PK or PD parameters. |
| PD | Kane_2016 | not_relevant | 1 | 0 | The text is a qualitative review of rifaximin's pharmacology and clinical evidence in IBS, containing no numeric PD parameters, exposure-response data, or dose-effect curves. |
| popPK | Menees_2012 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy in IBS, containing no pharmacokinetic parameters or disposition data for rifaximin. |
| popPK | Naidoo_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rifampicin and isoniazid, not rifaximin. |
| PD | Naidoo_2019 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of rifampicin and isoniazid and their relationship to genetic variability, with no mention of rifaximin or any pharmacodynamic (exposure-response) modeling. |
| PD | Princiotto_2024 | not_relevant | 0 | 0 | The paper focuses on adarotene derivatives and only qualitatively mentions rifaximin in a combination context without providing any exposure-response or dose-response data for rifaximin. |
| popPK | Rahman_2024 | irrelevant | 2 | 0 | The study is an in-vitro microphysiological model of placental transfer, not a population PK study, and no quantitative disposition parameters (CL, V, etc.) for rifaximin are provided in the evidence. |
| PD | Ramprasad_2018 | not_relevant | 1 | 0 | The text is a review of gastrointestinal treatments in Parkinson's disease that mentions rifaximin qualitatively but provides no pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| PD | Rivkin_2011 | not_relevant | 1 | 0 | The paper is a clinical review summarizing efficacy outcomes (hazard ratios, response rates) and safety profiles, but it does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Rosette_2019 | not_relevant | 0 | 0 | The paper describes the mechanism of action of rifamycin SV (PXR/NFkB modulation) in cell lines, not the effect of a human gene variant on the PK or PD of rifaximin. |
| PD | Simmons_2018 | not_relevant | 1 | 0 | The paper is a systematic review that qualitatively summarizes PK changes (exposure) and ovulation frequency but does not report or derive numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for rifaximin. |
| popPK | Sládeková_2025 | irrelevant | 0 | 0 | The study focuses on the drug FKK6 in a murine model and does not involve rifaximin or report any pharmacokinetic parameters. |
| PD | Sládeková_2025 | not_relevant | 0 | 0 | The paper studies FKK6, not rifaximin, and reports only qualitative efficacy and safety data without any exposure-response or dose-response modeling. |
| PGx | Sugawara_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of PXR coactivator recruitment using a mutant receptor and does not report pharmacogenomic effects of human gene variants on rifaximin PK or PD parameters. |
| PGx | Trapnell_2007 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between rifaximin and oral contraceptives, not a pharmacogenomic effect of a gene variant on rifaximin's PK/PD. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The paper is a statistical methodology study on sample size calculation for clinical trials and does not report any pharmacokinetic parameters for rifaximin. |
| PD | Yu_2026 | not_relevant | 0 | 0 | The paper is a methodological study on sample size calculation for equivalence trials and does not report any pharmacodynamic or exposure-response data for rifaximin. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper describes the development of an immunoassay (ELISA) for rifaximin detection, reporting analytical parameters like IC50 of the assay, but does not report any pharmacodynamic (exposure-response or dose-response) relationship for the drug's biological effect. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The paper is a case report on PSC with gene mutations (PKLR, UGT1A1) and does not report any pharmacokinetic or pharmacodynamic effects of these variants on rifaximin. |
| PGx | de_2023 | not_relevant | 0 | 0 | The study investigates the mechanism of action of rifaximin in intestinal organoids (ammonia detoxification and PXR activation) and does not report pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | unknown_2010 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | unknown_2010 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract and contains no data, results, or PD parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no study data, pharmacokinetic/pharmacodynamic analysis, or numeric parameters for rifaximin. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a title of a conference abstract collection and contains no data, analysis, or mention of rifaximin pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-22 03:01 UTC</sub>

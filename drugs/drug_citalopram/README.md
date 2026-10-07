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

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| citalopram | parent | 324.392 | C20H21FN2O | DrugBank | [2771](https://pubchem.ncbi.nlm.nih.gov/compound/2771) | Friberg_2006 |
| R,S-citalopram and R,S-desmethylcitalopram (S-desmethylcitalopram (SDCIT)) | metabolite | 310.372 | C19H19FN2O | PubChem | [11255350](https://pubchem.ncbi.nlm.nih.gov/compound/11255350) | Akil_2016, Weisskopf_2020 |
| R-desmethylcitalopram (escitalopram (SCIT)) | metabolite | 324.399 | C20H21FN2O | PubChem | [146570](https://pubchem.ncbi.nlm.nih.gov/compound/146570) | Akil_2016, Weisskopf_2020 |
| S-desmethylcitalopram | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:16 | 4:35 | 1/1/4 | 4/0/0 | 0/0/0 | 261,296/21,932 | ollama / glm-5.3-flash | 7 | 4/3 | 6/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Friberg_2006_reference](drugs/drug_citalopram/Citalopram_Friberg2006_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Friberg LE et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2005.02546.x](https://doi.org/10.1111/j.1365-2125.2005.02546.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q67 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Weisskopf_2020_estimate](drugs/drug_citalopram/Citalopram_Weisskopf2020_estimate.md) | — | parent + metabolite (no model) | 6 | Weisskopf E et al., A population pharmacokinetic model for…, British journal of clinical… (2020) | [10.1111/bcp.14278](https://doi.org/10.1111/bcp.14278) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q67 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Weisskopf_2020_model_for_scit_sdcit_in_plasma](drugs/drug_citalopram/Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma.md) | — | parent + metabolite (no model) | 5 | Weisskopf E et al., A population pharmacokinetic model for…, British journal of clinical… (2020) | [10.1111/bcp.14278](https://doi.org/10.1111/bcp.14278) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q67 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Weisskopf_2020_model_for_scit_sdcit_in_plasma_breast_milk](drugs/drug_citalopram/Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma_brea.md) | — | parent + metabolite (no model) | 5 | Weisskopf E et al., A population pharmacokinetic model for…, British journal of clinical… (2020) | [10.1111/bcp.14278](https://doi.org/10.1111/bcp.14278) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: not captured</sub> | [Weisskopf_2020_reference](drugs/drug_citalopram/Citalopram_Weisskopf2020_reference.md) | — | — (no model) | 0 | Weisskopf E et al., A population pharmacokinetic model for…, British journal of clinical… (2020) | [10.1111/bcp.14278](https://doi.org/10.1111/bcp.14278) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Akil_2016_reference](drugs/drug_citalopram/Citalopram_Akil2016_reference.md) | — | general linear (no model) | 4 (+2 cov.) | Akil A et al., A population pharmacokinetic model for…, Journal of pharmacokinetics… (2016) | [10.1007/s10928-015-9457-6](https://doi.org/10.1007/s10928-015-9457-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bareggi_2004_Y_BOCS](drugs/drug_citalopram/pd_Bareggi_2004_Y_BOCS.md) | Y-BOCS score (maximum change in Y-BOCS score) ← citalopram · direct sigmoid Emax (Hill) effect | — | Bareggi SR et al., Citalopram concentrations and response…, CNS drugs (2004) | [10.2165/00023210-200418050-00004](https://doi.org/10.2165/00023210-200418050-00004) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Friberg_2006_QTci](drugs/drug_citalopram/pd_Friberg_2006_QTci.md) | Heart-rate corrected QT interval ← citalopram · direct linear effect | model (no simulator) | Friberg LE et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2005.02546.x](https://doi.org/10.1111/j.1365-2125.2005.02546.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Isbister_2006_QT](drugs/drug_citalopram/pd_Isbister_2006_QT.md) | QT prolongation (QT,RR combinations above abnormal threshold) ← citalopram · stimulation effect | — | Isbister GK et al., Application of pharmacokinetic-pharmaco…, Intensive care medicine (2006) | [10.1007/s00134-006-0183-9](https://doi.org/10.1007/s00134-006-0183-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mégarbane_2008_QT](drugs/drug_citalopram/pd_M_garbane_2008_QT.md) | QT interval prolongation ← citalopram · direct sigmoid Emax (Hill) effect | — | Mégarbane B et al., Pharmacokinetic/pharmacodynamic modelin…, Expert opinion on drug meta… (2008) | [10.1517/17425255.4.5.569](https://doi.org/10.1517/17425255.4.5.569) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=citalopram) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate, `MAOA` substrate, `MAOB` substrate | DrugBank actor |
| metabolism | liver | `AOX1` substrate, `CYP1A2` inhibitor, `CYP2C19` inhibitor/substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `MAOA` substrate | DrugBank actor |
| metabolism | platelet | `MAOB` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `MAOA` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 75 matched, 20 returned
- **screened:** 5  ·  **relevant:** 3
- **records:** 6  ·  extracted 1  ·  needs_review 3  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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

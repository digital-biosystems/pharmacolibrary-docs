<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;prasugrel&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Prasugrel_Moser2018_pediatric_patients_with_sickle_cell_anem&quot;,&quot;label&quot;:&quot;Moser_2018_pediatric patients with sickle cell anemia&quot;,&quot;href&quot;:&quot;drugs/drug_prasugrel/Prasugrel_Moser2018_pediatric_patients_with_sickle_cell_anem.md&quot;,&quot;status&quot;:&quot;not modelled&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# prasugrel

- **generic name:** prasugrel
- **ATC codes:** `B01AC22`
- **DrugBank:** [DB06209](https://go.drugbank.com/drugs/DB06209)
- **groups:** approved, investigational

## About

**Description.** Prasugrel, a thienopyridine derivative, is a platelet activation and aggregation inhibitor structurally and pharmacologically related to clopidogrel and ticlopidine. Similar to clopidogrel, prasugrel is a prodrug that requires enzymatic transformation in the liver to its active metabolite, R-138727. R-138727 irreversibly binds to P2Y12 type ADP receptors on platelets thus preventing activation of the GPIIb/IIIa receptor complex. As a result, inhibition of ADP-mediated platelet activation and aggregation occurs. Prasugrel was developed by Daiichi Sankyo Co. and is currently marketed in the United States and Canada in cooperation with Eli Lilly and Company for acute coronary syndromes planned for percutaneous coronary intervention (PCI). FDA approved in 2009.

**Indication.** Indicated in combination with acetylsalicylic acid (ASA) to prevent atherothrombotic events in patients with acute coronary syndrome (ACS) who are to be managed with percutaneous coronary intervention (PCI). May be used in patients with unstable angina (UA), non-ST elevation myocardial infarction (NSTEMI), ST-elevation myocardial infarction (STEMI) who are to be managed with PCI. Prasugrel is not recommended in patients 75 years of age or greater, those that weigh<60kg, and patients with a history of stroke or transient ischemic attack due to increased risk of fatal and intracranial bleeding.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 20:56 | 6:12 | 0/0/0 | 0/1/0 | 0/0/0 | 117,080/10,147 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Moser_2018_pediatric patients with sickle cell anemia](drugs/drug_prasugrel/Prasugrel_Moser2018_pediatric_patients_with_sickle_cell_anem.md) | Moser BA et al., Population Pharmacokinetic and Exposure…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0556-y](https://doi.org/10.1007/s40262-017-0556-y) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Kim_2023](drugs/drug_prasugrel/pd_Kim_2023_maximal_platelet_aggregation.md) | Kim MJ et al., Pharmacokinetic and Pharmacodynamic Mod…, Clinical pharmacology in dr… (2023) | [10.1002/cpdd.1172](https://doi.org/10.1002/cpdd.1172) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=prasugrel) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | liver | `CES2` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CES2` substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…rally administered dose is excreted in urine and 27% in the feces, as inactive metabolites…”</sub> | prose |
| excretion | kidney | <sub>“…ximately 68% of the orally administered dose is excreted in urine and 27% in the feces, as…”</sub> | prose |

<sub>Actors without a tissue in the table: P2RY12 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ernest_2008.pdf` | Ernest CS et al., Population pharmacokinetics and pharmac…, Journal of pharmacokinetics… (2008) | popPK | 10 | [10.1007/s10928-008-9103-7](https://doi.org/10.1007/s10928-008-9103-7) | [19023649](https://pubmed.ncbi.nlm.nih.gov/19023649) | The paper is a population PK study of prasugrel, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| `Kim_2023.pdf` | Kim MJ et al., Pharmacokinetic and Pharmacodynamic Mod…, Clinical pharmacology in dr… (2023) | popPK | 10 | [10.1002/cpdd.1172](https://doi.org/10.1002/cpdd.1172) | [36251178](https://pubmed.ncbi.nlm.nih.gov/36251178) | The paper describes a population PK/PD modeling study for prasugrel metabolites, but the specific numeric parameter values are not present in the provided evidence. |
| `Moser_2018.pdf` | Moser BA et al., Population Pharmacokinetic and Exposure…, Clinical pharmacokinetics (2018) | popPK | 10 | [10.1007/s40262-017-0556-y](https://doi.org/10.1007/s40262-017-0556-y) | [28578536](https://pubmed.ncbi.nlm.nih.gov/28578536) | The paper reports a population pharmacokinetic model for prasugrel's active metabolite with explicit numeric values for apparent clearance (172 L/h) and volume of distribution (51.7 L) in the text. |
| `Wrishko_2009.pdf` | Wrishko RE et al., Population pharmacokinetic analyses to…, Journal of clinical pharmac… (2009) | popPK | 10 | [10.1177/0091270009337942](https://doi.org/10.1177/0091270009337942) | [19546250](https://pubmed.ncbi.nlm.nih.gov/19546250) | The paper is a population PK study of prasugrel, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, which only reports relative exposure changes. |

<sub>queue written 2026-09-05T20:50:52.245399+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2024 | irrelevant | 2 | 0 | This is a systematic review that summarizes existing models rather than reporting original quantitative PK parameters for prasugrel, and no specific numeric values for prasugrel are present in the provided evidence. |
| PD | Chen_2024 | not_relevant | 3 | 1 | The paper is a systematic review and simulation study that summarizes existing models but does not present original numeric PD parameters (e.g., Emax, EC50) for prasugrel in the provided text. |
| popPK | Ernest_2008 | relevant | 10 | 0 | The paper is a population PK study of prasugrel, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| popPK | Henrich_2021 | irrelevant | 1 | 0 | The study focuses on the PK/PD of selatogrel, with prasugrel serving only as a comparator agent in simulations, and no quantitative PK parameters for prasugrel are reported. |
| popPK | Hsin_2023 | irrelevant | 2 | 0 | The study focuses on selatogrel PK/PD modeling, and prasugrel is only a comparator drug for which no original quantitative PK parameters (CL, V, etc.) are reported in the text. |
| popPK | Kaul_2016 | irrelevant | 0 | 0 | The paper reports health-related quality of life outcomes, not pharmacokinetic parameters. |
| popPK | Kim_2023 | relevant | 10 | 0 | The paper describes a population PK/PD modeling study for prasugrel metabolites, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Mega_2009 | irrelevant | 2 | 0 | The study focuses on pharmacogenetics and clinical outcomes rather than reporting quantitative population pharmacokinetic parameters (CL, V, ka) for prasugrel. |
| PD | Mega_2009 | not_relevant | 2 | 0 | The paper reports a null finding regarding genetic polymorphisms and prasugrel response, providing no numeric PD parameters (Emax, EC50) or concentration-effect curves. |
| PD | Moser_2018 | not_relevant | 3 | 0 | The paper reports a population PK model and an exposure-response analysis, but explicitly states that no apparent relationship or statistically significant effect was found between prasugrel exposure and VOC event rates, meaning no numeric PD parameters (like Emax or EC50) are reported or derivable. |
| popPK | Riesmeyer_2012 | irrelevant | 2 | 0 | The paper focuses on the relationship between exposure and clinical outcomes (bleeding) rather than reporting quantitative PK parameters like clearance or volume, and no numeric PK values are present in the evidence. |
| popPK | Siller-Matula_2010 | irrelevant | 2 | 1 | The paper is a review that summarizes prasugrel PK properties (half-life, Cmax) but does not report original quantitative disposition parameters like clearance, volume of distribution, or population PK model estimates. |
| PD | Siller-Matula_2010 | not_relevant | 2 | 0 | The paper is a review article summarizing the pharmacological profiles of various antiplatelet drugs, including prasugrel, but does not present original data, specific numeric PD parameters, or extractable concentration-effect curves for prasugrel. |
| popPK | Sun_2024 | irrelevant | 1 | 0 | The study focuses on the design and assessment of new clopidogrel derivatives, using prasugrel only as a structural reference/comparator without reporting quantitative PK parameters for prasugrel itself. |
| PD | Sun_2024 | not_relevant | 1 | 0 | The paper focuses on the design and synthesis of new clopidogrel derivatives and mentions prasugrel only as a structural inspiration, without reporting any specific pharmacodynamic or exposure-response data for prasugrel. |
| popPK | Teng_2012 | irrelevant | 0 | 0 | The paper is a review of ticagrelor, and prasugrel is only mentioned as a comparator without any quantitative pharmacokinetic parameters provided. |
| PD | Teng_2012 | not_relevant | 1 | 0 | The paper is a review of ticagrelor and only qualitatively mentions prasugrel without providing any numeric PD parameters or exposure-response data for it. |
| popPK | Teng_2015 | irrelevant | 1 | 1 | The paper is a review focused on ticagrelor, and prasugrel is only mentioned as a comparator in a summary table without providing original quantitative disposition parameters (CL, V, Q, ka) for prasugrel. |
| PD | Teng_2015 | not_relevant | 2 | 1 | The paper is a review of ticagrelor; while it mentions prasugrel qualitatively and includes a figure of a ticagrelor PD model, it does not report extractable numeric PD parameters for prasugrel. |
| popPK | Valgimigli_2024 | irrelevant | 0 | 0 | The paper is a clinical meta-analysis of antiplatelet therapy outcomes and does not report pharmacokinetic parameters for prasugrel. |
| popPK | Wrishko_2009 | relevant | 10 | 2 | The paper is a population PK study of prasugrel, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, which only reports relative exposure changes. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-05 20:50 UTC</sub>

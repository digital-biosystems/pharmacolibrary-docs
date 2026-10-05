<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;prasugrel&quot;}]"></div>

# prasugrel

- **generic name:** prasugrel
- **ATC codes:** `B01AC22`
- **DrugBank:** [DB06209](https://go.drugbank.com/drugs/DB06209) · **PubChem:** [CID 6918456](https://pubchem.ncbi.nlm.nih.gov/compound/6918456)
- **molar mass:** 373.441 g/mol (C20H20FNO3S) — DrugBank
- **groups:** approved, investigational

## About

Prasugrel is a platelet inhibitor used to prevent blood clots in people with acute coronary syndrome, including myocardial infarction and unstable angina. It is an approved antiplatelet medicine authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416232](https://www.wikidata.org/wiki/Q416232) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| prasugrel | parent | 373.441 | C20H20FNO3S | DrugBank | [6918456](https://pubchem.ncbi.nlm.nih.gov/compound/6918456) | Moser_2018 |
| prasugrel active metabolite | metabolite | 349.42 | C18H20FNO3S | PubChem | [10405534](https://pubchem.ncbi.nlm.nih.gov/compound/10405534) | Moser_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 15:19 | 6:19 | 0/0/1 | 1/1/0 | 0/0/0 | 113,409/14,447 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Moser_2018_reference](drugs/drug_prasugrel/Prasugrel_Moser2018_reference.md) | held back | 1-compartment, oral | 2 | Moser BA et al., Population Pharmacokinetic and Exposure…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0556-y](https://doi.org/10.1007/s40262-017-0556-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ernest_2008_MPA](drugs/drug_prasugrel/pd_Ernest_2008_MPA.md) | maximal platelet aggregation ← prasugrel active metabolite · direct sigmoid Emax (Hill) effect | — | Ernest CS et al., Population pharmacokinetics and pharmac…, Journal of pharmacokinetics… (2008) | [10.1007/s10928-008-9103-7](https://doi.org/10.1007/s10928-008-9103-7) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kim_2023_MPA](drugs/drug_prasugrel/pd_Kim_2023_MPA.md) | maximal platelet aggregation ← R-138727 · target-mediated drug disposition | — | Kim MJ et al., Pharmacokinetic and Pharmacodynamic Mod…, Clinical pharmacology in dr… (2023) | [10.1002/cpdd.1172](https://doi.org/10.1002/cpdd.1172) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=prasugrel) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | liver | `CES2` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CES2` substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: P2RY12 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ernest_2008.pdf` | Ernest CS et al., Population pharmacokinetics and pharmac…, Journal of pharmacokinetics… (2008) | popPK | 10 | [10.1007/s10928-008-9103-7](https://doi.org/10.1007/s10928-008-9103-7) | [19023649](https://pubmed.ncbi.nlm.nih.gov/19023649) | The paper describes a population PK model for prasugrel's active metabolite, but the specific numeric parameter values are not present in the provided abstract text. |
| `Kim_2023.pdf` | Kim MJ et al., Pharmacokinetic and Pharmacodynamic Mod…, Clinical pharmacology in dr… (2023) | popPK | 10 | [10.1002/cpdd.1172](https://doi.org/10.1002/cpdd.1172) | [36251178](https://pubmed.ncbi.nlm.nih.gov/36251178) | The study reports a population PK model for prasugrel metabolites, but the specific numeric parameter values are not present in the provided evidence. |
| `Moser_2018.pdf` | Moser BA et al., Population Pharmacokinetic and Exposure…, Clinical pharmacokinetics (2018) | popPK | 10 | [10.1007/s40262-017-0556-y](https://doi.org/10.1007/s40262-017-0556-y) | [28578536](https://pubmed.ncbi.nlm.nih.gov/28578536) | The paper reports a population pharmacokinetic model for prasugrel's active metabolite with specific numeric values for apparent clearance (172 L/h) and volume of distribution (51.7 L) provided in the abstract. |
| `Wrishko_2009.pdf` | Wrishko RE et al., Population pharmacokinetic analyses to…, Journal of clinical pharmac… (2009) | popPK | 10 | [10.1177/0091270009337942](https://doi.org/10.1177/0091270009337942) | [19546250](https://pubmed.ncbi.nlm.nih.gov/19546250) | The paper describes a population PK model for prasugrel's active metabolite, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only relative exposure changes. |

<sub>queue written 2026-10-05T15:14:19.566955+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2024 | irrelevant | 2 | 0 | This is a systematic review that summarizes and simulates models from other studies, but the specific quantitative PK parameter values for prasugrel are not present in the provided evidence. |
| PD | Chen_2024 | not_relevant | 3 | 1 | The paper is a systematic review and simulation study that summarizes existing models but does not present original numeric PD parameters (e.g., Emax, EC50) for prasugrel in the provided text. |
| popPK | Ernest_2008 | relevant | 10 | 0 | The paper describes a population PK model for prasugrel's active metabolite, but the specific numeric parameter values are not present in the provided abstract text. |
| popPK | Henrich_2021 | irrelevant | 1 | 0 | The study focuses on the PK/PD of selatogrel, with prasugrel serving only as a comparator drug in the interaction model without reporting its own quantitative disposition parameters. |
| popPK | Hsin_2023 | irrelevant | 1 | 0 | The study focuses on selatogrel PK/PD and uses prasugrel only as a comparator in simulations based on published models, without reporting original quantitative PK parameters for prasugrel. |
| popPK | Kaul_2016 | irrelevant | 0 | 0 | The study reports health-related quality of life outcomes, not pharmacokinetic parameters. |
| popPK | Kim_2023 | relevant | 10 | 0 | The study reports a population PK model for prasugrel metabolites, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Mega_2009 | irrelevant | 2 | 0 | The study focuses on pharmacogenetics and clinical outcomes, mentioning PK parameters only qualitatively without providing numeric disposition values. |
| PD | Mega_2009 | not_relevant | 2 | 0 | The paper reports a null finding regarding genetic polymorphisms and prasugrel response, providing no numeric PD parameters (Emax, EC50) or concentration-effect curves. |
| PD | Moser_2018 | not_relevant | 3 | 0 | The paper reports a population PK model and an exposure-response analysis, but explicitly states that no apparent relationship or statistically significant effect was found between prasugrel exposure and VOC event rates, meaning no numeric PD parameters (like Emax or EC50) are reported or derivable. |
| popPK | Riesmeyer_2012 | irrelevant | 2 | 0 | The paper focuses on the relationship between exposure and clinical outcomes (bleeding) rather than reporting quantitative PK parameters (CL, V, ka) for prasugrel. |
| popPK | Siller-Matula_2010 | irrelevant | 2 | 1 | This is a review article that summarizes pharmacokinetic properties of multiple drugs, including prasugrel, but does not present original quantitative population PK parameters (CL, V, Q) for prasugrel, only citing half-life and Cmax from other studies. |
| PD | Siller-Matula_2010 | not_relevant | 2 | 0 | The paper is a review article summarizing the pharmacological profiles of various antiplatelet drugs, including prasugrel, but does not present original data, specific numeric PD parameters, or extractable concentration-effect curves for prasugrel. |
| popPK | Sun_2024 | irrelevant | 0 | 0 | The study focuses on the design and assessment of new clopidogrel derivatives, using prasugrel only as a structural reference/comparator rather than the subject of PK parameter reporting. |
| PD | Sun_2024 | not_relevant | 1 | 0 | The paper focuses on the design and synthesis of new clopidogrel derivatives and mentions prasugrel only as a structural inspiration, without reporting any specific pharmacodynamic or exposure-response data for prasugrel. |
| popPK | Teng_2012 | irrelevant | 0 | 0 | The paper is a review of ticagrelor, and prasugrel is only mentioned as a comparator agent without any quantitative PK parameters reported for it. |
| PD | Teng_2012 | not_relevant | 1 | 0 | The paper is a review of ticagrelor and only qualitatively mentions prasugrel without providing any numeric PD parameters or exposure-response data for it. |
| popPK | Teng_2015 | irrelevant | 1 | 1 | The paper is a review of ticagrelor pharmacokinetics, and prasugrel is only mentioned as a comparator in a summary table without providing original quantitative disposition parameters for prasugrel. |
| PD | Teng_2015 | not_relevant | 2 | 1 | The paper is a review of ticagrelor; while it mentions prasugrel qualitatively and includes a figure of a ticagrelor PD model, it does not report extractable numeric PD parameters for prasugrel. |
| popPK | Valgimigli_2024 | irrelevant | 0 | 0 | This is a clinical meta-analysis of antiplatelet therapy outcomes (efficacy/safety) and does not report pharmacokinetic parameters for prasugrel. |
| popPK | Wrishko_2009 | relevant | 10 | 2 | The paper describes a population PK model for prasugrel's active metabolite, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only relative exposure changes. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 15:14 UTC</sub>
